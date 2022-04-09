# Todo App

## use

- React
- react-toastify
- TypeScript

## getting started

1. $ `git clone https://github.com/kitamuraDev/react-ts-todo-app.git`
2. $ `cd react-ts-todo-app`
3. $ `yarn`
4. $ `yarn start`

## specification

- Todo アプリ機能要件
  - add
  - edit / no edit （編集できるかできないかの切り替え）
  - delete
- トーストメッセージを出現させるタイミング
  - add
  - delete
  - 空文字が submit されたとき
  - `<script>`が含まれる文字列が submit されたとき（XSS）
- フォームにフォーカスを当てるタイミング
  - 初回レンダリング（useEffect）
  - 削除ボタン押下
