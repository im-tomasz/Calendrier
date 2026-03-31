# Calendrier de l'Avent

## Description du projet
Ce projet est un calendrier de l'Avent interactif qui permet aux utilisateurs de découvrir des surprises chaque jour en décembre jusqu'à Noël.

## Technologie utilisée
- **HTML** : Pour structurer le contenu du calendrier.
- **CSS** : Pour styliser l'interface utilisateur et rendre le calendrier attrayant.
- **JavaScript** : Pour ajouter des interactions dynamiques, telles que l'ouverture des fenêtres surprises.

## Fonctionnement des différentes parties
1. **Structure HTML** : La base du calendrier est créée avec des éléments HTML. Chaque jour est représenté par une case dans une grille.
2. **Styles CSS** : Les styles sont appliqués pour donner une belle apparence au calendrier, rendant chaque case visible et engageante.
3. **Interactions JavaScript** : Les ouvertures des cases se font via des événements JavaScript qui détectent les clics sur les cases et affichent le contenu caché.

## Compétences démontrées
- Maîtrise de la structure de documents HTML.
- Capacité à styliser une application web avec CSS.
- Utilisation de JavaScript pour créer une expérience utilisateur interactive.
- Compréhension des meilleures pratiques web.

## Exemple de code
Voici un exemple de code pour une fonctionnalité de détection de clic qui ouvre une surprise :
```javascript
function ouvrirSurprise(caseId) {
    var surprise = document.getElementById(caseId);
    surprise.style.display = 'block'; // Affiche le contenu caché
}
```
Dans cet exemple, lorsque l'utilisateur clique sur une case, la fonction `ouvrirSurprise` est appelée avec l'identifiant de la case, et le contenu est affiché.

Pour plus de détails, consultez les sections spécifiques du code dans le dépôt.