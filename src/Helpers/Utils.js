class Utils{
    static renderDatatable(selector, columnToBtn = []){
        if(columnToBtn.length === 0){
            let totalColumn = window.$(selector).find("thead th").length;
            for(let i=0; i<totalColumn-1; i++) columnToBtn.push(i);
        }
        window.$(selector).DataTable({
            dom: 'Bfrtip',
            responsive: true,
            aaSorting : [],
            buttons: [
                { extend: 'copy', exportOptions: { columns: columnToBtn } },
                { extend: 'csv', exportOptions: { columns: columnToBtn } },
                { extend: 'excel', exportOptions: { columns: columnToBtn } },
                { extend: 'pdf', exportOptions: { columns: columnToBtn } },
                { extend: 'print', exportOptions: { columns: columnToBtn } },
            ]
        });
    }
    static renderSelectpicker(){
        window.$('select:not(.ms)').selectpicker('refresh');
    }
    static renderDatePicker(format){
        window.$('.datepicker').bootstrapMaterialDatePicker({
            format: format,
        });
    }
    static renderCountTo(){
        window.$('.count-to').countTo();
    }
    static fixFocus(){
        window.$("form input, form select, form textarea").each(function(x, data){
            if(window.$(data).val() !== "") window.$(this).parents(".form-line").addClass("focused");
        });
    }
    static popError(message){
        window.$.notify({
            icon: 'glyphicon glyphicon-warning-sign',
            message: message,
        }, {
            type: "danger",
            placement: {
                from: "bottom",
                align: "right"
            }
        });
    }
    static popWarning(message){
        window.$.notify({
            icon: 'glyphicon glyphicon-warning-sign',
            message: message,
        }, {
            type: "warning",
            placement: {
                from: "bottom",
                align: "left"
            }
        });
    }
}

export default Utils;