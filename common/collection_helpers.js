compileTemplate = function(template) {
	if(template.content) {
		var design={},data={}

	  for (i in template.design) {
	    design[template.design[i].name] = template.design[i].value
	    if (template.design[i].value.indexOf("|") !== -1){
	    	design[template.design[i].name] = template.design[i].value.split("|")
	    	if (design[template.design[i].name][0] !== -1){
	    		for (ii in design[template.design[i].name]){
	    			design[template.design[i].name][ii] = design[template.design[i].name][ii].split(":")
	    		}
	    	}
	    }
	  }
	  for (i in template.data) {
	    data[template.data[i].name] = template.data[i].value
	    if (template.data[i].value.indexOf("|") !== -1){
	    	data[template.data[i].name] = template.data[i].value.split("|")
	    	if (data[template.data[i].name][0] !== -1){
	    		for (ii in data[template.data[i].name]){
	    			data[template.data[i].name][ii] = data[template.data[i].name][ii].split(":")
	    		}
	    	}
	    }
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