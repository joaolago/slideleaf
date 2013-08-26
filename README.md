SlideLeaf
=========

A jQuery plugin to create dynamic slideshows on SiteLeaf websites.
Uses [Swipe.js](https://github.com/bradbirdsall/Swipe).

##Installing
###On SiteLeaf
While editing your page or post, create a list and import your images into the post as items on that list.
    
    + ![image 1](/assets/img1.png)
    + ![image 2](/assets/img2.png)
    + ![image 3](/assets/img3.png)
    + ![image 4](/assets/img4.png)

SiteLeaf will render them as an unordered list in which each item has an image inside:

    <ul>
        <li> <img src="/assets/img1.png" /> </li>
        <li> <img src="/assets/img1.png" /> </li>
        <li> <img src="/assets/img1.png" /> </li>
        <li> <img src="/assets/img1.png" /> </li>
    </ul>

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