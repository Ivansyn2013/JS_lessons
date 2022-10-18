from email import header
from types import NoneType
import requests
from bs4 import BeautifulSoup as bs
import pandas as pd
import os
from PIL import Image



#from macpath import basename

headers = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS x 10_10_1) AppleWebkit/537.36) (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36'}

URL_TEMPLATE = 'https://joyreactor.cc'
r = requests.get(URL_TEMPLATE, headers=headers)
print("\033[31m {}".format('Status of connection:'+str(r.status_code)))
print("\033[0m")


#print(r.text)

#soup = bs(r.text, 'html.parser')

#images = soup.find_all('div', class_='image')

not_valid_chars = ['/','%',':']

soup = bs(r.content, 'lxml')
img = soup.find('div', {'class':'image'}) #ищем элемент
child_img = img.findChild('img') #ищем дочерний элемент
link = 'https:'+child_img['src'] #  в атрибутах объекта лежит словать, к которому и обращаемся
print('link for image: {}'.format(link))

# замена символов строки через транслате и словарь 
file_name = link[-20:-14].translate(str.maketrans({ord(x):'' for x in not_valid_chars}))

print ('./images/{}.png'.format(file_name))

with open ('./images/{}.png'.format(file_name), 'wb') as f:
    f.write(requests.get(link).content)




