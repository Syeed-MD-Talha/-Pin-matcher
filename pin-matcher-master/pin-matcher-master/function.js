

var Pin1, lock = 3;
document.getElementById('generate-btn').addEventListener('click', function () {
    Pin1 = Math.floor(1000 + Math.random() * 900) + 1;
    document.getElementById('randomPin').value = Pin1;
})


let buttons = document.querySelectorAll(".button");
var string = "";
buttons.forEach((btn) => {
    btn.addEventListener('click', function () {
        if (btn.innerHTML == '&lt;') {
            string = string.substr(0, string.length - 1);
            document.getElementById('inputPin').value = string;
        }
        else if (btn.innerHTML == 'C') {
            string = "";
            document.getElementById('inputPin').value = string;
        }
        else {
            string += btn.innerHTML;
            document.getElementById('inputPin').value = string;
        }
    })
})

// for (let i = 0; i < buttons.length; i++) {
//     const btn = buttons[i];
//     btn.addEventListener('click', function () {
//         console.log('you have press ', buttons[i].innerHTML)
//     })
// }


//..............................Submit Button Area...............................
var On, Off;
On = document.getElementById('Right').style;
Off = document.getElementById('Wrong').style;
document.getElementById('submit-btn').addEventListener('click', function () {
    if (Pin1 == string) {
        On.display = "block", Off.display = "none";
    }
    else {
        Off.display = "block", On.display = "none";
    }
    lock--;
    document.getElementById("left").innerHTML = lock + " try left";
    if (!lock) document.getElementById("submit-btn").style.display = "none";

})

