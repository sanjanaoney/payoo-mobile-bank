// console.log("script connected");
//login button functionalities
document.getElementById('loginButton')
.addEventListener('click',function(){
    console.log("login button clicked");
    const mobileNumber=12345678910;
    const pinNumber=1234;
    const mobileNumberValue=document.getElementById("mobile-number").value
    const mobileNumberValueConverted=parseInt(mobileNumberValue)
    const pinNumberValue=document.getElementById("pin-number").value
    const pinNumberValueConverted=parseInt(pinNumberValue)
    console.log(mobileNumberValueConverted,pinNumberValueConverted)

    if(mobileNumberValueConverted===mobileNumber&&pinNumberValueConverted===pinNumber)
    {
        //console.log("all values matched")
        window.location.href="./home.html"
    }
    else{
        //console.log("invalid credentials")
        alert("Invalid credentials")
    }

})

// //another way to prevent reload, instead of using type=button
// document.getElementById('loginButton')
// .addEventListener('click',function(e){
//     e.preventDefault()
//     console.log("login button clicked");
//     console.log(e)
// })