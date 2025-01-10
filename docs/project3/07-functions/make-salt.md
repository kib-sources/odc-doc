# make_salt

Функция `make_salt` создаёт данные 
для поля  `salt` используемая 
[во всех блоках банкноты](../04-banknote/index.md#блоки-банкноты).

Поле `salt` 
используется как 
[криптографическая соль](https://ru.wikipedia.org/wiki/Соль_(криптография))
для хеш-функции.

## Примеры

Пример функции на языке `Python`:
```python
def make_salt():
    RANDOM_ALPHABET = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM'
    return ''.join(random.sample(RANDOM_ALPHABET, 32))
```