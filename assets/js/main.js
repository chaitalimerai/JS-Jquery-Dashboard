
//Toggle Primary Nav
let navFlag = 0;
$("#toggle-bar").click(function () {
    if (navFlag == 0) {
        navFlag = 1;

        $("#sub-nav").hide();
        $(".nav-list-item").css("opacity", "1");

        if (window.matchMedia('(max-width: 320px)').matches) {
            // change functionality for smaller screens
            $("#primary-nav").css("position", "absolute");
            $("#primary-nav").css("left", "0");
            $("#primary-nav").css("width", "250px");
            $("#primary-nav").css("flex", "0 0 250px");
            $("#primary-nav").css("max-width", "250px");
            $("#primary-nav").css("max-width", "250px");
        }
        else {
            // change functionality for larger screens
            $("#primary-nav").css("flex", "0 0 250px");
            $("#primary-nav").css("max-width", "250px");
        }

    } else {
        $("#primary-nav").css("position", "relative");
        $("#primary-nav").css("flex", "0 0 50px");
        $("#primary-nav").css("max-width", "50px");
        $(".nav-list-item").css("opacity", "0");
        navFlag = 0;
    }
});

//Toggle Sub Nav
$("#openLeftSidebar").click(function () {
    $("#sub-nav").show();
    $("#primary-nav").css("flex", "0 0 50px");
    $("#primary-nav").css("max-width", "50px");
    $(".nav-list-item").css("opacity", "0");
    $("#primary-nav").css("position", "relative");
    navFlag = 0;
});
$("#closeLeftSidebar").click(function () {
    $("#sub-nav").hide();
});

//Toggle Sub Nav
$("#toggleRightSidebar").click(function () {
    $("#secondary-nav").toggle();
});

//Show Dropdown

function toggleDropdown(toggleId) {
    console.log("toggleId: " + toggleId);
    $(toggleId).toggle();
}

//Update Page Title Value
function updateText() {
    var inputVal = $('#editTitle').val();
    // console.log("inputVal: "+inputVal);

    //Set Title Value
    if (inputVal != "")
        $("#content-title").text(inputVal);
    // console.log("title: "+title);
}

//Reset Page Title Value
function resetText() {
    //Reset Title Value
    $("#content-title").text("Page Title Value");
    // Input Val Reset 
    $('#editTitle').val("Page Title Value");
}

//Date Picker
$(function () {
    $("#datepicker").datepicker();
    // $('#datepicker').datepicker({
    //     dateFormat: 'dd/mm/yy',
    // });
    $('input[id$=datepicker]').datepicker({
        dateFormat: 'dd/mm/yy'
    });
});

//Accordian
function callapseData(id, iconId)
{
    let callapseMenu = document.getElementById(id);
    let cardIcon = document.getElementById(iconId);

    if (callapseMenu.style.display === "none") {
        callapseMenu.style.display = "block";
        cardIcon.classList.add("fa-minus");
        cardIcon.classList.remove("fa-plus");
    }
    else
    {
        callapseMenu.style.display = "none";
        cardIcon.classList.remove("fa-minus");
        cardIcon.classList.add("fa-plus");
    }
}
