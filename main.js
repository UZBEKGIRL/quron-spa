let app = document.querySelector(".app");

let h1 = document.createElement("h1");
h1.textContent = "Hi";
let p = document.createElement("p");
p.textContent = "lorem";

app.appendChild(h1);
app.append(p);