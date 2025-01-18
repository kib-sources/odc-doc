# get_counter

Функция 
доверенной среды
кошелька.

Данная фунцкия принимает на входе 
`banknote_id`
и возвращает `counter`.

Внутри функция делает следующее:
1. Если в [Banknote-Counter словаре](../architecture/wallet/banknote-counter-dict.md) есть `banknote_id`, то возвращает `counter`
2. Иначе [внутренний `counter`](../architecture/wallet/index.md#counter) увеличивается на число от 1 до [`COUNTER_INCREMENT_MAX`](#counter_increment_max).
3. Определяет создаёт пару (`banknote_id`, `counter`) в *Banknote-counter словаре*.
4. Возвращает `counter`


## COUNTER_INCREMENT_MAX

Специфическая константа максимального увеличения 
внутреннего `counter` поля.

Не может быть меньше 1.

Таким образом поле `counter`
никогда не повторяется на выходе
`get_counter` функции.