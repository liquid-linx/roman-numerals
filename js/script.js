
function convertRoman(number){
   var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
   var letters = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
   var result = '';
    if(number < 4000){
      for (var i = 0; i < numbers.length; i++){
        while (number >= numbers[i]){
          result += letters[i]
          number -= numbers[i];
        }
      }
      return result;
    }else{
      result = "We cannot count to 4000 in Roman numeral";
      return result;
    }
}
//User interface
$(document).ready(function() {
  $("form#convert").submit(function(event){
    event.preventDefault();
    var number = parseInt($("input#decimal").val()); //convert the string into a number
    var result = convertRoman(number); //runs the number thru the function convertRoman
    $("#result").text(result);  //return the result in text form
    });
});
