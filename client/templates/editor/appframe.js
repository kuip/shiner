Template.container.onCreated(function() {
  this.autorun(function() {
    var fr = FlowRouter.getQueryParam('fr')
    Session.set('framework', fr)
  })
})

Template.container.onRendered(function() {
  Session.set('tt', true)
  Session.set('chosenTemplates', '')

  window.onmessage = function(e) {
    if (e.origin.indexOf('localhost') === -1 && e.origin.indexOf('orobo.go.ro') === -1)
      return;
    if(e.data.indexOf('framework') === 2) {
      var payload = JSON.parse(e.data);
      if(payload)
        Session.set('framework', payload.framework)
    }
    if(e.data.indexOf('out') === 2) {
      var payload = JSON.parse(e.data);
      if(payload)
        Session.set('chosenTemplates', payload.out)
    }
  }

  // removes templates from drag zone
  document.body.addEventListener('click', function(e) {
    if(e.target.getAttribute('id') == '__blaze-root')
      Session.set('chosenTemplates', '')
  })
})


Template.Contain.onRendered(function() {
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
      var pg = Pages.findOne({name: page, app: FlowRouter.getParam('app')})
      console.log(pg)
      if(pg)
        Session.set('page', pg._id)
    }
  })
})

Template.Contain.helpers({

  containers: function(){
    var containers = Containers.find({page: Session.get('page')},{sort:{ordering:1}}).fetch()
    containers.forEach(function(c) {
      c.compile()
    })

    return containers
  }
});

Template.Contain.events({
  "mouseenter .editable": function(ev, inst){
    var div = $(ev.target)
    var id_part = div[0].id.substring(2)
    div.append('<div class="ed"><button class="sh-btn upI" id="u_'+id_part +'">&lt;</button><button class="sh-btn optI" id="o_'+id_part +'">opt</button><button class="sh-btn delI" id="x_'+id_part +'">-</button><button class="sh-btn downI" id="d_'+id_part +'">&gt;</button><button class="sh-btn cloneI" id="c_'+id_part +'">=</button><button class="sh-btn htmlI" id="h_'+id_part +'"><></button></div>')
  },
  "mouseleave .editable": function(ev, inst){
    var div = ev.target
    var node = $(".ed", div).remove()
    //console.log(node)
  },
   "click .delI": function(ev, inst){
    var instanceId = this._id
    Meteor.call("deleteInstance" , instanceId)
  },
  "click .optI":function(ev, inst){
    do_options(this._id)
  },
  "click .upI":function(ev, inst){
    //left / down ordering
    var instanceId = this._id
    Meteor.call("moveInstance" , instanceId, -1, this.container)

  },
  "click .cloneI": function(ev, inst) {
    var obj = Object.assign({}, this);
    delete obj._id;
    Meteor.call("insertInstance", obj);
  },
  "click .downI":function(ev, inst){
    //right, up ordering
    var instanceId = this._id
    Meteor.call("moveInstance" , instanceId, 1, this.container)
  },
  "click .htmlI": function(ev, inst) {
    window.open('/edit/'+ this.templateId + '?fr=hNyLNW3sAFSuwPR8L', '_blank');
  },
  "click .delT":function(ev, inst){
    var templId = this._id
    Meteor.call("deleteContainer" , templId)
  },
  "click .upT":function(ev, inst){
    //left / down ordering
    var templId = this._id
    Meteor.call("moveContainer" , templId, -1)
  },
  "click .downT":function(ev, inst){
    //right, up ordering
    var templId = this._id
    Meteor.call("moveContainer" , templId, 1)
  },
  "click .cloneT": function(ev, inst){
    Meteor.call('cloneContainer', this._id)
  },
})

Template.buttons.helpers({
  appname: function() {
    return FlowRouter.getParam('app')
  },
  page: function() {
    return FlowRouter.getParam('page')
  },
  pagelinks: function() {
    return Pages.find({app: FlowRouter.getParam('app')}, {fields: {name: 1}}).fetch()
  },
  fr: function() {
    return Session.get('framework')
  }
})

Template.buttons.events({
  "click #addCont": function(ev, inst){
    var p = Session.get('page')
    console.log(p)
    if(p)
      Meteor.call("insertContainer" , {"name":"templ_"+makeid(3),"page":p,"stage":"st"})
    else
      Meteor.call("insertContainer" , {"name":"templ_"+makeid(3),"stage":"st"}, FlowRouter.getParam('page'), FlowRouter.getParam('app'))
  },
  "click #addContP": function(ev, inst){
     Session.set('tt', "container")
    $("#modal").modal("show")
  }
})

Template.templateMenu.helpers({
  chosenTemplates: function() {
    return Session.get('chosenTemplates')
  }
})