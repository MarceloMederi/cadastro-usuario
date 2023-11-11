git clone https://github.com/MarceloMederi/cadastro-usuario

cd cadastro-usuario

docker build -t app . && docker run -d -p 3000:3000 app
