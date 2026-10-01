function validate()
  {
  var name=document.myform.username.value.trim();
  var password=document.myform.Password.value.trim();
  if(name=="")
  {
    alert("enter the name");
    document.myform.username.focus();
    return false;
  }
  var namePattern=/^[A-Za-z0-9]+$/;
 if(!namePattern.test(name))
 {
    alert("Enter correct name");
    return flase;
 }
 if(password=="")
  {
    alert("enter the password");
    document.myform.Password.focus();
    return false;
  }
  var passwordPattern=/^[A-Za-z0-9]+$/;
 if(!namePattern.test(password))
 {
    alert("Enter correct password");
    return flase;
 }
var correctname="amar";
var correctpassword="4321";
if(name==correctname && password==correctpassword)
{
    alert("login sucessful");
    window.location.href="index.html";
	return false;
    }
    else
    {
        alert("invalid credintials");
		return false;
            }
return true;
  }