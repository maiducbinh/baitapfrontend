const demoData = [
    {
        "question": "What is the smallest planet in our solar system?",
        "option1": "Mars",
        "option2": "Venus",
        "option3": "Mercury",
        "option4": "Pluto",
        "correctOption": 3,
        "category": "science",
        "difficulty": "easy",
        "userOption": 3
    },
    {
        "question": "What is the name of the world's largest social media platform?",
        "option1": "Twitter",
        "option2": "Instagram",
        "option3": "Facebook",
        "option4": "LinkedIn",
        "correctOption": 3,
        "category": "technology",
        "difficulty": "medium",
        "userOption": 2
    },
    {
        "question": "Which country has the world's largest population?",
        "option1": "India",
        "option2": "Russia",
        "option3": "China",
        "option4": "United States",
        "correctOption": 3,
        "category": "world-affairs",
        "difficulty": "hard",
        "userOption": 1
    },
    {
        "question": "Who holds the record for the most goals scored in a single FIFA World Cup tournament?",
        "option1": "Diego Maradona",
        "option2": "Pele",
        "option3": "Ronaldo",
        "option4": "Just Fontaine",
        "correctOption": 4,
        "category": "sports",
        "difficulty": "medium",
        "userOption": 4
    },
    {
        "question": "What is the name of the phenomenon where a full moon appears larger and brighter than normal?",
        "option1": "Supermoon",
        "option2": "Blue Moon",
        "option3": "Harvest Moon",
        "option4": "Blood Moon",
        "correctOption": 1,
        "category": "science",
        "difficulty": "hard",
        "userOption": 1
    },
    {
        "question": "What is the name of the largest species of sea turtle?",
        "option1": "Leatherback",
        "option2": "Green",
        "option3": "Hawksbill",
        "option4": "Loggerhead",
        "correctOption": 1,
        "category": "world-affairs",
        "difficulty": "medium",
        "userOption": 1
    },
    {
        "question": "Which company is the largest producer of computer processors?",
        "option1": "Intel",
        "option2": "AMD",
        "option3": "Nvidia",
        "option4": "Apple",
        "correctOption": 1,
        "category": "technology",
        "difficulty": "easy",
        "userOption": 4
    }
];
const jsonData = [
    { "id": 'B23DCCN944', "name": 'Mai Đức Bình', "type": 'Bài tập', "exam_name": 'An Toàn Bảo Mật HTTT', "date": '09/05/2022', 'detail': 1 },
    { "id": 'B20DCCN535', "name": 'Dương Tuấn Nam', "type": 'Kiểm tra thường xuyên', "exam_name": 'Lập trình Web', "date": '30/06/2021', 'detail': 1 },
    { "id": 'B20DCCN459', "name": 'Trần Đức Quân', "type": 'Giữa kỳ', "exam_name": 'Chủ nghĩa xã hội', "date": '24/06/2022', 'detail': 0 },
    { "id": 'B20DCCN797', "name": 'Mai Đức Bình', "type": 'Bài tập', "exam_name": 'Nhập Môn Trí Tuệ Nhân Tạo', "date": '15/12/2022', 'detail': 0 },
    { "id": 'B22DCCN164', "name": 'Đậu Quang Hiếu', "type": 'Giữa kỳ', "exam_name": 'Nhập Môn Trí Tuệ Nhân Tạo', "date": '20/02/2020', 'detail': 0 },
    { "id": 'B23DCCN170', "name": 'Mai Đức Bình', "type": 'Kết thúc học phần', "exam_name": 'An Toàn Bảo Mật HTTT', "date": '31/05/2020', 'detail': 1 },
    { "id": 'B23DCCN382', "name": 'Lê Gia Huy', "type": 'Kiểm tra thường xuyên', "exam_name": 'Lập trình Web', "date": '16/03/2022', 'detail': 0 },
    { "id": 'B23DCCN994', "name": 'Mai Đức Bình', "type": 'Kết thúc học phần', "exam_name": 'Lập trình Web', "date": '13/12/2022', 'detail': 0 },
    { "id": 'B20DCCN353', "name": 'Trần Đức Quân', "type": 'Bài tập', "exam_name": 'Nhập môn công nghệ phần mềm', "date": '05/08/2022', 'detail': 1 },
    { "id": 'B22DCCN201', "name": 'Đậu Quang Hiếu', "type": 'Kiểm tra thường xuyên', "exam_name": 'Lập trình Web', "date": '29/10/2020', 'detail': 0 },
    { "id": 'B22DCCN864', "name": 'Dương Tuấn Nam', "type": 'Kiểm tra thường xuyên', "exam_name": 'Nhập Môn Trí Tuệ Nhân Tạo', "date": '11/10/2021', 'detail': 0 },
    { "id": 'B21DCCN257', "name": 'Tống Việt Hoàng', "type": 'Kết thúc học phần', "exam_name": 'Chủ nghĩa xã hội', "date": '17/10/2021', 'detail': 1 },
    { "id": 'B23DCCN124', "name": 'Trần Đức Quân', "type": 'Giữa kỳ', "exam_name": 'Cơ sở dữ liệu phân tán', "date": '15/11/2020', 'detail': 0 },
    { "id": 'B20DCCN010', "name": 'Tống Việt Hoàng', "type": 'Kết thúc học phần', "exam_name": 'Cơ sở dữ liệu phân tán', "date": '23/09/2020', 'detail': 0 },
    { "id": 'B22DCCN007', "name": 'Lê Gia Huy', "type": 'Kết thúc học phần', "exam_name": 'Nhập môn công nghệ phần mềm', "date": '05/05/2020', 'detail': 1 },
    { "id": 'B21DCCN071', "name": 'Đậu Quang Hiếu', "type": 'Giữa kỳ', "exam_name": 'Nhập môn công nghệ phần mềm', "date": '25/01/2021', 'detail': 1 },
    { "id": 'B21DCCN568', "name": 'Trần Đức Quân', "type": 'Giữa kỳ', "exam_name": 'Chủ nghĩa xã hội', "date": '06/01/2020', 'detail': 1 },
    { "id": 'B21DCCN105', "name": 'Đậu Quang Hiếu', "type": 'Bài tập', "exam_name": 'Chủ nghĩa xã hội', "date": '21/01/2020', 'detail': 0 },
    { "id": 'B23DCCN672', "name": 'Trần Đức Quân', "type": 'Giữa kỳ', "exam_name": 'Cơ sở dữ liệu phân tán', "date": '13/03/2022', 'detail': 0 },
    { "id": 'B22DCCN721', "name": 'Dương Tuấn Nam', "type": 'Giữa kỳ', "exam_name": 'An Toàn Bảo Mật HTTT', "date": '29/03/2022', 'detail': 0 },
    { "id": 'B21DCCN336', "name": 'Trần Đức Quân', "type": 'Kiểm tra thường xuyên', "exam_name": 'Nhập Môn Trí Tuệ Nhân Tạo', "date": '01/12/2022', 'detail': 1 },
    { "id": 'B22DCCN370', "name": 'Đậu Quang Hiếu', "type": 'Giữa kỳ', "exam_name": 'Nhập môn công nghệ phần mềm', "date": '11/12/2020', 'detail': 0 },
    { "id": 'B21DCCN122', "name": 'Đậu Quang Hiếu', "type": 'Kết thúc học phần', "exam_name": 'Chủ nghĩa xã hội', "date": '07/11/2022', 'detail': 1 },
    { "id": 'B21DCCN213', "name": 'Trần Đức Quân', "type": 'Kết thúc học phần', "exam_name": 'An Toàn Bảo Mật HTTT', "date": '11/03/2022', 'detail': 1 },
    { "id": 'B23DCCN150', "name": 'Đậu Quang Hiếu', "type": 'Kiểm tra thường xuyên', "exam_name": 'Chủ nghĩa xã hội', "date": '02/05/2021', 'detail': 0 },
    { "id": 'B23DCCN291', "name": 'Dương Tuấn Nam', "type": 'Giữa kỳ', "exam_name": 'Chủ nghĩa xã hội', "date": '02/07/2022', 'detail': 0 },
    { "id": 'B23DCCN651', "name": 'Trần Đức Quân', "type": 'Kết thúc học phần', "exam_name": 'Lập trình Web', "date": '10/09/2022', 'detail': 1 },
    { "id": 'B21DCCN283', "name": 'Mai Đức Bình', "type": 'Kết thúc học phần', "exam_name": 'An Toàn Bảo Mật HTTT', "date": '10/07/2021', 'detail': 1 },
    { "id": 'B20DCCN059', "name": 'Mai Đức Bình', "type": 'Bài tập', "exam_name": 'Nhập Môn Trí Tuệ Nhân Tạo', "date": '10/10/2020', 'detail': 1 },
    { "id": 'B23DCCN313', "name": 'Tống Việt Hoàng', "type": 'Bài tập', "exam_name": 'Lập trình Web', "date": '10/03/2022', 'detail': 0 },
    { "id": 'B21DCCN477', "name": 'Trần Đức Quân', "type": 'Bài tập', "exam_name": 'Cơ sở dữ liệu phân tán', "date": '12/08/2020', 'detail': 1 },
    { "id": 'B21DCCN071', "name": 'Dương Tuấn Nam', "type": 'Bài tập', "exam_name": 'Lập trình Web', "date": '05/04/2022', 'detail': 0 },
    { "id": 'B20DCCN772', "name": 'Lê Gia Huy', "type": 'Bài tập', "exam_name": 'Cơ sở dữ liệu phân tán', "date": '29/09/2021', 'detail': 0 },
    { "id": 'B20DCCN989', "name": 'Tống Việt Hoàng', "type": 'Bài tập', "exam_name": 'An Toàn Bảo Mật HTTT', "date": '28/01/2021', 'detail': 1 },
    { "id": 'B21DCCN438', "name": 'Trần Đức Quân', "type": 'Giữa kỳ', "exam_name": 'An Toàn Bảo Mật HTTT', "date": '17/06/2020', 'detail': 1 },
    { "id": 'B23DCCN214', "name": 'Trần Đức Quân', "type": 'Bài tập', "exam_name": 'Nhập Môn Trí Tuệ Nhân Tạo', "date": '13/09/2020', 'detail': 1 },
    { "id": 'B21DCCN048', "name": 'Tống Việt Hoàng', "type": 'Giữa kỳ', "exam_name": 'Cơ sở dữ liệu phân tán', "date": '10/01/2022', 'detail': 0 },
    { "id": 'B23DCCN716', "name": 'Mai Đức Bình', "type": 'Bài tập', "exam_name": 'Lập trình Web', "date": '12/05/2020', 'detail': 1 },
    { "id": 'B21DCCN948', "name": 'Dương Tuấn Nam', "type": 'Kết thúc học phần', "exam_name": 'Chủ nghĩa xã hội', "date": '01/03/2020', 'detail': 1 },
    { "id": 'B22DCCN283', "name": 'Trần Đức Quân', "type": 'Bài tập', "exam_name": 'Cơ sở dữ liệu phân tán', "date": '24/11/2022', 'detail': 0 },
    { "id": 'B21DCCN623', "name": 'Dương Tuấn Nam', "type": 'Kết thúc học phần', "exam_name": 'Lập trình Web', "date": '19/12/2020', 'detail': 0 },
    { "id": 'B21DCCN781', "name": 'Dương Tuấn Nam', "type": 'Kiểm tra thường xuyên', "exam_name": 'An Toàn Bảo Mật HTTT', "date": '22/01/2020', 'detail': 0 },
    { "id": 'B21DCCN324', "name": 'Trần Đức Quân', "type": 'Bài tập', "exam_name": 'Cơ sở dữ liệu phân tán', "date": '29/10/2022', 'detail': 1 },
    { "id": 'B21DCCN994', "name": 'Đậu Quang Hiếu', "type": 'Kết thúc học phần', "exam_name": 'Nhập Môn Trí Tuệ Nhân Tạo', "date": '24/07/2021', 'detail': 0 },
    { "id": 'B20DCCN518', "name": 'Trần Đức Quân', "type": 'Bài tập', "exam_name": 'Nhập môn công nghệ phần mềm', "date": '02/02/2022', 'detail': 1 },
    { "id": 'B22DCCN229', "name": 'Mai Đức Bình', "type": 'Bài tập', "exam_name": 'Lập trình Web', "date": '08/07/2020', 'detail': 1 },
    { "id": 'B23DCCN619', "name": 'Dương Tuấn Nam', "type": 'Kiểm tra thường xuyên', "exam_name": 'Nhập Môn Trí Tuệ Nhân Tạo', "date": '29/07/2020', 'detail': 0 },
    { "id": 'B20DCCN201', "name": 'Mai Đức Bình', "type": 'Bài tập', "exam_name": 'Lập trình Web', "date": '06/08/2020', 'detail': 1 },
    { "id": 'B20DCCN389', "name": 'Lê Gia Huy', "type": 'Giữa kỳ', "exam_name": 'An Toàn Bảo Mật HTTT', "date": '30/12/2022', 'detail': 0 },
    { "id": 'B23DCCN543', "name": 'Dương Tuấn Nam', "type": 'Kiểm tra thường xuyên', "exam_name": 'Nhập Môn Trí Tuệ Nhân Tạo', "date": '28/03/2023', 'detail': 0 }
]
// Admin js
const arrowsList = document.querySelectorAll(".arrow");
arrowsList.forEach(arrow=>{
    arrow.addEventListener("click",e=>{
        const arrowParent = e.target.parentElement.parentElement;
        arrowParent.classList.toggle("showMenu")
    })
})

