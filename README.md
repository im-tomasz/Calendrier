# 🤝 Calendrier de l’Avent JS

## 🚀 Description

Ce projet est un calendrier de l’Avent interactif réalisé en JavaScript dans le but de manipuler le DOM.

Chaque case du calendrier peut être cliquée afin de révéler son contenu. L’objectif principal est de comprendre la gestion des événements, la manipulation des classes CSS et la modification dynamique du DOM.

---

## 🛠️ Stack technique

- **HTML** : structure du calendrier
- **CSS / Bootstrap** : mise en forme et design visuel
- **JavaScript** : gestion des interactions et du comportement dynamique

---

## 🗂️ Structure & parties importantes

- **Structure HTML (`index.html`)** : organisation des cases du calendrier avec identifiants uniques
- **Styles CSS (`style.css`)** : gestion des effets visuels (masquage, révélation, animations)
- **Script JavaScript (`script.js`)** : gestion des clics et modification des classes DOM

---

## 🎯 Compétences mises en application

- Manipulation du DOM avec JavaScript
- Gestion des événements (`click`)
- Ajout / suppression de classes CSS dynamiques
- Structuration HTML responsive avec Bootstrap
- Création d’interactions visuelles
- Travail sur l’UX (feedback visuel, transitions)

---

## ✨ Exemples de code pertinents

**1. Structure d’une case interactive avec identifiant unique  
(`index.html`)**

```html
<!-- l'id est le numéro de la case, il servira à être comparé à la date du jour -->

<div class="position-relative d-flex justify-content-center" id="5">
    <img src="img/treeflame.jpg" class="img-fluid object-fit-cover rounded-circle day">
    <span class="number position-absolute top-50 start-50 translate-middle">5</span>
</div>
```
> chaque case est identifiable et manipulable via JavaScript grâce à son `id`.

---

**2. Effet de révélation visuelle via CSS  
(`style.css`)**

```css
.position-relative img {
  filter: grayscale(100%) brightness(8%);
  transition: filter 0.6s ease;
}

.position-relative.revealed img {
  filter: grayscale(0%) brightness(100%);
}
```
> applique un effet visuel qui passe d’une image masquée à une image révélée à l'ajout du ".revealed" par Javascript.

---

**3. Fonction rendant les cases cliquables
(`script.js`)**

```js
const canItBeOpened = document.querySelectorAll('.position-relative').forEach(element => {
  element.addEventListener('click', (event) => {
```
> à partir d'une classe CSS 'position-relative' commune à toutes les cases, chacune d'entre elles devient un "event listener".

---

**4. Utilisation d'un switch case pour la gestion des clicks 
(`script.js`)**

```js
 switch (true) {
          // si ma case est celle du lendemain
          case (parseInt(event.currentTarget.id) === progression + 1) :
            alert("Cette case s'ouvrira demain !")
            break

          // si ma case est au moins celle du surlendemain
          case (parseInt(event.currentTarget.id) > progression + 1) : 
            alert("Ce n'est pas le bon jour !")
            break

          // si la date est supérieure au numéro de la case, et que la case est strictement celle qui suit la précédente
          case (parseInt(event.currentTarget.id) <= jour && parseInt(event.currentTarget.id) === progression) :
            element.classList.toggle('revealed');
            progression++
            if (progression===25) {
              console.log("Joyeux Noël !")
            }
            break
        }
```
> logique de validation de l'ouverture des cases.

---



## 🎄 Fonctionnement global

- Les cases sont affichées sous forme d’images masquées (filtre sombre)
- Au clic, une classe CSS est ajoutée dynamiquement
- Cette classe déclenche :
  - la révélation de l’image
  - la disparition du numéro
  - un effet visuel fluide
- Chaque case est indépendante et interactive

---

## ✨ Objectif pédagogique

Ce projet met l’accent sur :
- la compréhension du DOM
- la gestion des événements
- la manipulation dynamique des classes CSS

Le tout dans un projet visuel simple mais efficace.
