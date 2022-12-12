import os
import openai
from dotenv import load_dotenv

load_dotenv()

openai.api_key = os.getenv('OPENAI_API_KEY')


response = openai.Completion.create(
  model="text-davinci-003",
  prompt="What is the best way to answer the interview question of 'Tell me a bit about yourself'",
  temperature=0.3,
  max_tokens=60,
  top_p=1.0,
  frequency_penalty=0.5,
  presence_penalty=0.0,
  stop=["You:"]
)

print(response)