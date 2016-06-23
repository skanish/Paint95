/**
 * Created by itc_user on 6/22/2016.
 */
var span1 = document.createElement("span");
document.body.appendChild(span1);

var savedColor = "crimson";
var colorArray = ["red", "blue", "green", "pink", "purple", "yellow"];

for (var i = 0; i < colorArray.length; i++){
    var btn = document.createElement('button');
    btn.classList.add("buttons");
    btn.classList.add(colorArray[i]);
    btn.addEventListener('click',function(event){
        savedColor = window.getComputedStyle((event.target),null).backgroundColor;
        console.log(savedColor);
    });
    span1.appendChild(btn);
}

var canvas = document.createElement("div");

for (var j = 0; j < 75; j++) {
    var column = document.createElement("div");
    column.className = "columns";
    canvas.appendChild(column);
    span1.appendChild(canvas);

    for (var i = 0; i < 75; i++) {
        var pix = document.createElement("div");
        pix.className = "pixels";
        pix.addEventListener('mouseover',function (event) {
            event.target.style.backgroundColor = savedColor;
        });
        column.appendChild(pix);
    }
}

var clearFun = function () {
    var pixels = document.getElementsByClassName('pixels');
    for(i=0; i<pixels.length; i++){
        pixels[i].style.backgroundColor = "white";
    }
};

var clear = document.createElement('button');
clear.textContent = "Clear";
clear.className = "ClearButton";
span1.appendChild(clear);
clear.addEventListener('click',clearFun);





/**
 * Created by itc_user on 6/23/2016.
 */
