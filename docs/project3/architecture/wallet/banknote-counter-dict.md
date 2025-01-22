---
sidebar_position: 2
---
# Banknote-Counter словарь


В доверенной среде
содержится массив значений
вида:
1. `banknote_id`
2. `counter`

Содержится в виде словаря
для быстрого поиска по `banknote_id`.

Этот массив показывает
текущие банкноты,
которыми владеет кошелёк.

В рамках функции
[transfer_banknote](../../functions/transfer-banknote.md)
пара (`banknote_id`, `counter`) удалится.


:::warning[Замечание]
Чем больше банкнот в кошельке,
тем больше данный массив.

Таким образом количество одновременно
существующих банкнот на кошельке
ограничено внутренней памятью
*доверенной среды*.
:::

## Схема

Схематично словарь можно представить в виде:

```mermaid
---
title: Banknote-Counter словарь и функции 
---
flowchart TB
     subgraph Banknote-Counter словарь
        records[banknote<sub>1</sub>, counter<sub>1</sub>;<br/>banknote<sub>2</sub>, counter<sub>2</sub>;<br>...    ...   ...<br/>banknote<sub>n</sub>, counter<sub>n</sub>]
     end
     counter[глобальный<br/><a href=/docs/project3/architecture/wallet/#counter>counter</a><br/>кошелька]
     receive-banknote-step1[<a href=/docs/project3/functions/receive-banknote-step1>receive_banknote_step1</a>]
     transfer-banknote[<a href=/docs/project3/functions/transfer-banknote>transfer-banknote</a>]
     get_counter[<a href=/docs/project3/functions/get-counter>get_counter</a>]
     sign_hash_next_block[<a href=/docs/project3/functions/sign-hash-next-block>sign_hash_next_block</a>]        
     burn[<a href=/docs/project3/functions/burn>burn</a>]        
     
     receive-banknote-step1 -- вызов -->  get_counter 
     transfer-banknote -- вызов --> sign_hash_next_block 
     get_counter -- создаёт новую пару --> records
     get_counter -- увеличивает значение<br/>использует это значение для создания counter<sub>i</sub> --> counter
     sign_hash_next_block -- удаляет пару --> records
     burn -- удаляет пару --> records
```


TODO нарисовать схему

## Создание и удаление записи

Новая запись в 
*Banknote-Counter словаре*
создаётся функцией
[get-counter](../../functions/get-counter.md).

Удаляется запись функцией
[sign_hash_next_block](../../functions/sign-hash-next-block.md)
(вызывается из [transfer_banknote](../../functions/transfer-banknote.md).)

:::note[Замечание]

Так же в случае неудачной транзакции
в 
[алгоритме передачи банкноты](../../banknote/broadcast/algorithm.md)
необходимо очистить данные 
функцией [burn](../../functions/burn.md)
:::




TODO нарисовать разлинчые кейсы