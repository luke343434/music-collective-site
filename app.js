const siteData = {
  name: "obscuRE TRAX",
  slogan: "无意整饬，参差错落间，寻绎丰饶的韵致。",
  releases: [
    {
      title: "Quiddity:2 (Part A)",
      codeKey: "releaseData.codeAlbum",
      descriptionKey: "releaseData.partA",
      dateKey: "releaseData.unpublished",
      styleKey: "releaseData.styleAlbum",
      image: "assets/release-quiddity2-a.jpg",
      url: "https://www.beatarray.cn/label/obscuRETRAX",
    },
    {
      title: "Quiddity:2 (Part B)",
      codeKey: "releaseData.codeAlbum",
      descriptionKey: "releaseData.partB",
      dateKey: "releaseData.unpublished",
      styleKey: "releaseData.styleAlbum",
      image: "assets/release-02.jpg",
      url: "https://www.beatarray.cn/label/obscuRETRAX",
    },
    {
      title: "Quiddity",
      codeKey: "releaseData.codeQuiddity",
      descriptionKey: "releaseData.quiddity",
      date: "2024.06.25",
      styleKey: "releaseData.styleVarious",
      image: "assets/release-quiddity.webp",
      url: "https://music.163.com/album?id=287426775",
    },
    {
      title: "Transparent Tape",
      codeKey: "releaseData.codeSingle",
      descriptionKey: "releaseData.transparentTape",
      dateKey: "releaseData.unpublished",
      styleKey: "releaseData.styleSingle",
      image: "assets/release-transparent-tape.webp",
      url: "https://music.163.com/song?id=3360381493",
    },
  ],
  artists: [
    { name: "DLsr_DD1", roleKey: "roles.director", tagKey: "roles.directorTag", image: "assets/member-dlsr.jpg", url: "https://music.163.com/#/artist?id=56650146" },
    { name: "A_5621 / AXSyeken", roleKey: "roles.deputy", tagKey: "roles.deputyTag", image: "assets/member-a5621.jpg", url: "https://music.163.com/#/artist?id=56338957" },
    { name: "Like The Wind", roleKey: "roles.ar", tagKey: "roles.arTag", image: "assets/member-like-the-wind.webp", url: "https://music.163.com/#/artist?id=99147049" },
    { name: "Vyn1x_", roleKey: "roles.ar", tagKey: "roles.arTag", image: "assets/member-vyn1x.webp" },
  ],
  collaboratorRows: [
    ["C0okieB0x", "tRee", "DLsr_DD1", "V-Soul", "SHIBUYA RYUTSU 428", "A_5621"],
    ["Like The Wind", "Vyn1x_", "ViroNeX", "祈枫_イタラネ", "R41NSHOWER", "Jeanne d'Arc"],
    ["333xd", "Xpinger", "Ray Snow Ja", "V1nwry_", "LelouchSound", "kaokao"],
    ["ZA.", "lrrise", "L_light", "Asterbit", "Irotas"],
  ],
  platforms: [
    { name: "Beatarray", url: "https://www.beatarray.cn/label/obscuRETRAX" },
    { nameKey: "platforms.netease", url: "https://music.163.com/#/artist?id=123493084" },
    { nameKey: "platforms.qqMusic", url: "https://y.qq.com/n/ryqq_v2/singer/000oaH3J0lAcOi" },
    { name: "Bilibili", url: "https://space.bilibili.com/3706976213141809" },
    { name: "Dizzylab", url: "https://www.dizzylab.net/l/obscuRE%20TRAX/" },
  ],
};

