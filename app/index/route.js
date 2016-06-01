import Ember from 'ember';

export default Ember.Route.extend({
  // same as model: function(){}
  model(){
    return [
      {
        title: 'Favorite Things',
        item: [
          { content: 'Cats' },
          { content: 'Dogs' },
          { content: 'Frogs' },
          { content: 'Mice' },
          { content: 'Bears' }
        ]
      },
      {
        title: 'Todos',
        item: [
          { content: 'Stuff' },
          { content: 'Things' },
          { content: 'Problems' },
          { content: 'More Stuff' },
          { content: 'Harder Things' }
        ]
      }
    ]
  }
});
