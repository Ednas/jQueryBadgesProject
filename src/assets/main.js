$(function() {
$.ajax({
    url: 'https://www.codeschool.com/users/ednas.json',
    dataType: 'jsonp',
    success: function(response) {
   for (var i = 0; i < response.courses.completed.length; i++) {
   	$('#badges').append('<div class="course"> <h3>' + response.courses.completed[i].title 
   		+ '<img src=' + response.courses.completed[i].badge + '>'
   		+ '<a class="btn btn-primary" href=' + response.courses.completed[i].url + ' target="_blank">See Course</a>'
   		+ '</h3>'
   		+'</div>');
   };
        console.log(response.courses.completed);
        console.log(response.user);
    }
  });
});
