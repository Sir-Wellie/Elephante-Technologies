const testimonials =[
    {
        name: "W Wellingtons",
        role: "Qodex Founder and CEO",
        content:
        "I was struggling to get a loan from traditional bankbut WellieCares came to my rescue. Their loan process was easy and fast, and i was able to get the funds i needed to grow my business. Thank you WellieCares",
        image:"assets/member-7.png"
    },
    {
        name: "Nina Wellingtons",
        role: "Survey Engineer",
        content:
        "I was struggling to get a loan from traditional bankbut WellieCares came to my rescue. Their loan process was easy and fast, and i was able to get the funds i needed to grow my business. Thank you WellieCares",
        image:"assets/member-6.png"
    },{
        name: "Haven Maiden",
        role: "Business Administrator",
        content:
        "I was struggling to get a loan from traditional bankbut WellieCares came to my rescue. Their loan process was easy and fast, and i was able to get the funds i needed to grow my business. Thank you WellieCares",
        image:"assets/member-8.png"
    },{
        name: "Hayde Wellingtons",
        role: "Chemical Engineer ",
        content:
        "I was struggling to get a loan from traditional bankbut WellieCares came to my rescue. Their loan process was easy and fast, and i was able to get the funds i needed to grow my business. Thank you WellieCares",
        image:"assets/member-5.png"
    },
    
    ];
    
    const createTestimonialCard=(testimonial) =>{
        return `
                   <div class="card">
                        <div class="profile">
                            <img src="${testimonial.image}" alt="${testimonial.image}">
                            <div>
                                <div class="name">${testimonial.name}</div>
                                <div class="role">${testimonial.role}</div>
                            </div>
                        </div>
                        <div class="content">${testimonial.content}</div>
                    </div>
        
        `;
    };
    
    const populateColumn = (columnId) =>{
        const column = document.getElementById(columnId);
        [...testimonials, ...testimonials].forEach((testimonial) =>{
            column.innerHTML += createTestimonialCard(testimonial);
        });
    };
    testimonials.sort(() =>Math.random() -0.5);
    populateColumn("column1");
    testimonials.sort(() =>Math.random() -0.5);
    populateColumn("column2");
    testimonials.sort(() =>Math.random() -0.5);
    populateColumn("column3");
    


       /* mobile version */ 

       const menuIcon = document.querySelector(".menu-icon");
       const closeMenu = document.querySelector(".close-icon");
       const mobileMenuItems = document.querySelector(".mobile-menu-items");
       const allMobileMenuLink = document.querySelectorAll(".mobile-menu-items a");
   
   
       menuIcon.addEventListener("click", ()=>{
           mobileMenuItems.classList.add("active");
   
       });
       closeMenu.addEventListener("click", () =>{
           mobileMenuItems.classList.remove("active");
       });
   
       allMobileMenuLink.forEach((i) =>{
           i.addEventListener("click",() =>{
               mobileMenuItems.classList.remove("active");
           });
       });
   