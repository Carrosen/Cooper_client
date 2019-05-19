export const BMICalculation = (weight, height, method) => {
  parseFloat(weight);
  parseFloat(height);
  let bmi;

  weight = isNaN(weight) ? 0 : weight;
  height = isNaN(height) ? 0 : height;

  if(method === 'metric') {
    bmi= weight / (height / 100 * height / 100)
  } else {
    bmi= weight * 703 / (height * height)
  };

  let finalBMI = parseFloat(bmi.toFixed(2));
  let BMIMessage = setBMIMessage(finalBMI)
  if (isNaN(finalBMI) || !isFinite(finalBMI) || finalBMI === 0) {
    return '';
  } else {
    return `You are ${BMIMessage} with a BMI of ${finalBMI}`;
  }
}

const setBMIMessage = (finalBMI) => {
  if (finalBMI < 18.5) {
    return "underweight";
  }

  if (finalBMI > 18.5 && finalBMI < 25) {
    return "normal";
  }

  if (finalBMI > 25 && finalBMI < 30) {
    return "overweight";
  }

  if (finalBMI > 30) {
    return "obese";
  }
}
 