
$( "#datepicker" ).datepicker({
    beforeShowDay: function(date){ 
        $('.time').hide();
        $('#picked').hide();
        return [date.getDay() == 6 || date.getDay() == 0,""];
    },
    onSelect: function(date){
        $('.time').show();
        //removing not available times from showing
        var notAvailableTimes = getNotAvailableTimes(date);
        for (var i=0; i<notAvailableTimes.length; i++){
            $('#' + notAvailableTimes[i]).hide();
        }
    }
});

$('.time').hide();
$('#picked').hide(); 
function getNotAvailableTimes (date){

    //I need to receive array of hours in this format from the backend
    return [9, 10, 11, 12, 4];
}


$('.time').on('click', function() {
    $('#picked').show();
    var selectedDate = $('#datepicker').val();
    var selectedTime = this.innerText;
    $('#date-picked').append(selectedDate);
    $('#time-picked').append(selectedTime);
});

$('#submit').on('click', function() {
    console.log()
})