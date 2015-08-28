Template.meteorsource.helpers({
	source: function() {
		var out = []
    var containers = Containers.find(Session.get('appQuery'),{sort:{ordering:1}}).fetch()
    containers.forEach(function(c) {
      c.mcompile()
      out = out.concat(c.minstances)
    })

    return out
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