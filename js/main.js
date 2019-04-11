function myOverFunction() {
   document.getElementById("ad").style.display = "block";
   }
function myOutFunction() {
    document.getElementById("ad").style.display = "none";
}
function myOverFunction2() {
   document.getElementById("ad2").style.display = "block";
   }
function myOutFunction2() {
    document.getElementById("ad2").style.display = "none";
}
function Anne1() {
   document.getElementById("anne1").style.display = "block";
   document.getElementById("anne1").style.marginBottom = "64px";
   document.getElementById("anne2").style.display = "none";
   }
function Anne2() {
   document.getElementById("anne2").style.display = "block";
   document.getElementById("anne1").style.display = "none";
}



//youcoders speachs script
  // Get the modal
   var modal = document.getElementById('myModal');
   var modal2 = document.getElementById('myModal2');
   var modal3 = document.getElementById('myModal3');
   var modal4 = document.getElementById('myModal4');
  


   // Get the button that opens the modal
   var btn = document.getElementById("myBtn");
   var btn2 = document.getElementById("myBtn2");
   var btn3 = document.getElementById("myBtn3");
   var btn4 = document.getElementById("myBtn4");


   // Get the <span> element that closes the modal
   var span = document.getElementsByClassName("close")[0];
   var span2 = document.getElementsByClassName("close2")[0];
   var span3 = document.getElementsByClassName("close3")[0];
   var span4 = document.getElementsByClassName("close4")[0];
   

   // When the user clicks on the button, open the modal 
   btn.onclick = function() {
   modal.style.display = "block";
   }
   btn2.onclick = function() {
   modal2.style.display = "block";
   }
   btn3.onclick = function() {
   modal3.style.display = "block";
   }
   btn4.onclick = function() {
   modal4.style.display = "block";
   }
  

   // When the user clicks on <span> (x), close the modal
   span.onclick = function() {
   modal.style.display = "none";
   }
   span2.onclick = function() {
   modal2.style.display = "none";
   }
   span3.onclick = function() {
   modal3.style.display = "none";
   }
   span4.onclick = function() {
   modal4.style.display = "none";
   }
   

   // When the user clicks anywhere outside of the modal, close it
   window.onclick = function(event) {
   if (event.target == modal) {
      modal.style.display = "none";
   }
   }
   window.onclick = function(event) {
   if (event.target == modal2) {
      modal2.style.display = "none";
   }
   }
   window.onclick = function(event) {
   if (event.target == modal3) {
      modal3.style.display = "none";
   }
   }
   window.onclick = function(event) {
   if (event.target == modal4) {
      modal4.style.display = "none";
   }
   }
   
         



  //video js
  
  function VideoClose(){
     var element = document.getElementById("video_trailer");
     element.style.display = "none";
     var element2 = document.getElementById("hed");
     element2.classList.remove("hed_op");
  }
  function VideoOpen(){
     var element = document.getElementById("video_trailer");
     var element2 = document.getElementById("hed");
     element2.classList.add("hed_op");
     element.style.display = "block";
     //element.classList.add("video_wf");
     //var element3 = document.getElementById("vid");
    // element3.src="https://www.youtube.com/embed/fE-3ZmSgQ3g";
     
  }