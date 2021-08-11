$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const person1Input = $("input#person1").val();
    const person2Input = $("input#person2").val();
    const nounInput= $("input#noun").val();
    const exclamationInput = $("input#exclamation").val();
    const verbInput = $("input#verb").val();
    const actionInput = $("input#action").val();

    $(".person1").text(person1Input);
    $(".person2").text(person2Input);
    $(".noun").text(nounInput);
    $(".exclamation").text(exclamationInput);
    $(".verb").text(verbInput);
    $(".action").text(actionInput);

    $("#story").show();
  });
});