---
sidebar_position: 1000000
---
# Вне ODC протокола

Распишем задачи, которые НЕ решаются ODC протоколом

## Проверка корректности публичного ключа другого банка

В рамках [Взаимное подтверждение двух центральных банков](confidence.md)
мы ранее писали что вы можете подписать публичный ключ
другого центрального банка
и кошельки ваших клиентов смогут принимать купюры.

Однако как проверить что вы общаетесь действительно
с официальным представителем другого банка?

Данный вопрос не решается ODC протоколом.

TODO расписать общие советы

## Проблема хранение приватных ключей 

Приватные ключи в рамках ODCv3:
1. Приватный master ключ банка
2. Приватный временный ключ банка
3. Приватный ключ кошелька

Как и где их хранить -- не проблема протокола ODC

Очевидно, что master ключ должен храниться
(и дублироваться)
на супернадёжных токенах, 
которые будут тщательно охраняться. 

Временные ключи можно хранить менее тщательно.
В худшем случае вы сделаете новый, подписав его мастер ключом.

Приватный ключ кошелька
должен храниться на доверенном носителе
для обеспечения offline переводов.

Если вам достаточно только online,
ключ кошелька может храниться 
в приложении смартфона
или на флешке. 
Владелец сам заинтересован, 
чтобы ключ не был скомпроментирован.

В случае же offline платежей, 
владельцу доверять нельзя, 
так как может быть нарушена
[атомарность передачи](../../../dc/2-money/index.md#пять-свойств-денег).