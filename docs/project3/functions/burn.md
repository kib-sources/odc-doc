# burn

Функция
доверенной среды
кошелька.

В отличие от 
[sign-hash-next-block](sign-hash-next-block.md)
данная функция 
просто сжигает пару
(`banknote_id`, `counter`).

Синтаксис функции:
```
burn(banknote_id)
```

Данная функция должна быть вызвана
в случае ошибки связи
в 
[алгоритме передачи банкноты](../banknote/broadcast/algorithm.md).
