---
title: sign_hash0
---
# sign_hash0, sign_hash_bank, ...

Различные функции по подписи хешей:
2. `hash0` -- в рамках функции [receive_banknote_step1](receive-banknote-step1.md)
3. `hash_bank` -- в рамках  [алгоритма подтверждения передачи банкноты банком](../04-banknote/confirmation.md).
3. `hash` -- подпись `hash`, но только в случае передачи от банка-эмитенту кошельку.

:::warning[Замечание]

Для подписи `hash`
между передачей кошелёк-кошелёк
используется функция доверенной среды
[`sign_hash_next_block`](sign-hash-next-block.md),
а не `sign_hash0`!


:::

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


