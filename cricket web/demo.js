var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopupbutton=document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

var cancelbutton=document.getElementById("cancel-popup")
cancelbutton.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

var container=document.querySelector(".container")
var addplayer=document.getElementById("add-player")
var playernameinput=document.getElementById("player-name-input")
var nicknameinput=document.getElementById("nick-name-input")
var playerdescriptioninput=document.getElementById("player-description-input")

addplayer.addEventListener("click",function(event){

    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${playernameinput.value}</h2>
    <h5>${nicknameinput.value}</h5>
    <p>${playerdescriptioninput.value}</p>
    <button onclick="deleteplayer(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

function deleteplayer(event)
{
    event.target.parentElement.remove()
}