window.PAGE_NEWS = () => {
  const categories = ['すべて', 'お知らせ', 'サービス', 'イベント', 'メディア', '採用', 'アップデート', '教育コラム'];
  const news = [
    ['2026.07.15', '教育コラム', '「頭のそろばん」という考え方について。', '数字を単なる記号ではなく、そろばんの珠の配置として捉える教育観について、代表からのコラムです。'],
    ['2026.07.01', 'サービス', '「そろばんあっぷっぷ」レッスンカリキュラムの改訂について。', '2026年夏より、年齢と進度に応じた個別カリキュラムをアップデートしました。より一人ひとりに寄り添った内容にリニューアルしています。'],
    ['2026.06.20', 'イベント', '夏の親子オンラインイベント「数字で遊ぶ日曜日」を開催します。', '親子で楽しめる、数字を使った遊びと対話のイベント。8月の日曜開催。ご参加受付中です。'],
    ['2026.06.10', '採用', 'オンラインそろばん講師（正社員・業務委託）を募集しています。', '子どもたちの成長に伴走する、講師の仲間を探しています。教育経験の有無は問いません。'],
    ['2026.05.28', 'メディア', '教育専門誌にて代表インタビューが掲載されました。', 'そろばんとAI時代の教育について、代表が語った記事が[媒体名]に掲載されました。'],
    ['2026.05.15', 'お知らせ', '「そろばんあっぷっぷ」サービスLPをリニューアルしました。', 'レッスン内容やカリキュラムをより分かりやすくお伝えするため、サービスLPをリニューアルしました。詳しくは別サイトのサービスLPをご覧ください。'],
    ['2026.05.01', 'お知らせ', 'ゴールデンウィーク期間中の運営について。', '該当期間中の営業日・カスタマーサポート対応についてお知らせします。'],
    ['2026.04.20', '教育コラム', '「待つ」ことが、子どもを育てる理由。', '「待つ」という教育姿勢について、教育担当メンバーから寄稿。株式会社あっぷっぷが日々のレッスンで大切にしている考え方です。'],
    ['2026.04.10', 'お知らせ', '保護者向け月次レポートの提供を開始しました。', 'お子さまの学習状況を、より丁寧にお伝えするための月次レポートの提供を開始しました。ご家庭での対話にお役立ていただけます。'],
    ['2026.03.28', 'お知らせ', '新年度に向けた運営体制のご案内。', '4月からの新年度に合わせて、講師体制・時間割の一部を刷新しました。詳細は在籍生徒の皆さまへ順次ご案内しています。'],
  ];

  return `
<section class="page-hero">
  <div class="page-hero__deco"></div>
  <div class="container page-hero__inner">
    <div class="breadcrumbs"><a href="#top" data-nav="top">HOME</a><span>／</span>お知らせ</div>
    <div class="eyebrow">News ／ お知らせ</div>
    <h1 class="page-hero__title">
      株式会社あっぷっぷからの、<br>お知らせ。
    </h1>
    <p class="page-hero__lead">
      サービス更新、イベント、メディア掲載、教育コラムまで。私たちの動きと考えを、こちらでお届けします。
    </p>
  </div>
</section>

<section class="container">
  <div class="news-filter">
    ${categories.map((c, i) => `
      <button class="${i === 0 ? 'is-active' : ''}" data-filter="${c}">${c}</button>
    `).join('')}
  </div>

  <div class="news-list">
    ${news.map(([date, cat, title, excerpt]) => `
      <article class="news-row" data-nav="news-detail">
        <div class="news-row__thumb ph-img"></div>
        <div>
          <div class="news-row__meta">
            <span class="news-row__date">${date}</span>
            <span class="news-row__cat">${cat}</span>
          </div>
          <h3 class="news-row__title">${title}</h3>
          <p class="news-row__excerpt">${excerpt}</p>
        </div>
        <div class="news-row__arrow"></div>
      </article>
    `).join('')}
  </div>

  <div class="pagination">
    <button>‹</button>
    <button class="is-current">1</button>
    <button>2</button>
    <button>3</button>
    <button>4</button>
    <button>›</button>
  </div>
</section>
`;
};
