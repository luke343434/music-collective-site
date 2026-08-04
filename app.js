// Replace the placeholder content in this object when the club materials are ready.
const siteData = {
  name: "UNTITLED",
  slogan: "让不同的声音，在同一个坐标相遇。",
  email: "hello@example.com",
  releases: [
    {
      title: "第一束噪点",
      code: "UTD-001 / SINGLE",
      description: "首张占位作品。这里可以放作品的创作背景、声音风格与参与人员介绍。",
      date: "20XX.XX.XX",
      style: "ELECTRONIC / POP",
      colors: ["#ef4c23", "#121411"],
      radius: "50%",
      rotate: "18deg",
    },
    {
      title: "凌晨合流",
      code: "UTD-002 / EP",
      description: "一张关于城市、夜晚与相遇的占位 EP。正式资料到位后可加入试听链接。",
      date: "20XX.XX.XX",
      style: "ROCK / AMBIENT",
      colors: ["#c9ff3d", "#1732ff"],
      radius: "4%",
      rotate: "45deg",
    },
    {
      title: "无名频率",
      code: "UTD-003 / COMPILATION",
      description: "社团合辑占位内容，用于集中呈现多位成员的不同创作方向。",
      date: "20XX.XX.XX",
      style: "VARIOUS ARTISTS",
      colors: ["#1732ff", "#f4f0e6"],
      radius: "42% 4%",
      rotate: "-20deg",
    },
  ],
  artists: [
    { name: "MEMBER 01", role: "主唱 / 创作", tag: "VOCAL" },
    { name: "MEMBER 02", role: "制作 / 编曲", tag: "PRODUCER" },
    { name: "MEMBER 03", role: "吉他 / 词曲", tag: "GUITAR" },
    { name: "MEMBER 04", role: "视觉 / 摄影", tag: "VISUAL" },
  ],
  platforms: ["网易云音乐", "QQ 音乐", "Bilibili", "小红书", "抖音", "Spotify", "YouTube"],
};

let currentRelease = 0;

function renderSiteData() {
  document.querySelectorAll("[data-site-name]").forEach((element) => {
    element.textContent = siteData.name;
  });
  document.querySelector("[data-site-slogan]").textContent = siteData.slogan;
  document.querySelectorAll("[data-contact-email]").forEach((element) => {
    element.href = `mailto:${siteData.email}`;
    element.textContent = `${siteData.email} ↗`;
  });

  const artistGrid = document.querySelector("#artist-grid");
  artistGrid.innerHTML = siteData.artists
    .map(
      (artist, index) => `
        <article class="artist-card reveal">
          <div>
            <div class="artist-topline"><span>0${index + 1}</span><span>${artist.tag}</span></div>
            <div class="artist-avatar" aria-label="${artist.name} 的头像占位图"></div>
          </div>
          <div><h3>${artist.name}</h3><p>${artist.role}</p></div>
        </article>`,
    )
    .join("");

  document.querySelector("#platform-links").innerHTML = siteData.platforms
    .map((platform) => `<a href="#" aria-label="${platform}（链接待补充）">${platform} ↗</a>`)
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
    <div class="release-art" data-code="${release.code}" style="--art-bg:${release.colors[0]};--art-ink:${release.colors[1]};--art-radius:${release.radius};--art-rotate:${release.rotate}">
      <i aria-hidden="true"></i>
    </div>
    <div class="release-info">
      <div>
        <span class="release-number">0${currentRelease + 1} / 0${siteData.releases.length}</span>
        <h3>${release.title}</h3>
        <p>${release.description}</p>
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
  document.querySelector("meta[name='theme-color']").content = isDark ? "#11130f" : "#f4f0e6";
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

renderSiteData();
setupInteractions();
setupRevealAnimations();
document.querySelector("#year").textContent = new Date().getFullYear();
