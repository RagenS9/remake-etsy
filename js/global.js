// Declare variables that hold share data
var product = [];

document.querySelector('#search').addEventListener('keypress', function(e){
    // console.log(e);
    if(e.key === 'Enter') {
        getProduct();
    }
});

document.querySelector('#searchButton').addEventListener('click', getProduct);

// Start off the chain of AJAX requests
getProduct();

// First AJAX request that gets product
function getProduct() {
    var searchTerm = document.querySelector('#search').value; //.value is what we will always use for getting user input out of a field.

    // only search if the search text box is not empty
    if (searchTerm !== '') {

        // Fetch the raw user JSON string data. REPLACED THIS WITH THE THING COLLIN HAD IN HOMEWORK. NOT SURE WHAT THE PLUS SIGN THINGIES ARE MEANT TO BE FOR OR ARE SUPPOSED TO DO SINCE THEY DON'T SEEM TO BE A PART OF THE URL.
        fetch('https://thinksaydo.com/tiyproxy.php?https://openapi.etsy.com/v2/listings/active?api_key=h9oq2yf3twf4ziejn10b717i&keywords=' + encodeURIComponent(searchTerm) + '&includes=Images,Shop')

        // Parse the raw user JSON string data
        .then(response => response.json())

        // Do something with the parsed data, now an array we can work with
        //QQRAGEN QQCOLLIN: WHAT IS THIS ARROW THINGIE? it's a shortcut for a function. don't need to use the word function. 
        .then(data => {

            // Stash the data into the shared product variable
            product = data.results;
            createProductCard(product);
        });
    }
}

// A function to render a single user onto the page, it takes in a user object and a comments array
function createProductCard(items) {
    document.querySelector('#cards').innerHTML='';

    // var itemHTML = items.forEach(function(item) {
        // console.log(items)
    items.forEach(function(item) {
        console.log(item);
    var card = `<div class="col-sm-4 col-md-3 cardCol">
                    <div class="card">
                        <img src="${item.Images[0].url_170x135}" alt="${item.title}" />
                        <h6 class="card-caption">${item.title.slice(0, 22)}...</h6>
                        <div class="row">
                            <div class="col-sm-6">
                                <h6 class="sellerName">${item.Shop.shop_name}</h6>
                            </div>
                            <div class="col-sm-6">
                                <h6 class="pricing text-right">${item.price}</h6>
                            </div>
                        </div>
                    </div>
                </div>`;

    document.querySelector('#cards').innerHTML += card;
    });
}



//my original setup from day 2, which worked:

//this is the HTML
// <!--card 1-->
// <div class="col-sm-3 cardCol">
//     <div class="card">
//         <img src="http://unsplash.it/400/300?image=500" alt="Image" />
//         <h6 class="card-caption">Product Title</h6>
//         <div class="row">
//             <div class="col-sm-6">
//                 <h6 class="sellerName">Seller Name</h6>
//             </div>
//             <div class="col-sm-6">
//                 <h6 class="pricing text-right">$BB</h6>
//             </div>
//         </div>
//     </div>
// </div>
// <!--end card-->

// calls the function. Are these . . . objects? Object literal? I can't remember what you called this.
// createCard({
//     src: 'http://unsplash.it/400/300?image=520',
//     caption: 'New York, New York, A Wonderful Town',
//     sellerName: 'Hamilton',
//     pricing: '$42'
// }); 
// createCard({
//     src: 'http://unsplash.it/400/300?image=550',
//     caption: 'I Want Adventure in the Great Wide Somewhere',
//     sellerName: 'Eliza',
//     pricing: '$7'
// }); 
// createCard({
//     src: 'http://unsplash.it/400/300?image=700',
//     caption: 'Snakes on a plane.',
//     sellerName: "Angelica",
//     pricing: '$79'
// }); 
// createCard({
//     src: 'http://unsplash.it/400/300?image=760',
//     caption: 'What Will My Reflection Show?',
//     sellerName: 'Peggy',
//     pricing: '$23'
// }); 

// Okay, this is a funny one. I purposefully made the captions long to try to get one to wrap, and this is the only one that did that. I can see that on the real site, they cut it off so that each one sticks to just one line of text. I'm not sure how to do that. Probably something to do with setting a specific number of characters or something to do with the div width?, adding the elipses, and trimming? Cutting? Splicing? the rest? Or maybe there's a "no word wrap" function somewhere? Bootstrap doesn't have a search, and I don't know what exactly I'm looking for, so no search function (seriously, dudes, you're a web site created by developers, and you don't have a search box??) And if no bootstrap, you'd probably have to do a function for that, I think, and run it somewhere here in the JS. But . . . I don't know where to call it or how that would happen or what to write. 
// createCard({
//     src: 'http://unsplash.it/400/300?image=600',
//     caption: 'Living in the Trees, Yeah, That Where I want to be',
//     sellerName: 'Washington',
//     pricing: '$42'
// }); 
// createCard({
//     src: 'http://unsplash.it/400/300?image=650',
//     caption: 'The Long and Winding Road',
//     sellerName: 'John Lawrence',
//     pricing: '$7'
// }); 
// createCard({
//     src: 'http://unsplash.it/400/300?image=800',
//     caption: 'People Everywhere Just Want to be Free',
//     sellerName: "Herculese Mulligan",
//     pricing: '$79'
// }); 
// createCard({
//     src: 'http://unsplash.it/400/300?image=860',
//     caption: 'Like a Bridge Over Troubled Waters',
//     sellerName: 'Lafayette',
//     pricing: '$23'
// }); 
// createCard({
//     src: 'http://unsplash.it/400/300?image=900',
//     caption: 'Sunrise, Sunset, Swiftly Fly the Years',
//     sellerName: 'Jefferson',
//     pricing: '$42'
// }); 
// createCard({
//     src: 'http://unsplash.it/400/300?image=950',
//     caption: 'Purple Rain, Purple Rain',
//     sellerName: 'Arron Burr',
//     pricing: '$7'
// }); 
// createCard({
//     src: 'http://unsplash.it/400/300?image=730',
//     caption: 'Dreaming Trees',
//     sellerName: "Phillip",
//     pricing: '$79'
// }); 
// createCard({
//     src: 'http://unsplash.it/400/300?image=825',
//     caption: 'Stars in Their Multitude, Scarce to be Counted',
//     sellerName: 'General Wheee',
//     pricing: '$23'
// }); 

//code that Collin put in to show me how you could loop this over and over again. Lots of Peggys.
// for(var i = 0; i < 50; i++) {
//     createCard({
//         src: 'http://unsplash.it/400/300?image=800',
//         caption: 'Unknown Image',
//         sellerName: 'Peggy',
//         pricing: '$23'
//     }); 
// }

//Here, we build the function. I don't really know what it all means, I just copied it in from what you did in class. I know that we're using those $-sign thingies to refer to the thingies from above this function. 
// function createCard(productCard) {
//     var card = `<div class="col-sm-3 cardCol">
//     <div class="card">
//         <img src="${productCard.src}" alt="Image" />
//         <h6 class="card-caption">${productCard.caption}</h6>
//         <div class="row">
//             <div class="col-sm-6">
//                 <h6 class="sellerName">${productCard.sellerName}</h6>
//             </div>
//             <div class="col-sm-6">
//                 <h6 class="pricing text-right">${productCard.pricing}</h6>
//             </div>
//         </div>
//     </div>
// </div>`;

//And this next line tells JS to go get the HTML and, where I have the cards id, to put in the words and setup we have here to make a card. I think. Did I say that right? 
// document.querySelector('#cards').innerHTML += card;
// }
