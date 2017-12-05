$(function() {
 $("#puzzleForm").submit(function() {
    event.preventDefault();
    // var vowels = ["a", "e", "i", "o", "u", "y"];
    var sentence = $("#wordEntered").val();
    var sentenceArray = sentence.split('');

    for (var index = 0; index < sentenceArray.length; index += 1){

      if ((sentenceArray[index] === 'a') || (sentenceArray[index] === 'e') || (sentenceArray[index] === 'i') || (sentenceArray[index] === 'o') || (sentenceArray[index] === 'u') || (sentenceArray[index] === 'y')) {
      sentenceArray[index] = '-';
        }
      } // vowels in if statement

    sentenceNew = sentenceArray.join('');

    $("#puzzleResult").text(sentenceNew);

    $(".output").show();
    //$(".numbers").hide();
});
});







  //  for (var index = 0; index < sentence.length; index += 1){
  //    var word = sentence[index]
  //    var userInput = $("input#" + word).val();
  //    $("." + word).text(userInput);   //targeting class labeled "firstname"
  //  }

    // blanks.forEach(function(blank) {
    //   var userInput = $("input#" + blank).val();
    //   $("." + blank).text(userInput);
    // });
