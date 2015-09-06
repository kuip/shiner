// target elements with the "draggable" class
interact('.draggable')
  .draggable({
    // enable inertial throwing
    inertia: true,
    overlap: 0.1,
    //manualStart: true,
    // keep the element within the area of it's parent
    restrict: {
      restriction: "document",
      //endOnly: true,
      elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
    },

    // call this function on every dragmove event
    onmove: dragMoveListener,
    // call this function on every dragend event
    onend: function (event) {
      var textEl = event.target.querySelector('p');

      textEl && (textEl.textContent =
        'moved a distance of '
        + (Math.sqrt(event.dx * event.dx +
                     event.dy * event.dy)|0) + 'px');
    }
  });

  function dragMoveListener (event) {
    var interaction = event.interaction;

    // if the pointer was moved while being held down
    // and an interaction hasn't started yet
    /*
    if (interaction.pointerIsDown && !interaction.interacting()) {
      var original = event.currentTarget,
          // create a clone of the currentTarget element
          clone = event.currentTarget.cloneNode(true);

          console.log(event)

      // insert the clone to the page
      // TODO: position the clone appropriately
      document.body.appendChild(clone);

      // start a drag interaction targeting the clone
      interaction.start({ name: 'drag' },
                        event.interactable,
                        clone);
    }
    */

      var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
    
  }

  // this is used later in the resizing demo
  //window.dragMoveListener = dragMoveListener;




  interact('.ditem')
  .draggable({ manualStart: true })
  .on('move', function (event) {
    var interaction = event.interaction;

    // if the pointer was moved while being held down
    // and an interaction hasn't started yet
    if (interaction.pointerIsDown && !interaction.interacting()) {
      var original = event.currentTarget,
          // create a clone of the currentTarget element
          clone = event.currentTarget.cloneNode(true);

      // insert the clone to the page
      // TODO: position the clone appropriately
      //document.body.appendChild(clone);
      original.parentNode.appendChild(clone);

      // start a drag interaction targeting the clone
      interaction.start({ name: 'drag' },
                        event.interactable,
                        clone);
    }
  });


  /* The dragging code for '.draggable' from the demo above
 * applies to this demo as well so it doesn't have to be repeated. */

// enable draggables to be dropped into this
interact('.dropzone').dropzone({
  // only accept elements matching this CSS selector
  //accept: '#yes-drop',
  // Require a 75% element overlap for a drop to be possible
  overlap: 0.01,

  // listen for drop related events:

  ondropactivate: function (event) {
    // add active dropzone feedback
    event.target.classList.add('drop-active');
  },
  ondragenter: function (event) {
    var draggableElement = event.relatedTarget,
        dropzoneElement = event.target;

    // feedback the possibility of a drop
    dropzoneElement.classList.add('drop-target');
    draggableElement.classList.add('can-drop');
    //draggableElement.textContent = 'Dragged in';
  },
  ondragleave: function (event) {
    // remove the drop feedback style
    event.target.classList.remove('drop-target');
    event.relatedTarget.classList.remove('can-drop');
    //event.relatedTarget.textContent = 'Dragged out';
  },
  ondrop: function (event) {
    //event.relatedTarget.textContent = 'Dropped';
    console.log(event.relatedTarget.id)
    
    //var target = event.target || event.srcElement;
    console.log(event.relatedTarget.innerHTML)
    var te = Templates.findOne(event.relatedTarget.id)
    Meteor.call("insertInstance" , 
      {"container" : event.target.id,
    "templateId" : event.relatedTarget.id,
    "content" : te.content, //te.content,
    "design": te.design,
    "data": te.data,
    "top" : "",
    "left" : "",
    "bottom" : "",
    "right" : ""
}
    )
  },
  ondropdeactivate: function (event) {
    // remove active dropzone feedback
    event.target.classList.remove('drop-active');
    event.target.classList.remove('drop-target');
    //console.log(event.target)
  }
});



