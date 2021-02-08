body = document.getElementById("body");
result = document.getElementById("result");

function colorChange() {
  body.style.backgroundColor = "";

  body.style.backgroundColor = result.value;
}

console.log(result.value);
