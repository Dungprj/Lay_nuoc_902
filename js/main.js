function displayChoice() {
    let selectBox = document.getElementById("mySelect");
    let selectedOption = selectBox.value;
    
    let circle = document.querySelector("body > div > div > div.circle");
    let pp1 = document.querySelector(".circle-con_1");
    let pp2 = document.querySelector(".circle-con_2");

    let pp3 = document.querySelector(".circle-con_3");
    let pp4 = document.querySelector(".circle-con_4");
    let pp5 = document.querySelector(".circle-con_5");

    if(selectedOption == 1)
    {
        circle.style.transform = "rotate(0deg)";
        setCouterrotate(0);
        removeRed();
        pp2.classList.add("red");
        

    }else if(selectedOption ==2)
    {
        circle.style.transform = "rotate(72deg)";
        setCouterrotate(72);
        removeRed();
        pp1.classList.add("red");

    }else if(selectedOption ==3)
    {
        circle.style.transform = "rotate(144deg)";
        setCouterrotate(144);
        removeRed();

        pp4.classList.add("red");

    }else if(selectedOption ==4)
    {
        circle.style.transform = "rotate(216deg)";
        setCouterrotate(216);
        removeRed();

        pp5.classList.add("red");

    }else if(selectedOption ==5)
    {
        circle.style.transform = "rotate(288deg)";
        setCouterrotate(288);
        removeRed();

        pp3.classList.add("red");

    }
    console.log("da chon ",selectedOption);
   
}

function handleButtonClick() {
    displayChoice();
}


function setCouterrotate(de) {
    let circle_diemdanh = document.querySelector("body > div > div > div.circle > div.hole_diem_danh")
    var ccElements = document.querySelectorAll(".cc"); // Lấy danh sách các phần tử có class "cc"
    circle_diemdanh.style.transform = `rotate(${-de}deg)`;
        ccElements.forEach(function(element) {
          
           element.style.transform = `rotate(${-de}deg)`;
          
        });
    
}

function removeRed() {
    var ccElements = document.querySelectorAll(".cc"); // Lấy danh sách các phần tử có class "cc"
   
        ccElements.forEach(function(element) {
           
           element.classList.remove("red");
          
        });
    
}
