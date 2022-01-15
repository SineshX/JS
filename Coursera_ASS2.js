// visit https://www.dukelearntoprogram.com/course1/example/index.php to execute this code :) 
// 1 correct
var image = new SimpleImage("chapel.png");

for (var pixel of image.values()) {
    pixel.setRed(255);
}

print(image);


// 2 correct
var image = new SimpleImage("chapel.png");

// missing code
for (var pixel of image.values()) {
    pixel.setRed(0);
}
print(image);

// 3 correct
var image = new SimpleImage("eastereggs.jpg");

// missing code
for (var pixel of someImage.values()) {
    if (pixel.getRed() > 70) {
        pixel.setRed(70);
    }
}

print(image);


// 4 correct 
var image = new SimpleImage("astrachan.jpg");

// missing code 1

var height = someImage.getHeight();
for (var pixel of someImage.values()) {
    if (pixel.getY() >= height - 10) {
        pixel.setRed(0);
        pixel.setGreen(0);
        pixel.setBlue(0);
    }
}
print(image);

// 5 in correct (not)
var someImage = new SimpleImage("chapel.png");

// missing code
for (var pixel of someImage.values()) {
    if (pixel.getX() < 50) {
        if (pixel.getY() < 50) {
            pixel.setGreen(255);
        }
    }
    if (pixel.getY() < 50) {
        if (pixel.getX() < 50) {
            pixel.setRed(0);
            pixel.setBlue(0);
        }
    }
}
print(someImage);



// 6 correct 
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


// 7 correct 

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



// Q8 in correct
function changeRed(width, height) {
    var picture = new SimpleImage(width, height);
    var red = 0;

     // missing code 2
    for (var pixel of picture.values()) {
        pixel.setRed(red);
        pixel.setGreen(0);
        pixel.setBlue(0);
        if (pixel.getRed() < 255) {
            red = red + 1;
        }
        if (pixel.getRed() == 255) {
            red = 0;
        }
}
    return picture;
}

var result = changeRed(256,200);
print(result);

// 9 correct :)
// Add two parameters, one for the blue color and one for the green color. Then in the code set blue to be the blue number passed in and green to be the green number passed in. 
