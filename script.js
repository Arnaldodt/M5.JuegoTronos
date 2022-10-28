let img = document.querySelectorAll("img")

let ilNname = document.querySelector(".name")
let ilWords = document.querySelector(".words")
let ilTitles = document.querySelector(".titles")

for (let i=0 ; i < img.length ; i ++){
    img[i].addEventListener("click", () => {
        buscaDatos(i);
    })
}

const rescataINFO = (DATA) =>{
    ilNname.innerHTML = "<strong>Name:</strong>" +  DATA.name + ".";
    ilWords.innerHTML = "<strong>Words:</strong>" +  DATA.words + ".";

    let titles = "";
    for (let k=0 ; k<DATA.titles.length ; k++){
        if (titles !== ""){
            titles += ", ";
        }
        titles += DATA.titles[k];
    }
    ilTitles.innerHTML = "<strong>Titles:</strong>" + titles + ".";
}

async function postData(url) {
    const response = await fetch(url);
    return response.json();
}
const ejecutaAPI = (ID) => {
    postData("https://anapioficeandfire.com/api/houses/" + ID)
    .then((param) =>{
        rescataINFO(param);
    })
    .catch((error)=>{})
    .finally(() => {});
}

const buscaDatos = (ele) => {
    for (let i=0 ; i < img.length ; i ++){
        img[i].setAttribute("class","NoSeleccion")
    }

    img[ele].setAttribute("class","SiSeleccion")
    ejecutaAPI(img[ele].getAttribute("id"));
}

buscaDatos(0);