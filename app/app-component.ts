(()=> {

  class AppComponent {

    static factory() {
      return {
        scope: {},
        bindToController: {},
        templateUrl: '/app/app-component.html',
        controller: AppComponent,
        controllerAs: '$ctrl',
        link: ( scope, element, attrs, controller: AppComponent )=> {controller.ngOnInit()}
      }
    }

    selected = null;
    users = [];

    constructor(
      private userService,
      private $mdSidenav: ng.material.ISidenavService,
      private $mdBottomSheet: ng.material.IBottomSheetService,
      private $log: ng.ILogService,
      private $scope: ng.IScope
    ) {}

    ngOnInit() {
      // Load all registered users

      this.userService
        .loadAllUsers()
        .then( ( users )=> {
          this.users = [].concat( users );
          this.selected = users[ 0 ];
        } );
    }

    /**
     * Hide or Show the 'left' sideNav area
     */
    toggleUsersList() {
      this.$mdSidenav( 'left' ).toggle();
    }

    /**
     * Select the current avatars
     * @param userId
     */
    selectUser( userId ) {

      this.selected = angular.isNumber( userId )
        ? this.users[ userId ]
        : userId;

      this.toggleUsersList();

    }

    /**
     * Show the bottom sheet
     */
    share( $event ) {

      const bottomSheetConfig = {
        parent: angular.element( document.getElementById( 'content' ) ),
        template: `
        <md-bottom-sheet class="md-list md-has-header">
          <share-contact contact="$ctrl.selected"></share-contact>
        </md-bottom-sheet>
        `,
        scope: this.$scope.$new(),
        targetEvent: $event
      };

      this.$mdBottomSheet
        .show( bottomSheetConfig )
        .then( ( clickedItem )=> {
          this.$log.debug( `${clickedItem.name} clicked!` );
        } );

    }

  }

  angular
    .module( 'myApp' )
    .directive( 'app', AppComponent.factory )

})();
