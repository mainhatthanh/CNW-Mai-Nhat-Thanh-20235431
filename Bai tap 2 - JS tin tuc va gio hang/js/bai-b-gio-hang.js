/* BÀI B — VIẾT CODE: Giỏ hàng của xưởng in
   Hoàn thiện class GioHang và hàm napGioHang.
   Không đổi tên class, tên phương thức, tên hàm; không sửa phần "DỮ LIỆU ĐÃ CHO". */

// ---------- DỮ LIỆU ĐÃ CHO (không sửa) ----------
const DANH_MUC = [
	{ id: "TC01", ten: "Thiệp cưới cotton", loai: "thiep cuoi", gia: 1500 },
	{ id: "TC02", ten: "Thiệp cưới kraft", loai: "thiep cuoi", gia: 900 },
	{ id: "DT01", ten: "Danh thiếp ép kim", loai: "danh thiep", gia: 1200 },
	{ id: "PB01", ten: "Phong bì lót lụa", loai: "phu kien", gia: 500 }
];

// ---------- PHẦN BẠN VIẾT ----------
class GioHang {
	constructor() {
		// Mỗi dòng của giỏ là một object { id, ten, loai, gia, soLuong }.
		this.dsDong = [];
	}

	// 1. Thêm sản phẩm; trả về true nếu thêm được, false nếu soLuong không hợp lệ.
	them(sanPham, soLuong) {
		// Hợp lệ: đúng kiểu number, là số nguyên và lớn hơn 0.
		// Number.isInteger đã tự loại NaN, 2.5, null, undefined và chuỗi "50".
		if (!Number.isInteger(soLuong) || soLuong <= 0) {
			return false;
		}
		if (sanPham === null || typeof sanPham !== "object") {
			return false;
		}

		const dong = this.dsDong.find(d => d.id === sanPham.id);
		if (dong !== undefined) {
			// Đã có trong giỏ → cộng dồn số lượng, không thêm dòng mới.
			dong.soLuong = dong.soLuong + soLuong;
		} else {
			// Chưa có → CHÉP từng giá trị sang object mới.
			// Nhờ vậy giỏ không giữ tham chiếu tới object trong DANH_MUC:
			// sửa sanPham.gia về sau cũng không làm đổi tổng tiền của giỏ.
			this.dsDong.push({
				id: sanPham.id,
				ten: sanPham.ten,
				loai: sanPham.loai,
				gia: sanPham.gia,
				soLuong: soLuong
			});
		}
		return true;
	}

	// 2. Xoá dòng có id tương ứng; trả về true nếu có xoá, false nếu không tìm thấy.
	xoa(id) {
		const viTri = this.dsDong.findIndex(d => d.id === id);
		if (viTri === -1) {
			return false;
		}
		this.dsDong.splice(viTri, 1);
		return true;
	}

	// 3. Tổng tiền cả giỏ.
	tongTien() {
		return this.dsDong.reduce((tong, d) => tong + d.gia * d.soLuong, 0);
	}

	// 4. Object thống kê: { "<loai>": tổng tiền của loại đó, ... }.
	thongKeTheoLoai() {
		const thongKe = {};
		for (const d of this.dsDong) {
			thongKe[d.loai] = (thongKe[d.loai] || 0) + d.gia * d.soLuong;
		}
		return thongKe;
	}

	// 5. Dòng có thành tiền lớn nhất (bản sao, có thêm thanhTien); null nếu giỏ rỗng.
	dongDatNhat() {
		if (this.dsDong.length === 0) {
			return null;
		}
		// Dùng > (không phải >=) nên khi bằng nhau thì giữ dòng ĐỨNG TRƯỚC.
		const dong = this.dsDong.reduce((max, d) => (d.gia * d.soLuong > max.gia * max.soLuong ? d : max));
		return this._banSao(dong);
	}

	// 6. Mảng BẢN SAO các dòng, mỗi dòng có thêm thuộc tính thanhTien.
	layDanhSach() {
		// map tạo mảng mới, _banSao tạo object mới → bên ngoài sửa gì cũng
		// không chạm được vào this.dsDong.
		return this.dsDong.map(d => this._banSao(d));
	}

	// 7. Chuỗi JSON của mảng các dòng.
	xuatJSON() {
		// Xuất thẳng this.dsDong nên mỗi dòng chỉ có đúng 5 thuộc tính
		// (thanhTien là giá trị tính ra, không được lưu trong giỏ).
		return JSON.stringify(this.dsDong);
	}

	// Hàm phụ: tạo bản sao một dòng và gắn thêm thanhTien.
	_banSao(dong) {
		return {
			id: dong.id,
			ten: dong.ten,
			loai: dong.loai,
			gia: dong.gia,
			soLuong: dong.soLuong,
			thanhTien: dong.gia * dong.soLuong
		};
	}
}

// 8. Tạo lại một GioHang từ chuỗi JSON do xuatJSON() sinh ra.
function napGioHang(chuoiJSON) {
	const gio = new GioHang();
	const dsDong = JSON.parse(chuoiJSON);
	for (const d of dsDong) {
		// Chép lại đúng 5 thuộc tính, đúng thứ tự như khi them()
		// để xuất → nạp → xuất cho ra y hệt chuỗi ban đầu.
		gio.dsDong.push({
			id: d.id,
			ten: d.ten,
			loai: d.loai,
			gia: d.gia,
			soLuong: d.soLuong
		});
	}
	return gio;   // là một GioHang thật nên dùng được mọi phương thức
}

// ---------- CHẠY THỬ (không sửa) ----------
const gio = new GioHang();
gio.them(DANH_MUC[0], 100);
gio.them(DANH_MUC[3], 200);
gio.them(DANH_MUC[0], 50);
veGioHang(gio.layDanhSach(), gio.tongTien());
console.table(gio.layDanhSach());
hienThi(`JSON gửi lên máy chủ: ${gio.xuatJSON()}`);
