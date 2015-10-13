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
    var renderTemplate = _.template(templateString);
    _.each(data, function(attrib) {
      console.log('attrib',attrib);
      var freshHTML = renderTemplate(attrib);
      $('.container').append(freshHTML);
    });
      console.log('pr', data);
    });

  return promise;
}());

