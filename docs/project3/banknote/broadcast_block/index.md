---
sidebar_position: 20
---

# Блоки передачи

В рамках ODCv2 был только один блок передачи -- offline.

В рамках ODCv3 каждый кошелёк представляет собой 
и offline хранилище банкнот на устройстве 
и доступ к online хранилищу.

Таким образом существуют офлайн и онлайн транзакции.
Так же предусмотрены ещё две служебные транзакции: 
для переноса денег из offline кошелька в хранилище 
и наоборот, из хранилища в offline кошелёк.

Для удобства введено две буквы: 
* **G** что значит "ground" \ "земля". Offline среда
* **С** что значит "cloud" \ "облако". Online среда.

Таким образом ODCv3 существует четыре блока передачи:
1. [OdcbBlockBroadcastCC](broadcastCC.md) -- online передача
2. [OdcbBlockBroadcastCG](broadcastCG.md) -- передача от облачного хранилища в offline кошелёк
3. [OdcbBlockBroadcastGG](broadcastGG.md) -- offline передача
4. [OdcbBlockBroadcastGC](broadcastGC.md) -- передача от offline кошелька в облачное хранилище