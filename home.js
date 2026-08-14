const validPin=1234

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
const bank=document.getElementById("bank").value
const accountNumber=document.getElementById("account-number").value
const amount=parseInt(document.getElementById("add-amount").value)

const pin=parseInt(document.getElementById("add-pin").value)

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
const amount=parseInt(document.getElementById("withdraw-amount").value)

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
    document.getElementById("cash-out-parent").style.display="block"
    document.getElementById("add-money-parent").style.display="none"
})