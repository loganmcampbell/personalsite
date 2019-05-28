var artwork =
`
<br/> - Isolated Threshold on a particular image - <br>
<img id = 'projectpic' src='m/art/image1.jpg'><br>
<br/> - Colorized Values on a Threshold Filter - <br>
<img id = 'projectpic' src='m/art/image3.jpg'><br>
<br/> - Morphed Back Layer - <br>
<img id = 'projectpic' src='m/art/image4.jpg'><br>
<br/> - Filter Modulation and Rendered Fractals - <br>
<img id = 'projectpic' src='m/art/image5.jpg'><br>
<br/> - Photo -> Filter [Edge Detection] -> Colorize - <br>
<img id = 'projectpic' src='m/art/image6.jpg'><br>
<br/> - Photo Fractals and Transformation(s) - <br>
<img id = 'projectpic' src='m/art/image7.jpg'><br>
<br/> - Photo Filter : Algorithm - <br>
<img id = 'projectpic' src='m/art/image8.jpg'><br>
<br/> Image Positioning and Illusion Depth : NKON D3300  <br>
<img id = 'projectpic' src='m/art/image9.jpg'><br>
<br/> Image Filter Overlays with Distortion <br>
<img id = 'projectpic' src='m/art/image10.jpg'><br>
<br/> - Image Displacement RGB : Overlays | NKON D3300  - <br>
<img id = 'projectpic' src='m/art/image12.jpg'><br>
<br/> - Image RGB & Blurs : NKON D3300   - <br>
<img id = 'projectpic' src='m/art/image13.jpg'><br>

`;
// <img id = 'projectpic' src='m/art/image2.jpg'><br>
// <img id = 'projectpic' src='m/art/image15.png'><br>
// <img id = 'projectpic' src='m/art/image16.jpg'><br>

function art()
{

  $("#quote").fadeOut(function()
  {
    $(this).text("Artwork").fadeIn(200);
  });




  $("#bio").fadeOut(function()
  {
       document.getElementById("bio").innerHTML = artwork;


       $("#bio").fadeIn(200);
  });
  $(".attributes").fadeOut();
  $(".socialbar").fadeOut();

}
