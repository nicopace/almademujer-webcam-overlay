var canvas = new fabric.Canvas('imageCanvas', {});
var canvasText;

var path = fabric.loadSVGFromURL('media/cartel.svg',function(objects, options) {
  var i = 0;
  while(obj = objects[i]){

    if(obj.id == "fraseAlmaDeMujer") {
      var otop = obj.get('top');
      var oleft = obj.get('left');
      var thetext = obj.get('text');
      var thefont = obj.get('fontFamily');
      var color = obj.get('fill');
      var fontSize = obj.get('fontSize');

      canvasText = new fabric.Textbox(thetext, {
        top:otop - 20,
        left:oleft - 40,
        textAlign:"center",
        fill:color,
        fontFamily:thefont,
        fontSize: fontSize * 2,
        width: 190
      });

      canvasText.lockUniScaling = true;
      canvasText.lockRotation = true;

      canvas.add(canvasText);
      canvas.setActiveObject(canvasText);

      canvasText.selectAll();
      canvasText.enterEditing();
    }  else {
      obj.hasControls = false;
      obj.selectable = false;
      canvas.add(obj);
      canvas.bringToFront(obj);
    }
    i++;
  }
  canvas.renderAll();
});
