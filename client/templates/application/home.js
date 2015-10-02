Template.home.rendered = function(){
	var users = Meteor.users.find({active:false});
	
	var handle = users.observeChanges({
    added: function(id, user) {
			
      var duration = 15;
      var interval, timeLeft;
      timeLeft = function() {
        if (duration > 0) {
          duration--;
          Session.set("time", duration);
        } else {
          //Meteor.call('setDone', id);
          Meteor.call('setActive', id);
          $('#myModal').modal();
          return Meteor.clearInterval(interval);
        }
      };
      interval = Meteor.setInterval(timeLeft, 1000);
    }
  });
};