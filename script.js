 $(document).ready(function(){
    $(".register").click(function(){
        var name=$("#name").val();
        var lname=$("#lname").val();
        var dob=$("#dob").val();
        var aaadharnumber=$("#aaadharnumber").val();
        var title=$("#title").val();
        var age=$("#dom").val();
        var gender=$("#gend").val();
        var email=$("#mail").val();
        var mobile=$("#mobile").val();
        var address=$("add").val();
        var city=$("#cit").val();
        var pincode=$("#pin").val();
        var state=$("#stat").val();
        var country=$("#count").val();
        var feedback=$("feed").val();

 $.ajax({
    type:"GET",
    url:"http://localhost:8080/api/login",
    data:'name='+name+'&lname='+lname+'&dob='+dob+'&aaadharnumber='+aaadharnumber+'&title='+title+'&age='+age+'&gender='+gender+'&email='+email+'&mobile='+mobile+'&address='+address+'&city='+city+'&pincode='+pincode+'&state='+state+'&country='+country+'&feedback='+feedback,
    dataType:"json",
    success:function(res){
        alert(res.result);
    },
    error: function(){
        alert("Check your connection");
    }
 });
    });

});