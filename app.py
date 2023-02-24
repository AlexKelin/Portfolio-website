from flask import Flask, render_template
import gunicorn


app = Flask(__name__)


@app.route('/')
@app.route('/home')
def home():
    return render_template("index.html")


if __name__ == '__main__':
    from waitress import serve
    serve(app, host="0.0.0.0", port=8080)
