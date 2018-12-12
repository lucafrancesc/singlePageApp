(function(exports){

  function renderForm(){
    document.write("<input type='text' id='noteArea' value='text'>");

    document.write("<input type='submit' id='submit'>");

    document.write("<div id='display'></div>");
  }

    exports.renderForm = renderForm
})(this)
