var i = 0;
var txt = "logan \t malachi \t campbell";
var speed = 70; /* The speed/duration of the effect in milliseconds */

function typeWriter()
{

  if (i <= txt.length)
  {
    document.getElementById("named").innerHTML += txt.charAt(i);
    i++;

    setTimeout(typeWriter, speed);
  }


if (i == txt.length)
  {
    document.getElementById('named').innerHTML +=
    '<span class="loader__dot">.</span><span class="loader__dot">.</span><span class="loader__dot">.</span>';
  }
}
