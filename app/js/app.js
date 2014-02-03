window.ContactManager = {
  Models: {},
  Collections: {},
  Views: {},

  start: function(data) {
    var contacts = new ContactManager.Collections.Contacts(data.contacts);

    console.log(contacts);
  }
};
