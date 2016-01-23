(()=> {

  'use strict';

  /**
   * Bottom Sheet controller for the Avatar Actions
   */
  class UserDetailComponent {

    user: any;

    static factory() {
      return {
        scope: {},
        bindToController: {
          user: '='
        },
        transclude: true,
        templateUrl: '/app/components/user-detail/user-detail.html',
        controller: UserDetailComponent,
        controllerAs: '$ctrl',
        link: ( scope, element, attrs, controller: UserDetailComponent )=> {controller.ngOnInit()}
      }
    };

    static $inject = [  ];
    constructor() {}

    ngOnInit() {}

  }

  angular.module('userDetail')
    .directive( 'userDetail', UserDetailComponent.factory );


})();
