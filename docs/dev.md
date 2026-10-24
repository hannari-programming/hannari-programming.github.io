# 開発指示書

コンテンツなし時の言語トップへのリダイレクト
背景： 中国語はコンテンツがほぼないため、/zh/blog/xxx に直アクセスされると404になる。404より言語トップ（/zh/）にリダイレクトする方が親切。コンテンツが増えてきたタイミングで実装する。
実装方針： src/middleware.ts を作成してミドルウェアで処理する。
ts// src/middleware.ts のイメージ
import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (context, next) => {
  const response = await next();
  if (response.status === 404) {
    const lang = context.url.pathname.split('/')[1]; // ja / en / zh
    if (['ja', 'en', 'zh'].includes(lang)) {
      return context.redirect(`/${lang}/`);
    }
  }
  return response;
});
注意： 静的ビルド（GitHub Pages）では SSR ミドルウェアが効かないため、404.astro でクライアントサイドリダイレクトと組み合わせる必要がある。実装時に要検討。

