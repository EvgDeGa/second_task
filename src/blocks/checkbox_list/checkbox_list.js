(function () {
    for(x = 1; x<5; x++){


        let java =x
        console.log('x ='+ java)
    }
    document.addEventListener("click", function(event){
        let element = event.target
        console.log(element.target)
        try {
            if(element.closest('img').classList.contains("expand-more__img")){
                if(element.closest('div').classList.contains("checkbox-list_open")){
                    element.closest('div').classList.remove("checkbox-list_open")
                }else{
                    element.closest('div').classList.add("checkbox-list_open")
                }
            }
        }catch (err) {
            // console.log(err)
        }
    });
}())