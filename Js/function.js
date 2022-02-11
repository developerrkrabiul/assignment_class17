/**
 * Data Send to LS 
 * @param {*} key 
 * @param {*} arr 
 */
 function dataSend(key , arr){

    let data = JSON.stringify(arr);
    localStorage.setItem(key, data);
    return true;

};

/**
 * Data Get form LS 
 * @param {*} key 
 * @returns 
 */
function dataGet(key){

    let data = localStorage.getItem(key);

    return data ? JSON.parse(data) : [] ;   

};

function deletedata(data){

    let conf = confirm('Are you sre ?');

    if(conf){

        let storage_data = dataGet('student_data');
        storage_data.splice(data, 1);
        dataSend('student_data', storage_data);
        studentoutport();
        
    }else{
        return false;
    }
};


// Result Functions

function FullResult() {
  
    this.result = function (marks) {
      let gpa;
      let gread;
  
      if (marks >= 0 && marks < 33) {
        gpa = 0;
        gread = 'F';
      } else if (marks >= 33 && marks < 40) {
        gpa = 1;
        gread = 'D';
      } else if (marks >= 40 && marks < 50) {
        gpa = 2;
        gread = 'C';
      } else if (marks >= 50 && marks < 60) {
        gpa = 3;
        gread = 'B';
      } else if (marks >= 60 && marks < 70) {
        gpa = 3.5;
        gread = 'A-';
      } else if (marks >= 70 && marks < 80) {
        gpa = 4;
        gread = 'A';
      } else if (marks >= 80 && marks <= 100) {
        gpa = 5;
        gread = 'A+';
      } else {
        gpa = 'invalid';
        gread = 'invalid';
      }
  
      return {
        gpacal: gpa,
        greadcal: gread
      };
    }

    this.finalCgpa = function (a, b, c, d, e, f, g, h, i) {
      let totalgpa =
        this.result(a).gpacal +
        this.result(b).gpacal +
        this.result(b).gpacal +
        this.result(c).gpacal +
        this.result(d).gpacal +
        this.result(e).gpacal +
        this.result(f).gpacal +
        this.result(g).gpacal +
        this.result(h).gpacal +
        this.result(i).gpacal;
  
      let finalscgpa = totalgpa / 9;

      let totalgread;
  
      if ( a < 33 || b < 33 || c < 33 || d < 33 || e < 33 || f < 33 || g < 33 || h < 33  || i < 33){
        finalscgpa = 0;
        totalgread = "F";
      }else if(finalscgpa >=  1 && finalscgpa < 2){

        totalgread = "D";
      }else if(finalscgpa >= 2 && finalscgpa < 3){
   
        totalgread = "C";
      }else if(finalscgpa >=  3 && finalscgpa < 3.5){
  
        totalgread = "B";
      }else if(finalscgpa >=  3.5 && finalscgpa < 4){
  
        totalgread = "A-";
      }else if(finalscgpa >= 4 && finalscgpa < 5){
 
        totalgread = "A";
      }else if(finalscgpa ==  5){
   
        totalgread = "A+";
      }
  
      return{
        rescgpa : finalscgpa == 0 ? '' : finalscgpa.toFixed(2) ,
        finalgread : totalgread
      }
    };
  }
  