const translations = {
  zh: {
    meta: { title: "模糊框架 obscuRE TRAX | Official", description: "模糊框架（obscuRE TRAX）独立音乐厂牌官方网站。拒绝枷锁，自由创作。" },
    controls: { home: "返回首页", menu: "打开菜单", primaryNav: "主要导航", language: "切换语言", theme: "切换深浅色模式", day: "日间", night: "夜间" },
    nav: { about: "关于", releases: "作品", collaborators: "合作艺人", artists: "成员", activities: "厂牌事务", history: "历程", visual: "视觉", contact: "联系" },
    sections: { manifesto: "01 / 宣言", releases: "02 / 精选发行", collaborators: "03 / 合作艺人", artists: "04 / 运营团队", activities: "05 / 厂牌事务", history: "06 / 发展历程", visual: "07 / 视觉档案", contact: "08 / 联系与平台" },
    hero: {
      eyebrow: "独立厂牌 · 成立于 2024.06.22", localName: "模糊框架",
      slogan: "无意整饬，参差错落间，寻绎丰饶的韵致。",
      intro: "Team obscuRE，多样化电子音乐社团。模糊框架成立于 2024 年 06 月 22 日，于 2024 年 6 月 25 日发布首个作品，后于 2026 年 1 月 26 日具备企业级资质，与广州市友屋网络文化传媒有限公司等企业合作。",
      listen: "聆听作品", submit: "在线投稿", founded: "成立时间", dizzylabSince: "入驻 Dizzylab", identity: "定位", identityValue: "线上 · 电子音乐", scroll: "向下探索", frame: "框架 / 拒绝统一 / 2024",
    },
    manifesto: { aria: "厂牌宣言", quote: "无意整饬，参差错落间，<br />寻绎丰饶的<span>韵致</span>。", note: "拒斥限制，混沌褶皱处，开凿意义的富矿。" },
    releases: { title: "近期作品", description: "从概念专辑 Quiddity 到系列续作与单曲，呈现不被单一风格规训的电子音乐。", previous: "上一张作品", next: "下一张作品", previousShort: "上一张", nextShort: "下一张", pagination: "作品分页", beatarray: "Beatarray 厂牌页", slide: "切换到第 {number} 张作品", cover: "{title} 封面", play: "播放 / 查看", date: "发行日期", style: "风格" },
    releaseData: { partA: "Quiddity 系列第二辑 Part A。多样化电子音乐专辑，由模糊框架发行。", partB: "Quiddity 系列第二辑 Part B。延续对状态、性质与自由意志的声音探索。", quiddity: "模糊框架首张多元音乐概念专辑，在不同风格的参差错落间寻找共同的韵致。", transparentTape: "由 DLsr_DD1 创作并以模糊框架名义发行的单曲。", unpublished: "未公开", codeAlbum: "专辑 / obscuRE TRAX", codeQuiddity: "obs-CD03 / 专辑", codeSingle: "obs-CD04 / 单曲", styleAlbum: "电子音乐 / 专辑", styleVarious: "多元电子音乐", styleSingle: "电子音乐 / 单曲" },
    collaborators: { title: "合作艺人", description: "与模糊框架共同创作、发行与构建声音的音乐人。", aria: "合作艺人名单" },
    artists: { title: "厂牌运营", description: "负责模糊框架审核、发行、母带、编曲与视觉工作的现任运营团队。" },
    roles: { director: "现任主理 / 发行管理 / 编曲 / 母带", deputy: "现任副主理 / 美工 / 编曲", ar: "审核 / 编曲", directorTag: "主理", deputyTag: "副主理", arTag: "审核" },
    activities: {
      title: "框架之内与外", description: "拒绝单一风格的规训，在审核、发行、编曲与平面视觉之间持续构建。",
      review: { title: "作品审核", description: "以作品自身的表达为出发点，不以风格整齐作为唯一判断尺度。", tag: "发行" },
      release: { title: "发行管理", description: "统筹厂牌作品的资料、发布节奏与 Dizzylab 页面管理。", tag: "管理" },
      arrangement: { title: "编曲创作", description: "拒绝枷锁，自由地将脑海中的结构、噪点与旋律转化为作品。", tag: "编曲" },
      design: { title: "平面设计", description: "通过故障、拼贴、网点与高饱和色彩形成厂牌的视觉语言。", tag: "平面" },
    },
    history: {
      title: "发展历程", description: "从正式创立、首张概念专辑，到线上发行与线下活动。",
      founded: { title: "厂牌成立", description: "模糊框架正式创立。" }, firstRelease: { title: "首张专辑发布", description: "发行首张多元音乐概念专辑。" },
      dizzylab: { title: "Dizzylab 账号建立", description: "开始通过 Dizzylab 展示与发行厂牌作品。" }, enterprise: { title: "具备企业级资质", description: "具备企业级资质，与广州市友屋网络文化传媒有限公司等企业合作。" },
      market: { title: "计划参加电侧市场", description: "即将开展的线下活动，信息来自 Beatarray 厂牌发展历程。" },
      archive: { status: "历史征稿 · 已于 2026.05.30 截止", description: "主题为“自由意志”。收录方向为 1–10 分钟电子音乐原创作品，曲名需为以 <b>-ity</b> 结尾、表达性质或状态的单词；亦接受对过往 Quiddity 曲目的 Remix。初审使用 MP3，通过后提交 WAV 24bit / 48kHz 成品。" },
    },
    visual: { title: "混沌的<br /><em>褶皱。</em>", description: "以平面设计记录厂牌的视觉切片：网格、故障、城市、噪点与紫色光谱。", hint: "悬停探索 · 双击放大查看", aria: "视觉档案图片网络", dialogAria: "视觉档案大图查看器", close: "关闭大图", closeHint: "双击背景或按 Esc 关闭", imageAlt: "视觉档案作品 {number}" },
    contact: { title: "保持<br /><em>联系。</em>", description: "发行咨询、投稿、商务合作与其他厂牌事务，请通过邮箱、Beatarray 或以下平台联系。", directorQQ: "主理人 QQ", deputyQQ: "副主理 QQ", note: "中国湖南省长沙市 · 商务合作请注明来意，预计 2 个工作日内回复。", submit: "Beatarray 在线投稿" },
    platforms: { netease: "网易云音乐", qqMusic: "QQ 音乐" },
    footer: { identity: "独立厂牌。", back: "返回顶部 ↑" },
  },
  en: {
    meta: { title: "obscuRE TRAX | Official", description: "The official website of obscuRE TRAX, an independent electronic music label." },
    controls: { home: "Back to home", menu: "Open menu", primaryNav: "Primary navigation", language: "Change language", theme: "Toggle light and dark mode", day: "Light", night: "Dark" },
    nav: { about: "About", releases: "Releases", collaborators: "Collaborators", artists: "Team", activities: "Practice", history: "Timeline", visual: "Visuals", contact: "Contact" },
    sections: { manifesto: "01 / MANIFESTO", releases: "02 / SELECTED RELEASES", collaborators: "03 / COLLABORATORS", artists: "04 / OPERATORS", activities: "05 / LABEL PRACTICE", history: "06 / TIMELINE", visual: "07 / VISUAL ARCHIVE", contact: "08 / CONTACT & LINKS" },
    hero: {
      eyebrow: "INDEPENDENT LABEL · EST. 2024.06.22", localName: "obscuRE FRAME",
      slogan: "No imposed order. We seek richness in irregularity.",
      intro: "Team obscuRE is a diverse electronic music collective founded on June 22, 2024. We released our first work on June 25, 2024, obtained enterprise-level qualifications on January 26, 2026, and collaborate with companies including Guangzhou Youwu Network Culture Media Co., Ltd.",
      listen: "Listen", submit: "Submit Online", founded: "FOUNDED", dizzylabSince: "DIZZYLAB SINCE", identity: "IDENTITY", identityValue: "ONLINE · ELECTRONIC", scroll: "SCROLL TO EXPLORE", frame: "FRAME / NO UNIFORMITY / 2024",
    },
    manifesto: { aria: "Label manifesto", quote: "We impose no uniform order.<br />In irregularity, we seek a richer <span>resonance</span>.", note: "Reject limits. Mine meaning from the folds of chaos." },
    releases: { title: "Recent Releases", description: "From the concept album Quiddity to its sequels and singles, electronic music free from a single stylistic discipline.", previous: "Previous release", next: "Next release", previousShort: "PREV", nextShort: "NEXT", pagination: "Release pagination", beatarray: "Beatarray Label Page", slide: "Go to release {number}", cover: "Cover of {title}", play: "Listen / View", date: "RELEASE DATE", style: "STYLE" },
    releaseData: { partA: "Part A of the second Quiddity volume, a diverse electronic album released by obscuRE TRAX.", partB: "Part B of the second Quiddity volume, continuing an exploration of states, qualities, and free will through sound.", quiddity: "The label's first multi-genre concept album, finding shared resonance among divergent styles.", transparentTape: "A single created by DLsr_DD1 and released through obscuRE TRAX.", unpublished: "NOT DISCLOSED", codeAlbum: "ALBUM / obscuRE TRAX", codeQuiddity: "obs-CD03 / ALBUM", codeSingle: "obs-CD04 / SINGLE", styleAlbum: "ELECTRONIC / ALBUM", styleVarious: "VARIOUS ELECTRONIC", styleSingle: "ELECTRONIC / SINGLE" },
    collaborators: { title: "Collaborators", description: "Artists who create, release, and build sound together with obscuRE TRAX.", aria: "Collaborating artists" },
    artists: { title: "Label Team", description: "The current team responsible for A&R, releases, mastering, arrangement, and visual direction." },
    roles: { director: "Director / Release Management / Arrangement / Mastering", deputy: "Co-Director / Visual Art / Arrangement", ar: "A&R / Arrangement", directorTag: "DIRECTOR", deputyTag: "CO-DIRECTOR", arTag: "A&R" },
    activities: {
      title: "Inside and Beyond the Frame", description: "Rejecting a single stylistic discipline while building across A&R, releases, arrangement, and graphic art.",
      review: { title: "A&R Review", description: "We begin with each work's own expression rather than judging it by stylistic uniformity.", tag: "RELEASE" },
      release: { title: "Release Management", description: "Coordinating release assets, schedules, and the label's Dizzylab presence.", tag: "MANAGEMENT" },
      arrangement: { title: "Arrangement", description: "Turning structures, noise, and melodies from the mind into work without restraint.", tag: "ARRANGEMENT" },
      design: { title: "Graphic Design", description: "Building the label's visual language through glitches, collage, halftones, and saturated color.", tag: "GRAPHIC" },
    },
    history: {
      title: "Timeline", description: "From the label's founding and first concept album to online releases and offline events.",
      founded: { title: "Label Founded", description: "obscuRE TRAX was officially established." }, firstRelease: { title: "First Album Released", description: "Released the label's first multi-genre concept album." },
      dizzylab: { title: "Dizzylab Account Opened", description: "Began presenting and distributing label releases through Dizzylab." }, enterprise: { title: "Enterprise Qualification", description: "Obtained enterprise-level qualifications and began working with companies including Guangzhou Youwu Network Culture Media Co., Ltd." },
      market: { title: "Electronic-Side Market Planned", description: "An upcoming offline event listed in the Beatarray label timeline." },
      archive: { status: "ARCHIVED OPEN CALL · CLOSED 2026.05.30", description: "Theme: “Free Will.” The call accepted original electronic works between 1 and 10 minutes. Titles had to end in <b>-ity</b> and express a quality or state; remixes of past Quiddity tracks were also accepted. MP3 files were used for initial review, followed by 24-bit / 48 kHz WAV masters after acceptance." },
    },
    visual: { title: "FOLDS OF<br /><em>CHAOS.</em>", description: "Visual fragments of the label recorded through grids, glitches, cities, noise, and a violet spectrum.", hint: "Hover to explore · Double-click to enlarge", aria: "Visual archive image network", dialogAria: "Visual archive image viewer", close: "Close image", closeHint: "Double-click the backdrop or press Esc to close", imageAlt: "Visual archive artwork {number}" },
    contact: { title: "KEEP IN<br /><em>TOUCH.</em>", description: "For release inquiries, submissions, business collaboration, and other label matters, contact us by email, Beatarray, or the platforms below.", directorQQ: "Director QQ", deputyQQ: "Co-Director QQ", note: "Changsha, Hunan, China · State your purpose for business inquiries; we aim to reply within two working days.", submit: "Submit via Beatarray" },
    platforms: { netease: "NetEase Cloud Music", qqMusic: "QQ Music" },
    footer: { identity: "INDEPENDENT LABEL.", back: "BACK TO TOP ↑" },
  },
  ja: {
    meta: { title: "obscuRE TRAX | 公式サイト", description: "インディペンデント電子音楽レーベル obscuRE TRAX の公式サイト。" },
    controls: { home: "ホームへ戻る", menu: "メニューを開く", primaryNav: "メインナビゲーション", language: "言語を切り替える", theme: "ライト・ダークモードを切り替える", day: "ライト", night: "ダーク" },
    nav: { about: "概要", releases: "作品", collaborators: "参加アーティスト", artists: "運営", activities: "レーベル活動", history: "沿革", visual: "ビジュアル", contact: "連絡先" },
    sections: { manifesto: "01 / マニフェスト", releases: "02 / 注目作品", collaborators: "03 / 参加アーティスト", artists: "04 / 運営チーム", activities: "05 / レーベル活動", history: "06 / 沿革", visual: "07 / ビジュアルアーカイブ", contact: "08 / 連絡先・リンク" },
    hero: {
      eyebrow: "インディペンデントレーベル · 2024.06.22 設立", localName: "曖昧なフレーム",
      slogan: "整然さを求めず、不揃いの中に豊かな響きを探す。",
      intro: "Team obscuRE は、多様な電子音楽を扱う音楽集団です。2024年6月22日に設立し、同年6月25日に最初の作品を発表しました。2026年1月26日に企業級資格を取得し、広州市友屋網絡文化伝媒有限公司をはじめとする企業と協業しています。",
      listen: "作品を聴く", submit: "オンライン投稿", founded: "設立", dizzylabSince: "DIZZYLAB 開設", identity: "活動形態", identityValue: "オンライン · 電子音楽", scroll: "下へスクロール", frame: "フレーム / 画一性を拒む / 2024",
    },
    manifesto: { aria: "レーベルマニフェスト", quote: "画一的に整えるのではなく、<br />不揃いの中に豊かな<span>響き</span>を探す。", note: "制限を拒み、混沌の襞から意味を掘り起こす。" },
    releases: { title: "最新作品", description: "コンセプトアルバム Quiddity から続編やシングルまで、単一のスタイルに縛られない電子音楽を提示します。", previous: "前の作品", next: "次の作品", previousShort: "前へ", nextShort: "次へ", pagination: "作品ページ切り替え", beatarray: "Beatarray レーベルページ", slide: "作品 {number} に切り替える", cover: "{title} のジャケット", play: "再生 / 詳細", date: "リリース日", style: "スタイル" },
    releaseData: { partA: "Quiddity シリーズ第2作 Part A。obscuRE TRAX がリリースする多様な電子音楽アルバム。", partB: "Quiddity シリーズ第2作 Part B。状態・性質・自由意志を音で探求します。", quiddity: "異なるスタイルの間に共通する響きを見いだす、レーベル初の多元的コンセプトアルバム。", transparentTape: "DLsr_DD1 が制作し、obscuRE TRAX から発表したシングル。", unpublished: "未公表", codeAlbum: "アルバム / obscuRE TRAX", codeQuiddity: "obs-CD03 / アルバム", codeSingle: "obs-CD04 / シングル", styleAlbum: "電子音楽 / アルバム", styleVarious: "多様な電子音楽", styleSingle: "電子音楽 / シングル" },
    collaborators: { title: "参加アーティスト", description: "obscuRE TRAX と共に制作・リリースし、サウンドを築くアーティストたち。", aria: "参加アーティスト一覧" },
    artists: { title: "レーベル運営", description: "審査、リリース、マスタリング、アレンジ、ビジュアルを担当する現在の運営チーム。" },
    roles: { director: "主宰 / リリース管理 / アレンジ / マスタリング", deputy: "副主宰 / アート / アレンジ", ar: "審査 / アレンジ", directorTag: "主宰", deputyTag: "副主宰", arTag: "審査" },
    activities: {
      title: "フレームの内と外", description: "単一のスタイルに従わず、審査、リリース、アレンジ、グラフィックを横断して構築します。",
      review: { title: "作品審査", description: "スタイルの統一性ではなく、作品そのものの表現を起点に判断します。", tag: "リリース" },
      release: { title: "リリース管理", description: "作品資料、公開スケジュール、Dizzylab ページを一括して管理します。", tag: "管理" },
      arrangement: { title: "アレンジ制作", description: "制約に縛られず、頭の中の構造、ノイズ、メロディーを作品へ変換します。", tag: "アレンジ" },
      design: { title: "グラフィックデザイン", description: "グリッチ、コラージュ、網点、高彩度の色彩でレーベルの視覚言語を形づくります。", tag: "グラフィック" },
    },
    history: {
      title: "沿革", description: "レーベル設立と最初のコンセプトアルバムから、オンライン配信、オフライン活動まで。",
      founded: { title: "レーベル設立", description: "obscuRE TRAX を正式に設立。" }, firstRelease: { title: "初アルバム発表", description: "初の多元的音楽コンセプトアルバムをリリース。" },
      dizzylab: { title: "Dizzylab アカウント開設", description: "Dizzylab でレーベル作品の紹介と配信を開始。" }, enterprise: { title: "企業級資格を取得", description: "企業級資格を取得し、広州市友屋網絡文化伝媒有限公司などの企業と協業を開始。" },
      market: { title: "電側市場への参加予定", description: "Beatarray のレーベル沿革に掲載された今後のオフライン活動。" },
      archive: { status: "過去の公募 · 2026.05.30 締切", description: "テーマは「自由意志」。1〜10分のオリジナル電子音楽を募集し、曲名は性質や状態を表す <b>-ity</b> で終わる単語としました。過去の Quiddity 収録曲の Remix も対象。一次審査は MP3、採用後は WAV 24bit / 48kHz の完成版を提出。" },
    },
    visual: { title: "混沌の<br /><em>襞。</em>", description: "グリッド、グリッチ、都市、ノイズ、紫のスペクトルによってレーベルの視覚断片を記録します。", hint: "ホバーで探索 · ダブルクリックで拡大", aria: "ビジュアルアーカイブ画像ネットワーク", dialogAria: "ビジュアルアーカイブ画像ビューア", close: "画像を閉じる", closeHint: "背景をダブルクリック、または Esc で閉じる", imageAlt: "ビジュアルアーカイブ作品 {number}" },
    contact: { title: "つながりを<br /><em>保つ。</em>", description: "リリース、投稿、ビジネス協業などのお問い合わせは、メール、Beatarray、または以下のプラットフォームからご連絡ください。", directorQQ: "主宰 QQ", deputyQQ: "副主宰 QQ", note: "中国・湖南省長沙市 · ビジネスのお問い合わせには目的をご記載ください。2営業日以内の返信を予定しています。", submit: "Beatarray から投稿" },
    platforms: { netease: "NetEase Cloud Music", qqMusic: "QQ Music" },
    footer: { identity: "インディペンデントレーベル。", back: "ページ上部へ ↑" },
  },
};

