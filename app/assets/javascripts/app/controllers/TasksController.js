
function TasksController() {
  var ctrl = this;

  ctrl.tasks = [{
      title: 'First Task',
      description: 'This is my first task'
    },{
      title: 'Second Task',
      description: 'This is my Second task'
    }];
}
angular
  .module(‘app’)
  .controller(‘TasksController’, TasksController);