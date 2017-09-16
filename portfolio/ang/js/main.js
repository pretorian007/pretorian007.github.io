var app = angular.module('app', []);

var random = {
    name:   function(){
        return chance.pickone([
             "Ak-47",
             "Aug",
             "L85A1",
             "Some"   
            ]);
    },
    material: function(){
        return chance.pickone([
              "Steel",
              "Silumin",
              "Plastic"  
            ])
    },
    price:  function () {
        return chance.floating({
            min:100,
            max:500,
            fixed: chance.natural({max:0})
        });
    },
    sentence: function () {
        return chance.sentence({
            words: chance.natural({min:10, max:30})
        });
    },
    image: function(){
        return "img/w-" + chance.natural({min:1,max:3})+".jpg"
    },
    boolean: function(){
        return chance.bool();
    },
    weight: function(){
        return chance.floating({
            min:   2,
            max:   10,
            fixed: chance.natural({ max: 2 })
        });
    },
        stars: function () {
        return chance.natural({ min: 1, max: 5 });
    },
    email: function () {
        return chance.email();
    }

};//end var rand



app.controller('StoreController', function ($scope, $timeout) {
    this.products = (new Array(6)).fill()
        .map(v=>{
            return{
                name:           random.name(),
                material:       random.material(),
                price:          random.price(),
                description:    random.sentence(),
                weight:         random.weight(), 
                canPurchase:    random.boolean(),
                image:          random.image(),
                soldOut:        random.boolean(),
                images:         [random.image(), random.image(), random.image()],
                reviews:     [{
                   stars:  random.stars(),
                   body:   random.sentence(),
                   author: random.email()
               }]
            }

        });//map

});





app.controller('GalleryController', function () {
   this.current = 0;

   this.setCurrent = function(index){
       this.current = index || 0;
   };
});





app.controller('SortController', function($scope) {
  $scope.sortMax    = 'max'; // значение сортировки по умолчанию
  $scope.sortMin  = "min";  // обратная сортривка


  
});



    app.controller('ReviewController', function () {
       this.review = {};

       this.addReview = function(product){
           this.review.date = new Date()
           product.reviews.push(this.review);
           this.review = {};
       };
    });


app.directive('productTitle', function () {
    return {
        restrict:    'E',
        templateUrl: 'product-title.html'
    };
});


app.directive('productGallery', function () {
    return {
        restrict:    'E',
        templateUrl: 'product-gallery.html'
    };
});
app.directive('productPanels', function () {
  return {
    restrict:    'E',
    templateUrl: 'product-panels.html',
    controller:function () {
      this.tab = 1;

      this.selectTab = function (tab) {
       this.tab = tab;
     };

     this.isSelected = function (tab) {
       return this.tab == tab;
     };

   },
   controllerAs:'panel'
 };
});







(
function () {
    // body...

var sortCol = document.querySelector(".sort-col");
var sortRow = document.querySelector(".sort-row");
var itemGrid = document.querySelector(".items-grid");
var item = document.querySelector(".item")

sortCol.onclick = function(){
var btnBuy = document.querySelector(".btn-buy"),
    item = document.querySelector(".item"),
    nav = document.querySelector(".nav "),
    itemInfo = document.querySelector(".item-info"),
    liTabs = document.querySelectorAll(" li")

    
    liTabs.forEach(function (el) {
    el.style.marginRight = "3px"
    })

        itemGrid.className = "items-list";
        item.style.display = "inline-flex" 
        item.style.flexDirection ="row"      
        // item.style.flexDirection = "row";
        // btnBuy.style.margin = "auto 0 10px 0"
        // nav.style.display = "flex"
        // itemInfo.style.marginLeft = "10px"
    
}
 sortRow.onclick = function(){
    var item = document.querySelector(".item")
        itemGrid.className = "items-grid"
        item.style.flexDirection = "column";

    
};

})()