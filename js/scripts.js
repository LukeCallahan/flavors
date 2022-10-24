function icecreamList () {
  const icecream = ["Chocolate", "Vanilla", "Strawberry", "Mint Chocolate Chip", "Peanut Butter"];
  let body = document.querySelector('body');
  let ul = document.createElement('ul')

  // document.createElement('ul');
  body.append(ul);

  icecream.forEach(function(flavor) {
    const li = document.createElement('li');
    li.append(flavor);
    ul.append(li);
  })
}

window.addEventListener('load', function() {
  icecreamList();
})