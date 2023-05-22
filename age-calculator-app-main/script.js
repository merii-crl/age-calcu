// 'use strict';

const errorM = document.querySelectorAll('.errorMessage');
const labels = document.querySelectorAll('.label');
const values = document.querySelectorAll('.input-old');

const valueDay = document.querySelector('#day');
const valueMonth = document.querySelector('#month');
const valueYear = document.querySelector('#year');

document.querySelector('.down-arr').addEventListener('click', function () {
  let hasError = false;

  // Day
  if (valueDay.value === '') {
    labels[0].style.color = 'hsl(0, 100%, 67%)';
    errorM[0].textContent = 'This field is required';
    values[0].style.border = '1px solid hsl(0, 100%, 67%)';
    errorM[0].classList.remove('hidden');
  } else {
    const day = parseInt(valueDay.value);
    if (isNaN(day) || day > 31) {
      labels[0].style.color = 'hsl(0, 100%, 67%)';
      errorM[0].textContent = 'Must be a valid day';
      values[0].style.border = '1px solid hsl(0, 100%, 67%)';
      hasError = true;
      errorM[0].classList.remove('hidden');
    } else {
      labels[0].style.color = ''; // Reset color if no error
      errorM[0].textContent = '';
      values[0].style.border = ''; // Reset border if no error
    }
  }

  // Month
  if (valueMonth.value === '') {
    labels[1].style.color = 'hsl(0, 100%, 67%)';
    errorM[1].textContent = 'This field is required';
    values[1].style.border = '1px solid hsl(0, 100%, 67%)';
    errorM[1].classList.remove('hidden');
  } else {
    const month = parseInt(valueMonth.value);
    if (isNaN(month) || month < 1 || month > 12) {
      labels[1].style.color = 'hsl(0, 100%, 67%)';
      errorM[1].textContent = 'Must be a valid month';
      values[1].style.border = '1px solid hsl(0, 100%, 67%)';
      hasError = true;
      errorM[1].classList.remove('hidden');
    } else {
      labels[1].style.color = ''; // Reset color if no error
      errorM[1].textContent = '';
      values[1].style.border = ''; // Reset border if no error
    }
  }

  // Year
  if (valueYear.value === '') {
    labels[2].style.color = 'hsl(0, 100%, 67%)';
    errorM[2].textContent = 'This field is required';
    values[2].style.border = '1px solid hsl(0, 100%, 67%)';
    errorM[2].classList.remove('hidden');
  } else {
    const currentYear = new Date().getFullYear();
    const year = parseInt(valueYear.value);
    if (isNaN(year) || year > currentYear) {
      labels[2].style.color = 'hsl(0, 100%, 67%)';
      errorM[2].textContent = 'Must be in the past';
      values[2].style.border = '1px solid hsl(0, 100%, 67%)';
      hasError = true;
      errorM[2].classList.remove('hidden');
    } else {
      labels[2].style.color = ''; // Reset color if no error
      errorM[2].textContent = '';
      values[2].style.border = ''; // Reset border if no error
    }
  }

  if (hasError) {
    return; // If there's an error, stop further execution
  }

  // Calculate Age 
  const currentTime = new Date();
  const currentDay = currentTime.getDate();
  const currentMonth = currentTime.getMonth() + 1;
  const currentYear = currentTime.getFullYear();

  const day = parseInt(valueDay.value);
  const month = parseInt(valueMonth.value);
  const year = parseInt(valueYear.value);

  let ageYears = currentYear - year;
  let ageMonths = currentMonth - month;
  let ageDays = currentDay - day;

  if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
    ageYears--;
    ageMonths = 12 - Math.abs(ageMonths);
    ageDays = new Date(currentYear, currentMonth - 1, 0).getDate() - Math.abs(ageDays);
  }

  // Output age
  document.querySelector('.num-years').textContent = ageYears;
  document.querySelector('.num-months').textContent = ageMonths;
  document.querySelector('.num-days').textContent = ageDays;
});
















// const errorM = document.querySelectorAll('.errorMessage');
// const labels = document.querySelectorAll('.label');
// const values = document.querySelectorAll('.input-old');

// const valueDay = document.querySelectorAll('#day');
// const valueMonth = document.querySelectorAll('#month');
// const valueYear = document.querySelectorAll('#year');

// document.querySelector('.down-arr').addEventListener('click', function () {
//   let hasError = false;
//   const valueDay = parseInt(values[0].value);
//   const valueMonth = parseInt(values[1].value);
//   const valueYear = parseInt(values[2].value);

//   //Day
//   // if (values[0].value === '') {
//   //   labels[0].style.color = 'hsl(0, 100%, 67%)';
//   //   errorM[0].textContent = 'This field is required';
//   //   values[0].style.border = '1px solid hsl(0, 100%, 67%)';
//   //   hasError = true;
//   //   if (hasError) {
//   //     errorM[0].classList.remove('hidden');

