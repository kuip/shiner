

var Schemas = {};

Schemas.GUIopts = new SimpleSchema({
    name: {
        type: String,
        label: "Name",
        max: 50
    },
    value: {
        type: String,
        label: "Value",
        max: 5000,
        optional:true
    },
    choices: {
        type: String,
        label: "Choices",
        max: 5500,
        optional:true
    },

})

Schemas.Template = new SimpleSchema({
    parent: {
        type: String,
        label: "Parent",
        max: 200
    },
    name: {
        type: String,
        label: "Name",
        index: false,
        unique: false,
        max: 200
    },
    content: {
        type: String,
        label: "Content",
        optional:true,
        max: 1000
    },
    visible: {
        type: String,
        optional:true
    },
    isContainer: {
        type: Boolean,
        label: "Is it a container?",
        defaultValue: false
    },
    design:{
        type: [Schemas.GUIopts],
        blackbox: true,
        optional:true
    },
    data:{
        type: [Schemas.GUIopts],
        blackbox: true,
        optional: true
    }

    /*,
    outhtml:{
        type:String,
        autoValue: function() {

            return ""
        },
        denyInsert: true,
        optional: true
    },
    outsvg: {
        type:String,
        autoValue: function() {

            return ""
        },
        denyInsert: true,
        optional: true
    } */
});

Schemas.Instance = new SimpleSchema({
    container:{
        type: String,
        label: "Container",
        max: 40
    },
    ordering: {
        type: Number,
        label: "Ordering",
        max:100,
        optional:true
    },
    templateId:{
        type: String,
        label: "Template",
        max: 40
    },
    top:{
        type: String,
        label: "Top",
        max: 10,
        optional:true
    },
    left:{
        type: String,
        label: "Left",
        max: 10,
        optional:true
    },
    bottom:{
        type: String,
        label: "Bottom",
        max: 10,
        optional:true
    },
    right:{
        type: String,
        label: "Right",
        max: 10,
        optional:true
    },
    design:{
        type: [Schemas.GUIopts],
        blackbox: true,
        optional:true
    },
    data:{
        type: [Schemas.GUIopts],
        blackbox: true,
        optional: true
    },
    content: {
        type: String,
        blackbox: true,
        optional:true
    }
})

Schemas.Container = new SimpleSchema({
    stage:{
        type: String,
        label: "Stage",
        max: 40
    },
    ordering: {
        type: Number,
        label: "Ordering",
        max:100,
        optional:true
    },
    app: {
        type: String,
        label: "App"
    },
    name: {
        type: String,
        label: "Name",
        max: 200
    },
    instances: {
        type: [String],
        label: "Instances",
        optional: true,
        denyInsert: true
    },
    generated: {
        type: String,
        label: "Generated",
        denyInsert: true,
        optional: true
    }
})

Schemas.Stage = new SimpleSchema({
    width:{
        type: String,
        label: "Width",
        max: 10
    },
    height:{
        type: String,
        label: "Height",
        max: 10
    },
    name:{
        type: String,
        label: "Name"
    }
})


Templates.attachSchema(Schemas.Template);
Instances.attachSchema(Schemas.Instance);
Containers.attachSchema(Schemas.Container);
Stages.attachSchema(Schemas.Stage);

Meteor.methods({
    insertTemplate: function(par){
        Templates.insert(par)
    },
    insertContainer: function(par){
        var appId = par.app
        var insts  = Containers.find({app: appId}).count()
        //alert(insts)

        par.ordering = insts +1;
        Containers.insert(par)
    },
    moveContainer: function(id,by){
        var next;
        var cont = Containers.findOne(id)
        if (by <0){
            next = Containers.find({ordering: {$lt: cont.ordering}},{limit:1}).fetch()
        }else{
            next = Containers.find({ordering: {$gt: cont.ordering}},{limit:1}).fetch()
        }
        var ord = next.ordering
        Containers.update({_id:next._id},{$set:{ordering:cont.ordering}})
        Containers.update({_id:cont._id},{$set:{ordering:ord}})
    },
    deleteContainer: function(id){
        var insts = Instances.find({templateId: id}).fetch()
        insts.forEach(function(inst){
            Instances.remove(inst._id)
        })
        Containers.remove(id)
    },
    insertInstance: function(par){
        var templateId = par.container
        var insts  = Instances.find({container: templateId}).count()
        //alert(insts)

        par.ordering = insts +1;
        //console.log(par)
        Instances.insert(par)
    },
    deleteInstance: function(id){
        Instances.remove(id)
    },
    modInstance: function(id,obj){
        Instances.update({_id:id},{$set:obj})
    },
    moveInstance: function(id,by){
        var next;
        var cont = Instances.findOne(id)
        if (by <0){
            next = Instances.find({ordering: {$lt: cont.ordering}},{limit:1}).fetch()
        }else{
            next = Instances.find({ordering: {$gt: cont.ordering}},{limit:1}).fetch()
        }
        var ord = next.ordering
        Instances.update({_id:next._id},{$set:{ordering:cont.ordering}})
        Instances.update({_id:cont._id},{$set:{ordering:ord}})
    }

})



