from flask import Flask, render_template, redirect, url_for, request

app = Flask(__name__)


@app.route('/')
def hello_world():
    return render_template("BaseTemplate.html")


@app.route('/products')
def products():
    return render_template("Products.html")


@app.route('/contact')
def contact():
    return render_template("Contact.html")


@app.route('/stores')
def stores():
    return render_template("Stores.html")


@app.route('/cart')
def cart():
    return render_template("cart.html")


@app.route('/login', methods=['GET', 'POST'])
def login():
    global k
    k=0
    error = None
    if request.method == 'POST':
        if request.form['username'] != 'admin' or request.form['password'] != 'admin':
            error = 'Invalid Credentials. Please try again.'
        else:
            k=1
            return redirect(url_for('products'))
    return render_template('login.html', error=error)




if __name__ == '__main__':
    app.run()
