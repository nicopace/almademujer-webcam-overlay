jQuery(function(){
  initialize();
});

function initialize() {
  var currentTemplate = "media/cartel.svg";
  var sayCheese;

  sayCheese = new SayCheese('#camera', { snapshots: true });

  sayCheese.on('snapshot', function(snapshot) {
    try {
      var ctx = snapshot.getContext('2d');

      var img = new Image();
      img.src=currentTemplate;

      ctx.drawImage(img, 0,0);

      snapshot = jQuery(snapshot);
      snapshot.css('width',"1024")
      snapshot.css('height',"768")

      jQuery('body').append(snapshot);
    } catch(err) {
      throw err;
    }
  });

  sayCheese.start();

  jQuery("#snapshot-btn").on("click",function() {
    sayCheese.takeSnapshot();
  })
}
