var confirm = document.querySelector("#confirmh")
var usernameinput = document.getElementById("usernameh")
var passwordinput = document.querySelector("#passwordh")

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

var bankaccount = new accountregister("Rasim","Dadashov","20","rdadashov","1234")
data.push(bankaccount)

var bankaccount = new accountregister("Ali","Abdullayev","204561","aabdullayev","2222")
data.push(bankaccount)

var bankaccount = new accountregister("Cavid","Quliyev","8942","cquliyev","6589")
data.push(bankaccount)
var bankaccount = new accountregister("Cavid","Quliyev","8942","cquliyev","6589")
data.push(bankaccount)


// array data log console
// console.log("dataarray",data);

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
    alert("write correct username")
}

function check(userobj){
    if(userobj.password !== passwordinput.value)
    {alert("password is incorrect")} 
    else{
    alert(`welcome ${userobj.name} ${userobj.surname}`)

    }
}


function myFunction() {
    document.getElementById("logindiv").style.display = "none";
}

myFunction()



