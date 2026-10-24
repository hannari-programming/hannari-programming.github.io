# Contributing to Hannari Programming Website

コントリビュートありがとうございます！  
Thank you for contributing!

## 開発環境のセットアップ / Setup

```bash
git clone https://github.com/hannari-programming/hannari-programming.github.io
cd hannari-programming.github.io
npm install
npm run dev
```

ブラウザで `http://localhost:4321` を開く。

---

## コンテンツを追加する / Adding Content

### イベントを追加する

`src/content/events/` に `.md` ファイルを作成:

```md
---
title: "イベントタイトル"
description: "概要"
date: 2024-03-15
lang: ja          # ja / en / zh
location: "京都市中京区"
online: true      # オンライン参加可の場合
url: "https://connpass.com/..."
tags: ["AI", "Python"]
---

イベントの詳細をここに書く。
```

### ブログ記事を追加する

`src/content/blog/` に `.md` ファイルを作成:

```md
---
title: "記事タイトル"
description: "概要（一覧に表示されます）"
pubDate: 2024-03-15
lang: ja
tags: ["タグ"]
draft: false
---

本文をここに書く。
```
### 記事の画像について

記事の画像は `public/images/` に保存し、記事と同じリポジトリで管理してください。GitHub Issuesへの画像アップロードは不要です。

- 掲載サイズに合わせて縮小・圧縮し、元の高解像度画像はリポジトリに含めないでください。
- 本文からは `/images/ファイル名` のパスで参照してください。
- `heroImage` を指定する場合も、同じパスを使用してください。記事本文に表示する画像は、本文にも記述してください。

本文の記述例:

```md
![画像の内容を説明する代替テキスト](/images/event-report.webp)
```

画像の容量が増えて管理に支障が出た場合に、S3などの外部ストレージへの移行を検討します。


---

## 翻訳を追加する / Adding Translations

`src/i18n/index.ts` にキーと翻訳文字列を追加してください。  
中国語 (`zh`) のコンテンツは特に大歓迎です 🙏

---

## PR のルール / PR Guidelines

- ブランチ名: `feat/add-event-20240315` や `blog/pycon-report` のように
- 日本語・英語どちらでも OK
- 小さな変更でも歓迎！
