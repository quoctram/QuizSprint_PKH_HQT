function updateClock() {
    const now = new Date();

    // Lấy giờ, phút, giây
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    // Lấy ngày, tháng, năm
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Tháng bắt đầu từ 0
    const year = now.getFullYear();

    // Cập nhật nội dung cho đồng hồ
    document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;
    document.getElementById('date').textContent = `${day}/${month}/${year}`;
    document.getElementById('time1').textContent = `${hours}:${minutes}:${seconds}`;
    document.getElementById('date1').textContent = `${day}/${month}/${year}`;
}

// Cập nhật đồng hồ mỗi giây
setInterval(updateClock, 1000);

// Gọi hàm lần đầu tiên để hiển thị ngay
updateClock();