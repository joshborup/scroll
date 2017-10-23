# scroll-animation
A plugin meant to apply animations to target elements when scrolled into view

This was created due to my need for animations on scroll for small website projects, feel free to use whatever you need, hope this helps!

# Getting Started
This is a fairly straight forward extension and can be applied to almost any project that needs animations on scroll.

This has been designed to not need any dependencies, you simply need to add the javascript file to the footer 

    <script src="dist/scroll-animation.js"></script>

Every element that you would like to animate must have a class of 'animation-element'.

**'animation-element'** - this is what tells the js which element to target

      .animation-element {
      
            opacity: 0;
      
      }
      
This will set the opacity for all target elements to 0 which helps look smoother as it scrolls in when opacity 1 is called in the keyframe transitions.

After adding this class you have a few different animation options for when your element scrolls into view.  All option are classes that can be added directly to your html element after the 'animation-element' is added and are as follows.

**'slide-up'** - the element will slide into the screen from the bottom

    .in-view-up {
    
        animation: slideup .5s  forwards 1;
        
           {

    @keyframes slideup {
      0% {
      
        transform: translate(0px, 100px);
        
         }
         
     100% {
     
        opacity: 1;
        transform: translate(0px, 0px);
        
     } 
    }

**'slide-left'** - the element will slide into the screen from the left

      .in-view-left {
          
          animation: slideleft .5s  forwards 1;
          
          }

      @keyframes slideleft {
          0% {
              transform: translate(-100px, 0px);      
          }
           100% {
              opacity: 1;
              transform: translate(0px, 0px);   
          } 
      }

**'slide-right'** - the element will slide into the screen from the right

      .in-view-right {

          animation: slideright .5s forwards 1;
      }

      @keyframes slideright {
          0% {
              transform: translate(100px, 0px);      
          }
           100% {
              opacity: 1;
              transform: translate(0px, 0px);   
          } 
      }
      
      
 # Usage examples
 
 **slides up**
 
     <img src="path/to/img' class="animation-element slide-up">

 **slides left**

     <img src="path/to/img' class="animation-element slide-left">
     
  **slides right**
  
     <img src="path/to/img' class="animation-element slide-right">
     
### thats it! enjoy, I will be adding more animations soon 
