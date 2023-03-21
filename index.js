const fs = require('fs');
const inquirer = require('inquirer');
const generateDocument = require("./src/renderDocument");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

class Prompt {
    constructor() {
        this.teamArr = [];
    }
    /**
     * @returns the array of all Employee objects
     */
    getTeamArr() {
        return this.teamArr;
    }

    questions() {
        inquirer.prompt(
            {
                name: 'employeeType',
                type: 'list',
                message: "Which type of Employee would you like to add to your team?",
                choices: ['Manager', 'Engineer', 'Intern', 'Finished Entering']
            })
            .then(({ employeeType }) => {
                if (employeeType === 'Manager') {
                    inquirer.prompt([
                        {
                            type: 'input',
                            name: 'name',
                            message: "Enter the manager's name",
                            validate: nameInput => {
                                if (nameInput) {
                                    return true;
                                } else {
                                    console.log("Please enter the manager's name!");
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'number',
                            name: 'id',
                            message: "Enter the managers ID",
                            validate: idInput => {
                                if (idInput) {
                                    return true;
                                } else {
                                    console.log("Please enter a correct answer, the employee id should be a number!");
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'number',
                            name: 'officeNumber',
                            message: "Please enter the manager's office number",
                            validate: officeNumberInput => {
                                if (officeNumberInput) {
                                    return true;
                                } else {
                                    console.log("Please enter a correct answer, the office number should be a number!");
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'input',
                            name: 'email',
                            message: "Please enter the manager's email",
                            validate: emailInput => {
                                if (emailInput) {
                                    return true;
                                } else {
                                    console.log("Please enter the correct manager's email!");
                                    return false;
                                }
                            }
                        },

                    ])
                        .then((templateData) => {
                            const newManager = new Manager(templateData.name, templateData.id, templateData.officeNumber);
                            this.teamArr.push(newManager);

                            this.questions();
                        });

                } else if (employeeType === 'Engineer') {
                    inquirer.prompt([
                        {
                            type: 'input',
                            name: 'name',
                            message: "Please enter the engineer's name",
                            validate: nameInput => {
                                if (nameInput) {
                                    return true;
                                } else {
                                    console.log("Please enter the engineer's name!");
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'number',
                            name: 'id',
                            message: "Please enter the engineer's employee id",
                            validate: idInput => {
                                if (idInput) {
                                    return true;
                                } else {
                                    console.log("Please enter a correct answer, the employee id should be a number!");
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'input',
                            name: 'email',
                            message: "Please enter the engineer's email",
                            validate: emailInput => {
                                if (emailInput) {
                                    return true;
                                } else {
                                    console.log("Please enter the correct engineer's email!");
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'input',
                            name: 'github',
                            message: "Please enter the engineer's github username",
                            validate: githubInput => {
                                if (githubInput) {
                                    return true;
                                } else {
                                    console.log("Please enter the correct engineer's github username!");
                                    return false;
                                }
                            }
                        }
                    ]).then(templateData => {
                        const newEngineer = new Engineer(templateData.name, templateData.id, templateData.email, templateData.github);
                        this.teamArr.push(newEngineer);
                        // Sends user back to menu
                        this.questions();
                    });
                } else if (employeeType === 'Intern') {
                    inquirer.prompt([
                        {
                            type: 'input',
                            name: 'name',
                            message: "Please enter the intern's name",
                            validate: nameInput => {
                                if (nameInput) {
                                    return true;
                                } else {
                                    console.log("Please enter the intern's name!");
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'number',
                            name: 'id',
                            message: "Please enter the intern's employee id",
                            validate: idInput => {
                                if (idInput) {
                                    return true;
                                } else {
                                    console.log("Please enter a correct answer, the employee id should be a number!");
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'input',
                            name: 'email',
                            message: "Please enter the intern's email",
                            validate: emailInput => {
                                if (emailInput) {
                                    return true;
                                } else {
                                    console.log("Please enter the correct intern's email!");
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'input',
                            name: 'school',
                            message: "Please enter the intern's school name",
                            validate: schoolInput => {
                                if (schoolInput) {
                                    return true;
                                } else {
                                    console.log("Please enter the correct intern school's name!");
                                    return false;
                                }
                            }
                        }

                    ]).then(templateData => {
                        const newIntern = new Intern(templateData.name, templateData.id, templateData.email, templateData.school);
                        this.teamArr.push(newIntern);
                        // Sends user back to menu
                        this.questions();
                    });
                } else if (employeeType === 'Finished Entering') {
                    const pagehtml = generateDocument(this.getTeamArr());
                    fs.writeFile('./dist/index.html', pagehtml, err => {
                        if (err) throw new Error(err);

                        console.log('Congrats on creating your Team!');
                    });
                }
            });
    }
};
const prompt = new Prompt();
prompt.questions();

module.exports = Prompt;
