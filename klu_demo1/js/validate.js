function validate()
          { 
        var name = document.myform.UserName.value.trim();
        var password = document.myform.Password.value.trim();
         if (name == "")
         { 
        alert("Enter user name");
        document.myform.UserName.focus();
        return false;
           } 
    
      var namePattern = /^[A-Za-z]+$/; 
        if (!namePattern.test(name))
        { 
        alert("Enter correct user name"); 
         document.myform.UserName.focus(); 
        return false;
         } 
      if (password == "") 
        { 
      alert("Enter user password");
      document.myform.Password.focus(); 
      return false;
         }
       var passwordPattern = /^[A-Za-z0-9@#$]+$/;
        if (!passwordPattern.test(password))
           {
           alert("Enter a valid password");
          document.myform.Password.focus(); 
           return false;
             }
			 var correctUsername="admin";
			 var correctPassowrd="123456";
			 if(name=="correctUsername" && password=="correctPassowrd")
      			 {
				 alert("login sucessfully");
				 window.location.href="index.html";
				 }
				 else
				 {
					 alert("invalid credintials");
				 }
						 
            alert("Submitted successfully");
            return true; 
      }