const sidebar = document.querySelector(".sidebar");
const sidebarBtn = document.querySelector(".bx-menu");

sidebarBtn.addEventListener("click",()=>{
    sidebar.classList.toggle("close")
    document.querySelectorAll(".nav-links li").forEach(listItem=>{
        if(listItem.classList.contains("showMenu")){
            listItem.classList.remove("showMenu");
        }
    })
});


let studentDetailLoad = jsonData.concat();

/** Add table content to HTML */
function addTableContent(data, itemCount, pageIndex)
{
    console.log(itemCount, pageIndex)
    let html = '';
    for(let i = (pageIndex - 1)*itemCount; i < pageIndex*itemCount; i++)
    {
        console.log(i)
        let student = data[i];
        let check = ((i + 1) % 2 === 0) ? "even" : "odd"
        html +=
        `<tr role="row" class="${check}">
        <td class="">${student.id}</td>
        <td class="sorting_1">${student.name}</td>
        <td>${student.type}</td>
        <td>${student.exam_name}</td>
        <td>${student.date}</td>
        <td class="icon-container">
        <button type="button" class="btn btn-light myBtn" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class='bx bx-detail icon'></i></button></td>
        </tr>`
    }
    return html;
}
/** Render student detail table */
const bodyContainer = document.querySelector(".table-body")
function renderTableResult(studentRenderList)
{
    studentRenderList.forEach((student, index) => {
        const studentDetail = 
        `<tr role="row" visible="true">
        <td class="">${student.id}</td>
        <td class="sorting_1">${student.name}</td>
        <td>${student.type}</td>
        <td>${student.exam_name}</td>
        <td>${student.date}</td>
        <td class="icon-container">
        <button type="button" class="btn btn-light myBtn" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class='bx bx-detail icon'></i></button></td>
        </tr>`;

        bodyContainer.insertAdjacentHTML("beforeend", studentDetail);
    })
}
function generateAnswerDetailTable(data)
{
    let id = 0;
    let html = '';
    var number = 10/data.length;
    var decimalPart = roundedNumber = Number(number.toFixed(2));
    data.forEach(element => {
        const correctOption = element.correctOption
        const userOption = element.userOption
        let circleColor = '#677483'
        if(correctOption === userOption) circleColor = 'rgb(56, 142, 60)'
        else if(correctOption !== userOption) circleColor = '#c81f17'
        id = id + 1;
        html += 
        `<tr class="body-row" id="${id}" onclick="rowClicked(this)">
        <td class="first-row-cell">
            <p
                class="df aic jcc css-1dtoqh9">
                <svg class="css-vubbuv"
                    focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                    style="width: 12px; height: 12px; translate:0 2px">
                    <circle cx="12" cy="12" r="8" fill="${circleColor}"></circle>
                </svg>
            </p>
        </td>
        <td class="row-cell" colspan="1">
            <p class="css-1dtoqh9 wbbw">${id}</p>
        </td>
        <td class="row-cell" colspan="3">
            <p class="css-1dtoqh9 wbbw">${element[`option${userOption}`]}</p>
        </td>
        <td class="row-cell" colspan="3">
            <p class="css-1dtoqh9 wbbw">${element[`option${correctOption}`]}</p>
        </td>
        <td class="row-cell" colspan="2">
            <p class="css-1dtoqh9 wbbw" style="color: ${circleColor};">(${decimalPart})</p>
        </td>
    </tr>`
    })
    return html;
}

