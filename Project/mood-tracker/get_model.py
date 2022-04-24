import torch

from net import SentimentRNN
from encoder import TextEncoder
from configs import MODEL_CONFIGS, W2V_CONFIGS


def get_sentiment_model(model_name: str):
    """Get sentiment model using only name.

    There is a chance that we will have multiple nets (lightweight, medium and heavy).

    Args:
        model_name (str): model name that can be obtained from net_configs.py

    Returns:
        model (torch.nn.Module): torch model generated from config
        encoder (TextEncoder): text encoder that converts raw text to embedding indices.

    """
    try:
        model_config = MODEL_CONFIGS[model_name]
        w2v_config = W2V_CONFIGS[model_config["w2v_model_name"]]
        encoder = TextEncoder(w2v_config)

        model = SentimentRNN(
            vocab_size=w2v_config.get("vocab_size"),
            embedding_dim=model_config.get("embedding_dim"),
            hidden_dim=model_config.get("hidden_dim"),
            output_dim=model_config.get("output_dim"),
            n_layers=model_config.get("n_layers"),
            bidirectional=model_config.get("bidirectional"),
            dropout=model_config.get("dropout"),
            pad_idx=w2v_config.get("pad_idx"),
            positive_thr=model_config.get("positive_thr"),
            negative_thr=model_config.get("negative_thr"),
        )
        pretrained_weights = model_config.get("weights_path")
        if pretrained_weights is not None:
            state_dict = torch.load(
                pretrained_weights, map_location=torch.device("cpu")
            )
            model.load_state_dict(state_dict)
            print("PRETRAINED WEIGHTS LOADED!")

        model.eval()
        return model, encoder
    except KeyError as e:
        if model_name not in MODEL_CONFIGS.keys():
            print(
                f"There is no {model_name} model. Please select one from below: {list(MODEL_CONFIGS.keys())}"
            )
            return

        w2v_model_name = MODEL_CONFIGS[model_name]["w2v_model_name"]
        if w2v_model_name not in W2V_CONFIGS:
            print(
                f"There is no {w2v_model_name} model. Please select one from below: {list(W2V_CONFIGS.keys())}"
            )
        else:
            print(e)
