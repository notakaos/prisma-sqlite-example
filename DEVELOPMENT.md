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

## Prisma + sqlite 導入

* 参考: https://www.prisma.io/
* 参考: https://www.prisma.io/docs/concepts/database-connectors/sqlite
* 参考: https://github.com/prisma/prisma
* VSCode Plugin: https://marketplace.visualstudio.com/items?itemname=prisma.prisma

```sh
npm install prisma -D
npx prisma init
vim prisma/schema.prisma

# 初期 migration ファイル作成
npx prisma migrate dev --name init --preview-feature

# prettier の prisma ファイル対応
npm i -D prettier-plugin-prisma

# prisma client のインストール
npm install @prisma/client
```