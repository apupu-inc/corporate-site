---
name: apupu-news-article
description: Add or update news articles in the 株式会社あっぷっぷ Eleventy corporate-site repository. Use when the user asks to publish, revise, or prepare an article for the site's お知らせ section; do not use for unrelated sites or general copywriting without a repository change.
---

# あっぷっぷ お知らせ記事

Create or update an article while preserving the repository's existing news collection and URL conventions.

## Confirm the project

Use this skill only when the current repository is the あっぷっぷ corporate site. Confirm that `package.json` identifies `apupu-corporate-site` and that `src/news/index.njk` exists. If either check fails, stop using this project-specific workflow and explain the mismatch.

Read the `お知らせ記事の追加・更新` section near the top of `README.md` before editing. Treat it as the current source of truth if it differs from this skill. Inspect one or two recent files in `src/news/` to match the established tone and markup.

## Prepare the article

For a new article, obtain or derive from the user's supplied material:

- publication date in `YYYY-MM-DD` format;
- one existing category: `お知らせ`, `サービス`, `イベント`, `メディア`, `採用`, `アップデート`, or `教育コラム`;
- title;
- concise list/meta description;
- article body.

It is acceptable to edit a supplied draft and propose a title or description. Do not invent dates, names, URLs, event details, prices, policies, or other factual claims. Ask one concise question only when required publication information cannot be safely inferred.

## Add a new article

Create `src/news/YYYY-MM-DD-slug.html`, using a short lowercase ASCII slug made of words and hyphens. Check for filename and URL collisions first.

Use this frontmatter shape:

```yaml
---
layout: layouts/news-detail.njk
title: 記事タイトル
description: 一覧と meta description に表示する要約
date: YYYY-MM-DD
category: お知らせ
tags: news
---
```

Write the body as concise semantic HTML. Prefer `<p>`, `<h2>`, `<strong>`, and `<a>` as needed. Keep `layout` and `tags` unchanged so Eleventy includes the page in the news collection. The shared layout currently renders a placeholder main image; do not add an unsupported per-article image field unless the user also asks to implement that feature.

## Update an existing article

Edit the matching file in `src/news/`. Preserve its filename and resulting public URL unless the user explicitly requests a URL change. Change only the requested frontmatter or body. Do not delete an article unless deletion is explicit, because removal makes its published URL return 404.

## Verify

Run `npm run build`. Confirm that:

- the build succeeds;
- `_site/news/index.html` contains the article title, description, date, category, and generated URL;
- the expected `_site/news/<filename-without-extension>/index.html` exists and contains the article body;
- articles remain ordered by frontmatter `date`, newest first.

If a local development server is already available, also inspect `/news/` and the detail page in the browser when visual verification is useful. Preserve unrelated working-tree changes. Do not commit, push, or deploy unless the user asks.
