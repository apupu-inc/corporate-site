# Handoff: 株式会社あっぷっぷ コーポレートサイト

## Overview

**株式会社あっぷっぷ**の**コーポレートサイト（企業サイト）**です。同社は、オンラインそろばんレッスン「そろばんあっぷっぷ」を提供する教育会社であり、本サイトはその会社としての情報発信を担います。

このコーポレートサイトの目的：

1. **会社としてのブランド世界観**（Mission ／ Vision ／ Value）を明確に伝える
2. **提供サービス「そろばんあっぷっぷ」**の概要を紹介し、詳細・申込は **別サイト（サービスLP）** へ送客する
3. **代表者・ボードメンバー・会社情報・お知らせ・お問い合わせ**などの企業サイトとしての基本情報を提供する

**重要**：本サイトは体験・入会の募集は行いません。レッスンの申込・料金・時間割の詳細は、別サイトの「そろばんあっぷっぷ」サービスLP（外部リンク）に集約されます。

---

## About the Design Files

本フォルダ `design_files/` 配下に含まれるのは、**HTMLで作られたデザインリファレンス**です。最終的な見た目・情報構造・インタラクションのニュアンスを伝えるためのプロトタイプであり、**そのままプロダクトへコピーして使う本番コードではありません**。

実装タスクは、**このデザインを、対象コードベースの既存環境に、その環境の慣習・ライブラリ・コンポーネントパターンで再現すること**です。まだ実装環境が存在しない場合は、コーポレートサイトの特性上、以下のいずれかを推奨します。

- **Next.js（App Router）＋ TypeScript**：SEO・OG対応・後の管理画面接続を見据えるなら第一候補
- **Astro**：静的サイトとして高速に、コンテンツ主体で運用したい場合
- **WordPress（ヘッドレス or 通常テーマ）**：クライアント側で更新運用したい場合

いずれの場合も、以下の要件は満たしてください。

- レスポンシブ対応（モバイル〜ワイド）
- 日本語Webフォントの適切なロード（`display=swap` 等）
- 各ページのメタ情報（title・description・OG）を個別設定できる構造
- お知らせ（news）は CMS または Markdown 管理を想定
- お問い合わせフォームは実際のメール送信／CRM連携を想定した実装に置き換える

---

## Fidelity

**High-fidelity (hifi)** — ピクセルパーフェクトなモックアップです。

- カラー・タイポグラフィ・余白・角丸・シャドウは、`design_files/styles/main.css` の CSS カスタムプロパティに確定値として定義済み
- 「トーンA（信頼・上質）」「トーンB（温かみ・親しみ）」の2案は**デザイン検証用**の切替であり、**本番実装ではトーンAを固定採用**してください
- HERO とサービス紹介の写真は実素材が入っています（それ以外のポートレート等はプレースホルダのままなので、実写真を差し替えてください）

---

## Site Map / Screens

グローバルナビは **6項目**に整理されています。ページ番号は `design_files/scripts/app.js` の `PAGE_LABELS` に対応します。

| # | ページID | 日本語名 | ハッシュ | 目的 |
|---|---|---|---|---|
| 01 | `top` | トップ | `#top` | 会社ブランドの第一印象、MVV、サービス、代表・ボードの案内 |
| 02 | `services` | 事業・サービス | `#services` | 提供サービス（そろばんあっぷっぷ 1つ）と今後の構想 |
| 03 | `message` | 代表メッセージ | `#message` | 創業者 藤村大生のメッセージ |
| 04 | `members` | ボードメンバー | `#members` | 経営陣（CEO / COO / CTO）紹介 |
| 05 | `news` | お知らせ | `#news` | 更新情報一覧 |
| 05-1 | `news-detail` | お知らせ詳細 | `#news-detail` | 個別記事 |
| 06 | `company` | 会社概要 | `#company` | 商号・所在地・沿革などの企業情報 |
| 07 | `contact` | お問い合わせ | `#contact` | 問い合わせフォーム |
| 08 | `privacy` | プライバシーポリシー | `#privacy` | 個人情報の取り扱い |

