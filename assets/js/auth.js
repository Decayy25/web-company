// auth
if(localStorage.getItem('autoLogin')==='true' && location.pathname.includes('login')){
  alert('Auto login berhasil');
  window.location.href='../index.html';
}


// LOGIN
const loginForm=document.getElementById('loginForm');

if(loginForm){
  loginForm.addEventListener('submit',e=>{
  e.preventDefault();

  const u=document.getElementById('loginUsername').value;
  const p=document.getElementById('loginPassword').value;


  const storedUser=localStorage.getItem('username');
  const storedPass=localStorage.getItem('password');


  if(u===storedUser && p===storedPass){
    localStorage.setItem('autoLogin','true');
    alert('Login berhasil');
    window.location.href='../index.html';
  }else{
    alert('Username/password salah');
  }});
}


// REGISTER
const registerForm = document.getElementById('registerForm');
if(registerForm){
  registerForm.addEventListener('submit',e=>{
  e.preventDefault();
  const u = document.getElementById('regUsername').value;
  const p = document.getElementById('regPassword').value;

  localStorage.setItem('username',u);
  localStorage.setItem('password',p);

  alert('Registrasi berhasil, silakan login');
  window.location.href='login.html';
  });
}