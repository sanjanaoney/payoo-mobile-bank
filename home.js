if(localStorage.getItem("isLoggedIn") !== "true"){
    window.location.href="./index.html"
}
const validPin=1234
const transactionData=[]
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

//function to get innertext
function getInnerText(id){
    const element=document.getElementById(id)
    const elementValue=element.innerText
    const elementValueNumber=parseInt(elementValue)
    // console.log(elementValueNumber)
    return elementValueNumber
}

//function to set innerText
function setInnerText(value){
const availableBalanceElement=document.getElementById("available-balance")
availableBalanceElement.innerText=value
}

//function to toggle
function handleToggle(id){
const forms=document.getElementsByClassName("form")
    // console.log(forms)
    for(const form of forms){
        // console.log(form)
        form.style.display="none"
    }
    document.getElementById(id).style.display="block"
}

//function to toggle buttons
function handleButtonToggle(id){
    const formBtns=document.getElementsByClassName("form-btn")

    for(const btn of formBtns){
        btn.classList.remove("border-[#0874f2]","bg-[#0874f20d]")
         btn.classList.add("border-gray-300")
    }

    document.getElementById(id).classList.remove("border-gray-300")
    document.getElementById(id).classList.add("border-[#0874f2]","bg-[#0874f20d]")
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
if(bank === ""){
    alert("Please select a bank")
    return;
}
const accountNumber=document.getElementById("account-number").value
// const amount=parseInt(document.getElementById("add-amount").value)
// const amountElement=document.getElementById("add-amount")
// const amountElementValue= amountElement.value
// const amount=parseInt(amountElement)
//const amount=getValue("add-money") //reusuable code
const amount=getInputValueNumber("add-amount")
if(amount<=0){
    alert("invalid amount")
    return;
}

//const pin=parseInt(document.getElementById("add-pin").value)
const pin=getInputValueNumber("add-pin")
//const pin=getValue("add-pin")

// const availableBalance=parseInt(document.getElementById("available-balance").innerText)
// console.log(amount,availableBalance)

const availableBalance=getInnerText("available-balance")

if(accountNumber.length<11){
    alert("please provide valid account number")
    return;
}
if(pin!==validPin){
    alert("please provide valid pin number")
    return;
}

const totalNewAvailableBalance=amount+availableBalance
// document.getElementById("available-balance").innerText=setInnerText(totalNewAvailableBalance)

setInnerText(totalNewAvailableBalance)

const data={
    name:"Add Money",
    date: new Date().toLocaleTimeString()
}

transactionData.push(data)
console.log(transactionData)

alert("Money added successfully!")

// clear input fields
document.getElementById("bank").value = ""
document.getElementById("account-number").value = ""
document.getElementById("add-amount").value = ""
document.getElementById("add-pin").value = ""


})

//cashout money feature

document.getElementById("withdraw-btn").addEventListener("click",function(e){
e.preventDefault()
// console.log("withdraw button clicked")
// const amount=parseInt(document.getElementById("withdraw-amount").value)
const amount=getInputValueNumber("withdraw-amount")
const agentNumber = getInputValue("agent-number").trim()

if(!/^\d{11}$/.test(agentNumber)){
    alert("Please provide a valid 11 digit agent number")
    return;
}
const pin = getInputValue("withdraw-pin").trim()
if(pin !== String(validPin)){
    alert("Please provide a valid PIN")
    return;
}

// const availableBalance=parseInt(document.getElementById("available-balance").innerText)
const availableBalance=getInnerText("available-balance")

if(amount<=0 || amount>availableBalance){
    alert("invalid amount")
    return;
}

// console.log(amount,availableBalance)
const totalNewAvailableBalance=availableBalance-amount
console.log(totalNewAvailableBalance)
// document.getElementById("available-balance").innerText=totalNewAvailableBalance
setInnerText(totalNewAvailableBalance)


const data={
    name:"Cash Out",
    date: new Date().toLocaleTimeString()
}

transactionData.push(data)
console.log(transactionData)
alert("Cash out successful!")

// clear input fields
document.getElementById("agent-number").value = ""
document.getElementById("withdraw-amount").value = ""
document.getElementById("withdraw-pin").value = ""
})




