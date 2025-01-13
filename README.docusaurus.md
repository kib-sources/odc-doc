# Website


Вначале убедитесь что у вас `22` версия:
```bash
~$ node -v
v22.12.0
```

Если нет -- переключитесь:
```bash
~$ nvm use 22
```

Установка `docusaurus` и окружения:
```bash
npm install
```
далее:
```bash
npm run build
```


Далее см. нужную команду:
```bash
[INFO] Inside that directory, you can run several commands:

  `npm start`
    Starts the development server.

  `npm run build`
    Bundles your website into static files for production.

  `npm run serve`
    Serves the built website locally.

  `npm run deploy`
    Publishes the website to GitHub pages.

We recommend that you begin by typing:

  `cd odc-doc`
  `npm start`

Happy building awesome websites!

```

## Перенос данных и запуск

Поправьте файл `~/.ssh/config`, добавив туда строки:
```
Host odc-doc-server
    HostName <IP>
    User <USER>
    PasswordAuthentication no
    ConnectTimeout 40
```
где вместо `<IP>`
указан ip сервера,
а вместо `<USER>`
указан пользователь.

Создайте в `\home\<USER>` папку `odc-doc`:
```bash
~$ ssh odc-doc-server
>$ cd ~
>$ mkdir odc-doc
```

Если `<USER>` не равен `kib`,
поправьте переменную `$SERVERUSER` в 
[move.sh](move.sh).

Запустите на своём компе:
```bash
~$ ./move.sh
```

Через `tmux` проинсталируйте, 
сбилдите и запустите:
```bash
~$ ssh odc-doc-server
>$ tmux attach -t 0
>> cd ~/odc-doc
>> nvm use 22
>> npm install
>> npm run build
>> npm run serve
```

При первом запуске вместо `tmux attach -t 0`
установите `tmux`