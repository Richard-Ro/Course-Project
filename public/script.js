function display(){
const buttonI = document.getElementById('index')
const buttonN = document.getElementById('new')
var output = document.querySelector('.output')
const createoutput = document.createElement('div')
createoutput.className = 'output'
createoutput.id = 'output'

const displaypage = document.getElementById('output')
displaypage.innerHTML = (
`<div class="container-fluid" id= 'container'>
<h2>Contact list</h2>
<table class="table">
<thead>
<tr>
<th scope="column">#</th>
<th scope="column">Name</th>
 <th scope="column">Email</th>
<th scope="column">Phone</th>
 <th scope="column"></th>
</tr>
</thead>
<tbody id="tbody">
</tbody>
</table>`
)
const phone = document.getElementById('phone')
const name = document.getElementById('name')
const email = document.getElementById('email')

Button.onclick = function(){
const Pname = name.value
const Pemail = email.value
const Pphone = phone.value

const nameRegEx = /^./
const nameTest = nameRegEx.test(Pname)
var nameError = ''
const emailRegEx = /.+@.+\..+/
const emailTest = emailRegEx.test(Pemail)
var emailError = ''
const phoneRegEx = /^[2-9][0-9]{9}$/
const phoneTest = phoneRegEx.test(Pphone)
var phoneError = ''
const userInfo = { Personname : Pname, Personemail : Pemail, Personphone : Pphone}
 if (nameTest === false){
 var nameError = 'Must enter a name '
 }
 if (emailTest === false){
    var emailError = 'The email address is invalid. '
 }
 if (phoneTest === false){
   var phoneError = 'The phone number is invalid. '
 }

var displayerror = nameError + emailError + phoneError
 
if (displayerror === ''){
  if (localStorage.length = 0){
    DBindexKey = 1
    userInfo.indexNum = 1
    }
    else{
    for(var i =0; i < localStorage.length; i++){  
        var output = JSON.parse(localStorage.getItem(localStorage.key(i)))
        if (output.indexNum > highestIndexNum){highestIndexNum = output.indexNum}             
        }
        DBindexKey = Number(highestIndexNum) + 1
        userInfo.indexNum = Number(highestIndexNum) + 1
        }
        localStorage.setItem(DBindexKey, JSON.stringify(userInfo))
        detailsPage(userInfo);
         }
         else{
            alert(displayerror)

        }
    }
}
function remove(Number, Row){
    var confirmed = confirm('Are you sure?')
    if (confirmed){
        localStorage.removeItem(Number)
        const target = document.querySelector('.output')
        indexPage(target)
    }
    else {
        if(Row != undefined){
            Row.style.backgroundColor = 'white'
        }
        
    }

}