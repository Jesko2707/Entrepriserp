# Portail Discord Entreprises — FiveM RP

Version uniquement orientée Discord : pas de formulaire de candidature en ligne, pas de backend Node.js, pas d'intégration directe au serveur FiveM. Le but est de présenter les services et d'envoyer les visiteurs vers votre Discord pour candidater via vos salons ou tickets.

## Installer
1. Décompressez l'archive.
2. Ouvrez `app.js` et remplacez `https://discord.gg/REMPLACE_MOI` par le lien d'invitation de votre Discord.
3. Ouvrez `index.html` dans un navigateur pour tester.
4. Pour le mettre en ligne, envoyez `index.html`, `styles.css` et `app.js` à votre hébergement web (par exemple dans `public_html`).

## Personnaliser
Dans `index.html`, modifiez les cartes Police, Justice, EMS et Gouvernement selon les services de votre serveur. Vous pouvez remplacer les textes et ajouter des cartes en dupliquant un bloc `<article class="card">`.

## Recrutement sur Discord
Créez sur votre serveur Discord une catégorie privée par service et des salons de candidature ou tickets. Configurez les permissions des rôles afin que chaque candidat ne voie que son ticket et que les recruteurs concernés puissent y accéder. Le site redirige les joueurs vers Discord ; il ne crée pas automatiquement les salons ou les rôles.

## Conseils
- Utilisez une invitation Discord permanente ou mettez à jour le lien quand elle expire.
- Servez le site en HTTPS.
- Ne mettez aucun token de bot ou webhook dans `app.js`.
