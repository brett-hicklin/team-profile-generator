function generateManagerHTML(manager){
   
return `<div class="card col-md-6 m-2" style="width: 16rem;">
        <div class="card-body">
            
          <h3 class="card-title">${manager.getName()}</h3>
          <h4 class="card-subtitle mb-2 text-muted ">${manager.getRole()}</h4>
            
          <ul class="list-group list-group-flush">
            <li class="list-group-item">${manager.getId()}</li>
            <li class="list-group-item">${manager.getEmail()}</li>
            <li class="list-group-item">${manager.getOfficeNumber()}</li>
          </ul>
        </div>
        
      </div>
      `
}

function generateEngineerHTML(engineerArr){
    let html = '';
    engineerArr.forEach((engineer)=>{
        
        html += `<div class="card col-md-6 m-2" style="width: 16rem;">
    <div class="card-body">
        
      <h3 class="card-title">${engineer.getName()}</h3>
      <h4 class="card-subtitle mb-2 text-muted ">${engineer.getRole()}</h4>
        
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${engineer.getId()}</li>
        <li class="list-group-item">${engineer.getEmail()}</li>
        <li class="list-group-item">${engineer.getGithub()}</li>
      </ul>
    </div>
    
  </div>
  `
    })
    return html
}

function generateInternHTML(internArr){
    let html = '';
    internArr.forEach((intern)=>{
        
        html += `<div class="card col-md-6 m-2" style="width: 16rem;">
    <div class="card-body">
        
      <h3 class="card-title">${intern.getName()}</h3>
      <h4 class="card-subtitle mb-2 text-muted ">${intern.getRole()}</h4>
        
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${intern.getId()}</li>
        <li class="list-group-item">${intern.getEmail()}</li>
        <li class="list-group-item">${intern.getSchool()}</li>
      </ul>
    </div>
    
  </div>
  `
    })
    return html
}

function generateHTML(manager, engineerArr, internArr){
console.log("in generate HTML")
    return ` 
    
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
 
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="../dist/style.css" />
    <title>Project Team</title>

</head>

<body>
    <nav class="navbar bg-primary mb-3 justify-content-center">
        <h1> Project Team</h1>
    </nav>
<div class="row d-flex justify-content-center">
    
    ${generateManagerHTML(manager)}
    ${generateEngineerHTML(engineerArr)}
    ${generateInternHTML(internArr)}
    
    </div>  
</body>
</html>
    
    
    
    
    
    
    
    `


}
module.exports = {generateHTML};