各ページのHTML構造・コピー・レイアウトは、対応する `design_files/scripts/pages/<page>.js` を**一次資料**として参照してください。

### ブランド表記の使い分け（重要）

会社のブランディングは以下のルールで統一されています。**実装時にもこのルールを崩さないでください。**

| 文脈 | 表記 |
|---|---|
| 会社としての言及（サイト全体、フッター、会社概要、代表署名、コピーライト等） | **株式会社あっぷっぷ** |
| サービスとしての言及（Service セクション、レッスン紹介、サービスLPへの導線） | **そろばんあっぷっぷ** |

**「APUPU」というブランド表記は使いません**（過去の草案では併記していましたが、株式会社あっぷっぷに統一済み）。

### トップページ構成

トップページは6セクション構成でシンプルに整理されています：

1. **HERO** — キャッチコピー「数字を味方に。／未来を自由に。」＋メインビジュアル写真（親子でそろばんに向き合う自然光の写真）
2. **Mission ／ Vision ／ Value** — 3カラムで会社の方向性を明示
   - Mission：「数字を味方にできる子どもを、増やす。」
   - Vision：「教育に、場所の壁をつくらない。」
   - Value：好きになる／待つ／挑戦する／成長を認める／続ける（5姿勢）
3. **Service** — オンラインそろばんレッスン「そろばんあっぷっぷ」を1ブロックで大きく紹介＋レッスン風景写真
4. **Board Members 予告** — 3名（Founder/CEO、COO、CTO）
5. **Message from CEO 予告** — 代表 藤村大生のショートメッセージ
6. **Final CTA** — お問い合わせ／事業・サービス／サービスLPへの3導線

---

## Global Elements

### Header (`site-header`)

- 位置：`position: fixed; top: 0` 相当。スクロールしても常に上部に固定
- 左：ロゴ画像（`assets/logo.png`）
- 中：グローバルナビ（6項目：事業・サービス／代表メッセージ／ボードメンバー／お知らせ／会社概要／お問い合わせ）
- 右：**CTAボタンは無し**（体験・入会CTAは削除済み）
- モバイル：ハンバーガーメニュー（`#menuToggle`）→ フルスクリーンオーバーレイ（`#mobileMenu`）

### Footer (`site-footer`)

- 3カラム構成：ブランド ／ 事業 ／ 会社情報 ／ サービス情報
- SNSリンク：**Instagram のみ**（X／YouTube／公式LINE はいずれも削除済み）
  - Instagram URL：`https://www.instagram.com/soroban_apupu?igsi=MWhvZW5vbDRncXYwdA%3D%3D&utm_source=qr`
- コピーライト：`© 2026 株式会社あっぷっぷ All Rights Reserved.`
- タグライン：「数字を味方に。／未来を自由に。」

### Tone Switch (プレビュー専用・本番では削除)

`#toneSwitch` はデザイン検証用のトグルです。**本番リリース前に必ずDOMごと削除**してください（`<body data-tone="A">` でハードコードすればトーンAの値がそのまま採用されます）。

---

## Design Tokens

すべて `design_files/styles/main.css` の `:root` に CSS カスタムプロパティとして定義済み。以下は**トーンA（本番採用）**の確定値。

### Colors

| トークン | Hex | 用途 |
|---|---|---|
| `--bg` | `#FFFFFF` | ベース背景（白） |
| `--bg-sub` | `#FBF7EF` | サブ背景（アイボリー） |
| `--bg-warm` | `#F5EDD8` | 暖色背景 |
| `--ink` | `#1B2A4E` | メインテキスト／ブランドネイビー |
| `--ink-sub` | `#4A5878` | サブテキスト |
| `--ink-mute` | `#8592AD` | 弱いテキスト・キャプション |
| `--line` | `#E4DCC8` | 罫線 |
| `--line-soft` | `#F0E9D8` | 弱い罫線 |
| `--accent` | `#F5C542` | アクセント（イエロー・そろばんの珠） |
| `--accent-2` | `#E8B532` | アクセント濃色 |
| `--warm` | `#FFF9EA` | 温かい下地 |
| `--danger` | `#C3502E` | エラー・注意 |
| `--support` | `#7BA6C4` | サポート色 |

