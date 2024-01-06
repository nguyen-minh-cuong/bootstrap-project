const row = document.getElementById("row");
const createCard = (title,src,more) => {
  const col = document.createElement("div");
  col.setAttribute("class","col col-style");
  col.innerHTML =` <div  class="card text-bg-primary border-3 card-style">
          <div class="card-header header-style">
           <h5>${title}</h5>
          </div>
          <img class="card-img-top img-style" src="${src}">
          <div class="card-footer footer-style">
           <a href="Our-products.html#${more}" class="more-style">Tìm hiểu thêm</a>
          </div>
       </div>`
  row.appendChild(col)
}
const createBottomCard  = () => {
  const col1 = document.createElement("div");
  col1.setAttribute("class","col col-style");
  const col2 = document.createElement("div");
  col2.setAttribute("class","col col-style");
  const col3 = document.createElement("div");
  col3.setAttribute("class","col col-style");
  col1.innerHTML = ` <div  class="card text-bg-primary border-3 card-style">
          <div class="card-header header-style">
           <h5>Xưởng cửa</h5>
          </div>
          <img class="card-img-top img-style" src="workplace.jpg">
          <div class="card-footer footer-style">
           <a href="about-us.html#workplace" class="more-style">Tìm hiểu thêm</a>
          </div>
       </div>`
  col2.innerHTML = `         <div  class="card text-bg-primary border-3 card-style">
          <div class="card-header header-style">
           <h5>Địa chỉ</h5>
          </div>
          <img class="card-img-top img-style" src="address.jpg">
          <div class="card-footer footer-style">
           <a href="about-us.html#address" class="more-style">Tìm hiểu thêm</a>
          </div>
       </div>`
  col3.innerHTML = ` <div  class="card text-bg-primary border-3 card-style">
          <div class="card-header header-style">
           <h5>Chủ xưởng</h5>
          </div>
          <img class="card-img-top img-style" src="director.jpg">
          <div class="card-footer footer-style">
           <a href="about-us.html#director" class="more-style">Tìm hiểu thêm</a>
          </div>
       </div>`
       row.appendChild(col1 )
       row.appendChild(col2 )
       row.appendChild(col3 )
}
//createCard('Cửa nhôm','https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80','Our-products.html#p2')
const findData = async () => {
 let x = await  fetch("https://f0cbd95e-a28c-4979-8b06-572c567e560b-00-2be7j4qe36l3r.global.replit.dev/",{method:"GET",headers:{accept: 'application/json'}}).then((data) => {return data.json() })
 return x
}
const run = async () => {
  const data =  await findData();
  for (let i = 0; i<= data.length-1; i++)
  { ;createCard(data[i].name,data[i].src,data[i].more)}
  createBottomCard()
}
run()