Template.listTemplatesForm.helpers({
	template: function() {
		return Templates.find().fetch()
	},
	compiled: function(){
		var doc = this
		if(doc.content)
			return StringTemplate.compile(doc.content, {design:doc.design, data: doc.data});
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
		if(templId){
			var doc = Templates.findOne(templId)
			if(doc && doc.content)
				return StringTemplate.compile(doc.content, {design:doc.design, data: doc.data});
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