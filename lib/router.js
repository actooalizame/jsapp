Router.configure({
	layoutTemplate: 'layout'
});

Router.route('home', {
	template: 'home',
	path: '/',
	//waitOn: function() { return Meteor.subscribe('initialContacts');}
});

Router.route('createContact', {
	template: 'createContact',
	path : '/crear-contacto'
});

Router.route('usersList', {
  template: 'usersList',
  path: '/users',
  //waitOn: function() { return Meteor.subscribe('userData');}
});


Router.route('allOrders', {
	template: 'allOrders',
	path: '/pedidos',
	waitOn: function() {
		if(Meteor.user()){
			//return Meteor.subscribe('initialContacts');
			//var contactId = Session.get('viewOrderId');
			return [
				Meteor.subscribe('allOrders'),
				Meteor.subscribe('allProducts')
     ];
		}
	}
});


Router.route('initialContacts', {
	template: 'initialContacts',
	path: '/mis-contactos',
	waitOn: function() {
		if(Meteor.user()){
			//return Meteor.subscribe('initialContacts');
			var contactId = Session.get('viewOrderId');
			return [
				Meteor.subscribe('initialContacts'),
				Meteor.subscribe('orderedContacts'),
				Meteor.subscribe('currentContacts'),
				Meteor.subscribe('unAnswered'),
				Meteor.subscribe('callLater'),
				Meteor.subscribe('userReminders'),
				Meteor.subscribe('contactOrders',contactId)
     ];
		}
	}
});

Router.route('/cliente/:_id', {
	template: 'contactDetails',
	name: 'contactDetails',
	
	data: function(){ return Contacts.findOne(this.params._id);},
	waitOn: function(){
		var contactId = this.params._id;
		return [
				Meteor.subscribe('singleContact', contactId),
				Meteor.subscribe('reminder',contactId),
				Meteor.subscribe('contactOrders',contactId),
				Meteor.subscribe('contactProducts',contactId)
     ];
	}
});