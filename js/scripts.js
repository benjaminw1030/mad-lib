$(document).ready(function () {
  $("#formOne").submit(function (event) {
    event.preventDefault();
    const person1Input = $("input#person1").val();
    const person2Input = $("input#person2").val();
    const animalInput = $("input#animal").val();
    const exclamationInput = $("input#exclamation").val();
    const verbInput = $("input#verb").val();
    const nounInput = $("input#noun").val();

    const inputArray = [
      person1Input,
      person2Input,
      animalInput,
      exclamationInput,
      verbInput,
      nounInput,
    ];

    let allCaps = [];
    inputArray.forEach(function (element) {
      allCaps.push(element.toUpperCase());
    });

    $(".person1").text(allCaps[0]);
    $(".person2").text(allCaps[1]);
    $(".animal").text(allCaps[2]);
    $(".exclamation").text(allCaps[3]);
    $(".verb").text(allCaps[4]);
    $(".noun").text(allCaps[5]);

    $("#story").show();
  });
});