const image = document.querySelector("img");
const button = document.querySelector("button");
const url = "https://dog.ceo/api/breeds/image/random";
let loading = false;

function changeImage() {
    loading = true;

    fetch (url)
    .then(Response => Response.json())
    .then(data => {
        image.src = data.message;
        console.log(data.message);
    })
    .catch(error => console.log("Error: " + error))
    .finally(() => {
        loading = false;
    });

}
// button.addEventListener("click", changeImage);
// changeImage();