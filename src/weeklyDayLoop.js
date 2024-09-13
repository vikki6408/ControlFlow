function getDayLoop(day){

    const tableau_jour = ["lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];

    for(let i = 0; i < tableau_jour.length; i++) {
        if (i === day - 1) { // day moins 1 car le tableau commence par l'élément 0
            return tableau_jour[i];
        }
    }
}

console.log(getDayLoop(3));  // "Mercredi"


