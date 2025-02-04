---
sidebar_position: 4
---
# Банк-эмитент

Банк-эмитент -- это центральный узел
ODC переводов.

На 
[сервер](server.md)
банка-эмитента
поступают различные запросы
ODCv3 протокола,
для обслуживания различных 
[кошельков](../wallet/index.md).

Банк-эмитент:
1. Создаёт новые кошельки, генерирует (`spk`, `sok`) для доверенной среды кошелька
2. Осуществляет эмиссию новых банкнот
3. Осуществляет дополнительную подпись для online платежей
4. Осуществляет эксчендж банкнот
5. Реализует возможность доступа к онлайн кошелькам своих клиентов
6. Подписывать или отзывает подписи для `mok`-ов сторонних банков.
7. Обнаруживает фальшивомонетчиков и уведомляет остальные кошельки об этом.

## Схема

Схематично банк-эмитент можно представить следующей схемой


```mermaid
---
title: Сервисы банка-эмитента и потребители
---
flowchart TB
    wallet1{{<a href=../wallet/>Кошелёк</a><br>в том числе <a href=../wallet/cash-machine>банкомат</a>}}
    stuff{{Сотрудник}}
    
    subgraph "Online кошельки"
        gateway1[<a href=gateway>Gateway</a>]
        worker1@{ shape: procs, label: "<a href=../wallet/online>online кошелёк</a>"}
    end
    wallet1 --> gateway1
    gateway1 --> worker1
    
    subgraph Кластер процессинга
        gateway2[<a href=gateway>Gateway</a>]
        processing[<a href=server>Сервер</a>]
        subgraph Аудит
            diod[Диод<br/>данных]
            audit[<a href=audit>Система аудита</a>]
        end
        analysis[<a href=analysis>Система анализа</a>]
    end
    wallet1 --> gateway2
    gateway2 --> processing
    worker1 --> gateway2
    
    gateway2 --> diod
    diod --> audit
    processing --> analysis
    analysis --> processing
    
    subgraph "Изолированная зона"
        gateway3[<a href=/docs/project3/architecture/bank/gateway>Gateway</a>]
        keystorage[<a href=key-storage>Ключевое хранилище</a>]
        processing2[<a href=admin>Админ панель</a>]
        diod2[Диод данных]
    end
    
    stuff --> gateway3
    gateway3 --> keystorage
    gateway3 --> processing2
    keystorage -- передача bpk ключей ручным методом --> gateway2 
    processing2 --> gateway3
    
    keystorage --> diod2
    diod2 -- создание нового<br>online кошелька --> worker1 
```

:::note[Замечание]
Базы данных и брокеры сообщений никак не отображены на схеме.

Вы вольны выбирать любые СУБД и брокеры сообщений по своему усмотрению.
:::


Банк-эмитент реализует функционал:
1. Сервер 
2. Система анализа
3. Система аудита
4. Ключевое хранилище
5. Админ панель



### Диод данных

TODO
