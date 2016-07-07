Template.listTemplatesForm.helpers({
	parentName: function() {
		var parent = Templates.findOne(this.parent)
		if(parent)
			return parent.name
	},
	template: function() {
		return Templates.find().fetch()
	},
	compiled: function(){
		var doc = this
		doc.compile()
		return doc.compiled
	}
})

Template.listTemplatesForm.events({
	'click .rowsel': function(ev, inst) {
		Session.set("templId", this._id)
		$("#modalForm").modal("show")
	}
})

Template.editTemplate.onCreated(function() {
	Session.set("templId", FlowRouter.getParam('template'));
})


Template.updateTemplateForm.helpers({
	compiled: function(){
		var templId = Session.get("templId")
		var doc = Templates.findOne(templId)
		if(doc){
			doc.compile()
			return doc.compiled
		}
	},
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
	},
	json: function(){
		var templId = Session.get("templId")
		if(templId){
			var doc = Templates.findOne(templId)
			return JSON.stringify(doc);
		}
	},
	doc: function(){
		var templId = Session.get("templId")
		if(templId){
			var doc = Templates.findOne(templId)
			return doc
		}
	}
})