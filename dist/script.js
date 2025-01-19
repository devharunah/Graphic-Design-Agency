
    //...WHATSAPP FUNCTIONALITY......
    const whatsappchartclon = document.querySelector('#whatsappchartclon')
    const whatssappbtn = document.querySelector('#whatssappbtn')
    whatssappbtn.addEventListener('click',(e)=>{
        whatsappchartclon.style.display = 'block'
    })
    const closechart = document.querySelector('#closechart')
    closechart.addEventListener('click',(e)=>{
        whatsappchartclon.style.display = 'none'
    })

    const whstsapp_message = document.querySelector('#whstsapp_message')
    whstsapp_message.addEventListener('click',(e)=>{
        window.location.href = 'https://wa.me/@+256726930366'
        whatsapp_input.value = ""
    })
    const whatsapp_input = document.querySelector('#whatsapp_input')

    //..........SKILL RANGE FUNCTIONALITY......................
    const progreesbar = document.querySelectorAll('#progressbar');
    const progressection = document.querySelectorAll('#progressbarsection')
    const numberdisplay = document.querySelectorAll('#number');

  
    function animateProgressBar(){
        const target = 90;
        let current = 0;

        //Interval for animation
        const Interval = setInterval(()=>{
            if(current<target){
                current++
                progreesbar.forEach((item)=>{
                    item.style.height = `${current}%`
                    //The wirdth of the progressbar is increased dyncamiaclly using the above code
                    //item.style.width  rember that the width of the html element is 0%so it is incremented to 
                    //the target of 90% so 90% is givn to the element so we can see the animation thanks to intersection observers
                    numberdisplay.forEach((item)=>{
                        item.textContent = `${current}%`
                    })
                })
            }else{
                clearInterval(Interval)//clearing interval,when it reaches the goal which is 90 the interval is cleard so
                //no more automatice movment
            }
        },30)

        
    }
    const observer = new IntersectionObserver((entires,observer)=>{
     entires.forEach(entry=>{
        if(entry.isIntersecting){
            animateProgressBar();
            observer.disconnect()
        }
     })
    },{threshold: 0.8});
    progressection.forEach((item)=>{
        observer.observe(item)
    })
   
//.HAMBUGER MENUE CODE............
const  hambuger_btn = document.querySelectorAll('#hambuger_btn')
const bar = document.querySelector('.bar')
hambuger_btn.forEach((item)=>{
    item.addEventListener('click',(e)=>{
        bar.classList.toggle('active')
    })
})

//........FORM VALIDATION CODE........
const webform = document.querySelector('.webform');
webform.addEventListener('submit',(e)=>{
    let isValid = true;
        const worn_messsage = document.querySelector('#worn_messsage')
        
        const firstname = document.querySelector('#firstname');
        firstname.value.trim()
        if(firstname ===' '){
            firstname.style.border = "2px solid red"
            worn_messsage.style.display = "block"
            isValid = false
        } 

        else{
            firstname.style.border = "0px"
            worn_messsage.style.display = "none"
        }
        const lastname = document.querySelector('#lastname')
        lastname.value.trim()
        if(lastname===''){
            lastname.style.border = "2px solid red"
            worn_messsage.style.display = "block"
        }
        const email_ = document.querySelector('.email_')
        if(email_ === ""){
            email_.style.border = "2px solid red"
             worn_messsage.style.display = "none"
             isValid = false
    
        }else if(validateemail(email_.value.trim())){
            email_.style.border = "2px solid red"
            worn_messsage.style.display = "none"
            isValid = false;

        }

      if(isValid){
        e.preventDefault()
    }else{
        webform.submit()
    }
});

function validateemail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}