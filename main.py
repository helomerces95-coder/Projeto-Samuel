from flask import Flask #Importanto o Flask

app = Flask(__name__) #Chamando a classe Flask

@app.route('/') #Aqui seria a rota, tipo a url do youtube
def homepage(): 
    return 'Flask' #Aqui é o aque vaia aparecer na tela (segundo o maluco do vídeo)


if __name__ == '__main__': #Aqui serve para verificar se o __name__ está na rodando na página main msm
    app.run(debug=True)   