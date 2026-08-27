const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

function closeMenu() {
  mobileMenu?.classList.remove("is-open");
  mobileMenu?.setAttribute("aria-hidden", "true");
  menuToggle?.setAttribute("aria-expanded", "false");
  document.body.classList.remove("menu-open");
}

menuToggle?.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.toggle("is-open");
  mobileMenu.setAttribute("aria-hidden", String(!isOpen));
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  document.body.classList.toggle("menu-open", isOpen);
});

mobileMenu?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeMenu(); });

const filters = document.querySelectorAll("[data-filter]");
const newsRows = document.querySelectorAll(".news-row[data-category]");
filters.forEach((button) => button.addEventListener("click", () => {
  const category = button.dataset.filter;
  filters.forEach((item) => item.classList.toggle("is-active", item === button));
  newsRows.forEach((row) => { row.hidden = category !== "すべて" && row.dataset.category !== category; });
}));

const consent = document.querySelector("[data-contact-consent]");
const submit = document.querySelector("[data-contact-submit]");
if (consent && submit) {
  const syncSubmit = () => { submit.disabled = !consent.checked; };
  consent.addEventListener("change", syncSubmit);
  syncSubmit();
}
