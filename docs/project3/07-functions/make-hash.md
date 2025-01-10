# make_hash

Функция `make_hash`
создаёт новый хеш от произвольного числа агрументов.

В рамках [обозначений](../designations.md)
данной документации мы пишем `Hash`:
```
Hash(a; b; c; ...)
```

## Примеры

На языке `Python`
для `hash_algorithm` равным `SHA-512.............`:
```python
HASH = bytes

def make_hash(hash_algorithm:str, *args) -> HASH:
    if hash_algorithm != "SHA-512.............":
        raise NotImplementedError(f"Не реализована поддержка хеш-алгоритма '{hash_algorithm}'.")
    bytes_data = b''.join([
        to_odcb_bytes(arg)
        for arg in args
    ])
    h = SHA512.new()
    h.update(bytes_data)
    hash_ = h.digest()
    return hash_
```