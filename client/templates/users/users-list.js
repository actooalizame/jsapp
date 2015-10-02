Template.usersList.helpers({
  'users': function(){
    return Meteor.users.find({});
  },
  'isActive': function(){
    var userId = this._id,
        user = Meteor.users.findOne({_id:userId}),
        active = user.active;
    if(active===true){
      return "Si";
    }else{
      return "No";
    }
  },
  'selectedClass': function(){
    var userId = this._id;
    var selectedUser = Session.get('selectedUser');
    if(userId == selectedUser){
      return 'selected';
    }
  },
  
});

Template.usersList.events({
  
  'click .set-active': function(){
    var userId = this._id;
    Meteor.call('setActive', userId);
  },
  'click .set-inactive': function(){
    var userId = this._id;
    Meteor.call('setInactive', userId);
  }
  
});