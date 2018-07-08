/***********************************************************************
* @author Steve Lucas
* @version 6/24/2018
* Scripts for portfolio website
***********************************************************************/
/***********************************************************************
* Expands a dropdown menu
* Called by navbar button "drop-button" in tablet and mobile navbars
* Referenced W3's 'How To' guides and their API.
***********************************************************************/
function openDropdown() {
    document.getElementById("eduDropdown").classList.toggle("show");
}

function expandBackground() {
    document.getElementById("background-text").class.toggle("expand");
}

function expandStrenghts() {
    document.getElementById("strengths-text").classList.toggle("expand");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.drop-button')) {
      //points to the element with the matching id in the HTML file
    var eduDropdown = document.getElementById("eduDropdown");
      if (eduDropdown.classList.contains('show')) {
        eduDropdown.classList.remove('show');
      }
  }
}
