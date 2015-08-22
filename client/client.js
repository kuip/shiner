Meteor.startup(function() {
  AutoForm.setDefaultTemplate("semanticUI");
});


Template.insertTemplateForm.onRendered(function(){
    //console.log("done")
    //console.log(StringTemplate.compile("mare belea {{ceva}}", {ceva: "altceva"}));
    //$('#toc').sidebar('setting', 'transition', 'slide along').toggle().toggle()
    var out =""
    Templates.find({content: 'abcd', note:{ $exists: true}}).forEach(function(template){
    	//console.log(template.name)
    	//console.log(template.params)
    	out = out+ StringTemplate.compile(template.content, {design:template.design, data: template.data});
    })
    //console.log(out)
    $("#ins").html(out)

    

});

Template.insertTemplateForm.helpers({
  options: function () {
    var out = Templates.find({}, {fields: {name: 1, _id: 1}}).fetch()
    out.forEach(function(template){
        template.label  = template.name
        template.value = template._id
    });
    console.log(out)
    return out

    /*[
      {
        optgroup: "Fun Years",
        options: [
          {label: "2014", value: 2014},
          {label: "2013", value: 2013},
          {label: "2012", value: 2012}
        ]
      },
      {
        optgroup: "Boring Years",
        options: [
          {label: "2011", value: 2011},
          {label: "2010", value: 2010},
          {label: "2009", value: 2009}
        ]
      }
    ];*/
  }
})

Template.bodyCont.onCreated(function(){
  this.tt = new ReactiveVar(true)
  console.log(this.tt)
})

/*
Template.bodyCont.onRendered(function(){
  this.tt = new ReactiveVar(true)
})
*/

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
  },
  html_out: function(){
    var out ="",templIn="";
    var cont = Containers.find({app: "app 1"},{sort:{ordering:1}}).fetch();
    var instances;

    cont.forEach(function(contain){
      //out = out+'\n\n<template name="'+contain.name+'">';
      templIn = templIn+"\n{{> "+ contain.name+"}} ";
      instances = Instances.find({container: contain._id},{sort:{ordering:1}}).fetch();
      instances.forEach(function(ins){
        out = out+"\n"+ins.content;
      })
      //out = out+'</template> <!-- '+contain.name+' -->';
    })
    //out = templIn + out;
    console.log(out)
    return StringTemplate.compile(out, {design:[], data: []});

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
    //alert("source")
    $("#preview_modal").modal("show")
  }

})


Template.listTemplates.helpers({
  templates: function(){
    //return Templates.find({}).fetch()
    return buildMap("GnomJs47NRMWixR9D")
  },


});

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


Template.listTemplates.events({
  "click .item": function(ev , inst){
    console.log(ev,inst)
    ev.stopPropagation();
    seeThem(ev.target.id)

    $('#secSide')
    .sidebar('show')
  }
})


function buildMap(id){
  //var out = Templates.findOne(id)
  var out = Templates.find({_id:id}, {limit:1}).fetch()[0]
  var tlist = Templates.find({parent: id,content: undefined, note:{ $exists: false}}).fetch()
  //var out = {}
  out.hasChildren =false;
  out.children =[]
  tlist.forEach(function(tem){
    console.log(tem._id)
    out.children.push(buildMap(tem._id))
  })
  console.log(out.children.length)
  if (out.children.length > 0) out.hasChildren =true;
  console.log(out)
  return out;
}


Template.visiTemplates.helpers({


})

Template.insertTemplateForm.onRendered(function(){
  
    




})

function makeid(len)
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < len; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

function reform(objArray){
  var out ={};

  for(item in objArray){
    out[objArray[item].name] = objArray[item].value;
  }
  console.log(out)
  return out;
}


    var seeThem = function(id){
      var out =""
      var tlist = Templates.find({parent: id}).fetch()  //,content: 'abcd', note:{ $exists: true}
      tlist.forEach(function(tem){
        out = out+ "<div class='item'><div id='"+tem._id+"' class='draggable drag-drop'>"+StringTemplate.compile(tem.content, {design:reform(tem.design), data: reform(tem.data)})+"</div></div>"
      })
      $("#listSee").html(out)
    }

function do_options(id){
  var instance = Instances.findOne(id)
  //console.log(id)
  var ctrl = {},choices={},last
  container = $('#model-container');
  var datGUI = new dat.GUI({autoPlace:false});
  //var design = datGUI.addFolder("Design");
  //var data = datGUI.addFolder("Data");
  var guiControls = new function() {
    //this.design = {}
    //this.data = {}
    for (key in instance.design){
      this["design_"+instance.design[key].name] = instance.design[key].value
      choices["design_"+instance.design[key].name] =instance.design[key].choices
    }
    for (key in instance.data){
      this["data_"+instance.data[key].name] = instance.data[key].value 
      choices["data_"+instance.data[key].name] = instance.data[key].choices

    }
    this.content = instance.content
  }
  for (key in guiControls){
    //console.log(key)
    //console.log(choices[key])
    if (choices[key]) {
      ctrl[key] = datGUI.add(guiControls, key, choices[key].split("|"))
    } else {
      ctrl[key] = datGUI.add(guiControls, key)
    }
    //last = key

    ctrl[key].onFinishChange(function(value) {
      // Fires when a controller loses focus.
      //console.log(instance)
      //alert("The new value for "+this.property+" is " + value);
      var fld = this.property.split("_")
      var obj ={},obj2 = JSON.parse(JSON.stringify(instance[fld[0]]));
      //obj[fld[0]]=value;
      if (fld[0] == "design" || fld[0] == "data"){
        for (key in obj2){
          if (obj2[key].name == fld[1]) obj2[key].value = value
        }
        obj[fld[0]] = obj2
      } else {
        obj[fld[0]] = value
      }
      //if (fld[1]) obj[fld[0]][fld[1]] = value
      //console.log(obj)
      Meteor.call("modInstance" , instance._id, obj)
    });
    
  }

    //data.show()
    //design.show()
    //this.content = instance.content

  
  console.log(guiControls)

  

  //ctrl.content = datGUI.add(guiControls,"content")

  container.html(datGUI.domElement);
}



