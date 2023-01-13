# importação do webdriver, que é o que possibilita a implementação para todos
# os principais navegadores da web

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.firefox.options import Options

options = Options()
options.add_argument("--headless")
# criação de uma instância de navegador utilizando o Firefox
firefox = webdriver.Firefox(options=options)

# requisições para essa instância criada utilizando o método `get`


def scrape(url):
    firefox.get(url)
    quotes = firefox.find_elements(By.TAG_NAME, "p")

    for quote in quotes:
        print(quote.text)


# porquê não funciona com o get_attribute("innerHTML")?
scrape(
    "https://www.wikimetal.com.br/scream-for-me-wikibrother-retrospectiva-2022-o-que-vem-em-2023/"
)
