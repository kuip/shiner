Template.preview.onRendered(function() {
	$("head").append('<script type="application/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.0.8/semantic.min.js">');
	$("head").append('<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.0.8/semantic.min.css">');
})

Template.preview.helpers({
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