---
sidebar_position: 3
---
# Сервер

Серверная часть используется для:
1. администрирования
   1. Создание новых кошельков
   2. Эмиссия новых денег
   3. Блокировка кошельков
   4. Блокировка денег
2. процессинга
   1. подпись банка и сокращение блокчейна
   2. эксчендж
3. доступ к онлайн-кошелькам
4. мониторнинг и анализ

## Три сервера

Для работы ODC 2.5 протокола требуются 
**три** 
независимых сервера.


```mermaid
---
title: Взаимодействие серверов
---
flowchart LR
    user1([Администратор<br/>№1])
    user2([Aдминистратор<br/>№2])
    user3([Администратор<br/>№3])
    subgraph server1[Сервер №1]
        admin1[admin]
        other1[...]
        api1[api]
        postgre1[(PostgreSQL <br/> master)]
    end
    subgraph server2[Сервер №2]
        admin2[admin]
        other2[...]
        api2[api]
        postgre2[(PostgreSQL <br> slave)]
    end
    subgraph server3[Сервер №3]
        admin3[admin]
        other3[...]
        api3[api]
        postgre3[(PostgreSQL <br> slave)]
    end
    user1 -- ssh --> admin1
    user2 -- ssh --> admin2
    user3 -- ssh --> admin3
    api1 <-- HTTPS --> api2
    api2 <-- HTTPS --> api3
    api3 <-- HTTPS --> api1
    postgre1 <--> postgre2
    postgre1 <--> postgre3
```

Каждый из серверов имеет свою локальную базу данных
PostgreSQL,
одна из которых является 
`master`,
другие 
`slave`

В случае рассинхронизации серверов
(по команде в случае подозрения компрометации)
все БД становятся `master`.

