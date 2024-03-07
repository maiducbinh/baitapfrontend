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

function exportToPDF() {
    window.jsPDF = window.jspdf.jsPDF
    const table = document.querySelector('.table');

    // Sử dụng html2canvas để chụp bảng dưới dạng hình ảnh
    html2canvas(table).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();

        // Tính toán kích thước và tỉ lệ của PDF dựa trên kích thước bảng
        const imgWidth = 210; // Chiều rộng của khổ giấy A4 (mm)
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        // Thêm hình ảnh vào tài liệu PDF
        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);

        // Xuất file PDF
        pdf.save('thongke.pdf');
    });
}

const exportButton = document.querySelector('.icon-shape');
exportButton.addEventListener('click', exportToPDF);