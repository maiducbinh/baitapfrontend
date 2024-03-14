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

// Data for chart
const lineData1 = [0, 1105, 585, 714, 467, 644, 503, 500, 698, 588, 196];
const lineData2 = [79, 432, 738, 653, 774, 999, 1100, 509, 617, 704, 392];
const pieData1 = [5000, 4324];
const pieData2 = [5000, 2607];
// element
const subjectSelector = document.getElementById("selectExamSubject");
const examTypeRadios = document.querySelectorAll('input[name="examType"]')
const yearSelector = document.getElementById("selectExamYear");
function getAveragePoint(points)
{
  var sum = 0;
  let i = 0;
  points.forEach(point => {
    sum = sum + point*i;
    i = i + 1;
  })
  return (sum/5000).toFixed(2);
}
function getAttempt(attempts)
{
  var sum = 0;
  attempts.forEach(attempt => {
    sum = sum + attempt;
  })
  return sum;
}
// js for filter
function displayChart()
{
  var randomNumber = Math.floor(Math.random() * 2) + 1;
  var selectedLineData = [];
  var selectedPieData = [];
  console.log("random" + randomNumber)
  if(randomNumber === 2)
  {
    selectedLineData = lineData2.concat();
    selectedPieData = pieData2.concat();
  }
  else if(randomNumber === 1)
  {
    selectedLineData = lineData1.concat();
    selectedPieData = pieData1.concat();
  }
  document.querySelector("#line-title").textContent = `Biểu đồ phân phối điểm - Bài thi ${document.querySelector('.form-check input[name="examType"]:checked').value} - Môn ${subjectSelector.value} - Năm ${yearSelector.value}`
  document.querySelector("#attempts").textContent = `Tổng số lần tham gia: ${getAttempt(selectedPieData)}`;
  document.querySelector("#average").textContent = `Điểm trung bình: ${getAveragePoint(selectedLineData)}`;
  new Chart(document.getElementById("chartjs-line"), {
    type: "line",
    data: {
      labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
      datasets: [{
        label: "Số lượng",
        fill: true,
        backgroundColor: "transparent",
        borderColor: "#c81f17",
        data: selectedLineData
      }]
    },
    options: {
      scales: {
        xAxes: [{
          reverse: true,
          gridLines: {
            color: "rgba(0,0,0,0.05)"
          }
        }],
        yAxes: [{
          borderDash: [5, 5],
          gridLines: {
            color: "rgba(0,0,0,0)",
            fontColor: "#fff"
          }
        }]
      }
    }
  });

  var pieChart = document.getElementById("chartjs-doughnut");
  pieChart.style.height = "250px"
  new Chart(document.getElementById("chartjs-doughnut"), {
    type: "pie",
    data: {
      labels: ["Hoàn thành", "Chưa hoàn thành"],
      datasets: [{
        data: selectedPieData,
        backgroundColor: [
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
}
function renderChart()
{
    var isDisplay = 1;
    const selectedSubject = subjectSelector.value;
    const selectedYear = yearSelector.value;
    const selectedExamType = document.querySelector('.form-check input[name="examType"]:checked').value;

    var nothingDiv = document.querySelector(".nothing");
    var rowDiv = document.querySelector(".row");
    if(selectedExamType != "none" && selectedYear != "none" && selectedExamType != "none")
    {
      rowDiv.className = "row"
      nothingDiv.className = "nothing invisible";
      nothingDiv.style.display = "none"
      rowDiv.style.display = ""
        
    }
    else{
        rowDiv.className = "row invisible"
        rowDiv.style.display = "none"
        nothingDiv.className = "nothing";
        nothingDiv.style.display = ""
        isDisplay = 0;
    }
    return isDisplay
}
subjectSelector.addEventListener("change", () => {
  console.log(renderChart())
    if(renderChart() == 1){
      displayChart();
    }
})
yearSelector.addEventListener("change", () => {
  console.log(renderChart())
  if(renderChart() == 1){
    displayChart();
  }
})
examTypeRadios.forEach((item) => {
    item.addEventListener("click", () =>{
      console.log(renderChart())
      if(renderChart() == 1){
        displayChart();
      }
    })
})
$(document).ready(function() {
  if(renderChart() == 1)
  {
    displayChart();
  }
})


  