Template.home.helpers({
	apps: function() {
		var containers = Containers.find().fetch()
		var apps = [], app
		var cByApp = _.groupBy(containers, 'app')
		_.each(cByApp, function(contains, appname) {
			app = ''
			_.each(contains, function(c) {
				c.compile()
				app += c.compiled
			})
			apps.push({name: appname, compiled: app})
		})

		return apps
	},
	color: function() {
		//var 
	}
})

Template.home.events({
	'click .app': function() {
		window.open('/app/'+this.name, '_blank')
	}
})