const languageMap = { zh: "zh-CN", en: "en", ja: "ja" };
let currentLanguage = localStorage.getItem("site-language") || "zh";
if (!translations[currentLanguage]) currentLanguage = "zh";

function t(key, replacements = {}) {
  const value = key.split(".").reduce((result, part) => result?.[part], translations[currentLanguage]);
  const fallback = key.split(".").reduce((result, part) => result?.[part], translations.zh);
  return String(value ?? fallback ?? key).replace(/\{(\w+)\}/g, (_, name) => replacements[name] ?? "");
}

let currentRelease = 0;

function renderSiteData() {
  document.querySelectorAll("[data-site-name]").forEach((element) => {
    element.textContent = siteData.name;
  });
  const artistGrid = document.querySelector("#artist-grid");
  artistGrid.innerHTML = siteData.artists
    .map(
      (artist, index) => `
        <article class="artist-card">
          <div>
            <div class="artist-topline"><span>0${index + 1}</span><span>${t(artist.tagKey)}</span></div>
            <div class="artist-portrait"><img src="${artist.image}" alt="${artist.name}" /></div>
          </div>
          <div><h3>${artist.url ? `<a href="${artist.url}" target="_blank" rel="noreferrer">${artist.name} ↗</a>` : artist.name}</h3><p>${t(artist.roleKey)}</p></div>
        </article>`,
    )
    .join("");

  const collaboratorMarquee = document.querySelector("#collaborator-marquee");
  const collaboratorDurations = [54, 50, 56, 48];
  collaboratorMarquee.innerHTML = siteData.collaboratorRows
    .map((row, rowIndex) => {
      const names = row
        .map((name) => `<span class="collaborator-pill">${name}</span>`)
        .join("");
      const fillers = row
        .map((name) => `<span class="collaborator-pill" aria-hidden="true">${name}</span>`)
        .join("");
      const group = `${names}${fillers}`;
      return `
        <div class="collaborator-row" style="--duration:${collaboratorDurations[rowIndex]}s">
          <div class="collaborator-track">
            <div class="collaborator-group">${group}</div>
            <div class="collaborator-group" aria-hidden="true">${group}</div>
          </div>
        </div>`;
    })
    .join("");

  document.querySelector("#platform-links").innerHTML = siteData.platforms
    .map((platform) => platform.url
      ? `<a href="${platform.url}" target="_blank" rel="noreferrer">${platform.nameKey ? t(platform.nameKey) : platform.name} ↗</a>`
      : `<span>${platform.nameKey ? t(platform.nameKey) : platform.name}</span>`)
    .join("");

  document.querySelector("#slider-dots").innerHTML = siteData.releases
    .map(
      (_, index) =>
        `<button type="button" data-slide="${index}" aria-label="${t("releases.slide", { number: index + 1 })}"></button>`,
    )
    .join("");

  renderRelease();
}

