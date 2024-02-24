const invalidDate = document.querySelector(".invalidDate")
const label = document.querySelectorAll("label")
const input = document.querySelectorAll('input[type="number"]');
document.addEventListener('DOMContentLoaded', function() {
    const form = document.forms["form"];
    const displayDate = document.querySelector(".displayDate");
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const day = parseInt(form.day.value);
      const month = parseInt(form.month.value);
      const year = parseInt(form.year.value);
  
      if (isValidDate(day, month, year)) {
        invalidDate.style.display="none"
        label.forEach(function(label){
          label.style.color="black"
        })
        input.forEach(function(input){
          input.style.borderColor="var(--Light-grey)"
        })
        const currentDate = new Date();
        const birthDate = new Date(year, month-1, day);
        const ageInMilliseconds = currentDate - birthDate;
        const ageDate = new Date(ageInMilliseconds);
        const years = Math.abs(ageDate.getUTCFullYear()-1970);
        const months = ageDate.getUTCMonth();
        const days = ageDate.getUTCDate() - 1;
  
        displayDate.innerHTML = `
          <h1><span class="years">${years}</span> years</h1>
          <h1><span class="months">${months}</span> months</h1>
          <h1><span class="days">${days}</span> days</h1>
        `;
      } else{
        displayDate.innerHTML = `
        <h1><span class="years">${"- -"}</span> years</h1>
        <h1><span class="months">${"- -"}</span> months</h1>
        <h1><span class="days">${"- -"}</span> days</h1>
        `;
        invalidDate.style.display="block"
        label.forEach(function(label){
          label.style.color="var(--Light-red)"
        })
        input.forEach(function(input){
          input.style.borderColor="var(--Light-red)"
        })
      }
    });
  
    function isValidDate(day, month, year) {
      const inputDate = new Date(year, month - 1, day);
      const currentDate = new Date();
      return (
        inputDate.getDate() === day &&
        inputDate.getMonth() === month - 1 &&
        inputDate.getFullYear() === year && 
        inputDate < currentDate
      );
    }
  });