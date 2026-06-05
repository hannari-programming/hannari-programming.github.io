export const languages = {
  ja: '日本語',
  en: 'English',
  zh: '中文',
};

export const defaultLang = 'ja';

export const ui = {
  ja: {
    'nav.home':        'ホーム',
    'nav.events':      'イベント',
    'nav.blog':        'ブログ',
    'nav.about':       'について',
    'hero.tagline':    'デジタル・プログラミング・AIを、京都から。',
    'hero.subTagline': 'コミュニティメンバーがコミットできるウェブサイト',
    'hero.since':      '2017年〜',
    'hero.members':    '1,100名以上のメンバー',
    'events.title':    '今後のイベント',
    'events.empty':    '近日開催予定のイベントをお待ちください。',
    'events.upcoming': '今後のイベント',
    'events.past':     '過去のイベント',
    'events.online':   'オンライン参加可',
    'events.details':  '詳細・申込',
    'events.allTitle': 'イベント一覧',
    'blog.title':      'ブログ',
    'blog.readmore':   '続きを読む',
    'blog.empty':      '記事を準備中です。',
    'blog.allTitle':   'ブログ記事一覧',
    'blog.backToList': 'ブログ一覧に戻る',
    'blog.tags':       'タグ',
    'footer.copy':     '© 2026 Hannari Programming. Kyoto, Japan.',
    'lang.switch':     '言語を切り替える',
    'nav.github':      'GitHubで参加する',
    'notFound.title':  'ページが見つかりません',
    'notFound.message': 'お探しのページは存在しないか、移動した可能性があります。',
    'notFound.home':   'ホームへ戻る',
  },
  en: {
    'nav.home':        'Home',
    'nav.events':      'Events',
    'nav.blog':        'Blog',
    'nav.about':       'About',
    'hero.tagline':    'Digital, Programming & AI — from Kyoto.',
    'hero.subTagline': 'A website our community members can commit to.',
    'hero.since':      'Since 2017',
    'hero.members':    '1,100+ members',
    'events.title':    'Upcoming Events',
    'events.empty':    'Stay tuned for upcoming events.',
    'events.upcoming': 'Upcoming Events',
    'events.past':     'Past Events',
    'events.online':   'Online available',
    'events.details':  'Details / Register',
    'events.allTitle': 'All Events',
    'blog.title':      'Blog',
    'blog.readmore':   'Read more',
    'blog.empty':      'Blog posts coming soon.',
    'blog.allTitle':   'All Blog Posts',
    'blog.backToList': 'Back to blog list',
    'blog.tags':       'Tags',
    'footer.copy':     '© 2026 Hannari Programming. Kyoto, Japan.',
    'lang.switch':     'Switch language',
    'nav.github':      'Contribute on GitHub',
    'notFound.title':  'Page not found',
    'notFound.message': 'The page you are looking for may not exist or may have moved.',
    'notFound.home':   'Back to home',
  },
  zh: {
    'nav.home':        '首页',
    'nav.events':      '活动',
    'nav.blog':        '博客',
    'nav.about':       '关于',
    'hero.tagline':    '数字技术・编程・AI — 来自京都。',
    'hero.subTagline': '社区成员可以共同贡献的网站',
    'hero.since':      '2017年至今',
    'hero.members':    '1,100名以上会员',
    'events.title':    '即将举行的活动',
    'events.empty':    '敬请期待即将举行的活动。',
    'events.upcoming': '即将举行的活动',
    'events.past':     '往期活动',
    'events.online':   '支持在线参加',
    'events.details':  '详情・报名',
    'events.allTitle': '活动一览',
    'blog.title':      '博客',
    'blog.readmore':   '阅读更多',
    'blog.empty':      '文章准备中。',
    'blog.allTitle':   '博客文章一览',
    'blog.backToList': '返回博客列表',
    'blog.tags':       '标签',
    'footer.copy':     '© 2026 Hannari Programming. 日本京都.',
    'lang.switch':     '切换语言',
    'nav.github':      '在GitHub上参与',
    'notFound.title':  '页面未找到',
    'notFound.message': '您查找的页面可能不存在，或已被移动。',
    'notFound.home':   '返回首页',
  },
} as const;

export type Lang = keyof typeof ui;
export type UiKey = keyof typeof ui[typeof defaultLang];

export function useTranslations(lang: Lang) {
  return function t(key: UiKey): string {
    return ui[lang][key] ?? ui[defaultLang][key] ?? key;
  };
}

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}
