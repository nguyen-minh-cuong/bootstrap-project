
  const myForm = document.getElementById("myForm");
  const phoneNumber = document.getElementById("phoneNumber");
  const email = document.getElementById("email");
  const address = document.getElementById("address");
  const selectInput = document.getElementById("selectInput");
  
  async  function upLoad(x) {
  await  fetch("https://phone-number--cuongnguyen213.repl.co/",{
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(x)
    });
    
  }
  myForm.addEventListener("submit",async  (e) => {
    e.preventDefault();
    const newDate = new Date
    const today = newDate.toLocaleString()
    if (!myForm.checkValidity() ) 
   {myForm.classList.add("was-validated")}
  else {
    e.preventDefault()
    myForm.classList.add("was-validated");
    const data =  {
      phoneNumber: phoneNumber.value,
      email:email.value,
      date: today,
      address:address.value,
      type: selectInput.value};  
  await  upLoad(data);
   myForm.innerHTML ="<div id='da-gui'> Đã gửi ✓ <div> ( quý khách có thể điền lại thông tin bằng cách tải lại trang web ) </div> </div> "
  }
})
  