import http.server
import socketserver

PORT = 5500
DIRECTORY = "/Users/EPARDOSAENZ/Documents/Proyect Web/Website KPEMM"

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    httpd.serve_forever()
