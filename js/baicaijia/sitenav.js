$.get('http://139.199.192.48:9090/api/getsitenav', function(data) {
    $('#nav_list').html(template('nav_data', data.result));
    // console.log(data.result);
});