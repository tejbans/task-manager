angular 
  .module('app', ['ui.router','templates', 'ngResource'])
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('home',{
        url: '/',
        templateUrl: 'app/views/home.html',
        controller: 'HomeController as ctrl'
      });
      .state('home.new',{
        url: 'new',
        templateUrl: 'app/views/home/new.html',
        controller: 'TasksController as ctrl'
      });
      .state('home.tasks',{
        url: 'tasks',
        templateUrl: 'app/views/home/tasks.html',
        controller: 'TasksController as ctrl'
      });
     $urlRouterProvider.otherwise('/') 
  });