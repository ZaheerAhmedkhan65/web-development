let classList = document.getElementById("classList");
const weekCount = 12;

classList.classList.add("d-flex" ,"align-items-center", "flex-wrap" ,"gap-3" ,"my-5")

const data = {
            ytLinks : ["https://youtu.be/YK1xR1TmnIY?si=n1hnTi_uMBPeGgFm","https://youtu.be/Uj36nI2J7Ac?si=Ddgqer9lSKBDhDG3",
                    "https://youtu.be/fi5E3RFRf_k?si=_HKGi-AP_oHsJMGL","https://youtu.be/HnaOek-PqSY?si=ReGlPy0Uj-vO4kye",
                    "https://youtu.be/tcMvxFGvcfs?si=bsy6_Ge8As1ZSjCr","week-8/index.html",
                    "https://youtu.be/tcMvxFGvcfs?si=AMeTopDCt2gqbuF0","week-10/index.html",
                    "https://youtu.be/6h9qbaZ4PFM?si=c8bP-o2QLpwySXVN","https://youtu.be/RCmftrnwtX8?si=49iSmxQOUjnVFh6Q",
                    "https://youtu.be/lSdDolwwO10?si=nWust2Z-B3Mx-jru","https://youtu.be/WI_VK5T9tNQ?si=J22iATiMrIE_fIHJ"
                   ],
            topic : [
                    "Introduction to HTML and CSS","CSS Box Model and Ludo Layout",
                    "Form and Input types" , "Flex , Float and Margin",
                    "CSS Sudo classes and Page Responsivness","Introduction to Javascript",
                    "Javascript Primitive Data Types","Operators and Conditions",
                    "Recursive Functions,anonymous functions,find factorial","Loop,Javascript Events and Bootstrap",
                    "Learn Problem Solving in javascript","Learn Object Oriented Programming"
                    ]
};

onload = ()=>{
for(var i = 0 ; i< weekCount ; i++){
        let classDom = document.createElement("div");
        classList.appendChild(classDom);
        classDom.classList.add("card","class-box");
    let cardbody= document.createElement("div");
    classDom.appendChild(cardbody);
    cardbody.classList.add("card-body", "d-flex", "flex-column")
    let title = document.createElement("h4");
    cardbody.appendChild(title);
    title.textContent = `Week ${i+1}`;
    title.classList.add("mb-2")
    let description = document.createElement("p");
    cardbody.appendChild(description);
    description.textContent = data.topic[i];
    let cardFooter = document.createElement("div");
    cardbody.appendChild(cardFooter);
    let a = document.createElement("a");
    cardFooter.appendChild(a);
    cardFooter.classList.add("d-flex","justify-content-between")
    a.href = `./week-${i+1}/index.html`;
    let button = document.createElement("button");
    a.appendChild(button);
    button.classList.add("btn","btn-outline-primary");
    button.textContent = "Read it!";
    let ytBtn = document.createElement("a"); 
    cardFooter.appendChild(ytBtn);
    let videoButton = document.createElement("i");
    videoButton.classList.add("ri-youtube-fill" ,"btn" ,"text-danger" , "fs-5");
    ytBtn.href = data.ytLinks[i];
    ytBtn.appendChild(videoButton);

}
typeWriter();
}
let textMessageContainer = document.querySelector(".textMessageContainer");
let h3 = document.createElement("h3");
textMessageContainer.appendChild(h3);
let textMessage = "Welcome to the Code With Infiniti DEV Live Section.";
let writingSpeed = 100;
var i = 0;
function typeWriter(){
   if(i<textMessage.length){
       h3.innerHTML += textMessage.charAt(i);
       i++;
       setTimeout(typeWriter,writingSpeed);
    }
}