function renderRelease() {
  const release = siteData.releases[currentRelease];
  const releaseCode = release.codeKey ? t(release.codeKey) : release.code;
  const card = document.querySelector("#release-card");
  card.innerHTML = `
    <div class="release-art" data-code="${releaseCode}">
      <img src="${release.image}" alt="${t("releases.cover", { title: release.title })}" />
      <button class="release-image-nav release-image-prev" type="button" data-release-direction="-1" aria-label="${t("releases.previous")}">
        <span>←</span><small>${t("releases.previousShort")}</small>
      </button>
      <button class="release-image-nav release-image-next" type="button" data-release-direction="1" aria-label="${t("releases.next")}">
        <small>${t("releases.nextShort")}</small><span>→</span>
      </button>
    </div>
    <div class="release-info">
      <div>
        <span class="release-number">0${currentRelease + 1} / 0${siteData.releases.length}</span>
        <h3>${release.title}</h3>
        <p>${t(release.descriptionKey)}</p>
        <a class="release-link" href="${release.url}" target="_blank" rel="noreferrer">${t("releases.play")} <span>↗</span></a>
      </div>
      <div class="release-meta">
        <div><span>${t("releases.date")}</span>${release.dateKey ? t(release.dateKey) : release.date}</div>
        <div><span>${t("releases.style")}</span>${release.styleKey ? t(release.styleKey) : release.style}</div>
      </div>
    </div>`;

  document.querySelectorAll("[data-slide]").forEach((dot, index) => {
    dot.classList.toggle("active", index === currentRelease);
    dot.setAttribute("aria-current", index === currentRelease ? "true" : "false");
  });
}

