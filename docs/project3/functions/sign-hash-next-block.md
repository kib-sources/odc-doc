# sign_hash_next_block

Функция
доверенной среды
кошелька.

Синтаксис функции:
```
sign = sign_hash_next_block(
        banknote_id,
        counter,
        hash,
)
```

Где `counter` -- это каунтер 
предпоследнего блока,
а `hash` -- это хеш последнего блока.

Данная функцкия завершает процедуру передачи владения банкнотой.

Шаги функции:
1. Если пара  (`hash`, `banknote_id`) есть в `temp_sign_hash_next_block`, вернуть `sign`. Конец алгоритма.
Иначе очистить `temp_sign_hash_next_block`.
2. Если в [Banknote-Counter словаре](../architecture/wallet/banknote-counter-dict.md) нет пары (`banknote_id`, `counter`) -- то вернуть ошибку. Конец алгоритма.
3. Осуществить подпись хеша `hash`. Получить `sign`
4. Записать (`hash`, `banknote_id`, `sign`) в поле `temp_sign_hash_next_block`.
5. Удалить (`banknote_id`, `counter`) из *Banknote-Counter словаря*.
6. Вернуть `sign`.

:::note[Пояснение про `temp_sign_hash_next_block`]
Если бы не было `temp_sign_hash_next_block`, 
то у нас была бы проблема
"порванных денег".

Например возможна такая ситуация:
после шага 5 и перед 6 устройство выключилось
(например из-за нехватка заряда батареи).

В этом случае мы уже удалили
(`banknote_id`, `counter`) из *Banknote-Counter словаря*,
но не успели передать `sign` наверх.

Чтобы избежать этого, существует 
`temp_sign_hash_next_block`
внутренний блок.

Тогда среда приложения
после вызова
`sign_hash_next_block`
должна сразу же записать
полученный `sign`
в какой-нибудь кэш, 
прежде чем вызвать
`sign_hash_next_block`
уже для другой банкноты.
:::