MODEL_CONFIGS = {
    "mt_lstm_v1": {
        "embedding_dim": 200,
        "hidden_dim": 256,
        "output_dim": 1,
        "n_layers": 2,
        "bidirectional": True,
        "dropout": 0.5,
        "w2v_model_name": "w2v_v1",
        "weights_path": "./weights/model.pt",
        "positive_thr": 0.7,
        "negative_thr": 0.25,
    }
}

W2V_CONFIGS = {
    "w2v_v1": {
        "vocab_size": 1027563,
        "pad_idx": 1027561,
        "unk_idx": 1027562,
        "word2index_path": "./w2v/word2index.pickle",
    }
}
