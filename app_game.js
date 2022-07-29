let click = 0;
let health = 5;

function onClick() {
  click++;
  document.getElementById("health").innerHTML = "Health: " + (health - click);
  if (health - click == 0) {
    secondLevel();
  }
}

function secondLevel() {
  document.getElementById("level").innerHTML = "Level: 2";
  document.getElementById("health").innerHTML = "Health: 10";
  document.getElementById("character").innerHTML = "Character: Demogorgan";
  bat.remove();
  let demogorgan = document.getElementById("img");
  demogorgan.innerHTML =
    '<img class="demogorgan" id="demogorgan" src="/image/demogorgan.png" alt="Demogorgan" onclick="onClick2()">';
  health = 10;
  click = 0;
}

function onClick2() {
  click++;
  document.getElementById("health").innerHTML = "Health: " + (health - click);
  if (health - click == 0) {
    thirdLevel();
  }
}

function thirdLevel() {
  document.getElementById("level").innerHTML = "Level: 3";
  document.getElementById("health").innerHTML = "Health: 15";
  document.getElementById("character").innerHTML = "Character: Vecna";
  demogorgan.remove();
  let vecna = document.getElementById("img");
  vecna.innerHTML =
    '<img class="vecna" id="vecna" src="/image/vecna.png" alt="Vecna" onclick="onClick3()">';
  health = 15;
  click = 0;
}

function onClick3() {
  click++;
  document.getElementById("health").innerHTML = "Health: " + (health - click);
  if (health - click == 0) {
    finish();
  }
}

function finish() {
  info.remove();
  vecna.remove();
  hello.remove();
  let final = document.getElementById("img");
  final.innerHTML =
    '<img class="finish" id="finish" src="/image/youwin.gif" alt="Finish">';

let text = document.getElementById('text');
let newText = document.createElement('p');
newText.innerText = 'You win! Congratulations!';
text.appendChild(newText)
}
