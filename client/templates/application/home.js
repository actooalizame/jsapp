Template.home.rendered = function(){

	var users = Meteor.users.find({active:false});
  
	var handle = users.observeChanges({
    added: function(id, user) {
			
      var duration = 7;
      var interval, timeLeft;
      timeLeft = function() {
        if (duration > 0) {
          duration--;
          Session.set("time", duration);
        } else {
          Meteor.call('setActive', id);
          $('#myModal').modal();
          
          return Meteor.clearInterval(interval);
        }
      };
      interval = Meteor.setInterval(timeLeft, 1000);
    }
  });

    var contact = Contacts.find({status:'initial'},{sort: {createdAt:-1}});
  
  var hook = contact.observeChanges({
    addedBefore: function(id, contact) {
      
      var duration = Session.get('time');
      var interval, timeLeft;
      timeLeft = function() {
        if (duration > 0) {
          duration--;
          console.log(time);
        } else {
          //Meteor.call('setDone', id);
          Meteor.call('setSuggested', id);
          //$('#myModal').modal();
          return Meteor.clearInterval(interval);
        }
      };
      interval = Meteor.setInterval(timeLeft, 1000);
    }
  });

};



Template.home.helpers({
  'contacts': function(){
    return Contacts.find({status:"initial"},{limit:1});
  }
});