Template.source.onRendered(function() {
  Session.set('appQuery', {});
  
  this.autorun(function() {
    var app = FlowRouter.getParam('app')
    console.log(app)
    if(app)
      Session.set('appQuery', {app: app})
  })

  this.autorun(function() {
    var page = FlowRouter.getParam('page')
    console.log(page)
    if(page) {
      var pg = Pages.findOne({name: page})
      console.log(pg)
      if(pg)
        Session.set('page', pg._id)
    }
  })
})

Template.source.helpers({
  type: function() {
    return FlowRouter.getParam('type')
  },
  what: function() {
    return FlowRouter.getQueryParam('what')
  },
	sourcem: function() {
    if(Session.get('page')) {
      var page = Pages.findOne(Session.get('page'))
      if(page) {
        page.mcompile()
        return page
      }
    }
    else {
      var pages = Pages.find(Session.get('appQuery')).fetch()
      var content = '', values = '', integration = ''

      _.each(pages, function(page) {
        page.mcompile()
        content += page.content + '\n//' + page.name + '\n'
        values += page.values + '\n//' + page.name + '\n'
        integration += page.integration + '\n//' + page.name + '\n'
      })

      return {content: content, values: values, integration: integration}
    }
	},
	sourcej: function() {
    if(Session.get('page')) {
      var page = Pages.findOne(Session.get('page'))
      if(page) {
        page.jcompile()
        return page.jcompiled
      }
    }
    else {
      var pages = Pages.find(Session.get('appQuery')).fetch()
      var out = []
      _.each(pages, function(page) {
        page.jcompile()
        out = out.concat(page.jcontainers)
      })

      return JSON.stringify(out)
    }
	},
  sourceh: function(){
    if(Session.get('page')) {
      var page = Pages.findOne(Session.get('page'))
      if(page) {
        page.compile()
        return page.compiled
      }
    }
    else {
      var pages = Pages.find(Session.get('appQuery')).fetch()
      var out = ''
      _.each(pages, function(page) {
        page.compile()
        out += page.compiled
      })

      return out
    }
  }
})