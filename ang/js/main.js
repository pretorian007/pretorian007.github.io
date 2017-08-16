


var random = {
    name:   function(){
        return chance.pickone([
             "Ak-47",
             "Aug",
             "SCAR",
             "Some"   
            ]);
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
    }

};//end var rand







var app = angular.module('app', []);

app.controller('StoreController', function ($scope, $timeout) {
    this.products = (new Array(6)).fill()
        .map(v=>{
            return{
                name:           random.name(),
                price:          random.price(),
                description:    random.sentence(), 
                canPurchase:    random.boolean(),
                image:          random.image(),
                soldOut:        random.boolean(),
                images:         [random.image(), random.image(), random.image()]
            }

        });//map
});



app.controller('PanelController', function () {
    var t = 1;

   this.selectTab = function (tab) {
       t = tab;
   };

   this.isSelected = function (tab) {
       return t == tab;
   };

});


app.controller('GalleryController', function () {
   this.current = 0;

   this.setCurrent = function(index){
       this.current = index || 0;
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
        item.style.flexDirection = "row";
        btnBuy.style.margin = "auto 0 10px 0"
        nav.style.display = "flex"
        itemInfo.style.marginLeft = "10px"
    
}
 sortRow.onclick = function(){
    var item = document.querySelector(".item")
        itemGrid.className = "items-grid"
        item.style.flexDirection = "column";

    
};

})()