let pageNavContainer = document.querySelector(".page-nav")
var itemCount = 5
var page = 1
var pageCount = 3
/** version2 renderPageNavigation */
function renderPageNavigationVer2(pageCount)
{
    pageNavContainer.innerHTML = '';
    for(let i = 1; i < pageCount + 1; i++)
    {
        pageItem =
        `<a class="paginate_button " id="page${i}"
        aria-controls="dataTable" data-dt-idx="${i}" tabindex="0">${i}
        </a>`
        pageNavContainer.insertAdjacentHTML("beforeend", pageItem);
        if(i == 1)
        {
            document.getElementById("page1").classList.add('current');
        }
        document
            .getElementById(`page${i}`)
            .addEventListener("click", () => {
                paginationLinks = document.querySelectorAll('.paginate_button')
                paginationLinks.forEach((link, index) => {
                    link.classList.remove('current');
                    if(index == i) {
                        link.classList.add('current')
                        page = i;
                        console.log("render")
                        renderTable();
                    }
                })
            })
    }
}

/**  Event  */
var paginationLinks;
function searchBarFunction()
{
    $(".search").keyup(function () {
        var searchTerm = $(".search").val();
        var listItem = $(".results tbody").children("tr");
        var searchSplit = searchTerm.replace(/ /g, "'):containsi('");
    
        $.extend($.expr[":"], {
          containsi: function (elem, i, match, array) {
            return (
              (elem.textContent || elem.innerText || "")
                .toLowerCase()
                .indexOf((match[3] || "").toLowerCase()) >= 0
            );
          },
        });
    
        $(".results tbody tr")
          .not(":containsi('" + searchSplit + "')")
          .each(function (e) {
            $(this).attr("class", "d-none");
            $(this).attr("visible", "false");
          });
    
        $(".results tbody tr:containsi('" + searchSplit + "')").each(function (e) {
          $(this).attr("class", "");
          $(this).attr("visible", "true");
        });
    
        var jobCount = $('.results tbody tr[visible="true"]').length;
        $(".counter").text(jobCount + " item");
    
        if (jobCount == "0") {
          $(".no-result").show();
        } else {
          $(".no-result").hide();
        }
      });
}
// render table
const examTypeRadios = document.querySelectorAll('input[name="examType"]');
const orderByRadios = document.querySelectorAll('input[name="orderBy"]');
const selectExamSubject = document.getElementById("selectExamSubject");
const tableRows = document.querySelectorAll("tbody tr");
const tableLength = document.getElementById("tb_length");
const detailAnswerContainer = document.querySelector('.tb-body');

