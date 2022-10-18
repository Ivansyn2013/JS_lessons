from types import NoneType
import requests
from bs4 import BeautifulSoup as bs
import pandas as pd
import os
from PIL import Image

URL_TEMPLATE = 'https://joyreactor.cc'
r = requests.get(URL_TEMPLATE)
print("\033[31m {}".format('Status of connection:'+str(r.status_code)))
print("\033[0m")

#print(r.text)

soup = bs(r.text, 'html.parser')

images = soup.find_all('div', class_='image')

for row in images:
    img = row.find('img')
    print(img)
    f_tmp = 'https:' + img['src']
    print(img['src'])
    print(f_tmp)

    tmp_test = 'https://img2.reactor.cc/pics/post/full/nakiridayo_-Ninomae-Ina%27nis-Hololive-Virtual-YouTuber-7647387.jpeg'
    with Image.open (requests.get(tmp_test).content) as f:
        f.save('1.jpg')
    break   






