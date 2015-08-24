Template.bodyCont.onCreated(function(){
  this.tt = new ReactiveVar(true)
  console.log(this.tt)
})


Template.bodyCont.helpers({
  tt: function(){
    return Template.instance().tt.get()
  },
  source: function(){
    var out = ''
    var containers = Containers.find(Session.get('appQuery'),{sort:{ordering:1}}).fetch()
    containers.forEach(function(c) {
      c.compile()
      out += c.compiled
    })

    return out
  }
})

Template.bodyCont.events({
  "click #addTT": function(ev, inst){
    //alert("addTT")
    //Meteor.call("insertTemplate" , par)
    console.log(inst.tt)
    inst.tt.set(true)
    $("#modal").modal("show")
  },
  "click #addCont": function(ev, inst){
    var app = Session.get('appQuery')
    if(app.app)
      Meteor.call("insertContainer" , {"name":"templ_"+makeid(3),"app":app.app,"stage":"st"})
  },
  "click #addContP": function(ev, inst){
    //alert("addTT")
    inst.tt.set(false)
    $("#modal").modal("show")
  },
  "click #sourcem":function(ev, inst){
    //alert("source")
    $("#code").modal("show")
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
  "mouseenter .editable": function(ev, inst){
    var div = $(ev.target)
    var id_part = div[0].id.substring(2)
    div.append('<div class="ed"><button class="item mini circular ui icon button blue upI"><i class="icon small arrow left" id="u_'+id_part +'"></i></button><button class="item mini circular ui icon button blue optI"><i class="icon small options" id="o_'+id_part +'"></i></button><button class="item mini circular ui icon button red delI"><i class="icon small minus" id="x_'+id_part +'"></i></button><button class="item mini circular ui icon button blue downI"><i class="icon small arrow right" id="d_'+id_part +'"></i></button></div>')
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
  "click .downI":function(ev, inst){
    //right, up ordering
    var instanceId = this._id
    Meteor.call("moveInstance" , instanceId, 1, this.container)

  },
  "click #preview":function(ev, inst){
    window.open('/preview', '_blank')
  },
  "click #editForm": function(ev, inst) {
    window.open('/form', '_blank')
  }
})

Template.Contain.onRendered(function() {
  Session.set('appQuery', {});
  this.autorun(function() {
    var app = FlowRouter.getParam('app');
    if(app)
      Session.set('appQuery', {app: app})
  })
})

Template.Contain.helpers({

  containers: function(){
    var containers = Containers.find(Session.get('appQuery'),{sort:{ordering:1}}).fetch()
    containers.forEach(function(c) {
      c.compile()
    })

    return containers
  }
});

Template.listTemplates.helpers({
  templates: function(){
    //return Templates.find({}).fetch()
    return buildMap("GnomJs47NRMWixR9D")
  },


});


Template.listTemplates.events({
  "click .item": function(ev , inst){
    console.log(ev,inst)
    ev.stopPropagation();
    seeThem(ev.target.id)

    $('#secSide')
    .sidebar('show')
  }
})