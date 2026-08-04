const siteData = {
  name: "obscuRE TRAX",
  slogan: "无意整饬，参差错落间，寻绎丰饶的韵致。",
  releases: [
    {
      title: "作品资料待补充 01",
      code: "obs-001 / RELEASE",
      description: "封面素材已接入。作品名称、发行日期、风格与创作信息将在资料确认后更新。",
      date: "TBA",
      style: "obscuRE TRAX",
      image: "assets/release-01.jpg",
    },
    {
      title: "作品资料待补充 02",
      code: "obs-002 / RELEASE",
      description: "紫色拼贴系列封面。后续可补充曲名、制作人员与 Dizzylab 作品链接。",
      date: "TBA",
      style: "obscuRE TRAX",
      image: "assets/release-02.jpg",
    },
    {
      title: "作品资料待补充 03",
      code: "obs-003 / RELEASE",
      description: "粉色拼贴系列封面。具体音乐信息暂不推断，等待正式资料后展示。",
      date: "TBA",
      style: "obscuRE TRAX",
      image: "assets/release-03.jpg",
    },
  ],
  artists: [
    { name: "DLsr_DD1", role: "主理 / 审核 / 发行管理 / 编曲", tag: "DIRECTOR" },
    { name: "AXSyeken", role: "副主理 / 美工 / 编曲", tag: "CO-DIRECTOR" },
  ],
  platforms: [
    { name: "Dizzylab", url: "https://www.dizzylab.net/d/obs-CD03/" },
    { name: "Bilibili · @DLsr_DD1" },
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
            <div class="artist-monogram" aria-hidden="true">${artist.name.slice(0, 2)}</div>
          </div>
          <div><h3>${artist.name}</h3><p>${artist.role}</p></div>
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

renderSiteData();
setupInteractions();
setupRevealAnimations();
document.querySelector("#year").textContent = new Date().getFullYear();
