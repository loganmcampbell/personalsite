//fadeOut
//change src
//fadeIn
var counter = 0;
var profile =
[
  "m/profile/take1.jpg",
  "m/profile/take2.jpg"
];

function rotater()
{
  $("#picture").fadeTo(2000,0.08, function() {
        $("#picture").attr("src",profile[counter]);
    }).fadeTo(500,1);
    counter++;

    if (counter >= profile.length)
    {
      counter = 0;
    }
    console.log(counter);
    return false;

  }

 setInterval(function(){ rotater(); }, 5000);