### Typography

Google Fonts を使用（`design_files/index.html` の `<head>` にロード宣言あり）。

| トークン | フォントスタック | 用途 |
|---|---|---|
| `--font-serif` | `"Noto Serif JP", "游明朝", "Yu Mincho", serif` | 見出し・本文の情緒的表現 |
| `--font-sans` | `"Noto Sans JP", "游ゴシック", "Yu Gothic", sans-serif` | 本文・UIラベル（`body` デフォルト） |
| `--font-latin` | `"EB Garamond", "Noto Serif JP", serif` | Eyebrow（英字小見出し）・ラテン数字 |
| `--font-mono` | `"JetBrains Mono", monospace` | プレースホルダラベル・キャプション |

**スケール（主要な見出し）**：

- `h1`（`.page-hero__title`）：`clamp(36px, 5vw, 68px)` / `font-serif` / weight 500〜600
- `h2`（`.h-headline`）：`clamp(30px, 4vw, 52px)` / `font-serif`
- 本文：15〜17px / `line-height: 1.8〜2.0`
- Eyebrow：12〜13px / `letter-spacing: 0.15em` / `text-transform: uppercase`

日本語本文は `line-height: 1.8〜2.0`、`letter-spacing: 0.02em` を基本にしています。

### Spacing

- ページ最大幅：`--page-max: 1240px`、ワイド：`--wide-max: 1440px`
- ガター：`--gutter: clamp(20px, 4vw, 56px)`
- セクション垂直余白：概ね `80〜128px`（画面幅で可変）

### Radius / Shadow

| トークン | 値 |
|---|---|
| `--radius-sm` | `8px` |
| `--radius` | `16px` |
| `--radius-lg` | `28px` |
| `--shadow-sm` | `0 2px 12px rgba(27,42,78,0.05)` |
| `--shadow` | `0 12px 32px rgba(27,42,78,0.08)` |
| `--shadow-lg` | `0 24px 56px rgba(27,42,78,0.10)` |

---

## Reusable Components

`design_files/styles/main.css` にBEM風の命名で定義済み。実装時は各フレームワーク流にコンポーネント化してください。

### Button — `.btn`

- 高さ：56px（デスクトップ）／48px（モバイル）
- パディング：`0 24px`
- 角丸：`999px`（ピル型）
- フォント：`--font-serif`、`font-weight: 500`
- バリアント：
  - `.btn`（デフォルト）：`background: --ink; color: --bg`
  - `.btn--accent`：`background: --accent`（イエロー）
  - `.btn--ghost`：透明背景＋インクの枠線。hoverで反転
  - `.btn--on-dark`：ダーク背景上用
- 末尾に `<span class="btn__arrow"></span>` を置くと矢印アイコン（CSS描画）が入る
- 外部リンクの場合は `target="_blank" rel="noopener"` を付与し、ラベル末尾に `↗` を明示する（サービスLP／Instagram など）

### Section Head — `.sec-head`

- `.eyebrow`（英字小見出し／`--font-latin`）
- `.h-headline`（見出し／`--font-serif`）
- `.h-lead`（リード文／`--font-sans`）

### MVV Card — `.mvv-card` / `.mvv-grid`

トップページ Mission / Vision / Value セクションの3カラムカード。

- `.mvv-grid`：`grid-template-columns: repeat(3, 1fr)`（モバイルで1列）
- `.mvv-card__label`：Mission / Vision / Value（`--font-latin`）
- `.mvv-card__jp`：日本語補足（例：「私たちの使命」）
- `.mvv-card__title`：主メッセージ（`--font-serif`）
- `.mvv-card__body`：本文
- `.mvv-card__list`（Value カードのみ）：5姿勢のリスト。`grid-template-columns: 108px 1fr`

