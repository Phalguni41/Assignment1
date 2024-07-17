from django.shortcuts import render

# Create your views here.
import os
from django.http import JsonResponse
from django.views import View
from groq import Groq
from dotenv import load_dotenv

load_dotenv()

class GroqAPIView(View):
    def get(self, request, *args, **kwargs):
        user_question = request.GET.get('question', 'Explain the importance of fast language models')
        groq_api_key = os.getenv('GROQ_API_KEY')
           
        client = Groq(api_key=groq_api_key)
        chat_completion = client.chat.completions.create(
            messages=[
                {
                   "role": "user",
                   "content": user_question,
                }
               ],
               model="llama3-8b-8192",
           )

        response_content = chat_completion.choices[0].message.content
        return JsonResponse({'response': response_content})
