# Bài tập 3 — Responsive Web Design

File chỉnh sửa: `responsive-Bai tap 3.html`

## Yêu cầu

| Thiết bị | Chiều rộng màn hình | Cách hiển thị |
|---|---|---|
| Mobile | < 600px | 1 cột, xếp chồng dọc |
| Tablet | 600px – 1023px | 2 cột nằm ngang |
| PC / Desktop | ≥ 1024px | 3 cột nằm ngang |

## A. Các thay đổi trong mã nguồn

1. **Thêm thẻ `<meta name="viewport">`** trong `<head>`:

   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   ```

   Đây là thay đổi quan trọng nhất. Không có thẻ này, trình duyệt di động coi
   viewport rộng ~980px rồi thu nhỏ cả trang lại, nên các media query sẽ **không**
   kích hoạt đúng trên điện thoại thật (dù vẫn đúng khi thu nhỏ cửa sổ trên PC).

2. **Sửa `.column` từ `flex: 1` thành `flex: 1 1 100%`** (kèm `max-width: 100%`).
   `flex: 1` tương đương `flex: 1 1 0%` — flex-basis bằng 0 nên 3 khối luôn chia
   đều một hàng và không bao giờ xuống dòng, khiến `flex-wrap: wrap` vô tác dụng.
   Đặt flex-basis = 100% để **mặc định là 1 cột (mobile first)**, rồi dùng media
   query ghi đè cho tablet và PC.

3. **Thêm `box-sizing: border-box` cho `.container`** và `margin: 0` cho `body`,
   để `padding` của container không làm tràn chiều rộng trên màn hình nhỏ.
   Thêm `max-width: 1200px` cho `.container` để nội dung không bị kéo quá rộng
   trên màn hình lớn.

4. **Sửa phần nội dung HTML** (không liên quan responsive, nhưng là lỗi cú pháp):
   - `(< 600px)` → `(&lt; 600px)`; `(≥ 1024px)` → `(&ge; 1024px)`.
     Dấu `<` để trần trong nội dung bị trình duyệt hiểu là mở thẻ.
   - `**ba cột**` → `<strong>ba cột</strong>`. Cú pháp `**...**` là Markdown,
     trong HTML sẽ hiện ra đúng hai dấu sao chứ không in đậm.

## B. CSS viết thêm

```css
/* Base (mobile first): mặc định 1 cột cho màn hình < 600px */
.column {
    flex: 1 1 100%;
    max-width: 100%;
}

/* Tablet: 600px – 1023px -> 2 cột nằm ngang */
@media (min-width: 600px) and (max-width: 1023px) {
    .column {
        flex: 1 1 calc(50% - 20px);
        max-width: calc(50% - 20px);
    }
}

/* PC / Desktop: >= 1024px -> 3 cột nằm ngang */
@media (min-width: 1024px) {
    .column {
        flex: 1 1 calc(33.3333% - 20px);
        max-width: calc(33.3333% - 20px);
    }
}

/* Mobile nhỏ: thu gọn lề để tận dụng diện tích */
@media (max-width: 599px) {
    .container {
        width: 100%;
        padding: 10px;
    }
    .column {
        margin: 10px 0;
    }
}
```

### Giải thích công thức `calc(50% - 20px)`

Mỗi `.column` có `margin: 10px` (tức 10px bên trái + 10px bên phải = **20px**).
Nếu chỉ đặt `flex-basis: 50%`, tổng chiều rộng hai khối sẽ là
`50% + 50% + 40px margin > 100%`, khiến khối thứ hai bị đẩy xuống dòng → chỉ còn
1 cột. Vì vậy phải trừ phần margin ra:

- 2 cột: `calc(50% - 20px)`
- 3 cột: `calc(33.3333% - 20px)`

Ngoài ra `max-width` cần đặt cùng giá trị, vì `flex-grow: 1` cho phép khối giãn
rộng ra để lấp hết hàng — nếu không chặn, hàng cuối (khối thứ 3 trên tablet) sẽ
bị giãn ra chiếm 100%.

### Lưu ý về điểm ngắt (breakpoint)

Ba khoảng được viết loại trừ nhau nên không bị chồng lấn:

- `max-width: 599px` → mobile
- `min-width: 600px and max-width: 1023px` → tablet
- `min-width: 1024px` → PC

Có thể viết gọn hơn theo kiểu mobile-first thuần (chỉ dùng `min-width`, bỏ
`max-width`), vì khai báo sau sẽ tự ghi đè khai báo trước:

```css
/* >= 600px: 2 cột */
@media (min-width: 600px) { .column { flex: 1 1 calc(50% - 20px); max-width: calc(50% - 20px); } }
/* >= 1024px: 3 cột */
@media (min-width: 1024px) { .column { flex: 1 1 calc(33.3333% - 20px); max-width: calc(33.3333% - 20px); } }
```

## C. Cách kiểm tra

1. Mở `responsive-Bai tap 3.html` trong Chrome.
2. Nhấn `F12` → `Ctrl + Shift + M` (Device Toolbar).
3. Đổi chiều rộng và quan sát: `1280px` → 3 cột, `800px` → 2 cột, `375px` → 1 cột.
