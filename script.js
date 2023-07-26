const ul = document.getElementById("list");
var name1 = document.getElementById("exampleInputExpenditure");
var name2 = document.getElementById("exampleDescription");
var name3 = document.getElementById("selectedValue");
var form = document.getElementById("myForm");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form submission and page reload
 
  var value1 = name1.value;

  var value2 = name2.value;

  var value3 = name3.value;

  console.log(value3);

 if(value1 && value2 && value3){
  let obj = {
    Name:value1,
    Email:value2,
    Phone:value3,
}
localStorage.setItem(value2,JSON.stringify(obj));
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(value1));
  li.appendChild(document.createTextNode("-"));
  li.appendChild(document.createTextNode(value2));
  li.appendChild(document.createTextNode("-"));
  li.appendChild(document.createTextNode(value3));

  var del = document.createElement("button");
  del.className = "del btn btn-primary bg-danger ";
  del.appendChild(document.createTextNode("delete Expense"));

  var edit = document.createElement("button");
  edit.className = "edit btn btn-primary bg-success ";
  edit.appendChild(document.createTextNode("edit expense"));
  li.appendChild(del);
  li.appendChild(edit);

  li.style.border ="2px solid green"
  li.style.padding ="10px"
  li.style.borderRadius ="10px"



  ul.appendChild(li);
  

  document.getElementById("myForm").reset();
 }

});


 ul.addEventListener('click' ,(e)=>{

    if(e.target.classList.contains('del')){
      let parent =   e.target.parentNode;

    const nthem = parent.childNodes[2].textContent;
    localStorage.removeItem(nthem);
    e.target.parentNode.remove();
    }
    
    if(e.target.classList.contains('edit')){
        let parent =   e.target.parentNode;

      const nthName = parent.childNodes[0].textContent;

    const nthEmail = parent.childNodes[2].textContent;

    const nthNum = parent.childNodes[4].textContent;

        name1.value = nthName;
        name2.value = nthEmail;
        name3.value  = nthNum;
        localStorage.removeItem(nthEmail);
        e.target.parentNode.remove();
    }


  

 })