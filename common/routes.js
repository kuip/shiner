FlowRouter.route('/', {
	action: function() {
		BlazeLayout.render('layout', {main: "bodyCont"})
	}
})

FlowRouter.route('/form', {
	action: function() {
		BlazeLayout.render('layout', {main: "listTemplatesForm"})
	}
})

FlowRouter.route('/preview', {
	action: function() {
		BlazeLayout.render('layout', {main: "preview"})
	}
})