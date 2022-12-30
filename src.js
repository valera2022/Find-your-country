// let URL = "https://api.nationalize.io/?name=michael"
//getData(URL)
document.addEventListener("DOMContentLoaded", function(){




function getData(userName){
    fetch (`https://api.nationalize.io/?name=${userName}`, {method: 'GET'}).then(data => data.json())
    .then((resp) => {let objec = resp
        console.log(objec.country[0].country_id )
        let highestProbalityCountry = objec.country[0].country_id
        renderUserInput(highestProbalityCountry)//cALL RENDER FUNCTION
        console.log(resp)
    })
}
//debugger

//getData()
function submitUserinput(){
    let inputs = document.querySelector("#inputs")
        inputs.addEventListener("submit", function(event) {
        let text = document.querySelector("#search")
        let sub = document.querySelector("#sub")
        event.preventDefault()
        console.log(text)
               getData(text.value)
    
    
    
    
    
    }
        )
}

submitUserinput()

function renderUserInput (country){
    let parag = document.querySelector("#container")
    parag.innerText = `You are probably from :` + country

}
































})