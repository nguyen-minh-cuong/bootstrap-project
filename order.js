
  const myForm = document.getElementById("myForm");
  const phoneNumber = document.getElementById("phoneNumber");
  const email = document.getElementById("email");
  const address = document.getElementById("address");
  const selectInput = document.getElementById("selectInput");
  console.log(selectInput.value)
  async  function upLoad(x) {
  await  fetch("https://phone-number--cuongnguyen213.repl.co/",{
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(x)
    });
    console.log(x)
  }
  myForm.addEventListener("submit",async  (e) => {
    e.preventDefault();
    console.log('hahha')
    console.log(myForm.checkValidity());
    if (!myForm.checkValidity() ) 
   {myForm.classList.add("was-validated")}
  else {
    e.preventDefault()
    myForm.classList.add("was-validated");
    const data =  {
      phoneNumber: phoneNumber.value,
      email:email.value,
      address:address.value,
      type: selectInput.value};  
  await  upLoad(data);
    console.log(data)   ;
   window.location.reload()
  }
})
  