from flask import Flask, render_template

# python3 -m flask run #

app = Flask(__name__)

@app.get("/")
def home():
    return render_template("home.html") 

@app.get("/templates/pedidos.html")
def get_pedidos():
    return render_template("pedidos.html") 

@app.get("/templates/home.html")
def menu():
    return render_template("home.html") 

@app.get("/templates/finalizado.html")
def final():
    return render_template("finalizado.html") 