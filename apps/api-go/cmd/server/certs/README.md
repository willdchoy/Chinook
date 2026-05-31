### Create development certificates

1. brew install mkcert
2. mkcert -install
3. mkcert localhost 127.0.0.1 ::1 {{INSERT LOCAL IP}}
4. Open a terminal and run mkcert -CAROOT to find where your certificates are stored.
5. Open Keychain Access .Drag and drop the rootCA.pem file into the System or login keychain list on the left.