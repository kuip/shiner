FlowRouter.route('/', {
	action: function() {
		BlazeLayout.render('layout', {main: "home"})
	}
})

FlowRouter.route('/form', {
	action: function() {
		BlazeLayout.render('layout', {main: "listTemplatesForm"})
	}
})

FlowRouter.route('/preview/:app', {
	action: function() {
		BlazeLayout.render('layout', {main: "preview"})
	}
})

FlowRouter.route('/app/:app', {
	action: function() {
		BlazeLayout.render('layout', {main: "bodyCont"})
	}
})