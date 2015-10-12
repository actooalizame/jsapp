Meteor.startup(function() {
  //Session.clear('waitTime');
  //Session.setDefault('active',false);
  Tracker.autorun(function() {
    Meteor.subscribe('userData');
    
    });
});

UI.registerHelper('formatTime', function(context, options) {
  if(context)
    return moment(context).format('hh:mm');
});

toastr.options = {
  "closeButton": false,
  "debug": false,
  "newestOnTop": false,
  "progressBar": false,
  "positionClass": "toast-top-right",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "10000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
};
