# 開発指示書

*ナビゲーションバーの右端（言語切り替えの隣）に「GitHubで参加する」ボタンを追加してください。

## 要件

- 配置：ナビバー右端、言語切り替えボタンの右隣
- ラベル：日本語ページは「GitHubで参加する」、英語ページは「Contribute on GitHub」、中文ページは「在GitHub上参与」
- リンク先：https://github.com/hannari-programming/hannari-programming.github.io
- target="_blank" rel="noopener noreferrer" をつける
- デザイン：
  - GitHubのアイコン（SVG or lucide等）＋テキスト
  - 既存のナビデザインに馴染むスタイル
  - ホバー時に少し目立つ程度でOK、派手にしすぎない
- モバイル対応：画面が狭い場合はアイコンのみ表示でもOK

## 注意

- 言語ごとにラベルが切り替わる仕組みが既にあれば、それに乗っかる形で実装する
- なければ現在のURLパスから `/ja/` `/en/` `/zh/` を判定して出し分けてOK
## 共通の実装ルール

- レイアウトは必ず `Base.astro` を使う
- UIテキストは必ず `useTranslations` の `t()` を通す（ハードコード禁止）
- 新しい UI テキストが必要なら `src/i18n/index.ts` に **ja / en / zh の3言語セット**で追加
- カラー・フォントは Tailwind カスタムクラスのみ（`hannari-pink` 等）
- 実装後は `pnpm build` が通ることを確認してからコミット

---

## 完了条件

- [ ] `/ja/` `/en/` `/zh/` の全ページでナビバー右端にボタンが表示される
- [ ] ボタンをクリックするとGitHubリポジトリが新しいタブで開く
- [ ] 言語に応じてラベルが正しく切り替わっている
- [ ] モバイル幅（375px程度）でレイアウトが崩れない
- [ ] `pnpm build` がエラーなく通る
- [ ] ローカルで `pnpm dev` して目視確認済み
