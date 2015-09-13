Templates = new Mongo.Collection("templates");
Instances = new Mongo.Collection("instances");
Containers = new Mongo.Collection("containers");
Stages = new Mongo.Collection("stages");
Pages = new Mongo.Collection("pages");
Frameworks = new Mongo.Collection("frameworks")
Temp = new Mongo.Collection('temp')


var Schemas = {};

Schemas.Framework = new SimpleSchema({
    name: {
        type: String,
        label: "Name",

    },
    root: {
        type: String,
        label: "Template Node"
    },
    css: {
        type: [String],
        label: "CSS Paths"
    },
    js: {
        type: [String],
        label: "JS Paths"
    }
})

Schemas.Page = new SimpleSchema({
    app: {
        type: String,
        label: "App"
    },
    name: {
        type: String,
        label: "Name"
    }
})

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
        optional:true
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
    page: {
        type: String,
        label: "Page"
    },
    ordering: {
        type: Number,
        label: "Ordering",
        max:100,
        optional:true
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
Pages.attachSchema(Schemas.Page);
Frameworks.attachSchema(Schemas.Framework)