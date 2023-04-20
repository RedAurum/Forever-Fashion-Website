/*

["Forever Fashion Project" for Edinburgh College, 2023]

- Project:              Forever Fashion
- Members of the team:  Laura Balestrieri, Amanda Gonzalez-Santana, Morgan Waugh
- index.html JS

*/

/* assigning a constant to header image in index */
const header_image = document.querySelectorAll('.header-image')

/* function to fade in images */
function fade_in_image() {

  /* iterating for each header image in the page to make the effect */
  header_image.forEach((header_image, index) => {

    /* internal function that waits 500 ms before applying the class visible */
    setTimeout(() => {
      header_image.classList.add('visible')
    }, index * 500)

  })

}

fade_in_image();