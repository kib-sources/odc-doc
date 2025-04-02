# KEYS_PAIR

```cpp
typedef struct {
    PEM_KEY public;
    PEM_KEY private;
} KEYS_PAIR;


```

Структура, содержащая приватный и публичный ключи.

Сама `PEM_KEY` представляет собой структуру:

```cpp
typedef struct {
    char *pem_key;
    unsigned int len;
    NAME_ALGORITHM alg;
} PEM_KEY;
```

Значения структуры: 
* `pem_key` -- это набор символов  base64 + PEM шапка. Без завершающего нуля
* `len` -- длина `pem_key` 
* `alg` -- название алгоритма с завершающим нулём.


## См. также

* [init_keys](../functions/init_keys.md)