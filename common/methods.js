Meteor.methods({
    insertTemplate: function(par){
        check(par, Object)

        Templates.insert(par)
    },
    insertContainer: function(par, pagename, appname){
        check(par, Object)
        console.log(par)
        console.log(pagename)
        console.log(appname)
        var pageId

        if(pagename && appname) {
            check(pagename, String)
            pageId = Pages.insert({name: pagename, app: appname})
            console.log(pageId)
            par.page = pageId
        }

        pageId = par.page
        var insts  = Containers.find({page: pageId}).count()
        //alert(insts)

        par.ordering = insts +1
        console.log(par)
        Containers.insert(par)
    },
    moveContainer: function(id,by){
        check(id, String)
        check(by, Number)

        var next;
        var cont = Containers.findOne(id)
        if (by > 0){
            next = Containers.find({ordering: {$gt: cont.ordering}}, {sort:{ordering:1}}).fetch()[0]
        }else{
            next = Containers.find({ordering: {$lt: cont.ordering}}, {sort:{ordering:-1}}).fetch()[0]
        }
        if(next) {
            var ord = next.ordering
            
            console.log('cont ordering: '+cont.ordering)
            console.log('next ordering: '+ord)

            Containers.update({_id:next._id},{$set:{ordering:cont.ordering}})
            Containers.update({_id:cont._id},{$set:{ordering:ord}})
        }
    },
    deleteContainer: function(id){
        check(id, String)

        var insts = Instances.find({templateId: id}).fetch()
        insts.forEach(function(inst){
            Instances.remove(inst._id)
        })
        Containers.remove(id)
    },
    insertInstance: function(par){
        check(par, Object)

        var templateId = par.container
        var insts  = Instances.find({container: templateId}).count()
        //alert(insts)

        par.ordering = insts +1;
        //console.log(par)
        Instances.insert(par)
    },
    deleteInstance: function(id){
        check(id, String)

        Instances.remove(id)
    },
    modInstance: function(id,obj){
        check(id, String)

        Instances.update({_id:id},{$set:obj})
    },
    moveInstance: function(id,by, containerId){
        check(id, String)
        check(by, Number)
        check(containerId, String)

        console.log('id: '+id)
        console.log('by: '+by)
        console.log('container: '+containerId)

        var next;
        var cont = Instances.findOne(id)
        if (by > 0){
            next = Instances.find({container: containerId, ordering: {$gt: cont.ordering}},{sort:{ordering:1}}).fetch()[0]
        }else{
            next = Instances.find({container: containerId, ordering: {$lt: cont.ordering}},{sort:{ordering:-1}}).fetch()[0]
        }
        if(next){
            var ord = next.ordering

            console.log('cont ordering: '+cont.ordering)
            console.log('next ordering: '+ord)
            Instances.update({_id:next._id},{$set:{ordering:cont.ordering}})
            Instances.update({_id:cont._id},{$set:{ordering:ord}})
        }
    }

})



