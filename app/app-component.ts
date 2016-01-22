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
      private $mdDialog: ng.material.IDialogService,
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

    //shareWithModal($event){
    //
    //  const user = this.selected;
    //  const parentEl = angular.element(document.body);
    //
    //  this.$mdDialog.show({
    //    parent: parentEl,
    //    targetEvent: $event,
    //    template:
    //    `<md-dialog aria-label="List dialog">
    //      <md-dialog-content>
    //        <!--{{ contact | json }}-->
    //        <share-contact contact="contact"></share-contact>
    //      </md-dialog-content>
    //      <md-dialog-actions>
    //        <md-button ng-click="closeDialog()" class="md-primary">
    //          Close Dialog
    //        </md-button>
    //      </md-dialog-actions>
    //    </md-dialog>`,
    //    locals: {
    //      contact: user
    //    },
    //    controller: DialogController
    //  });
    //  function DialogController($scope, $mdDialog, contact) {
    //    $scope.contact = contact;
    //    $scope.closeDialog = function() {
    //      $mdDialog.hide();
    //    }
    //  }
    //}

    /**
     * Show the bottom sheet
     */
    share( $event ) {

      const user = this.selected;

      const bottomSheetConfig = {
        parent: angular.element( document.getElementById( 'content' ) ),
        locals: { contact: this.selected },
        controller: function (contact) {
          this.contact = this.locals.contact;
        },
        controllerAs: '$ctrl',
        bindToController: true,
        template: `
        <md-bottom-sheet class="md-list md-has-header">
          <share-contact contact="$ctrl.contact"></share-contact>
        </md-bottom-sheet>
        `,
        targetEvent: $event
      };
      /**
       * Bottom Sheet controller for the Avatar Actions
       */
      UserSheetController.$inject = [ 'contact' ];
      function UserSheetController( contact ) {
        this.user = contact;
      }

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
