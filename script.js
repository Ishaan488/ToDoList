window.onload = function () {
    setInterval(function () {
        var date = new Date();
        var displayDate = date.toLocaleDateString();
        var displayTime = date.toLocaleTimeString();
        document.getElementById('datetime').innerHTML = displayDate + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + displayTime;
    },1000);
}

// var a = document.getElementById("name");
// var valueOf=a.value;
// document.querySelector(".DTlistI1").ELEMENT_NODE(Text)=valueOf; 

var a = document.getElementById("name");
var b = document.getElementById("date");
var c = document.getElementById("time");
var list = document.querySelector(".mainlist");
var i = 0;
list.insertAdjacentHTML("afterend", `<div id="defaultMessage">NO TASKS YET.. SO REST PEACEFULLY 💤💤</div>`);
function newTask() {
    var valOfa = a.value;
    if (valOfa != "") {
        list.insertAdjacentHTML("beforeend", `<li class="mainlistI"><input class="listCheck" type="checkbox" name="" id="listCheck">${a.value}<br>
                    <div class="DTlistdiv">
                        <ul class="DTlist">
                            <li class="DTlistI">${b.value}</li>
                            <li class="DTlistI">${c.value}</li>
                        </ul>
                    </div>
                    <div class="rembuttondiv${i}">
                    <button class="" id="rembtn${i}" type="remove" onclick="RemoveTask(${i})">Remove</button>
                    </div>
                    </li>`)
    }
    else {
        alert("Enter the name of task!!");
    }
    if (i == 0) {
        let p = document.getElementById("defaultMessage");
        p.remove();
    }
    i++;
    console.log(i);
}
// var j=list.firstElementChild;
// console.log(j);

function RemoveTask(i) {
    var j = document.getElementById("rembtn" + i);
    j.parentElement.parentElement.remove();
    if (list.firstElementChild == null) {
        list.insertAdjacentHTML("afterend", `<div id="defaultMessage">NO TASKS YET.. SO REST PEACEFULLY💤💤</div>`);
    }
}

