
# odc-banknote-lib-python-mock

GitHub: https://github.com/kib-sources/odc-banknote-lib-python-mock

Это mock файл
для инициации новых банкнот, 
новых кошельков,
передачу данных между банком-эмитентом и кошельком,
кошельком и кошельком (offline передача).

Внутри данного проекта 
нет инициации самих `(bpk, bok)`
ключей.

Так же нет многих других
[user case-ов](../02-potential/05-user-cases/index.md).


:::warning[Замечание]

Поэтому данный фреймворк относиться к реализации
`ODCv2` а не `ODCv3` протоколу.

Однако функционал корректен для `ODCv3`,
за исключением форматов полей в сохраняемом
[*.odbc файле](../04-banknote/odbc-file.md).

:::

У языка Python
быстрый порог входа и мы уверены, что 
каждый программист разберёться в это коде

## Классы


### SmartCard

Класс `SmartCard`
реализует функционал доверенной среды.
Внутри данного класса
храниться ключ 
`spk`, каунтер `counter` и 
[Banknote-Counter словарь](../03-architecture/wallet/banknote-counter-dict.md)

:::warning[Замечание]

Внутри кода нет доверенной среды.
Класс `class SmartCard`, 
реализующий функционал смарт-карты
написан на чистом Python-е

:::

Классом `SmartCard`
реализованы функции:
1. [sign_hash_next_block](../07-functions/sign-hash-next-block.md)
1. [sign_hash0](../07-functions/sign-hash.md)
1. [get_counter](../07-functions/get-counter.md)

### ApplicationWallet

Функционал приложения-кошелька
реализует класс `ApplicationWallet`.
На нем реализованы
функции:
1. [receive-banknote-step1](../07-functions/receive-banknote-step1.md)
1. [transfer-banknote](../07-functions/transfer-banknote.md)
1. [receive-banknote-step2](../07-functions/receive-banknote-step2.md)


## Тестовые сценарии

В рамках 
`odc-banknote-lib-python-mock`
предусмотренны тестовые сценарии

1. [~/tests/init_banknote.py](https://github.com/kib-sources/odc-banknote-lib-python-mock/blob/master/tests/init_banknote.py) -- тест инициации банкноты.
2. [~/tests/send_banknote_to_first_wallet.py](https://github.com/kib-sources/odc-banknote-lib-python-mock/blob/master/tests/init_wallets.py) -- тестовая функция создания банкнот.
3. [~/tests/transfer_test.py](https://github.com/kib-sources/odc-banknote-lib-python-mock/blob/master/tests/transfer_test.py) -- перенос денег бакн-кошелёк, кошелёк-кошелёк.
