Template.contactDetails.helpers({
	'hasReminder': function(){
		var contactId = this._id,
				reminders = Reminders.find({contactId:contactId});
		if(reminders.count()>0){
			return true;
		}
	},
	'reminder': function(){
		var contactId = this._id;
		return Reminders.findOne({contactId:contactId});
	},
	'hasOrders': function(){
		var contactId = this._id,
				ordersCount = Orders.find({contactId:contactId,state:"unfinished"}).count();
		if(ordersCount>0){
			return true;
		}
	},
	'newOrder': function(){
		var contactId = this._id;
		return Orders.findOne({contactId:contactId, state:"unfinished"});
	},
	'orderProducts': function(){
		var orderId =  this._id;
		return Products.find({orderId:orderId});
	},
	'invisibleClass': function(){
		var orderId = this._id,
				productsCount = Products.find({orderId:orderId}).count();
		if(productsCount<2){
			return 'invisible';
		}
	},
	'finishedOrders': function(){
		var contactId = this._id;
		return Orders.find({contactId:contactId,state:"finished"},{sort:{createdAt:-1}});
	}
});

Template.contactDetails.events({
	'submit .call-later': function(e){
		e.preventDefault();
		var contactId = this._id;
		var hours = e.target.hours.value,
				minutes = e.target.minutes.value;
		Meteor.call('setCallLater',contactId);
		Meteor.call('createReminder', contactId,hours,minutes);
		Router.go('initialContacts');
	},
	'submit .insert-product': function(e){
		e.preventDefault();
		var orderId = this._id,
				order = Orders.findOne({_id:orderId}),
				contactId = order.contactId,
				name = e.target.product.value;
		Meteor.call('insertProduct', orderId, contactId, name);
		e.target.product.value = "";
	},
	'click .create-order': function(){
		var contactId = this._id;
		Meteor.call('createOrder',contactId);
	},
	'click .finish-order': function(){
		var orderId = this._id,
				order = Orders.findOne({_id:orderId}),
				contactId = order.contactId;
		Meteor.call('finishOrder', orderId);
		Meteor.call('setOrdered', contactId);
	},
	'click .confirm-order': function(){
		var orderId = this._id;
		Meteor.call('confirmOrder', orderId);
	},
	'click .cancel-order': function(){
		var orderId = this._id;
		Meteor.call('cancelOrder', orderId);
	}
});