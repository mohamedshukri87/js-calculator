let numberLabel = document.getElementById("numberlabel");
let answer = document.getElementById("answerlabel")

function calculate(number) {
    numberLabel.textContent += number;
    return numberLabel.textContent;
}

function result(){
    let theresult = eval(numberLabel.textContent);
    theresult = Number(theresult);
    theresult = theresult.toFixed(2)
    theresult = theresult.toString()

    numberLabel.textContent = theresult;

}

function clearCalculator() {
    numberLabel.textContent = "";
    console.log(numberLabel)
}

function percentagecalculator(){
    let num = Number(numberLabel.textContent)
    num = (num / 100).toString()
    numberLabel.textContent = num;
}
