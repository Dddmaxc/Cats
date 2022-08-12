const button = document.querySelector(".btn")
const image = document.querySelector(".img")
const url = "https://aws.random.cat/meow"

async function featchHandler(){
    try{
     const response = await fetch(url)
     const data = await response.json()
     image.src = data.file
    }catch (error){
        console.log(error)
    }
}

button.addEventListener("click", () => {
    let isLouded = image.complete

    if(isLouded){
        featchHandler()
    }
})