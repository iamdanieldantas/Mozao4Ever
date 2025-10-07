// assets/js/auth.js
const AUTH_KEY = "mozao.loggedIn";

function login(){ localStorage.setItem(AUTH_KEY, "true"); }
function logout(){ localStorage.removeItem(AUTH_KEY); }
function isLoggedIn(){ return localStorage.getItem(AUTH_KEY) === "true"; }
function requireAuth(redirectTo = "/login.html"){
  if (!isLoggedIn()){
    // resolve caminhos relativos como ./login.html
    const url = redirectTo.startsWith("/") ? redirectTo : redirectTo;
    window.location.href = url;
  }
}

// helper para Navbar (liga o botão #logout se existir)
function wireLogoutBtn(){
  const btn = document.getElementById("logout");
  if(btn){
    btn.addEventListener("click", (e)=>{
      e.preventDefault();
      logout();
      window.location.href = (btn.dataset.to || "../login.html");
    });
  }
}
