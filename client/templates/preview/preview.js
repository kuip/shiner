Template.preview.onRendered(function() {
	$("head").append('<script type="application/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.0.8/semantic.min.js">');
	$("head").append('<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.0.8/semantic.min.css">');
})

Template.preview.helpers({
  html_out: function() {
    var containers = Containers.find({app: FlowRouter.getParam('app')},{sort:{ordering:1}}).fetch();
    var out = ''
    containers.forEach(function(container) {
      container.compile()
      out += container.compiled
    })
    Meteor.setTimeout(function() {
      $('.ui.dropdown').dropdown()
      $('.ui.embed').embed()
      $('.special.cards .image').dimmer({ on: 'hover' })
    }, 1000)
    return out
  }
})