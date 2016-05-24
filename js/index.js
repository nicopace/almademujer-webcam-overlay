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

      var finalImage = snapshot.toDataURL("image/png");
      document.getElementById('finalSnapshot').src = finalImage;


      var auth = 'Client-ID 7cd66ac7caa63f6';
      $.ajax({
        url: 'https://api.imgur.com/3/upload',
        type: 'POST',
        headers: {
          Authorization: auth
          // Accept: 'application/json'
        },
        data: {
          type: 'base64',
          name: 'almademujer.png',
          title: 'almademujer',
          description: 'almademujer',
          image: finalImage.split(',')[1]
        },
        dataType: 'json',
        success: function(result) {
          var id = result.data.id;
          window.open('https://imgur.com/gallery/' + id);
        },
        error: function() {
          console.log(arguments)
        }
      });

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
