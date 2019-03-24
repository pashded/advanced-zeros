module.exports = function getZerosCount(number, base) {
   let zerosCounter = number;

  for(let i = 2; i <= base; i++){

      if(base % i == 0){

          let counter1 = 0;
          let counter2 = 0;

          while (base % i == 0){
              counter1++;
              base = Math.floor(base / i);
          }

          let value = number;

          while (value / i > 0){
              counter2 += Math.floor(value / i);
              value = Math.floor(value / i);
          }

          zerosCounter = Math.min(zerosCounter, counter2 / counter1);
      }
  }
  zerosCounter = Math.floor(zerosCounter);

  return zerosCounter;
}