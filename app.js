


  let bla = document.querySelector("#create");

  bla.addEventListener('click' , CreateCanvas)


  function CreateCanvas(e) {
    
    console.log("GG");
    let card = document.querySelector("#printedCard");
    let img = document.createElement("img");
    let name = document.createElement("div");
    let radio = document.querySelectorAll('input[type=radio]');
    let printedCanvas = document.querySelector('#printedCanvas');

    
      img.src = "Eid1.jpeg"
    
    img.classList.add('print')
    debugger
    // img.setAttribute("crossOrigin","anonymous");
    let nname = document.querySelector('#namein').value;
    name.innerText = " " +nname;
    name.classList.add('name');
    card.appendChild(img);
    card.appendChild(name);
    
    
    html2canvas(card).then(canvas => {
     printedCanvas.appendChild(canvas)
     card.classList.add('none')
      console.log("2");
  });


  }

  
  
  
  
  







