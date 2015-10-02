Meteor.methods({
	'setActive': function(userId){
    Meteor.users.update(
			{ _id: userId },
			{$set: {
				active:true,
			}}
		);
  },
  'setInactive': function(userId){
    Meteor.users.update(
			{ _id: userId },
			{$set: {
				active:false,
			}}
		);
  }
});