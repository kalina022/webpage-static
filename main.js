function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }


function checkFav() {
    let uncheckedIcon = document.getElementsByClassName('img-product-fav');
    let checkedIcon = document.getElementsByClassName('img-product-checked');
    let selectedElementDisplay = uncheckedIcon.style.display;

    if (selectedElementDisplay !== 'none') {
        checkedIcon.style.display = 'inline';
        uncheckedIcon.style.display = 'none';
    }
}

function uncheckFav() {
    let checkedIcon = document.getElementsByClassName('img-product-checked');
    let uncheckedIcon = document.getElementsByClassName('img-product-fav');
    let selectedElementDisplay = checkedIcon.style.display;

    if (selectedElementDisplay !== 'none') {
        checkedIcon.style.display = 'none';
        uncheckedIcon.style.display = 'inline';
    }
}