// send money feature
document.getElementById("send-money-btn").addEventListener("click", function(e){
    e.preventDefault();

    const accountNumber = getInputValue("send-account");
    const amount = Number(getInputValue("send-amount"));
    const pin = getInputValueNumber("send-pin");
    const availableBalance = getInnerText("available-balance");

    if(!/^\d{11}$/.test(accountNumber)){
        alert("Please provide a valid 11 digit account number");
        return;
    }

    if(!Number.isFinite(amount) || amount <= 0){
        alert("Invalid amount");
        return;
    }

    if(amount > availableBalance){
        alert("Insufficient balance");
        return;
    }

    if(pin !== validPin){
        alert("Please provide a valid PIN");
        return;
    }

    const newBalance = availableBalance - amount;
    setInnerText(newBalance);

    const data = {
        name: "Send Money",
        date: new Date().toLocaleTimeString()
    };

    transactionData.push(data);
    console.log(transactionData);

    alert("Money sent successfully!");

    document.getElementById("send-account").value = "";
    document.getElementById("send-amount").value = "";
    document.getElementById("send-pin").value = "";
});

// get bonus feature

let bonusUsed = false;

document.getElementById("get-bonus-btn").addEventListener("click", function(e){
    e.preventDefault();

    const coupon = getInputValue("bonus-coupon").trim().toUpperCase();
    const availableBalance = getInnerText("available-balance");

    if(coupon !== "PAYOO500"){
        alert("Invalid coupon code");
        return;
    }

    if(bonusUsed === true){
        alert("You have already used this coupon");
        return;
    }

    const bonusAmount = 500;
    const newBalance = availableBalance + bonusAmount;

    setInnerText(newBalance);

    bonusUsed = true;

    const data = {
        name: "Get Bonus",
        date: new Date().toLocaleTimeString()
    };

    transactionData.push(data);
    console.log(transactionData);

    alert("Congratulations! You received 500 Taka bonus!");

    document.getElementById("bonus-coupon").value = "";
});

// pay bill feature

document.getElementById("pay-bill-btn").addEventListener("click", function(e){
    e.preventDefault();

    const billType = getInputValue("bill-type");
    const accountNumber = getInputValue("bill-account").trim();
    const amount = Number(getInputValue("bill-amount"));
    const pin = getInputValue("bill-pin");
    const availableBalance = getInnerText("available-balance");

    // check bill type
    if(billType === ""){
        alert("Please select a bill type");
        return;
    }

    // check account number
    if(!/^\d{11}$/.test(accountNumber)){
    alert("Please provide a valid 11 digit billing account number");
    return;
}

    // check amount
    if(!Number.isFinite(amount) || amount <= 0){
        alert("Invalid amount");
        return;
    }

    // check available balance
    if(amount > availableBalance){
        alert("Insufficient balance");
        return;
    }

    // check PIN
    if(!/^\d{4}$/.test(pin) || Number(pin) !== validPin){
        alert("Please provide a valid PIN");
        return;
    }

    // update balance
    const newBalance = availableBalance - amount;
    setInnerText(newBalance);

    // add transaction history
    const data = {
        name: billType + " Bill Payment",
        date: new Date().toLocaleTimeString()
    };

    transactionData.push(data);
    console.log(transactionData);

    alert("Bill paid successfully!");

    // clear input fields
    document.getElementById("bill-type").value = "";
    document.getElementById("bill-account").value = "";
    document.getElementById("bill-amount").value = "";
    document.getElementById("bill-pin").value = "";
});

document.getElementById("transactions-button").addEventListener("click",function(){
    const transactionContainer=document.getElementById("transaction-container")
    transactionContainer.innerText=""

    for(const data of transactionData){
        const div=document.createElement("div")
        div.innerHTML=`    <div class="bg-white rounded-xl p-3 flex justify-between items-center">
    <div class="flex items-center">
        <div class="p-3 rounded-full bg-[#f4f5f7]">
            <img src="./assets/wallet1.png"  class="mx-auto" alt="">

        </div>
        <div class="ml-3">
            <h1>${data.name}</h1>
            <p>${data.date}</p>

        </div>

    </div>
    <i class="fa-solid fa-ellipsis-vertical"></i>

</div>
        `

        transactionContainer.appendChild(div)
    }
})

// toggling feature

