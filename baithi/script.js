// File: script.js
// Logic xử lý chính cho hệ thống nhận diện và tra cứu dinh dưỡng
// Đã đồng bộ với cấu trúc HTML và yêu cầu xếp hạng Top 20 có đơn vị.

// === I. CẤU HÌNH VÀ BIẾN TOÀN CỤC ===
// KIỂM TRA LẠI ĐƯỜNG DẪN NÀY CHO CHÍNH XÁC VỚI CẤU TRÚC THƯ MỤC CỦA BẠN
const URL = "./my_model/type_model/"; // Sửa nếu mô hình nằm ở thư mục khác (Ví dụ: "./my_model/")

let model, webcam, maxPredictions;
let loopId;
let isRunning = false;
let currentWeight = 100; // Mặc định 100g

// Cache DOM elements
const statusMsg = document.getElementById("status-msg");
const btnStart = document.getElementById("btn-start");
const btnPause = document.getElementById("btn-pause");
const webcamContainer = document.getElementById("webcam-container");
const aiResultDiv = document.getElementById("ai-result");
const aiNutritionDiv = document.getElementById("ai-nutrition");
const searchIn = document.getElementById("searchIn");
const wRange = document.getElementById("wRange");
const wVal = document.getElementById("wVal");
const nutriTable = document.getElementById("nutriTable");
const resPanel = document.getElementById("resPanel");
const resName = document.getElementById("resName");
const sortSelect = document.getElementById("sortSelect");
const rankPanel = document.getElementById("rankPanel");

// === II. CÁC HÀM XỬ LÝ CHÍNH TRÊN GIAO DIỆN ===

// Hàm 1: Khởi tạo Camera và Mô hình (onclick="initCamera()")
async function initCamera() {
    if (isRunning) {
        statusMsg.innerHTML = "Camera đã hoạt động!";
        return;
    }

    statusMsg.innerHTML = "Đang tải mô hình...";
    btnStart.disabled = true;

    try {
        const modelURL = URL + "model.json";
        const metadataURL = URL + "metadata.json";

        // 1. Tải Mô hình
        model = await tmImage.load(modelURL, metadataURL);
        maxPredictions = model.getTotalClasses();

        // 2. Thiết lập Webcam
        const flip = true; 
        webcam = new tmImage.Webcam(300, 300, flip); 
        await webcam.setup(); 
        await webcam.play();
        
        // 3. Hiển thị và Bắt đầu loop
        webcamContainer.innerHTML = ''; // Xóa chữ "Camera Tắt"
        webcamContainer.appendChild(webcam.canvas);

        isRunning = true;
        btnStart.style.display = 'none';
        btnPause.style.display = 'block';
        statusMsg.innerHTML = "Sẵn sàng nhận diện!";
        
        loop(); // Bắt đầu vòng lặp dự đoán
    } catch (e) {
        statusMsg.innerHTML = `Lỗi: Không thể khởi tạo mô hình. Kiểm tra đường dẫn (${URL}) và Console.`;
        btnStart.disabled = false;
        console.error("LỖI KHỞI TẠO:", e);
    }
}

// Hàm 2: Tạm dừng / Tiếp tục Camera (onclick="toggleCamera()")
function toggleCamera() {
    if (!webcam) return;
    
    if (isRunning) {
        isRunning = false;
        webcam.pause();
        window.cancelAnimationFrame(loopId);
        btnPause.innerHTML = 'Tiếp tục';
        btnPause.style.backgroundColor = '#27ae60';
        statusMsg.innerHTML = "Đã tạm dừng nhận diện.";
    } else {
        isRunning = true;
        webcam.play();
        loopId = window.requestAnimationFrame(loop);
        btnPause.innerHTML = 'Tạm dừng';
        btnPause.style.backgroundColor = '#f39c12';
        statusMsg.innerHTML = "Đang nhận diện...";
    }
}

// Hàm 3: Vòng lặp dự đoán
async function loop() {
    if (isRunning && webcam) {
        webcam.update(); 
        await predict();
    }
    loopId = window.requestAnimationFrame(loop);
}

// Hàm 4: Dự đoán kết quả
async function predict() {
    if (!model || !webcam) return;

    const prediction = await model.predict(webcam.canvas);
    
    let highestPrediction = prediction[0];
    for (let i = 1; i < maxPredictions; i++) {
        if (prediction[i].probability > highestPrediction.probability) {
            highestPrediction = prediction[i];
        }
    }
    
    const className = highestPrediction.className;
    const probability = highestPrediction.probability.toFixed(2) * 100;
    
    if (probability > 75) { // Ngưỡng chính xác > 75%
        aiResultDiv.innerHTML = `Xác định: <span style="color:#27ae60">${className}</span> (${probability.toFixed(0)}%)`;
        
        // Cập nhật chi tiết dinh dưỡng cho phần AI
        displayNutritionDetails(className, aiNutritionDiv, currentWeight);
        
    } else {
        aiResultDiv.innerHTML = "Đang tìm kiếm... (Độ chính xác thấp)";
        aiNutritionDiv.innerHTML = "";
    }
}

// Hàm 5: Xử lý tìm kiếm bằng tay (onchange="doSearch()")
function doSearch() {
    // Luôn cập nhật cân nặng mới nhất từ range
    currentWeight = parseInt(wRange.value); 
    
    const searchTerm = searchIn.value.trim();
    if (NUTRITION_DB[searchTerm]) {
        // Gọi hàm hiển thị chi tiết cho bảng tra cứu thủ công
        displayNutritionDetails(searchTerm, resPanel, currentWeight);
    } else {
        resPanel.style.display = 'none';
    }
}

