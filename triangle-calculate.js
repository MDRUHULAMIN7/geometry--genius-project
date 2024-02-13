

function TriangleArea(){
    const triangleBaseInput =document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText);
  
    const triangleHeightInput =document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText);
    const area = 0.5 *base *height;

    const tringleAreaSpan = document.getElementById('trianglr-area');
    tringleAreaSpan.innerText=area;
    console.log('area of the triangle:', area);
   
}