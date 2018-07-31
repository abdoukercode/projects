import urllib
import requests

main_api = 'https://maps.googleapis.com/maps/api/geocode/json?address='

address = 'cky'

url = main_api + address
json_data= requests.get(url)

print(type(json_data))

