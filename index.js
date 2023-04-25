var confirm = document.querySelector("#confirmh")
var usernameinput = document.getElementById("usernameh")
var passwordinput = document.querySelector("#passwordh")
var balance_div = document.querySelector("#balance_div")
var cashmoney = document.querySelector("#cashmoney")
var depositemoney = document.querySelector("#depositemoney")

// var usernameinputvalue = usernameinput.value


var accountregister = function(name, surname,balance,username,password){
    this.name = name,
    this.surname = surname,
    this.balance =balance,
    this.username = username,
    this.password = password
   
}


var data = []
var userobj

var bankaccount = new accountregister("Rasim","Dadashov",20,"rdadashov","1234")
data.push(bankaccount)

var bankaccount = new accountregister("Ali","Abdullayev",204561,"aabdullayev","2222")
data.push(bankaccount)

var bankaccount = new accountregister("Cavid","Quliyev",8942,"cquliyev","6589")
data.push(bankaccount)
var bankaccount = new accountregister("Cavid","Quliyev",8942,"cquliyev","6589")
data.push(bankaccount)


// array data log console
// console.log("dataarray",data);


// showing div
function homepagebalance() {
    depositediv.classList.add("d-none")
    depositediv.classList.remove("d-block")
    cashdiv.classList.add("d-none")
    cashdiv.classList.remove("d-block")
    balance_div.classList.remove("d-block");
    balance_div.classList.add("d-none")
    logindiv.classList.remove("d-none")
    logindiv.classList.add("d-block")
    

}





function confirminput  () {
    var u = usernameinput.value
    var p = passwordinput.value
    if (!u.trim() && !p.trim()){
        return alert("please enter the username and password")
    }

    search(u,data)
}



function search (userinput,data){
    for (var i=0; i < data.length; i++ ){
        if (data[i].username === userinput){
          userobj = data[i]
          check(userobj)
          console.log("userobj:",userobj);
        return
        }
        
    }
    alert("username not found")
}

function check(userobj){
    if(userobj.password !== passwordinput.value)
    {alert("password is incorrect")} 
    else{
        alert(`welcome ${userobj.name} ${userobj.surname}`)
        logindiv.classList.add("d-none");
        // window.open("./user.html","_self")
        // account_div.classList.add("d-block");
        account_div.classList.remove("d-none");
        account_div.classList.add("d-block");
        

    }
}

console.log(window);

function showbalance() {
    account_div.classList.remove("d-block");
    account_div.classList.add("d-none");
    balance_div.classList.remove("d-none")
    balance_div.classList.add("d-block")
    

    balance_div.innerHTML = `
    <h5 class="card-header text-center">${userobj.name} ${userobj.surname}</h5>
    <div class="card-body">
    <h3 class="text-center">your balance is ${userobj.balance}azn</h3>
    <button id="quitbalance" onclick="homepagebalance()">
        Quit
    </button>
    </div>

    `
  
    console.log(userobj);

}





function cash(){
    account_div.classList.remove("d-block");
    account_div.classList.add("d-none");
    cashdiv.classList.remove("d-none")
    cashdiv.classList.add("d-block")

}

function getcash() {   
    var gcash = cashmoney.value
    console.log(gcash); 
    
    if (userobj.balance-gcash < 0){
        alert(`you dont have enough balance for this operation, you have ${userobj.balance} AZN`)
        console.log(userobj.balance);
    }
    else{
        userobj.balance = userobj.balance-gcash
        alert("Please, take your cash money")
        homepagebalance()
    }
}

function deposite() {
    account_div.classList.remove("d-block");
    account_div.classList.add("d-none");
    depositediv.classList.remove("d-none")
    depositediv.classList.add("d-block")
}

function depositetobalance() {

    alert("your deposite successfully added")
    userobj.balance = userobj.balance+ +depositemoney.value
    homepagebalance()
}
