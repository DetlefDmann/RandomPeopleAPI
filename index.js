import {randomPersonData} from "./randomPersonData.js" ;

//functie die een lijst met landen maakt

//functie die een lijst met vrouwen maakt die :
// steenbok zijn , boven de dertig zijn, 
const  stnbkVrouwen = () => {
    const vrouwen = randomPersonData.filter(person => person.gender=="female")
                    .filter(person => person.age>=30)
                    .filter(person => (
                        parseInt(person.birthday.mdy.slice(0,2).concat(person.birthday.dmy.slice(0,2)))>=1222
                        || parseInt(person.birthday.mdy.slice(0,2).concat(person.birthday.dmy.slice(0,2)))<=120
                        ));
    const compare = ( a, b ) => {
            if ( a.name < b.name){
              return -1;
            }
            if ( a.name > b.name ){
              return 1;
            }
            return 0;
            }
    vrouwen.sort(compare);
    const parentElement = document.querySelector(".stbVrouwen__lijst");
    
    vrouwen.forEach(vrouw => {
        const newLi = document.createElement("li");
        newLi.innerHTML = `${vrouw.name} ${vrouw.surname}`;
        const picture = document.createElement("img");
        picture.src = vrouw.photo;
        parentElement.appendChild(newLi);
        newLi.appendChild(picture);
        console.log(newLi);
    })
}

stnbkVrouwen();