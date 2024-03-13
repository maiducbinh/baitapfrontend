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

const examId = 0;
let examList = [];

const examContent = document.querySelector(".exam-content");
const saveBtn = document.querySelector(".save-btn");
const addQuestionBtn = document.querySelector(".add-question-btn");

// exam generate question
function generateNewQuestion() {
  const newQuestionIndex = examList.length;
  const newQuestion = `<div id="list-item-${newQuestionIndex}" class="question-card card">
    <h5 class="card-header">Câu ${newQuestionIndex + 1}</h5>
    <div class="card-body">
        <div class="input-group input-group-lg">
            <span class="input-group-text" id="inputGroup-sizing-lg">Câu hỏi:</span>
            <input type="text" class="form-control" aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-lg">
        </div>
        <ul class="d-flex flex-column mt-4 mb-0 ps-0 pe-5 gap-2">
            <li class="answer-card">
                <div class="input-group mb-2">
                    <span class="input-group-text" id="inputGroup-sizing-default">A</span>
                    <input type="text" class="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-A">
                </div>
            </li>
            <li class="answer-card ">
                <div class="input-group mb-2">
                    <span class="input-group-text" id="inputGroup-sizing-default">B</span>
                    <input type="text" class="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-B">
                </div>
            </li>
            <li class="answer-card ">
                <div class="input-group mb-2">
                    <span class="input-group-text" id="inputGroup-sizing-default">C</span>
                    <input type="text" class="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-C">
                </div>
            </li>
            <li class="answer-card ">
                <div class="input-group mb-2">
                    <span class="input-group-text" id="inputGroup-sizing-default">D</span>
                    <input type="text" class="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-D">
                </div>
            </li>
        </ul>
    </div>
</div>`;
  examList.push(newQuestionIndex);
  examContent
    .querySelector(".add-question-section")
    .insertAdjacentHTML("beforebegin", newQuestion);
  generateNewTableQuestion(newQuestionIndex);
}

function generateNewTableQuestion(newQuestionIndex) {
  const newTableQuestion = ` <a class=" table-question-item" href="#list-item-${newQuestionIndex}">${
    newQuestionIndex + 1
  }</a>`;
  document
    .querySelector(".table-question")
    .insertAdjacentHTML("beforeend", newTableQuestion);
  loadIntoScroll();
  markInViewport();
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

addQuestionBtn.addEventListener("click", () => {
  generateNewQuestion();
});