function getStudentListResult(studentListFilter)
{
    const selectedExamType = document.querySelector('.form-check input[name="examType"]:checked').value;
    const selectedOrderBy = document.querySelector('.form-check input[name="orderBy"]:checked').value;
    const selectedSubject = selectExamSubject.value;
    const selectedItemDisplay = tableLength.value;
    
    const selectedPage = document.querySelector(`#page${page}`).textContent;
    let pageNum = Math.ceil(studentListFilter.length / selectedItemDisplay);
    console.log(selectedPage, selectedItemDisplay);
    console.log(pageNum);
    let studentDetailList = studentListFilter.concat();
    
    if(selectedPage == pageNum)
    {
        studentDetailList = studentListFilter.slice(selectedItemDisplay * (pageNum - 1));
    }
    else
    {
        studentDetailList = studentListFilter.slice(selectedItemDisplay * (selectedPage - 1), selectedItemDisplay * selectedPage)
    }
    if(selectedOrderBy == 1)
    {
        studentDetailList.sort((a, b) => {
            if(a.type === b.type) return 0;
            return a.type > b.type ? 1 : -1;
        })
    }

    studentDetailList = selectedExamType.match("allType") 
        ? studentDetailList 
        : studentDetailList.filter((student) => 
            student.type.match(selectedExamType));

    studentDetailList = selectedSubject.match("allSubject") 
    ? studentDetailList 
    : studentDetailList.filter((student) => 
        student.exam_name.match(selectedSubject));

    return studentDetailList;

}

