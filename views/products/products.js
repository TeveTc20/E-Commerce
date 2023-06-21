$(document).ready(function() {
    // Load products from JSON file
    $.getJSON('products.json', function(data) {
      var products = data.products;
      Cards(products);
  
      // Filter products on checkbox change
      $('.filter-group input[type="checkbox"]').change(function() {
        var selectedFilters = getSelectedFilters();
        var filteredProducts = filterProducts(products, selectedFilters);
        Cards(filteredProducts);
      });
    });
  
    // Function to generate product cards
    function Cards(products) {
      var productCardsContainer = $('#productCardsContainer');
      productCardsContainer.empty();
  
      var productCardTemplate = Handlebars.compile($('#productCardTemplate').html());
      var productCardsHtml = productCardTemplate({ products: products });
      productCardsContainer.append(productCardsHtml);
    }
  
    // Function to get the selected filters
    function getSelectedFilters() {
      var selectedFilters = {};
  
      $('.filter-group').each(function() {
        var filterGroup = $(this);
        var filterGroupName = filterGroup.find('h6').text();
        var filterValues = [];
  
        filterGroup.find('input[type="checkbox"]:checked').each(function() {
          filterValues.push($(this).next('label').text());
        });
  
        selectedFilters[filterGroupName] = filterValues;
      });
  
      return selectedFilters;
    }
  
    // Function to filter the products based on selected filters
    function filterProducts(products, selectedFilters) {
      return products.filter(function(product) {
        return Object.keys(selectedFilters).every(function(filterGroup) {
          var filterValues = selectedFilters[filterGroup];
          var productValue = product[filterGroup];
  
          return filterValues.length === 0 || filterValues.includes(productValue);
        });
      });
    }
  });
  