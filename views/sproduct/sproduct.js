$.ajax({
    url: 'example.json',
    method: 'GET',
    success: function (data) {
        // Update product information
        $('#productTitle').text(data.title);
        $('#productPrice').text('$' + data.price);
        $('#productDescription').text(data.description);

        // Update carousel images
        var carouselItems = '';
        for (var i = 0; i < data.images.length; i++) {
            var activeClass = (i === 0) ? 'active' : '';
            carouselItems += '<div class="carousel-item ' + activeClass + '">';
            carouselItems += '<img src="' + data.images[i] + '" class="img-fluid" alt="Product Photo ' + (i + 1) + '">';
            carouselItems += '</div>';
        }
        $('#productCarousel .carousel-inner').html(carouselItems);
    },
    error: function () {
        console.log('Error occurred while fetching data.');
    }
});
