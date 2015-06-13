angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  $scope.isExpanded = false;
  $scope.hasHeaderFabLeft = false;
  $scope.hasHeaderFabRight = false;



  ////////////////////////////////////////
    // Layout Methods
    ////////////////////////////////////////

  $scope.hideNavBar = function() {
      document.getElementsByTagName('ion-nav-bar')[0].style.display = 'none';
  };

  $scope.showNavBar = function() {
      document.getElementsByTagName('ion-nav-bar')[0].style.display = 'block';
  };

  $scope.noHeader = function() {
      var content = document.getElementsByTagName('ion-content');
      for (var i = 0; i < content.length; i++) {
          if (content[i].classList.contains('has-header')) {
              content[i].classList.toggle('has-header');
          }
      }
  };

  $scope.setExpanded = function(bool) {
      $scope.isExpanded = bool;
  };

  $scope.setHeaderFab = function(location) {
      var hasHeaderFabLeft = false;
      var hasHeaderFabRight = false;

      switch (location) {
          case 'left':
              hasHeaderFabLeft = true;
              break;
          case 'right':
              hasHeaderFabRight = true;
              break;
      }

      $scope.hasHeaderFabLeft = hasHeaderFabLeft;
      $scope.hasHeaderFabRight = hasHeaderFabRight;
  };

  $scope.hasHeader = function() {
      var content = document.getElementsByTagName('ion-content');
      for (var i = 0; i < content.length; i++) {
          if (!content[i].classList.contains('has-header')) {
              content[i].classList.toggle('has-header');
          }
      }

  };

  $scope.hideHeader = function() {
      $scope.hideNavBar();
      $scope.noHeader();
  };

  $scope.showHeader = function() {
      $scope.showNavBar();
      $scope.hasHeader();
  };

  $scope.clearFabs = function() {
        var fabs = document.getElementsByClassName('button-fab');
        if (fabs.length && fabs.length > 1) {
            fabs[0].remove();
        }
    };  

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('AboutCtrl', function($scope, $stateParams, $timeout) {
    // Set Header
     $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = true;
    $scope.$parent.setExpanded(false);
   $scope.$parent.setHeaderFab('right');
   
     // Set Motion
    $timeout(function() {
        ionic.material.motion.slideUp({
            selector: '.slide-up'
        });
    }, 500);
    
    $timeout(function() {
        ionic.material.motion.fadeSlideInRight({
            startVelocity: 5000
        });
    }, 700);
    

    // Set Ink
    ionic.material.ink.displayEffect();
})

.controller('ContactCtrl', function($scope, $stateParams, $timeout,$ionicPopup) {
    // Set Header
    
//    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = true;
    $scope.$parent.setExpanded(true);
    $scope.$parent.setHeaderFab('right');
    
//    google.maps.event.addDomListener(window,"load",function(){
//        
//        var myLatlng = new google.maps.LatLng(25.221846,55.281196);
//        
//        var mapOptions = {
//            center : myLatlng,
//            zoom :16,
//            mapTypeId: google.maps.MapTypeId.ROADMAP
//        };
//        
//        var map = new google.maps.Map(document.getElementById("map"),mapOptions);
//        
//        $scope.map = map;
//    });

      
     // Set Motion
    $timeout(function() {
        ionic.material.motion.slideUp({
            selector: '.slide-up'
        });
    }, 400);
    
//    $timeout(function() {
//        ionic.material.motion.fadeSlideInRight({
//            startVelocity: 5000
//        });
//    }, 700);

    // Set Ink
    ionic.material.ink.displayEffect();
    
    $scope.message = {};
    
   $scope.saveMessage = function (message){
   
        if(message.name === null || message.name === "" || message.name === undefined){
            
            $ionicPopup.alert({
                 title:'Warning !',
                 template: 'Please enter the name'
            });
        
        }else if(message.email === null || message.email === "" || message.email === undefined){
            
            $ionicPopup.alert({
                 title:'Warning !',
                 template: 'Please enter the Email'
            });
        
        }else if(message.phone === null || message.phone === "" || message.phone === undefined){
            
            $ionicPopup.alert({
                 title:'Warning !',
                 template: 'Please enter the Phone number'
            });
        
        }else if(message.messagetxt === null || message.messagetxt === "" || message.messagetxt === undefined){
            
            $ionicPopup.alert({
                 title:'Warning !',
                 template: 'Please enter some messages'
            });
        
        }else{
        
                 $ionicPopup.alert({
                 title:'Success',
                 template: 'working !! <br> name:' +message.name+' email:'+message.email
            });
        }
   }
      
})

.controller('HomeCtrl', function($scope, $stateParams, $timeout) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.$parent.setHeaderFab('left');

    // Delay expansion
    $timeout(function() {
        $scope.isExpanded = true;
        $scope.$parent.setExpanded(true);
    }, 300);

    // Set Motion
    ionic.material.motion.blinds();

    // Set Ink
    ionic.material.ink.displayEffect();
})

.controller('ClientsCtrl', function($scope, $stateParams, $timeout) {
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = true;
    $scope.$parent.setExpanded(true);
    $scope.$parent.setHeaderFab(false);

    // Activate ink for controller
    ionic.material.ink.displayEffect();

    ionic.material.motion.pushDown({
        selector: '.push-down'
    });
    ionic.material.motion.fadeSlideInRight({
        selector: '.animate-fade-slide-in .item'
    });

})

.controller('PortfolioCtrl', function($scope, $stateParams, $timeout) {
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = true;
    $scope.$parent.setExpanded(true);
    $scope.$parent.setHeaderFab(false);

    // Activate ink for controller
    ionic.material.ink.displayEffect();

    $scope.images = [];
 
    $scope.loadImages = function() {
        for(var i = 0; i < 100; i++) {
            $scope.images.push({id: i, src: "http://placehold.it/100x100"});
        }
    }

})



.controller('PlaylistCtrl', function($scope, $stateParams) {
});
