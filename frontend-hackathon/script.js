let searchForm = document.querySelector('.search-form');

document.querySelector('#search-button').onclick = () => {
  searchForm.classList.toggle('active');
  shoppingCart.classList.remove('active');
};

function myFunction(){ // fungsi live filter
  let test = document.getElementsByClassName("box-container")
  let container = test[0].children
  let filter = document.getElementById("search-box").value.toUpperCase()
          
  for (let i = 0; i < container.length; i++) {
    const itemList = container[i].getElementsByTagName("h3")

    // console.log(itemList[0].innerHTML)
    let itemName = itemList[0].innerHTML
    if (itemName.toUpperCase().indexOf(filter) > -1) {
      container[i].style.display = ""
    } else {
      container[i].style.display = "none"
    }

  }
} 



// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }