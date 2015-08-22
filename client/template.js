

Template.updateTemplateForm.helpers({
	compiled: function(){
		var templId = Session.get("templId")
		var doc = Templates.findOne(templId)
		return StringTemplate.compile(doc.content, {design:doc.design, data: doc.data});
	},
	json: function(){
		var Session.get("templId")
		var doc = Templates.findOne(templId)
		return JSON.stringify(doc);
	},
	doc: function(){
		var Session.get("templId")
		var doc = Templates.findOne(templId)
		return doc
	}
})