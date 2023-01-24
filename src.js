// let URL = "https://api.nationalize.io/?name=michael"
//getData(URL)
document.addEventListener("DOMContentLoaded", function(){


   
let eachpaisesArray = []

function getData(userName){
    fetch (`https://api.nationalize.io/?name=${userName}`, {method: 'GET'}).then(data => data.json())
        .then((resp) => {let objec = resp
                console.log(objec)
                let slicedObject = objec.country.slice(0,3)
                console.log(slicedObject)
            

            slicedObject.forEach( element => {
                let paises = element.country_id
                eachpaisesArray.push(paises)
            })

            renderUserInput(eachpaisesArray)
        })
}






function submitUserinput(){
    let inputs = document.querySelector("#inputs")
    inputs.addEventListener("submit", function(event) {
        console.log( event )
        event.stopPropagation()
        let text = document.querySelector("#search")
        let sub = document.querySelector("#sub")
        event.preventDefault()
        console.log(text)
        getData(text.value)
      
    })
}

submitUserinput()

let int
let int1
let int2

function renderUserInput (country){
    let parag = document.querySelector("#container")
    let secondHighestProbabilityCountry = country[1]
    let thridHighestProbabilityCountry = country[2]
    
   
    parag.innerText = `You are probably from :` + country[0]
    // let displayedText = parag.innerText
    let addChoices = false


   
    let field = document.createElement("fieldset")
    let leg = document.createElement("legend")
    let division = document.createElement("div")
   
    let lab = document.createElement("label")
    let lab1 = document.createElement("label")

    int = document.createElement("input")
    int1 = document.createElement("input")
    int2 =document.createElement("input")       

    let btn4 = document.createElement("button")
    let lab2 = document.createElement("label")
parag.addEventListener("click", function(x){
    x.stopPropagation()
   
  
let popUpFormula = document.querySelector("#formula")
  


  leg.innerText ="IS YOUR COUNTRY HERE?"
 
   
  int.setAttribute("type", "radio" )
  int.setAttribute("name", "countries" )
  int.setAttribute("value", `${secondHighestProbabilityCountry}`)
  int.setAttribute("id", "interpolated")
  
 
  lab.setAttribute("for", "interpolated")
  lab.innerText = secondHighestProbabilityCountry
  
  
  

  
   int1.setAttribute("type", "radio" )
   int1.setAttribute("name", "countries" )
   int1.setAttribute("value", `${thridHighestProbabilityCountry}`)
   int1.setAttribute("id", "interpolated")

   
   lab1.setAttribute("for", "interpolated")
   lab1.innerText =  thridHighestProbabilityCountry
   

    
   
   int2.setAttribute("type", "radio" )   
    int2.setAttribute("name", "countries" )
   int2.setAttribute("value", "MARS")
   int2.setAttribute("id", "nointerpolated")

  
   lab2.setAttribute("for", "nointerpolated")
    lab2.innerText = "no"

   

   
//    let whitin = docment.createElement("div")
//    whitin.setAttribute("id", "bnm")

//    field.append(whitin)

  
   btn4.setAttribute("type", "submit")
    btn4.innerText = "click"
   
    field.append(leg)
    leg.append(division)
    popUpFormula.append(field) 
    division.append(int)
    division.append(lab)
    division.append(int1)
    division.append(lab1)
    division.append(int2)
    division.append(lab2)
    
   popUpFormula.append(btn4) //issue
  renderAnotherOutPut()
  









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


function renderAnotherOutPut (butt ){
    let form2 = document.querySelector("#formula")
    let paragrh = document.createElement("p")

    form2.addEventListener("submit", function(e){
        e.stopPropagation()
        
        e.preventDefault()
      
        
        let selected = document.querySelector('input[type ="radio"]:checked');
        
        
        paragrh.innerText = `WOW! YOU ARE ACTUALLY FROM ${selected.value}` 
           

    })

    let nDev = document.querySelector("#newDiv")


    nDev.append(paragrh)



}





function focusEvent (){
    let textInt = document.querySelector('input[type ="text"] ')
    textInt.addEventListener("focus", function(event){
        event.target.style.background = "pink"
    })
}





focusEvent()



})