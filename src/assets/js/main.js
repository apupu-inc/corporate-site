const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("is-open");
    mobileMenu.setAttribute("aria-hidden", String(!isOpen));
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && mobileMenu.classList.contains("is-open")) {
      mobileMenu.classList.remove("is-open");
      mobileMenu.setAttribute("aria-hidden", "true");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.focus();
    }
  });
}

const filterButtons = document.querySelectorAll("[data-news-filter]");
const newsRows = document.querySelectorAll("[data-news-category]");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.dataset.newsFilter;
    filterButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    newsRows.forEach((row) => {
      row.hidden = category !== "すべて" && row.dataset.newsCategory !== category;
    });
  });
});

document.querySelectorAll("[data-contact-type]").forEach((card) => {
  card.addEventListener("click", () => {
    document.querySelectorAll("[data-contact-type]").forEach((item) => item.classList.toggle("is-active", item === card));
    const select = document.querySelector("#contact-category");
    if (select) select.value = card.dataset.contactType;
  });
});
