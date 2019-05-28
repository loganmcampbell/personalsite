var act =
  //video/3gpp
  `
<br><br/>
BREAKING HABITS CREW
<br><br/>
<br>

<video width="320" height="240" controls muted>
 <source src="m/vid/bhs.mp4" type="video/mp4">
 <source src="m/vid/bhs.webm" type="video/webm">

</video>

<br/>

<br><br/>
BHS CREW PERFORMANCE
<br><br/>
<br>

<video width="320" height="240" controls muted>
 <source src="m/vid/bhs2.mp4" type="video/mp4">
 <source src="m/vid/bhs2.webm" type="video/webm">


</video>

<br/>

<br><br/>

<br><br/>
CORKSCREW
<br><br/>
<br>

<video width="320" height="240" controls muted>
 <source src="m/vid/cork.mp4" type="video/mp4">
 <source src="m/vid/cork.webm" type="video/webm">


</video>

<br/>

<br><br/>
PRACTICE SESSION
<br><br/>
<br>

<video width="320" height="240" controls muted>
 <source src="m/vid/blackbeat.mp4" type="video/mp4">
 <source src="m/vid/blackbeat.webm" type="video/webm">

</video>

<br/>

<br><br/>
<br><br/>
HANDHOP PROGRESSIONS
<br><br/>
<br>

<video width="320" height="240" controls muted>
 <source src="m/vid/handhop.mp4" type="video/mp4">
 <source src="m/vid/handhop.webm" type="video/webm">

</video>

<br/>

<br><br/>
SLO MO
<br><br/>
<br>

<video width="320" height="240" controls muted>
 <source src="m/vid/slomoair.mp4" type="video/mp4">
 <source src="m/vid/slomoair.webm" type="video/webm">

</video>

<br/>

<br><br/>


<br><br/>
SLO MO FLARES
<br><br/>
<br>

<video width="320" height="240" controls muted>
 <source src="m/vid/slomoflares.mp4" type="video/mp4">
 <source src="m/vid/slomoflares.webm" type="video/webm">

</video>

<br/>

<br><br/>
SLO MO WINDMILLS
<br><br/>
<br>

<video width="320" height="240" controls muted>
 <source src="m/vid/slomowind.mp4" type="video/mp4">
 <source src="m/vid/slomowind.webm" type="video/webm">

</video>

<br/>

<br><br/>

<br><br/>
SPIN
<br><br/>
<br>

<video width="320" height="240" controls muted>
 <source src="m/vid/spin.mp4" type="video/mp4">
 <source src="m/vid/spin.webm" type="video/webm">


</video>

<br/>

<br><br/>
CREW 2v2 ROUTINE
<br><br/>
<br>

<video width="320" height="240" controls muted>
 <source src="m/vid/sync.mp4" type="video/mp4">
 <source src="m/vid/sync.webm" type="video/webm">

</video>

<br/>

<br><br/>
<br><br/>
WINDMILL PRACTICE
<br><br/>
<br>

<video width="320" height="240" controls muted>
 <source src="m/vid/windprac.mp4" type="video/mp4">
 <source src="m/vid/windprac.webm" type="video/webm">

</video>

<br/>
`;


function activity() {

  $("#quote").fadeOut(function() {
    $(this).text("Activities").fadeIn(200);
  });




  $("#bio").fadeOut(function() {
    document.getElementById("bio").innerHTML = act;


    $("#bio").fadeIn(200);
  });
  $(".attributes").fadeOut();
  $(".socialbar").fadeOut();

}
