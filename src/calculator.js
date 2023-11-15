const outPut = document.querySelector("#outPut") ;
const seven = document.querySelector("#seven") ;
const deBtn = document.querySelector("#deBtn") ;
const eight = document.querySelector("#eight") ;
const nine = document.querySelector("#nine") ;
const star = document.querySelector("#star") ;
const six = document.querySelector("#six") ;
const five = document.querySelector("#five") ;
const four = document.querySelector("#four") ;
const three = document.querySelector("#three") ;
const two = document.querySelector("#two") ;
const one = document.querySelector("#one") ;
const plus = document.querySelector("#plus") ;
const dot = document.querySelector("#dot") ;
const minus = document.querySelector("#minus") ;
const division = document.querySelector("#division") ;
const remittor = document.querySelector("#remittor") ;



const addNumber = (x) => {
   return outPut.value += x.value
}

const backBtn = () => {
outPut.value = outPut.value.toString().slice(0,-1) ;
}

const zeroBtn = () => {
  outPut.value = 0 ;
}


const acBtn = () => {
    outPut.value = null ;
}

const equalBtn = () => {
    outPut.value = eval(outPut.value) 
}
