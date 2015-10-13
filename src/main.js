(function () {

  console.log('It Works!');
}())


(function formjson (keyword) {
  var promise = $.ajax({
    url: 'https://json-data.herokuapp.com/forms',
    dataType: 'jsonp',
    method: 'get',
    success: function(data) {
      console.log('cb', data)
    },
  });

  promise.then(function(data){
      console.log('pr', data);
    });

  return promise;
}());