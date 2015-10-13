'use strict';

(function () {

  console.log('It Works!');
})();


(function formjson (keyword) {
  var promise = $.ajax({
    url: 'https://json-data.herokuapp.com/forms',
    dataType: 'json',
    method: 'get',
    success: function(data) {
      console.log('cb', data)
    },
  });

  promise.then(function(data){
    var templateString = $('#itemTemplate').text();
    var templateStringSelect = $('#itemSelector').text();
    var renderTemplate = _.template(templateString);
    var renderSelector = _.template(templateStringSelect);

    _.each(data, function(attrib) {
      
      // var selectHTML = renderSelector(attrib)
      // var SelectOption = $('#selectOption')
      // var renderOption = _.template(selectOption)
      // var SelOptions = attrib.options
      
      // _.each(lang,function {
      //     $('<select>').append(renderOption)
      //   });

      console.log('attrib',attrib);

      if(attrib.options > 0 && type === 'select') {
        $('container').append(selectHTML);
      } else {
        var freshHTML = renderTemplate(attrib);
        $('.container').append(freshHTML);
      }
    });
  });

  return promise;
}())