### Service Block — `.service-block`

サービス紹介の2カラムレイアウト（画像＋説明）。

- `.service-block__grid`：`grid-template-columns: 1fr 1fr; gap: 40〜80px`（モバイルで縦積み）
- `.service-block__photo`：実写真用のコンテナ。`aspect-ratio: 5/4`、`border-radius: --radius-lg`、`box-shadow: --shadow-sm`
  - 内部の `<img>` は `object-fit: cover`
- `.ph-img`：写真未支給箇所のプレースホルダ（斜線ストライプ＋モノスペースラベル）
- `.service-block__tag` / `__title` / `__body` / `__meta`

### Board Members Teaser — `.member-teaser` / `.member-teaser__card`

- `.member-teaser`：`grid-template-columns: repeat(3, 1fr)`（**3枚固定**、モバイルで2列 → 1列）
- カード構成：ポートレート ／ 役職（英） ／ 氏名（`--font-serif`）

### Members Grid（詳細ページ用）— `.members-grid` / `.member-card`

ボードメンバーページで使用。カード構成：ポートレート ／ 役職 ／ 氏名 ／ 担当領域 ／ 一言。

### News List — `.news-list` / `.news-row`

- 各行：サムネイル ／ 日付＋カテゴリ ／ タイトル ／ 要約 ／ 矢印
- カテゴリ：お知らせ／サービス／イベント／メディア／採用／教育コラム
- `.news-filter`：カテゴリタブ。押下時に `is-active` を付ける

### Final CTA — `.final-cta`

各ページ末尾に置く CTAブロック。タイトル＋補助文＋2〜3のボタン。

### Placeholder Image — `.ph-img`

写真未支給箇所の共通プレースホルダ。斜線ストライプ背景 + モノスペースのラベル文字。実写真差し替え箇所は「Assets Checklist」参照。

---

## Interactions & Behavior

### Navigation (SPA-style routing)

`design_files/scripts/app.js` が実装している擬似SPAルーター。**実装先ではフレームワークのルーターに置き換え**てください。

- URL：`#<page-id>` のハッシュルーティング
- クリック：`[data-nav]` 属性のついた要素で発火
- 遷移時：ページ内容を差し替え → `window.scrollTo({top: 0})` で先頭へ
- 直近のページを `localStorage.apupu:page` に保存し、再訪時に復元
- 無効なハッシュ（削除済みページの古いブックマーク等）はトップにフォールバック

**本番実装のURL設計案**：

| ページ | 推奨パス |
|---|---|
| トップ | `/` |
| 事業・サービス | `/services` |
| 代表メッセージ | `/message` |
| ボードメンバー | `/members` |
| お知らせ一覧 | `/news` |
| お知らせ詳細 | `/news/[slug]` |
| 会社概要 | `/company` |
| お問い合わせ | `/contact` |
| プライバシーポリシー | `/privacy` |

### External Link (Service LP) — 重要

「体験・入会」に関する導線は、コーポレートサイトからは受付を行わず、**すべて外部の「そろばんあっぷっぷ」サービスLPへ誘導**します。

- 該当箇所：フッター「サービス情報」列 ／ トップHERO下のService セクション ／ トップFinal CTA ／ Services ページFinal CTA ／ Contactページのサイドカード
- 実装ルール：`target="_blank" rel="noopener"` を付与し、ラベル末尾に `↗` マークを表示
- URL：`href="#"` はダミー。**本番では正式なサービスLPのURLに差し替える**

### Tone Switch（プレビュー専用・本番では削除）

右上に固定表示される `.tone-switch`。押下で `body[data-tone]` を切替、`localStorage.apupu:tone` に保存。**本番リリース前に必ずDOMごと削除**。

