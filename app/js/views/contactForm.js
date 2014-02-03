ContactManager.Views.ContactForm = Backbone.View.extend({
  template: _.template($('#tpl-new-contact').html()),

  events: {
    'submit .contract-form': 'onFormSubmit'
  },

  render: function() {
    var html = this.template(_.extend(this.model.toJSON(), {
      isNew: this.model.isNew()
    }));
    this.$el.append(html);
    return this;
  },

  onFormSubmit: function(e) {
    e.preventDefault();

    this.trigger('form:submitted', {
      name: this.$('.contact-name-input').val(),
      tel: this.$('.contact-tel-input').val(),
      email: this.$('.contact-email-input').val()
    });
  }
});
