var clicks = 0;

var getClick = localStorage.getItem('admin', clicks);
let num = Number(getClick);
if (getClick >= 1) {
  function onClick() {
   
    
    
    num += 1;
    document.getElementById("clicks").innerHTML = num;
    
    localStorage.setItem('admin', num);
    
    
  };
}

else {
  function onClick() {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
    localStorage.setItem('admin', clicks);
  };
}



// var clicks = 0;

// function onClick() {
//     localStorage.setItem('admin', clicks);
//     var click = localStorage.getItem("admin");
//     click += 1;
//     document.getElementById("clicks").innerHTML = click;
//     localStorage.setItem('admin', click);

// }
