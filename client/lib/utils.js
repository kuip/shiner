setIFrame = function(obj) {
  console.log(obj)
  var win = document.getElementsByTagName('iframe')[0].contentWindow;
  win.postMessage(JSON.stringify(obj), "*");
}

makeid = function makeid(len)
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < len; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

buildMap = function buildMap(id){
  var out = Templates.findOne(id)
  if(out){
    var tlist = Templates.find({parent: id,content: undefined, note:{ $exists: false}}).fetch()
    //var out = {}
    out.hasChildren =false;
    out.children =[]
    tlist.forEach(function(tem){
      out.children.push(buildMap(tem._id))
    })

    if (out.children.length > 0) out.hasChildren =true;
    //console.log(out)
    return out;
  }
}


seeThem = function(id){
  var out =""
  var tlist = Templates.find({parent: id}).fetch()  //,content: 'abcd', note:{ $exists: true}
  tlist.forEach(function(temp){
    temp.compile()
    out += "<div class='item'><div id='"+temp._id+"' class='draggable drag-drop template'>" + temp.compiled + "</div></div>"
  })
  setIFrame({out: out})
}


do_options = function do_options(id){
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

  
  //console.log(guiControls)

  

  //ctrl.content = datGUI.add(guiControls,"content")

  container.html(datGUI.domElement);
}