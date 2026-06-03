from flask import Flask, jsonify
from flask_cors import CORS
import pandas as pd

app = Flask(__name__)
CORS(app)

# Load Excel Dataset
df = pd.read_excel("data/walmart.xlsx")

@app.route("/")
def home():
    return jsonify({
        "message": "RetailIQ AI Backend Running"
    })

@app.route("/dashboard")
def dashboard():

    total_revenue = round(df["Sales"].sum(), 2)
    total_orders = df.shape[0]

    data = {
        "revenue": f"${total_revenue}",
        "orders": total_orders,
        "customers": 845,
        "products": 3210
    }

    return jsonify(data)

@app.route("/sales-forecast")
def sales_forecast():

    monthly_sales = [4000, 4500, 5000, 5500, 6000, 6500]

    months = [[1], [2], [3], [4], [5], [6]]

    from sklearn.linear_model import LinearRegression

    model = LinearRegression()

    model.fit(months, monthly_sales)

    next_month = model.predict([[7]])

    return jsonify({
        "prediction": round(next_month[0], 2)
    })

@app.route("/sales-chart")
def sales_chart():

    sales_data = [
        {"month": "Jan", "sales": 4000},
        {"month": "Feb", "sales": 4500},
        {"month": "Mar", "sales": 5000},
        {"month": "Apr", "sales": 5500},
        {"month": "May", "sales": 6000},
        {"month": "Jun", "sales": 6500},
    ]

    return jsonify(sales_data)

@app.route("/inventory")
def inventory():

    inventory_data = df[[
        "Product Name",
        "Category"
    ]].head(15)

    inventory_list = []

    for index, row in inventory_data.iterrows():

        inventory_list.append({
            "product": row["Product Name"],
            "category": row["Category"],
            "stock": 50 - (index * 2)
        })

    return jsonify(inventory_list)

@app.route("/customers")
def customers():

    customer_data = df[[
        "Customer Name",
        "Sales"
    ]].head(15)

    customer_list = []

    for index, row in customer_data.iterrows():

        customer_list.append({
            "name": row["Customer Name"],
            "orders": index + 1,
            "spent": round(row["Sales"], 2)
        })

    return jsonify(customer_list)

@app.route("/ai-insights")
def get_ai_insights():

    total_sales = round(df["Sales"].sum(), 2)

    top_category = (
        df.groupby("Category")["Sales"]
        .sum()
        .idxmax()
    )

    top_state = (
        df.groupby("State")["Sales"]
        .sum()
        .idxmax()
    )

    total_orders = df["Order ID"].count()

    insights = [
        f"Total revenue generated is ${total_sales}.",
        f"{top_category} is the top performing category.",
        f"{top_state} generated the highest sales.",
        f"Total orders processed are {total_orders}.",
        "Sales trend indicates strong business growth."
    ]

    return jsonify(insights)

if __name__ == "__main__":
    app.run(debug=True)