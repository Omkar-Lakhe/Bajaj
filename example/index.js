
$(document).ready(()=>{
    $.ajax({
        url: "http://localhost:5174/login",
        type:"GET",
        dataType:"Html",
        success: function(data){
            $('#insurance').html(data);
        },error:function(err){

            console.log("error in fetching the website",err.message)

        }
    })
})