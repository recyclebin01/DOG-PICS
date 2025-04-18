const image = document.querySelector("img");
const button = document.querySelector("button");
const loader = document.querySelector(".loader");
const url = "https://dog.ceo/api/breeds/image/random";

// let loading = false;


function changeImage() {
    // loading = true;
    loader.style.display = "block";
    image.style.display = "none";

    fetch (url)
    .then(Response => Response.json())
    .then(data => {
        image.src = data.message;
        console.log(data.message);
    })
    .catch(error => console.log("Error: " + error))
    .finally(() => {
        loader.style.display = "none";
        image.style.display = "block";
    });

}
button.addEventListener("click", changeImage);
changeImage();