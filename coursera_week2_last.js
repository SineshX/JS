// 1 .
for (var pixel of image.values()) {
  x = pixel.getX();
  y = pixel.getY();
  if (x > y) {
    pixel.setRed(0);
    pixel.setBlue(0);
  }
}



// 2 
pixel.setRed(0);

// 3
function addBorder(image, thickness){
    for (var pixel of image.values()){
        if (pixel.getX() < thickness){
            pixel = setBlack(pixel);
        }
        if (pixel.getX() >= image.getWidth()-thickness){
            pixel = setBlack(pixel);
        }
        if (pixel.getY() < thickness){
            pixel = setBlack(pixel);
        }
        if (pixel.getY() >= image.getHeight()-thickness){
            pixel = setBlack(pixel);
        }
    }
    return image;
}



// 4
To identify pixels that are within the borders by returning true

// 5
not wala 

// 6
 return word + separator + word + separator + word;

// 7
one 
two

// 10

Three parameters: 1)  filename - the name of the file for the image 2) low - representing the lowest red value and 3) high - representing the highest red value in the range. 

