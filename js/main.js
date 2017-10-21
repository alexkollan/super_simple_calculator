//Prints on screen the pressed numbers and symbols.
$(".numbutton,.calcbutton").on('click', function(){
    var disNum = $("#screen").text();
    var display = $("#screen").html(disNum + $(this).attr('value'));
    console.log($(this).attr('value'));
  })
  
  
  //Reads the screen, normalizes ÷ and x to / and *, and calculates using eval()
  $(".resbutton").on('click', function() {
    var screen = $("#screen").text();
    var normalized = screen.replace("÷", "/").replace("x","*");
    var result = eval(normalized);
    $("#screen").html(result);
    console.log(result);
  })
  
  //Resets the view of the screen to empty
  //(Resets the calculator since it reads from the screen)
  $(".resetButton").on('click', function() {
    $("#screen").html("");
  })
  