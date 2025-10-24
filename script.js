const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height',).value)

form.addEventListener('submit',function(e){
    e.preventDefault();
  const height = parseFloat(document.querySelector('#height').value)
  const weight = parseFloat(document.querySelector('#weight').value)
  const results = document.querySelector('#results');

  if(height === '' || height < 0 ||  isNaN(height )){
    results.innerHTML = "⚠️Please give the valid height";
  }
  else if(weight === '' || weight < 0 ||  isNaN(weight )){
    results.innerHTML = "⚠️Please give the valid weight";
  }

  else{
   const bmi = (weight/((height/100)**2)).toFixed(2)

   let message ="";
   if(bmi<18.6){
    message ="you are underweight";
   }
   else if (bmi>24.9){
    message ="you are overweight";
   }
   else{
    message ="you are normal range"
   }





   results.innerHTML =`<span>${bmi}</span><p>${message}</p>`
  }

  

});
