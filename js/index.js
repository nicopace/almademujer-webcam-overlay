initialize();

var sayCheese;

function initialize() {
  sayCheese = new SayCheese('#camera', { snapshots: true });

  sayCheese.on('snapshot', function(snapshot) {
    try {
      canvas.deactivateAll().renderAll();

      var ctx = snapshot.getContext('2d');
      var img = document.getElementById('imageCanvas');

      var hRatio = snapshot.width / img.width;
      var vRatio = snapshot.height / img.height;
      var ratio  = Math.min ( hRatio, vRatio );

      ctx.drawImage(img, 0, 0, img.width, img.height, 0,0,img.width*ratio, img.height*ratio);

      document.getElementById('finalSnapshot').src = snapshot.toDataURL("image/png");
      canvas.setActiveObject(canvasText);
      canvasText.selectAll();
      canvasText.enterEditing();
    } catch(err) {

      throw err;
    }
  });

  sayCheese.start();
}

function takeSnapshot() {
  sayCheese.takeSnapshot();
}
