(()=> {

  const AppModule = angular.module( 'myApp');
  angular.element( document ).ready( ()=>angular.bootstrap( document, [ AppModule.name ] ) );

})();