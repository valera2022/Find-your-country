
document.addEventListener("DOMContentLoaded", function(){



function submitUserinput(){
    let inputs = document.querySelector("#inputs")
    inputs.addEventListener("submit", function(event) {
            console.log( event )
            event.stopPropagation()
            let text = document.querySelector("#search")
            event.preventDefault()
            console.log(text)
            getData(text.value)
          
     })
}
submitUserinput()


   
let eachpaisesArray = []

function getData(userName){
    fetch (`https://api.nationalize.io/?name=${userName}`, {method: 'GET'}).then(resp => resp.json())
        .then((data) => {let objec = data
                console.log(objec)
                let slicedArrayOfObject = objec.country.slice(0,3)
                console.log(slicedArrayOfObject)
            

                slicedArrayOfObject.map( element => {
                    let paises = element.country_id
                    eachpaisesArray.push(paises)
                })

            renderUserInput(eachpaisesArray)
        })
}




let int
let int1
let int2

function renderUserInput (country){
    let parag = document.querySelector("#container")
    let secondHighestProbabilityCountry = country[1]
    let thridHighestProbabilityCountry = country[2]
    
   
    parag.innerText = `You are probably from :` + country[0]
   
    

   
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




        
        function setAttr(int,country,lab){
            int.setAttribute("type","radio")
            int.setAttribute("name", "countries")
            int.setAttribute("value",`${country}`)
            int.setAttribute("id","interpolated")


            lab.setAttribute("for", "interpolated")
            lab.innerText = country


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
        
            popUpFormula.append(btn4)
            

        }
                
   
        setAttr(int,secondHighestProbabilityCountry,lab)
        setAttr(int1,thridHighestProbabilityCountry,lab1)
        setAttr(int2,"Mars",lab2)
        lab2.innerText = "no"
        
    
    
       
        lab.innerText = secondHighestProbabilityCountry
        lab1.innerText =  thridHighestProbabilityCountry
        btn4.innerText = "click"
        
        
        

   
    })


     renderAnotherOutPut()

}


function renderAnotherOutPut (){
    let form2 = document.querySelector("#formula")
  

    form2.addEventListener("submit", function(e){
        e.stopPropagation()
        
        e.preventDefault()
      
        
        let selected = document.querySelector('input[type ="radio"]:checked');
        
        
        paragrh.innerText = `WOW! YOU ARE ACTUALLY FROM ${selected.value}` 
           

    })
    let paragrh = document.createElement("p")
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