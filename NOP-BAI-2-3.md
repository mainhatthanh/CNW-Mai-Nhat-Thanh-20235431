# Nộp bài — Bài tập 2 và Bài tập 3

**Sinh viên:** Mai Nhật Thành · **MSSV:** 20235431 · **Lớp:** 172920 · **Học phần:** IT4409

> ⚠️ Còn một chỗ cần tự điền: `<LINK-GOOGLE-DOC>` — link Google Doc sau khi đã paste nội dung
> và **bật chia sẻ "Anyone with the link → Viewer"**. Tên miền đã có thật và đã kiểm tra chạy được.

---

## 1. Link file Google Doc

| Bài | Link Google Doc |
|---|---|
| Bài tập 2 | `<LINK-GOOGLE-DOC-BAI-2>` |
| Bài tập 3 | `<LINK-GOOGLE-DOC-BAI-3>` |

Nội dung để paste nằm ở hai file trong repo:

- `Bai tap 2 - Tra loi.html`
- `Bai tap 3 - Tra loi.html`

**Cách paste cho giữ được định dạng:** mở file bằng Chrome (nháy đúp vào file), bấm `Ctrl + A` rồi `Ctrl + C`, sang Google Doc bấm `Ctrl + V`. Bảng, tiêu đề và khối code sẽ được giữ nguyên.

---

## 2. Link kết quả — HAI LINK NỘP

| Bài | Link nộp |
|---|---|
| **Bài tập 2** | https://thanhmn.xyz/Bai%20tap%202%20-%20JS%20tin%20tuc%20va%20gio%20hang/ |
| **Bài tập 3** | https://thanhmn.xyz/Bai%20tap%203%20-%20JS%20thu%20vien%20anh%20va%20tin%20nhanh/index.html |

Mỗi bài có hai phần nằm trên hai trang. Link nộp mở ra một phần, phần còn lại bấm **NEWS**
trên thanh điều hướng (trang cũng có sẵn một dòng chỉ dẫn sang phần kia).

### Bài tập 2 — xem gì ở đâu

| Phần | Trang | Xem gì |
|---|---|---|
| 2b. Giỏ hàng | Link nộp (trang Home) | Cột phải: 2 dòng sản phẩm + `Tổng: 325000 đ`; khung "Kết quả" hiện **20/20 testcase đạt** |
| 2a. Tin tức từ JSON | Bấm **NEWS** → `news.html` | 4 bài đã đăng load từ JSON; dòng thống kê lượt xem và thẻ; 10 giá trị dự đoán in ở Console (F12) |

### Bài tập 3 — xem gì ở đâu

| Phần | Trang | Xem gì |
|---|---|---|
| 3a. Thư viện ảnh | Link nộp (trang Home) | Bấm ảnh nhỏ → đổi ảnh lớn, chú thích thành `Đang xem: …`, ảnh nhỏ có viền; nút **Khoá thư viện ảnh**; ô tìm kiếm xoá/khôi phục chữ gợi ý |
| 3b. Lọc tin và đăng tin nhanh | Bấm **NEWS** → `news.html` | Gõ từ khoá để lọc, nút **Read more >>**, form đăng tin nhanh. Kéo xuống cuối trang bấm **Chạy kiểm tra Bài B** → **18/18 testcase đạt** (nhớ `F5` sau mỗi lần chạy để xoá tin thử) |

> Tên thư mục có dấu cách nên trong URL phải là `%20`. Copy link từ thanh địa chỉ Chrome thì Chrome đã tự thay rồi.

---

## 3. Kết quả kiểm thử (đã chạy thật trên https://thanhmn.xyz, không phải dự đoán)

| Bộ kiểm tra | Kết quả |
|---|---|
| Bài 2b — `js/kiem-tra.js`, 20 testcase T1–T20 | ✅ 20/20 đạt |
| Bài 3b — `js/kiem-tra.js`, 18 testcase T1–T18 | ✅ 18/18 đạt |
| Bài 2a — 10 giá trị dự đoán trong chú thích | ✅ khớp output thật ở Console |
| Bài 3a — 9 giá trị dự đoán trong chú thích | ✅ khớp output thật ở Console |

Một vài con số đã đối chiếu tận nơi: giỏ hàng `Tổng: 325000 đ`; trang News bài 2 hiện đúng 4 bài;
`tongLuotXem` là `2600`; bỏ giá trị khởi tạo của `reduce` cho ra `"[object Object]870540870"` → đúng phương án **(B)**;
thư viện ảnh có 6 ảnh nhỏ, `childNodes.length` của `<ul>` là 13, cột phải sau khi chèn có 3 mục;
bộ đếm trang News bài 3 hiện `Đang hiển thị 5/5 tin` ngay khi tải trang.

---

## 4. Việc cần làm trước khi nộp

1. Paste hai file trả lời vào Google Doc, bật chia sẻ "Anyone with the link → Viewer", dán link vào mục 1.
2. Nộp hai link ở mục 2.
