from typing import List, Dict
import pickle
import re

import torch
import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize

nltk.download("stopwords")
nltk.download("punkt")


class TextEncoder:
    def __init__(self, w2v_config: dict):
        """Encodes raw text to embedding indices for model inference.

        Args:
            w2v_config (Dict): Word2Vec config from configs.py

        """
        self.unk_idx = w2v_config["unk_idx"]
        self.word2index = self._load_word2index(w2v_config["word2index_path"])
        self.stopwords = stopwords.words("russian")

    def _load_word2index(self, w2v_path: str) -> dict:
        """Load word2index from pickle file.

        Args:
            w2v_path (str): path of .pickle object that contains dict {word: index}.

        Returns:
            word2index (dict): python dict, where key is word and value is index of embedding.

        """
        with open(w2v_path, "rb") as f:
            word2index = pickle.load(f)
        return word2index

    def base_preprocess(self, text: str) -> str:
        """Base preprocessing of text - lowercase, removing punctuation, etc.

        Args:
            text (str): input text to process.

        Returns:
            text (str): processed text.

        """
        text = text.lower().replace("ё", "е")
        text = re.sub("((www\.[^\s]+)|(https?://[^\s]+))", "", text)
        text = re.sub("@[^\s]+", "", text)
        text = re.sub("[^a-zA-Zа-яА-Я1-9]+", " ", text)
        text = re.sub(" +", " ", text)
        text = text.strip()
        return text

    def encode_text(self, text: str) -> torch.LongTensor:
        """Tokenize and convert each token to corresponding embedding index.

        Args:
            text (str): preprocessed text to numericalize.

        Returns:
            indices (torch.LongTensor): tensor of embedding indices.

        """
        indices = []
        tokens = word_tokenize(text, language="russian")
        for token in tokens:
            if token not in self.stopwords:
                word_index = self.word2index.get(token)
                if word_index is None:
                    word_index = self.unk_idx
                indices.append(word_index)
        return torch.LongTensor([indices])

    def __call__(self, text: str) -> torch.LongTensor:
        """Combine two functions: preprocess and encode.

        Args:
            text (str): raw text to process.

        Returns:
            indices (torch.LongTensor): tensor of embedding indices.

        """

        text = self.base_preprocess(text)
        indices = self.encode_text(text)
        return indices
