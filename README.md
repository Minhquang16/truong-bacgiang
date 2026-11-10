# Trường Cao đẳng Bắc Giang – Website & Cổng việc làm

Giao diện website trường kèm cổng việc làm cho sinh viên. HTML/CSS/JS thuần, không cần build: mở `index.html` trong trình duyệt là chạy (hoặc bật GitHub Pages cho nhánh `main`).

## Các trang

| Trang | File |
|---|---|
| Trang chủ | `index.html` |
| Giới thiệu | `gioi-thieu.html` |
| Danh sách ngành đào tạo (lọc theo lĩnh vực) | `dao-tao.html` |
| Chi tiết ngành (`?id=cntt`) | `nganh.html` |
| Tuyển sinh + đăng ký xét tuyển online | `tuyen-sinh.html` |
| Việc làm (tìm kiếm, lọc, lưu tin) + form nhà tuyển dụng | `viec-lam.html` |
| Chi tiết việc làm + ứng tuyển (`?id=1`) | `viec-lam-chi-tiet.html` |
| Tin tức | `tin-tuc.html` |
| Chi tiết tin (`?id=1`) | `tin-tuc-chi-tiet.html` |
| Liên hệ | `lien-he.html` |
| Trang lỗi 404 | `404.html` |

## Cấu trúc

```
assets/
  css/style.css   # Hệ thống giao diện: biến màu, font, nút, thẻ, form, bố cục
  js/data.js      # Dữ liệu mẫu: thông tin trường, ngành, việc làm, tin tức, sự kiện
  js/main.js      # Header/footer dùng chung, menu mobile, lọc, form, hiệu ứng
  img/favicon.svg
```

- **Đổi tên trường, hotline, email, địa chỉ:** sửa `window.SITE` trong `assets/js/data.js`.
- **Thêm ngành / việc làm / tin tức:** thêm phần tử vào `PROGRAMS`, `JOBS`, `NEWS` trong `data.js`. Khi có backend, thay các mảng này bằng dữ liệu từ API.
- **Đổi màu thương hiệu:** sửa các biến `--c-primary-*`, `--c-accent-*` ở đầu `style.css`.
- Header và footer được dựng bằng JS (`main.js`) nên chỉ cần sửa một chỗ cho mọi trang.

Các form (đăng ký xét tuyển, ứng tuyển, liên hệ, nhà tuyển dụng) đã có kiểm tra dữ liệu phía trình duyệt và thông báo thành công, nhưng chưa gửi đi đâu: cần nối với backend hoặc dịch vụ form. Danh sách việc làm đã lưu được nhớ trong trình duyệt (localStorage).

Font: Be Vietnam Pro (Google Fonts). Giao diện responsive cho điện thoại, máy tính bảng, máy tính.
