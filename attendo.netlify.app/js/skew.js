
//phone-nav
$("document").ready(function () {
    $(".menu-wrap").click(function () {
      $(".ul").slideToggle();
    });
  });

//form
function validation(){

    let e = document.getElementById("text");
    let m = document.getElementById("text-2");
    
    if(e.value!=="" && m.value!==""){
      alert("Thank you for messaging us we will get back to you")   
   }
};


//style="background-color:#231c51; padding-top:2%;padding-bottom:2%; margin-top:4%;padding-left:2%;padding-right:2%; border-radius:10px; "



