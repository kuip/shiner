Template.headers.helpers({
  header: function() {
    return Frameworks.findOne({_id: FlowRouter.getQueryParam('fr')})
    //return Frameworks.findOne({_id: Session.get('framework') || FlowRouter.getQueryParam('fr')})
  }
})
