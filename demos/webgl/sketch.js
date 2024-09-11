var webglSketch = function (sketch) {
  // sketch.scaleFactor = 1.0;


  sketch.setup = function () {

    sketch.spacing = 25;
    sketch.r = sketch.spacing / 2;
    sketch.num = 10;
    sketch.colorMode(sketch.HSB, 100);

    sketch.mainCanvas = sketch.createCanvas(500, 500, sketch.WEBGL);
    sketch.mainCanvas.addClass("windowFrame");
    sketch.angleMode(sketch.DEGREES)

  }

  sketch.draw = function () {
    sketch.clear();

    sketch.orbitControl();

    let d = sketch.map(sketch.mouseX, 0, sketch.width, 3, 10);
    sketch.stroke(0);

    for (let i = 0; i < sketch.num; i++) {
      for (let j = 0; j < sketch.num; j++) {
        for (let k = 0; k < sketch.num; k++) {
          sketch.push();

          let offset = -sketch.spacing * sketch.num / 2 + sketch.spacing / 2;
          let x = i * sketch.spacing + offset;
          let y = j * sketch.spacing + offset;
          let z = k * sketch.spacing + offset;

          let distance = sketch.sqrt(sketch.pow(x, 2) + sketch.pow(y, 2) + sketch.pow(z, 2));

          sketch.translate(x, y, z);
          sketch.normalMaterial();
          let shapeSize = sketch.spacing - distance / d;
          if (sketch.mouseIsPressed) {
            sketch.box(shapeSize);
          } else {
            sketch.sphere(shapeSize);
          }


          sketch.pop();
        }
      }
    }

  }

  sketch.showLabel = function (text, x, y) {
    sketch.labelSpan.html(text);
    sketch.labelContainer.position(x - 350, y - 64);
    sketch.labelContainer.show();
    sketch.arrowCanvas.position(x - 110, y - 180);
    sketch.arrowCanvas.show();
  }

  sketch.hideLabel = function () {
    sketch.labelContainer.hide();
    sketch.arrowCanvas.hide();
  }





};