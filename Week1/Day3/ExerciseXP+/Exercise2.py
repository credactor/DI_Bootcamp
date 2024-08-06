# In this exercise, you will analyze data from a hypothetical online retail company to gain insights into sales trends and customer behavior. The data is represented as a list of dictionaries, where each dictionary contains information about a single purchase.
# Tasks:

# Total Sales Calculation: Calculate the total sales for each product category (i.e., the total revenue generated from each type of product). Use a loop to iterate through the data and a dictionary to store the total sales for each product.

# Customer Spending Profile: Determine the total amount spent by each customer. Use a dictionary to maintain the sum of amounts each customer has spent.

# Sales Data Enhancement:
#     Add a new field to each transaction called “total_price” that represents the total price for that transaction (quantity * price).
#     Use a loop to modify the sales_data list with this new information.

# High-Value Transactions:
#     Using list comprehension, create a list of all transactions where the total price is greater than $500.
#     Sort this list by the total price in descending order.

# Customer Loyalty Identification:
#     Identify any customer who has made more than one purchase, suggesting potential loyalty.
#     Use a dictionary to count purchases per customer, then use a loop or comprehension to identify customers meeting the loyalty criterion.

# Bonus: Insights and Analysis:
#     Calculate the average transaction value for each product category.
#     Identify the most popular product based on the quantity sold.
#     Provide insights into how these analyses could inform the company’s marketing strategies.

sales_data = [
    {"customer_id": 1, "product": "Smartphone", "price": 600, "quantity": 1, "date": "2023-04-03"},
    {"customer_id": 2, "product": "Laptop", "price": 1200, "quantity": 1, "date": "2023-04-04"},
    {"customer_id": 1, "product": "Laptop", "price": 1000, "quantity": 1, "date": "2023-04-05"},
    {"customer_id": 2, "product": "Smartphone", "price": 500, "quantity": 2, "date": "2023-04-06"},
    {"customer_id": 3, "product": "Headphones", "price": 150, "quantity": 4, "date": "2023-04-07"},
    {"customer_id": 3, "product": "Smartphone", "price": 550, "quantity": 1, "date": "2023-04-08"},
    {"customer_id": 1, "product": "Headphones", "price": 100, "quantity": 2, "date": "2023-04-09"},]

# 1. Total Sales Calculation
total_sales = {}
for transaction in sales_data:
    product = transaction["product"]
    total_price = transaction["price"] * transaction["quantity"]
    if product in total_sales:
        total_sales[product] += total_price
    else:
        total_sales[product] = total_price

# 2. Customer Spending Profile
customer_spending = {}
for transaction in sales_data:
    customer_id = transaction["customer_id"]
    total_price = transaction["price"] * transaction["quantity"]
    if customer_id in customer_spending:
        customer_spending[customer_id] += total_price
    else:
        customer_spending[customer_id] = total_price

# 3. Sales Data Enhancement
for transaction in sales_data:
    transaction["total_price"] = transaction["price"] * transaction["quantity"]

# 4. High-Value Transactions
high_value_transactions = [transaction for transaction in sales_data if transaction["total_price"] > 500]
# Sorting without lambda
high_value_transactions.sort(key=lambda x: x["total_price"], reverse=True)

# 5. Customer Loyalty Identification
purchase_counts = {}
for transaction in sales_data:
    customer_id = transaction["customer_id"]
    if customer_id in purchase_counts:
        purchase_counts[customer_id] += 1
    else:
        purchase_counts[customer_id] = 1
loyal_customers = [customer_id for customer_id, count in purchase_counts.items() if count > 1]

print("Total Sales:", total_sales)
print("Customer Spending:", customer_spending)
# print('High value transactions: ',high_value_transactions)
print("Loyal Customers:", loyal_customers)

# Calculating the average transaction value for each product category
average_transaction_value = {}
for product in total_sales.keys():
    total_quantity = sum(transaction["quantity"] for transaction in sales_data if transaction["product"] == product)
    average_transaction_value[product] = total_sales[product] / total_quantity

# Identifying the most popular product based on the quantity sold
product_quantities = {product: sum(transaction["quantity"] for transaction in sales_data if transaction["product"] == product) for product in set(transaction["product"] for transaction in sales_data)}
most_popular_product = max(product_quantities, key=product_quantities.get)

print("Average Transaction Value:", average_transaction_value)
print("Most Popular Product:", most_popular_product)