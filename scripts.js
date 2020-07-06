 /**
  * Function to validate
  * @constructor
  * @return {boolean}
  */
 function validateForm() {
     var valid = true;

     if (!validateField(this, 'email', 'Your email address is required.')) //--Email 
         valid = false;

     if (!validateField(this, 'firstName', 'Fill out your first name.')) //--firstName
         valid = false;

     if (!validateField(this, 'lastName', 'Fill out your last name.')) //--lastName
         valid = false;

     if (!validateField(this, 'month', 'Select your month of birth.')) //--Month 
         valid = false;

     if (!validateField(this, 'dd', 'Write your day of birth as two digits.')) //--Date 
         valid = false;

     if (!validateField(this, 'year', 'Write your year of birth using four digits.')) //--Year 
         valid = false;

     return valid; //--if all the fields are valid, this variable will be true and Submit
 }

 /**
  * Validate the fields
  * @param {string} context - refers to the object it belongs to.
  * @param {string} fieldName - input field name
  * @param {string} message - the error message for each field
  */
 function validateField(context, fieldName, message) {
     var field = document.forms['Guest_register'][fieldName], //--gets the field
         errorField = document.getElementById(fieldName + '_error'); //--gets the error field
     box = document.getElementById(fieldName); //--get the box for color purposes

     console.log(context);
     //--if the context is the form, it's because the Register Now button was clicked, if not, check the caller
     if (context instanceof HTMLFormElement || context.id === fieldName) {
         if (field.value === '' || field.value === 'Select a Month') {
             errorField.innerHTML = message;
             box.style.borderColor = "red"; //--changing the box color to red
         } else {
             errorField.innerHTML = '';
             box.style.borderColor = "rgb(126, 124, 124)"; //--Turn it back to the original color
         }
     }
     //--return if the field is fulfilled
     return field.value !== '';
 }

 /**
  * An event handlers is added when changing the fields' value after the DOM is ready
  */
 document.addEventListener('DOMContentLoaded', function() {
     document.getElementById('email').addEventListener('input', validateForm);
     document.getElementById('firstName').addEventListener('input', validateForm);
     document.getElementById('lastName').addEventListener('input', validateForm);
     document.getElementById('month').addEventListener('input', validateForm);
     document.getElementById('dd').addEventListener('input', validateForm);
     document.getElementById('year').addEventListener('input', validateForm);

     //--To submit event
     document.getElementById('Guest_register').addEventListener('submit', validateForm);
 });