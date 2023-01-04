// let URL = "https://api.nationalize.io/?name=michael"
//getData(URL)
document.addEventListener("DOMContentLoaded", function(){


    let secondHighestProbabilityCountry
    let thridHighestProbabilityCountry


function getData(userName){
    fetch (`https://api.nationalize.io/?name=${userName}`, {method: 'GET'}).then(data => data.json())
    .then((resp) => {let objec = resp
        console.log(objec.country[0].country_id )
        let highestProbalityCountry = objec.country[0].country_id
         secondHighestProbabilityCountry = objec.country[1].country_id
        renderUserInput(secondHighestProbabilityCountry)
         thridHighestProbabilityCountry = objec.country[2].country_id
        console.log(secondHighestProbabilityCountry)
        console.log(thridHighestProbabilityCountry)
        
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

let int
let int1
let int2

function renderUserInput (country){
    let parag = document.querySelector("#container")
    parag.innerText = `You are probably from :` + country
    // let displayedText = parag.innerText
    let addChoices = false
parag.addEventListener("click", function(){
    console.log("are you working?")
  let popUpFormula = document.querySelector("#formula")
  let field = document.createElement("fieldset")
  popUpFormula.append(field)
  let leg = document.createElement("legend")
  leg.innerText ="IS YOUR COUNTRY HERE?"
  field.append(leg)
  let division = document.createElement("div")
  field.append(division)
   int = document.createElement("input")
  
  int.setAttribute("type", "radio" )
  int.setAttribute("name", "countries" )
  int.setAttribute("value", `${secondHighestProbabilityCountry}`)
  int.setAttribute("id", "interpolated")
  
  let lab = document.createElement("label")
  lab.setAttribute("for", "interpolated")
  lab.innerText = secondHighestProbabilityCountry
  
  division.append(int)
  division.append(lab)
  

   int1 = document.createElement("input")
   int1.setAttribute("type", "radio" )
   int1.setAttribute("name", "countries" )
   int1.setAttribute("value", `${thridHighestProbabilityCountry}`)
   int1.setAttribute("id", "interpolated")

   let lab1 = document.createElement("label")
   lab1.setAttribute("for", "interpolated")
   lab1.innerText =  thridHighestProbabilityCountry
   division.append(int1)
   division.append(lab1)

    int2 =document.createElement("input")
   
   int2.setAttribute("type", "radio" )   
    int2.setAttribute("name", "countries" )
   int2.setAttribute("value", "MARS")
   int2.setAttribute("id", "nointerpolated")

   let lab2 = document.createElement("label")
   lab2.setAttribute("for", "nointerpolated")
    lab2.innerText = "no"

    division.append(int2)
    division.append(lab2)

   
//    let whitin = docment.createElement("div")
//    whitin.setAttribute("id", "bnm")

//    field.append(whitin)

   let btn4 = document.createElement("button")
   btn4.setAttribute("type", "submit")
    btn4.innerText = "click"
   
   popUpFormula.append(btn4)
   

   renderAnotherInput()
  









   addChoices = !addChoices
   popUpFormula.style.display = "none"
   if(addChoices){
    popUpFormula.style.display ="block"
 }
   else if (addChoices){
    console.log("hello")
   }




  
 }
)
}


function renderAnotherInput (butt ){
    let form2 = document.querySelector("#formula")

    form2.addEventListener("submit", function(e){

        e.preventDefault()
        //int.setAttribute("value", `${secondHighestProbabilityCountry}`)
        let selected = document.querySelector('input[type ="radio"]:checked');
        // selected.setAttribute("value",`${secondHighestProbabilityCountry}`)
        let paragrh = document.createElement("p")
        paragrh.innerText = `WOW! YOU ARE ACTUALLY FROM ${selected.value}`
        nDev = document.querySelector("#newDiv")


        nDev.append(paragrh)

    })


//renderAnotherInput()











}





























})