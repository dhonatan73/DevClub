

  let Mini;
  let phil;
  
  function escolherstella() {
    document.getElementById("stella").style.borderColor = "blue";
    document.getElementById("phillips").style.borderColor = "white";
  
    Mini = "Stella";
  }
  
  function escolherphillips() {
    document.getElementById("phillips").style.borderColor = "blue";
    document.getElementById("stella").style.borderColor = "white";
  
    phil = "Phillips";
  }
  
  function finalizarPedido() {
    alert(phil);
    alert(Mini);
  }
  