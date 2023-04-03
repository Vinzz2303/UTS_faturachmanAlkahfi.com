let level = localStorage.getItem("level");
level = parseInt(level);
let eat = localStorage.getItem("eat");
eat = parseInt(eat);
let sleep = localStorage.getItem("sleep");
sleep = parseInt(sleep);
let game = localStorage.getItem("game");
game = parseInt(game);
let sick = localStorage.getItem("sick");
sick = parseInt(sick);

const name = localStorage.getItem("name");
const resultDiv = document.getElementById("result-name");

const divEat = document.getElementById("myEat");
const divSleep = document.getElementById("mySleep");
const divGame = document.getElementById("myGame");
const divSick = document.getElementById("mySick");
const divLevel = document.getElementById("level");
const divStatus = document.getElementById("status");

divEat.innerHTML = eat;
divSleep.innerHTML = sleep;
divGame.innerHTML = game;
divSick.innerHTML = sick;
divLevel.innerHTML = level;

let myBtnEat = document.getElementById("btnEat");
let myBtnSleep = document.getElementById("btnSleep");
let myBtnGame = document.getElementById("btnGame");
let myBtnSick = document.getElementById("btnSick");
myBtnGame.disabled = false;
myBtnEat.disabled = false;
myBtnSick.disabled = false;
myBtnSleep.disabled = false;

if(sleep < 20)
{
    divStatus.innerHTML = "Mengantuk!";
    myBtnGame.disabled = true;
    myBtnEat.disabled = true;
    myBtnSick.disabled = true;
}
else if(sick < 20)
{
    divStatus.innerHTML = "Sakit!";
    myBtnGame.disabled = true;
}
else if(eat < 20)
{
    divStatus.innerHTML = "Lapar!";
}

myBtnEat.addEventListener("click", function() {
    
    if(sleep != 0)
    {
        sleep = sleep - 2; 
    }

    if(eat >= 100)
    {
        eat = eat + 0;
        eat = 100;
    }
    else
    {
        eat = eat + 5;
    }

    localStorage.setItem("eat", eat);
    localStorage.setItem("sleep", sleep);

    divEat.innerHTML = eat;
    divSleep.innerHTML = sleep;

    if(eat > 20)
    {
        location.reload();
    }

});

myBtnSleep.addEventListener("click", function() {
  // Tambah nilai variabel saat tombol diklik
    if(eat == 0)
    {
        eat -= 0;
    }
    else
    {
        eat -= 2;

    }

    if(sleep > 100)
    {
        sleep += 0;
        sleep = 100;
    }
    else
    {
        sleep += 5;
    }

    localStorage.setItem("sleep", sleep); // Tampilkan nilai variabel di dalam elemen HTML
    localStorage.setItem("eat", eat);

    divEat.innerHTML = eat;
    if(sleep > 20)
    {
        myBtnGame.disabled = false;
        myBtnEat.disabled = false;
        myBtnSick.disabled = false;
        location.reload();
    }
});

myBtnGame.addEventListener("click", function() {

    if(eat < 20)
    {
        divStatus.innerHTML = "Kamu butuh stamina untuk Bermain!";
    }
    else
    {
        window.location.href = "page3.html";
    }
});

myBtnSick.addEventListener("click", function() {
    sick += 5; // Tambah nilai variabel saat tombol diklik
    localStorage.setItem("sick", sick); // Tampilkan nilai variabel di dalam elemen HTML
    divSick.innerHTML = sick;

    if(sick > 20)
    {
        location.reload();
    }
});


document.addEventListener("DOMContentLoaded", function() {
    const clearButton = document.getElementById("clear-button");
    clearButton.addEventListener("click", clearLocalStorage);
});

function clearLocalStorage() {
    localStorage.clear();
    alert("Apakah anda ingin keluar?");
    // Alihkan ke halaman selanjutnya
    window.location.href = "page1.html";
}



function updateTime() {
    const now = new Date();
    const hours = now.getHours();
    const timeDiv = document.getElementById("time");

    let timeOfDay;
    if (hours >= 5 && hours < 11) {
        timeOfDay = "Morning";
    } else if (hours >= 11 && hours < 17) {
        timeOfDay = "Evening";
    } else {
        timeOfDay = "Night";
    }

    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    resultDiv.innerHTML = `Good ${timeOfDay}, ${name}`;
    timeDiv.innerHTML = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateTime, 1000);

