console.log("Welcome to Tic Tac Toe")

let music = new Audio("assets/music.mp3")

let audioTurn = new Audio("assets/ting.mp3")

let gameover = new Audio("assets/gameover.mp3")

let turn = "X"

let isgameover = false;

const changeTurn = () => {
    return turn === "X"? "0": "X"
}

const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');

    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],

    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            isgameover = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "206px"
        }
    }
    )
}

//

let boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach( element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=> {
        if(boxtext.innerText == ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    }
    )
})


reset.addEventListener('click', (e)=>{
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element => {
        element.innerText = ""
    });
    turn = "X"
    isgameover = false
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
})
