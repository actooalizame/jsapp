Router.configure({
	layoutTemplate: 'layout'
});

Router.route('home', {
	template: 'home',
	path: '/',
	//waitOn: function() { return Meteor.subscribe('initialContacts');}
});

Router.route('usersList', {
  template: 'usersList',
  path: '/users',
  //waitOn: function() { return Meteor.subscribe('userData');}
});

Router.route('initialContacts', {
	template: 'initialContacts',
	path: '/mis-contactos',
	waitOn: function() {
		if(Meteor.user()){
			//return Meteor.subscribe('initialContacts');
			return [
				Meteor.subscribe('initialContacts'),
				Meteor.subscribe('currentContacts'),
				Meteor.subscribe('unAnswered')
     ];
		}
	}
});