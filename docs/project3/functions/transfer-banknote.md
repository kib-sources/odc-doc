# transfer_banknote

Наравне с
[receive_banknote_step1](receive-banknote-step1.md)
и
[receive_banknote_step2](receive-banknote-step2.md)
одна из трёх основных функций
[Кошелька](../architecture/wallet/index.md)
в
[основном алгоритме передачи банкнот](../banknote/broadcast/algorithm.md)

- - - 

Функция проставляет поле `salt`
и вычисляет новый хеш `hash`.

После функция доверенной среды кошелька
[sign_hash_next_block](sign-hash-next-block.md)
подписывает данный блок.

```
sign = sign_hash_next_block(banknote_id, counter, hash)
```

:::note[Обратите внимание]
Поле `hash` для sign_hash_next_block 
берётся из нового блока,
а поле `counter`
из предыдущего блока
:::

В процессе работы, 
пара (`banknote_id`, `counter`) отправителя
была удалена из
[Banknote-Counter словаря](../architecture/wallet/banknote-counter-dict.md).

Таким образом обеспечивается
[атомарность передачи](../../dc/money/index.md#атомарная-операция-передачи), 
то есть повторно вы не можете передать ту же банкноту.

## См. также

1. [основной алгоритм передачи банкноты](../banknote/broadcast/algorithm.md)
2. [receive_banknote_step1](receive-banknote-step1.md)
3. [receive_banknote_step2](receive-banknote-step2.md)


