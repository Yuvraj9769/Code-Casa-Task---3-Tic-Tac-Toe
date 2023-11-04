let b1 = document.getElementsByClassName("b1");
let btn = document.getElementsByTagName("button")[0];
let uturn = document.getElementById("uturn");
let container = document.getElementsByClassName("container")[0];
let gif = document.getElementsByClassName("gif")[0];
let detail = document.getElementsByClassName("detail")[0];
let turn = "X";
let gameover = false;
let count = 0;
let tvar = false;

//Check winning player
let checkwin = () => {
    let arr = [
        [0, 1, 2],
        [0, 3, 6],
        [2, 5, 8],
        [1, 4, 7],
        [3, 4, 5],
        [6, 7, 8],
        [2, 4, 6],
        [0, 4, 8]
    ]
    count++;
    for (let e of arr) {
        if ((b1[e[0]].innerText == b1[e[1]].innerText && b1[e[1]].innerText == b1[e[2]].innerText) && (b1[e[0]].innerText != "")) {
            for (let i = 0; i < 3; i++) {
                b1[e[i]].style.backgroundColor = "#21e4eb";
                b1[e[i]].style.color = "blue";
                gameover = true;
            }
            count--;
            break;
        }
    }
};

//Turn for the game
let checkturn = () => {
    return turn == "X" ? "O" : "X";
};

//Playing the game
Array.from(b1).forEach((e) => {
    e.addEventListener("click", () => {
        e.innerText = turn;
        checkwin();
        if (count == 9) {
            alert("Tie the game");
            tvar = true;
            gameover = true;
            count = 0;
        }
        if (!gameover) {
            turn = checkturn();
            uturn.innerText = "Turn for " + turn;
        }
        else {
            if (tvar) {
                uturn.innerText = "Tie the game";
                tvar = false;
            }
            else {
                uturn.innerText = turn + " won the match";
                gif.style.width = "200px";
                gif.style.height = "200px";
                detail.style.height = "370px";
                gameover = false;
            }
        }
    });
});

//Clear the game
let cleargame = () => {
    Array.from(b1).forEach((e) => {
        e.innerHTML = "";
        e.style.backgroundColor = '#4c91b7';
        e.style.color = "black";
    });
    turn = "X";
    uturn.innerText = "Turn for " + turn;
    gameover = false;
    gif.style.width = "0px";
    gif.style.height = "0px";
    detail.style.height = "170px";
    count = 0;
};

btn.addEventListener("click", () => {
    cleargame();
});