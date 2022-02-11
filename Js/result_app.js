//  all Selector

const group = document.getElementById('group');
const group_sec = document.querySelector('.group_sec');
const dev_dashbord = document.querySelector('.dev_dashbord');




group.addEventListener('change', function() {

    if(group.value == 'Science'){
        group_s_1.setAttribute('placeholder', 'Physics');
        group_s_2.setAttribute('placeholder', 'Biology');
        group_s_3.setAttribute('placeholder', 'Chemistry');
        group_s_4.setAttribute('placeholder', 'Higher Math');
        group_sec.style.display = 'block';

    }else if(group.value == 'Humanities'){
        group_s_1.setAttribute('placeholder', 'Geography');
        group_s_2.setAttribute('placeholder', 'Civic & Citizenship');
        group_s_3.setAttribute('placeholder', 'Economics');
        group_s_4.setAttribute('placeholder', 'General Science');
        group_sec.style.display = 'block';

    }else if(group.value == 'Business'){
        group_s_1.setAttribute('placeholder', 'Finance & Banking');
        group_s_2.setAttribute('placeholder', 'Accounting');
        group_s_3.setAttribute('placeholder', 'Business Ent');
        group_s_4.setAttribute('placeholder', 'General Science');
        group_sec.style.display = 'block';
    }else{
        group_sec.style.display = 'none';
    }


});

// input value selecti for result
const SName = document.querySelector('#S_name');
const s_photo = document.querySelector('#s_photo');
const roll = document.querySelector('#roll');
const regNum = document.querySelector('#reg_number');
const psYear = document.querySelector('#pas_year');
const in_ban = document.getElementById('in_ban');
const in_eng = document.getElementById('in_eng');
const in_math = document.getElementById('in_math');
const in_ssci = document.getElementById('in_ssci');
const in_reg = document.getElementById('in_reg');
// input value selecti for result (group Subjects);
const group_s_1 = document.getElementById('group_s_1');
const group_s_2 = document.getElementById('group_s_2');
const group_s_3 = document.getElementById('group_s_3');
const group_s_4 = document.getElementById('group_s_4');


const result_submit = document.getElementById('result_submit');

result_submit.addEventListener('click', function(){


    let student_arr;

    if (dataGet('student_data')) {
        student_arr = dataGet('student_data');
      } else {
        student_arr = [];
      }

      if(group.value == 'Science'){
        student_arr.push({
            name : SName.value,
            photo : s_photo.value,
            roll : roll.value,
            regNum : regNum.value,
            psYear : psYear.value,
            group : group.value,
            ban : in_ban.value,
            eng : in_eng.value,
            math : in_math.value,
            ssci : in_ssci.value,
            reg : in_reg.value,
            gs1 : group_s_1.value,
            gs2 : group_s_2.value,
            gs3 : group_s_3.value,
            gs4 : group_s_4.value,
            sub1 : 'Physics',
            sub2 : 'Biology',
            sub3: 'Chemistry',
            sub4 : 'Higher Math'
    
        });

    }else if(group.value == 'Humanities'){
        student_arr.push({
            name : SName.value,
            photo : s_photo.value,
            roll : roll.value,
            regNum : regNum.value,
            psYear : psYear.value,
            group : group.value,
            ban : in_ban.value,
            eng : in_eng.value,
            math : in_math.value,
            ssci : in_ssci.value,
            reg : in_reg.value,
            gs1 : group_s_1.value,
            gs2 : group_s_2.value,
            gs3 : group_s_3.value,
            gs4 : group_s_4.value,
            sub1 : 'Geography',
            sub2 : 'Civic & Citizenship',
            sub3: 'Economics',
            sub4 : 'General Science'
    
        });

    }else if(group.value == 'Business'){
        student_arr.push({
            name : SName.value,
            photo : s_photo.value,
            roll : roll.value,
            regNum : regNum.value,
            psYear : psYear.value,
            group : group.value,
            ban : in_ban.value,
            eng : in_eng.value,
            math : in_math.value,
            ssci : in_ssci.value,
            reg : in_reg.value,
            gs1 : group_s_1.value,
            gs2 : group_s_2.value,
            gs3 : group_s_3.value,
            gs4 : group_s_4.value,
            sub1 : 'Finance & Banking',
            sub2 : 'Accounting',
            sub3: 'Business Ent',
            sub4 : 'General Science'
    
        });
    }else{
        student_arr.push = [];
    }
    


    dataSend('student_data', student_arr);
    studentoutport();

});


