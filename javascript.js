function shop(){
alert("Your order is placed");
}
function changeLanguage(language) {
   var element = document.getElementById("url"); 
   element.value = language;
   element.innerHTML = language;
   }
  function sign(){
  alert("Welcome to Fastore")
  }
 function openTab(url){
 const link = document.createElement('a'); 
 link.href = url;
 link.target = '_blank';
 document.body.appendChild(link);
 link.click();
 }



