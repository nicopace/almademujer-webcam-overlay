initialize();

var sayCheese;

function initialize() {
  var currentTemplate = "media/cartel.png";
  sayCheese = new SayCheese('#camera', { snapshots: true });

  sayCheese.on('snapshot', function(snapshot) {
    try {
      var ctx = snapshot.getContext('2d');

      var img = new Image();
      img.src = currentTemplate;

      ctx.drawImage(img, 0,0);

      document.getElementById('snapshot').src = snapshot.toDataURL("image/png");
    } catch(err) {
      throw err;
    }
  });

  sayCheese.start();
}

function takeSnapshot() {
  sayCheese.takeSnapshot();
}
