# 株式会社あっぷっぷ Corporate Site

株式会社あっぷっぷのコーポレートサイトです。Eleventy でページごとの静的 HTML を生成し、GitHub Actions から GitHub Pages へ公開します。

## お知らせ記事の追加・更新

お知らせ記事は `src/news/` にある HTML ファイルで管理します。一覧ページを直接編集する必要はありません。

### 新しい記事を追加する

`src/news/` に `YYYY-MM-DD-slug.html` という名前でファイルを追加します。`slug` は記事内容を表す半角英数字とハイフンにしてください。

例：`src/news/2026-08-10-summer-event.html`

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

先頭の `---` で囲まれた部分は記事情報です。

- `layout`: `layouts/news-detail.njk` のまま変更しない
- `title`: 記事一覧と詳細ページに表示するタイトル
- `description`: 記事一覧の要約と meta description
- `date`: 公開日を `YYYY-MM-DD` 形式で指定する
- `category`: `お知らせ`、`サービス`、`イベント`、`メディア`、`採用`、`アップデート`、`教育コラム` のいずれか
- `tags`: `news` のまま変更しない。この指定により `/news/` の一覧へ自動反映される

本文は記事情報の下に HTML で記述します。

```html
<p>通常の本文です。</p>
<h2>見出しです。</h2>
<p><strong>強調する文章</strong>も記述できます。</p>
<p><a href="https://example.com/">関連ページを見る</a></p>
```

一覧は `date` の新しい順に並びます。ファイル名は記事の URL になるため、公開後は原則として変更しないでください。

### AI に記事追加を依頼するプロンプト例

必要事項が決まっている場合は、次の例をコピーして `{ }` の中を書き換えてください。

```text
このリポジトリに、次のお知らせ記事を追加してください。

公開日：{2026-08-10}
カテゴリ：{お知らせ}
タイトル：{夏季休業のお知らせ}
一覧用の要約：{2026年の夏季休業期間とお問い合わせ対応についてお知らせします。}
本文：
{2026年8月13日から8月16日まで夏季休業とします。
休業期間中にいただいたお問い合わせには、8月17日から順次回答します。}

README.md に記載された記事形式に従い、src/news/ に新しい記事を作成してください。
本文は読みやすい HTML に整えてください。提供していない日付、名称、URLなどの事実は推測で追加しないでください。
作成後は npm run build を実行し、記事一覧と詳細ページが正しく生成されることを確認してください。
```

下書きの整理や文章調整も任せる場合は、次のように依頼できます。

```text
以下の下書きをもとに、このサイトのお知らせ記事を追加してください。

公開日：{2026-08-10}
カテゴリ：{イベント}
下書き：
{ここに記事の下書きを貼り付ける}

サイト内の既存記事に合う、簡潔で自然な文体に整えてください。タイトルと一覧用の要約も作成してください。
下書きにない事実は追加せず、公開に必要な情報が不足している場合は作業前に確認してください。
README.md の記事形式に従って src/news/ に追加し、npm run build まで実行してください。
```

### 既存の記事を更新する

`src/news/` から対象の記事ファイルを開き、`title`、`description`、`date`、`category` または本文を編集します。タイトルや本文だけを直す場合は、ファイル名を変更する必要はありません。

記事を一覧から削除する場合は対象ファイルを削除します。公開済み記事を削除すると元の URL は 404 になるため、リンク元がないか確認してから行ってください。

記事詳細のメイン画像は現在 `src/_includes/layouts/news-detail.njk` の共通プレースホルダーです。記事ごとに画像を設定する仕組みはまだありません。

### ローカルで確認する

開発サーバーを起動し、一覧と記事詳細を確認します。

```sh
npm run dev
```

- 一覧：`http://localhost:8080/news/`
- 詳細：`http://localhost:8080/news/YYYY-MM-DD-slug/`

公開前に本番ビルドも確認してください。

```sh
npm run build
```

`main` ブランチへ push すると、GitHub Actions によりサイトへ公開されます。カテゴリ絞り込みの処理は `src/assets/js/main.js` にあります。カテゴリを追加する場合は、`src/news/index.njk` のフィルターボタンも更新してください。

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

サイトは `/services/`、`/message/`、`/members/`、`/news/`、`/company/` の個別 URL で構成しています。共通部品、ページ別メタ情報、Eleventy の `url` フィルターによる GitHub Pages の path prefix 対応を維持してください。

## GitHub Pages

`main` ブランチへの push で `.github/workflows/pages.yml` が `npm ci` と `npm run build -- --pathprefix=/` を実行し、`_site/` をデプロイします。独自ドメイン `https://apupu.family/` のルートで公開するため、パスの接頭辞は `/` に固定しています。

## Before production release

- `src/_data/site.json` のサービス LP URL を正式 URL に確認する
- `src/_data/site.json` のGoogleフォームURLが正式な問い合わせ先であることを確認する
- プレースホルダーの代表・メンバー・記事画像と未確定プロフィールを実データへ差し替える
- 公式 LINE など未確定の外部リンクを設定するか、該当表示を削除する
- OGP 画像、favicon、独自ドメインを設定する

お問い合わせは `src/_data/site.json` の `contactUrl` に設定したGoogleフォームで受け付けます。
