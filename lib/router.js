Router.configure({
	layoutTemplate: 'layout'
});

Router.route('home', {
	template: 'home',
	path: '/',
	//waitOn: function() { return Meteor.subscribe('userData');}
});

Router.route('usersList', {
  template: 'usersList',
  path: '/users',
  //waitOn: function() { return Meteor.subscribe('userData');}
});