function moveSlider(direction) {
  currentRelease = (currentRelease + direction + siteData.releases.length) % siteData.releases.length;
  renderRelease();
}

function applyLanguage(language) {
  currentLanguage = translations[language] ? language : "zh";
  localStorage.setItem("site-language", currentLanguage);
  document.documentElement.lang = languageMap[currentLanguage];
  document.documentElement.dataset.language = currentLanguage;
  document.documentElement.style.setProperty("--frame-label", `"${t("hero.frame")}"`);
  document.title = t("meta.title");
  document.querySelector("meta[name='description']").content = t("meta.description");
  document.querySelector("meta[property='og:title']").content = t("meta.title");
  document.querySelector("meta[property='og:description']").content = t("meta.description");

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    element.innerHTML = t(element.dataset.i18nHtml);
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    element.setAttribute("aria-label", t(element.dataset.i18nAria));
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    element.alt = t(element.dataset.i18nAlt);
  });
  document.querySelectorAll("[data-visual-index] img").forEach((image, index) => {
    image.alt = t("visual.imageAlt", { number: String(index + 1).padStart(2, "0") });
  });
  document.querySelector(".language-select").value = currentLanguage;
  renderSiteData();
  updateThemeLabel();
}

function setupInteractions() {
  document.querySelector(".slider-button.prev").addEventListener("click", () => moveSlider(-1));
  document.querySelector(".slider-button.next").addEventListener("click", () => moveSlider(1));
  document.querySelector("#slider-dots").addEventListener("click", (event) => {
    const dot = event.target.closest("[data-slide]");
    if (!dot) return;
    currentRelease = Number(dot.dataset.slide);
    renderRelease();
  });
  document.querySelector("#release-card").addEventListener("click", (event) => {
    const control = event.target.closest("[data-release-direction]");
    if (!control) return;
    moveSlider(Number(control.dataset.releaseDirection));
  });

  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".site-nav");
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });
  nav.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });

  document.querySelector(".language-select").addEventListener("change", (event) => {
    applyLanguage(event.target.value);
  });

  document.querySelectorAll("a[href='#top']").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      });
      history.replaceState(null, "", `${window.location.pathname}${window.location.search}#top`);
    });
  });

  const themeButton = document.querySelector(".theme-toggle");
  const savedTheme = localStorage.getItem("site-theme");
  if (savedTheme) document.documentElement.dataset.theme = savedTheme;
  updateThemeLabel();
  themeButton.addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("site-theme", nextTheme);
    updateThemeLabel();
  });
}

