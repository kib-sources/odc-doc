# receive_banknote_step1

Функция
приложения 
кошелька.

Наравне с
[transfer_banknote](transfer-banknote.md)
и
[receive_banknote_step2](receive-banknote-step2.md)
одна из трёх основных функций
[Кошелька](../architecture/wallet/index.md)
в
[основном алгоритме передачи банкнот](../banknote/broadcast/algorithm.md)

- - - 

Данная функция вызывает
[get_counter](get-counter.md),
передавая на вход  `banknote_id`:
```
counter := get_counter(banknote_id)
```
в результате в
[Banknote-Counter словаре](../architecture/wallet/banknote-counter-dict.md)
образуется пара (`banknore_id`, `counter`).

После эта функция присваивает соль
через
[make_salt](make-salt.md)
функцию.

Вычисляет `hash0` через 
[sign_hash0](sign-hash0)
функцию.

Поле `hash0`
подписывается
функцией
[sign_hash0](sign-hash0)
доверенной среды,
получаем подпись `hash0_by_spk_owner`.

:::danger[TODO]
TODO Подумать с Дмитрием Тяжельниковым.

может быть разумно объединить
[`get-counter`](get-counter.md)
и  [`sign_hash0`](sign-hash0)
в рамках одной функции доверенной среды?

Чтобы эта функция и каунтер нарисовала и соль придумала и подписала?
Хуже не будет.


:::

На выходе получаем следующие новые поля в
[`OdcbBlockChain`](../banknote/block-chain.md)
блоке:
1. counter
2. salt0
3. hash0 
4. hash0_by_spk_owner



## См. также

1. [основной алгоритм передачи банкноты](../banknote/broadcast/algorithm.md)
2. [transfer_banknote](transfer-banknote.md)
3. [receive_banknote_step2](receive-banknote-step2.md)
