# Customer Churn Prediction System

An end-to-end Machine Learning project that predicts whether a telecom customer is likely to churn.

## 🚀 Project Overview

This project uses Machine Learning to predict customer churn based on customer demographics, services, contract information, and billing details.

The project includes:

- Data preprocessing
- Exploratory Data Analysis (EDA)
- Feature engineering
- Machine Learning model training
- Model comparison
- Hyperparameter tuning
- Feature importance analysis
- FastAPI backend
- Interactive frontend
- Real-time churn prediction

## 🧠 Machine Learning Models

The following models were tested:

- Logistic Regression
- Random Forest Classifier

Random Forest was further optimized using GridSearchCV.

## 📊 Evaluation Metrics

Models were evaluated using:

- Accuracy
- Precision
- Recall
- F1 Score
- ROC-AUC
- Confusion Matrix

## 🏗️ Project Architecture

```text
User
  ↓
Frontend (HTML/CSS/JavaScript)
  ↓
FastAPI Backend
  ↓
Preprocessing Pipeline
  ↓
Random Forest Model
  ↓
Prediction + Churn Probability
  ↓
Frontend

## 🛠️ Technologies Used

### Machine Learning
- Python
- Pandas
- NumPy
- Scikit-learn
- Random Forest
- Logistic Regression
- GridSearchCV

### Backend
- FastAPI
- Uvicorn
- Pydantic

### Frontend
- HTML5
- CSS3
- JavaScript

### Data & Model
- IBM Telco Customer Churn Dataset
- One-Hot Encoding
- Scikit-learn Pipeline
- Joblib

### Development Tools
- Jupyter Notebook
- VS Code
- Git
- GitHub