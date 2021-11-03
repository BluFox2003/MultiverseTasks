const fetch = require("node-fetch");

async function delRest(btn) {
  const id = btn.getAttribute("data-id");

  const response = await fetch("http://localhost:8002/restaurants", {
    method: "DELETE",
  });
}
delRest(btn);
