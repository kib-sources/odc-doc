# make_sign_keys

Функция создания подписи
для поля `sign`
[во всех блоках банкноты](../04-banknote/index.md#блоки-банкноты).

Для подписи необходим
`private_key`,
который в зависимости от обстоятельств может быть
[`mpk`](../06-information-security/keys.md#mpk-mok),
[`bpk`](../06-information-security/keys.md#bpk-bok)
или 
[`spk`](../06-information-security/keys.md#spk-sok).


## Примеры

Пример на языке `Python`
для `sign_algorithm` равным `RSA-4096............`:
```python
SIGN = bytes
HASH = bytes
KEY = str

def make_sign(
    sign_algorithm: str,
    hash_: HASH,
    private_key: KEY,
) -> SIGN:

    assert sign_algorithm == "RSA-4096............"

    key = RSA.importKey(private_key)
    signer = PKCS1_v1_5.new(key)
    hash_object = SHA512.new(data=hash_)
    sign = signer.sign(hash_object)

    return sign
```