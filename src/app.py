from flask import Flask, send_from_directory

app = Flask(__name__, static_folder="../static")

# Function to serve HTML files without .html in URL
@app.route("/",defaults={'path':'index'})
@app.route("/<path:path>")
def serve_page(path):
    print(path)
    if '.' in path: return send_from_directory(app.static_folder, f'{path}')
    else: return send_from_directory(app.static_folder, f'{path}.html')

@app.post("/api/v1/login")
def apis(path):
    print(path)

if __name__ == '__main__':
    app.run()