//   //   } else {
//   //     errorM[0].classList.add('hidden');
//   //   }
//   // } else {
//   //   labels[0].style.color = ''; // Reset color if no error
//   //   errorM[0].textContent = '';
//   //   values[0].style.border = ''; // Reset border if no error
//   // }

//   if (values[0].value === '') {
//     labels[0].style.color = 'hsl(0, 100%, 67%)';
//     errorM[0].textContent = 'This field is required';
//     values[0].style.border = '1px solid hsl(0, 100%, 67%)';
//     errorM[0].classList.remove('hidden');
//   } else if (values[0].value !== '') {
//     if (isNaN(valueDay) || valueDay > 31) {
//       labels[0].style.color = 'hsl(0, 100%, 67%)';
//       errorM[0].textContent = 'Must be a valid day';
//       values[0].style.border = '1px solid hsl(0, 100%, 67%)';
//       hasError = true;
//       errorM[0].classList.remove('hidden');
//     } else {
//       labels[0].style.color = ''; // Reset color if no error
//       errorM[0].textContent = '';
//       values[0].style.border = ''; // Reset border if no error
//     }
//   }

//   // Month
//   if (values[1].value === '') {
//     labels[1].style.color = 'hsl(0, 100%, 67%)';
//     errorM[1].textContent = 'This field is required';
//     values[1].style.border = '1px solid hsl(0, 100%, 67%)';
//     errorM[1].classList.remove('hidden');
//   } else if (values[1].value !== '') {
//     if (isNaN(valueMonth) || valueMonth < 1 || valueMonth > 12) {
//       labels[1].style.color = 'hsl(0, 100%, 67%)';
//       errorM[1].textContent = 'Must be a valid month';
//       values[1].style.border = '1px solid hsl(0, 100%, 67%)';
//       hasError = true;
//       errorM[1].classList.remove('hidden');
//     } else {
//       labels[1].style.color = ''; // Reset color if no error
//       errorM[1].textContent = '';
//       values[1].style.border = ''; // Reset border if no error
//     }
//   }



//   //Year 

//   if (values[2].value === '') {
//     labels[2].style.color = 'hsl(0, 100%, 67%)';
//     errorM[2].textContent = 'This field is required';
//     values[2].style.border = '1px solid hsl(0, 100%, 67%)';
//     errorM[2].classList.remove('hidden');
//   } else if (values[2].value !== '') {
//     const currentYear = new Date().getFullYear();
//     if (valueYear > currentYear) {
//       labels[2].style.color = 'hsl(0, 100%, 67%)';
//       errorM[2].textContent = 'Must be in the past';
//       values[2].style.border = '1px solid hsl(0, 100%, 67%)';
//       hasError = true;
//       errorM[2].classList.remove('hidden');
//     } else {
//       labels[2].style.color = ''; // Reset color if no error
//       errorM[2].textContent = '';
//       values[2].style.border = ''; // Reset border if no error
//     }
//   }

//   // if (hasError) {
//   //   for (let i = 0; i < errorM.length; i++) {
//   //     errorM[i].classList.remove('hidden');
//   //   }
//   // } else {
//   //   for (let i = 0; i < errorM.length; i++) {
//   //     errorM[i].classList.add('hidden');
//   //   }
//   // }

//   if (valueDay === 31 && valueMonth % 2 === 0) {
//     labels[0].style.color = 'hsl(0, 100%, 67%)';
//     values[0].style.border = '1px solid hsl(0, 100%, 67%)';
//     labels[1].style.color = 'hsl(0, 100%, 67%)';
//     values[1].style.border = '1px solid hsl(0, 100%, 67%)';
//     labels[2].style.color = 'hsl(0, 100%, 67%)';
//     values[2].style.border = '1px solid hsl(0, 100%, 67%)';
//     errorM[0].textContent = 'Must be a valid date';
//     errorM[0].classList.remove('hidden');
//   }


//   // Calculate Age 
//   const currentTime = new Date();
//   const day = currentTime.getDate();
//   const month = currentTime.getMonth() + 1;
//   const year = currentTime.getFullYear();

//   const userDay = day - parseInt(valueDay.value);
//   const userMonth = month - parseInt(valueMonth.value) - 1;
//   const userYear = year - parseInt(valueYear.value);

//   let ageDays = userDay;
//   let ageMonths = userMonth;
//   let ageYears = userYear;

//   if (userMonth < 0 || (userMonth === 0 && userDay < 0)) {
//     ageYears--;
//     ageMonths = 12 - Math.abs(userMonth);
//     ageDays = new Date(currentTime.getFullYear(), currentTime.getMonth(), 0).getDate() - Math.abs(userDay);
//   }
//   document.querySelector('.num-years').textContent = ageYears;
//   document.querySelector('.num-months').textContent = ageMonths;
//   document.querySelector('.num-days').textContent = ageDays;

// });