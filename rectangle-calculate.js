function RectangleArea(){
    const rectangleWidthInput =document.getElementById('rectangle-width');
    const rectangleWidthText =rectangleWidthInput.value;
    const width = parseFloat(rectangleWidthText);
  
    const triangleLengthInput =document.getElementById('rectangle-length');
    const rectangleLengthText = triangleLengthInput.value;
    const length = parseFloat( rectangleLengthText);

    const area = width *length;

    const rectngleAreaSpan = document.getElementById('rectangle-area');
    rectngleAreaSpan.innerText=area;
    console.log('area of the rectangle:', area);
   
}