### Mobile Menu

- `#menuToggle`（ハンバーガー）押下で `#mobileMenu` に `.is-open` を付与
- `aria-expanded` / `aria-hidden` を同期
- リンク押下時は自動で閉じる

### Hover States

- 全リンク：ホバー時に色が `--ink-sub` → `--ink` へ濃くなる（またはunderline）
- `.btn--ghost`：ホバーで塗り反転（透明背景 → インク背景）
- `.mvv-card` / `.service-card` / `.news-row`：ホバー時に軽く浮き上がる（`translateY(-2px)` + shadow強化）
- トランジション：`transition: all 240ms cubic-bezier(0.2, 0.7, 0.2, 1)` を基準

### Form (Contact)

`design_files/scripts/pages/contact.js` にお問い合わせフォームのマークアップあり。

- 必須項目：お名前／メールアドレス／お問い合わせ種別／お問い合わせ内容
- 任意項目：会社名／団体名／電話番号
- お問い合わせ種別：**サービスについて／提携について／取材について／その他**（体験・入会・採用の項目は削除済み）
- プライバシーポリシー同意チェック（必須）
- 送信ボタンは同意チェックがONになるまで無効化（実装時に追加してください）
- **メール送信／CRM連携は未実装**。実装先で SendGrid・Resend・SES・HubSpot などに接続してください
- 送信先メールアドレスは会社の代表アドレス `support@apupu.family` を想定

### Responsive

- ブレイクポイント：
  - モバイル：`~ 640px`
  - タブレット：`641 ~ 960px`
  - デスクトップ：`961px ~`
- 主要レイアウトの縦積み化は `@media (max-width: 900px)` を基準
- モバイル時、`site-nav`（PCナビ）は非表示、`site-header__menu`（ハンバーガー）を表示

---

## State Management

コーポレートサイトなので**アプリケーション状態はほぼ不要**。以下だけを最小構成で管理してください。

| 状態 | 保存先 | 用途 |
|---|---|---|
| 現在のルート | URL（フレームワークのルーター） | ページ切替 |
| モバイルメニュー開閉 | ローカル state | ハンバーガー動作 |
| Newsフィルタ選択カテゴリ | ローカル state | 一覧の絞り込み |
| Contactフォーム入力値 | ローカル state | 送信時にAPIへPOST |

**データフェッチ**：

- Newsだけは将来のCMS連携を想定 → 最初は静的データでOK、後にAPI化しやすいよう分離しておくこと（`design_files/scripts/pages/news.js` の `news` 配列がそのままデータソースになる）
- 他のページは静的コンテンツ

---

## Company Information（会社概要ページの確定データ）

`design_files/scripts/pages/company.js` に反映済み。以下は本番でもこの通り実装してください。

| 項目 | 内容 |
|---|---|
| 会社名 | 株式会社あっぷっぷ |
| 代表者 | 藤村　大生 |
| 設立 | 2021年10月 |
| 所在地 | 〒220-0004 神奈川県横浜市西区北幸１丁目１１番１号 水信ビル７階 |
| 提供サービス | オンラインそろばんレッスン「そろばんあっぷっぷ」 |
| 事業内容 | ・オンラインそろばん教育事業<br>・関連する教材・コンテンツの企画開発 |
| 連絡先 | support@apupu.family（`mailto:` リンク化） |
| 公式サイト | ―（未設定・ブランク表記） |
| SNS | Instagram のみ：`https://www.instagram.com/soroban_apupu?igsi=MWhvZW5vbDRncXYwdA%3D%3D&utm_source=qr` |
| 沿革 | 2021.10 株式会社あっぷっぷ 設立<br>2021.10 「そろばんあっぷっぷ」サービス開始<br>2026.04 「そろばんあっぷっぷ」ライトプラン提供開始 |

---

## Board Members（確定データ）

