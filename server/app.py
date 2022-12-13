import os
import openai
import requests
from flask import Flask, request
from flask_cors import cross_origin


app = Flask(__name__)
openai.api_key = os.getenv("OPENAI_API_KEY")

@app.route("/")
def hello():
  return "API is working"

@app.route("/create_question", methods=['POST'])
@cross_origin()
def create_question():
  request_body = request.json
  prompt = request_body.get('prompt')

  response = openai.Completion.create(
  model="text-davinci-003",
  prompt=prompt['message'],
  temperature=0.3,
  max_tokens=60,
  top_p=1.0,
  frequency_penalty=0.5,
  presence_penalty=0.0,
  stop=["You:"]
  )
  return response

@app.route("/transcribe_audio")
def process_audio_answer():
  url = "https://whisper.lablab.ai/asr"
  payload={}
  files=[
    ('audio_file',('test1.mp3',open('/Users/james.shi/Desktop/test1.mp3','rb'),'audio/mpeg'))
  ]
  response = requests.request("POST", url, data=payload, files=files)
  return response.text

if __name__ == "__main__":
    app.run()