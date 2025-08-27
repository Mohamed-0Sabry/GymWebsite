document.addEventListener("DOMContentLoaded", () => {
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");
  const toggleIcons = document.querySelectorAll(".toggle-password");

  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      tabContents.forEach((tc) => tc.classList.add("hidden"));
      const targetId = btn.getAttribute("data-tab");
      const targetContent = document.getElementById(targetId);
      if (targetContent) {
        targetContent.classList.remove("hidden");
      }
    });
  });

  toggleIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
      const targetId = icon.getAttribute("data-target");
      const target = document.getElementById(targetId);
      if (target) {
        const isPassword = target.type === "password";
        target.type = isPassword ? "text" : "password";
      }
    });
  });
});
