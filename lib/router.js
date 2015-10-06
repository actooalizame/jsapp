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

Router.route('userContacts', {
	template: 'userContacts',
	path: '/mis-contactos',
	waitOn: function() {
		if(Meteor.user()){
			return Meteor.subscribe('initialContacts');
		}
	}
});