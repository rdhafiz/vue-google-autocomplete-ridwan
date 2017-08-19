var ridwan =  {
    AutoComplete: function(){
        var locInputs = document.querySelectorAll('[data-name="autocomplete"]');
        for(var i=0;i<locInputs.length;i++){
            var input = locInputs[i];
            new google.maps.places.Autocomplete(input, {});
        }
    }
}
module.exports = ridwan;
