Template.meteorsource.helpers({
	source: function() {
		var out = [], integration = ''
    var containers = Containers.find(Session.get('appQuery'),{sort:{ordering:1}}).fetch()
    containers.forEach(function(c) {
      c.mcompile()
      out = out.concat(c.minstances)
      integration += c.integration + '\n'
    })

    return {out:out, integration: integration}
	}
})

Template.jsonsource.helpers({
	source: function() {
		var out = []
    var containers = Containers.find(Session.get('appQuery'),{sort:{ordering:1}}).fetch()
    containers.forEach(function(c) {
      c.jcompile()
      out = out.concat(c.jinstances)
    })

    return JSON.stringify(out)
	}
})