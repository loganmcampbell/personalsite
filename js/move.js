var homeIn;
homeIn =
`
<br />
| W E L C O M E |
<br /><br /><br />
student // designer // artist // dancer
<br />
`;

var biograph;
biograph =
`
My parents, Owen and Velma Campbell, adopted me when I was an infant. My ethnicity is Jamaican and Japanese.
I was born in Dallas, Texas and raised in Berryville, Arkansas. I have 12 siblings and I'm the youngest in the family.
<br />
<br />
As for now, I'm studying computer science to specialize in computer hardware and software for the next generation of computing.
I'm also working at a restaurant for about 4 years, learning customer service, prioritization, time-management, and multitasking.
<br />
<br/>
My hobbies consists of digital editing, designing, programming, experimenting, dancing, social media, gaming and the internet.



`;

var contactIn;
contactIn =
`<br>
student email : lc002@email.uark.edu
<br>
`;

var quotation;
function about()
{
  $(".socialbar").fadeOut();

  $("#quote").fadeOut(function()
  {
    $(this).text("About Me").fadeIn(200);
  });

  $("#bio").fadeOut(function()
{
  // document.getElementById('bio').innerHTML.fadeIn(200) = 'Aye Lit';
     document.getElementById("bio").innerHTML = biograph;
     $("#bio").fadeIn(200);
});

}

function home()
{
  $("#quote").fadeOut(function()
  {
    $(this).text("\"Learning is not a race. It's a walk into discovery...\"").fadeIn(200);
  });

  $("#bio").fadeOut(function()
{
  // document.getElementById('bio').innerHTML.fadeIn(200) = 'Aye Lit';
     document.getElementById("bio").innerHTML = homeIn;
     $("#bio").fadeIn(200);
     $(".socialbar").fadeIn(200);
});

}

function contact()
{
  $(".socialbar").fadeOut(100);

  $("#quote").fadeOut(function()
  {
    $(this).text("Contacts").fadeIn(200);
  });

  $("#bio").fadeOut(function()
  {
    // document.getElementById('bio').innerHTML.fadeIn(200) = 'Aye Lit';
       document.getElementById("bio").innerHTML = contactIn;
       $("#bio").fadeIn(200);
       $(".socialbar").fadeIn(200);
  });



}
