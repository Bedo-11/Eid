


  let bla = document.querySelector("#create");
  document.getElementById("canvas").style.visibility = "hidden";
  document.getElementById("preview").style.visibility = "hidden";
  document.getElementById("download").style.visibility = "hidden";
  let card = document.querySelector("#printedCard");
  let name = document.createElement("div");
  let radio = document.querySelectorAll('input[type=radio]');
  let printedCanvas = document.querySelector('#printedCanvas');
  let hero = document.querySelector('#hero');

  var canvas = document.getElementById("canvas");
  var dwn = document.getElementById('btndownload')
  canvas.width= 1500;
  canvas.height= 1500;
  var context = canvas.getContext("2d");



  bla.addEventListener('click' , CreateCanvas)


  function CreateCanvas(e) {
    
    // console.log("GG");

      var image = new Image();
      if(eid2.checked){
        document.getElementById('preview').setAttribute("src",'Eid1.jpeg');
      } else if (eid3.checked){
        document.getElementById('preview').setAttribute("src",'Eid3.png');
      }
      var image = document.getElementById('preview');
      // canvas.width= image.clientWidth;
      // canvas.height= image.clientHeight;
  
      context.drawImage(image,0,0,1500,1500);
      // context.drawImage(image,50,50,500,500);
  
      // context.drawImage(image, -190,0);
      // context.drawImage(image, 0,-190,image.clientWidth*6,image.clientHeight*6);
      // context.drawImage(image, canvas.width/4,400,400,300);
  
      // WebFont.load({
    // 	google: {
    // 		families: ['Almarai:300,400,700']
    // 	}
    // });
      
      context.font= '70px Almarai';
      context.fillStyle= '#fff';
      context.textAlign= 'center';
  
      context.moveTo(0,canvas.height/2);
    
      context.fillText(document.getElementById("txtName").value,canvas.width/2,(canvas.height/2)+450);
  
  
  
      document.getElementById("preview").style.visibility = "hidden";
  
      var image = canvas.toDataURL("image/jpg");
      // document.getElementById("download").href = image;
      // document.getElementById("download").setAttribute("download", "myumage.jpg");
      document.getElementById("download").setAttribute("href", image);
      // setTimeout(function(){
      //     //  alert("Hello"); 
          
          
      //     }, 2000);
      $('#download')[0].click();
     
      // document.getElementById("download").style.visibility = "visible";
      // document.getElementById("download").disabled  = true;
      // document.getElementById("canvas").style.visibility = "visible";
      // setTimeout(function(){
      //     //  alert("Hello"); 
      // document.getElementById("download").disabled  = false;
          
      //     }, 6000);
  
  
      
      // $('#exampleModal').modal('show');
  
  


  }

 




