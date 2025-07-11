var count = 0;
var p = document.querySelector("p");
function sayHello() {
    count += 1;
    p.innerText = count;
    end();
}

function end() {
    if (count === 100000) {
        count = 0;
        p.innerText = count;
        alert("Congratulations, you completed the game");
    }
}

function Reset() {
    count = 0;
    p.innerText = count;
}
    
function click1() {
    count += 100;
    p.innerText = count;
    end();
}

function click2() {
    count += 500;
    p.innerText = count;
    end();
}

function click3() {
    count += 1000;
    p.innerText = count;
    end();
}

function click4() {
    count += 5000;
    p.innerText = count;
    end();
}

var theme = document.querySelector(".main");
var c = document.querySelector(".count");
var bttn = document.querySelectorAll(".bttn");
var h1 = document.querySelector("h1")

function theme1() {
    theme.style.backgroundColor = "red";
    c.style.color = "red";
    bttn.forEach(btn => {
        btn.style.backgroundColor = "red";
    });
    h1.style.color = "red";
}

function theme2() {
    theme.style.backgroundColor = "green";
    c.style.color = "green";
    bttn.forEach(btn => {
        btn.style.backgroundColor = "green";
    });
    h1.style.color = "green";
}

function theme3() {
    theme.style.backgroundColor = "blue";
    c.style.color = "blue";
    bttn.forEach(btn => {
        btn.style.backgroundColor = "blue";
    });
    h1.style.color = "blue";
}

function theme4() {
    theme.style.backgroundColor = "rgb(218, 218, 5)";
    c.style.color = "rgb(218, 218, 5)";
    bttn.forEach(btn => {
        btn.style.backgroundColor = "rgb(218, 218, 5)";
    });
    h1.style.color = "rgb(218, 218, 5)";
}