function updateThemeLabel() {
  const isDark = document.documentElement.dataset.theme === "dark";
  document.querySelector(".theme-label").textContent = isDark ? t("controls.day") : t("controls.night");
  document.querySelector("meta[name='theme-color']").content = isDark ? "#0d0716" : "#f3efff";
}

function setupRevealAnimations() {
  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal").forEach((element) => element.classList.add("visible"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12 },
  );
  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

function setupActivityHover() {
  const list = document.querySelector(".activity-list");
  if (!list || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

  const activities = [...list.querySelectorAll(".activity")];
  const edgeGuard = 12;
  let activeActivity = null;

  const setActiveActivity = (activity) => {
    if (activity === activeActivity) return;
    activeActivity?.classList.remove("is-hovered");
    activeActivity = activity;
    activeActivity?.classList.add("is-hovered");
  };

  list.addEventListener("pointermove", (event) => {
    const nextActivity = activities.find((activity) => {
      const bounds = activity.getBoundingClientRect();
      return event.clientY >= bounds.top + edgeGuard && event.clientY <= bounds.bottom - edgeGuard;
    });

    // Keep the current row active inside the shared edge buffer to prevent flicker.
    if (nextActivity) setActiveActivity(nextActivity);
  });
  list.addEventListener("pointerleave", () => setActiveActivity(null));
  list.addEventListener("pointercancel", () => setActiveActivity(null));
}

function setupVisualArchive() {
  const network = document.querySelector("#visual-network");
  const lightbox = document.querySelector("#visual-lightbox");
  if (!network || !lightbox) return;

  const connectors = network.querySelector(".visual-connectors");
  const core = network.querySelector(".visual-core");
  const nodes = [...network.querySelectorAll(".visual-node")];
  const lightboxImage = lightbox.querySelector("img");
  const lightboxIndex = lightbox.querySelector("#visual-lightbox-index");
  const closeButton = lightbox.querySelector(".visual-lightbox-close");
  let drawFrame = 0;

  const drawConnectors = () => {
    cancelAnimationFrame(drawFrame);
    drawFrame = requestAnimationFrame(() => {
      const networkBounds = network.getBoundingClientRect();
      const coreBounds = core.getBoundingClientRect();
      const centerX = coreBounds.left - networkBounds.left + coreBounds.width / 2;
      const centerY = coreBounds.top - networkBounds.top + coreBounds.height / 2;

      connectors.setAttribute("viewBox", `0 0 ${networkBounds.width} ${networkBounds.height}`);
      connectors.replaceChildren(...nodes.map((node) => {
        const bounds = node.getBoundingClientRect();
        const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("x1", centerX);
        line.setAttribute("y1", centerY);
        line.setAttribute("x2", bounds.left - networkBounds.left + bounds.width / 2);
        line.setAttribute("y2", bounds.top - networkBounds.top + bounds.height / 2);
        return line;
      }));
    });
  };

  const openLightbox = (node) => {
    const image = node.querySelector("img");
    const index = Number(node.dataset.visualIndex);
    lightboxImage.src = image.currentSrc || image.src;
    lightboxImage.alt = image.alt;
    lightboxIndex.textContent = `${String(index + 1).padStart(2, "0")} / ${String(nodes.length).padStart(2, "0")}`;
    lightbox.showModal();
  };

  nodes.forEach((node) => {
    node.addEventListener("dblclick", () => openLightbox(node));
    node.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      openLightbox(node);
    });
  });
  closeButton.addEventListener("click", () => lightbox.close());
  lightbox.addEventListener("dblclick", (event) => {
    if (event.target === lightbox) lightbox.close();
  });
  lightbox.addEventListener("close", () => {
    lightboxImage.removeAttribute("src");
  });

  const resizeObserver = new ResizeObserver(drawConnectors);
  resizeObserver.observe(network);
  nodes.forEach((node) => resizeObserver.observe(node));
  window.addEventListener("load", drawConnectors, { once: true });
  drawConnectors();
}

