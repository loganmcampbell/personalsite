var des =
  `
<br> - Image Processing on a Map - <br><br/>
<img id = 'projectpic' src='m/des/image0.jpg'>
<br/>

<br> Symbol/Icon created and sketched <br><br/>
<img id = 'projectpic' src='m/des/image11.png'>
<br/>

<br> - Mock up design of an web application - <br><br/>
<img id = 'projectpic' src='m/des/image14.jpg'>
<br/>

<br> - Sound Design and Remixing - <br><br/>
<img id = 'projectpic' src='m/des/sound.gif'>
<br/>

<br> - Realtime Programming - <br><br/>
<img id = 'projectpic' src='m/des/program.gif'>
<br/>
`;
// <img id = 'projectpic' src='m/img/work/image2.jpg'><br>
// <img id = 'projectpic' src='m/img/work/image15.png'><br>
// <img id = 'projectpic' src='m/img/work/image16.jpg'><br>

function design() {

  $("#quote").fadeOut(function() {
    $(this).text("Design").fadeIn(200);
  });




  $("#bio").fadeOut(function() {
    document.getElementById("bio").innerHTML = des;


    $("#bio").fadeIn(200);
  });
  $(".attributes").fadeOut();
  $(".socialbar").fadeOut();

}
