Template.bodyCont.onCreated(function(){
  Session.set('tt', true)
  Session.set('framework', 'hNyLNW3sAFSuwPR8L') //semantic

  Session.set('appQuery', {});
  this.autorun(function() {
    var app = FlowRouter.getParam('app');
    if(app)
      Session.set('appQuery', {app: app})
  })
})

delta = 10

Template.bodyCont.onRendered(function(){
  var offset = 150
  Session.set("window", {w: window.innerWidth, h: window.innerHeight, iw: window.innerWidth - offset - delta, offset: offset})
  $("#splitter").zinoSplitter({
        panes: [
            {size: offset}, 
            { region: "east"}
        ],
        resize: function (ev, ui) {
          var win = Session.get('window')
          win.offset = $('.zui-splitter-separator').position().left
          console.log(win.offset)
          win.iw = win.w - win.offset - delta
          Session.set("window", win)
        }
    });

  $(window).resize(function(evt) {
    var win = Session.get('window')
    win.w = window.innerWidth
    win.h = window.innerHeight
    Session.set("window", win);
  });

})


Template.bodyCont.helpers({
  appname: function() {
    var app = Session.get('appQuery')
    if(app)
      return app.app
  },
  page: function() {
    return FlowRouter.getParam('page')
  },
  iwidth: function() {
    var win = Session.get('window')
    if(win)
      return win.iw
  },
  iheight: function() {
    var win = Session.get('window')
    if(win)
      return win.h
  }
})

Template.modaladd.helpers({
  tt: function(){
    return Session.get('tt')
  },
  equals: function(v1, v2){
    if (v1 == v2) return true;
    return false;
  }
})

Template.listFrameworks.helpers({
  frameworks: function(){
    var framew = Frameworks.find({}).fetch()
    if(framew.length > 0) {
      var frames = document.getElementsByTagName('iframe')
      if(frames.length > 0) {
        var obj = {
           framework: $('#frameSel').val()
        };
        setIFrame(obj)
      }
      Session.set('frameworkRoot', framew[0].root)
    }
    return framew
  }
})

Template.listFrameworks.events({
  "change #frameSel": function(ev, inst){
    var obj = {
       framework: inst.$('#frameSel').val()
    };
   setIFrame(obj)

    Session.set('frameworkRoot', inst.$(ev.currentTarget).find('option:selected').data('root'))
  }
})

Template.bodyCont.events({
  "click #addTT": function(ev, inst){
    Session.set('tt', "template")
    $("#modal").modal("show")
  },
  "click #addF": function(ev, inst){
    Session.set('tt', "framework")
    $("#modal").modal("show")
  },
  "click #editForm": function(ev, inst) {
    window.open('/form', '_blank')
  }
})



Template.listTemplates.helpers({
  templates: function(){
    return buildMap(Session.get('frameworkRoot'))
    //return buildMap("GnomJs47NRMWixR9D")
  },


});


Template.listTemplates.events({
  "click .item": function(ev , inst){
    ev.stopPropagation();
    seeThem(ev.target.id)

    $('#secSide')
    .sidebar('show')
  }
})