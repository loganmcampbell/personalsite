var edu=

`
I've been a student for a while. I'll be very honest, I'm not the greatest student, but I do enjoy learning new material.
I've tried my best to understand the material that I've learned in my undergraduate career. One of the best habits that I've acquired in my undergraduate career
was to create a base for all of my courses I've taken. From notes, assignments, study guides, quizzes, and tests I've generated something that a lot of collegues of mine used.
<br><br/>

I want to carry that information that I obtained from my undergraduate career and keep it available to anyone. I'll start with basics and work my way up.
<br><br/>
Disclaimer: *somethings might be wrong*
<br><br/>

<a> Art         </a> ||
<a> Engineering </a> ||
<a> Mathematics </a> ||
<a> Programming </a> ||
<a> Readings    </a> ||
<a> Science     </a> ||
<a> Statistics  </a> ||
<a> Studies     </a> ||
<a> Writings    </a> ||
<a> Life        </a>





`;


function education()
{

  $("#quote").fadeOut(function()
  {
    $(this).text("Education").fadeIn(200);
  });




  $("#bio").fadeOut(function()
  {
       document.getElementById("bio").innerHTML = edu;


       $("#bio").fadeIn(200);
  });
  $(".attributes").fadeOut();
  $(".socialbar").fadeOut();

}
