// Scroll Button

let topButton=document.getElementById("topBtn");

window.onscroll=function(){

if(document.body.scrollTop>300||

document.documentElement.scrollTop>300){

topButton.style.display="block";

}else{

topButton.style.display="none";

}

}

function topFunction(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}
// =====================================================
//              PROTECTED PDF SYSTEM
// =====================================================

// ===== CHANGE YOUR 4 DIGIT CODE HERE =====

const PDF_ACCESS_CODE = "4827";


// ===== GET ELEMENTS =====

const pdfModal = document.getElementById("pdfModal");

const closePdf = document.getElementById("closePdf");

const codeScreen = document.getElementById("codeScreen");

const pdfScreen = document.getElementById("pdfScreen");

const pdfCode = document.getElementById("pdfCode");

const verifyPdf = document.getElementById("verifyPdf");

const errorMessage = document.getElementById("errorMessage");

const viewPdf = document.getElementById("viewPdf");

const downloadPdf = document.getElementById("downloadPdf");

const pdfTitle = document.getElementById("pdfTitle");


// ===== CURRENT PDF =====

let selectedPDF = "";

let selectedTitle = "";


// =====================================================
// OPEN PDF
// =====================================================

document.querySelectorAll(".protected-pdf").forEach(function(link) {

    link.addEventListener("click", function(event) {

        event.preventDefault();


        // PDF path
        selectedPDF = this.getAttribute("data-pdf");


        // PDF name
        selectedTitle = this.textContent.trim();


        // Open popup
        pdfModal.style.display = "flex";


        // Show code screen
        codeScreen.style.display = "block";


        // Hide PDF screen
        pdfScreen.style.display = "none";


        // Reset input
        pdfCode.value = "";

        errorMessage.textContent = "";


        // Focus input
        setTimeout(function() {

            pdfCode.focus();

        }, 200);

    });

});


// =====================================================
// VERIFY CODE
// =====================================================

verifyPdf.addEventListener("click", function() {

    const enteredCode = pdfCode.value.trim();


    // Check 4 digit

    if (!/^\d{4}$/.test(enteredCode)) {

        errorMessage.textContent =
            "⚠️ Please enter a 4-digit code.";

        return;

    }


    // Correct code

    if (enteredCode === PDF_ACCESS_CODE) {

        codeScreen.style.display = "none";

        pdfScreen.style.display = "block";


        // PDF title

        pdfTitle.textContent = selectedTitle;


        // PDF links

        viewPdf.href = selectedPDF;

        downloadPdf.href = selectedPDF;

    }

    // Wrong code

    else {

        errorMessage.textContent =
            "❌ Incorrect code. Please try again.";

        pdfCode.value = "";

        pdfCode.focus();

    }

});


// =====================================================
// ENTER KEY
// =====================================================

pdfCode.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        verifyPdf.click();

    }

});


// =====================================================
// CLOSE
// =====================================================

closePdf.addEventListener("click", function() {

    pdfModal.style.display = "none";

});


// =====================================================
// CLICK OUTSIDE
// =====================================================

pdfModal.addEventListener("click", function(event) {

    if (event.target === pdfModal) {

        pdfModal.style.display = "none";

    }

});
