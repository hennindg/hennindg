// Category filter on the front page: show only the cards whose data-category
// contains the category of the clicked button ("all" shows every card).
const buttons = document.querySelectorAll(".category-btn");
const cards = document.querySelectorAll(".project-card");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    const category = button.dataset.category;

    buttons.forEach(function (b) { b.classList.remove("active"); });
    button.classList.add("active");

    cards.forEach(function (card) {
      // A card can belong to several categories, separated by spaces
      const cardCategories = card.dataset.category.split(" ");
      const show = category === "all" || cardCategories.includes(category);
      card.classList.toggle("hidden", !show);
    });
  });
});
