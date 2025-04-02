# BLOCK_HEADER

Заголовок банкноты

```cpp
typedef struct {
    UUID bin;
    UUID bnid;
    UUID owner;
    CURRENCY_CODE code; // {'K', 'I', 'B', '-', 'T', 'M', '.', '.', '.'} ;"KIB-TM..."
    MONEY_AMOUNT amount;

    NAME_ALGORITHM sign_algorithm; // {'R', 'S', 'A', '-', '4', '0', '9', '6', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'}; "RSA-4096............";
    NAME_ALGORITHM hash_algorithm; //{'S', 'H', 'A', '-', '5', '1', '2', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'}; "SHA-512.............";

    SALT salt;

    HASH hash;

    PEM_KEY bok;

    SIGN bank_sign;
} BLOCK_HEADER;
```

:::note
В рамках Time-Money и ODC 2.5 
`code` всегда равен `"KIB-TM..."`.

Значение `MONEY_AMOUNT amount` указано в количестве минут.
:::


## См. также

В рамках ODC v3.0 см тут: [header.md](../../../project3/banknote/header.md)