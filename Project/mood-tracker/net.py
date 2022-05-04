import torch.nn as nn
import torch


class SentimentRNN(nn.Module):
    def __init__(
        self,
        vocab_size,
        embedding_dim,
        hidden_dim,
        output_dim,
        n_layers,
        bidirectional,
        dropout,
        pad_idx,
        positive_thr=None,
        negative_thr=None,
    ):
        super().__init__()

        self.positive_thr = positive_thr
        self.negative_thr = negative_thr

        self.embedding = nn.Embedding(vocab_size, embedding_dim, padding_idx=pad_idx)

        self.rnn = nn.LSTM(
            embedding_dim,
            hidden_dim,
            num_layers=n_layers,
            bidirectional=bidirectional,
            dropout=dropout,
            batch_first=True,
        )

        self.fc = nn.Linear(hidden_dim * 2, output_dim)

        self.dropout = nn.Dropout(dropout)

    def forward(self, text, text_lengths):
        embedded = self.dropout(self.embedding(text))
        packed_embedded = nn.utils.rnn.pack_padded_sequence(
            embedded, text_lengths.to("cpu"), batch_first=True
        )
        packed_output, (hidden, cell) = self.rnn(packed_embedded)
        hidden = self.dropout(torch.cat((hidden[-2, :, :], hidden[-1, :, :]), dim=1))
        return self.fc(hidden)

    def score_to_mood(self, score):
        mood = "neutral"
        if score > self.positive_thr:
            mood = "positive"
        elif score < self.negative_thr:
            mood = "negative"
        return mood

    def inference(self, text):
        embedded = self.embedding(text)
        packed_output, (hidden, cell) = self.rnn(embedded)
        hidden = torch.cat((hidden[-2, :, :], hidden[-1, :, :]), dim=1)
        score = torch.sigmoid(self.fc(hidden))
        mood = self.score_to_mood(score)
        return mood, score
