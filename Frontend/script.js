const form = document.getElementById("churnForm");
const result = document.getElementById("result");

form.addEventListener("submit", async function (event) {
    event.preventDefault();

    result.innerHTML = "Predicting...";

    const customerData = {
        gender: document.getElementById("gender").value,
        SeniorCitizen: Number(document.getElementById("SeniorCitizen").value),
        Partner: document.getElementById("Partner").value,
        Dependents: document.getElementById("Dependents").value,
        tenure: Number(document.getElementById("tenure").value),
        PhoneService: document.getElementById("PhoneService").value,
        MultipleLines: document.getElementById("MultipleLines").value,
        InternetService: document.getElementById("InternetService").value,
        OnlineSecurity: document.getElementById("OnlineSecurity").value,
        OnlineBackup: document.getElementById("OnlineBackup").value,
        DeviceProtection: document.getElementById("DeviceProtection").value,
        TechSupport: document.getElementById("TechSupport").value,
        StreamingTV: document.getElementById("StreamingTV").value,
        StreamingMovies: document.getElementById("StreamingMovies").value,
        Contract: document.getElementById("Contract").value,
        PaperlessBilling: document.getElementById("PaperlessBilling").value,
        PaymentMethod: document.getElementById("PaymentMethod").value,
        MonthlyCharges: Number(document.getElementById("MonthlyCharges").value),
        TotalCharges: Number(document.getElementById("TotalCharges").value)
    };

    try {
        const response = await fetch("http://127.0.0.1:8000/predict", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(customerData)
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.detail || "Prediction failed");
        }

        const probability = data.churn_probability;

const riskClass = data.prediction === "Churn"
    ? "high-risk"
    : "low-risk";

result.innerHTML = `
    <div class="result-card ${riskClass}">
        <div class="result-title">
            ${data.prediction === "Churn"
                ? " CHURN PREDICTED"
                : " LOW CHURN RISK"}
        </div>

        <div class="probability">
            ${probability}%
        </div>

        <div class="probability-label">
            Churn Probability
        </div>

        <div class="progress-container">
            <div class="progress-bar" style="width: ${probability}%"></div>
        </div>
    </div>
`;



    } catch (error) {
        result.innerHTML = `
            <div> Error</div>
            <div>${error.message}</div>
        `;
    }
});