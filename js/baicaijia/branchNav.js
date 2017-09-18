$.get('http://139.199.192.48:9090/api/getbrandtitle', function(data) {
    $('#branch_ul').html(template('nav_branchdata', data.result));
    console.log(data.result);
});