# AGENTS.md — Hannari Programming Website

AI coding agents (Codex, Claude, Copilot etc.) がこのリポジトリで作業するときの指示書。
**必ずこのファイルを最初に読むこと。**

---

## プロジェクト概要

京都のプログラミング・AI コミュニティ「はんなりプログラミング」の公式サイト。
Astro + Tailwind CSS で構築し、GitHub Pages にホスティング。

- **本番URL:** https://hannari-programming.github.io
- **対応言語:** 日本語 (`ja`) / English (`en`) / 中文 (`zh`)
- **デフォルト言語:** `ja`（ルートアクセス時は `/ja/` にリダイレクト）

---

## 技術スタック

| 用途 | 技術 |
|------|------|
| フレームワーク | Astro 4.x |
| スタイリング | Tailwind CSS 3.x |
| コンテンツ管理 | Astro Content Collections (Markdown / MDX) |
| 多言語対応 | Astro i18n (`src/i18n/index.ts`) |
| ホスティング | GitHub Pages（GitHub Actions で自動デプロイ） |

---

## ディレクトリ構成

```
src/
├── i18n/
│   └── index.ts          # 翻訳辞書・ヘルパー関数（全言語のUIテキストはここ）
├── layouts/
│   └── Base.astro        # 共通レイアウト（ナビ・フッター・言語切替）
├── pages/
│   ├── index.astro       # / → /ja/ リダイレクトのみ
│   ├── ja/               # 日本語ページ群
│   ├── en/               # 英語ページ群
│   └── zh/               # 中国語ページ群
└── content/
    ├── config.ts         # Collection スキーマ定義
    ├── blog/             # ブログ記事 (.md / .mdx)
    └── events/           # イベント情報 (.md)

.github/
├── workflows/deploy.yml  # main push → GitHub Pages 自動デプロイ
└── ISSUE_TEMPLATE/       # イベント追加・ブログ追加テンプレ
```

---

## 開発コマンド

```bash
pnpm install      # 依存関係インストール
pnpm dev          # 開発サーバー起動 → http://localhost:4321
pnpm build        # 本番ビルド（dist/ に出力）
pnpm preview      # ビルド結果をローカルでプレビュー
```

**ビルドが通ることを必ず確認してからコミットすること。**  
`pnpm build` でエラーが出たらコミット不可。

---
## 詳細ドキュメント
- 開発タスク・優先順位 → @docs/dev.md
- デザインシステム → @docs/design.md
- 多言語対応ルール → @docs/i18n.md

---

## コンテンツ（Markdown）のルール

### ブログ記事 — `src/content/blog/`

ファイル名: `{slug}-{lang}.md`（例: `pycon-2024-report-ja.md`）

```markdown
---
title: "記事タイトル"
description: "一覧・OGPに使う概要文（80文字以内推奨）"
pubDate: 2024-03-15       # YYYY-MM-DD
lang: ja                  # ja / en / zh
tags: ["Python", "AI"]    # 任意
heroImage: "/images/xxx.jpg"  # 任意
draft: false              # true にすると本番に出ない
---

本文（Markdown / MDX）
```

### イベント — `src/content/events/`

ファイル名: `{YYYYMMDD}-{slug}-{lang}.md`（例: `20240315-python-study-ja.md`）

```markdown
---
title: "イベントタイトル"
description: "概要"
date: 2024-03-15           # 開催日（過去のイベントはトップに出ない）
lang: ja
location: "京都市中京区"
online: true               # オンライン参加可なら true
url: "https://connpass.com/event/xxxxx/"  # 任意
tags: ["Python"]
---

詳細説明（任意）
```

---

## やってはいけないこと

- `pnpm build` が通らないコードをコミットしない
- `src/i18n/index.ts` を変更するとき `ja` / `en` / `zh` の3言語を揃えないこと
- ページ内に日本語テキストをハードコードすること（必ず `t()` を使う）
- Tailwind のカスタムクラス以外のカラー・フォントを使うこと
- `src/content/config.ts` のスキーマを壊す frontmatter を書くこと
- `.github/workflows/deploy.yml` を無断で変更すること

---

## PR の出し方

ブランチ名の規則:

| 種類 | 例 |
|------|----|
| 新機能 | `feat/add-about-page` |
| ブログ記事追加 | `blog/pycon-2024-report` |
| イベント追加 | `event/20240315-python-study` |
| バグ修正 | `fix/nav-lang-switch` |
| 翻訳追加 | `i18n/zh-about-page` |

PR は小さく。1PRで複数ページを大幅変更しない。

---

## よくある作業パターン

### イベントを1件追加する

1. `src/content/events/` に `YYYYMMDD-{slug}-ja.md` を作成
2. 英語版が必要なら `YYYYMMDD-{slug}-en.md` も作成
3. `pnpm build` を通す
4. PR を出す（Issue template があれば先に Issue を立てる）

### 新しいページ（例: `/about`）を追加する

1. `src/i18n/index.ts` に必要なキーを3言語分追加
2. `src/pages/ja/about.astro` を作成（`Base.astro` を使う）
3. `src/pages/en/about.astro` を作成
4. `src/pages/zh/about.astro` を作成（翻訳未完なら募集バナー）
5. `Base.astro` のナビにリンクを追加
6. `pnpm build` を通す

### 中国語翻訳を追加する

1. `src/i18n/index.ts` の `zh` セクションを更新
2. 対象ページの `.astro` ファイルでコンテンツを追加
3. `TODO: zh translation needed` コメントを削除
