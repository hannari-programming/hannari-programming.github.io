## デザインシステム

カラーパレットとフォントは Tailwind config で定義済み。**インラインの hex カラーや別フォントを使わないこと。**

### カラー

| クラス | 用途 |
|--------|------|
| `text-hannari-pink` / `bg-hannari-pink` | メインアクセント、CTA |
| `text-hannari-mauve` / `bg-hannari-mauve` | ホバー、サブアクセント |
| `text-hannari-gold` / `bg-hannari-gold` | 日付・メタ情報 |
| `bg-hannari-cream` | 背景 |
| `text-hannari-ink` | 本文テキスト |

### フォント

| クラス | 用途 |
|--------|------|
| `font-display` | 見出し（Zen Old Mincho） |
| `font-body` | 本文（Noto Sans JP） |
| `font-mono` | 日付・コード（JetBrains Mono） |

### アニメーション

- `animate-fade-up` — フェードアップ（ヒーローセクション用）
- `animate-shimmer` — シマー
- ヒーロータイトルは `id="hero-title"` + `<script>` で JS アニメーション
