window.PAGE_CONTACT = () => `
<section class="page-hero">
  <div class="page-hero__deco"></div>
  <div class="container page-hero__inner">
    <div class="breadcrumbs"><a href="#top" data-nav="top">HOME</a><span>／</span>お問い合わせ</div>
    <div class="eyebrow">Contact ／ お問い合わせ</div>
    <h1 class="page-hero__title">
      対話は、<br>ここから始まります。
    </h1>
    <p class="page-hero__lead">
会社・サービスに関するご相談、提携・取材のご依頼まで。目的をお選びいただき、お気軽にご連絡ください。担当より順にご返信いたします。<br><span style="font-size: 13px; color: var(--ink-mute);">※ レッスンの体験・お申し込みは、別サイトである「そろばんあっぷっぷ」サービスLPにてご案内しております。</span>
    </p>
  </div>
</section>

<section class="section container">
  <div class="eyebrow">Select ／ お問い合わせ種別</div>
  <div class="contact-types">
    ${[
      ['Service', 'サービスについて', 'サービス内容・教育方針についてのご質問'],
      ['Partnership', '提携について', '事業提携・共同企画・パートナー相談'],
      ['Media', '取材について', '取材・登壇・寄稿・広報のご依頼'],
      ['Other', 'その他', '上記以外のお問い合わせ全般'],
    ].map(([tag, title, desc], i) => `
      <div class="contact-type ${i === 0 ? 'is-active' : ''}" data-type="${tag}">
        <div class="contact-type__tag">${tag}</div>
        <h4>${title}</h4>
        <p>${desc}</p>
      </div>
    `).join('')}
  </div>
</section>

<section class="contact-form">
  <form onsubmit="event.preventDefault(); alert('※ プレビューです。送信後の完了画面はこちらに表示されます。');">
    <div class="contact-form__row">
      <div class="contact-form__label">
        <span>お名前</span>
        <span class="req">必須</span>
      </div>
      <input type="text" placeholder="山田 太郎" required>
    </div>

    <div class="contact-form__row">
      <div class="contact-form__label">
        <span>会社名／団体名</span>
        <span class="opt">任意</span>
      </div>
      <input type="text" placeholder="株式会社〇〇">
    </div>

    <div class="contact-form__row">
      <div class="contact-form__label">
        <span>メールアドレス</span>
        <span class="req">必須</span>
      </div>
      <input type="email" placeholder="example@apupu.example" required>
    </div>

    <div class="contact-form__row">
      <div class="contact-form__label">
        <span>電話番号</span>
        <span class="opt">任意</span>
      </div>
      <input type="tel" placeholder="090-0000-0000">
    </div>

    <div class="contact-form__row">
      <div class="contact-form__label">
        <span>お問い合わせ種別</span>
        <span class="req">必須</span>
      </div>
      <select required>
        <option value="">選択してください</option>
        <option>サービスについて</option>
        <option>提携について</option>
        <option>取材について</option>
        <option>その他</option>
      </select>
    </div>

    <div class="contact-form__row">
      <div class="contact-form__label">
        <span>お問い合わせ内容</span>
        <span class="req">必須</span>
      </div>
      <textarea placeholder="ご相談の内容、背景、ご希望をご記入ください。" required></textarea>
    </div>

    <label class="contact-form__consent">
      <input type="checkbox" required>
      <span>
        <a href="#privacy" data-nav="privacy">プライバシーポリシー</a>に同意のうえ、送信します。<br>
        <span style="color: var(--ink-mute); font-size: 12px;">お預かりした情報は、お問い合わせ対応の目的以外には使用いたしません。</span>
      </span>
    </label>

    <div class="contact-form__submit">
      <button type="submit" class="btn btn--accent">
        送信する <span class="btn__arrow"></span>
      </button>
    </div>
  </form>
</section>

<section class="section section--sub">
  <div class="container">
    <div class="sec-head sec-head--center">
      <div class="eyebrow" style="justify-content: center; display: inline-flex;">Other Channels</div>
      <h2 class="h-headline">別のチャンネルも、<br>ご用意しています。</h2>
    </div>
    <div class="grid-3">
      <div class="card">
        <div style="font-family: var(--font-latin); font-style: italic; color: var(--accent-2); font-size: 12px; letter-spacing: 0.08em; margin-bottom: 12px;">LINE</div>
        <h4 style="font-family: var(--font-serif); font-size: 17px; font-weight: 500; margin: 0 0 12px; color: var(--ink); letter-spacing: 0.04em;">公式LINE</h4>
        <p style="font-size: 13.5px; line-height: 1.9; color: var(--ink-sub); margin: 0 0 20px;">
          気軽なご相談は、公式LINEからもお受けしています。
        </p>
        <a href="#" style="font-family: var(--font-serif); font-size: 13px; color: var(--ink); letter-spacing: 0.06em;">LINEで友だち追加 →</a>
      </div>
      <div class="card">
        <div style="font-family: var(--font-latin); font-style: italic; color: var(--accent-2); font-size: 12px; letter-spacing: 0.08em; margin-bottom: 12px;">Service LP</div>
        <h4 style="font-family: var(--font-serif); font-size: 17px; font-weight: 500; margin: 0 0 12px; color: var(--ink); letter-spacing: 0.04em;">サービスLP（別サイト）</h4>
        <p style="font-size: 13.5px; line-height: 1.9; color: var(--ink-sub); margin: 0 0 20px;">
          レッスン内容・料金・体験・サイトからのご申し込みは、サービスLPをご覧ください。
        </p>
        <a href="#" target="_blank" rel="noopener" style="font-family: var(--font-serif); font-size: 13px; color: var(--ink); letter-spacing: 0.06em;">サービスLPを見る　↗</a>
      </div>
      <div class="card">
        <div style="font-family: var(--font-latin); font-style: italic; color: var(--accent-2); font-size: 12px; letter-spacing: 0.08em; margin-bottom: 12px;">Direct</div>
        <h4 style="font-family: var(--font-serif); font-size: 17px; font-weight: 500; margin: 0 0 12px; color: var(--ink); letter-spacing: 0.04em;">メール・電話</h4>
        <p style="font-size: 13.5px; line-height: 1.9; color: var(--ink-sub); margin: 0;">
          <span class="ph">[代表電話・メールアドレスを入力]</span>
        </p>
      </div>
    </div>
  </div>
</section>
`;
