var $shoppingCart = $(".shopping-cart");
var $cartList = $(".cart-list");
// an array with all of our cart items
var cart = [];

/*
You should not have to touch the html file at all. 
If you find you want to make changes to it then stop, think and discuss what you are doing with your partner.
Add a remove button beside each item in the cart and remove that item from the cart when it's clicked. 
Update the total accordingly.
Don't allow "duplications" in the cart, but instead tally the number of each item like this:
*/
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
  totalPrice = 0;
  for(i=0;i<cart.length;i++){
    totalPrice+=Number(cart[i].price*cart[i].tally);
  }
  $(".total").html(totalPrice);
}


var addItem = function (item) {
  //add items to cart array
  for(i=0;i<cart.length;i++){
    if(cart[i].name === item.dataset.name){
      cart[i].tally += 1;
      cart[i].totalPrice = cart[i].price*cart[i].tally;
      return true;
    }

  }
  cart.push({
    "name": item.dataset.name,
    "price": Number(item.dataset.price),
    "tally": 1,
    "totalPrice": Number(item.dataset.price)
  })
}

var clearCart = function () {
  //empty the shopping cart
  $cartList.empty()
  cart = [];
  total=0;
  $(".total").html(total);
}

$('.view-cart').on('click', function () {
  //display shopping cart on click
  $shoppingCart.toggleClass('show');
});

$('.item-page').on('click', '.add-to-cart', function () {
  //get the "item" object from the page
  $shoppingCart.toggleClass('show',true);
  newItem = this.closest(".item")
  addItem(newItem);
  updateCart();
});

$('.clear-cart').on('click', function () {
  clearCart();
});

// update the cart as soon as the page loads!
updateCart();
