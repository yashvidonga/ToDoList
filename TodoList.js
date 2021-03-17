var ulel = document.querySelector("ul")
ulel.addEventListener('click',delortick)

function addTask()
{
    var liel = document.createElement("li")
    var task1 = document.getElementById("task")
    var taskval = task1.value
    console.log("addtask")
    if(taskval.length == 0){
        alert("Please Add a Task");
    }
    else{
        liel.innerHTML = "<span class = 'delete'>X</span>" + "<input type = 'checkbox'>"+"<label>" + taskval + "</label>" 
        ulel.appendChild(liel)
        var taskbar = document.querySelector(".taskbar")
        taskbar.style.display = "block"
        task1.value = ""
    }
    
}

function delortick(event)
{
    if(event.target.className == "delete")
    {
        deltask(event)
    }
    else{
        ticktask(event)
    }
}

function deltask(event)
{
    var liele = event.target.parentNode
    var ulele = liele.parentNode
    ulel.removeChild(liele)
    var taskbar = ulele.parentNode
    if(ulel.children.length == 0){
        taskbar.style.display = "none"
    }
}

function ticktask(event)
{
    var labelel = event.target.nextSibling
    if(event.target.checked){
        labelel.style.textDecoration = "line-through"
    }
    else{
        labelel.style.textDecoration = "none"
    }

}