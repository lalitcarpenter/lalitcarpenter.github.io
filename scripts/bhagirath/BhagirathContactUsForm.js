


var recaptcha1;
var onloadCallback = function () {


    //Render the recaptcha2 on the element with ID "recaptcha2"
    recaptcha1 = grecaptcha.render('recaptcha1', {
        // 'sitekey': '6LdbQ78UAAAAAG_yeb6RlZ-5RBu1YZlwWcu1B134', //Replace this with your Site key
        'sitekey': '',
        'theme': 'light'
    });


};



$("#btnContactUsSubmit").click(function () {
   var response;
    // = grecaptcha.getResponse(recaptcha1);
    // if (response.length  ==  0) {
    //        alert("Captcha required.");
    //        return false;
    //    }

    $('#btnContactUsSubmit').attr("disabled", "disabled");
    var name = $("#cname").val();
    if (name == "") { alert("Please enter your Name"); $("#cname").focus(); $('#btnContactUsSubmit').removeAttr("disabled"); return false; }
    var mailid = $("#cmailid").val();
    if (mailid == "") { alert("Email is Required"); $("#cmailid").focus(); $('#btnContactUsSubmit').removeAttr("disabled"); return false; }

    var ccontactno = $("#ccontactno").val();
    if (ccontactno == "") { alert("Please specify your Mobile Number"); $("#ccontactno").focus(); $('#btnContactUsSubmit').removeAttr("disabled"); return false; }

    if (ccontactno.length != 10) {
        alert("Contact Number should be of 10 digit"); $("#ccontactno").focus(); $('#btnContactUsSubmit').removeAttr("disabled"); return false;

    }

    var message = $("#cmessage").val();
    if (message == "") { alert("Please enter any message"); $("#cmessage").focus(); $('#btnContactUsSubmit').removeAttr("disabled"); return false; }
    var messagetype = $("#cmessageType").val();
    if (messagetype == "") { alert("Please specify your subject to the message"); $("#cmessageType").focus(); $('#btnContactUsSubmit').removeAttr("disabled"); return false; }


    var formtype = $("#cFormType").val();
    var pageinfo = window.location.href;
    if (!validateEmail(mailid)) { alert("Please enter valid email address"); $("#cmailid").focus(); $('#btnContactUsSubmit').removeAttr("disabled"); return false; }



    function validateEmail(sEmail) {
        var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        if (filter.test(sEmail)) { return true; }
        else { return false; }
    }

    var model = {

        Name: name,
        Mobile: ccontactno,
        Email: mailid

    };

    var currentdate = new Date().toISOString().slice(0, 19).replace('T', ' ');

    //create json object
    var savecustomdata = {


        Name: name,
        Email: mailid,
        Mobile: ccontactno,
        Message: message,
        reResponse: response,
        MessageType: messagetype,
        FormType: formtype,
        PageInfo: pageinfo,
        FormSubmitOn: currentdate


    };
// console.log(savecustomdata);
    //ajax calling to insert  custom data function
    $.ajax({
        type: "POST",
        data: JSON.stringify(savecustomdata),
        // url: "/api/Wilmar/InsertContact",
        url: "",
        contentType: "application/json",
        success: function (data) {
            //////////////

            if (data.status == "1") {s
                window.location.href = "/thankyou";
                //$('#contact_form1').submit();
            }
            else {
                alert("Sorry Operation Failed!!! Please try again later");
                $('#btnContactUsSubmit').removeAttr("disabled");
                return false;
            }
        }
    });
    return false;


    $.ajax({
        type: "POST",
        data: JSON.stringify(model),
        // url: "/api/Wilmar/CreateOTP",
        url: "",
        contentType: "application/json",
        success: function (data) {
            if (data.status == "1") {
                var otp = prompt("Please enter OTP received on your mobile", "");

                if (otp != null) {

                    var generatedOtp = {
                        mobile: mobile,
                        OTP: otp,
                    }
                    $.ajax({
                        type: "POST",
                        data: JSON.stringify(generatedOtp),
                        // url: "/api/Wilmar/VerifyOTP",
                        url: "",
                        contentType: "application/json",
                        success: function (data) {
                            if (data.status == "1") {
                                window.location.href = "/thankyou";
                                //$('#contact_form1').submit();
                            }
                            else if (data.status == "2") {
                                alert("OOPS! You have missed Captcha Validation. Kindly validate to proceed further.");
                                $('#btnContactUsSubmit').removeAttr("disabled");
                                return false;
                            }
                            else {
                                alert("Sorry Operation Failed!!! Please try again later");
                                $('#btnContactUsSubmit').removeAttr("disabled");
                                return false;
                            }
                        }
                    });

                }
            }
            else if (data == "-1") {
                alert("Invalid Mobile Number");
                $('#btnContactUsSubmit').removeAttr("disabled");
            }
        }
    });

    return false;
});
$("#btnContactUsSubmits").click(function () {
        var reResponse = grecaptcha.getResponse(recaptcha1);
        if (reResponse.length == 0) {
            alert("Captcha required.");
            return false;
        }
		else
		{
			$("#gresponse").val(reResponse);
		}

        $('#btnContactUsSubmits').attr("disabled", "disabled");
        var name = $("#cnames").val();
        if (name == "") { alert("Please enter your Name"); $("#cnames").focus(); $('#btnContactUsSubmits').removeAttr("disabled"); return false; }
        var mailid = $("#cmailids").val();
        if (mailid == "") { alert("Email is Required"); $("#cmailids").focus(); $('#btnContactUsSubmits').removeAttr("disabled"); return false; }

        var ccontactno = $("#ccontactnos").val();
        if (ccontactno == "") { alert("Please specify your Mobile Number"); $("#ccontactnos").focus(); $('#btnContactUsSubmits').removeAttr("disabled"); return false; }

        if (ccontactno.length != 10) {
            alert("Contact Number should be of 10 digit"); $("#ccontactnos").focus(); $('#btnContactUsSubmits').removeAttr("disabled"); return false;

        }

        var message = $("#cmessages").val();
        if (message == "") { alert("Please enter any message"); $("#cmessages").focus(); $('#btnContactUsSubmits').removeAttr("disabled"); return false; }
        var messagetype = $("#cmessageTypes").val();
        if (messagetype == "") { alert("Please specify your subject to the message"); $("#cmessageTypes").focus(); $('#btnContactUsSubmits').removeAttr("disabled"); return false; }

        var FileAttachment = $("#file").val();
        if (FileAttachment == "") { alert("Please upload the document"); $("#file").focus(); $('#btnContactUsSubmits').removeAttr("disabled"); return false; }
        if (FileAttachment != "") { var fileUpload = $("#file").get(0); var files = fileUpload.files; files = files[0].name; }

        var formtype = $("#cFormTypes").val();
        var pageinfo = window.location.href;
        if (!validateEmail(mailid)) { alert("Please enter valid email address"); $("#cmailids").focus(); $('#btnContactUsSubmits').removeAttr("disabled"); return false; }



        function validateEmail(sEmail) {
            var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
            if (filter.test(sEmail)) { return true; }
            else { return false; }
        }


        var currentdate = new Date().toISOString().slice(0, 19).replace('T', ' ');



        function uploadfile(obj) {
            alert($('#file').text(this.val()));

        }

        $('#contact_forms').submit();
        return;

    });
