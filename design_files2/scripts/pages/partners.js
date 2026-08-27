window.PAGE_PARTNERS = () => `
<section class="page-hero">
  <div class="page-hero__deco"></div>
  <div class="container page-hero__inner">
    <div class="breadcrumbs"><a href="#top" data-nav="top">HOME</a><span>／</span>パートナー・提携</div>
    <div class="eyebrow">Partners ／ パートナー・提携について</div>
    <h1 class="page-hero__title">
      一社だけでは、<br>つくれない未来があります。
    </h1>
    <p class="page-hero__lead">
      APUPUは、子どもたちの学びの可能性を広げるため、さまざまな教育機関、企業、地域、海外パートナーとの連携を目指しています。共に、新しい学びのかたちを考えていただける方をお待ちしています。
    </p>
  </div>
</section>

<!-- 想定するパートナー -->
<section class="section container">
  <div class="sec-head">
    <div class="eyebrow">Who We Partner With</div>
    <h2 class="h-headline">想定する<br>パートナーの方々。</h2>
    <p class="h-lead">
      学びを取り巻くすべての立場の方が、私たちのパートナー候補です。連携の形は、対象と目的によって柔軟に設計します。
    </p>
  </div>
  <ul class="partner-targets">
    <li>学習塾</li>
    <li>教育事業者</li>
    <li>学校</li>
    <li>幼稚園・保育園</li>
    <li>自治体</li>
    <li>企業</li>
    <li>海外教育事業者</li>
    <li>メディア</li>
    <li>教材会社</li>
    <li>研究機関</li>
  </ul>
</section>

<!-- 想定する提携内容 -->
<section class="partner-list">
  <div class="container">
    <div class="sec-head">
      <div class="eyebrow">Partnership Types</div>
      <h2 class="h-headline">想定する、<br>提携のかたち。</h2>
      <p class="h-lead">
        いずれも、これから育てていきたい連携のかたちです。既に決まった枠組みではなく、パートナーの方々と一緒に、最適な形を模索していきます。
      </p>
    </div>
    <div class="partner-list__grid">
      ${[
        ['教材連携', 'APUPUの教材や学習ログを、パートナー教室・企業の学習環境に組み込む連携です。'],
        ['講座提供', 'そろばんあっぷっぷの講座を、パートナー内の会員向けに提供する連携です。'],
        ['カリキュラム導入', '学校・自治体のカリキュラムに、APUPUの数字教育を取り入れていただく連携です。'],
        ['共同イベント', '親子向けイベント、教育セミナー、大会など、共同企画による接点づくりを行います。'],
        ['生徒紹介', 'ご家庭のご要望に応じ、それぞれの強みを活かした相互紹介の関係を築きます。'],
        ['パートナースクール', '各地域のそろばん教室と、APUPUの教育観・教材で連携する構想を持っています。'],
        ['共同研究', '教育効果、学習継続、家庭学習など、研究機関との共同研究を歓迎します。'],
        ['海外展開', '海外の教育事業者と、日本のそろばん文化を届けるプロジェクトを進めます。'],
        ['メディア取材', '取材・寄稿・登壇のご依頼を、幅広くお受けしています。'],
      ].map(([title, body]) => `
        <div class="partner-list__item">
          <h4>${title}</h4>
          <p>${body}</p>
        </div>
      `).join('')}
    </div>
  </div>
</section>

<!-- 過去実績 -->
<section class="section container">
  <div class="sec-head">
    <div class="eyebrow">Track Record</div>
    <h2 class="h-headline">これまでの、<br>ご一緒の実績。</h2>
    <p class="h-lead">
      <span class="ph">※ 提携先ロゴ、導入実績、メディア掲載実績は、実データ入力後にこちらへ掲載します。</span>
    </p>
  </div>
  <div style="display: grid; grid-template-columns: repeat(6, 1fr); gap: 1px; background: var(--line); border: 1px solid var(--line); margin-top: 40px;">
    ${Array.from({length: 12}, (_, i) => `
      <div style="aspect-ratio: 3/2; background: var(--bg); display: flex; align-items: center; justify-content: center; color: var(--ink-mute); font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.06em;">
        [Partner Logo ${String(i+1).padStart(2, '0')}]
      </div>
    `).join('')}
  </div>
</section>

<!-- 相談フロー -->
<section class="section section--sub">
  <div class="container">
    <div class="sec-head">
      <div class="eyebrow">How to Reach Us</div>
      <h2 class="h-headline">まずは、<br>ご相談から。</h2>
      <p class="h-lead">
        すぐに提携を決めていただく必要はありません。まずはお互いを知り、可能性を語り合うところから始めましょう。
      </p>
    </div>
    <div class="flow-steps" style="grid-template-columns: repeat(4, 1fr);">
      ${[
        ['01', 'ご連絡', 'お問い合わせフォームより、提携に関するご相談としてご連絡ください。'],
        ['02', 'ヒアリング', 'オンラインでの対話を通じて、お互いの課題感・目的を共有します。'],
        ['03', '企画・提案', '目的に応じた連携の形を、双方で企画・提案し合います。'],
        ['04', '実施・伴走', '契約・実施後も、伴走型で共に育てていきます。'],
      ].map(([n, t, d]) => `
        <div class="flow-steps__step">
          <div class="flow-steps__step-num">Step ${n}</div>
          <h5>${t}</h5>
          <p>${d}</p>
        </div>
      `).join('')}
    </div>
  </div>
</section>

<section class="final-cta">
  <div class="container">
    <h2 class="final-cta__title">まずは、話してみませんか。</h2>
    <p class="final-cta__sub">「提携できるかどうか分からない」段階でも、大丈夫です。<br>お互いを知る対話から、いつでも始められます。</p>
    <div class="final-cta__ctas">
      <a href="#contact" data-nav="contact" class="btn btn--accent">提携について相談する <span class="btn__arrow"></span></a>
      <a href="#about" data-nav="about" class="btn btn--ghost">私たちについて <span class="btn__arrow"></span></a>
    </div>
  </div>
</section>
`;
