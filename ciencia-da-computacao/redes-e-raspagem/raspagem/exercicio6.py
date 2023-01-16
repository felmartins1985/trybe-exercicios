from pymongo import MongoClient


category = input("Escolha uma categoria: ")
with MongoClient() as client:
    db = client.local
    for book in db.books.find({"categories": category}, projection=["title"]):
        print(book["title"])
