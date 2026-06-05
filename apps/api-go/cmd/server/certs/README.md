### Create development certificates

1. brew install mkcert
2. mkcert -install
3. mkcert localhost 127.0.0.1 0.0.0.0 ::1 192.168.1.134
4. Open a terminal and run mkcert -CAROOT to find where your certificates are stored.
5. Open Keychain Access.
6. Drag and drop the rootCA.pem file into the System or login keychain list on the left.
