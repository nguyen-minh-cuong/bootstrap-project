 /*const link = ["http://localhost:8158/xinfa.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQnULcBfSqH9C3ooVVkPDA9rxRyqHoR3M1ng&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdR4ADjFrYD7eVKy49bpKEfN0bIBhJSACuXQ&usqp=CAU"];
 const count = document.getElementById("count");
 const slideImg = document.getElementById("slide-img");
 const up = document.getElementById("up");
 const down = document.getElementById("down");
 const changeUp = () => {
   let number = 0;
   console.log(slideImg.src)
   for (number; number< link.length -1; number++ ) { if (slideImg.src === link[number]) 
   {slideImg.src = link[number+1];count.innerHTML =`${number+2}/${link.length}`;return} 
   }
  if (number === link.length -1) {slideImg.src = link[0]; count.innerHTML =`${1}/${link.length}`}
 };
 const changeDown = () => {
   let number = link.length -1;
   console.log(slideImg.src)
   for (number; number > 0; number-- ) { if (slideImg.src === link[number]) 
   {slideImg.src = link[number-1];count.innerHTML=`${number}/${link.length}`;return} 
   }
  if (number === 0) {slideImg.src = link[link.length -1];count.innerHTML=`${link.length}/${link.length}`}
 };
 const textContainer = document.getElementById("text-container");
//  up.onclick = changeUp;
// down.onclick = changeDown;*/
const textContainer = document.getElementById("text-container");
const subSummary = document.getElementById("sub-summary");
 const downLoad =  async () => {
 let x = await  fetch("https://941aa320-ef24-4c93-a81c-5ead594cfdea-00-3i6faog1cpfv6.global.replit.dev/products-text").then((data) => {
   return data.json()
 })
 return x
 }
 const makeText = (finalRS,num) => {
   const subContainer = document.createElement("div")
   subContainer.setAttribute("class","sub-container")
   subContainer.id = finalRS[0].id
   const sumItem = document.createElement("a")
   sumItem.setAttribute("class","sum-item")
   sumItem.setAttribute("href",`#${finalRS[0].id}`)
   for (let i=1; i<= finalRS.length-1; i++) {
   if (finalRS[i].classType === "newHeader" ) {
     const h3 = document.createElement("h3")
     h3.setAttribute("class","color")
     h3.innerHTML = `${num}. ${finalRS[i].value}`
     sumItem.innerHTML =  `${num}. ${finalRS[i].value}`
     subContainer.appendChild(h3)
   }
   else  if ( finalRS[i].classType === "newP") { 
     const p = document.createElement("p")
     p.innerHTML = finalRS[i].value
     subContainer.appendChild(p)
   } 
   else  if ( finalRS[i].classType === "newDiv") { 
     const div = document.createElement("p")
     div.setAttribute("class","pros-cons")
     div.innerHTML = finalRS[i].value
     subContainer.appendChild(div)
   } 
   else  if ( finalRS[i].classType === "newSpan") { 
     const span = document.createElement("span")
     span.setAttribute("class","span1")
     span.innerHTML = finalRS[i].value
     subContainer.appendChild(span)
   } 
   else  if ( finalRS[i].classType === "newBr") { 
     const br = document.createElement("div")
     br.setAttribute("class","break")
     subContainer.appendChild(br)
   } 
   else  if ( finalRS[i].classType === "newImgField") { 
     const offImg = document.createElement("img")
     offImg.setAttribute("class","img")
     offImg.src = finalRS[i].value
     subContainer.appendChild(offImg)
   } 
  }
  subSummary.appendChild(sumItem)
  textContainer.appendChild(subContainer)
 }
 const createText = async () => {
   const arrayOf = await downLoad()
   console.log(arrayOf)
   for (let i=0; i <= arrayOf.length -1; i++ ) {
     
  await   makeText(arrayOf[i].text,i+1)
   }
 }
createText()
 