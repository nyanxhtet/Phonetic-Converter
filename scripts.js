var $container = document.querySelector(".resultSection");
var paragraph = document.createElement("p");

$("#clearButton").click(function () {
  $(".resultSection").empty();
  $("#textInput").val("");
});

$("#submitForm").on("submit", function (e) {
  e.preventDefault()
  $(".resultSection").empty();
  let textInput = $("#textInput").val();
  let lower = textInput.toLowerCase();

  let textArray = lower.split("");
  let alpha = "abcdefghijklmnopqrstuvwxyz";
  let nato = [
    "Alpha",
    "Bravo",
    "Charlie",
    "Delta",
    "Echo",
    "Foxtrot",
    "Golf",
    "Hotel",
    "India",
    "Juliette",
    "Kilo",
    "Lima",
    "Mike",
    "November",
    "Oscar",
    "Papa",
    "Quebec",
    "Romeo",
    "Sierra",
    "Tango",
    "Uniform",
    "Victor",
    "Whiskey",
    "X-Ray",
    "Yankee",
    "Zulu",
  ];

  //   $(".resultSection").append(`<h2> ${textInput} </h2>`);

  for (let letter of textArray) {
    if (alpha.indexOf(letter) >= 0) {
      let idx = alpha.indexOf(letter);
      $(".resultSection").append(`<p id="result">${nato[idx]}</p>`);
    }
  }
});

$("body").on("click", "#result", function (e) {
  e.target.remove();
});

$("body").on("mouseenter", "#result", function (e) {
  $(this).css({ color: "red", "text-decoration": "line-through" });
});

$("body").on("mouseleave", "#result", function (e) {
  $(this).css({ color: "white", "text-decoration": "none" });
});
