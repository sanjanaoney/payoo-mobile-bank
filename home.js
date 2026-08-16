const validPin=1234
// function to get input values
function getInputValueNumber(id){
const inputField=document.getElementById(id)
const inputFieldValue=inputField.value
const inputFieldValueNumber=parseInt(inputFieldValue)
return inputFieldValueNumber
}

//jegula number e convert korar dorkar nai
function getInputValue(id){
const inputField=document.getElementById(id)
const inputFieldValue=inputField.value
return inputFieldValue  
}


//add money feature
// console.log("home js file connected")
document.getElementById("add-money-btn")
.addEventListener("click",function(e){
e.preventDefault()
// console.log("add money button clicked");
// const bank=document.getElementById("bank").value
// const accountNumber=document.getElementById("account-number").value
// // const amount=document.getElementById("add-amount").value
// const amount=parseInt(document.getElementById("add-amount").value)
// const pin=document.getElementById("add-pin").value
// // console.log(bank,accountNumber,amount,pin)
// // const availableBalance=document.getElementById("available-balance").innerText;
// const availableBalance=parseInt(document.getElementById("available-balance").innerText) 
// console.log(availableBalance)
// const totalNewAvailableBalance=amount+availableBalance
// document.getElementById("available-balance").innerText=totalNewAvailableBalance;
// const bank=document.getElementById("bank").value
const bank=getInputValue("bank");
const accountNumber=document.getElementById("account-number").value
// const amount=parseInt(document.getElementById("add-amount").value)
// const amountElement=document.getElementById("add-amount")
// const amountElementValue= amountElement.value
// const amount=parseInt(amountElement)
//const amount=getValue("add-money") //reusuable code
const amount=getInputValueNumber("add-amount")

//const pin=parseInt(document.getElementById("add-pin").value)
const pin=getInputValueNumber("add-pin")
//const pin=getValue("add-pin")

const availableBalance=parseInt(document.getElementById("available-balance").innerText)
console.log(amount,availableBalance)

if(accountNumber.length<11){
    alert("please provide valid account number")
    return;
}
if(pin!==validPin){
    alert("please provide valid pin number")
    return;
}

const totalNewAvailableBalance=amount+availableBalance
document.getElementById("available-balance").innerText=totalNewAvailableBalance



})

//cashout money feature

document.getElementById("withdraw-btn").addEventListener("click",function(e){
e.preventDefault()
// console.log("withdraw button clicked")
// const amount=parseInt(document.getElementById("withdraw-amount").value)
const amount=getInputValueNumber("withdraw-amount")

const availableBalance=parseInt(document.getElementById("available-balance").innerText)

// console.log(amount,availableBalance)
const totalNewAvailableBalance=availableBalance-amount
console.log(totalNewAvailableBalance)
document.getElementById("available-balance").innerText=totalNewAvailableBalance
})


// toggling feature

document.getElementById("add-button").addEventListener("click",function(){
    document.getElementById("cash-out-parent").style.display="none"
    document.getElementById("add-money-parent").style.display="block"
})
document.getElementById("cash-out-button").addEventListener("click",function(){
    document.getElementById("add-money-parent").style.display="none"
    document.getElementById("cash-out-parent").style.display="block"
    
})