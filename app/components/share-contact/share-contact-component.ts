(()=> {

  'use strict';

  /**
   * Bottom Sheet controller for the Avatar Actions
   */
  class ShareContact {

    items = [
      { name: 'Phone', icon: 'phone', icon_url: 'assets/svg/phone.svg' },
      { name: 'Twitter', icon: 'twitter', icon_url: 'assets/svg/twitter.svg' },
      { name: 'Google+', icon: 'google_plus', icon_url: 'assets/svg/google_plus.svg' },
      { name: 'Hangout', icon: 'hangouts', icon_url: 'assets/svg/hangouts.svg' }
    ];

    contact: any;


    static factory() {
      return {
        scope: {},
        bindToController: {
          contact: '='
        },
        templateUrl: '/app/components/share-contact/share-contact.html',
        controller: ShareContact,
        controllerAs: '$ctrl',
        link: ( scope, element, attrs, controller: ShareContact )=> {controller.ngOnInit()}
      }
    };

    static $inject = [ '$mdBottomSheet' ];
    constructor( private $mdBottomSheet: ng.material.IBottomSheetService ) {}

    ngOnInit() {}

    performAction( action ) {
      console.log( action );
      this.$mdBottomSheet.hide( action );
    }

  }

  angular.module('shareContact')
    .directive( 'shareContact', ShareContact.factory );


})();
