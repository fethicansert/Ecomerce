const file = document.querySelector('input');
const preview = document.getElementById('preview');
const loader = document.getElementById("loader");
file.addEventListener('change',()=>{

    const fr = new FileReader();

    // fr.readAsText(file.files[0],"UTF-8");
    // it take times to read File so we use 'load' event on fr
    
    
    fr.readAsText(file.files[0],"UTF-8");

    fr.addEventListener('loadstart',()=>{
        console.log("Load Start");
    });

    fr.addEventListener('progress',()=>{
        console.log("Loading Progress");
    });


    fr.addEventListener('loadend',()=>{
        console.log("Load End");
    });

    fr.addEventListener("load",()=>{
        preview.textContent = fr.result;
        console.log("Load successfully");
    });

    fr.addEventListener("error",()=>{
        console.log("Error");
    });

});



