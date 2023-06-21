$(document).ready(function() {
  // Compile Handlebars template
  var productCardTemplate = Handlebars.compile($('#productCardTemplate').html());

  // Fetch products from JSON file
  fetch('EPS.json')
    .then(response => response.json())
    .then(data => {
      // Generate product cards using the template
      var productCardsHtml = productCardTemplate(data);
      $('#productCardsContainer').html(productCardsHtml);
    })
    .catch(error => {
      console.log('Error occurred while fetching products.', error);
    });
});
