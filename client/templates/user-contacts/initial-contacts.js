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
	'callLater': function(){
		return Contacts.find({status:"callLater"});
	},
	'contact': function(){
		var contactId = Session.get('selectedContact');
		return Contacts.findOne({_id:contactId});
	},
	'suggestedContact': function(){
		return Contacts.findOne({status:"initial"});
	},
	'reminders': function(){
		return Reminders.find({contactId:this._id},{sort:{changed:-1}});
	}

});

Template.initialContacts.events({
	'click .call-contact': function(){
		
		var contactId = this._id;
		Session.set('selectedContact',contactId);
		Meteor.call('setCurrent',contactId);
		/*$('#myModal').on('shown.bs.modal', function (e) {
			Meteor.call('setCurrent',contactId);
			//Session.set('active', true);
		});*/
		console.log(contactId);
	},
	'click .responde': function(){
		$('.modal-backdrop').remove();
		$('body').removeClass('modal-open');
		var contactId = this._id;
		Meteor.call('setOnCall',contactId);
		Session.clear('selectedContact');
	},
	'click .responde2': function(){
		$('.modal-backdrop').remove();
		$('body').removeClass('modal-open');
		var contactId = this._id;
		Meteor.call('setOnCall',contactId);
		toastr["warning"]("No dejes pasar tanto tiempo entre llamadas.", "Atencion!");
		Session.clear('selectedContact');
	},
	'click .no-responde': function(){
		var contactId = this._id;
		$('#myModal').on('hidden.bs.modal', function (e) {
			Meteor.call('setUnanswered',contactId);
			Session.clear('selectedContact');
		});
		
	},
	'click .no-responde2': function(){
		var contactId = this._id;
		$('#myModal2').on('hidden.bs.modal', function (e) {
			Meteor.call('setUnanswered',contactId);
			toastr["warning"]("No dejes pasar tanto tiempo entre llamadas.", "Atencion!");
			Session.clear('selectedContact');
		});
	},
	'click .label-success': function(){
		var contactId = this._id,
				reminder = Reminders.findOne({contactId:contactId});
		if(reminder!==undefined){
			reminderId = reminder._id;
		}
		Meteor.call('setCurrent',contactId);
		Session.set('selectedContact',contactId);
		$('#myModal').on('shown.bs.modal', function (e) {
			
			if(reminder!==undefined){
				Meteor.call('deleteReminder', reminderId);
			}
		});
	}
});


Template.initialContacts.onCreated(function(){
	/*var idleTime = 0;
	//Increment the idle time counter every minute.
  var idleInterval = setInterval(timerIncrement, 1000); // 1 minute
	
  //Zero the idle timer on mouse movement.
  $('button').click(function (e) {
      idleTime = 0;
  
  });
  function timerIncrement() {
    idleTime = idleTime + 1;
    console.log(idleTime);
    if (idleTime === 10) { // 20 minutes
        $('#myModal2').modal();
    }
	}*/

	/*var unanswered = Contacts.find({status:"unanswered"});
  
	var handle = unanswered.observeChanges({
		added: function(id,elm) {
			var waitTime = 7,
					active = Session.get('active'),
					interval,
					timeLeft,
					$modal2 = $('#myModal2');
      timeLeft = function() {
        if (waitTime > 0 && active === false) {
          waitTime--;
          Session.set("waitTime", waitTime);
        } else if(waitTime===0 && active===false) {

          $modal2.modal();
          
          return Meteor.clearInterval(interval);
        }
      };
      interval = Meteor.setInterval(timeLeft, 1000);
		},

    removed: function(id, element) {
			
      
    }
  });*/
	/*var current = Contacts.find({status:"current"});
  
	var handle = current.observeChanges({
		added: function(id,elm) {

		},

    removed: function(id, element) {
			
      var waitTime = 7,
					interval,
					timeLeft,
					$modal2 = $('#myModal2');
      timeLeft = function() {
        if (waitTime > 0) {
          waitTime--;
          Session.set("waitTime", waitTime);
        } else {
          $modal2.modal();
          
          return Meteor.clearInterval(interval);
        }
      };
      interval = Meteor.setInterval(timeLeft, 1000);
    }
  });*/
  /*
  var initial = Contacts.find({status:"initial"});
	var hook = initial.observeChanges({
		removed: function(id,element){
			console.log('gomaeas');
		}

	});*/

});
