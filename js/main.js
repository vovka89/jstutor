var breed = 'corgi'
var dogBreeds = document.getElementById("dogBreedsSelector");

async function getImageByType(dogtype, amount) {
    const response = await fetch(`https://dog.ceo/api/breed/${dogtype}/images/random/${amount}`);
    return response.json();
}

async function getDogType() {
    const response = await fetch('https://dog.ceo/api/breeds/list/all')
    return response.json();
}

async function searchBySubBreeds(sub) {
    const response = await fetch(`https://dog.ceo/api/breed/${sub}/list`)
    return response.json();
}

console.log(breed);

getDogType()
    .then((res) => {
        const div = document.getElementById('dogBreedsSelector');
        Object.keys(res.message).forEach(element => {
            const breed = document.createElement('option')
            breed.setAttribute("value", element)
            breed.textContent = element
            div.appendChild(breed);
        });
    });

getImageByType(breed, 10)
    .then((res) => {
        const div = document.getElementById('result');
        res.message.forEach(element => {
            const image = document.createElement('img')
            image.setAttribute('src', element)
            div.appendChild(image);
        });
    });

dogBreeds.addEventListener("change", function () {
    breed = dogBreeds.value;
    console.log(breed);
});




// searchBySubBreeds(breed)
//     .then((res) => {
//         console.log(res.message);
//     })
