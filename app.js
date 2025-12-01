async function getData(selected_major) {
    var response = await fetch('majors_items.json');  

    if(response.ok) {
        var data = await response.json();

        
        major_items = data.filter( (item) => item.major == selected_major );  

       var templateText = document.getElementById('majortemplate').innerHTML;
       var compiledTemplateText = Handlebars.compile(templateText);   
       compiledHtml = compiledTemplateText({ rows: major_items })      
       document.getElementById('majorTable').innerHTML = compiledHtml; 
     

    }
    else {
       document.querySelector('#majorTable').innerHTML = "There was an error, or menu items not found";
    }	
 
}



