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


Template.updateTemplateForm.helpers({
	compiled: function(){
		var templId = Session.get("templId")
		var doc = Templates.findOne(templId)
		if(doc){
			doc.compile()
			return doc.compiled
		}
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