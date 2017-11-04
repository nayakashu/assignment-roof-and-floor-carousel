$(document).ready(function(){
    // Activate Carousel
    $("#roofAndFloorCarousel").carousel({
        interval: 1500,
        pause: "hover",
        wrap: true
    });
    
    // Enable Carousel Indicators
    $(".item1").click(function(){
        $("#roofAndFloorCarousel").carousel(0);
    });
    $(".item2").click(function(){
        $("#roofAndFloorCarousel").carousel(1);
    });
    $(".item3").click(function(){
        $("#roofAndFloorCarousel").carousel(2);
    });
    $(".item4").click(function(){
        $("#roofAndFloorCarousel").carousel(3);
    });
    $(".item5").click(function(){
        $("#roofAndFloorCarousel").carousel(4);
    });
    $(".item6").click(function(){
        $("#roofAndFloorCarousel").carousel(5);
    });
    $(".item7").click(function(){
        $("#roofAndFloorCarousel").carousel(6);
    });
    $(".item8").click(function(){
        $("#roofAndFloorCarousel").carousel(7);
    });
    
    // Enable Carousel Controls
    $(".left").click(function(){
        $("#roofAndFloorCarousel").carousel("prev");
    });
    $(".right").click(function(){
        $("#roofAndFloorCarousel").carousel("next");
    });
});