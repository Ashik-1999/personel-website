$(document).ready(function(){
    $("#form-validation").validate({
        rules:{
            fname:{
                required:true,
                minlength:3
            },
            phonenumber:{
                required:true,
                number:true,
                minlength:10,
                
               maxlength:10
                
            },
            mail:{
                required:true,
                minlength:3,
                email:true
            },
            subject:{
                required:true,
                minlength:3
            }
         
},
messages:{
    fname:{
        required:"This field is mandatory",
        minlength:"Please enter atleast three characters"
         },
    phonenumber:{
        required:"This field is mandatory",
        number:"Enter numbers only",
        minlength:"Please enter atleast ten characters",
       maxlength:"Please enter valid number"
        
    },
    mail:{
        required:"This field is mandatory",
        email:"Please enter a valid maild id"
         },
         subject:{
            required:"This field is mandatory",
            minlength:"Please enter atleast three characters"
             },
}

})



})


