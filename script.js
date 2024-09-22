window.onload = function() {
    setInterval(function() {
        var date = new Date();
        var displayDate = date.toLocaleDateString();
        var displayTime = date.toLocaleTimeString();
        document.getElementById('datetime').innerHTML = displayDate + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + displayTime;
    }, 1000);
}

// var a = document.getElementById("name");
// var valueOf=a.value;
// document.querySelector(".DTlistI1").ELEMENT_NODE(Text)=valueOf; 


var a=document.getElementById("name");
var b=document.getElementById("date");
var c=document.getElementById("time");
var list=document.querySelector(".mainlist");
function newTask(){
    list.insertAdjacentHTML("beforeend",`<li class="mainlistI"><input class="listCheck" type="checkbox" name="" id="4">${a.value}<br>
                    <div class="DTlistdiv">
                        <ul class="DTlist">
                            <li class="DTlistI">${b.value}</li>
                            <li class="DTlistI">${c.value}</li>
                        </ul>
                    </div>
                </li>`)
}