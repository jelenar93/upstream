

$({countNum: $('#counter').text()}).animate({countNum: 63  }, {
          duration: 4000,
          easing:'linear',
          step: function() {
            $('#counter').text(Math.floor(this.countNum));
          },
          complete: function() {
            $('#counter').text(this.countNum);
          }
        });

$({countNum: $('#counter1').text()}).animate({countNum: 360  }, {
          duration: 4000,
          easing:'linear',
          step: function() {
            $('#counter1').text(Math.floor(this.countNum));
          },
          complete: function() {
            $('#counter1').text(this.countNum);
          }
        });

$({countNum: $('#counter2').text()}).animate({countNum: 450  }, {
          duration: 4000,
          easing:'linear',
          step: function() {
            $('#counter2').text(Math.floor(this.countNum));
          },
          complete: function() {
            $('#counter2').text(this.countNum);
          }
        });

$({countNum: $('#counter3').text()}).animate({countNum: 120  }, {
          duration: 4000,
          easing:'linear',
          step: function() {
            $('#counter3').text(Math.floor(this.countNum));
          },
          complete: function() {
            $('#counter3').text(this.countNum);
          }
        });