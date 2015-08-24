Template.preview.onRendered(function() {
	$("head").append('<script type="application/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.0.8/semantic.min.js">');
	$("head").append('<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.0.8/semantic.min.css">');
})

Template.preview.helpers({
  html_out: function() {
    var out = ''
    var containers = Containers.find({app: FlowRouter.getParam('app')},{sort:{ordering:1}}).fetch();
    containers.forEach(function(container) {
      container.compile()
      out += container.compiled
    })

    return out
  }
})