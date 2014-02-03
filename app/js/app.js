window.ContactManager = {
  Models: {},
  Collections: {},
  Views: {},

  start: function(data) {
    var contacts = new ContactManager.Collections.Contacts(data.contacts);

    var contactsView = new ContactManager.Views.Contacts({
      collection: contacts
    });

    $('.main-container').html(contactsView.render().$el);
  }
};
