const Sequelize = require("sequelize");
// const db = sequelize(postgres:/localhost:3000);
// const db = new Sequelize(postgres:/localhost:3000);
// const db = new Sequelize(postgres://localhost:3000/sutdent_db);
const db = new Sequelize("postgres://localhost:3000/student_db");


// const Student = db.Sequelize("student"){

// };

// const Student = db.Sequelize("student",{

// });

const Student = db.define("student", {
    name: Sequelize.STRING,
    email: Sequelize.STRING
});

const Course = db.define("course",{
    
});