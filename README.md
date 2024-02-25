# RealWorld Next.js

## 概要

ブログプラットフォームを作る [RealWorld](https://github.com/gothinkster/realworld/tree/main) という OSS のプロジェクトがあります。  
本リポジトリは、RealWorld のフロントエンドを Next.js で作成したものです。

## デプロイ

フロントエンド：[https://asagohan.click/](https://asagohan.click/)  
バックエンド：[https://asagohan.net/](https://asagohan.net/)

![alt text](/public/architecture.jpg)

## 機能

### 実装済み

- ユーザー登録
- ログイン
- 記事一覧の表示
- 記事の投稿
- 各記事の表示、編集、削除

### 未実装

- ユーザーの表示、編集、削除
- お気に入り
- コメント

## 起動方法

以下のコマンドでローカルサーバーを起動してから、ブラウザで [http://localhost:3001](http://localhost:3001) にアクセスしてください。

```bash
npx next dev -p 3001
```

記事投稿などの機能を使用するには、API サーバーの起動が必要です。  
[RealWorld API リポジトリ](https://github.com/asagohan2301/realworld-api)
