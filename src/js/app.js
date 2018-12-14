
let ViewModel = function() {
    this.toggleSidebar = function() {
      $('body').toggleClass('sidebar--hidden');
      $('.home__content').toggleClass('home__content--shift');
      $('.home__content__foreground').toggleClass('home__content__foreground--dark');
    }
  }
  
  ko.applyBindings(new ViewModel());