

var  tablinks = document.getElementsByClassName("tab-links")
var tabcontents = document.getElementsByClassName('tab-contents')
function opentab(tabname){
for( tablink of tablinks){
    tablink.classList.remove("active-link")
}
for( tabcontent of tabcontents){
    tabcontent.classList.remove("active-tab")
}
event.currentTarget.classList.add("active-link")
document.getElementById(tabname).classList.add("active-tab")
}


function toggleProjects() {
    const allProjects = document.querySelectorAll('.project-box');
    const toggleBtn = document.getElementById('toggleBtn');
    
    // Check if the button is currently set to "See More" or "Show Less"
    if (toggleBtn.textContent === "See More") {
        // Show all project boxes
        allProjects.forEach(project => {
            project.classList.remove('hidden');
        });
        toggleBtn.textContent = "Show Less";
    } else {
        // Hide extra project boxes, only the first three will be visible
        allProjects.forEach((project, index) => {
            if (index >= 3) {
                project.classList.add('hidden');
            }
        });
        toggleBtn.textContent = "See More";
    }
}


var side = document.getElementById("sidemenu")

function openmenu(){
    side.style.right="0"
}
function closemenu(){
    side.style.right="-200px"
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbyzzQiRntBi1P9Wv874XuvhcJcDIe10FO8MEbtEPEmujHuqeoPN7CgclpYmk_5tnaGf9g/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            msg.innerHTML=''
        },5000)
        form.reset()
      })
    
      .catch(error => console.error('Error!', error.message))
  })


    var typed = new Typed(".auto-type",{
        strings:['"A Web Designer"'],
        typeSpeed:150,
        backSpeed:150,
        loop:true
    })