// render table
function renderTable()
{
    bodyContainer.innerHTML = "";
    const studentListAfterFilter = getStudentListResult(studentDetailLoad);
    console.log(studentListAfterFilter);
    renderTableResult(studentListAfterFilter)
    var itemCount = $('.results tbody tr[visible="true"]').length;
    if(itemCount == "0")
    {
        $(".no-result").show();
    }
    else{
        $(".no-result").hide();
    }
}


examTypeRadios.forEach((examTypeRadioItem) => {
    examTypeRadioItem.addEventListener("click", () => {
      renderTable();
    });
});
  
orderByRadios.forEach((orderByRadioItem) => {
    orderByRadioItem.addEventListener("click", () => {
      renderTable();
    });
});
selectExamSubject.addEventListener("change", ()=> {
    renderTable();
})
tableLength.addEventListener("change", () => {
    var count = Math.ceil(jsonData.length / tableLength.value);
    console.log(tableLength.value)
    page = 1;
    renderPageNavigationVer2(count)
    renderTable()
})
$(document).ready(function () {
    var count = Math.ceil(jsonData.length / tableLength.value);
    renderPageNavigationVer2(count)
    renderTable();
    searchBarFunction();
    detailAnswerContainer.innerHTML = generateAnswerDetailTable(demoData)
});
/** Pagination */

