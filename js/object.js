var username = document.querySelector('.name')
var surname = document.querySelector('.surname')
var number = document.querySelector('.number')
var email = document.querySelector('.email')
var address = document.querySelector('.address')
var school = document.querySelector('.school')
var schoolnumber = document.querySelector('.schoolnumber')
var unversy = document.querySelector('.unversy')
var unversynumber = document.querySelector('.unversynumber')

var nameprompt = prompt('Ismingizni yozing')
var namesurnameprompt = prompt('Familyangiz yozing')
var numberprompt = prompt('Nomeringizni kiriting:');
var emailprompt = prompt('Emailingizni kiriting:');
var addressprompt = prompt('Addressingizni kiriting');
var schoolprompt = prompt('Nechinchi maktabda oqigansiz');
var schoolnumberprompt = prompt('Maktabingizni qaysi yillarda oqigansiz');
var unversyprompt = prompt('Qaysi OTM da talim olgansiz');
var unversynumberprompt = prompt('OTM ni qaysi yillarda oqigansiz');
function form() {
username.textContent=` name: ${nameprompt}`
surname.textContent=` surname: ${namesurnameprompt}`
number.textContent=` number: ${numberprompt}`
email.textContent=` email: ${emailprompt}`
address.textContent=` address: ${addressprompt}`
school.textContent=` school: ${schoolprompt}`
schoolnumber.textContent=`school-years : ${schoolnumberprompt}`
unversy.textContent=`universy : ${unversyprompt}`
unversynumber.textContent=` universy-years: ${unversynumberprompt}`

}
form()