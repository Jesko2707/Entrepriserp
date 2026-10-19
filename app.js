// Remplace cette adresse par le lien d'invitation de ton serveur Discord.
const DISCORD_INVITE = "https://discord.gg/REMPLACE_MOI";

document.getElementById("year").textContent = new Date().getFullYear();
["loginLink", "joinLink"].forEach(id => {
  const link = document.getElementById(id);
  link.href = DISCORD_INVITE;
});

document.querySelectorAll(".business-card .card-link, .business-card .banner").forEach(link => {
  link.href = DISCORD_INVITE;
  link.target = "_blank";
  link.rel = "noreferrer";
});

const filterButtons = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".business-card");
filterButtons.forEach(button => button.addEventListener("click", () => {
  filterButtons.forEach(item => item.classList.toggle("active", item === button));
  const filter = button.dataset.filter;
  cards.forEach(card => card.classList.toggle("hidden", filter !== "all" && card.dataset.category !== filter));
}));

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}));
