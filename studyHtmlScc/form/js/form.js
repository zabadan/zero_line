function validationForm(){
    var form = document.forms[0]; // можно document.forms[0]
    alert ( form );
    var elem = form.elements[0]; // можно form.elements[0]
    alert ( elem.value );
  }