document.getElementById("add-button").addEventListener("click",function(){
    // document.getElementById("cash-out-parent").style.display="none"
    // document.getElementById("add-money-parent").style.display="block"
    // document.getElementById("send-money-parent").style.display="none"

    // const forms=document.getElementsByClassName("form")
    // // console.log(forms)
    // for(const form of forms){
    //     // console.log(form)
    //     form.style.display="none"
    // }
    // document.getElementById("add-money-parent").style.display="block"
    handleToggle("add-money-parent")

    // const formBtns=document.getElementsByClassName("form-btn")

    // for(const btn of formBtns){
    //     btn.classList.remove("border-[#0874f2]","bg-[#0874f20d]")
    //      btn.classList.add("border-gray-300")
    // }

    // document.getElementById("add-button").classList.remove("border-gray-300")
    // document.getElementById("add-button").classList.add("border-[#0874f2]","bg-[#0874f20d]")
  handleButtonToggle("add-button")
    
})
document.getElementById("cash-out-button").addEventListener("click",function(){
    // document.getElementById("add-money-parent").style.display="none"
    // document.getElementById("send-money-parent").style.display="none"
    // document.getElementById("cash-out-parent").style.display="block"
    // const forms=document.getElementsByClassName("form")
    // // console.log(forms)
    // for(const form of forms){
    //     // console.log(form)
    //     form.style.display="none"
    // }
    // document.getElementById("cash-out-parent").style.display="block"
    handleToggle("cash-out-parent")

    
    // const formBtns=document.getElementsByClassName("form-btn")

    // for(const btn of formBtns){
    //     btn.classList.remove("border-[#0874f2]","bg-[#0874f20d]")
    //     btn.classList.add("border-gray-300")
    // }

    // document.getElementById("cash-out-button").classList.remove("border-gray-300")
    // document.getElementById("cash-out-button").classList.add("border-[#0874f2]","bg-[#0874f20d]")

    handleButtonToggle("cash-out-button")
    
})

document.getElementById("send-money").addEventListener("click",function(){
    //  document.getElementById("add-money-parent").style.display="none"
    //   document.getElementById("cash-out-parent").style.display="none"
    //   document.getElementById("send-money-parent").style.display="block"
    // const forms=document.getElementsByClassName("form")
    // // console.log(forms)
    // for(const form of forms){
    //     // console.log(form)
    //     form.style.display="none"
    // }
    // document.getElementById("send-money-parent").style.display="block"
    handleToggle("send-money-parent")

    
    // const formBtns=document.getElementsByClassName("form-btn")

    // for(const btn of formBtns){
    //     btn.classList.remove("border-[#0874f2]","bg-[#0874f20d]")
    //      btn.classList.add("border-gray-300")
    // }

    // document.getElementById("send-money").classList.remove("border-gray-300")
    // document.getElementById("send-money").classList.add("border-[#0874f2]","bg-[#0874f20d]")
    handleButtonToggle("send-money")
})
document.getElementById("bonus-button").addEventListener("click",function(){
    //  document.getElementById("add-money-parent").style.display="none"
    //   document.getElementById("cash-out-parent").style.display="none"
    //   document.getElementById("send-money-parent").style.display="block"
    // const forms=document.getElementsByClassName("form")
    // // console.log(forms)
    // for(const form of forms){
    //     // console.log(form)
    //     form.style.display="none"
    // }
    // document.getElementById("get-bonus-parent").style.display="block"
    handleToggle("get-bonus-parent")

    
    // const formBtns=document.getElementsByClassName("form-btn")

    // for(const btn of formBtns){
    //     btn.classList.remove("border-[#0874f2]","bg-[#0874f20d]")
    //      btn.classList.add("border-gray-300")
    // }

    // document.getElementById("bonus-button").classList.remove("border-gray-300")
    // document.getElementById("bonus-button").classList.add("border-[#0874f2]","bg-[#0874f20d]")
    handleButtonToggle("bonus-button")
})

document.getElementById("bonus-button").addEventListener("click",function(){
    handleToggle("get-bonus-parent")
        handleButtonToggle("bonus-button")
})
document.getElementById("bill-button").addEventListener("click",function(){
    handleToggle("pay-bill-parent")
        handleButtonToggle("bill-button")
})
document.getElementById("transactions-button").addEventListener("click",function(){
    handleToggle("transactions-parent")
        handleButtonToggle("transactions-button")
})

document.getElementById("logout-button").addEventListener("click", function(){
    localStorage.removeItem("isLoggedIn")
    window.location.href="./index.html"
})