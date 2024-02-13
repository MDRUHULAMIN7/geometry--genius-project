function parallelogramCalculate(){
  const parallelogramBInput = document.getElementById('parallelogram-b');
  const parallelogrambText =  parallelogramBInput.value;
  const B = parseFloat(parallelogrambText);

  const parallelogramHInput = document.getElementById('parallelogram-h');
  const parallelogramhText =  parallelogramHInput.value;
  const H = parseFloat(parallelogramhText);

  const area = H * B;

  const parallelogramSpan = document.getElementById('parallelogram-area');
  parallelogramSpan.innerText = area;



  console.log("area of the parallelogram:",area);
}