(function () {
  const profile = window.PORTFOLIO_PROFILE || {};
  const root = document.documentElement;
  const header = document.querySelector(".site-header");
  const nav = document.querySelector(".nav-links");
  const toggle = document.querySelector(".nav-toggle");
  const themeToggle = document.querySelector("[data-theme-toggle]");

  const getValue = (path) => path.split(".").reduce((value, key) => value && value[key], profile);

  document.querySelectorAll("[data-profile]").forEach((element) => {
    const value = getValue(element.dataset.profile);
    if (value !== undefined) element.textContent = value;
  });

  const hrefMap = {
    portfolio: "portfolio",
    lab: "lab",
    email: "contact.email",
    github: "contact.github",
    linkedin: "contact.linkedin",
    codechef: "contact.codechef",
    scaler: "contact.scaler",
    resume: "contact.resume"
  };

  document.querySelectorAll("[data-profile-href]").forEach((element) => {
    const path = hrefMap[element.dataset.profileHref];
    const rawValue = path && getValue(path);
    const value = element.dataset.profileHref === "email" && rawValue ? `mailto:${rawValue}` : rawValue;
    if (value) element.setAttribute("href", value);
  });

  const storedTheme = window.localStorage.getItem("uttam-theme");
  const preferredTheme = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  root.dataset.theme = storedTheme || preferredTheme;

  const updateThemeLabel = () => {
    if (!themeToggle) return;
    const isDark = root.dataset.theme === "dark";
    themeToggle.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
    themeToggle.setAttribute("title", isDark ? "Switch to light theme" : "Switch to dark theme");
    const icon = themeToggle.querySelector(".theme-icon");
    if (icon) icon.textContent = isDark ? "☼" : "☾";
  };

  updateThemeLabel();
  themeToggle?.addEventListener("click", () => {
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
    window.localStorage.setItem("uttam-theme", root.dataset.theme);
    updateThemeLabel();
  });

  const closeNav = () => {
    nav?.classList.remove("open");
    toggle?.classList.remove("active");
    toggle?.setAttribute("aria-expanded", "false");
    toggle?.setAttribute("aria-label", "Open navigation");
    document.body.classList.remove("nav-open");
  };

  toggle?.addEventListener("click", () => {
    const open = !nav?.classList.contains("open");
    nav?.classList.toggle("open", open);
    toggle.classList.toggle("active", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    document.body.classList.toggle("nav-open", open);
  });

  nav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeNav));

  const updateHeader = () => header?.classList.toggle("scrolled", window.scrollY > 12);
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  document.querySelectorAll("[data-copy-email]").forEach((button) => {
    button.addEventListener("click", async () => {
      const email = profile.contact && profile.contact.email;
      if (!email) return;
      try {
        await navigator.clipboard.writeText(email);
        const original = button.textContent;
        button.textContent = "Copied";
        window.setTimeout(() => { button.textContent = original; }, 1600);
      } catch (error) {
        window.location.href = `mailto:${email}`;
      }
    });
  });

  document.querySelectorAll("[data-filter-bar]").forEach((bar) => {
    const cards = [...document.querySelectorAll("[data-project-card]")];
    const empty = document.querySelector("[data-filter-empty]");
    bar.querySelectorAll("[data-filter]").forEach((filter) => {
      filter.addEventListener("click", () => {
        bar.querySelectorAll("[data-filter]").forEach((item) => item.classList.remove("active"));
        filter.classList.add("active");
        const value = filter.dataset.filter;
        let visible = 0;
        cards.forEach((card) => {
          const matches = value === "all" || card.dataset.categories.split(" ").includes(value);
          card.hidden = !matches;
          if (matches) visible += 1;
        });
        if (empty) empty.style.display = visible ? "none" : "block";
      });
    });
  });

  document.querySelectorAll("[data-year]").forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });
})();
