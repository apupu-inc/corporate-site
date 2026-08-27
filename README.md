# 株式会社あっぷっぷ Corporate Site

株式会社あっぷっぷのコーポレートサイトです。Eleventy でページごとの静的 HTML を生成し、GitHub Actions から GitHub Pages へ公開します。

## Setup

Node.js 24 を使用します。

```sh
npm install
npm run dev
```

本番用ファイルは次のコマンドで `_site/` に生成されます。

```sh
npm run build
```

## Structure

```text
src/
├── _data/site.json             サイト共通情報・外部URL
├── _includes/
│   ├── layouts/                HTML全体と記事詳細の共通レイアウト
│   └── components/             ヘッダー・フッター
├── assets/                     CSS、JavaScript、画像
├── news/                       お知らせ一覧と記事HTML
├── index.njk                   トップページ
└── */index.njk                 各下層ページ
```

サイトは `/services/`、`/message/`、`/members/`、`/news/`、`/company/`、`/contact/`、`/privacy/` の個別 URL で構成しています。共通部品、ページ別メタ情報、Eleventy の `url` フィルターによる GitHub Pages の path prefix 対応を維持してください。

## Add a news article

`src/news/` に `YYYY-MM-DD-slug.html` を追加します。

```html
---
layout: layouts/news-detail.njk
title: お知らせのタイトル
description: 一覧とmeta descriptionに表示する要約
date: 2026-08-10
category: お知らせ
tags: news
---

<p>記事本文です。</p>
```

`tags: news` を付けた記事は `/news/` の一覧へ自動的に反映されます。カテゴリ絞り込みは `src/assets/js/main.js` で行います。

## GitHub Pages

`main` ブランチへの push で `.github/workflows/pages.yml` が `npm ci` と Eleventy のビルドを実行し、`_site/` をデプロイします。Actions が取得した `base_path` は `--pathprefix` として Eleventy に渡されます。

## Before production release

- `src/_data/site.json` のサービス LP URL を正式 URL に確認する
- お問い合わせフォームの送信先をメール配信サービスまたは CRM に接続する
- プレースホルダーの代表・メンバー・記事画像と未確定プロフィールを実データへ差し替える
- 公式 LINE など未確定の外部リンクを設定するか、該当表示を削除する
- OGP 画像、favicon、独自ドメインを設定する

送信先が未設定の間、お問い合わせフォームの送信ボタンは無効です。代表窓口として `support@apupu.family` を表示しています。
