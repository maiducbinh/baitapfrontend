// Exam list model
let examsList = [
  {
    examTitle: "Bài kiểm tra cuối kỳ 1",
    description: null,
    examType: "Tự do",
    examSubject: "Toán",
    minuteTaking: 60,
    questionList: [
      {
        question:
          "A flashing red traffic light signifies that a driver should do what?",
        A: "stop",
        B: "speed up",
        C: "proceed with caution",
        D: "honk the horn",
        answer: "A",
      },
      {
        question: "A knish is traditionally stuffed with what filling?",
        A: "potato",
        B: "creamed corn",
        C: "lemon custard",
        D: "raspberry jelly",
        answer: "A",
      },
      {
        question: "A pita is a type of what?",
        A: "fresh fruit",
        B: "flat bread",
        C: "French tart",
        D: "friend bean dip",
        answer: "B",
      },
      {
        question:
          "A portrait that comically exaggerates a person's physical traits is called a what?",
        A: "landscape",
        B: "caricature",
        C: "still life",
        D: "Impressionism",
        answer: "B",
      },
      {
        question: "A second-year college student is usually called a what?",
        A: "sophomore",
        B: "senior",
        C: "freshman ",
        D: "junior ",
        answer: "A",
      },
      {
        question:
          "A student who earns a J.D. can begin his or her career as a what?",
        A: "lawyer",
        B: "bricklayer",
        C: "doctor",
        D: "accountant",
        answer: "A",
      },
      {
        question:
          "A triptych is a work of art that is painted on how many panels?",
        A: "two",
        B: "three",
        C: "five",
        D: "eight",
        answer: "B",
      },
      {
        question:
          "According to a famous line from the existentialist play 'No Exit' what is hell?",
        A: "oneself",
        B: "other people",
        C: "little made large",
        D: "hued in green and blue",
        answer: "B",
      },
    ],
  },
  {
    examTitle: "Bài kiểm tra giữa kỳ 2",
    description: "Bài kiểm tra 50%",
    examType: "Giới hạn",
    examSubject: "Lịch sử",
    minuteTaking: 60,
    questionList: [
      {
        question:
          "According to a popular slogan, what state should people not 'mess with'?",
        A: "New York",
        B: "Texas",
        C: "Montana",
        D: "Rhode Island",
        answer: "B",
      },
      {
        question:
          "According to a Yale University study, what smell is the most recognizable to American adults?",
        A: "tuna",
        B: "laundry",
        C: "popcorn",
        D: "coffee",
        answer: "D",
      },
      {
        question:
          "According to folklore, the 'jackalope' is an antlered version of what animal?",
        A: "chicken",
        B: "rabbit",
        C: "moose",
        D: "snake",
        answer: "B",
      },
      {
        question: "According to Greek mythology, who was Apollo's twin sister?",
        A: "Aphrodite",
        B: "Artemis",
        C: "Venus",
        D: "Athena",
        answer: "B",
      },
      {
        question:
          "According to legend, if you give someone the 'evil eye' what are you doing?",
        A: "cursing them",
        B: "blessing a child",
        C: "counting money",
        D: "passing time",
        answer: "A",
      },
      {
        question:
          "According to legend, in what country are you most likely to meet a leprechaun?",
        A: "Ireland",
        B: "Poland",
        C: "Greenland",
        D: "Scotland",
        answer: "A",
      },
      {
        question:
          "According to the American Kennel Club, what is the most popular breed of dog in the US as of 1999?",
        A: "Poodle",
        B: "Beagle",
        C: "German shepherd",
        D: "Labrador retriever",
        answer: "D",
      },
      {
        question:
          "According to the Bible, Moses and Aaron had a sister named what?",
        A: "Jochebed",
        B: "Ruth",
        C: "Leah",
        D: "Miriam",
        answer: "D",
      },
    ],
  },
  {
    examTitle: "Bài kiểm tra cuối kỳ 2",
    description: "Bài kiểm tra thi cuối kỳ",
    examType: "Tự do",
    examSubject: "Toán",
    minuteTaking: 50,
    questionList: [
      {
        question:
          "According to the children's nursery rhyme, what type of ocean did Columbus sail in 1492?",
        A: "calm",
        B: "blue",
        C: "windy",
        D: "really big",
        answer: "B",
      },
      {
        question:
          "According to the Mother Goose nursery rhyme, which child is full of woe?",
        A: "Monday's child",
        B: "Wednesday's child",
        C: "Thursday's child",
        D: "Saturday's child",
        answer: "B",
      },
      {
        question:
          "According to the popular saying, what should you do 'when in Rome'?",
        A: "watch your wallet",
        B: "see the Coliseum",
        C: "as the Romans do",
        D: "don't drink the water",
        answer: "C",
      },
      {
        question: "According to the proverb, necessity is the mother of what?",
        A: "Invention",
        B: "Luck",
        C: "Problems",
        D: "Procrastination",
        answer: "A",
      },
      {
        question:
          "According to the title of a popular children's TV show, what color is Bear's big house?",
        A: "red",
        B: "green",
        C: "purple",
        D: "blue",
        answer: "D",
      },
      {
        question:
          "According to the USDA, which food group should you eat the most servings of per day?",
        A: "vegetables",
        B: "dairy",
        C: "meats",
        D: "breads",
        answer: "D",
      },
      {
        question:
          "Ada Lovelace is credited with being the first person to have made what?",
        A: "a computer program",
        B: "a souffle",
        C: "a brassiere",
        D: "a mystery novel",
        answer: "A",
      },
      {
        question:
          "After Prince Charles, who is next in line to be the king of England?",
        A: "Prince William",
        B: "Prince Andrew",
        C: "Prince Edward",
        D: "Fresh Prince",
        answer: "A",
      },
    ],
  },
  {
    examTitle: "Bài kiểm tra Toán",
    description: "đánh giá đầu kỳ",
    examType: "Giới hạn",
    examSubject: "Toán",
    minuteTaking: 50,
    questionList: [
      {
        question: "An airplane's black box is usually what color?",
        A: "black",
        B: "white",
        C: "orange",
        D: "purple",
        answer: "C",
      },
      {
        question: "As of 1999, which state has the most Girl Scouts?",
        A: "California",
        B: "Illinois",
        C: "New York",
        D: "Pennsylvania",
        answer: "A",
      },
      {
        question:
          "Astronaut John Glenn served as a pilot in what branch of the military?",
        A: "Army",
        B: "Air Force",
        C: "Marines",
        D: "Navy",
        answer: "C",
      },
      {
        question: "At the equator, how fast is the earth's surface turning?",
        A: "about 100 miles per hour",
        B: "about 500 miles per hour",
        C: "about 1000 miles per hour",
        D: "about 2000 miles per hour",
        answer: "C",
      },
      {
        question:
          "At what age can someone first attend an R-rated movie without an accompanying adult?",
        A: "15",
        B: "17",
        C: "18",
        D: "21",
        answer: "C",
      },
    ],
  },
  {
    examTitle: "Bài kiểm tra miệng",
    description: "đánh giá miệng",
    examType: "Giới hạn",
    examSubject: "Văn",
    minuteTaking: 15,
    questionList: [
      {
        question: "An airplane's black box is usually what color?",
        A: "black",
        B: "white",
        C: "orange",
        D: "purple",
        answer: "C",
      },
      {
        question: "As of 1999, which state has the most Girl Scouts?",
        A: "California",
        B: "Illinois",
        C: "New York",
        D: "Pennsylvania",
        answer: "A",
      },
      {
        question:
          "Astronaut John Glenn served as a pilot in what branch of the military?",
        A: "Army",
        B: "Air Force",
        C: "Marines",
        D: "Navy",
        answer: "C",
      },
      {
        question: "At the equator, how fast is the earth's surface turning?",
        A: "about 100 miles per hour",
        B: "about 500 miles per hour",
        C: "about 1000 miles per hour",
        D: "about 2000 miles per hour",
        answer: "C",
      },
      {
        question:
          "At what age can someone first attend an R-rated movie without an accompanying adult?",
        A: "15",
        B: "17",
        C: "18",
        D: "21",
        answer: "C",
      },
    ],
  },
  {
    examTitle: "Bài kiểm tra đầu vào",
    description: "đánh giá đầu vào",
    examType: "Tự do",
    examSubject: "Lịch sử",
    minuteTaking: 60,
    questionList: [
      {
        question: "An airplane's black box is usually what color?",
        A: "black",
        B: "white",
        C: "orange",
        D: "purple",
        answer: "C",
      },
      {
        question: "As of 1999, which state has the most Girl Scouts?",
        A: "California",
        B: "Illinois",
        C: "New York",
        D: "Pennsylvania",
        answer: "A",
      },
      {
        question:
          "Astronaut John Glenn served as a pilot in what branch of the military?",
        A: "Army",
        B: "Air Force",
        C: "Marines",
        D: "Navy",
        answer: "C",
      },
      {
        question: "At the equator, how fast is the earth's surface turning?",
        A: "about 100 miles per hour",
        B: "about 500 miles per hour",
        C: "about 1000 miles per hour",
        D: "about 2000 miles per hour",
        answer: "C",
      },
      {
        question:
          "At what age can someone first attend an R-rated movie without an accompanying adult?",
        A: "15",
        B: "17",
        C: "18",
        D: "21",
        answer: "C",
      },
    ],
  },
  {
    examTitle: "Bài kiểm tra đánh giá đầu kỳ",
    description: "đánh giá đầu kỳ",
    examType: "Giới hạn",
    examSubject: "Toán",
    minuteTaking: 60,
    questionList: [
      {
        question: "An airplane's black box is usually what color?",
        A: "black",
        B: "white",
        C: "orange",
        D: "purple",
        answer: "C",
      },
      {
        question: "As of 1999, which state has the most Girl Scouts?",
        A: "California",
        B: "Illinois",
        C: "New York",
        D: "Pennsylvania",
        answer: "A",
      },
      {
        question:
          "Astronaut John Glenn served as a pilot in what branch of the military?",
        A: "Army",
        B: "Air Force",
        C: "Marines",
        D: "Navy",
        answer: "C",
      },
      {
        question: "At the equator, how fast is the earth's surface turning?",
        A: "about 100 miles per hour",
        B: "about 500 miles per hour",
        C: "about 1000 miles per hour",
        D: "about 2000 miles per hour",
        answer: "C",
      },
      {
        question:
          "At what age can someone first attend an R-rated movie without an accompanying adult?",
        A: "15",
        B: "17",
        C: "18",
        D: "21",
        answer: "C",
      },
    ],
  },
  {
    examTitle: "Bài kiểm tra đánh giá năng lực",
    description: "đánh giá năng lực",
    examType: "Giới hạn",
    examSubject: "Toán",
    minuteTaking: 50,
    questionList: [
      {
        question: "An airplane's black box is usually what color?",
        A: "black",
        B: "white",
        C: "orange",
        D: "purple",
        answer: "C",
      },
      {
        question: "As of 1999, which state has the most Girl Scouts?",
        A: "California",
        B: "Illinois",
        C: "New York",
        D: "Pennsylvania",
        answer: "A",
      },
      {
        question:
          "Astronaut John Glenn served as a pilot in what branch of the military?",
        A: "Army",
        B: "Air Force",
        C: "Marines",
        D: "Navy",
        answer: "C",
      },
      {
        question: "At the equator, how fast is the earth's surface turning?",
        A: "about 100 miles per hour",
        B: "about 500 miles per hour",
        C: "about 1000 miles per hour",
        D: "about 2000 miles per hour",
        answer: "C",
      },
      {
        question:
          "At what age can someone first attend an R-rated movie without an accompanying adult?",
        A: "15",
        B: "17",
        C: "18",
        D: "21",
        answer: "C",
      },
    ],
  },
  {
    examTitle: "Luyện tập thi cuối kỳ",
    description: "luyện tập cuối kỳ",
    examType: "Tự do",
    examSubject: "Văn",
    minuteTaking: 60,
    questionList: [
      {
        question: "An airplane's black box is usually what color?",
        A: "black",
        B: "white",
        C: "orange",
        D: "purple",
        answer: "C",
      },
      {
        question: "As of 1999, which state has the most Girl Scouts?",
        A: "California",
        B: "Illinois",
        C: "New York",
        D: "Pennsylvania",
        answer: "A",
      },
      {
        question:
          "Astronaut John Glenn served as a pilot in what branch of the military?",
        A: "Army",
        B: "Air Force",
        C: "Marines",
        D: "Navy",
        answer: "C",
      },
      {
        question: "At the equator, how fast is the earth's surface turning?",
        A: "about 100 miles per hour",
        B: "about 500 miles per hour",
        C: "about 1000 miles per hour",
        D: "about 2000 miles per hour",
        answer: "C",
      },
      {
        question:
          "At what age can someone first attend an R-rated movie without an accompanying adult?",
        A: "15",
        B: "17",
        C: "18",
        D: "21",
        answer: "C",
      },
    ],
  },
  {
    examTitle: "Luyện tập toán hình",
    description: "toán hình",
    examType: "Tự do",
    examSubject: "Toán",
    minuteTaking: 60,
    questionList: [
      {
        question: "An airplane's black box is usually what color?",
        A: "black",
        B: "white",
        C: "orange",
        D: "purple",
        answer: "C",
      },
      {
        question: "As of 1999, which state has the most Girl Scouts?",
        A: "California",
        B: "Illinois",
        C: "New York",
        D: "Pennsylvania",
        answer: "A",
      },
      {
        question:
          "Astronaut John Glenn served as a pilot in what branch of the military?",
        A: "Army",
        B: "Air Force",
        C: "Marines",
        D: "Navy",
        answer: "C",
      },
      {
        question: "At the equator, how fast is the earth's surface turning?",
        A: "about 100 miles per hour",
        B: "about 500 miles per hour",
        C: "about 1000 miles per hour",
        D: "about 2000 miles per hour",
        answer: "C",
      },
      {
        question:
          "At what age can someone first attend an R-rated movie without an accompanying adult?",
        A: "15",
        B: "17",
        C: "18",
        D: "21",
        answer: "C",
      },
    ],
  },
  {
    examTitle: "Luyện tập đầu kỳ",
    description: "đánh giá đầu kỳ",
    examType: "Giới hạn",
    examSubject: "Lịch sử",
    minuteTaking: 60,
    questionList: [
      {
        question: "An airplane's black box is usually what color?",
        A: "black",
        B: "white",
        C: "orange",
        D: "purple",
        answer: "C",
      },
      {
        question: "As of 1999, which state has the most Girl Scouts?",
        A: "California",
        B: "Illinois",
        C: "New York",
        D: "Pennsylvania",
        answer: "A",
      },
      {
        question:
          "Astronaut John Glenn served as a pilot in what branch of the military?",
        A: "Army",
        B: "Air Force",
        C: "Marines",
        D: "Navy",
        answer: "C",
      },
      {
        question: "At the equator, how fast is the earth's surface turning?",
        A: "about 100 miles per hour",
        B: "about 500 miles per hour",
        C: "about 1000 miles per hour",
        D: "about 2000 miles per hour",
        answer: "C",
      },
      {
        question:
          "At what age can someone first attend an R-rated movie without an accompanying adult?",
        A: "15",
        B: "17",
        C: "18",
        D: "21",
        answer: "C",
      },
    ],
  },
];

