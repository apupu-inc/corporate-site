window.PAGE_SERVICES = () => {
  // 現在提供しているサービスは「そろばんあっぷっぷ（オンラインそろばんレッスン）」の 1 つのみ。
  const services = [
    {
      tag: 'Service 01', title: 'オンラインそろばんレッスン「そろばんあっぷっぷ」',
      image: 'assets/lesson-scene.jpg',
      imageAlt: 'そろばんあっぷっぷ オンラインレッスン風景',
      body: '講師と少人数で向き合うライブレッスン。年齢と進度に応じた個別カリキュラムで、一人ひとりに寄り添いながら伴走します。オンラインだからこそ叶う、家庭を起点にした継続的な学びの場です。現在、私たちが提供している唯一のサービスであり、事業の主軸です。',
      meta: [
        ['対象', '[対象年齢・条件を入力してください]'],
        ['形式', 'オンライン／少人数ライブ形式'],
        ['目的', '数字への親しみ、計算力、考える力の基礎形成'],
        ['特徴', '少人数ライブ／個別進度／保護者面談'],
        ['提供価値', 'そろばんを通じた、思考習慣と自己肯定感の育成'],
      ],
    },
  ];

  return `
<section class="page-hero">
  <div class="page-hero__deco"></div>
  <div class="container page-hero__inner">
    <div class="breadcrumbs"><a href="#top" data-nav="top">HOME</a><span>／</span>事業・サービス</div>
    <div class="eyebrow">Services ／ 事業・サービス</div>
    <h1 class="page-hero__title">
      いま私たちが届けているのは、<br>ひとつのサービス。
    </h1>
    <p class="page-hero__lead">
      現在、株式会社あっぷっぷが提供しているサービスはオンラインそろばんレッスン「そろばんあっぷっぷ」のみです。まずはこの一点に集中し、目の前の子どもたちに、確かな学びの時間を届けることに向き合っています。
    </p>
  </div>
</section>

<section class="container">
  ${services.map((s) => `
    <div class="service-block">
      <div class="service-block__grid">
        ${s.image ? `
          <div class="service-block__photo">
            <img src="${s.image}" alt="${s.imageAlt || s.title}" loading="lazy">
          </div>
        ` : `
          <div class="ph-img" style="aspect-ratio: 5/4; border-radius: var(--radius-lg);">
            <div class="ph-img__label ph-img__label--photo">[${s.title} のイメージ写真を入力してください]</div>
          </div>
        `}
        <div>
          <span class="service-block__tag">${s.tag}</span>
          <h2 class="service-block__title">${s.title}</h2>
          <p class="service-block__body">${s.body}</p>
          <ul class="service-block__meta">
            ${s.meta.map(([k, v]) => `<li><strong>${k}</strong><span>${v}</span></li>`).join('')}
          </ul>
          <a href="#contact" data-nav="contact" class="btn btn--ghost">お問い合わせ <span class="btn__arrow"></span></a>
        </div>
      </div>
    </div>
  `).join('')}
</section>

<!-- 今後の構想 -->
<section class="future-roadmap">
  <div class="container">
    <div class="sec-head">
      <div class="eyebrow">Future ／ 今後の構想</div>
      <h2 class="h-headline">私たちが、<br>これから挑む場所。</h2>
      <p class="h-lead">
        現在は「そろばんあっぷっぷ」一本に集中していますが、その先に株式会社あっぷっぷが向かっていく方向性を、素直に記しておきます。いずれも、子どもたちの可能性を広げるための挑戦として、丁寧に育てていきます。
      </p>
    </div>
    <div class="future-roadmap__list">
      ${[
        ['海外展開', '日本のそろばん文化を、海外の子どもたちにも届けていきます。'],
        ['多言語化', '英語、中国語をはじめ、世界の子どもが学べる環境を整えます。'],
        ['教育機関との連携', '学校・自治体との協働で、地域の学びを底上げします。'],
        ['パートナースクール構想', '各地域のパートナー教室と、株式会社あっぷっぷの教育を広げます。'],
        ['講師育成', '子どもと向き合える指導者を、社会に増やしていきます。'],
        ['教育メソッドの体系化', '株式会社あっぷっぷ独自の教育観を、伝えられる形に整えていきます。'],
        ['数字教育を軸にした新サービス', 'そろばんを超えた、数字教育の新しい入口を開きます。'],
      ].map(([title, body], i) => `
        <div class="future-item">
          <div class="future-item__mark">${String(i+1).padStart(2, '0')}</div>
          <div>
            <h5>${title}</h5>
            <p>${body}</p>
          </div>
        </div>
      `).join('')}
    </div>
  </div>
</section>

<section class="final-cta">
  <div class="container">
    <h2 class="final-cta__title">サービスの詳細は、<br>サービスLPへ。</h2>
    <p class="final-cta__sub">料金プラン、時間割、レッスンお申込みなどの詳しい情報は、<br>別サイトである「そろばんあっぷっぷ」サービスLPをご確認ください。<br>本コーポレートサイトでは、お申し込みの受付は行っておりません。</p>
    <div class="final-cta__ctas">
      <a href="#" target="_blank" rel="noopener" class="btn btn--accent">サービスLPを見る　↗</a>
      <a href="#contact" data-nav="contact" class="btn btn--ghost">会社へのお問い合わせ <span class="btn__arrow"></span></a>
    </div>
  </div>
</section>
`;
};
