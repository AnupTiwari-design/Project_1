function register(){
    let user=document.getElementById("regUser").value;
    let pass=document.getElementById("regPass").value;

    if(user===""||pass===""){
        alert("please fill all required");
        return;
    }

    localStorage.setItem("username",user);
    localStorage.setItem("password",pass);

    alert("Registered Successfully");
    window.location.href="index.html";
}

function login(){
    let user=document.getElementById("loginUser").value;
    let pass=document.getElementById("loginPass").value;

    let Suser=localStorage.getItem("username");
    let Spass=localStorage.getItem("password");

    if(user===Suser && pass===Spass){
        localStorage.setItem("loggedInUser",user);
        window.location.href="dashboard.html";
    } else {
        alert("Invalid Credentials");
    }
}


// Dashboard + ALL DOM CODE
window.onload = function(){

    let user = localStorage.getItem("loggedInUser");

    if(!user){
        window.location.href="index.html";
        return;
    }

    document.getElementById("welcomeUser").innerText="Hello " + user;

    // Clock
    setInterval(() => {
        let now = new Date();
        document.getElementById("clock").innerText = now.toLocaleTimeString();
    }, 1000);

    // Todo System
    let input = document.getElementById("taskInput");
    let btn = document.getElementById("addTask");
    let list = document.getElementById("taskList");

    btn.addEventListener("click", () => {

        if(input.value === "") return;

        let li = document.createElement("li");
        li.innerText = input.value;

        li.addEventListener("click", () => {
            li.classList.toggle("done");
        });

        list.appendChild(li);
        input.value = "";
    });

    // Enter key
    document.addEventListener("keydown", (e) => {
        if(e.key === "Enter"){
            btn.click();
        }
    });

    // Dark Mode
    document.getElementById("modeBtn").addEventListener("click", () => {
        document.body.classList.toggle("dark");
    });
}


// Logout
function logout(){
    localStorage.removeItem("loggedInUser");
    window.location.href="index.html";
}