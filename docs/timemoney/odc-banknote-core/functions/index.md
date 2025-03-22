---
sidebar_position: 3
---

# Функции


## Функции инициации

В рамках сервера или кошелька:
1. [new-key-pears](../../../project3/functions/new-key-pears.md) -- создание новых ключевых пар


В рамках только сервера:
1. [issuance](../../../project3/functions/issuance.md)
2. TODO функция подписи ключа `sok` 

## Функции получения и передачи денег

1. [receive-banknote-step1](../../../project3/functions/receive-banknote-step1.md)
1. [transfer-banknote](../../../project3/functions/transfer-banknote.md)
1. [receive-banknote-step2](../../../project3/functions/receive-banknote-step2.md)
1. [sign-hash-bank.md](../../../project3/functions/sign-hash-bank.md) -- на стороне сервера доплнительная подпись сервером


а так же валидация всех блоков банкноты:
1. [validation](../../../project3/functions/validation.md)

## Работа с файлами

В отличие от `ODCv3`,
`ODCv2.5` библиотека odc-banknote-core
не работает с файлами.

Данные передаются в виде структур.

Сохранение\загрузка лежит на потребителе библиотеки.


## Безопасность

TODO расписать, что это не проблема 
в джентельменском клубе