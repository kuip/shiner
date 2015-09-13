Template.home.helpers({
	apps: function() {
		var pages = Pages.find().fetch()
		var apps = [], app
		var cByApp = _.groupBy(pages, 'app')
		_.each(cByApp, function(pag, appname) {
			app = ''
			_.each(pag, function(p) {
				p.compile()
				app += p.compiled
			})
			apps.push({name: appname, compiled: app})
		})

		return apps
	}
})

Template.home.events({
	'click .app': function() {
		window.open('/app/'+this.name, '_blank')
	}
})

Template.headers.helpers({
	header: function() {
		return Frameworks.findOne({_id: Session.get('framework')})
	}
})

Template.app.helpers({
	pages: function() {
		var pages = Pages.find({app: FlowRouter.getParam('app')}).fetch()
		var pg = []
		_.each(pages, function(p) {
			p.compile()
			pg.push({name: p.name, compiled: p.compiled})
		})
			
		return pg
	}
})

Template.app.events({
	'click .app': function() {
		window.open('/app/' + FlowRouter.getParam('app') + '/' + this.name, '_blank')
	}
})