/*tasto della tendina del mobile*/
const btn = document.querySelector(".menu");
const nav = document.querySelector(".menu-mobile");

btn.addEventListener("click", () => {
    nav.classList.toggle("active");
});
