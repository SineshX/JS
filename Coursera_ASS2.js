// visit https://www.dukelearntoprogram.com/course1/example/index.php to execute this code :) 
// 1 
var image = new SimpleImage("chapel.png");

for (var pixel of image.values()) {
    pixel.setRed(255);
}

print(image);


// 2
var image = new SimpleImage("chapel.png");

// missing code
for (var pixel of image.values()) {
    pixel.setRed(0);
}
print(image);

// 3
var image = new SimpleImage("eastereggs.jpg");

// missing code
for (var pixel of someImage.values()) {
    if (pixel.getRed() > 70) {
        pixel.setRed(70);
    }
}

print(image);


// 4
var image = new SimpleImage("astrachan.jpg");

// missing code

var height = someImage.getHeight();
for (var pixel of someImage.values()) {
    if (pixel.getY() >= height - 10) {
        pixel.setRed(0);
        pixel.setGreen(0);
        pixel.setBlue(0);
    }
}
print(image);

// 5
var image = new SimpleImage("chapel.png");

// missing code
for (var pixel of someImage.values()) {
    if (pixel.getX() < 50) {
        if (pixel.getY() < 50) {
            pixel.setRed(0);
            pixel.setGreen(255);
            pixel.setBlue(0);
        }
    }
}

print(image);



// 6
function topRightCorner(cornerWidth, cornerHeight, someImage, red, green, blue) {
    var width = someImage.getWidth();
    for (var pixel of someImage.values()) {
        // missing code
       if (pixel.getY() < cornerHeight) {
            if (pixel.getX() > width - cornerWidth) {
                pixel.setRed(red);
                pixel.setGreen(green);
                pixel.setBlue(blue);
            }
        }
      
      
      
    }
    return someImage;
}


// 7

function topRightCorner(cornerWidth, cornerHeight, someImage, red, green, blue) {
    var width = someImage.getWidth();
    for (var pixel of someImage.values()) {
        // missing code
         if (pixel.getY() < cornerHeight) {
            if (pixel.getX() > width - cornerWidth) {
                pixel.setRed(red);
                pixel.setGreen(green);
                pixel.setBlue(blue);
            }
        }
        
    }
    return someImage;
}
// missing code 
var picture = new SimpleImage("chapel.png");
var result = topRightCorner(30, 60, picture, 255, 255, 0);
var result2 = topRightCorner(60, 30, result, 0, 0, 255);
var result3 = topRightCorner(30, 30, result2, 0, 255, 0);
print(result3);



// 
