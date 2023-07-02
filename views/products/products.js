$(document).ready(function() {
  $.ajax({
    url: "EPS.json",
    method: 'GET',
    success: function(response) {
      var products = response.products;
      var cardsContainer = $('#productCardsContainer');
      var row;

      products.forEach(function(data, index) {
        if (index % 4 === 0) {
          row = $('<div class="row"></div>');
        }

        var card = $(
          '<div class="col-md-3">' +
            '<div class="card" style="width: 18rem;">' +
              '<img src="' + data.imagePaths[0] + '" class="card-img-top">' +
              '<div class="card-body">' +
                '<h5 class="card-title">' + data.title + '</h5>' +
                '<p class="card-text">Price: $' + data.price + '</p>' +
                '<p class="card-text">' + data.description + '</p>' +
                '<p class="card-text">Category: ' + data.category + '</p>' +
              '</div>' +
            '</div>' +
          '</div>'
        );

        row.append(card);

        if (index % 4 === 3 || index === products.length - 1) {
          cardsContainer.append(row);
        }
      });
    }
  });

  //filters
  $("#home").change(function(){getItemsByFilter()});
  $("#away").change(function(){getItemsByFilter()});
  $("#filter3").change(function(){getItemsByFilter()});
  
  function getItemsByFilter() {
    // Get all checked checkboxes
    let checkedCheckboxes = $('input[type="checkbox"]:checked');
    let Kitype = [];
    //let color = [];

    checkedCheckboxes.each(function() {
        if ($(this).attr('value') === 'kitype')
        Kitype.push($(this).attr('id'));

        // if ($(this).attr('value') === 'color')
        //     color.push($(this).attr('id'));
    });

    $.ajax({

        url: "",// url form server
        method: "get",
        data: { Kitype },
        success: (response) => {

            const { products } = response;// shirts form serever

            $('#productCardsContainer').empty();  // Clear the existing list
            var cardsContainer = $('#productCardsContainer');
      var row;

      products.forEach(function(data, index) {
        if (index % 4 === 0) {
          row = $('<div class="row"></div>');
        }

        var card = $(
          '<div class="col-md-3">' +
            '<div class="card" style="width: 18rem;">' +
              '<img src="' + data.imagePaths[0] + '" class="card-img-top">' +
              '<div class="card-body">' +
                '<h5 class="card-title">' + data.title + '</h5>' +
                '<p class="card-text">Price: $' + data.price + '</p>' +
                '<p class="card-text">' + data.description + '</p>' +
                '<p class="card-text">Category: ' + data.category + '</p>' +
              '</div>' +
            '</div>' +
          '</div>'
        );

        row.append(card);

        if (index % 4 === 3 || index === products.length - 1) {
          cardsContainer.append(row);
        }
      });
    }
        },
        error: (error) => {
            console.log('Error:', error);
        }
    });

    
});
