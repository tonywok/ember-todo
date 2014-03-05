var TodosRoute = Em.Route.extend({

  model: function() {
    return this.store.find('todo');
  }

});

export default TodosRoute;
