# importação do webdriver, que é o que possibilita a implementação para todos
# os principais navegadores da web

from selenium import webdriver
from selenium.webdriver.common.by import By

# criação de uma instância de navegador utilizando o Firefox
firefox = webdriver.Firefox()

# requisições para essa instância criada utilizando o método `get`


def scrape(url):
    firefox.get(url)
    quote = firefox.find_element(By.CLASS_NAME, "text").get_attribute(
        "innerHTML"
    )
    print(quote)


scrape("http://quotes.toscrape.com/")
