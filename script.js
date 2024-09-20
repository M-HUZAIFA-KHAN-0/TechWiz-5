// navbar search icon work start //

        // let svg_search = document.querySelector(".svg-search");
        // let nav_search = document.querySelector(".nav-search");
        
        // svg_search.addEventListener("click", () => {
        //     svg_search.classList.toggle("active")
        //     nav_search.classList.toggle("active")
        // });
        
        // document.addEventListener("click", (e) => {
        //     if(!nav_search.contains(e.target) && e.target !== svg_search) {
        //         svg_search.classList.remove('active')
        //         nav_search.classList.remove("active");
        //     };
        // });
        
        // navbar search icon work end //
        
        // navbar work start
        
        let menu = document.querySelector("#mn-btn");
        let navbar = document.querySelector(".web-nav");
        
        menu.addEventListener("click", () => {
            menu.classList.toggle("active");
            navbar.classList.toggle("active");
        });
        
        document.addEventListener("click", (e) => {
            if(!navbar.contains(e.target) && e.target !== menu) {
                menu.classList.remove('active');
                navbar.classList.remove("active");
            };
        });
        
        // navbar work end
        
        // dropdown work start
        
        let dropToggle = document.querySelector(".drop-n");
        let dropDown = document.querySelector(".drop");
        let dropSvg = document.querySelector(".drop-svg")
        
        
        dropToggle.addEventListener("click", () => {
            dropToggle.classList.toggle("active");
            dropDown.classList.toggle("active");
            dropSvg.classList.toggle("active");
        });
        
        document.addEventListener("click", (e) => {
            if(!dropToggle.contains(e.target) && e.target !== dropDown) {
                dropToggle.classList.remove('active');
                dropDown.classList.remove("active");
                dropSvg.classList.remove("active");
            };
        });

        // second dropdown work start

        let droptoggle = document.querySelector(".drop-d");
        let dropdown = document.querySelector(".drop-ds");
        let dropSvgg = document.querySelector(".drop-svgg")
        
        
        droptoggle.addEventListener("click", () => {
            droptoggle.classList.toggle("active");
            dropdown.classList.toggle("active");
            dropSvgg.classList.toggle("active");
        });
        
        document.addEventListener("click", (e) => {
            if(!droptoggle.contains(e.target) && e.target !== dropdown) {
                droptoggle.classList.remove('active');
                dropdown.classList.remove("active");
                dropSvgg.classList.remove("active");
            };
        });

        // second dropdown work end
        
        // dropdown work end 



        // SEARCH START



        
// let cardSearchInpt = document.getElementById('icon-search');
// let searchBtn = document.getElementById('searchBtn');

//         searchBtn.addEventListener('click', () => {
//     const searchTerm = encodeURIComponent(cardSearchInpt.value.trim());

//     // Check if the search term is not empty
//     if (searchTerm) {
//         // Redirect to the search page with the search term as a query parameter
//         window.location.href = `search.html?query=${searchTerm}`;
//     } else {
//         // Optionally handle the case where the search term is empty
//         alert('Please enter a search term.');
//     }
// });

// Search functionality
// function searchItems() {
// const searchValue = document.getElementById("searchInput").value.toLowerCase();
// const items = document.querySelectorAll("#itemsList li");

// items.forEach(function (item) {
//     const name = item.querySelector(".name").textContent.toLowerCase();
//     const city = item.querySelector(".city").textContent.toLowerCase();
//     const age = item.querySelector(".age").textContent.toLowerCase(); 
//     const job = item.querySelector(".job").textContent.toLowerCase(); 

//     if (name.includes(searchValue) || city.includes(searchValue) || job.includes(searchValue) || age.includes(searchValue)) {
//         item.style.display = "block";
//     } else {
//         item.style.display = "none";
//     }
// });
// }

// // Sort functionality
// function sortItems(attribute) {
// const itemsList = document.getElementById("itemsList");
// const items = Array.from(itemsList.getElementsByTagName("li"));

// items.sort(function (a, b) {
//     const itemA = a.getAttribute(`data-${attribute}`).toLowerCase();
//     const itemB = b.getAttribute(`data-${attribute}`).toLowerCase();
//     return itemA.localeCompare(itemB);
// });

// // Re-append sorted items to the list
// items.forEach(function (item) {
//     itemsList.appendChild(item);
// });
// }

// // Filter functionality for Nazimabad
// function filterdev() {
// const items = document.querySelectorAll("#itemsList li");
// items.forEach(function (item) {
//     if (item.getAttribute("data-job") === "Developer") {
//         item.style.display = "block";
//     } else {
//         item.style.display = "none";
//     }
// });
// }

// // Remove all filters
// function removeFilters() {
// const items = document.querySelectorAll("#itemsList li");
// items.forEach(function (item) {
//     item.style.display = "block";
// });
// }

// contact page work start

let c_btn = document.getElementById("c_btn");

document.getElementById("c_firstName").addEventListener("input",()=>{
      firstName_error.innerHTML = "";
    });
