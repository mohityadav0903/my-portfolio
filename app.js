
const heading = document.getElementById("heading");
const about=document.getElementById("me")
const str = "Welcome";
let idx = 1;
setInterval(write, 400);
heading.addEventListener("load", write());
function write() {
  heading.innerText = str.slice(0, idx);
  idx++;
  if (idx > str.length) {
    idx = 1;
    //PASUE DE YAHA PR THODI DER KAAA
  }
}
