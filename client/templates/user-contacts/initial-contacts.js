Template.initialContacts.onCreated(function(){
	var current = Contacts.find({status:"current"});
  
	var handle = current.observeChanges({
    removed: function(id, element) {
			
      var duration = 7;
      var interval, timeLeft;
      var $modal2 = $('#myModal2');
      timeLeft = function() {
        if (duration > 0) {
          duration--;
          Session.set("time", duration);
        } else {
          $modal2.modal();
          
          return Meteor.clearInterval(interval);
        }
      };
      interval = Meteor.setInterval(timeLeft, 1000);
    }
  });
  /*
  var initial = Contacts.find({status:"initial"});
	var hook = initial.observeChanges({
		changed: function(id,element){
			console.log('gomaeas');
		}

	});*/

});

Template.initialContacts.helpers({
	'initialContacts': function(){
		return Contacts.find({status:"initial"},{sort:{name:1}});
	},
	'currentContacts': function(){
		return Contacts.find({status:"current"},{sort:{name:1}});
	},
	'unAnswered': function(){
		return Contacts.find({status:"unanswered"},{sort:{name:1}});
	},
	'contact': function(){
		var contactId = Session.get('selectedContact');
		return Contacts.findOne({_id:contactId});
	},
	'suggestedContact': function(){
		return Contacts.findOne({status:"initial"});
	}

});

Template.initialContacts.events({
	'click .call-contact': function(){
		var contactId = this._id;
		Session.set('selectedContact',contactId);
		
		$('#myModal').on('shown.bs.modal', function (e) {
			Meteor.call('setCurrent',contactId);
		});
	},
	'click .no-responde': function(){
		var contactId = this._id;
		$('#myModal').on('hidden.bs.modal', function (e) {
			Meteor.call('setUnanswered',contactId);
		});
	},
	'click .no-responde2': function(){
		var contactId = this._id;
		$('#myModal2').on('hidden.bs.modal', function (e) {
			Meteor.call('setUnanswered',contactId);
			toastr["warning"]("No dejes pasar tanto tiempo entre llamadas.", "Atencion!");
		});
		
	}
});

