String.prototype.replaceAll = function(target, replacement) {
    return this.split(target).join(replacement);
  };

function callRESTAPI(){
    $.ajax({ 
        type: "GET",
        url: window.location.href+"api/getdiffUTC/"+ ($($('.form-control').get(0)).val().replaceAll('/','%2F')),
        success: function(data){        
          $('#res').val('UTC '+data);
        }
     });
}

$(document).ready(function() {
    
    $('#restCallBTN').on('click',callRESTAPI);
    $('.form-control').select2();
});