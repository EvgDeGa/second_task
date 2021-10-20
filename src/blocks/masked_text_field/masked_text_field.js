(function () {
    jQuery(function($) {
        Inputmask({
            placeholder: "ДД.ММ.ГГГГ",
            alias: "datetime",
            inputFormat: "dd.mm.yyyy"
        }).mask(".masked-text-field_date");
        $(".masked-text-field_date").attr({"placeholder": "ДД.ММ.ГГГГ"});
    })
}())