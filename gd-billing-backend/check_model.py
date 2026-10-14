import pickle

# Load your compiled model
with open('xgboost_retail_model.pkl', 'rb') as f:
    model = pickle.load(f)

print(f"Model Type: {type(model)}\n")

# XGBoost models store feature names differently depending on how they were trained 
# (e.g., using the scikit-learn wrapper vs native XGBoost)
try:
    if hasattr(model, 'feature_names_in_'):
        # Standard scikit-learn API
        print("Expected Features:", list(model.feature_names_in_))
    elif hasattr(model, 'get_booster'):
        # Native XGBoost API
        print("Expected Features:", model.get_booster().feature_names)
    elif hasattr(model, 'feature_names'):
        print("Expected Features:", model.feature_names)
    else:
        print("Feature names attribute not explicitly found. You may need to reference your original Jupyter Notebook/training script.")
except Exception as e:
    print(f"Error extracting features: {e}")