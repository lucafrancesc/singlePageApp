$(function() {

    var example = new Note();

    $('#submit').click(function() {
      display();
    });

    function display() {
      value = $("#text").val();
      $('#displayText').append(example.showText(value) + " ");
    };
});
