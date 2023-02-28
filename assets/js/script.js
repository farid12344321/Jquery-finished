
$(document).ready(function () {

    let addBtn = $("button");

    let person = [];



    // if(addBtn.click(function(){
    //     addBtn.val("");
    //     alert("naqasan eee kisi")
    // }))

    
   



   if(localStorage.getItem("fulName") !=null){
       person = JSON.parse(localStorage.getItem("fulName"));
   }


    addBtn.click(function(e){
        e.preventDefault();
        $("ul").empty();


        let strName = $(".input1").val();

        let strSurname = $(".input2").val();

        let strDelete =$(".delete").val();

        

        person.push({
            name: strName,
            surname: strSurname,
            delete: strDelete
        })

        

        localStorage.setItem("fulName", JSON.stringify(person));

        
      
        for (const item of person) {
            $("ul").append(` <li class="list-group-item">${item.name + item.surname + item.delete}</li>`)
        }
    })
      


    

    for (const item of person) {
        $("ul").append(` <li class="list-group-item">${item.name + item.surname + item.delete}</li>`)
    }

    

    // function deleteProduct(person){
    //       person = person.filter(m=>m.person!=person);
    //       localStorage.setItem("fulName", JSON.stringify(person));
    // }


   

    // let deleteIcon =$(".delete")

    // deleteIcon.click(function(e){
    //     e.preventDefault();

        
        
    // })

});