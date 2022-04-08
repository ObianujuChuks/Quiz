// JavaScript source code
var darkMode;
darkMode = 0;
function DarkMode() {
    if (darkMode == 0) {
        $("body").addClass("dark-bg");
        $(".main-card").addClass("dark-bg-main-card");
        $(".form-control").addClass("dark-bg-form");
        $(".btn-light").addClass("btn-dark");
        $(".fa").addClass
        $("#icon").removeClass("fa fa-moon-o");
        $("#icon").addClass("fa fa-sun-o");
        $("#icon").addClass("btn-dark-light");
        darkMode = 1;
    }else {
        $("body").removeClass("dark-bg");
        $(".main-card").removeClass("dark-bg-main-card");
        $(".form-control").removeClass("dark-bg-form");
        $(".btn-light").removeClass("btn-dark");
        $("#icon").removeClass("fa fa-sun-o");
        $("#icon").addClass("fa fa-moon-o");
        $("#icon").addClass("btn-dark-light");
        darkMode = 0;
    }
}

var fullname, errormsg;

function ValidateAccess() {
    
    fullname = document.getElementById("name").value;
    errormsg = document.getElementById("errormsg");
    localStorage.setItem("fName", fullname);
    if (fullname == "") {
        errormsg.style.display = "inline-block";
        errormsg.innerHTML = "Name is Required!";
        errormsg.style.color = "red";
        errormsg.style.fontSize = "2rem";
    }
    else {
        errormsg.style.display = "none";
        window.location.href = "Questions.html";
    }
}

let person = {
    FName:"Yoma",
    LName:"Uju",
    contact:"090332277889"
};

function UserInfo() {
    alert(person.FName);
}

