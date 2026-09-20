from fastapi import FastAPI
from pydantic import BaseModel
import joblib
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

model = joblib.load("churn_model.pkl")


class CustomerData(BaseModel):
    gender: str
    SeniorCitizen: int
    Partner: str
    Dependents: str
    tenure: int
    PhoneService: str
    MultipleLines: str
    InternetService: str
    OnlineSecurity: str
    OnlineBackup: str
    DeviceProtection: str
    TechSupport: str
    StreamingTV: str
    StreamingMovies: str
    Contract: str
    PaperlessBilling: str
    PaymentMethod: str
    MonthlyCharges: float
    TotalCharges: float


@app.get("/")
def home():
    return {"message": "Customer Churn API is running!"}


@app.post("/predict")
def predict(data: CustomerData):

    customer = [[
        data.gender,
        data.SeniorCitizen,
        data.Partner,
        data.Dependents,
        data.tenure,
        data.PhoneService,
        data.MultipleLines,
        data.InternetService,
        data.OnlineSecurity,
        data.OnlineBackup,
        data.DeviceProtection,
        data.TechSupport,
        data.StreamingTV,
        data.StreamingMovies,
        data.Contract,
        data.PaperlessBilling,
        data.PaymentMethod,
        data.MonthlyCharges,
        data.TotalCharges
    ]]

    import pandas as pd

    customer_df = pd.DataFrame(
        customer,
        columns=[
            "gender",
            "SeniorCitizen",
            "Partner",
            "Dependents",
            "tenure",
            "PhoneService",
            "MultipleLines",
            "InternetService",
            "OnlineSecurity",
            "OnlineBackup",
            "DeviceProtection",
            "TechSupport",
            "StreamingTV",
            "StreamingMovies",
            "Contract",
            "PaperlessBilling",
            "PaymentMethod",
            "MonthlyCharges",
            "TotalCharges"
        ]
    )

    prediction = model.predict(customer_df)[0]
    probability = model.predict_proba(customer_df)[0][1]

    return {
        "prediction": "Churn" if prediction == 1 else "No Churn",
        "churn_probability": round(probability * 100, 2)
    }