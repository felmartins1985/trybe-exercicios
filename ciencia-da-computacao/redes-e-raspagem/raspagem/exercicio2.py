import requests

response = requests.get("https://api.github.com/users")
users_json = response.json()
# print(users_json)

print(users_json[0])
for user in users_json:
    print(user["login"])
    print(user["url"])
