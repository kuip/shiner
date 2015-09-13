compileHelpers = function(data, help) {
	if(!help)
		help = {}
	for (i in data) {
    help[data[i].name] = data[i].value
    if (data[i].value.indexOf("|") !== -1){
    	help[data[i].name] = data[i].value.split("|")
    	if (help[data[i].name][0].indexOf(":") !== -1 && help[data[i].name][0].indexOf("http") === -1){
    		for (ii in help[data[i].name]){
    			help[data[i].name][ii] = help[data[i].name][ii].split(":")
    		}
    	}
    }
    else if (data[i].value.indexOf(":") !== -1 && data[i].value.indexOf("http") === -1){
    	help[data[i].name] = data[i].value.split(":")
    }
  }

  return help
}

compileTemplate = function(template) {
	if(!template.content)
		return

	var design={},data={}

	design = compileHelpers(template.design)
	data = compileHelpers(template.data)

  return StringTemplate.compile(template.content, {design:design, data: data})
}

McompileTemplate = function(template) {
	if(!template.content)
		return

	var design={},data={},values,
		id = 'i'+template._id

	design = compileHelpers(template.design)
	data = compileHelpers(template.data)
	values = 'Template.'+ id +'.helpers({\n'
		+ '	data_'+ id +': function(){\n'
		+ '		return '
		+ JSON.stringify(data)
		+ '\n	},\n'
		+ '	design_'+ id +': function(){\n'
		+ '		return '
		+ JSON.stringify(design)
		+ '\n	}\n'
		+ '})'
	
	template.content = template.content.replace(/data\./g, 'data_'+ id +'.')
	template.content = template.content.replace(/design\./g, 'design_'+ id +'.')

	return {
		content: '<template name="' + id + '">\n' + template.content + '\n</template>',
		values: values,
		id: id
	}
}

JcompileTemplate = function(template) {
	if(!template.content)
		return

	var design={},data={}

	design = compileHelpers(template.design)
	data = compileHelpers(template.data)

	return {
		//html: '<template name="' + template._id + '">' + template.content + '</template>',
		content: template.content,
		values: {
			design:design,
			data: data
		},
		id: template._id
	}
}

Templates.helpers({
	compile: function() {
		this.compiled = compileTemplate(this)
	},
	jcompile: function() {
		this.jcompiled = JcompileTemplate(this)
	},
	mcompile: function() {
		this.mcompiled = McompileTemplate(this)
	}
})

Instances.helpers({
	compile: function() {
		this.compiled = compileTemplate(this)
	},
	jcompile: function() {
		this.jcompiled = JcompileTemplate(this)
	},
	mcompile: function() {
		this.mcompiled = McompileTemplate(this)
	}
})

Containers.helpers({
	compile: function() {
		var self = this
		self.instances = []
		self.compiled = ''
		instances = Instances.find({container: this._id},{sort:{ordering:1}}).fetch()
    instances.forEach(function(ins){
      ins.compile() 
      self.instances.push(ins)
      self.compiled += ins.compiled
    })
	},
	jcompile: function() {
		var self = this
		self.jinstances = []
		instances = Instances.find({container: this._id},{sort:{ordering:1}}).fetch()
    instances.forEach(function(ins){
      ins.jcompile() 
      self.jinstances.push(ins.jcompiled)
    })
	},
	mcompile: function() {
		var self = this
		self.minstances = []
		self.integration = ''
		self.content = ''
		self.values = ''
		instances = Instances.find({container: this._id},{sort:{ordering:1}}).fetch()
    instances.forEach(function(ins){
      ins.mcompile() 
      self.minstances.push(ins.mcompiled)
      self.content += ins.mcompiled.content + '\n\n'
      self.values += ins.mcompiled.values + '\n\n'
      self.integration += '{{> i' + ins._id + '}}\n'
    })
	}
})

Pages.helpers({
	compile: function() {
		var self = this
		self.containers = []
		self.compiled = ''
		var containers = Containers.find({page: this._id},{sort:{ordering:1}}).fetch()
		containers.forEach(function(cont) {
			cont.compile() 
      self.containers.push(cont)
      self.compiled += cont.compiled
		})
	},
	jcompile: function() {
		var self = this
		self.jcontainers = []
		var containers = Containers.find({page: this._id},{sort:{ordering:1}}).fetch()
		containers.forEach(function(cont) {
      cont.jcompile() 
      self.jcontainers = self.jcontainers.concat(cont.jinstances)
    })
    self.jcompiled = JSON.stringify(self.jcontainers)
	},
	mcompile: function() {
		var self = this
		self.mcontainers = []
		self.content = ''
		self.values = ''
		self.integration = ''
		var containers = Containers.find({page: this._id},{sort:{ordering:1}}).fetch()
    containers.forEach(function(cont) {
      cont.mcompile() 
      self.mcontainers = self.mcontainers.concat(cont.minstances)
      self.content += cont.content + '\n\n'
      self.values += cont.values + '\n\n'
      self.integration += cont.integration
    })
	}
})