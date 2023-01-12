from parsel import Selector
import requests

url_base = "http://books.toscrape.com/catalogue/"
response = requests.get(
    "http://books.toscrape.com/catalogue/the-grand-design_405/index.html"
)
selector = Selector(text=response.text)

title = selector.css("h1::text").get()
# print(title)
price = selector.css(".price_color::text").re_first(r"\d+\.\d{2}")

# print(price)
description = selector.css("#product_description ~ p::text").get()
suffix = "...more"
if description.endswith(suffix):
    description = description[: -len(suffix)]
# print(description)

url_image = selector.css(".thumbnail img::attr(src)").get()
url_total = url_base + url_image
# print(url_total)

print(title, price, description, url_total, sep=",")
