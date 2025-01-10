# new_key_pears

Данная функция 
генерирует две пары ключей:
(`private_key`, `public_key`).

Эти ключи могут выступать
парами (`mpk`, `mok`), 
(`bpk`, `bok`)
или (`spk`, `sok`).

:::warning[Замечание]
Обращаем внимание, 
что открытые ключи `bok` и `sok` 
после генерирования нужно валидировать подписью.
:::

В рамках протокола ODC 
все ключи генерируются на стороне банка-эмитента.

## Примеры

Для `sign_algorithm` равным 
`RSA-4096............`
функция генерирования ключей на языке `Python`
может иметь вид:

```python
KEY = str

def new_key_pears() -> Tuple[KEY, KEY]:
    private_key = RSA.generate(4096)
    public_key = private_key.publickey()

    private_key_str = private_key.exportKey().decode()
    public_key_str = public_key.exportKey().decode()

    return private_key_str, public_key_str
```