let examListLoad = examsList.concat();


const sidebar = document.querySelector(".sidebar");
const sidebarBtn = document.querySelector(".bx-menu");


// render modal
function examItemRenderModal(examItem, examItemIndex) {
  const examItemModalElement = `
        <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">Danh mục ${
              examItem.examSubject
            }</h1>
            <button type="button" class="btn btn-delete" id="btnDelExamModal" data-bs-dismiss="modal" aria-label="Delete">Xoá
                bài</button>
        </div>
        <div class="modal-body">
            <div class="container-fluid">
                <div class="row mt-4 gap-2">
                    <div class="left-side col-8 exam-content">
                    ${examItem.questionList
                      .map(
                        (questionItem, questionIndex) =>
                          `<div id="list-item-1" class="question-card card">
                            <h5 class="card-header">Câu ${
                              questionIndex + 1
                            }</h5>
                              <div class="card-body">
                                <div class="input-group input-group-lg">
                                  <span class="input-group-text" id="inputGroup-sizing-lg">Câu hỏi:</span>
                                  <input type="text" class="form-control" value="${
                                    questionItem.question
                                  }"
                                      aria-label="Sizing example input"
                                      aria-describedby="inputGroup-sizing-lg">
                              </div>
                              <ul class="d-flex flex-column mt-4 mb-0 ps-0 pe-5 gap-2">
                                    <li class="answer-card">
                                      <div class="input-group mb-2">
                                          <span class="input-group-text"
                                              id="inputGroup-sizing-default">A</span>
                                          <input type="text" class="form-control"
                                              aria-label="Sizing example input"
                                              aria-describedby="inputGroup-sizing-A" value="${
                                                questionItem.A
                                              }">
                                      </div>
                                  </li>
                                    <li class="answer-card">
                                      <div class="input-group mb-2">
                                          <span class="input-group-text"
                                              id="inputGroup-sizing-default">B</span>
                                          <input type="text" class="form-control"
                                              aria-label="Sizing example input"
                                              aria-describedby="inputGroup-sizing-B" value="${
                                                questionItem.B
                                              }">
                                      </div>
                                  </li>
                                    <li class="answer-card">
                                      <div class="input-group mb-2">
                                          <span class="input-group-text"
                                              id="inputGroup-sizing-default">C</span>
                                          <input type="text" class="form-control"
                                              aria-label="Sizing example input"
                                              aria-describedby="inputGroup-sizing-C" value="${
                                                questionItem.C
                                              }">
                                      </div>
                                  </li>
                                    <li class="answer-card">
                                      <div class="input-group mb-2">
                                          <span class="input-group-text"
                                              id="inputGroup-sizing-default">D</span>
                                          <input type="text" class="form-control"
                                              aria-label="Sizing example input"
                                              aria-describedby="inputGroup-sizing-D" value="${
                                                questionItem.D
                                              }">
                                      </div>
                                  </li>
                                
                              </ul>
                          </div>
                          </div>`
                      )
                      .join("")}
                    </div>
                    <div class="col right-side px-0">
                        <div class="d-flex flex-column gap-3">
                            <div class="card text-center px-3 py-4">
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="inputGroup-exam-title">Tiêu
                                        đề:</span>
                                    <input type="text" class="form-control" aria-label="exam title"
                                        aria-describedby="inputGroup-exam-title" value="${
                                          examItem.examTitle
                                        }">
                                </div>
                                <div class="input-group">
                                    <span class="input-group-text" id="inputGroup-exam-taking">Thời
                                        gian:</span>
                                    <input type="text" class="form-control" aria-label="time taking"
                                        aria-describedby="inputGroup-exam-taking" value="${
                                          examItem.minuteTaking
                                        }">
                                </div>
                                <div class="input-exam-type">
                                    <p class="table-filter-label form-label">Loại kỳ thi:</p>
                                    <div class="form-check form-check-inline">
                                        <input ${
                                          examItem.examType === "Tự do"
                                            ? "checked"
                                            : ""
                                        } class="form-check-input" type="radio"
                                            name="examTypeEdit" id="allTimeEdit" value="Tự do">
                                        <label class="form-check-label" for="allTimeEdit">Tự do</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input
                                        ${
                                          examItem.examType === "Giới hạn"
                                            ? "checked"
                                            : ""
                                        }
                                        class="form-check-input" type="radio" name="timeRestrictEdit"
                                            id="timeRestrictEdit" value="Giới hạn">
                                        <label class="form-check-label" for="timeRestrictEdit">Giới
                                            hạn</label>
                                    </div>
                                </div>
                            </div>
                            <div class="card table-question-card">
                                <div class="card-body">
                                    <h2 class="card-title text-center">Câu trả lời</h2>
                                    <div class="table-question">
                                    ${examItem.questionList
                                      .map(
                                        (_, questionItemIndex) =>
                                          `<a class="${
                                            questionItemIndex === 0
                                              ? "active"
                                              : ""
                                          } table-question-item" href="#list-item-${
                                            questionItemIndex + 1
                                          }">${questionItemIndex + 1}</a>`
                                      )
                                      .join("")}
                                    </div>
                                </div>
                            </div>
                            <div class="d-grid gap-2 col-6 mx-auto">
                                <button class="btn btn-primary save-btn" type="button">Lưu bài</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
    </div>`;

  document.querySelector(".btn-delete").addEventListener("click", () => {
    examListLoad.splice(examItemIndex, 1);
    renderTable();
  });
}

// Load exam list
const tableExamManager = document.querySelector(".table-exam-manager");

function renderTableResult(examRenderList) {
  examRenderList.forEach((examItem, examItemIndex) => {
    const examItemElement = `<tr visible="true">
      <th scope="row">${examItemIndex + 1}</th>
      <td>${examItem.examTitle}</td>
      <td>${examItem.description}</td>
      <td>${examItem.examType}</td>
      <td>${examItem.examSubject}</td>
      <td>${examItem.minuteTaking}</td>
      <td>
      <button id="examBtn ${examItemIndex}" type="button" class="btn btn-primary btn-do-exam" data-bs-toggle="modal"
      data-bs-target="#staticBackdrop">
      Làm bài
      </button>
      </td>
      </tr>`;
    tableExamManager.insertAdjacentHTML("beforeend", examItemElement);
    document
      .getElementById("examBtn " + examItemIndex)
      .addEventListener("click", () => {
        const examContent = examListLoad[examItemIndex];
        localStorage.setItem("examConten", JSON.stringify(examContent));
        window.location.href = "exam_taking.html";
      });
  });
}

// handle exam btn click

// Search bar function
function searchBarFunction() {
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
        $(this).attr("visible", "false");
      });

    $(".results tbody tr:containsi('" + searchSplit + "')").each(function (e) {
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

const examTypeRadios = document.querySelectorAll('input[name="examType"]');
const orderByRadios = document.querySelectorAll('input[name="orderBy"]');
const selectExamSubject = document.getElementById("selectExamSubject");
const tableRows = document.querySelectorAll("tbody tr");

function filterExamListResult(examListFilter) {
  const selectedExamType = document.querySelector(
    'input[name="examType"]:checked'
  ).value;
  const selectedOrderBy = document.querySelector(
    'input[name="orderBy"]:checked'
  ).value;
  const selectedSubject = selectExamSubject.value;

  let examListResult = examListFilter.concat();

  if (selectedOrderBy == 1) {
    examListResult.sort((a, b) => {
      if (a.examTitle === b.examTitle) return 0;
      return a.examTitle > b.examTitle ? 1 : -1;
    });
  }

  examListResult = selectedExamType.match("allType")
    ? examListResult
    : examListResult.filter((examItem) =>
        examItem.examType.match(selectedExamType)
      );

  examListResult = selectedSubject.match("allSubject")
    ? examListResult
    : examListResult.filter((examItem) =>
        examItem.examSubject.match(selectedSubject)
      );

  return examListResult;
}

function renderTable() {
  tableExamManager.innerHTML = "";
  const examListAfterFilter = filterExamListResult(examListLoad);
  renderTableResult(examListAfterFilter);
  var itemCount = $('.results tbody tr[visible="true"]').length;
  $(".counter").text(itemCount + " item");

  if (itemCount == "0") {
    $(".no-result").show();
  } else {
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

selectExamSubject.addEventListener("change", () => {
  renderTable();
});

$(document).ready(function () {
  renderTable();
  searchBarFunction();
});
