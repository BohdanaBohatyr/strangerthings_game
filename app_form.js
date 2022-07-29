document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  form.addEventListener("submit", formSend);

  async function formSend(e) {
    e.preventDefault();
  }
});

function validate() {
  let a = document.forms["form"]["name"].value;
  let b = document.forms["form"]["email"].value;
  if (a == '') {
    alert('You should write your name');
    return false;
  }
  if (b == '') {
    alert('You should write your e-mail');
    return false;
  }
  at = b.indexOf("@");
  dot = b.indexOf(".");
  if (at<1 || dot <1){
     alert('Uncorrect e-mail')
     return false;
}
    window.location.href = 'index_game.html';
}