ContactManager.Views.Contact = Backbone.View.extend({
  render: function() {
    var html = '<h1>' + this.model.get('name') + '</h1>';
    this.$el.html(html);
    return this;
  }
});