let Questions = [{
    QNo: "1",
    Question: "What is the largest internal organ?",
    A: "Liver",
    B: "Lung",
    C: "Heart",
    D: "Spleen",
    CorrectAnswer: "A"
},
    {
        QNo: "2",
        Question: "What is the most abundant element?",
        A: "Oxygen",
        B: "Hydrogen",
        C: "Lead",
        D: "Nickel",
        CorrectAnswer:"B"
    },
    {
        QNo: "3",
        Question: "The Full Meaning of UX is?",
        A: "User Experience",
        B: "User Express",
        C: "Useful Expression",
        D: "Useless Experience",
        CorrectAnswer:"A"
    },
    {
        QNo: "4",
        Question: "What was is the name of the first bug ever discovered?",
        A: "A Fly",
        B: "Trojan Bug",
        C: "A Moth",
        D: "A Beetle",
        CorrectAnswer: "C"
    },
    {
        QNo: "5",
        Question: "What is the full meaning PDA?",
        A: "Private Display Assistant",
        B: "Public Display Of Affection",
        C: "Personal Digital Assistance",
        D: "Public Display Assistance",
        CorrectAnswer: "C"
    },
    {
        QNo: "6",
        Question: "The Full Meaning of UI is?",
        A: "User Info",
        B: "User Iformation",
        C: "Useful Interface",
        D: "Useless Icon",
        CorrectAnswer: "C"
    },
    {
        QNo: "7",
        Question: "The Full Meaning of CSS is?",
        A: "Cascading Styling Sheet",
        B: "Cascaded Style Sheet",
        C: "Cascading Style Sheet",
        D: "Cascade Style Sheet",
        CorrectAnswer: "C"
    },
    {
        QNo: "8",
        Question: "Which Company Designed Bootstrap?",
        A: "Instagram",
        B: "Linked in",
        C: "Google",
        D: "Twitter",
        CorrectAnswer: "D"
    },
    {
        QNo: "9",
        Question: "Who made the first Compiler?",
        A: "Admiral Grace Hoppers",
        B: "Ada Lovelace",
        C: "Richard Stallman",
        D: "Alan Turing",
        CorrectAnswer: "A"
    },
    {
        QNo: "10",
        Question: "At what time did the computer industry start to boom?",
        A: "WW1",
        B: "The Depression",
        C: "WW2",
        D: "Not so sure",
        CorrectAnswer: "C"
    },
    {
        QNo: "11",
        Question: "The Full Meaning of HTML is?",
        A: "Hyper Text Mark Language",
        B: "Hyper Text Markup Language",
        C: "Hyper Texting Markup Language",
        D: "Hyper Text Markup Languages",
        CorrectAnswer: "B"
    },
    {
        QNo: "12",
        Question: "What is the first Calculator apart from nature given things?",
        A: "Bones",
        B: "Stick",
        C: "Hands",
        D: "Abacus",
        CorrectAnswer: "D"
    },
    {
        QNo: "13",
        Question: "What was used to store data in the early 1990s?",
        A: "Punch Card",
        B: "Vacuum",
        C: "Transistors",
        D: "Magnetic Tapes",
        CorrectAnswer: "A"
    },
    {
        QNo: "14",
        Question: "What was used to contolr electric voltage In the early1990s?",
        A: "Vinyl Records",
        B: "Transistors",
        C: "Vacuum",
        D: "Magnetic Tapes",
        CorrectAnswer: "C"
    },
    {
        QNo: "15",
        Question: "The Full Meaning of UX is?",
        A: "User Experience",
        B: "User Express",
        C: "Useful Expression",
        D: "Useless Experience",
        CorrectAnswer: "A"
    },
    {
        QNo: "16",
        Question: "The testing of a design within the team that designed it is?",
        A: "Beta Testing",
        B: "Omega Testing",
        C: "Alpha Testing",
        D: "Delta Test",
        CorrectAnswer: "C"
    },
    {
        QNo: "17",
        Question: "Which of the following is not a criteria for good design?",
        A: "Equity",
        B: "Durable",
        C: "Useable",
        D: "Usefull",
        CorrectAnswer: "B"
    },
    {
        QNo: "18",
        Question: "Which of the following is not a type of UX Designer?",
        A: "UX Engineers",
        B: "Motion Designer",
        C: "Visual Designers",
        D: "Interaction Designers",
        CorrectAnswer: "A"
    },
    {
        QNo: "19",
        Question: "Who Coined the name Ux?",
        A: "Jace Norman",
        B: "Dexter Norman",
        C: "William Norman",
        D: "Don Norman",
        CorrectAnswer: "A"
    },
    {
        QNo: "20",
        Question: "What are Wireframes?",
        A: "VR of the product",
        B: "Illustration of  product",
        C: "Outlines and sketches of a product",
        D: "Drawings of a product",
        CorrectAnswer: "C"
    },
]
var Qno;
Qno = 0;
function LoadQuestions() {
    Enabled();
    $("#TotalScore").hide();
    $("#Username").text(localStorage.getItem("fName"));
    $(".form-group > .btn").text("Next");
    $("#TotalQNo").text(Questions.length);

   

    if (Qno <= Questions.length-1) {
        $("#QNo").text(Questions[Qno].QNo);
        $("#Question").text(Questions[Qno].Question);
        $("#optionAValue").text(Questions[Qno].A);
        $("#optionBValue").text(Questions[Qno].B);
        $("#optionCValue").text(Questions[Qno].C);
        $("#optionDValue").text(Questions[Qno].D);

        Uncheck();
        Qno++;
    }
    else {
        
        alert("No available Questions !");
        $("#TotalScore").show();
        Totalscore = 0;
        $("#QNo").text(" ");
        $("#Question").text(" ");
        $("#optionAValue").text(" ");
        $("#optionBValue").text(" ");
        $("#optionCValue").text(" ");
        $("#optionDValue").text(" ");
        $(".form-group > .btn").text("Restart");
        Qno = 0;
        
        //document.location.href="Questions.html"
    }

    
}

//function ShowScore(){
// if ($(".form-group > .btn").text() == "Submit") {
//        $("#TotalScore").show();
//    }
//}

function Uncheck() {
    $("#optionA").prop('checked', false);
    $("#optionB").prop('checked', false);
    $("#optionC").prop('checked', false);
    $("#optionD").prop('checked', false);
}

function Disabled() {
    $("#optionA").attr('disabled', true);
    $("#optionB").attr('disabled', true);
    $("#optionC").attr('disabled', true);
    $("#optionD").attr('disabled', true);
}

function Enabled() {
    $("#optionA").attr('disabled', false);
    $("#optionB").attr('disabled', false);
    $("#optionC").attr('disabled', false);
    $("#optionD").attr('disabled', false);
}

Totalscore = 0;
function CollectAns(selectedoption) {
    var SelectedQNo = $("#QNo").text();
    if (Questions[SelectedQNo - 1].CorrectAnswer == selectedoption) {
      //  alert(selectedoption);
        Totalscore += 5;
       // $("#TotalScore").text(Totalscore);

    }
    else {
        //alert("Wrong answer !!!");
        
    }
    $("#TotalScore").text(Totalscore);
    Disabled();
}
document.onkeydown = function (e) {
    if (event.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I') {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C') {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J') {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}
$(document).bind("contextmenu", function (e) {
    e.preventDefault();
})