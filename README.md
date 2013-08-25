SlideLeaf
=========

A jQuery plugin to create dynamic slideshows on SiteLeaf websites.
Uses [Swipe.js](https://github.com/bradbirdsall/Swipe).

##Installing
###On SiteLeaf
While editing your page o post, create a list and import your images into the post as items on that list.
SiteLeaf will render them as a unordered list in which each list item has an image inside.

###HTML/JS
Import all files using script and style tags on the desired html file and add 

    <script type="text/javascript">
        $('.content').slideLeaf();
    </script>

to the bottom of the desired page's body tag

##Options

###Continuous (default : true)
Tells Swipe.js to display the slideshow as a continous loop, navigation behaves accordingly
    
    $('.content').slideLeaf({continuous: true});

###Show Navigation (default : true)
If true, displays numbers corresponding to the images on the slideshow.
    
    $('.content').slideLeaf({showNavigation: true});