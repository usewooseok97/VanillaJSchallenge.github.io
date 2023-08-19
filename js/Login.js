const Loginform = document.getElementById("Login-form");
const Logininput = Loginform.querySelector("input");
const LoginName = document.getElementById("Login-name");
const DelBtn = document.getElementById("del-btn");
const USER = "user";
const HIDDEN = "hidden";

function DeleteName(){
  localStorage.removeItem(USER);
  Logininput.value = "";
  LoginName.classList.add(HIDDEN);
  Loginform.classList.remove(HIDDEN);
  DelBtn.classList.add(HIDDEN);
  Loginform.addEventListener("submit",LoginSubmit);
}
function LoginSubmit(event){
  event.preventDefault();
  const Username = Logininput.value;
  localStorage.setItem(USER,Username);
  LocalStrageSave(Username);
  LoginName.innerText = `Hello ${Username}`;
}
function LocalStrageSave(value){
  Loginform.classList.add(HIDDEN);
  DelBtn.classList.remove(HIDDEN);
  LoginName.classList.remove(HIDDEN)
  LoginName.innerText =`Hello ${value}`;
  DelBtn.addEventListener("click",DeleteName);
}
const savename = localStorage.getItem(USER)
if(savename === null){
  Loginform.addEventListener("submit",LoginSubmit);
}else{ LocalStrageSave(savename);
}