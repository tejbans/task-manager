angular 
  .module('app', ['ui.router','templates', 'ngResource'])
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('home',{
        url: '/',
        templateUrl: 'app/views/home.html'
        controller: 'TestCtrl as test'
      });
     $urlRouterProvider.otherwise('/') 
  });