const jsonData = [
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
function rowClicked(row)
{
    console.log(row.cells[1].innerText)
    window.location.href = "#list-item-" + row.cells[1].innerText;
}
const header = ['A', 'B', 'C', 'D'];
function parseDataToExamContentVer2(data) {
    let id = 0;
    let html = '';
    data.forEach(element => {
        const correctOption = element.correctOption
        const userOption = element.userOption
        let headerColor = '#e6e8ea'
        let bodyColor = '#fff'
        if(correctOption === userOption)
        {
            headerColor = 'rgb(56, 142, 60)'
            bodyColor = '#EFF8F1'
        }
        else if(correctOption !== userOption)
        {
            headerColor = '#c81f17'
            bodyColor = '#F6D0D0'
        }
        id = id + 1;
        html += `<div  id="list-item-${id}" class="card mb-3">
        <h5 class="card-header" style="background-color:${headerColor}; color: white">Question ${id}</h5>
        <div class="card-body">
          <p class="card-text fs-4">${element.question}</p>
          <ul class="d-flex flex-column mt-4 ps-0 pe-5 gap-3">`
        for (let i = 1; i <= 4; i++) {
            let referClass = 'answer-card-normal'
            if (i === correctOption) referClass = 'answer-card-correct'
            else if (i == userOption && userOption !== correctOption) referClass = 'answer-card-error'
            html += `<li class="${referClass} answer-card card">
            <div class="answer-option d-flex align-items-center">
                <div class="answer-card-head  align-self-stretch d-flex align-items-center px-4">${header[i-1]}</div>
                <div class="answer-card-body ms-3 d-flex flex-shrink-1">
                    <p class="card-text">${element[`option${i}`]}</p>
                </div>
            </div>
        </li>`
        }
        html += `</ul>
        
        </div>
        </div>`
    });
    return html;
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
var pieChart = document.getElementById("chartjs-doughnut");
pieChart.style.height = "250px"
pieChart.style.width = "507px"
new Chart(document.getElementById("chartjs-doughnut"), {
    type: "pie",
    data: {
      labels: ["Làm đúng", "Làm sai", "Chưa hoàn thành"],
      datasets: [{
        data: [30, 8, 5],
        backgroundColor: [
            "rgb(56, 142, 60)",
            "#c81f17",
            "#dee2e6"
        ],
        borderColor: "transparent"
      }]
    },
    options: { 
      maintainAspectRatio: false,
      cutoutPercentage: 0,
      
    }
  });
const container = document.querySelector('.question-view-container');
const cardAnswerContainer = document.querySelector('.table-question');
const detailAnswerContainer = document.querySelector('.tb-body');
detailAnswerContainer.innerHTML = generateAnswerDetailTable(jsonData)
container.innerHTML = parseDataToExamContentVer2(jsonData)
