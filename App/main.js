"use strict"
function login_fun()
{
    document.getElementById('login').style.display="block";
     document.getElementById('register').style.display="none";
     document.getElementById('home').style.display="none";
      document.getElementById('aboutus').style.display="none";
     document.getElementById('contact').style.display="none";
     document.getElementById('an').style.display="none";
     document.getElementById('footer').style.display="none";

}
var xhttp;
function login_form()
{
    var uname=document.getElementById('username').value;
     var pwd=document.getElementById('password').value;
    var login_type;
    if(document.getElementById('buyer').checked)
    login_type=1;
    else if(document.getElementById('seller').checked)
    login_type=2;
     else if(document.getElementById('admin').checked)
     login_type=3;
     var s="/hai1/"+uname+"$"+pwd+"$"+login_type;
    if(login_type==1)
    {
     xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
         var d=(JSON.parse(xhttp.responseText));
         if(d.length==0)
         {
           alert("Invalid username or password");
         }
         else {
           afterlogin_action(d);
         }


    }
};
xhttp.open("GET", s, true);
xhttp.send();
}
else
{
     xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
         var d=(JSON.parse(xhttp.responseText));
         if(d.length==0)
         {
           alert("Invalid username or password");
         }
         else {
           after_seller_login_action(d);
         }

    }
};
xhttp.open("GET", s, true);
xhttp.send();
}
}
function after_seller_login_action(d)
{
     document.getElementById('title').style.display="none";
     document.getElementById('navigation_bar').style.display="none";

    document.getElementById('login').style.display="none";
    document.getElementById('after_seller_login').style.display="block";
    document.getElementById('seller_login_name').innerHTML=d[0]["sname"];
     document.getElementById('seller_login_email').innerHTML=d[0]["semail"];
      document.getElementById('seller_login_number').innerHTML=d[0]["smobile"];

}
function afterlogin_action(d)
{
     document.getElementById('title').style.display="none";
     document.getElementById('navigation_bar').style.display="none";

    document.getElementById('login').style.display="none";
    document.getElementById('loginpage').style.display="block";
    document.getElementById('login_name').innerHTML=d[0]["cname"];
     document.getElementById('login_email').innerHTML=d[0]["cmail"];
      document.getElementById('login_number').innerHTML=d[0]["cmobile"];
}
function register_fun()
{
     document.getElementById('login').style.display="none";
     document.getElementById('register').style.display="block";
     document.getElementById('home').style.display="none";
      document.getElementById('aboutus').style.display="none";
     document.getElementById('contact').style.display="none";
     document.getElementById('an').style.display="none";
}
function register_buyer()
{
      document.getElementById('buyer_register').style.display="block";
       document.getElementById('seller_register').style.display="none";
}
function register_seller()
{
      document.getElementById('buyer_register').style.display="none";
       document.getElementById('seller_register').style.display="block";
}
function home_fun()
{
   document.getElementById('login').style.display="none";
     document.getElementById('register').style.display="none";
     document.getElementById('home').style.display="block";
      document.getElementById('aboutus').style.display="none";
     document.getElementById('contact').style.display="none";
     document.getElementById('an').style.display="none";
}
function aboutus_fun()
{
 document.getElementById('login').style.display="none";
     document.getElementById('register').style.display="none";
     document.getElementById('home').style.display="none";
      document.getElementById('aboutus').style.display="block";
     document.getElementById('contact').style.display="none";
     document.getElementById('a').style.display="none";
}
function achievements_fun()
{
    document.getElementById('login').style.display="none";
     document.getElementById('register').style.display="none";
     document.getElementById('home').style.display="none";
      document.getElementById('aboutus').style.display="none";
     document.getElementById('contact').style.display="none";
     document.getElementById('an').style.display="block";
}
function contact_fun()
{
    document.getElementById('login').style.display="none";
     document.getElementById('register').style.display="none";
     document.getElementById('home').style.display="none";
      document.getElementById('aboutus').style.display="none";
     document.getElementById('contact').style.display="block";
     document.getElementById('an').style.display="none";
}
function s()
{
     document.getElementById('register').style.display="block";
     document.getElementById('home').style.display="none";
      document.getElementById('buyer_register').style.display="none";
      document.getElementById('seller_register').style.display="block";
}
function b()
{
     document.getElementById('register').style.display="block";
     document.getElementById('home').style.display="none";
      document.getElementById('buyer_register').style.display="block";
       document.getElementById('seller_register').style.display="none";
}
function propertyregister_fun()
{
     var namee=document.getElementById('property_id').value;
     var size=document.getElementById('property_size').value;
    var  parea=document.getElementById('property_city').value;
     var des=document.getElementById('pdesc').value;
       var ptype=document.getElementById('property_type');
    var choice = ptype.options[ptype.selectedIndex].text;
    var s="/hello2/"+namee+"$"+choice+"$"+parea+"$"+size+"$"+des;
     var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById('id011').style.display='block';
        document.getElementById('one').innerHTML='Property-type: '+choice;
          document.getElementById('two').innerHTML='Size: '+size+'sq.ft';
            document.getElementById('three').innerHTML='Location: '+parea;
              document.getElementById('four').innerHTML='Description: '+des;
    }
};
xhttp.open("GET", s, true);
xhttp.send();
}
function buyerregister_form()
{
    var name,contact,email,password;
    name=document.getElementById('buyer_name').value;
    contact=document.getElementById('buyer_contact').value;
    email=document.getElementById('buyer_email').value;
    password=document.getElementById('buyer_password').value;
	//alert(contact);
  var s="/hai/"+name+"$"+email+"$"+contact+"$"+password;

    var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById('id01').style.display='block';
         document.getElementById('set').innerHTML=xhttp.responseText+" You've successfully registered as a buyer on E-estate";
    }
};
xhttp.open("GET", s, true);
xhttp.send();
}
function sellerregister_form()
{
     var namex,contact,email,password,ptype,parea,city,size,des;
    namex=document.getElementById('seller_name').value;
    contact=document.getElementById('seller_contact').value;
    email=document.getElementById('seller_email').value;
    password=document.getElementById('seller_password').value;
	//alert(contact);
     var s="/hello/"+namex+"$"+email+"$"+password+"$"+contact;
    var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
         document.getElementById('id01').style.display='block';
         document.getElementById('set').innerHTML=xhttp.responseText+" You've successfully registered as a seller on E-estate";
    }
};
xhttp.open("GET", s, true);
xhttp.send();
}
function seller_home()
{
    document.getElementById('seller_updateprofile').style.display="none";
     document.getElementById('seller_add_property').style.display="none";
      document.getElementById('seller_remove_property').style.display="none";
           document.getElementById('login_seller_main_display').style.display="none";
     document.getElementById('login_seller_main_display').style.display='block';
}
function seller_update()
{
    document.getElementById('seller_updateprofile').style.display="block";
     document.getElementById('seller_add_property').style.display="none";
      document.getElementById('seller_remove_property').style.display="none";
           document.getElementById('login_seller_main_display').style.display="none";


}
function onseller_profile_update()
{
    var name=document.getElementById('updated_seller_name').value;
    var mobile=document.getElementById('updated_seller_mobile').value;
    var email=document.getElementById('updated_seller_email').value;
    var password=document.getElementById('updated_seller_password').value;
    if(name==""||mobile==""||email==""||password=="")
    window.alert("please enter all the fields");
    else
    {
         var s="/update1/"+name+"$"+email+"$"+password+"$"+mobile;
    var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       alert("Your profile has been successfully updated");
       document.getElementById('login_seller_main_display').style.display='block';
       document.getElementById('seller_updateprofile').style.display='none';
        document.getElementById('seller_login_name').innerHTML=name;
     document.getElementById('seller_login_email').innerHTML=email;
      document.getElementById('seller_login_number').innerHTML=mobile;

    }
};
xhttp.open("GET", s, true);
xhttp.send();
    }
}
function seller_addproperty()
{
    document.getElementById('login_seller_main_display').style.display="none";
     document.getElementById('seller_updateprofile').style.display="none";
     document.getElementById('seller_add_property').style.display="block";
      document.getElementById('seller_remove_property').style.display="none";
}
function seller_removeproperty()
{
     document.getElementById('seller_updateprofile').style.display="none";
     document.getElementById('seller_add_property').style.display="none";
      document.getElementById('seller_remove_property').style.display="block";
           document.getElementById('login_seller_main_display').style.display="none";
}
function seller_logout()
{
    if(confirm("Are you sure?? Do you want to logout??")==true)
      {
      document.getElementById('title').style.display="block";
     document.getElementById('navigation_bar').style.display="block";
     document.getElementById('after_seller_login').style.display="none";
		window.location.reload();
         home_fun();
      }

}
var dd;
function customer_bookproperty_loc()
{
    var loc=document.getElementById('customer_book_property').value;
     var s="/bookproperty/"+loc;
    var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
          dd=(JSON.parse(xhttp.responseText));
        document.getElementById('customerbook').style.display="none";
       document.getElementById('book_property_details').style.display="block";
        document.getElementById('booked_property_type').innerHTML="Property-type: "+dd[0]["ptype"];
         document.getElementById('booked_property_area').innerHTML="Location: "+dd[0]["parea"];
          document.getElementById('booked_property_size').innerHTML="Size: "+dd[0]["psize"]+" sq.ft";
           document.getElementById('booked_property_description').innerHTML="About property: "+dd[0]["pdescription"];


    }
};
xhttp.open("GET", s, true);
xhttp.send();
}
var i=0;
function property_next_button()
{
  i++;
  if(i==dd.length)
  {
    alert("Sorry there are no more registered properties in "+dd[0]["parea"]);
  }
  else {
    {
      document.getElementById('booked_property_type').innerHTML="Property-type: "+dd[i]["ptype"];
       document.getElementById('booked_property_area').innerHTML="Location: "+dd[i]["parea"];
        document.getElementById('booked_property_size').innerHTML="Size: "+dd[i]["psize"]+" sq.ft";
         document.getElementById('booked_property_description').innerHTML="About property: "+dd[i]["pdescription"];

    }
  }

}
function checkout()
{
	var email=document.getElementById('after_property_book_email').value;
  var c_no=document.getElementById('after_property_book_card_number').value;
  var c_name=document.getElementById('after_property_book_card_name').value;
  var date=document.getElementById('after_property_book_expirydate').value;
  var s="/trans/"+email+"$"+c_no+"$"+c_name+"$"+date;
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
  document.getElementById('id5').style.display="block";
}
};
xhttp.open("GET", s, true);
xhttp.send();
}
function property_book_button(){
  document.getElementById('after_property_book').style.display="block";
  document.getElementById('login_main_display').style.display='none';
   document.getElementById('customerupdate').style.display='none';
 document.getElementById('customerbook').style.display='none';
 document.getElementById('cancelproperty').style.display='none';
 document.getElementById('book_property_details').style.display="none";

}
function customer_home()
{
  document.getElementById('after_property_book').style.display="none";
     document.getElementById('login_main_display').style.display='block';
      document.getElementById('customerupdate').style.display='none';
    document.getElementById('customerbook').style.display='none';
    document.getElementById('cancelproperty').style.display='none';
    document.getElementById('book_property_details').style.display="none";
}
function customer_update()
{
    document.getElementById('customerupdate').style.display='block';
    document.getElementById('customerbook').style.display='none';
    document.getElementById('cancelproperty').style.display='none';
    document.getElementById('login_main_display').style.display='none';
    document.getElementById('book_property_details').style.display="none";

}
function customer_bookproperty()
{
     document.getElementById('login_main_display').style.display='none';
    document.getElementById('login_main_display').style.display='none';
     document.getElementById('customerupdate').style.display='none';
    document.getElementById('customerbook').style.display='block';
    document.getElementById('cancelproperty').style.display='none';
    document.getElementById('book_property_details').style.display="none";
}
function customer_cancelproperty()
{
    document.getElementById('login_main_display').style.display='block';
    document.getElementById('customerupdate').style.display='none';
    document.getElementById('customerbook').style.display='none';
    document.getElementById('cancelproperty').style.display='block';
    document.getElementById('book_property_details').style.display="none";
    if(confirm("Do you want to cancel booked property??")==true)
    window.alert("Booked property has been cancelled");

}
function customer_logout()
{
    if(confirm("Are you sure?? Do you want to logout??")==true)
      {
           document.getElementById('customerupdate').style.display='none';
    document.getElementById('customerbook').style.display='none';
    document.getElementById('cancelproperty').style.display='none';
      document.getElementById('loginpage').style.display='none';
      document.getElementById('title').style.display="block";
      document.getElementById('book_property_details').style.display="none";
     document.getElementById('navigation_bar').style.display="block";
	 window.location.reload();
         home_fun();
       }
}
function oncustomer_profile_update()
{
    var name=document.getElementById('updated_customer_name').value;
    var mobile=document.getElementById('updated_customer_mobile').value;
    var email=document.getElementById('updated_customer_email').value;
    var password=document.getElementById('updated_customer_password').value;
    if(name==""||mobile==""||email==""||password=="")
    window.alert("please enter all the fields");
    else
    {
         var s="/update/"+name+"$"+email+"$"+mobile+"$"+password;
    var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       alert("Your profile has been successfully updated");
       document.getElementById('login_main_display').style.display='block';
       document.getElementById('customerupdate').style.display='none';
       document.getElementById('book_property_details').style.display="none";
        document.getElementById('login_name').innerHTML=name;
     document.getElementById('login_email').innerHTML=email;
      document.getElementById('login_number').innerHTML=mobile;

    }
};
xhttp.open("GET", s, true);
xhttp.send();
    }
    }
