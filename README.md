Задача.  Реализовать приложение для упорядочения (каталогизации) электронных книг (электронная библиотека). 
1.	Главная страница (/)

На главной странице пользователю должен быть доступен список электронных книг с названием, автором, обложкой (при наличии) и краткой аннотацией. Список должен отображаться постранично, должна быть доступна сортировка по автору, названию и рейтингу. 
Кроме того, на главной странице должен быть реализован поиск по автору или названию книги.

2.	Страница книги (/{genre}/{author-book-title})

При клике на «книгу» пользователь проваливается на страницу книги. Здесь доступна полная информация по книге – автор, название, год издания, аннотация, жанр, средняя оценка и др. (по желанию)
Кроме того, на странице книги должны отображаться комментарии пользователей: username, дата, текст комментария.

3.	Страница авторизации – (/login)
Для редактирования книг в библиотеке, а также для написания комментариев и проставления рейтинга пользователю необходимо авторизоваться на странице login (ссылка должна быть доступна в шапке страницы).
Страница авторизации содержит два поля – username и password. При вводе некорректных данных выводится информация об ошибке. После успешной авторизации пользователь перенаправляется на главную страницу при этом login в шапке изменяется на {username} и становиться доступна кнопка logout.
После авторизации пользователь имеет возможность оценить книгу по 5 бальной шкале (5 звезд).
На странице книги авторизованный пользователь может оставлять комментарии. Кроме того, если эта книга была загружена авторизованным пользователем, пользователь может редактировать данные в форме (автор, название, год издания, аннотация, жанр.)
Оформление (дизайн) — рекомендуется использовать Bootstrap или Material UI. 
Технологии: 
React, Redux, JavaScript/Typescript


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
