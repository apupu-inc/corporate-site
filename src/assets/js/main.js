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

const navDropdownButtons = document.querySelectorAll("[data-nav-dropdown]");

function closeNavDropdowns(exceptButton = null) {
  navDropdownButtons.forEach((button) => {
    if (button !== exceptButton) {
      button.setAttribute("aria-expanded", "false");
      button.closest(".site-nav__group")?.classList.remove("is-open");
    }
  });
}

navDropdownButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    const group = button.closest(".site-nav__group");
    const willOpen = !group?.classList.contains("is-open");
    closeNavDropdowns(button);
    group?.classList.toggle("is-open", willOpen);
    button.setAttribute("aria-expanded", String(willOpen));
  });
});

document.addEventListener("click", () => closeNavDropdowns());
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    const openButton = document.querySelector("[data-nav-dropdown][aria-expanded='true']");
    closeNavDropdowns();
    openButton?.focus();
  }
});

document.querySelectorAll("[data-contact-type]").forEach((card) => {
  card.addEventListener("click", () => {
    document.querySelectorAll("[data-contact-type]").forEach((item) => item.classList.toggle("is-active", item === card));
    const select = document.querySelector("#contact-category");
    if (select) select.value = card.dataset.contactType;
  });
});