| 役職 | 氏名 | 担当領域 |
|---|---|---|
| Founder / CEO | 藤村　大生 | 経営、教育理念、事業開発 |
| COO | 惠上　裕介 | 事業運営、教室オペレーション |
| CTO | 石野　隼伍 | プロダクト開発、テクノロジー |

**代表メッセージ（`design_files/scripts/pages/message.js`）は実文が入っています**。実装時にはそのまま使用してください。要点：

- 母親が実家で運営するそろばん教室で育った幼少期
- 数々の大会で優勝を経験
- 公認会計士取得 → 一般事業会社の経営に従事し M&A も経験
- その経験を子どもたちに届けたいという想いで、オンラインで挑戦

---

## Accessibility

- ランドマーク：`<header>` `<nav>` `<main>` `<footer>` を正しく使用
- `aria-label` / `aria-expanded` / `aria-hidden`：ヘッダー・モバイルメニューに設定済み
- キーボード操作：全リンク・ボタンは tab 移動＋Enter 発火に対応させること
- フォーカスリング：ブラウザデフォルトを消さず、目視できる色（`--ink` の 2px outline）で維持
- コントラスト：本文 `--ink` (#1B2A4E) on `--bg` (#FFF) は AAA 相当。アクセント黄色 (`#F5C542`) を**テキスト背景として使う場合は文字色を `--ink` に**（黄on白は不可）

---

## SEO / Meta

- 各ページに個別の `<title>` `<meta name="description">` `<meta property="og:*">` を設定
- 現状 `design_files/index.html` は SPA構造のため単一 title のみ。本番実装では**各URLごとに個別metaを持たせる**こと
- サイト全体の言語：`<html lang="ja">`
- ロゴ画像：`design_files/assets/logo.png`（favicon / OG にも流用可）
- 構造化データ（`Organization` schema.org）の追加を推奨
  - name: 株式会社あっぷっぷ
  - foundingDate: 2021-10
  - address: 〒220-0004 神奈川県横浜市西区北幸１丁目１１番１号 水信ビル７階
  - email: support@apupu.family
  - sameAs: [Instagram URL]

---

## Assets

### 同梱アセット（実素材あり）

- `design_files/assets/logo.png` — 株式会社あっぷっぷのロゴ
- `design_files/assets/hero-main.jpg` — トップHEROメインビジュアル（親子でそろばんに向き合う自然光の写真）
- `design_files/assets/lesson-scene.jpg` — Service セクション用レッスン風景写真（ヘッドセットを付けた子どもとお母様がノートPCとそろばんに向き合う様子）

### 未支給アセット（実装時に別途手配が必要）

デザイン内で `[〜を入力してください]` とラベル付きのプレースホルダになっている箇所を**すべて実素材に差し替える**必要があります。

| 種別 | 用途 | 該当箇所 |
|---|---|---|
| 代表ポートレート | 代表メッセージ・ボードメンバー・トップページ Message Teaser | `message.js` `members.js` `top.js` |
| COO ／ CTO ポートレート | ボードメンバーカード | `members.js` `top.js`（member-teaser） |
| メンバー詳細写真 | ボードメンバーページの Member Profile セクション | `members.js` |
| お知らせサムネイル | 各記事 | `news.js` `news-detail.js` |
| 対談ビジュアル | Board Talk セクション | `members.js` |

**未確定の外部リンク**：

- CTA「サービスLPを見る ↗」の `href="#"` → 正式な「そろばんあっぷっぷ」サービスLPの URL に差し替え
- 電話番号（Contactページ「メール・電話」カード内）→ 代表電話番号を入力（または「電話でのお問い合わせは休止」等の運用文言に）

---

## Files

`design_files/` 直下の構成：

```
design_files/
├── index.html                    # エントリー。ヘッダー・フッター・ルーターマウント
├── styles/
│   └── main.css                  # 全スタイル（デザイントークン + 全ページCSS）
├── scripts/
│   ├── app.js                    # 擬似SPAルーター（本番ではフレームワークルーターに置換）
│   ├── all-pages.js              # 全ページテンプレートを結合した1ファイル版
│   └── pages/                    # ページごとに分割したテンプレート（実装時はこちらを参照）
│       ├── top.js                # 01 トップ（HERO / MVV / Service / Members / Message / CTA）
│       ├── services.js           # 02 事業・サービス
│       ├── message.js            # 03 代表メッセージ
│       ├── members.js            # 04 ボードメンバー
│       ├── news.js               # 05 お知らせ一覧
│       ├── news-detail.js        # 05-1 お知らせ詳細
│       ├── company.js            # 06 会社概要
│       ├── contact.js            # 07 お問い合わせ
│       └── privacy.js            # 08 プライバシーポリシー
└── assets/
    ├── logo.png                  # 会社ロゴ
    ├── hero-main.jpg             # HEROメインビジュアル
    └── lesson-scene.jpg          # Service セクション用レッスン風景
```

### 実装時の参照優先順位

1. **各ページのHTML構造とコピー** → `design_files/scripts/pages/<page>.js`（テンプレートリテラル内に完成HTMLが入っています）
2. **スタイル・トークン・コンポーネントCSS** → `design_files/styles/main.css`
3. **グローバル（ヘッダー・フッター・モバイルメニュー）** → `design_files/index.html`
4. **ルーティング・トーン切替の挙動** → `design_files/scripts/app.js`
5. **一括ビューが欲しい場合の結合版** → `design_files/scripts/all-pages.js`（`pages/*` と内容同期済み。編集は必ず `pages/*` を優先）

### プレビュー方法

`design_files/` をローカルの静的サーバで配信すれば、デザインをブラウザで確認できます。

```bash
cd design_handoff_apupu_corporate_site/design_files
python3 -m http.server 8000
# → http://localhost:8000/
```

---

## Implementation Checklist（実装時のチェックポイント）

- [ ] 対象コードベース（Next.js / Astro / WordPress など）に合わせて共通レイアウト（Header / Footer / MobileMenu）をコンポーネント化
- [ ] デザイントークン（colors / typography / spacing / radius / shadow）を Tailwind config もしくは CSS Variables として移植
- [ ] Google Fonts（Noto Serif JP / Noto Sans JP / EB Garamond / JetBrains Mono）を導入
- [ ] 各ページを個別ルート／ファイルとして実装
- [ ] **サービスは「そろばんあっぷっぷ」1つのみ**の構成を崩さない
- [ ] **ブランド表記ルール（会社＝株式会社あっぷっぷ／サービス＝そろばんあっぷっぷ）**を全ページで徹底
- [ ] お知らせを CMS or Markdown 管理に接続
- [ ] お問い合わせフォームをメール送信（`support@apupu.family` 宛）／CRM に接続、送信成功／失敗UIを実装
- [ ] Tone Switch（`#toneSwitch`）を**削除**、トーンAを固定
- [ ] 「体験・入会」の直接募集はサイトから行わない。必要な導線はすべて外部サービスLP（`target="_blank"`）へ
- [ ] 「サービスLPを見る ↗」の `href="#"` を正式URLに差し替え
- [ ] 各ページに個別の meta / OG / 構造化データを設定
- [ ] ポートレート写真（代表・COO・CTO）を実写真に差し替え
- [ ] 404 / 500 ページの用意
- [ ] `robots.txt` / `sitemap.xml` を生成
- [ ] アクセシビリティ最終チェック（キーボード操作／スクリーンリーダー／コントラスト）
- [ ] Lighthouse スコア確認（Performance / Accessibility / SEO）

---

## Contact

デザイン意図・コピーの解釈・トークンの追加変更などについて疑問があれば、デザイン担当まで確認してください。

「株式会社あっぷっぷ」というブランドの語感（親しみやすさと、教育としての静かな誇り、そして「あっぷっぷ」という愛称的な柔らかさ）は、実装時にも大切にしてほしい点です。
