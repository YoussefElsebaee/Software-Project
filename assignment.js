const fs = require("fs");
  
try(){
function getStudentInfo(studentFile , studentID){

    let studentInfo = {};

        const data = fs.readFileSync(studentFile, 'utf8');

        const lines = data.split('\n');

        for (let i = 1; i < lines.length; i++) {
            const row = lines[i].split(',');

            if (row.length > 1) {
                
                if (row[0] === studentID) {
                    
                    studentInfo = {
                        id: row[0],
                        name: row[1],
                        email: row[2],
                        major: row[3]
                    };
                    break; 
                }
            }
        }
}
  catch(err){
    console.log("error happend, run again");
     
    return studentInfo; // Return the found student or an empty object
}

function getCourseInfo(courseFile , courseID){
    let courseinfo={}

        const data = fs.readFileSync(courseFile, 'utf8');
        const line = data.split('\n');

    for(let i=0; i<line.length; i++){
        const row= line[i].split(',');

        if(row.length>1){

            if(row[0] === courseID){
                courseinfo={
                    id: row[0],
                    name: row[2],
                    code: row[1],
                    creditHours: parseInt(row[3])
                };
                break;
            }
        }
    }
    return courseinfo;
}

function searchCoursesByCreditHours(courseFile , creditHour){
  
    let CH= String(creditHour);

    let courseinfo=[];
    let K=0;

    const data = fs.readFileSync(courseFile, 'utf8');

        const line = data.split('\n');

    for(let i=0; i<line.length; i++){
        row= line[i].split(',');

            if(row[3] === CH){

                courseinfo[K]={
                    id: row[0],
                    code: row[1],
                    name: row[2],
                    creditHours: parseInt(row[3])
                };
                K++;
            }
    }
    return courseinfo;

}


function deleteStudentInfo(studentFile , studentID){

    


}

function updateCourseInfo(courseFile , courseObject){






}

function addStudent(studentFile , studentObject){






}

function addCourse(courseFile , courseObject){
   



}


function addGrade(gradeFile , gradeObject){
    





}


function calculateGPA(gradeFile , courseFile , studentId , semester){

    





}

//Make sure to keep all signatures of functions
// if you remove one of nine functions it will cause errors in main
//Don't write any testing code inside main.js
//if you did you will recieve a zero grade
// don't remove module.exports block
// By default javascript functions and attributes are private with the file
// by using module.exports then functions are becoming public and
// can be used in other files 
// any function inside module.exports are public
// no testing in main.js and test in testScenerio.js
module.exports = {
    getStudentInfo,
    getCourseInfo,
    searchCoursesByCreditHours,
    deleteStudentInfo,
    updateCourseInfo,
    addStudent,
    addCourse,
    addGrade,
    calculateGPA
}