studentoutport();
function studentoutport(){

    let allStudent = dataGet('student_data');
    let data = ' ';

    allStudent.map( function (sdata, index){


    data +=`
        <tr>
            <td>${index + 1}</td>
            <td>${sdata.name}</td>
            <td>${sdata.roll}</td>
            <td>${sdata.group}</td>
            <td>A+</td>
            <td>5</td>
            <td><img class="" width="50px" src="${sdata.photo}" alt=""></td>
            <td><button onclick="singleStudntResult(${ index })"  class="btn btn-info btn-sm s_view">view</button> 
            <button onclick="deletedata(${ index })" class="btn btn-danger btn-sm">Delete</button></td>
        </tr>

    `
});
    dev_dashbord.innerHTML = data;

};



const result_output_con = document.querySelector('.result_output_con');

const result_output_sec = document.querySelector('.result_output_sec');

function singleStudntResult(index){

    result_output_con.style.display = 'flex';


    let result = new FullResult();
    let storageData = dataGet('student_data');

    

    result_output_sec.innerHTML = `

            <h1 id="result_comm" class="text-center alert-primary p-2">Result Commient</h1>
            <h1 id="result_good" class="text-center alert-success p-2">Congratulations</h1>
            <h1 id="result_bad" class="text-center alert-danger p-2">try next time</h1>
            <div class="row">
            <div class="col-md-8">

                <div class="stu_data_output">
                <h1 class="out_name"><span>Name</span> : <samp id="out_name">${ storageData[index].name }</samp></h1>
                <h1 class="out_roll"><span>Roll</span> : <samp id="out_roll">${ storageData[index].roll }</samp></h1>
                <h1 class="out_reg"><span>Registion No</span> : <samp id="out_reg">${ storageData[index].regNum }</samp></h1>
                <h1 class="out_group"><span>Group</span> : <samp id="out_group">${ storageData[index].group }</samp></h1>
                <h1 class="out_year"><span>Passign Year</span> : <samp id="out_year">${ storageData[index].psYear }</samp></h1>
                <h1 class="grade"><span>Grade</span> : <samp id="grade">
                ${ result.finalCgpa( storageData[index].ban, storageData[index].eng, storageData[index].math, storageData[index].ssci, storageData[index].reg, storageData[index].gs1, storageData[index].gs2, storageData[index].gs3, storageData[index].gs4).finalgread}
                </samp></h1>
                </div>

            </div>
            <div class="col-md-4 ">
            <div class="result_output_image_sec d-flex justify-content-center align-items-center">
            <img src="${ storageData[index].photo }" alt="">
            </div>
            <h2 class="image_text">Student Photo</h2>
            </div>
        </div>

            <div class="result_output">
            <table class="table">
                <thead>
                <tr>
                    <th scope="col">Code</th>
                    <th scope="col">Subject</th>
                    <th scope="col">Mark</th>
                    <th scope="col">Point</th>
                    <th scope="col">Grade</th>
                </tr>
                </thead>
                <tbody>
                <tr id="ban">
                    <td>101</td>
                    <td>Bangla</td>
                    <td>${storageData[index].ban}</td>
                    <td>${ result.result(storageData[index].ban).gpacal }</td>
                    <td>${ result.result(storageData[index].ban).greadcal }</td>
                </tr>
                <tr id="eng">
                    <td>102</td>
                    <td>English</td>
                    <td>${storageData[index].eng}</td>
                    <td>${ result.result(storageData[index].eng).gpacal }</td>
                    <td>${ result.result(storageData[index].eng).greadcal }</td>
                </tr>
                <tr id="math">
                    <td>103</td>
                    <td>Math</td>
                    <td>${storageData[index].math}</td>
                    <td>${ result.result(storageData[index].math).gpacal }</td>
                    <td>${ result.result(storageData[index].math).greadcal }</td>
                </tr>
                <tr id="s_sic">
                    <td>104</td>
                    <td>Social Sience</td>
                    <td>${storageData[index].ssci}</td>
                    <td>${ result.result(storageData[index].ssci).gpacal  }</td>
                    <td>${ result.result(storageData[index].ssci).greadcal  }</td>
                </tr>
                <tr id="reli">
                    <td>105</td>
                    <td>Religion</td>
                    <td>${storageData[index].reg}</td>
                    <td>${ result.result(storageData[index].reg).gpacal }</td>
                    <td>${ result.result(storageData[index].reg).greadcal }</td>
                </tr>
                </tbody>
            </table>

            <!-- group subjects -->
        
                    <div class="group_output">
                    <div class="sub_title text-center">--Group Subjects Marks--</div>

                        <div id="group_sub_out">
                        <table class="table">
                            <thead>
                            <tr>
                                <th scope="col">Code</th>
                                <th scope="col">Subject</th>
                                <th scope="col">Mark</th>
                                <th scope="col">Point</th>
                                <th scope="col">Grade</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr id="physi">
                                <td>136</td>
                                <td>${storageData[index].sub1}</td>
                                <td>${storageData[index].gs1}</td>
                                <td>${ result.result(storageData[index].gs1).gpacal }</td>
                                <td>${ result.result(storageData[index].gs1).greadcal }</td>
                            </tr>
                            <tr id="biol">
                                <td>138</td>
                                <td>${storageData[index].sub2}</td>
                                <td>${storageData[index].gs2}</td>
                                <td>${ result.result(storageData[index].gs2).gpacal }</td>
                                <td>${ result.result(storageData[index].gs2).greadcal }</td>
                            </tr>
                            <tr id="chemi">
                                <td>137</td>
                                <td>${storageData[index].sub3}</td>
                                <td>${storageData[index].gs3}</td>
                                <td>${ result.result(storageData[index].gs3).gpacal }</td>
                                <td>${ result.result(storageData[index].gs3).greadcal }</td>
                            </tr>
                            <tr id="hig_math">
                                <td>126</td>
                                <td>${storageData[index].sub4}</td>
                                <td>${storageData[index].gs4}</td>
                                <td>${ result.result(storageData[index].gs4).gpacal }</td>
                                <td>${ result.result(storageData[index].gs4).greadcal }</td>
                            </tr>
                        </tbody>
                        </table>

                        </div>
                        
                        
                </div>
                <!-- group subjects -->

            <div class="final_result">
                <table class="table">
                <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">Total Mark</th>
                    <th scope="col">Total Point</th>
                    <th scope="col">Total Grade</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">  </th>
                    <td id="total_mark">800</td>
                    <td>${ result.finalCgpa( storageData[index].ban, storageData[index].eng, storageData[index].math, storageData[index].ssci, storageData[index].reg, storageData[index].gs1, storageData[index].gs2, storageData[index].gs3, storageData[index].gs4).rescgpa}</td>

                    <td id="total_grade">${ result.finalCgpa( storageData[index].ban, storageData[index].eng, storageData[index].math, storageData[index].ssci, storageData[index].reg, storageData[index].gs1, storageData[index].gs2, storageData[index].gs3, storageData[index].gs4).finalgread}</td>
                </tr>
                </tbody>
            </table>
            </div>

            </div>
    `

};




result_output_con.addEventListener('click', function(e){

    if(e.target == this){
        result_output_con.style.display = 'none';

    }
});





    


