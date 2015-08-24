compileTemplate = function(template) {
	if(template.content) {
		var design={},data={}

	  for (i in template.design) {
	    design[template.design[i].name] = template.design[i].value
	  }
	  for (i in template.data) {
	    data[template.data[i].name] = template.data[i].value
	  }
	  return StringTemplate.compile(template.content, {design:design, data: data})
	}
}

Templates.helpers({
	compile: function() {
		this.compiled = compileTemplate(this);
	}
})

Instances.helpers({
	compile: function() {
		this.compiled = compileTemplate(this);
	}
})

Containers.helpers({
	compile: function() {
		var self = this
		self.instances = []
		self.compiled = ''
		instances = Instances.find({container: this._id},{sort:{ordering:1}}).fetch();
    instances.forEach(function(ins){
      ins.compile() 
      self.instances.push(ins)
      self.compiled += ins.compiled
    })
	}
})