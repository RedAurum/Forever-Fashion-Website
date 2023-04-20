/*

["Forever Fashion Project" for Edinburgh College, 2023]

- Project:              Forever Fashion
- Members of the team:  Laura Balestrieri, Amanda Gonzalez-Santana, Morgan Waugh
- Shop.html JS

*/

// JS for Filtering the elements in the shop.html page

const filter_links = document.querySelectorAll('#shop-filters a')

const album = document.querySelectorAll('[data-category]')

const rows = document.querySelectorAll('.album .row')

const max_elements_in_row = 3

// Getting the current grid height of the page
const grid_height = document.querySelector('.album').offsetHeight;

filter_links.forEach(link => {

  link.addEventListener('click', e => {
    e.preventDefault() // Prevent reload of page on click of filter link
    const category = e.target.innerText.toLowerCase()
    const filtered_items = get_filtered_items(category)

    // Hiding all items in rows that are not the ones filtered
    rows.forEach(row => {
      row.innerHTML = ''
    })

    // Add filtered items to rows with max 3 elements
    let current_row = 0;

    filtered_items.forEach(item => {

      if (rows[current_row].children.length < max_elements_in_row) {
        rows[current_row].appendChild(item) // Adding element to current row
      } 
      
      else {
        current_row++;  // Adding element to next row if more than 3 in current row
        rows[current_row].appendChild(item)
      }
    })


    // Mediaquery when screen size is smaller than required

    if (!window.matchMedia("(max-width: 576px)")){

     // Set grid height to current height
      document.querySelector('.album').style.height = grid_height + 'px'

    }


  })
})

// Creating a  list of elements filtered based on the category
function get_filtered_items(category) {

  const filtered_items = [] // Create empty list

  album.forEach(item => { // For every item in album check if equal to "all" data or category
    if (item.dataset.category === category || category === 'all') {
      filtered_items.push(item) // Insert item in the list to show it

    }
  })
  
  return filtered_items
}

