from parsel import Selector
import requests


response = requests.get("http://books.toscrape.com/")
selector = Selector(text=response.text)
# print(selector)

# O título está no atributo title em um elemento âncora (<a>)
# Dentro de um h3 em elementos que possuem classe product_pod
# Estamos utilizando a::attr(title) para capturar somente o valor
titles = selector.css(".product_pod h3 a::attr(title)").getall()
#  contido no texto do seleto
# print(titles)

# Os preços estão no texto de uma classe price_color
# Que se encontra dentro da classe .product_price
prices = selector.css(".price_color::text").getall()
# print(prices)

# Combinando tudo podemos buscar os produtos
# em em seguida buscar os valores individualmente
for product in selector.css(".product_pod"):
    title = product.css("h3 a::attr(title)").get()
    price = product.css(".price_color::text").get()
    print(title, price)
