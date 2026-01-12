let identif = 1;
let numnum = document.getElementById(identif);
let date = new Date()
let jour = date.getDate()

document.querySelectorAll('.position-relative').forEach(day => {
  day.addEventListener('click', (event) => {

        // vérification de l'élément ciblé
        console.log(parseInt(event.currentTarget.id))

        // 
        if (parseInt(event.currentTarget.id)===identif && parseInt(event.currentTarget.id)<=jour ) {
        day.classList.toggle('revealed');
        identif++
        numnum = document.getElementById(identif);
        if (identif===25) {
            showPopup()
        }

        // pour verification de l'incrémentation
        console.log(identif) 
        console.log(numnum)
        }
  });
});