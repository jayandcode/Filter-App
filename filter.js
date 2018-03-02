document.addEventListener("DOMContentLoaded", function(){

// gloabl variables
const contactsList = document.querySelector(".show-list");
const userSearch = document.querySelector("#userSearch");
let output = "";

userSearch.addEventListener("keyup", filterContacts);

  // sort contacts in alpha order;
  function sortContacts(arr){
    arr.sort(function(a,b){
      if (a < b) return -1;
        else if (a > b) return 1;
        return 0;
    });
    return arr;
  }
  sortContacts(contacts);
  // add contacts to list


 contacts.forEach(function(contact){
  output += `<li class="list-item">
             <a href="#">${contact}</a>
             </li>`
 });
 contactsList.innerHTML = output;
// filter contacts
 function filterContacts(){
  //  get input value
  var filter = this.value.toUpperCase();
  // get list items inside contactsList
  let li = contactsList.querySelectorAll(".list-item");
  for(let i = 0; i < li.length; i++){
    let a = li[i].querySelectorAll("a")[0];
    if(a.innerHTML.toUpperCase().indexOf(filter) > -1){
      li[i].style.display = "block";
    }
    else {
      li[i].style.display = "none";
    }
  }
 }

// dom content end
});
