function sumbitVal(){

    var location = document.getElementById("loc").value;
    var start = document.getElementById("date").value;
    var drop = document.getElementById("date2").value;

    if(location =="" || start=="" || drop == ""){
        alert("Please fill in the complete details before proceeding futher");
    }
    else{
        var data = ("Start Location = "+location+"\nStart date = "+start+"\nReturn date = "+drop);
        alert(data);
    }
    window.location.reload();
}

function validate(){

    var em = document.getElementById("email").value;
    var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(re.test(em)){
        alert('Email Registered Successfully');
    }
    else{
        alert("Enter valid data");
    }
    window.location.reload();
}