# Тестовое задание для компании STARPETS.GG

установка зависимостей:
```
npm install
```
запуск проекта:
```
npm run dev
```
Реализовано с помощью библиотеки Vue3 + Typescript.<br/>
В качестве стейт менеджера используется Pinia<br/>
UI библиотека - PrimeVue<br/>

<details>

<summary>Описание тестового задания</summary>

## Задание: SPA для конвертирования валют

Написать SPA для конвертирования валют. В приложении должен быть хедер и 2 страницы:

В хедере должны быть ссылки на 2 страницы “Главная” (/) и “Конвертация” (/convert) и Dropdown с выбором основной валюты сайта.
На главной странице должны отображаться курсы валют по отношению к основной валюте сайта, если основная валюта RUB, то пользователь видит, что 1 USD = 91.45 RUB, 1 EUR = 101.74 RUB.
На странице конвертации должна быть форма, состоящая из 2 строк, в каждой строке должен быть Dropdown с выбором валюты и числовой Input. В каждом Dropdown должна, по умолчанию, быть выбрана 1 из валют. При изменении, в любом из двух Input, значения, автоматом конвертировать и изменять в другом Input значение. Например, если в верхнем Dropdown выбрана валюта RUB, а в нижнем USD, пользователь вводить значений 1000 в верхний Input, то в нижнем Input, должно обновится значение на 10.94. Все значение при переводе, округлять до 2 знаков. Как референс, можно использовать конвертацию валют в Google.
Примечание:
Курсы валют можете получать с этого API GET https://status.neuralgeneration.com/api/currency, либо можете использовать любое открытое API из интернета.
Для реализации приложения использовать фреймворк Vue3 и любые библиотеки, которые вы посчитаете нужными.
На сайт добавить поддержку 3 валют USD, EUR, RUB.
Дизайн остаётся на ваше усмотрение, приветствуется разделение на компоненты и налаживание хороших связей между ними.
Будет плюсом добавление проверок в Input и отображение ошибок, например, когда человек вводит текстовые значения.

</details>
