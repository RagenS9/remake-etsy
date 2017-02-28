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

// calls the function
createCard({
    src: 'http://unsplash.it/400/300?image=500',
    caption: 'Buildings',
    sellerName: 'Hamilton',
    pricing: '$42'
}); 
createCard({
    src: 'http://unsplash.it/400/300?image=600',
    caption: 'Something',
    sellerName: 'Eliza',
    pricing: '$7'
}); 
createCard({
    src: 'http://unsplash.it/400/300?image=700',
    caption: 'Snakes on a plane.',
    sellerName: "Angelica",
    pricing: '$79'
}); 
createCard({
    src: 'http://unsplash.it/400/300?image=800',
    caption: 'Unknown Image',
    sellerName: 'Peggy',
    pricing: '$23'
}); 

// for(var i = 0; i < 50; i++) {
//     createCard({
//         src: 'http://unsplash.it/400/300?image=800',
//         caption: 'Unknown Image',
//         sellerName: 'Peggy',
//         pricing: '$23'
//     }); 
// }


function createCard(image) {
    var card = `<div class="col-sm-3 cardCol">
    <div class="card">
        <img src="${image.src}" alt="Image" />
        <h6 class="card-caption">${image.caption}</h6>
        <div class="row">
            <div class="col-sm-6">
                <h6 class="sellerName">${image.sellerName}</h6>
            </div>
            <div class="col-sm-6">
                <h6 class="pricing text-right">${image.pricing}</h6>
            </div>
        </div>
    </div>
</div>`;

document.querySelector('#cards').innerHTML += card;
}