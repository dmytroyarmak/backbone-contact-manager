ContactManager.Views.Contact = Backbone.View.extend({
  tagName: 'li',
  className: 'media col-md-6 col-lg-4',
  template: _.template($('#tpl-contact').html()),

  render: function() {
    var html = this.template(this.model.toJSON());
    this.$el.append(html);
    return this;
  }
});
