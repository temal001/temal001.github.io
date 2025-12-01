async function getData(selected_major) {
    var response = await fetch('majors_items.json');   // this is a GET request

    if(response.ok) {
        var data = await response.json();

        // filter data array for the selected meal
        major_items = data.filter( (item) => item.major == selected_major );  

       var templateText = document.getElementById('majortemplate').innerHTML;
       var compiledTemplateText = Handlebars.compile(templateText);   // get and compile template code
       compiledHtml = compiledTemplateText({ rows: major_items })      // apply data to template
       document.getElementById('majorTable').innerHTML = compiledHtml; 
       // Hacer visible
       document.getElementById('btn_clear').style.visibility = 'visible';

    }
    else {
       document.querySelector('#majorTable').innerHTML = "There was an error, or menu items not found";
    }	
 
}


//this is to clear the request
function clearData() {
    document.getElementById('majorTable').innerHTML = '';
    document.getElementById('btn_clear').style.visibility = 'hidden';
}

