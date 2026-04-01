
// date du jour en entier (ex : 1, 4, 17, 22 ...)
let date = new Date()
let jour = date.getDate()

/**
 * indicateur de progression de l'ouverture des cases, sera incrémenté de 1 à chaque clic sur une case valide
 */
let progression = 1

/**
* Cette fonction crée un événement de clic sur chaque case. 
* Elle compare ensuite, lors du clic, l'index de progression et la date du jour, elle laisse apparaître l'image si la case peut être ouverte
*/
const canItBeOpened = document.querySelectorAll('.position-relative').forEach(element => {
  
  element.addEventListener('click', (event) => {

        // comparaison de la progression et de la date
        
        switch (true) {
          case (parseInt(event.currentTarget.id) === progression + 1) :
            alert("Cette case s'ouvrira demain !")
            break
          case (parseInt(event.currentTarget.id) > progression + 1) : 
            alert("Ce n'est pas le bon jour !")
            break
          case (parseInt(event.currentTarget.id) <= jour && parseInt(event.currentTarget.id) === progression) :
            element.classList.toggle('revealed');
            progression++
            if (progression===25) {
              console.log("Joyeux Noël !")
            }
            break
        }
  });
});