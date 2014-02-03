ContactManager.Views.ContactForm = Backbone.View.extend({
  template: _.template($('#tpl-new-contact').html()),
  render: function() {
    var html = this.template();
    this.$el.append(html);
    return this;
  }
});
