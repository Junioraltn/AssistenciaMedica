## 🗂️ API Rest para Assitencia Médica

## 📝 Descrição do Projeto

Este projeto consiste em uma aplicação para a partir de dados de triagem fornecer informações precisas sobre as condições do paciente, além de um parecer prévio de um IA para fornecer um ponto de partida a um médico. O intuito é otimizar o tempo no processo de triagem e padroniza os dados e contextos para serem analisados pelo médico.

### Requisitos:
> Este script deve ser executado em um ambiente de notebook Jupyter!

| Packages  | Necessary | Description|
|-----------|--------------------|--------------------|
| google-generativeai   |   Chave de API  |Oferece acesso a modelos de IA generativa|
| flask  |   -    |Utilizado para criar a APIs RESTful|
|flask-cors | - |Para lidar com problemas de CORS|
| pyngrok |  Chave de Autenticação |Permite expor um servidor local para a internet |

* > A **chave de API** é uma string única que identifica o projeto e permite o acesso aos serviços do Google Cloud ou Ngrok.

* > O **modelo de linguagem generativa** é uma rede neural treinada para gerar texto de forma autônoma, com base em padrões aprendidos a partir de grandes volumes de dados textuais.

* > A **chave de autenticação** permite ao ngrok criar túneis seguros para aplicações web. Ele é gerado quando ao se registrar no ngrok.


#### Como Instalar:

~~~python
!pip install -q google-generativeai flask pyngrok flask-cors
~~~~

### 🛠️ Funcionalidades:

#### Bibliotecas usadas:

##### *Importação da biblioteca generativa do Google*
~~~python
import google.generativeai as genai
~~~~
##### *Importação de módulos do Google Colab para manipulação de dados*
~~~python
from google.colab import userdata, output
~~~~
* **Userdata** permite gerenciar dados do usuário;
* **Output** ajuda a controlar a saída de dados;

#### *Importação de módulos do Flask para criar uma API web*
~~~python
from flask import Flask, request, jsonify
~~~~
* **Request** é um módulo do Flask que permite manipular requisições HTTP
* **jsonify** é uma função do Flask que converte dados Python em formato JSON, facilitando a comunicação entre o servidor e o cliente
#### *Importação de módulos do Flask-CORS para lidar com problemas de CORS*
~~~python
from flask_cors import CORS
~~~~
* **CORS (Cross-Origin Resource Sharing)** é um mecanismo de segurança que permite que recursos de uma origem sejam acessados por outra origem. Neste caso, permitir que a aplicação web interaja com  a API em um domínio diferente da local.

#### *Importação do módulo ngrok*
~~~python
from pyngrok import ngrok
~~~~
* **Ngrok** será usado para criar um túnel seguro para aplicações web

#### *Importação de módulos do Python para manipulação de arquivos e diretórios*
~~~python
import os
import json
~~~
* Os módulos **os** e **json** são bibliotecas padrão do Python que fornecem funcionalidades para manipulação de arquivos e diretórios, além de trabalhar com dados em formato JSON.

#### Etapas da Aplicação:

1.  **Primeira parte:** descrição
2. **Final**: Para encerrar o Flask app e o túnel ngrok, você pode usar o seguinte comando:
~~~python
!pkill -f flask
~~~~

### 🫡 Contribuições:

Contribuições são bem-vindas! Se você encontrar algum bug, tiver sugestões de melhoria, ou quiser propor novas funcionalidades para o script, por favor, abra um "issue" neste repositório ou envie um "pull request" com suas alterações.

### 🔓 Licença:

Este projeto está licenciado sob a licença Apache 2.0.