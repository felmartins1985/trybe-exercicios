def verificar_email(email):
    if not email[0].isalpha():
        raise ValueError("O email deve começar com uma letra")
    email_separado = email.split("@")
    # print(email_separado)
    username = email_separado[0]
    dominio = email_separado[1]
    dominio_separado = dominio.split(".")
    website = dominio_separado[0]
    extensao = dominio_separado[1]
    print(email_separado)
    # print(username)
    # print(dominio)
    for letra in username:
        if (
            not letra.isalpha()
            and not letra.isdigit()
            and letra != "_"
            and letra != "-"
        ):
            raise ValueError(
                "O username só pode conter letras, números, _ e _"
            )
    for letra in website:
        if not letra.isalpha() and not letra.isdigit():
            raise ValueError("O dominio só pode conter letras e digitos")
    if len(extensao) > 3:
        raise ValueError("A extensao deve ter 3 caracteres")
    return None


print(verificar_email("felmartins1985@gmail.com"))
