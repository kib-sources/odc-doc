---
title: sign_hash0
---
# sign_hash0

Функция
доверенной среды
кошелька.

Функция для получения
`hash0` -- в рамках функции [receive_banknote_step1](receive-banknote-step1.md)


## Пример

На языке `Python`'
для `RSA` алгоритма:

```python
HASH = bytes
SIGN = bytes
KEY = str

def sign_hash_bank(
    sign_algorithm: str,
    hash_: HASH,
    private_key: KEY,
    # public_key: Optional[KEY] = None,
) -> SIGN:

    assert sign_algorithm == "RSA-4096............"

    key = RSA.importKey(private_key)
    signer = PKCS1_v1_5.new(key)
    hash_object = SHA512.new(data=hash_)
    sign = signer.sign(hash_object)

    return sign
```


