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

    var ctrl = {}
    container = document.getElementById('model-container');
 var guiControls = new function() {
     this.axial = 900;
     this.coronal = 200;
     this.sagittal = 400;
     this.content = "ceva"
     this.text = "cev"
 }

    var datGUI = new dat.GUI({autoPlace:false});
    var design = datGUI.addFolder("Design");
    ctrl.axial = design.add(guiControls, 'axial', 0, 1701);
    ctrl.coronal = design.add(guiControls, 'coronal', 0, 569);
    ctrl.sagittal = design.add(guiControls, 'sagittal', 0, 999);
    //design.show()
    var data = datGUI.addFolder("Data");
    ctrl.dat = design.add(guiControls, 'text', 0, 1701);
    //data.show()
    ctrl.content = dat.GUI.add(guiControls,"content")

    container.appendChild(datGUI.domElement);

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

Template.bodyCont.events({
  "click #addTT": function(ev, inst){
    //alert("addTT")
    //Meteor.call("insertTemplate" , par)
    $("#modal").modal("show")
  },
  "click #addCont": function(ev, inst){
    //alert("addTT")
    Meteor.call("insertContainer" , {"name":"templ_"+makeid(3),"app":"app 1","stage":"st"})
  },
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
    var cont = Containers.find({app: "app 1"}).fetch();
    cont.forEach(function(contain){
      contain.instances = Instances.find({container: contain._id}).fetch();
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