// Hàm 6: Cập nhật khối lượng (oninput="updateWeight()")
function updateWeight() {
    currentWeight = parseInt(wRange.value);
    wVal.innerHTML = currentWeight;
    
    // Cập nhật lại kết quả tra cứu (nếu có)
    const searchTerm = searchIn.value.trim();
    if (NUTRITION_DB[searchTerm]) {
        displayNutritionDetails(searchTerm, resPanel, currentWeight);
    }
}

// Hàm 7: Cập nhật bảng xếp hạng (onchange="updateRanking()")
// ĐÃ SỬA: Chức năng này tương ứng với generateRankingTable
function updateRanking() {
    const keyId = sortSelect.value;
    if (keyId) {
        generateRankingTable(keyId);
    }
}


// === III. LOGIC HIỂN THỊ DỮ LIỆU ===

// Hàm phụ: Hiển thị chi tiết dinh dưỡng
function displayNutritionDetails(foodName, containerElement, weight) {
    const data = NUTRITION_DB[foodName];
    if (!data) {
        containerElement.style.display = 'none';
        return;
    }
    
    // 1. Cập nhật tên cho bảng tra cứu thủ công
    if (containerElement === resPanel) {
        resName.innerHTML = `${foodName} | Thông tin Dinh Dưỡng (${weight}g)`;
        resPanel.style.display = 'block';

        // 2. Tạo bảng chi tiết cho phần tra cứu thủ công
        let tableHtml = `
            <thead>
                <tr>
                    <th>Chỉ số</th>
                    <th>Giá trị (${weight}g)</th>
                    <th>Chuẩn ngày (DV)</th>
                </tr>
            </thead>
            <tbody>
        `;
        
        NUTRITION_KEYS.forEach((keyInfo) => {
            const keyId = keyInfo.id;
            const value100g = data[keyId] || 0;
            const valueWeight = ((value100g * weight) / 100).toFixed(2);
            
            if (parseFloat(valueWeight) > 0 || keyId === "p0") { 
                
                let dailyValuePercent = '';
                const dv = DAILY_VALUES[keyId];
                if (dv && dv > 0) {
                    const percent = (((value100g * weight) / 100) / dv * 100).toFixed(0);
                    dailyValuePercent = `${percent}%`;
                }

                tableHtml += `
                    <tr>
                        <td>${keyInfo.name}</td>
                        <td><b>${valueWeight}</b> ${keyInfo.unit}</td>
                        <td>${dailyValuePercent}</td>
                    </tr>
                `;
            }
        });

        tableHtml += `</tbody>`;
        nutriTable.innerHTML = tableHtml;

    } else {
        // 2. Tạo List rút gọn cho phần Nhận diện AI (ai-nutrition)
        const simplifiedKeys = ["p0", "p1", "p4", "p7"];
        let simpleHtml = "<ul>";
        simplifiedKeys.forEach(keyId => {
             const keyInfo = NUTRITION_KEYS.find(k => k.id === keyId);
             const value100g = data[keyId] || 0;
             const valueWeight = ((value100g * weight) / 100).toFixed(1);
             if(parseFloat(valueWeight) > 0 || keyId === "p0") {
                simpleHtml += `<li><b>${keyInfo.name}</b>: ${valueWeight} ${keyInfo.unit}</li>`;
             }
        });
        simpleHtml += "</ul>";
        aiNutritionDiv.innerHTML = simpleHtml;
    }
}

// Hàm phụ: Tạo bảng xếp hạng (ĐÃ SỬA: Top 20 và có đơn vị)
function generateRankingTable(keyId = "p7") {
    const keyInfo = NUTRITION_KEYS.find(k => k.id === keyId);
    if (!keyInfo) return;

    // 1. Lấy dữ liệu và sắp xếp
    const dataArray = Object.keys(NUTRITION_DB).map(name => ({
        name: name,
        value: NUTRITION_DB[name][keyId] || 0
    }));

    dataArray.sort((a, b) => b.value - a.value);

    // 2. Tạo bảng HTML
    let tableHtml = `
        <table>
            <thead>
                <tr>
                    <th style="width: 10%;">#</th>
                    <th>Tên</th>
                    <th>Giá trị</th>
                </tr>
            </thead>
            <tbody>
    `;

    // Lấy Top 20 mục
    for (let i = 0; i < Math.min(20, dataArray.length); i++) {
        if (dataArray[i].value > 0) {
            tableHtml += `
                <tr>
                    <td>${i + 1}</td>
                    <td>${dataArray[i].name}</td>
                    <td><b>${dataArray[i].value.toFixed(1)} ${keyInfo.unit}</b></td>
                </tr>
            `;
        }
    }

    tableHtml += `
            </tbody>
        </table>
    `;

    // 3. Hiển thị
    rankPanel.innerHTML = tableHtml;
}

// === IV. KHỞI TẠO KHI TẢI TRANG (DOMContent) ===
document.addEventListener("DOMContentLoaded", () => {
    // 1. Điền dữ liệu vào Datalist (cho thanh tìm kiếm)
    const dbList = document.getElementById("dbList");
    Object.keys(NUTRITION_DB).forEach(name => {
        const option = document.createElement('option');
        option.value = name;
        dbList.appendChild(option);
    });

    // 2. Điền dữ liệu vào Select Box (cho bảng xếp hạng)
    NUTRITION_KEYS.forEach(key => {
        // Chỉ thêm các chỉ số có ý nghĩa để xếp hạng
        if (["p0", "p1", "p4", "p7", "p8", "p9", "p10", "p5"].includes(key.id)) {
            const option = document.createElement('option');
            option.value = key.id;
            option.textContent = key.name;
            sortSelect.appendChild(option);
        }
    });

    // 3. Thiết lập xếp hạng mặc định (Vitamin C: p7)
    sortSelect.value = "p7";
    generateRankingTable("p7");
});