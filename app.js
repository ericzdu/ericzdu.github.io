//clicker logic:
const clicker = document.getElementById('hi-button');
const count = document.getElementById('count');
let counter = 0;

clicker.addEventListener('click', () => {
    counter += 1;
    count.textContent = "count: " + counter; 
});

//board logic:
let boards = document.getElementsByClassName('board'); 
const currentTurn = document.getElementById('turn-indicator')
let turn = true; //true: X, false: 0
console.log(boards); 

for(const board of boards){
    board.addEventListener('click', event =>{
        if(checkWin()){
            currentTurn.textContent = (turn ? "O" : "X") + " Wins!"; 
        }else{
            if(board.textContent === "_"){
                if(turn){
                    board.textContent="X";                 
                    currentTurn.textContent = "current turn: O";
                }else{
                    board.textContent="O"; 
                    currentTurn.textContent = "current turn: X";
                }
                turn = !turn; 
                if(checkWin()){
                    currentTurn.textContent = (turn ? "O" : "X") + " Wins!"; 
                }
            }else{
                currentTurn.textContent = "current turn: " + (turn ? "X" : "O") + ", you can only change blank squares!";
            }
        }
    });
}

function checkWin(){
    //0, 1, 2
    //3, 4, 5
    //6, 7, 8

    //horizontal
    const curr = turn ? 'O' : 'X'
    console.log(curr)

    if(
        document.getElementById('0').textContent === curr &&
        document.getElementById('1').textContent === curr &&
        document.getElementById('2').textContent === curr){
        return true; 
    }
    if(
        document.getElementById('3').textContent === curr &&
        document.getElementById('4').textContent === curr &&
        document.getElementById('5').textContent === curr){
        return true; 
    }
    if(
        document.getElementById('6').textContent === curr &&
        document.getElementById('7').textContent === curr &&
        document.getElementById('8').textContent === curr){
        return true; 
    }
    
    if(
        document.getElementById('0').textContent === curr &&
        document.getElementById('3').textContent === curr &&
        document.getElementById('6').textContent === curr){
        return true; 
    }
    if(
        document.getElementById('1').textContent === curr &&
        document.getElementById('4').textContent === curr &&
        document.getElementById('7').textContent === curr){
        return true; 
    }
    if(
        document.getElementById('2').textContent === curr &&
        document.getElementById('5').textContent === curr &&
        document.getElementById('8').textContent === curr){
        return true; 
    }

    if(
        document.getElementById('0').textContent === curr &&
        document.getElementById('4').textContent === curr &&
        document.getElementById('8').textContent === curr){
        return true; 
    }
    if(
        document.getElementById('2').textContent === curr &&
        document.getElementById('4').textContent === curr &&
        document.getElementById('6').textContent === curr){
        return true; 
    }

    return false;
}