# receive_banknote_step2

Наравне с
[transfer_banknote](transfer-banknote.md)
и
[receive_banknote_step1](receive-banknote-step1.md)
одна из трёх основных функций
[Кошелька](../architecture/wallet/index.md)
в
[основном алгоритме передачи банкнот](../banknote/broadcast/algorithm.md)

- - - 

Последняя функция, в рамках которой
`получатель`
закрепляет за собой право владение банкнотой.

Никакие функции 
доверенной среды в рамках 
`receive_banknote_step2`
уже не вызываются.

Просто внутри приложения
фиксируется факт передачи владельца банкноты.
Теперь данная банкнота -- ваша.

Вы можете её так же передать в другом взаимодействии.

:::warning[Замечание]
Обратите внимание,
что если вы вызвали
[receive_banknote_step1](receive-banknote-step1.md),
но по каким-либо причинам не получили ответ
(например пропала связь и\или выключилось одно из устройств передачи данных),
то внутри вашего
[Banknote-Counter словаря](../architecture/wallet/banknote-counter-dict.md).
существуют 
"подвешенная"
пара (`banknote_id`, `counter`), 
которую следует удалить.
:::


## См. также

1. [основной алгоритм передачи банкноты](../banknote/broadcast/algorithm.md)
2. [receive_banknote_step1](receive-banknote-step1.md)
3. [transfer_banknote](transfer-banknote.md)


