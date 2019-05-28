var  input = [];

input[0] =
`
Github Project(s)
<br>
<hr>
<br><br>
<img id = 'projectpic' src='m/project/image1.png'>
<br><br>
This is my github where I upload the code for several of my projects, assignments, and practice code for the variety of computer languages I've studied.
There is a link within my website that leads to the actual code segments.
Regardless, my github consists of languages from C/C++, Python, Javascript, Java, VHDL, Python, Ruby, CSS, HTML, and many more.
`;

input[1] =
`
  <br><br><br>
  KeyLed Project
  <br>
  <hr>
  <br><br>
  <img id = 'projectpic' src='m/project/image2.png'>
  <br><br>
  This is a project where I learned to use the Arduino Platform and the realtime data processing.
  The main objective of the project was to create a realtime flag of what keys were being used.
  I created a keylogger through python code and was able to research the braille alphabet to generate the alphabet in a
  led signal pattern.
  Using an EleGoo UNO R3 To configure the inputs and outputs of the signals the device recieves it was able to process this.
  <br>
  The project is completed for now, but I figured I might actually create the led signals into a physical punchout device for a physical aspect rather than visual.

`
input[2] =
`
<br><br><br>
TeamHammerApp
<br>
<hr>
<br><br>
<img id = 'projectpic' src='m/project/image3.png'>
<br><br>
This was a team-based project from a software engineering course at the University of Arkansas.
The main objective of the mobile application was to create a shopping cart that has a client (front-end) and a server (back-end) to that communicated with each other.
The backend server contained our information (accounts and inventory) and the frontend client contained our activites for the different types of accounts. Prompting the user to
connect to the database and vice-versa to continue with the different actions a user makes.


`
input[3] =
`
<br><br><br>
Shortest Path UARK
<br>
<hr>
<br><br>
<img id = 'projectpic' src='m/project/image4.png'>
<br><br>
This is a senior capstone project. The objective of the project was to create a pathfinding app that would obtain all the course buildings and then generates the best path to those buildings.
This is still currently under construction but the finalized product should be done by May 2019.


`
input[4] =
`
<br><br><br>
Microcontroller Project(s)
<br>
<hr>
<br><br>
<img id = 'projectpic' src='m/project/image5.png'>
<br><br>
This is going to be a series of projects that will test different capabilities and ideas I have for the different controllers I obtain.
There is a future project that I had in mind that is going to deal with wearbale leds.
I want to be able to use these controllers to program a sequences of leds into a matrix like structure.
Enabling cool visuals via leds. I'll be providing a write up for doing such.


`

function projects()
{

  $("#quote").fadeOut(function()
  {
    $(this).text("Project(s)").fadeIn(200);
  });

  $("#bio").fadeOut(function()
  {
    // document.getElementById('bio').innerHTML.fadeIn(200) = 'Aye Lit';
       //contain.innerHTML = "TEST";
       document.getElementById("bio").innerHTML = input[0] + input[1] + input[2] + input[3] + input[4];//"Github Project(s)<br>";
       //document.getElementById("bio").innerHTML += "<img id = 'projectpic' src='m/img/projectpictures/image" + imgvalue +  ".png'>";
       $("#bio").fadeIn(200);
  });
  $(".attributes").fadeOut();
  $(".socialbar").fadeOut();

}
