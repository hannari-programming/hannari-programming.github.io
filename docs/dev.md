# 開発指示書

**目標：** コンテンツ（ブログ・イベント）を追加したら即座にサイトで閲覧できる状態にする。

---

## 現在の状態

| ページ | 状態 |
|--------|------|
| `/ja/` トップ | ✅ 実装済み |
| `/en/` トップ | ✅ 実装済み |
| `/zh/` トップ | ✅ 実装済み（骨組みのみ） |
| `/ja/blog` 一覧 | ❌ 未実装（404） |
| `/en/blog` 一覧 | ❌ 未実装（404） |
| `/ja/blog/[slug]` 詳細 | ❌ 未実装（404） |
| `/en/blog/[slug]` 詳細 | ❌ 未実装（404） |
| `/ja/events` 一覧 | ❌ 未実装（404） |
| `/en/events` 一覧 | ❌ 未実装（404） |

トップページからブログ・イベントへのリンクは張ってあるが、すべて 404 になる。

---

## 今回作るもの（優先順位順）

### 1. ブログ詳細ページ `[slug].astro`

**作成ファイル：**
- `src/pages/ja/blog/[slug].astro`
- `src/pages/en/blog/[slug].astro`

**要件：**
- `getCollection('blog')` で lang フィルタリングして `getStaticPaths` を生成
- `post.render()` で Markdown 本文をレンダリング
- タイトル・日付・タグを表示
- `Base.astro` レイアウトを使う

**参考スキーマ（`src/content/config.ts`）：**
```ts
// blog
title, description, pubDate, lang, tags?, heroImage?, draft
```

---

### 2. ブログ一覧ページ

**作成ファイル：**
- `src/pages/ja/blog/index.astro`
- `src/pages/en/blog/index.astro`

**要件：**
- `getCollection('blog')` で lang フィルタリング・`draft: false` のみ表示
- `pubDate` 降順でソート
- 記事カードのデザインはトップページ（`ja/index.astro`）の blog セクションを流用してよい
- 詳細ページ `/ja/blog/{slug}` へのリンクを貼る

---

### 3. イベント一覧ページ

**作成ファイル：**
- `src/pages/ja/events/index.astro`
- `src/pages/en/events/index.astro`

**要件：**
- `getCollection('events')` で lang フィルタリング
- **今後のイベント**（`date >= today`）と**過去のイベント**を分けて表示
- `date` 昇順（直近が上）
- カードデザインはトップページの events セクションを流用してよい

**参考スキーマ（`src/content/config.ts`）：**
```ts
// events
title, description, date, lang, location, online, url?, tags?
```

---

## 共通の実装ルール

- レイアウトは必ず `Base.astro` を使う
- UIテキストは必ず `useTranslations` の `t()` を通す（ハードコード禁止）
- 新しい UI テキストが必要なら `src/i18n/index.ts` に **ja / en / zh の3言語セット**で追加
- カラー・フォントは Tailwind カスタムクラスのみ（`hannari-pink` 等）
- 実装後は `pnpm build` が通ることを確認してからコミット

---

## 完了条件

以下がすべてブラウザで表示できること：

```
http://localhost:4321/ja/blog
http://localhost:4321/ja/blog/hello-world-ja   ← サンプル記事
http://localhost:4321/en/blog
http://localhost:4321/en/blog/hello-world-en
http://localhost:4321/ja/events
http://localhost:4321/en/events
```
