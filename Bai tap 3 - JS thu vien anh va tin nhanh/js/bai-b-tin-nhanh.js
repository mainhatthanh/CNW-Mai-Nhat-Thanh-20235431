/* BÀI B — VIẾT CODE: Lọc tin và đăng tin nhanh (news.html)
   Viết code theo đặc tả.
   Không sửa news.html, không sửa css; chỉ viết JavaScript trong file này. */

// ---------- ĐÃ CHO SẴN (không sửa) ----------
// Chặn việc gửi form tìm kiếm khi nhấn Enter, để trang không bị tải lại.
document.querySelector("#searchbar form").addEventListener("submit", (e) => e.preventDefault());

// ---------- PHẦN BẠN VIẾT ----------

const oTimKiem = document.getElementById("o-tim-kiem");
const danhSach = document.getElementById("list");
const boDem = document.getElementById("bo-dem");
const khongThay = document.getElementById("khong-thay");

const oTieuDe = document.getElementById("tin-tieu-de");
const oNoiDung = document.getElementById("tin-noi-dung");
const nutDang = document.getElementById("nut-dang");
const baoLoi = document.getElementById("bao-loi");

// Lấy danh sách tin ở thời điểm hiện tại. Phải gọi lại mỗi lần dùng,
// vì tin mới đăng cũng phải được tính vào.
function cacTin() {
	return danhSach.querySelectorAll("li");
}

// F1. Bộ đếm "Đang hiển thị x/y tin" trong #bo-dem.
function capNhatBoDem() {
	const tatCa = cacTin();
	let dangHien = 0;
	for (const tin of tatCa) {
		if (!tin.classList.contains("an")) {
			dangHien = dangHien + 1;
		}
	}
	boDem.textContent = `Đang hiển thị ${dangHien}/${tatCa.length} tin`;
	return dangHien;
}

// F2 + F3. Lọc tin khi gõ vào #o-tim-kiem (sự kiện keyup) và thông báo #khong-thay.
function locTin() {
	const tuKhoa = oTimKiem.value.trim().toLowerCase();
	let soKhop = 0;

	for (const tin of cacTin()) {
		// Từ khoá rỗng → mọi tin đều coi là khớp.
		const vanBan = (tin.querySelector("h3").textContent + " " +
			tin.querySelector("p").textContent).toLowerCase();
		const khop = tuKhoa === "" || vanBan.includes(tuKhoa);

		// classList.toggle(ten, dieuKien): thêm lớp khi dieuKien true, bỏ khi false.
		tin.classList.toggle("an", !khop);
		if (khop) {
			soKhop = soKhop + 1;
		}
	}

	// F3. Thông báo không tìm thấy.
	if (soKhop === 0) {
		khongThay.classList.remove("an");
		// Dùng textContent (không phải innerHTML) nên từ khoá kiểu <b>x</b>
		// hiện nguyên văn 8 ký tự, không biến thành thẻ HTML.
		khongThay.textContent = `Không tìm thấy tin nào cho "${oTimKiem.value.trim()}"`;
	} else {
		khongThay.classList.add("an");
	}

	capNhatBoDem();
}

oTimKiem.addEventListener("keyup", locTin);

// F4. Nút "Read more >>" / "Thu gọn <<" — MỘT trình lắng nghe đặt trên #list.
// Dùng kỹ thuật uỷ quyền sự kiện (event delegation): chỉ một listener trên #list,
// nhờ bubbling nên nút của tin đăng sau cũng tự động hoạt động.
danhSach.addEventListener("click", (e) => {
	const nut = e.target.closest("button.more");
	// Bấm vào tiêu đề, đoạn văn hay khoảng trống → không làm gì.
	if (nut === null || !danhSach.contains(nut)) {
		return;
	}

	const doanVan = nut.closest("li").querySelector("p");
	const dangMo = doanVan.classList.toggle("day-du");
	nut.textContent = dangMo ? "Thu gọn <<" : "Read more >>";
});

// F5. Nút #nut-dang: kiểm tra dữ liệu, tạo <li> mới, chèn vào đầu #list.
nutDang.addEventListener("click", () => {
	const tieuDe = oTieuDe.value.trim();
	const noiDung = oNoiDung.value.trim();

	if (tieuDe === "" || noiDung === "") {
		baoLoi.textContent = "Vui lòng nhập đủ tiêu đề và nội dung.";
		return;
	}

	// Tạo <li> giống hệt cấu trúc các tin có sẵn.
	// Tất cả đều gán bằng textContent nên <img>, <script>… người dùng nhập
	// chỉ hiện ra như chữ, không bao giờ chạy được.
	const tin = document.createElement("li");

	const ngay = document.createElement("span");
	ngay.className = "time";
	ngay.textContent = homNay();

	const h3 = document.createElement("h3");
	h3.textContent = tieuDe;

	const p = document.createElement("p");
	p.textContent = noiDung;

	const nut = document.createElement("button");
	nut.type = "button";
	nut.className = "more";
	nut.textContent = "Read more >>";

	tin.append(ngay, h3, p, nut);
	danhSach.prepend(tin);

	// Dọn form sau khi đăng.
	oTieuDe.value = "";
	oNoiDung.value = "";
	baoLoi.textContent = "";

	// Lọc lại để tin mới tuân theo từ khoá đang gõ và bộ đếm được cập nhật.
	locTin();
});

// Chạy một lần khi tải trang để bộ đếm đúng ngay từ đầu.
locTin();
