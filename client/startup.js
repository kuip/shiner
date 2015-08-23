Meteor.startup(function() {
  AutoForm.setDefaultTemplate("semanticUI");
});

Template.registerHelper('log', function(obj) {
	console.log(obj)
})






