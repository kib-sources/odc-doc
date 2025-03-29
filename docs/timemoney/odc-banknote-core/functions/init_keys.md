# init_keys


```cpp
KEYS_PAIR init_keys(NAME_ALGORITHM alg)
```

Данная функция принимает значение имени алгоритма
`alg`
и генерирует новую пару 
[KEYS_PAIR](../structures/KEYS_PAIR.md).

:::note
В рамках ODC 2.5 
в качестве ключей используется только алгоритм RSA 4096.

Поэтому значение агрумента `alg` должно быть:
```cpp
typedef char NAME_ALGORITHM[20];
NAME_ALGORITHM alg = {'R', 'S', 'A', '-', '4', '0', '9', '6', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'}; "RSA-4096............";
```

:::warning
Завершающий `\0` обязателен!
:::


