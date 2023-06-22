
const form = document.querySelector(".login-form");
const inputEmail = document.querySelector('[type="email"]');
const inputPassword = document.querySelector('[type="password"]');

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
   return alert("Усі поля повинні бути заповнені!");
  }
    
  const resLogIn = {email, password};
  console.log(resLogIn);
  event.currentTarget.reset();
}



   