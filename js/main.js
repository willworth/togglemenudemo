const menu = document.querySelector('.menu');
    
 //  hamburger animation //   
    
    // Look for .hamburger
    var hamburger = document.querySelector(".hamburger");
    // On click
    hamburger.addEventListener("click", function() {
      // Toggle class "is-active"
      hamburger.classList.toggle("is-active");
      menu.classList.toggle("is-open");
      // Do something else, like open/close menu
      
    });

    







//  //  hamburger animation //   
    
//     // Look for .hamburger
//     var hamburger = document.querySelector(".hamburger");
//     // On click
//     hamburger.addEventListener("click", function() {
//       // Toggle class "is-active"
//       hamburger.classList.toggle("is-active");
//       // Do something else, like open/close menu
//     });