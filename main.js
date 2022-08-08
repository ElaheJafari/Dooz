const winCases = ["1,2,3", "4,5,6", "7,8,9", "1,4,7", "2,5,8", "3,6,9", "1,5,9", "3,5,7"];
let user1 = [];
let user2 = [];
let currentuser = true;

let buttons = document.querySelectorAll(".j-section");//[]

function User1Move(value) {
    user1.push(value);
    let resault = winCases.find((item) => {
        let moves = user1.sort().toString(); // "1,2,3,5"
        let result = moves.search(item);
        return result > -1;
    });
    if (resault != null) {
        alert(`user1 has won; Moves: ${resault.toString()}`)
        setTimeout(() => {
            StartGame()
        }, 1000)
    }
}

function User2Move(value) {
    user2.push(value);
    let resault = winCases.find((item) => {
        let moves = user2.sort().toString();
        let result = moves.search(item);
        return result > -1;
    })
    if (resault != null) {
        alert(`user2 has won; Moves: ${resault.toString()}`)
        setTimeout(() => {
            StartGame()
        }, 1000)
    }
}


function ClickEvent(event) {
    let value = event.target.getAttribute("data-value");
    if (currentuser) {
        User1Move(value);
    } else {
        User2Move(value);
    }
    event.target.innerHTML = currentuser ? "X" : "O"
    event.target.style.backgroundColor = currentuser ? "skyblue" : "lightgreen"
    currentuser = !currentuser;
    event.target.removeEventListener("click", ClickEvent)
}

function StartGame() {
    user1 = [];
    user2 = [];
    currentuser = true;

    buttons.forEach((button) => {
        button.addEventListener("click", ClickEvent);
        button.innerHTML = button.getAttribute("data-value");
        button.style.backgroundColor = "unset";
    })
}

StartGame();
