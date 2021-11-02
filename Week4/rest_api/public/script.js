const api_url = "/api/restaurants";

async function getapi(url) {
  const res = await fetch(url);
  let data = await res.json();
  console.log(data);
  if (res) {
    hideloader();
  }
  show(data);
}

getapi(api_url);

function hideloader() {
  document.getElementById("loading").style.display = "none";
}

function show(data) {
  let tab = `<tr>
          <th>name</th>
          <th>Image</th>
         </tr>`;

  // Loop to access all rows
  for (let r of data.list) {
    tab += `<tr> 
    <td>${r.name}</td>
    <td>${r.imagelink}</td>        
</tr>`;
  }
  // Setting innerHTML as tab variable
  document.getElementById("restaurants").innerHTML = tab;
}
