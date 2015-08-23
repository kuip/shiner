Template.bodyCont.onCreated(function(){
  this.tt = new ReactiveVar(true)
  console.log(this.tt)
})


Template.bodyCont.helpers({
  tt: function(){
    return Template.instance().tt.get()
  },
  source: function(){
    var out ="";
    var cont = Containers.find({app: "app 1"},{sort:{ordering:1}}).fetch();
    var instances,design,data;

    cont.forEach(function(contain){
      out = out+'\n\n<template name="'+contain.name+'">';
      instances = Instances.find({container: contain._id},{sort:{ordering:1}}).fetch();
      instances.forEach(function(ins){
        out = out+"\n"+ins.content;
      })
      out = out+'</template> <!-- '+contain.name+' -->';
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
    //alert("addTT")
    //inst.tt.set(false)
    Meteor.call("insertContainer" , {"name":"templ_"+makeid(3),"app":"app 1","stage":"st"})
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
    //alert("source")
    
    var templId = ev.target.id.substring(2)
    Meteor.call("deleteContainer" , templId)
  },
  "click .upT":function(ev, inst){
    //alert("source")
    var templId = ev.target.id.substring(2)
    Meteor.call("moveContainer" , templId, 2)
  },
  "click .downT":function(ev, inst){
    //alert("source")
    
    var templId = ev.target.id.substring(2)
    Meteor.call("moveContainer" , templId, -2)
    //alert(templId)

  },
  "mouseenter .editable": function(ev, inst){
    var div = $(ev.target)
    console.log(div)
    var id_part = div[0].id.substring(2)
    div.append('<div class="ed"><button class="item mini circular ui icon button blue upI"><i class="icon small arrow left" id="u_'+id_part +'"></i></button><button class="item mini circular ui icon button blue optI"><i class="icon small options" id="o_'+id_part +'"></i></button><button class="item mini circular ui icon button red delI"><i class="icon small minus" id="x_'+id_part +'"></i></button><button class="item mini circular ui icon button blue downI"><i class="icon small arrow right" id="d_'+id_part +'"></i></button></div>')
  },
  "mouseleave .editable": function(ev, inst){
    var div = ev.target
    var node = $(".ed", div).remove()
    //console.log(node)

  },
  "click .delI": function(ev, inst){
    //alert("delI")
    var templId = ev.target.id.substring(2)
    Meteor.call("deleteInstance" , templId)
  },
  "click .optI":function(ev, inst){
    //alert("source")
    
    do_options(ev.target.id.substring(2))
    //alert(templId)

  },
  "click .upI":function(ev, inst){
    //alert("upI")
    
    var templId = ev.target.id.substring(2)
    console.log(templId)
    Meteor.call("moveInstance" , templId, 2)

  },
  "click .downI":function(ev, inst){
    var templId = ev.target.id.substring(2)
    console.log(ev.target)
    Meteor.call("moveInstance" , templId, -2)

  },
  "click #preview":function(ev, inst){
    window.open('/preview', '_blank')
  },
  "click #editForm": function(ev, inst) {
    window.open('/form', '_blank')
  }
})

Template.Contain.helpers({

  containers: function(){
    //return Templates.find({}).fetch()
    var instances,design={},data={}, cont = Containers.find({app: "app 1"},{sort:{ordering:1}}).fetch();
    cont.forEach(function(contain){
      contain.instances=[];
      instances =Instances.find({container: contain._id},{sort:{ordering:1}}).fetch();
      instances.forEach(function(ins){
        for (i in ins.design) {
          design[ins.design[i].name] = ins.design[i].value  // "design."+ins.design[i].name  //
        }
        for (i in ins.data) {
          data[ins.data[i].name] = ins.data[i].value  // "data."+ins.data[i].name //
        }
        ins.compiled = StringTemplate.compile(ins.content, {design:design, data: data})
        contain.instances.push(ins);
      })
      
    })
    return cont
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