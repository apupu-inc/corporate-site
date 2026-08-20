# あっぷっぷ Corporate Site

「そろばんあっぷっぷ」のコーポレートサイトです。Eleventyで各ページを静的HTMLとして生成し、GitHub ActionsからGitHub Pagesへ公開します。

## Setup

Node.js 24を使用します。

```sh
npm install
npm run dev
```

開発サーバーで表示を確認し、静的ファイルを生成する場合は次を実行します。

```sh
npm run build
```

生成物は `_site/` に出力されます。`_site/` はGitへコミットしません。

## Directory structure

```text
src/
├── _data/site.json             サイト共通設定・外部URL
├── _includes/
│   ├── layouts/                HTML全体と記事詳細の共通レイアウト
│   └── components/             ヘッダー・フッター
├── assets/                     CSS、JavaScript、画像
├── news/                       お知らせ一覧と記事HTML
├── index.njk                   トップページ
└── */index.njk                 各下層ページ
```

`.njk`ファイルの本文は通常のHTMLです。先頭の `---` で囲まれた部分だけがページ固有のメタ情報です。

## Add a news article

`src/news/` に `YYYY-MM-DD-slug.html` という名前でファイルを追加します。

```html
---
layout: layouts/news-detail.njk
title: お知らせのタイトル
description: 一覧とmeta descriptionに表示する要約
date: 2026-08-10
category: お知らせ
tags: news
---

<p>ここから通常のHTMLで本文を書きます。</p>

<h2>小見出し</h2>

<p>本文です。</p>
```

`tags: news` を付けた記事は、日付順で `/news/` に自動表示されます。利用中のカテゴリは次のとおりです。

- お知らせ
- サービス
- イベント
- メディア
- 採用
- アップデート
- 教育コラム

## Common elements

- ヘッダー: `src/_includes/components/header.njk`
- フッター: `src/_includes/components/footer.njk`
- HTMLのheadと全体構造: `src/_includes/layouts/base.njk`
- 共通CSS: `src/assets/css/main.css`
- サイト名・体験入会URL: `src/_data/site.json`

## GitHub Pages

`main` ブランチへpushすると `.github/workflows/pages.yml` が静的ファイルをビルドし、GitHub Pagesへデプロイします。

GitHubリポジトリの `Settings > Pages > Build and deployment` で、Sourceを `GitHub Actions` に設定してください。

GitHub PagesのプロジェクトURLに含まれるリポジトリ名は、Actionsが取得した `base_path` をEleventyへ渡して自動的に反映します。

## Before production release

以下は実情報が未設定のため、公開前に対応が必要です。

- `src/_data/site.json` の体験・入会サイトURL
- ヘッダー・フッターのSNS URL
- お問い合わせフォームの外部送信先
- 会社名、所在地、代表者、連絡先
- メンバー情報、提携実績、記事執筆者
- プレースホルダーになっている写真と記事画像
- OGP画像、favicon、独自ドメイン

お問い合わせフォームは、送信先が決まるまで送信ボタンを無効にしています。