document.getElementById("c_lastName").addEventListener("input",()=>{
  lastName_error.innerHTML = "";
});
document.getElementById("c_email").addEventListener("input",()=>{
  email_error.innerHTML = "";
});
document.getElementById("c_phone").addEventListener("input",()=>{
  phone_error.innerHTML = "";
});
document.getElementById("c_message").addEventListener("input",()=>{
  message_error.innerHTML = "";
});

    c_btn.addEventListener("click", (e) =>
    {

      e.preventDefault();

      let c_firstName = document.getElementById("c_firstName").value;
      let c_lastName = document.getElementById("c_lastName").value;
      let c_email = document.getElementById("c_email").value;
      let c_phone = document.getElementById("c_phone").value;
      let c_message = document.getElementById("c_message").value;

      let Regex_firstName = /^[A-Za-z]+$/
      let Regex_lastName = /^[A-Za-z]+$/
      let Regex_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      let Regex_phone = /^\d{11}$/


      let firstName_error = document.getElementById("firstName_error");
      let lastName_error = document.getElementById("lastName_error");
      let email_error = document.getElementById("email_error");
      let phone_error = document.getElementById("phone_error");
      let message_error = document.getElementById("message_error");

      let firstNameIsValid = false;
      let lastNameIsValid = false;
      let emailIsValid = false;
      let phoneIsValid = false;
      let messageIsValid = false;


      if (c_firstName == '')
      {
        firstName_error.innerHTML = "This Field is required";
      }
      else if (!Regex_firstName.test(c_firstName))
      {
        firstName_error.innerHTML = "Only Alphabets are allowed";
      }
      else{
        firstName_error.innerHTML = "";
        firstNameIsValid = true;
      }

      if (c_lastName == '')
      {
        lastName_error.innerHTML = "This Field is required";
      }
      else if (!Regex_lastName.test(c_lastName))
      {
        lastName_error.innerHTML = "Only Alphabets are allowed";
      }
      else{
        lastName_error.innerHTML = "";
        lastNameIsValid = true;
      }

      if (c_email == '')
      {
        email_error.innerHTML = "This Field is required";
      }
      else if (!Regex_email.test(c_email))
      {
        email_error.innerHTML = "Kindly Enter valid email address";
      }
      else{
        email_error.innerHTML = "";
        emailIsValid = true;
      }

      if (c_phone == '')
      {
        phone_error.innerHTML = "This Field is required";
      }
      else if (!Regex_phone.test(c_phone))
      {
        phone_error.innerHTML = "Kindly enter valid number with length of 11 digits";
      }
      else{
        phone_error.innerHTML = "";
        phoneIsValid = true;
      }

      if (c_message == '')
      {
        message_error.innerHTML = "This Field is required";
      }
      else{
        message_error.innerHTML = "";
        messageIsValid = true;
      }

      // document.getElementById("reset").reset();

      if (firstNameIsValid && lastNameIsValid && emailIsValid && phoneIsValid && messageIsValid)
      {
        let successMessage = document.getElementById("successMessage"); 
        
        successMessage.innerHTML = `<div class="alert alert-success" role="alert">Thank You for contact ss we will contact you soon</div>`;


        setTimeout(()=>{
          successMessage.innerHTML = ""
        },3000)
      }
    });

// contact page work end
// 

// modal work start

let designStyleContainer = document.getElementById(
    "designStyleContainer"
  );
  let descriptionStyleContainer = document.getElementById(
    "descriptionStyleContainer"
  );

  let livingRoomCategoryName = document.getElementById('livingRoomCategoryName');
  let designerName = document.getElementById('designerName');
  let designerDescription = document.getElementById('designerDescription');
  let productNames = document.getElementById('productNames');
  let designerImage = document.getElementById('designerImage');
  let costText = document.getElementById('costText');



  let dataArray = [];
  let singleProdDataArray = [];

  designStyleContainer.innerHTML = "Loading....";
  fetch("allDesignStyle.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      dataArray = data.filter((d) => d.livingRoomCategoryId == 1 );
      console.log(dataArray);
      designStyleContainer.innerHTML = "";

      dataArray.map(({livingRoomCategoryName, livingRoomCategoryId, image, prodId }) => {
        designStyleContainer.innerHTML += `
                 <div class="card" style="background-image: url('${image}');
    background-size: cover;
    background-position: center;">
    <div class="content">
        <button class="btn designStyleViewMoreBtn" data-id='${livingRoomCategoryId}' style="display:none;">View More</button>
         <button type="button" class="btn btn-primary designStyleViewMoreBtn" data-bs-toggle="modal" data-bs-target="#myModal" data-id='${prodId}'>
      Open modal
    </button>
    </div>
    </div> `;

      });


      let designStyleViewMoreBtn = document.querySelectorAll(
        ".designStyleViewMoreBtn"
      );
      designStyleViewMoreBtn.forEach((singleBtn) => {
        singleBtn.addEventListener("click", function () {
            console.log(singleBtn.getAttribute('data-id'))

            let prodId = singleBtn.getAttribute('data-id');
            

            fetch("designStyleData.json")
               .then((response) => response.json())
               .then((data) => {
                    console.log(data);
                    singleProdDataArray = data.filter((d) => d.id == prodId );
                    console.log("single product",singleProdDataArray);
                    livingRoomCategoryName.innerText = singleProdDataArray[0].category
                    designerName.innerText = singleProdDataArray[0].designerName
                    designerDescription.innerText = singleProdDataArray[0].designerDescription
                    designerImage.src = singleProdDataArray[0].designerImage
                    costText.innerText = singleProdDataArray[0].cost

                    productNames.innerHTML = ''
                    singleProdDataArray[0].ProductsName.map((p) =>{
                        productNames.innerHTML += `<ul><li>${p}</li></ul>`
                        console.log("p",p)
                    })
                
                    console.log(productNames,singleProdDataArray[0].ProductsName[0])


               });





        })
    });




    })
    .catch(error => console.error(error));
   


    // modal work end



