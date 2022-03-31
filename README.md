# React x TypeScript starterkit

このリポジトリは、React と TypeScript のアプリ開発のスターターキットを提供するリポジトリです。以下の技術で構成されています。

- React
- TypeScript
- ESLint（Airbnb）
- Prettier

## ■ 目次

1. 主要ソフトのバージョン
2. 環境構築手順（備忘録）
3. アプリの起動方法
4. よく使うコマンドリスト
5. ESLint を黙らせる方法
6. .eslintrc.js の解説

<br />

## ■ 主要ソフトのバージョン

- Node.js（16.10.0）
- npm（7.24.0）
- yarn（1.22.5）
- React（17.0.2）
- TypeScript（4.4.3）
- ESLint（@7.20.0）
- Prettier（@2.4.1）

<br />

## ■ 環境構築手順（備忘録）

1. $ `npx create-react-app react-typescript-starterkit --template typescript`
2. $ tsconfig.json をカスタマイズ
3. $ `yarn create @eslint/config`
   - How would you like to use ESLint? -> <b>To check syntax, find problems, and enforce code style</b>
   - What type of modules does your project use? -> <b>JavaScript Modules（Import / export）</b>
   - Which framework does your project use? -> <b>React</b>
   - Does your project use TypeScript? -> <b>Yes</b>
   - Where does your code run? -> <b>Browser</b>
   - How would you like to define a style for your project? -> <b>Use a popular style guide</b>
   - Which style guide do you want to follow? -> <b>Airbnb</b>
   - What format do you want your config file to be in? -> <b>JavaScript</b>
   - Would you like to install them now with npm? -> <b>No</b>
4. eslint の拡張ルールセットやプラグインをインストール

```
$ yarn add -D eslint-plugin-react @typescript-eslint/eslint-plugin eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react-hooks @typescript-eslint/parser
$ npx typesync
$ yarn install or yarn
```

5. ESLint のカスタマイズ（.eslintrc.js）
6. [ tsconfig.eslint.json ]と[ .eslintignore ]を作成
7. VScode ｜ ESLint プラグインをインストール && VScode/settings.json の編集

```
<!-- ファイル保存時にVScode内蔵のフォーマッタではなくESLintの自動整形を走らせるようにする -->
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true,
},
"editor.formatOnSave": false,
"eslint.packageManager": "yarn",
<!-- TypeScriptのバージョンをプロジェクト側に強制 -->
"typescript.tsdk": "./node_modules/typescript/lib",
```

8. Prettier の関連パッケージをインストール

```
$ yarn add -D prettier eslint-config-prettier
$ npx typesync
$ yarn install or yarn
```

9. .eslintrc.js を編集

```
<!-- extendsの最後にprettierを追記 -->
  "plugin:@typescript-eslint/recommended-requiring-type-checking",
+ "prettier",
```

10. .prettierrc を作成

```
{
  "singleQuote": true,
  "jsxSingleQuote": true,
  "trailingComma": "all"
}
```

11. ESLint と Prettier のルールがコンフリクトしていないか調べる

```
$ npx eslint-config-prettier 'src/**/*.{js,jsx,ts,tsx}
```

12. VScode ｜ Prettier プラグインをインストール && VScode/settings.json の編集

```
"editor.defaultFormatter": "esbenp.prettier-vscode",
"[markdown]": {
  "editor.formatOnSave": true
},
"[graphql]": {
  "editor.formatOnSave": true
},
"[javascript]": {
  "editor.formatOnSave": true
},
"[javascriptreact]": {
  "editor.formatOnSave": true
},
"[json]": {
  "editor.formatOnSave": true
},
"[typescript]": {
  "editor.formatOnSave": true
},
"[typescriptreact]": {
  "editor.formatOnSave": true
},
```

<br />

## ■ アプリの起動方法

1. $ git clone https://github.com/kitamuraDev/react-typescript-starterkit.git
2. $ cd react-typescript-starterkit
3. $ yarn install or yarn
4. $ yarn start

<br />

# Tip's

## ■ よく使うコマンドリスト

- $ `yarn list <パッケージ名>` // インストール済みのパッケージの情報を確認
- $ `yarn upgrade-interactive --latest` // インタラクティブにアップグレードするパッケージを選択
- $ `npx typesync` // package.json をチェックして、不足している TypeScript の型定義ファイルを追加
- $ `yarn fix` // linter と formater を走らせる（ESLint や Prettier を"--fix"モードで走らせると、簡単なルール違反は勝手に修正してくれるが、直しきれないものに関してはエラーで教えてくれる）

<br />

