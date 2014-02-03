ContactManager.Views.Contacts = Backbone.View.extend({
  template: _.template($('#tpl-contacts').html()),

  render: function() {
    var html = this.template();
    this.$el.html(html);
    return this;
  }
});
