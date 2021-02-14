document.addEventListener("DOMContentLoaded", function(event) {
    

    ingredients = [
        {
            dx: 120,
            dy: 10,
            imageWidth: 50,
            imageHeight: 50,
            imagePath: 'img/Riverwalk tingz.png'
        },
        {
            dx: 120,
            dy: 80,
            imageWidth: 50,
            imageHeight: 50,
            imagePath: 'img/Riverwalk tingz.png'
        },
        {
            dx: 120,
            dy: 140,
            imageWidth: 50,
            imageHeight: 50,
            imagePath: 'img/Riverwalk tingz.png'
        }
    ];

    ingredients.forEach(object => {
        putPicture(getCanvasContext(), object);    
    });

    object = {
        dx: 10,
        dy: 80,
        imageWidth: 50,
        imageHeight: 50,
        imagePath: 'img/Riverwalk tingz.png'
    };
    

   putPicture(getCanvasContext(), object);
});


function getCanvasContext(){
    var canvas = document.getElementById('viewport');

    var context = canvas.getContext('2d');

    return context;
}

function putPicture(canvasContext, {dx, dy, imageWidth, imageHeight, imagePath})
{
    var baseImage = new Image();
    baseImage.src = imagePath;
    baseImage.onload = () => {
        canvasContext.drawImage(baseImage, dx, dy, imageWidth, imageHeight);
    }
}

function moveIngredient(){

}
