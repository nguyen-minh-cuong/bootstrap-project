
  const myForm = document.getElementById("myForm");
  const phoneNumber = document.getElementById("phoneNumber");
  myForm.addEventListener("submit", async (e) => {
    if (!myForm.checkValidity() ) 
   { e.preventDefault() };
    e.preventDefault();
    myForm.classList.add("was-validated");
    const number = {
      phoneNumber: phoneNumber.value
    };
  await  upLoad(number)
    console.log(number)
    
  async  function upLoad(x) {
  await  fetch("https://phone-number--cuongnguyen213.repl.co/",{
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(x)
    });
    console.log(phoneNumber.value);
  }
})
  
  