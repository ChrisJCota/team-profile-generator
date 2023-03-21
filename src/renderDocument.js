// const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");
//const Prompt = require("../index");


const managerCard = managerTitle => {
  return managerTitle.map(manager => {
    return `<div class="col-md-3 m-3 col-sm-12 d-flex justify-content-center flex-wrap">
    <div class="card">
      <div class="card-img-top bgColor">
        
        <h5 class="card-title roleTitle">${manager.getRole()}</h5>
      </div>
      <div class="card-body">
        <p class="card-text">${manager.getName()}</p>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${manager.getID()}</li>
          <li class="list-group-item">${manager.getEmail()}</li>
          <li class="list-group-item">
            <a href="mailto:" class="card-link">${manager.getOfficeNum()}</a>
          </li>
        </ul>
        <div class="card-body"></div>
      </div>
    </div>
  </div>
  `
  }).join();
};

const internCard = internTitle => {
  return internTitle.map(intern => {
    return `<div class="col-md-3 m-3 col-sm-12 d-flex justify-content-center flex-wrap">
          <div class="card">
            <div class="card-img-top bgColor">
             
              <h5 class="card-title roleTitle">${intern.getRole()}</h5>
            </div>
            <div class="card-body">
              <p class="card-text">${intern.name}</p>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">${intern.id}</li>
                <li class="list-group-item">${intern.school}</li>
                <li class="list-group-item">
                  <a href="#" class="card-link">${intern.email}</a>
                </li>
              </ul>
              <div class="card-body"></div>
            </div>
          </div>
        </div>`
  }).join('');
};

const engineerCard = engineerTitle => {
  return engineerTitle.map(engineer => {
    return `<div class="col-md-3 m-3 col-sm-12 d-flex justify-content-center flex-wrap">
            <div class="card">
              <div class="card-img-top bgColor">
                
                <h5 class="card-title roleTitle">${engineer.getRole()}</h5>
              </div>
              <div class="card-body">
                <p class="card-text">${engineer.name}</p>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">${engineer.id}</li>
                  <li class="list-group-item">${engineer.github}</li>
                  <li class="list-group-item">
                    <a href="#" class="card-link">${engineer.email}</a>
                  </li>
                </ul>
                <div class="card-body"></div>
              </div>
            </div>
          </div>`;
  }).join('');
};



const generateCards = teamArray => {
  let cardsArray = [];
  const managerTitle = teamArray.filter(team => {
    return team.getRole() === 'Manager';
  });
  const engineerTitle = teamArray.filter(team => {
    return team.getRole() === 'Engineer';
  });
  const internTitle = teamArray.filter(team => {
    return team.getRole() === 'Intern';
  });
  if (managerTitle) {
    cardsArray.push(managerCard(managerTitle));
  }
  if (engineerTitle) {
    cardsArray.push(engineerCard(engineerTitle));
  }
  if (internTitle) {
    cardsArray.push(internCard(internTitle));
  }
  return cardsArray.join('');
};



module.exports = cardsArray => {
  return ` 
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My Team</title>
    
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
</head>
<body>
    <header>
        <h1>My Team</h1>
    </header>
    <main class="container my-5">
        <div class="row">
            ${generateCards(cardsArray)}
        </div>
    </main>
</body>
</html>
    `;
};

