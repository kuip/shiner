

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
        index: true,
        unique: true,
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
    templateId:{
        type: String,
        label: "Template",
        max: 40
    },
    top:{
        type: String,
        label: "Top",
        max: 10
    },
    left:{
        type: String,
        label: "Left",
        max: 10
    },
    bottom:{
        type: String,
        label: "Bottom",
        max: 10
    },
    right:{
        type: String,
        label: "Right",
        max: 10
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
        Containers.insert(par)
    },
    insertInstance: function(par){
        Instances.insert(par)
    },

})


