


  let bla = document.querySelector("#create");

  bla.addEventListener('click' , CreateCanvas)


  function CreateCanvas(e) {
    
    console.log("GG");
    let card = document.querySelector("#printedCard");
    let img = document.createElement("img");
    let name = document.createElement("div");
    let radio = document.querySelectorAll('input[type=radio]');
    let printedCanvas = document.querySelector('#printedCanvas');

    if(eid1.checked) {
      img.src = "Eid1.jpeg"
    }
    img.classList.add('print')
    img.setAttribute("crossOrigin","anonymous");
    let nname = document.querySelector('#namein').value;
    name.innerText = " " +nname;
    name.classList.add('name');
    card.appendChild(img);
    card.appendChild(name);
    console.log("1");
    
    html2canvas(card).then(canvas => {
      // printedCanvas.appendChild(canvas)
      var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
      console.log(image);
      window.location.href=image;

      console.log("2");
      card.classList.add('none');

  });

  console.log("3");


  }
  
  // const form = document.querySelector('form');

  // loadEventListener()
  // function loadEventListener(){
  //   form.addEventListener('submit', createCard);
  // }
  
  
  // function createCard(e){
    
  // const card = document.querySelector('.card');
  // let toName = document.querySelector('#name');
  // let messageText= document.querySelector('#message');
  // let fromName = document.querySelector('#from');
  //   let name = document.querySelectorAll('input[type=text]')[0].value;
  // let message = document.querySelectorAll('input[type=text]')[1].value;
  // let sender = document.querySelectorAll('input[type=text]')[2].value;
  // const radio = document.querySelectorAll('input[type=radio]');
  // const submit = document.querySelector('input[type=submit]');
  //   if(flowers.checked){
  //     card.classList.add('flowersBack');
  //   }else if(balloons.checked){
  //     card.classList.add('balloonsBack');
  //   }else{
  //     card.classList.add('beachBack');
  //   };
  //   toName.innerText = name;
  //   messageText.textContent = message;
  //   fromName.textContent = sender;
  //    e.preventDefault();
  // }
  
  
  
  
  
  







