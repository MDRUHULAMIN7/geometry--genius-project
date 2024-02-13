   function rhombusCalculate(){
    const perimeter = getInputValueById('rombos-pera');
    const apothem = getInputValueById('rombos-apo');
    const area = 0.5*perimeter*apothem;
    
    setInnerTextById('rhombus-area',area);
   }

   function getInputValueById(id){
    const inputField = document.getElementById(id);
const inputValueText = inputField.value;
const  value = parseFloat(inputValueText);
return value;
   }

   function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId);
     element.innerText = area;
   }