## ■ ESLint を黙らせる方法

- eslint-disable // そのコメントからファイルが終わるまですべてのルールのチェックを無効化
- eslint-disable <ルール名> // そのコメントからファイルが終わるまで指定したルールのチェックを無効化
- eslint-disable-line // 同一行のルールを無効化
- eslint-disable-next-line // 次の行のルールを無効化

<br />

## ■ .eslintrc.js の解説

1. extends
   - 共有設定の定義場所
   - 共有設定間で設定ルールの値が衝突したら後に記述されたルールが先に記述されたルールを上書きする
   - 並びは順不同ではないため、並び替えは慎重に
2. parser
   - ESLint のパーサを定義
3. parserOptions
   - ESLint のパーサへ渡すオプションを定義する場所
   - project は、プロジェクトの TypeScript のコンパイル設定ファイルのパス（別ファイル（tsconfig.eslint.json）を作る理由は、パーサが npm パッケージのファイルまでパースしてしまって、VS Code と連携させたときのパフォーマンスがガタ落ちしたり、新規ファイルのパースに失敗してしまうため）
4. plugins
   - インストール済みのプラグインを組み込む
   - ESLint の組み込みルール以外に独自のルールを追加する場所
5. root
   - ESLint はデフォルトの挙動として親ディレクトリの設定ファイルまで読み込んでしまうので、それを抑止するためのもの
6. rules
   - 適用する個々のルールと、エラーレベルや例外などその設定値を定義
   - ここに記述するのは大抵、extends で適用したルールを個別で無効にしたり例外を設けたりしたいケース
7. 当プロジェクトの rules の解説（[「りあクト！」](https://oukayuka.booth.pm/items/2368019)から引用）
   - `no-void`: void 演算子の（式としての）使用を禁ずるルール。Effect Hook 内で非同期処理を記述する際、@typescript-eslint/no-floating-promises ルールに抵触してしまうのを回避するのに void 文を記述する必要があるため、文としての使用のみを許可している
   - `padding-line-between-statements`<span style="color: red">\*</span>: 任意の構文の間に区切りの空行を入れるかどうかを定義するルール。ここでは return 文の前に常に空行を入れるよう設定している
   - `@typescript-eslint/no-unused-vars`<span style="color: red">\*</span>: 使用していない変数の定義を許さないルール。ここでは変数名を \_ にしたときのみ許容するように設定
   - `import/extensions`<span style="color: red">\*</span>: インポートの際のファイル拡張子を記述するかを定義するルール。npm パッケージ以外のファイルについて .js、.jsx、.ts、.tsx のファイルのみ拡張子を省略し、他のファイルは拡張子を記述させるように設定
   - `react/jsx-filename-extension`<span style="color: red">\*</span>: JSX のファイル拡張子を制限するルール。eslint-config-airbnb で .jsx のみに限定されているので、.tsx を追加
   - `react/jsx-props-no-spreading`: JSX でコンポーネントを呼ぶときの props の記述にスプレッド構文を許さないルール。eslint-config-airbnb にてすべて禁止されているが、<Foo {...{ bar, baz } /}> のように個々の props を明記する書き方のみ許容するように設定
   - `react/react-in-jsx-scope`: JSX 記述を使用する場合に react モジュールを React としてインポートすることを強制する。新しい JSX 変換形式を用いる場合はインポートが不要になるためこの設定を無効化
   - `react/prop-types`<span style="color: red">\*</span>: コンポーネントの props に型チェックを行うための propTypes プロパティ の定義を強制するルール。eslint-config-airbnb で設定されているが、TypeScript の場合は不要なのでファイル拡張子が .tsx の場合に無効化するよう設定を上書き
8. overrides
   - overrides は任意の glob パターン にマッチするファイルのみ、ルールの適用を上書きできるプロパティ。（当プロジェクトでは）react/prop-types ルールを通常の JSX ファイルでは適用したままにして、.tsx ファイルでは無効にするために使ってる
9. settings
   - settings は任意の実行ルールに適用される追加の共有設定。（当プロジェクトでは）tsconfig.json で src/ 配下のファイルを絶対パスでインポートできるようにしていたけど、このままでは eslint-plugin-import がその絶対パスを解決できずにエラーを出してしまう。だからここでは eslint-plugin-import が内部で使用している eslint-import-resolver-node というモジュール解決プラグインに対して、パスに src を追加してる

<br />

> 公式ドキュメント

- [ESLint ｜ Rules](https://eslint.org/docs/rules/)
- [typescript-eslint ｜ eslint-plugin ｜ Supported Rules](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules)
