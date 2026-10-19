// Remplacez cette URL par votre invitation Discord permanente.
const DISCORD_INVITE = "https://discord.gg/resurrectionrp";
["discordLink","heroDiscord","bottomDiscord"].forEach(id => {
  const link = document.getElementById(id);
  link.href = DISCORD_INVITE;
});
document.getElementById("year").textContent = new Date().getFullYear();
