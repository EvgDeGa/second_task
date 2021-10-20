(function () {
    const buttonMenu = document.getElementsByClassName("button-menu")
    const dropdownInformation = document.getElementsByClassName("dropdown-information")
    const dropdownMenu = document.getElementsByClassName("dropdown-menu")

    document.addEventListener("click", function(event){
        let tar = event.target
        // if(tar.closest('img').classList.contains("button-menu")){
            if(tar.closest('div').classList.contains("dropdown-information__menu-open")){
                tar.closest('div').classList.remove("dropdown-information__menu-open")
            }else{
                tar.closest('div').classList.add("dropdown-information__menu-open")
            }
        // }
        console.log(event.target.closest('img').classList.contains("button-menu"))
    });

}())