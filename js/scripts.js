

alert("Looking for an amazing employee? You've come to the right place!");

console.log ("hello world")

/*Menu toggle*/
function menuToggle(x) {
    var x = document.getElementById('myNavtoggle');
    if (x.className === 'navtoggle') {
      x.className += ' responsive';
    } else {
      x.className = 'navtoggle';
    }
  }