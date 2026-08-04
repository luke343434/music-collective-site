const siteData = {
  name: "obscuRE TRAX",
  slogan: "无意整饬，参差错落间，寻绎丰饶的韵致。",
  releases: [
    {
      title: "Quiddity:2 (Part A)",
      code: "ALBUM / obscuRE TRAX",
      description: "Quiddity 系列第二辑 Part A。多样化电子音乐专辑，由模糊框架发行。",
      date: "未公开",
      style: "ELECTRONIC / ALBUM",
      image: "assets/release-quiddity2-a.jpg",
      url: "https://www.beatarray.cn/label/obscuRETRAX",
    },
    {
      title: "Quiddity:2 (Part B)",
      code: "ALBUM / obscuRE TRAX",
      description: "Quiddity 系列第二辑 Part B。延续对状态、性质与自由意志的声音探索。",
      date: "未公开",
      style: "ELECTRONIC / ALBUM",
      image: "assets/release-02.jpg",
      url: "https://www.beatarray.cn/label/obscuRETRAX",
    },
    {
      title: "Quiddity",
      code: "obs-CD03 / ALBUM",
      description: "模糊框架首张多元音乐概念专辑，在不同风格的参差错落间寻找共同的韵致。",
      date: "2024.06.25",
      style: "VARIOUS ELECTRONIC",
      image: "assets/release-quiddity.webp",
      url: "https://music.163.com/album?id=287426775",
    },
    {
      title: "Transparent Tape",
      code: "obs-CD04 / SINGLE",
      description: "由 DLsr_DD1 创作并以模糊框架名义发行的单曲。",
      date: "未公开",
      style: "ELECTRONIC / SINGLE",
      image: "assets/release-transparent-tape.webp",
      url: "https://music.163.com/song?id=3360381493",
    },
  ],
  artists: [
    { name: "DLsr_DD1", role: "现任主理 / 发行管理 / 编曲 / 母带", tag: "DIRECTOR", image: "assets/member-dlsr.jpg", url: "https://music.163.com/#/artist?id=56650146" },
    { name: "A_5621 / AXSyeken", role: "现任副主理 / 美工 / 编曲", tag: "CO-DIRECTOR", image: "assets/member-a5621.jpg", url: "https://music.163.com/#/artist?id=56338957" },
    { name: "Like The Wind", role: "审核 / 编曲", tag: "A&R", image: "assets/member-like-the-wind.webp", url: "https://music.163.com/#/artist?id=99147049" },
    { name: "Vyn1x_", role: "审核 / 编曲", tag: "A&R", image: "assets/member-vyn1x.webp" },
  ],
  platforms: [
    { name: "Beatarray", url: "https://www.beatarray.cn/label/obscuRETRAX" },
    { name: "网易云音乐", url: "https://music.163.com/#/artist?id=123493084" },
    { name: "QQ 音乐", url: "https://y.qq.com/n/ryqq_v2/singer/000oaH3J0lAcOi" },
    { name: "Bilibili", url: "https://space.bilibili.com/3706976213141809" },
    { name: "Dizzylab", url: "https://www.dizzylab.net/l/obscuRE%20TRAX/" },
  ],
};

let currentRelease = 0;

function renderSiteData() {
  document.querySelectorAll("[data-site-name]").forEach((element) => {
    element.textContent = siteData.name;
  });
  document.querySelector("[data-site-slogan]").textContent = siteData.slogan;
  const artistGrid = document.querySelector("#artist-grid");
  artistGrid.innerHTML = siteData.artists
    .map(
      (artist, index) => `
        <article class="artist-card reveal">
          <div>
            <div class="artist-topline"><span>0${index + 1}</span><span>${artist.tag}</span></div>
            <div class="artist-portrait"><img src="${artist.image}" alt="${artist.name}" /></div>
          </div>
          <div><h3>${artist.url ? `<a href="${artist.url}" target="_blank" rel="noreferrer">${artist.name} ↗</a>` : artist.name}</h3><p>${artist.role}</p></div>
        </article>`,
    )
    .join("");

  document.querySelector("#platform-links").innerHTML = siteData.platforms
    .map((platform) => platform.url
      ? `<a href="${platform.url}" target="_blank" rel="noreferrer">${platform.name} ↗</a>`
      : `<span>${platform.name}</span>`)
    .join("");

  document.querySelector("#slider-dots").innerHTML = siteData.releases
    .map(
      (_, index) =>
        `<button type="button" data-slide="${index}" aria-label="切换到第 ${index + 1} 张作品"></button>`,
    )
    .join("");

  renderRelease();
}

function renderRelease() {
  const release = siteData.releases[currentRelease];
  const card = document.querySelector("#release-card");
  card.innerHTML = `
    <div class="release-art" data-code="${release.code}">
      <img src="${release.image}" alt="${release.title} 封面" />
      <button class="release-image-nav release-image-prev" type="button" data-release-direction="-1" aria-label="上一张作品">
        <span>←</span><small>PREV</small>
      </button>
      <button class="release-image-nav release-image-next" type="button" data-release-direction="1" aria-label="下一张作品">
        <small>NEXT</small><span>→</span>
      </button>
    </div>
    <div class="release-info">
      <div>
        <span class="release-number">0${currentRelease + 1} / 0${siteData.releases.length}</span>
        <h3>${release.title}</h3>
        <p>${release.description}</p>
        <a class="release-link" href="${release.url}" target="_blank" rel="noreferrer">播放 / 查看 <span>↗</span></a>
      </div>
      <div class="release-meta">
        <div><span>RELEASE DATE</span>${release.date}</div>
        <div><span>STYLE</span>${release.style}</div>
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
  document.querySelector(".theme-label").textContent = isDark ? "日间" : "夜间";
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

renderSiteData();
setupInteractions();
setupRevealAnimations();
setupPageDetails();
document.querySelector("#year").textContent = new Date().getFullYear();
