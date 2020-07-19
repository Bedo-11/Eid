


  let bla = document.querySelector("#create");
  document.getElementById("canvas").style.visibility = "hidden";
  document.getElementById("preview2").style.visibility = "hidden";
  document.getElementById("preview3").style.visibility = "hidden";
  document.getElementById("download").style.visibility = "hidden";
  document.getElementById("download").style.display = "none";
  

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
        var image = document.getElementById('preview2');
        var n = 450;
      } else if (eid3.checked){
        var image = document.getElementById('preview3');
        var n = 480;
      } 
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
    
      context.fillText(document.getElementById("txtName").value,canvas.width/2,(canvas.height/2)+n);
  
  
  
      document.getElementById("preview2").style.visibility = "hidden";
      document.getElementById("preview3").style.visibility = "hidden";
  
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

  // Some random colors
const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

const numBalls = 50;
const balls = [];

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `1em`;
  ball.style.height = ball.style.width;
  ball.style.zIndex = "-1";
  
  balls.push(ball);
  document.body.append(ball);
}

// Keyframes
balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12
  };

  let anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` }
    ],
    {
      duration: (Math.random() + 1) * 2000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
});


 




