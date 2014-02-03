window.ContactManager = {
  Models: {},
  Collections: {},
  Views: {},

  start: function(data) {
    var contacts = new ContactManager.Collections.Contacts(data.contacts),
        router = new ContactManager.Router();

    router.on('route:home', function() {
      router.navigate('contacts', {
        trigger: true,
        replace: true
      });
    });

    router.on('route:showContacts', function() {
      var contactsView = new ContactManager.Views.Contacts({
        collection: contacts
      });

      $('.main-container').html(contactsView.render().$el);
    });

    router.on('route:newContact', function() {
      console.log('New contact');
    });

    router.on('route:editContact', function(id) {
      console.log('Edit contact');
    });

    Backbone.history.start();
  }
};
