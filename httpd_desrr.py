# también - prueba
# python3 -m SimpleHTTPServer 8000
import http.server
import socketserver
manej = http.server.SimpleHTTPRequestHandler
PUERTO = 8000

def main():
    srv_ejec()

def srv_ejec():
    with socketserver.TCPServer( ("", PUERTO), manej ) as httpd:
       print( "el servidor está para iniciarse al puerto %d ..."
            % PUERTO )
       httpd.serve_forever()

if __name__ == "__main__":
   main()
