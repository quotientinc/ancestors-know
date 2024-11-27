// Handle click on menu button.
$("#nav .toggle").on("click", function (event) {
    // Force menu open for keyboard nav.
    event.preventDefault();
    let isOpen = $('#nav').attr('open');
    if (isOpen !== undefined) {
        closeMenu();
    } else {
        $('#nav').attr('open',true);
        $('#nav').prop('open',true);
    }
    navigateMenu();
});

// Handle enter key on menu button
$("#nav .toggle").on('keyup', function (event) {
    if (event.key === "Enter" || event.key === "NumpadEnter") {
        navigateMenu();
    }
});

// Function to navigate navigation bar with arrows for accessibility.
function navigateMenu(){
    var ul = document.querySelector('#nav-wrapper nav ul');
    var liSelected;
    var index = -1;
    
    ul.addEventListener('keydown', function(event) {
        var len = ul.getElementsByTagName('a').length - 1;
        if (!(event.shiftKey) && (event.key === 'ArrowDown' || event.key === 'Tab')) {
            event.preventDefault();
            index++;
            //down
            if (liSelected) {
                next = ul.getElementsByTagName('a')[index];
                if (typeof next !== undefined && index <= len) {
                    liSelected.focus();
                    liSelected = next;
                } else {
                    index = 0;
                    liSelected = ul.getElementsByTagName('a')[0];
                    liSelected.focus();
                    closeMenu();
                }
                liSelected.focus();
            } else {
                index = 1;
                liSelected = ul.getElementsByTagName('a')[1];
                liSelected.focus();
            }
        } else if (event.key === 'ArrowUp' || (event.shiftKey && event.key === 'Tab')) {
            event.preventDefault();
            //up
            if (liSelected) {
                index--;
                next = ul.getElementsByTagName('a')[index];
                if (typeof next !== undefined && index >= 0) {
                    liSelected = next;
                    liSelected.focus();
                } else {
                    $("#nav .toggle").focus();
                    closeMenu();
                }
            } else {
                $("#nav .toggle").focus();
                closeMenu();
            }
        }
    }, false);
}

// Function to close menu.
function closeMenu() {
    $('#nav').removeAttr('open');
}