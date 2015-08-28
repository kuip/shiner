Template.insertTemplateForm.onRendered(function(){
    //console.log("done")
    //console.log(StringTemplate.compile("mare belea {{ceva}}", {ceva: "altceva"}));
    //$('#toc').sidebar('setting', 'transition', 'slide along').toggle().toggle()
    var out =""
    Templates.find({content: 'abcd', note:{ $exists: true}}).forEach(function(template){
      template.compile()
    	out += template.compiled
    })
    //console.log(out)
    $("#ins").html(out)
});

Template.insertTemplateForm.helpers({
  options: function () {
    var out = [],i=0;
    var templs= Templates.find({}, {fields: {name: 1, _id: 1,content:1}}).fetch()
    templs.forEach(function(template){
        if (typeof template.content === "undefined") {
          out[i]={}
          out[i].label  = template.name
          out[i].value = template._id
          i++
        }
    });

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