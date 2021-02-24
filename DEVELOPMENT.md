# DEVELOPMENT Note

## プロジェクトディレクトリ作成

```sh
mkdir prisma-sqlite-example
cd prisma-sqlite-example
```

## TypeScript 対応

* 参考: https://qiita.com/notakaos/items/3bbd2293e2ff286d9f49

```sh
touch .gitignore README.md DEVELOPMENT.md
npm init -f
git init
git add .
git commit -m "first commit"

npm install -D typescript @types/node@14
npm install -D ts-node
npm install -D rimraf npm-run-all
```

## ESLint & Prettier 導入

```sh
npm install -D eslint typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin
touch tsconfig.eslint.json
touch .eslintrc.js
```
