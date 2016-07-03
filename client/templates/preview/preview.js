Template.preview.helpers({
  html_out: function() {
    if(FlowRouter.getParam('page')) {
      var page = Pages.findOne({app: FlowRouter.getParam('app'), name: FlowRouter.getParam('page')})
      if(page) {
        page.compile()
        return page.compiled
      }
    }
    else {
      var pages = Pages.find({app: FlowRouter.getParam('app')}).fetch()
      var html = ''
      _.each(pages, function(page) {
        page.compile()
        html += page.compiled
      })

      return html
    }
    
    Meteor.setTimeout(function() {
      $('.ui.dropdown').dropdown()
      $('.ui.embed').embed()
      $('.dimmer').dimmer({ on: 'hover' })
    }, 1000)
    return out
  }
})