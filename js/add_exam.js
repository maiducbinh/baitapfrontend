// Admin Layout
const arrowsList = document.querySelectorAll(".arrow");
arrowsList.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    const arrowParent = e.target.parentElement.parentElement;
    arrowParent.classList.toggle("showMenu");
  });
});

const sidebar = document.querySelector(".sidebar");
const sidebarBtn = document.querySelector(".bx-menu");

sidebarBtn.addEventListener("click", () => {
  sidebar.classList.toggle("close");
  document.querySelectorAll(".nav-links li").forEach((listItem) => {
    if (listItem.classList.contains("showMenu")) {
      listItem.classList.remove("showMenu");
    }
  });
});

function setPageHeight() {
  var windowHeight = $(window).height();
  var navbarHeight = $(".navbar").height();
  $(".exam-content").css("max-height", windowHeight - navbarHeight * 4 + "px");
  $(".right-side").css("max-height", windowHeight - navbarHeight * 4 + "px");
}

const defaultItemQuestion = {
  question: "",
  A: "",
  B: "",
  C: "",
  D: "",
  answer: "",
};
const examId = 0;
let examList = [];

const tableQuestion = document.querySelector(".table-question");
const examContent = document.querySelector(".exam-content");
const saveBtn = document.querySelector(".save-btn");

function questionFormat(questionItem, questionItemIndex) {
  return `<div id="list-item-${questionItemIndex}" class="question-card card">
  <div class="card-header">
  <h5 class="mb-0" >Câu ${questionItemIndex + 1}</h5>
  <button type="button" class="btn btn-delete" aria-label="Delete"><i id="del_${questionItemIndex}" class='bx bx-x'></i></button>
  </div>
<div class="card-body">
    <div class="input-group input-group-lg">
        <span class="input-group-text" id="inputGroup-sizing-lg">Câu hỏi:</span>
        <input type="text" class="form-control" aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-lg" value = "${
              questionItem.question
            }">
    </div>
    <ul class="d-flex flex-column mt-4 mb-0 ps-0 pe-5 gap-2">
        <li class="answer-card">
            <div class="input-group mb-2">
                <span class="input-group-text" id="inputGroup-sizing-default">A</span>
                <input type="text" class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-A"
                    value="${questionItem.A}" >
            </div>
        </li>
        <li class="answer-card ">
            <div class="input-group mb-2">
                <span class="input-group-text" id="inputGroup-sizing-default">B</span>
                <input type="text" class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-B"
                    value="${questionItem.B}"
                    >
            </div>
        </li>
        <li class="answer-card ">
            <div class="input-group mb-2">
                <span class="input-group-text" id="inputGroup-sizing-default">C</span>
                <input type="text" class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-C"
                    value="${questionItem.C}"
                    >
            </div>
        </li>
        <li class="answer-card ">
            <div class="input-group mb-2">
                <span class="input-group-text" id="inputGroup-sizing-default">D</span>
                <input type="text" class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-D"
                    value="${questionItem.D}"
                    >
            </div>
        </li>
    </ul>
</div>
</div>`;
}

function actionDelete(questionDeleteItem) {
  examContent.textContent = "";
  tableQuestion.innerHTML = "";
  const addQuestionBtnHTML = ` <div class="d-grid gap-2 add-question-section">
  <button class="btn btn-primary add-question-btn" type="button"><i
          class='bx bx-plus'></i> Thêm câu hỏi</button>
  </div>`;
  examContent.insertAdjacentHTML("beforeend", addQuestionBtnHTML);
  examList.splice(parseInt(questionDeleteItem.target.id.substring(4)), 1);
  document.querySelector(".add-question-btn").addEventListener("click", () => {
    generateNewQuestion();
  });
  generateNewQuestion(examList, true);
}

// exam generate question
function generateNewQuestion(questionListItem = [], isReLoad = false) {
  const newQuestionIndex = isReLoad ? 0 : examList.length;
  if (questionListItem.length === 0) {
    if (isReLoad) return;
    examList.push(defaultItemQuestion);
    examContent
      .querySelector(".add-question-section")
      .insertAdjacentHTML(
        "beforebegin",
        questionFormat(defaultItemQuestion, newQuestionIndex)
      );
    generateNewTableQuestion(newQuestionIndex);
  } else {
    questionListItem.forEach((questionItem, questionItemIndex) => {
      if (!isReLoad) examList.push(questionItem);
      examContent
        .querySelector(".add-question-section")
        .insertAdjacentHTML(
          "beforebegin",
          questionFormat(questionItem, newQuestionIndex + questionItemIndex)
        );
      generateNewTableQuestion(newQuestionIndex + questionItemIndex);
    });
  }
}

function generateNewTableQuestion(newQuestionIndex) {
  const newTableQuestion = ` <a class=" table-question-item" href="#list-item-${newQuestionIndex}">${
    newQuestionIndex + 1
  }</a>`;
  tableQuestion.insertAdjacentHTML("beforeend", newTableQuestion);
  document
    .getElementById(`del_${newQuestionIndex}`)
    .addEventListener("click", (ele) => {
      actionDelete(ele);
    });
}

// Call the function initially and also bind it to window resize event
$(window).on("resize", setPageHeight);
setPageHeight(); // Call initially to set height

function loadIntoScroll() {
  document.querySelectorAll(".table-question-item").forEach((item) => {
    item.addEventListener("click", () => {
      examContent.scrollTo(item.getClientRects());
    });
  });
}

function markInViewport() {
  document.querySelectorAll(".question-card").forEach((questionCard) => {
    const rect = questionCard.getBoundingClientRect();
    const viewPortRect = rect.height;
    if (
      rect.top >= examContent.clientHeight / 2 - viewPortRect &&
      rect.bottom <= examContent.clientHeight / 2 + viewPortRect
    ) {
      // mark question in view
      if ($(".table-question-item")) {
        document
          .querySelectorAll(".table-question-item")
          .forEach((questionItem) => {
            if (
              questionItem.getAttribute("href").substring(1) ===
              questionCard.getAttribute("id")
            ) {
              questionItem.classList.add("active");
            } else {
              questionItem.classList.remove("active");
            }
          });
      }
    }
  });
}
// Add event listener for scrolling
examContent.addEventListener("scroll", function () {
  markInViewport();
});

saveBtn.addEventListener("click", () => {
  const confirmSubmit = confirm("Bạn có chắc muốn lưu bài !");
  if (confirmSubmit) {
    console.log("save");
  }
});

document.querySelector(".add-question-btn").addEventListener("click", () => {
  generateNewQuestion();
});

document.getElementById("fileInput").addEventListener("change", (event) => {
  const file = event.target.files[0];
  const header = ["question", "A", "B", "C", "D", "answer"];
  let excelquestionList = [];
  const reader = new FileReader();

  reader.onload = function (e) {
    var data = e.target.result;
    var workbook = XLSX.read(data, {
      type: "binary",
    });

    workbook.SheetNames.forEach(function (sheetName) {
      // Here is your object
      var excelRowData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], {
        header: header,
        skipHeader: true,
        origin: -1,
      });
      excelRowData.forEach((data) => excelquestionList.push(data)); // Push the combined object into the array
      generateNewQuestion(excelquestionList);
    });
  };

  reader.onerror = function (ex) {
    console.log(ex);
  };

  reader.readAsBinaryString(file);
});
