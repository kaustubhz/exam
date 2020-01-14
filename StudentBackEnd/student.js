students = [{
    "id": 1, "name": "Pranjan", "email": "pranjan@gmail.com", "age": 23
},
{
    "id": 2, "name": "Pranav", "email": "pranav@gmail.com", "age": 23
},
{
    "id": 3, "name": "Ashish", "email": "ashish@gmail.com", "age": 23
},
{
    "id": 4, "name": "Kaustubh", "email": "kaustubh@gmail.com", "age": 23
},
{
    "id": 5, "name": "Vaishnavi", "email": "vaishnavi@gmail.com", "age": 24
}];
const getAllStudents = function () {
    //     console.log("Students are ",students);
    return students;
}

const getStudentById = function (id) {
    var record = null;
    let flag = false;
    students.forEach(student => {
        if (student.id == id) {
            console.log("Record found", student);
            record = student;
            flag = true;
        }

    });
    if (flag == true)
        return record;
    else
        return -1;
}

const updateStudent = function (id, name, age) {
    let checkRecord = getStudentById(id);
    if (checkRecord != -1) {
        checkRecord.name=name;
        checkRecord.age=age;
        return checkRecord;
    }
    else
    {
        return -1;
    }
    
}

module.exports = {
    allStudents: getAllStudents,
    specificStudent: getStudentById,
    alterStudent:updateStudent
};