function setupPageDetails() {
  let ticking = false;
  const navLinks = [...document.querySelectorAll(".site-nav a[href^='#']")];
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  const updatePageState = () => {
    const scrollRange = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollRange > 0 ? window.scrollY / scrollRange : 0;
    document.documentElement.style.setProperty("--scroll-progress", String(progress));

    const marker = window.scrollY + window.innerHeight * 0.34;
    let activeId = sections[0]?.id;
    sections.forEach((section) => {
      if (section.offsetTop <= marker) activeId = section.id;
    });
    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${activeId}`);
    });
    ticking = false;
  };

  window.addEventListener("scroll", () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(updatePageState);
  }, { passive: true });
  updatePageState();

  const hero = document.querySelector(".hero");
  if (!hero || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  hero.addEventListener("pointermove", (event) => {
    const bounds = hero.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 12;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 10;
    hero.style.setProperty("--hero-x", `${x}px`);
    hero.style.setProperty("--hero-y", `${y}px`);
  });
  hero.addEventListener("pointerleave", () => {
    hero.style.setProperty("--hero-x", "0px");
    hero.style.setProperty("--hero-y", "0px");
  });
}

setupInteractions();
applyLanguage(currentLanguage);
setupRevealAnimations();
setupActivityHover();
setupVisualArchive();
setupPageDetails();
document.querySelector("#year").textContent = new Date().getFullYear();
