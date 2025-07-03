<!DOCTYPE html>
<html>
  <head>
    <title>buttons</title>
  </head>
  <body>
    <button onclick="console.log(`show quantity: ${items}`)">Show quantity</button>
    <button onclick=" items= items+1; console.log(`show quantity ${items}`)">Add to cart</button>
    <button onclick="items= items+2; console.log(`show quantity ${items}`)">+2</button>
    <button onclick="items= items+3; console.log(`show quantity ${items}`)">+3</button>
    <button onclick="items=0; console.log('cart was reset.') ;console.log(`show quantity ${items}`)">reset cart</button>
    <script>
      var items=0;
    </script>
  </body>
</html>
