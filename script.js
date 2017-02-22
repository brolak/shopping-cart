var $shoppingCart = $(".shopping-cart");
var $cartList = $(".cart-list");
// an array with all of our cart items
var cart = [];

var updateCart = function () {
  // TODO: Write this function. In this function we render the page.
  // Meaning we make sure that all our cart items are displayed in the browser.
  // Remember to empty the "cart div" before you re-add all the item elements.
  $cartList.empty();
  var source = $('#cart-template').html();
  var template = Handlebars.compile(source);
  var newHTML = template({
          cart: cart
        });
  $cartList.append(newHTML);
}


var addItem = function (item) {
  //add items to cart array
  cart.push({
    "name": item.dataset.name,
    "price": item.dataset.price
  })
}

var clearCart = function () {
  //empty the shopping cart
  $cartList.empty()
  cart = [];
}

$('.view-cart').on('click', function () {
  //display shopping cart on click
  $shoppingCart.toggleClass('show');
});

$('.add-to-cart').on('click', function () {
  //get the "item" object from the page
  newItem = this.closest(".item")
  addItem(newItem);
  updateCart();
});

$('.clear-cart').on('click', function () {
  clearCart();
});

// update the cart as soon as the page loads!
updateCart();
