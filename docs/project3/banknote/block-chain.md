---
sidebar_position: 20
---
# Блок передачи банкноты

*Блок передачи банкноты*
(`OdcbBlockChain`)
это основной блок цифрового следа банкноты.

Последний блок показывает текущего владельца банкноты.

После вызова функции
[sign_hash_next_block](../functions/sign-hash-next-block.md)
на доверенном носителе, 
банкнота повторно не может быть передана.

Таким образом обеспечивается 
[атомарная операция передачи](../../dc/money/index.md#атомарная-операция-передачи)
банкноты.

## Поля


| Наименование поля                   | Описание                                                                                                           | Пример значения \ замечание                                                                   |
|-------------------------------------|--------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|
| `bank_id`                           | Уникальный идентификатор банка-эмитента                                                                            | `Test bank`                                                                                   |
| `banknote_id`                       | Уникальный UUID банкноты                                                                                           | `280bdff8-a345-4854-a60b-b57251ec4d0e`                                                        |
| `comment`                           | (опциональное) Произвольный комментарий получателя платежа                                                         | Не более 16383 символов Unicode.                                                              |
| `parent_hash`                       | Ссылка на `hash` предыдущего блока                                                                                 |                                                                                               |
| `sok_owner_by_bpk`                  | Подпись `[hash(sok)](bpk)`                                                                                         |                                                                                               |
| `counter`                           | Неуменьшающийся каунтер. См. [Алгоритм передачи банкноты](broadcast/index.md)                                      |                                                                                               |
| `salt0`                             | Соль, генерируемая функцией [receive_banknote_step1](../functions/receive-banknote-step1.md)                    |                                                                                               |
| `hash0`                             | Хеш, вычисляемая функцией [receive_banknote_step1](../functions/receive-banknote-step1.md)                      |                                                                                               |
| `hash0_by_spk_owner`                | Подпись нового владельца, вычисляемая функцией [receive_banknote_step1](../functions/receive-banknote-step1.md) |                                                                                               |
| `salt`                              | Соль блока                                                                                                         |                                                                                               |
| `hash`                              | Основной хеш блока. Совпадает с `parent_hash` со следующим блоком                                                  | в некоторых языках программирования `hash_`                                                   | 
| `hash_by_spk_or_bpk_previous_owner` | Подписанный хеш ключом `spk` прошлого владельца, или ключом `bpk` банка-эмитента (при первой передаче данных)      |
| `salt_bank`                         | соль банка                                                                                                         | (опционально) проставляется банком-эмитентом, при доступе в онлайн для подтверждения передачи |
| `hash_bank`                         | хеш банка-эмитента                                                                                                 | (опционально) проставляется банком-эмитентом, при доступе в онлайн для подтверждения передачи |
| `hash_bank_by_bpk`                  | подпись банка-эмитента                                                                                             | (опционально) проставляется банком-эмитентом, при доступе в онлайн для подтверждения передачи |

:::warning[Замечание]
Обратите внимание,
что `sok_owner_by_bpk`
не содержит подписанный `sok`,
а содержишь подписанный `hash(sok)`.
Это важно, т.к. по цифровому следу невозможно
вычислить те `sok`, 
которые передавались в системе без списка этих `sok`.

Получатель в рамках транзакции передачи получает только 
список последних `sok`, которые участвовали в offline 
платежах.
:::


:::note[Для информации]
Поле `comment`
может быть для информации о покупке.
В частности в ней можно указать параметры выдаваемого чека,
товара,
дату покупки,
ссылку на гарантию
и проч.
:::


### Вычисление hash поля

В блоке `OdcbBlockChain` есть три хеш-поля:

1. `hash0` -- проставляется при инициализации блока новым владельцем
2. `hash` -- основной хеш банкноты. Подписывается  `hash_by_spk_or_bpk_previous_owner` предыдущим владельцем
3. `hash_bank` -- хеш для подписи `hash_bank_by_bpk`. Осуществляется при онлайн-проверке банкноты.