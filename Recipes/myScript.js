function searcher() {
  var input, filter, x, i, txtValue;
  input = document.getElementById('searchbar').value;
  filter = input.toLowerCase();
  x = document.getElementsByClassName('recipes');

  // Loop through all elements with the class 'recipes' and hide those that don't match the search query
  for (i = 0; i < x.length; i++) {
    txtValue = x[i].textContent || x[i].innerText;
    if (!txtValue.toLowerCase().includes(filter)) {
      x[i].style.display = "none";
    } else {
      x[i].style.display = "list-item";
    }
  }
}


filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("recipes");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}


