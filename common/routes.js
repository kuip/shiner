FlowRouter.route('/', {
	action: function() {
		BlazeLayout.render('layout', {main: "home", headers: "headers"})
	}
})


FlowRouter.route('/form', {
	action: function() {
		BlazeLayout.render('layout', {main: "listTemplatesForm", headers: "headers"})
	}
})

FlowRouter.route('/preview/:app', {
	action: function() {
		BlazeLayout.render('layout', {main: "preview", headers: "headers"})
	}
})

FlowRouter.route('/app/:app/:page?', {
	action: function(params, query) {
		if(params.page)
			BlazeLayout.render('layout', {main: "bodyCont", headers: "headers"})
		else
			BlazeLayout.render('layout', {main: "app", headers: "headers"})
	}
})

FlowRouter.route('/source/:type/:app/:page?', {
	action: function() {
		BlazeLayout.render('layout', {main: "source"})
	}
})


FlowRouter.route('/container/:app/:page?', {
	action: function() {
		BlazeLayout.render('layout', {main: "container", headers: "headers"})
	}
})