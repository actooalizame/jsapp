Template.allOrders.helpers({
	'orders': function(){
		return Orders.find({state:'finished'},{sort:{createdAt:-1}});
	},
	'orderProducts': function(){
		var orderId = this._id;
		return Products.find({orderId:orderId});
	}
});

Template.allOrders.events({
	'click .confirm-order': function(){
		var orderId = this._id;
		Meteor.call('confirmOrder', orderId);
	},
	'click .cancel-order': function(){
		var orderId = this._id;
		Meteor.call('cancelOrder', orderId);
	}
});