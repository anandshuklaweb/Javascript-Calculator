document.addEventListener("DOMContentLoaded", function (event) {
  let result = document.querySelector("#result");
  let history = document.querySelector("#history");
  let equalTo = document.querySelector("#equalTo");
  let delete_one_digit = document.querySelector("#delete_one_digit");
  let clear = document.querySelector("#clear");
  let calc_btn = document.querySelectorAll("#calc_btn");

  let initial_value = "";

  calc_btn.forEach((calc_btn, index) => {
    calc_btn.addEventListener("click", function () {
      let text = this.innerHTML;
      initial_value += text;
      result.innerHTML = initial_value;
    });
  });

  /*equal to button action*/
  equalTo.addEventListener("click", function () {
    if (result.innerHTML != "") {
      history.innerHTML = result.innerHTML;
      result.innerHTML = eval(result.innerHTML);
      initial_value = eval(result.innerHTML);
    } else {
      alert("please enter any Number");
    }
  });

  /*Delete Single Digit*/
  delete_one_digit.addEventListener("click", function () {
    result.innerHTML = result.innerHTML.substring(
      0,
      result.innerHTML.length - 1
    );
    initial_value = result.innerHTML;
  });

  /*clear all number*/
  clear.addEventListener("click", function () {
    result.innerHTML = "";
    initial_value = "";
  });
});
