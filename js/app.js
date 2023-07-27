/**
 * JavaScript for Portfolio
 * Author: Irina Hallinan
 * **/

function showGallery(id) {


  if ( id && document ) {

    // Highlight selected navigation

    var navs = document.getElementsByClassName('nav');
    //console.log(navs);

    // Remove active class from all navs except for selected nav
    if ( navs ) {

      for ( var i = 0; i < navs.length; i++ ) {

          var nav = navs[i];
          if ( nav && nav.classList ) {

            if ( nav.id === id ) {
            // Active nav
              nav.classList.remove('text-gray-500');
              nav.classList.add('text-gray-800');
              nav.classList.remove('cursor-pointer');
            } else {
              // Inactive nav
              nav.classList.remove('text-gray-800');
              nav.classList.add('text-gray-500');
              nav.classList.add('hover:text-gray-800');
              nav.classList.add('cursor-pointer');
            }
          }
      }
    }

    // Show selected gallery

    // Hide all galleries
    var galleries = document.getElementsByClassName('gallery');
    if ( galleries ) {
      for (var i = 0; i < galleries.length; i++ ) {
        var gal = galleries[i];
        if ( gal && gal.classList ) {
          gal.classList.add('hidden');
        }
      }
    }

    // Show selected gallery
    var galleryId = id + '-gallery';
    var gallery = document.getElementById(galleryId);
    if ( gallery && gallery.classList ) {
      gallery.classList.remove('hidden');

      // Scroll to the gallery element
      gallery.scrollIntoView();
    }

  }
}
