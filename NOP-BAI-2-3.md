# Nộp bài — Bài tập 2 và Bài tập 3

**Sinh viên:** Mai Nhật Thành · **MSSV:** 20235431 · **Lớp:** 172920 · **Học phần:** IT4409

> ⚠️ Hai chỗ cần tự điền trước khi nộp:
> 1. `<TÊN-MIỀN-VERCEL>` — thay bằng tên miền thật trong Vercel Dashboard → Project → Domains.
>    Nếu Vercel đặt tên mặc định theo tên repo thì rất có thể là `cnw-mai-nhat-thanh-20235431.vercel.app`,
>    nhưng **phải mở Dashboard xác nhận**, đừng đoán.
> 2. `<LINK-GOOGLE-DOC>` — link Google Doc sau khi đã paste nội dung và **bật chia sẻ "Anyone with the link → Viewer"**.

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

## 2. Link kết quả từng bài

### Bài tập 2 — JS: Trang News và Giỏ hàng

| Phần | Link | Xem gì ở đó |
|---|---|---|
| 2a. Trang News | `https://<TÊN-MIỀN-VERCEL>/Bai%20tap%202%20-%20JS%20tin%20tuc%20va%20gio%20hang/news.html` | 4 bài đã đăng, load từ dữ liệu JSON; khung "Kết quả" hiện thống kê lượt xem và thẻ |
| 2b. Trang Home (giỏ hàng) | `https://<TÊN-MIỀN-VERCEL>/Bai%20tap%202%20-%20JS%20tin%20tuc%20va%20gio%20hang/index.html` | Giỏ hàng cột phải: 2 dòng sản phẩm + `Tổng: 325000 đ`; cuối khung "Kết quả" là **20/20 testcase đạt** |

### Bài tập 3 — JS: Thư viện ảnh và Đăng tin nhanh

| Phần | Link | Xem gì ở đó |
|---|---|---|
| 3a. Thư viện ảnh | `https://<TÊN-MIỀN-VERCEL>/Bai%20tap%203%20-%20JS%20thu%20vien%20anh%20va%20tin%20nhanh/index.html` | Bấm ảnh nhỏ → đổi ảnh lớn, đổi chú thích, ảnh nhỏ có viền; nút "Khoá thư viện ảnh" |
| 3b. Trang News | `https://<TÊN-MIỀN-VERCEL>/Bai%20tap%203%20-%20JS%20thu%20vien%20anh%20va%20tin%20nhanh/news.html` | Gõ từ khoá để lọc tin, nút "Read more >>", form đăng tin nhanh; bấm **Chạy kiểm tra Bài B** ở cuối trang → **18/18 testcase đạt** |

> Ghi chú: tên thư mục có dấu cách nên trong URL phải là `%20`. Nếu copy link từ thanh địa chỉ của Chrome thì Chrome đã tự thay rồi, dán thẳng được.

---

## 3. Kết quả kiểm thử (đã chạy, không phải dự đoán)

| Bộ kiểm tra | Kết quả |
|---|---|
| Bài 2b — `js/kiem-tra.js`, 20 testcase T1–T20 | ✅ 20/20 đạt |
| Bài 3b — `js/kiem-tra.js`, 18 testcase T1–T18 | ✅ 18/18 đạt |
| Bài 2a — 10 giá trị dự đoán trong chú thích | ✅ khớp output thật ở Console |
| Bài 3a — 9 giá trị dự đoán trong chú thích | ✅ khớp output thật ở Console |

---

## 4. Việc cần làm trước khi nộp

1. `git push` lên GitHub (các thay đổi đã được commit sẵn).
2. Chờ Vercel build xong (khoảng 1 phút), vào Dashboard lấy tên miền.
3. Mở thử cả 4 link ở mục 2 để chắc chắn trang chạy được trên host, đặc biệt phần
   **bấm "Chạy kiểm tra Bài B"** ở cuối trang News của Bài tập 3 (nhớ `F5` sau mỗi lần chạy
   để xoá các tin thử mà bộ kiểm tra đã đăng).
4. Paste hai file trả lời vào Google Doc, bật chia sẻ, dán link vào mục 1.
5. Điền tên miền thật vào mục 2 rồi nộp.
