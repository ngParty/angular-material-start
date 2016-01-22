(()=> {
  'use strict';

  class Configure {
    static $inject = [ '$mdIconProvider', '$mdThemingProvider' ];

    constructor(
      $mdIconProvider: ng.material.IIconProvider,
      $mdThemingProvider: ng.material.IThemingProvider
    ) {

      // Register the user `avatar` icons
      $mdIconProvider
        .defaultIconSet( "./assets/svg/avatars.svg", 128 )
        .icon( "menu", "./assets/svg/menu.svg", 24 )
        .icon( "share", "./assets/svg/share.svg", 24 )
        .icon( "google_plus", "./assets/svg/google_plus.svg", 512 )
        .icon( "hangouts", "./assets/svg/hangouts.svg", 512 )
        .icon( "twitter", "./assets/svg/twitter.svg", 512 )
        .icon( "phone", "./assets/svg/phone.svg", 512 )
      ;


      $mdThemingProvider.theme( 'default' )
        .primaryPalette( 'brown' )
        .accentPalette( 'red' )
      ;

    }
  }

  angular.module( 'users' )
    .config( Configure );

})();