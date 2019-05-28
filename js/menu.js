var homeIn;
homeIn =
  `
<br />
| W E L C O M E |
<br /><br /><br />

`;

var biograph;
biograph =
  `
Hello! My name is Logan! <br />
==========================
<br />
<br />

My parents, Owen and Velma Campbell, adopted me when I was an infant. My ethnicity is Jamaican and Japanese.
I was born in Texas and raised in Arkansas.
<br /><br />

Any activity that has to do with crafting, designing, or creating intrigues me!
I believe that art can be in many forms whether it is sensory or constructive.
I enjoy helping people and making them smile.
<br /><br />

In the past, I've been using creative tools to generate images, audio, and videos. Digital editing was something I took upon myself to learn.
Learning several programs and tools I've become familiar with how designing/creative programs work.
I've also been a teacher in the performing arts, instructing children and teens.
<br /><br />


Currently, I'm a computer science and engineering student at the University of Arkansas.
Where I'm studying computer hardware and software for the next generation of computing.
<br /><br />


I want to pursue my studies and apply my knowledge to the computing world we live in today!
<br /><br />



`;

var contactIn;
contactIn =
  `<br>
student email : lc002@email.uark.edu
<br />
<br />
personal email : loganmcampbell@hotmail.com
<br>
`;

var quotation;

function about() {
  $(".socialbar").fadeOut();
  $(".attributes").fadeOut();
  $("#quote").fadeOut(function() {
    $(this).text("About Me").fadeIn(200);
  });

  $("#bio").fadeOut(function() {
    // document.getElementById('bio').innerHTML.fadeIn(200) = 'Aye Lit';
    document.getElementById("bio").innerHTML = biograph;
    $("#bio").fadeIn(200);
  });

}

function home() {
  $("#quote").fadeOut(function() {
    $(this).text("\"Learning is not a race. It's a walk into discovery...\"").fadeIn(200);
  });

  $("#bio").fadeOut(function() {
    // document.getElementById('bio').innerHTML.fadeIn(200) = 'Aye Lit';
    document.getElementById("bio").innerHTML = homeIn;
    $("#bio").fadeIn(200);
    // $(".attributes").fadeIn(200);
    $(".socialbar").fadeIn(200);
    //$(".socialbar").fadeOut(200);
  });

  $(".attributes").fadeOut(function() {
    $(".attributes").fadeIn(200);
  });

}

function contact() {
  $(".socialbar").fadeOut(100);
  $(".attributes").fadeOut();
  $("#quote").fadeOut(function() {
    $(this).text("Contacts").fadeIn(200);
  });

  $("#bio").fadeOut(function() {
    // document.getElementById('bio').innerHTML.fadeIn(200) = 'Aye Lit';
    document.getElementById("bio").innerHTML = contactIn;
    $("#bio").fadeIn(200);
    $(".socialbar").fadeIn(200);
  });
}
