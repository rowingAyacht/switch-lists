console.log("hello")

const scary = ["IT","Coroline", "The Conjouring", "Quiet"]
const fun = ["Charlie Brown", "Corpse Bride", "Beetlejuice", "Halloween"]

function changeLists() {
    let movieList = document.getElementById('movieList');
    movieList.textContent = "";

    if (document.getElementById('scary').checked) {
        for(let i = 0; i< scary.length; i++){
            var newEl = document.createElement('li');
            var newText = document.createTextNode(scary[i]);
            newEl.appendChild(newText);
            movieList.appendChild(newEl);
        }
        
    } else if (document.getElementById('fun').checked) {
        for(let i = 0; i< fun.length; i++){
            var newEl = document.createElement('li');
            var newText = document.createTextNode(fun[i]);
            newEl.appendChild(newText);
            movieList.appendChild(newEl);        }
    }
}