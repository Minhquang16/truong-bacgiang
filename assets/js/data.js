/* Dữ liệu mẫu. Khi có backend/API, thay các mảng này bằng dữ liệu thật. */
window.SITE = {
  name: "Trường Cao đẳng Bắc Giang",
  shortName: "Cao đẳng Bắc Giang",
  sub: "Trường Cao đẳng",
  phone: "0204 3854 xxx",
  hotline: "0912 345 678",
  email: "tuyensinh@cdbacgiang.edu.vn",
  address: "Số 1 Đường Lê Lợi, P. Hoàng Văn Thụ, TP. Bắc Giang, tỉnh Bắc Giang",
  admissionDeadline: "2027-08-31T23:59:59+07:00"
};

window.ICONS = {
  phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
  pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
  clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  close: '<path d="M18 6 6 18M6 6l12 12"/>',
  up: '<path d="m18 15-6-6-6 6"/>',
  heart: '<path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7Z"/>',
  briefcase: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
  cap: '<path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
  book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V2H6.5A2.5 2.5 0 0 0 4 4.5v15Z"/><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
  award: '<circle cx="12" cy="8" r="6"/><path d="M15.5 12.9 17 22l-5-3-5 3 1.5-9.1"/>',
  building: '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01"/>',
  cpu: '<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/>',
  zap: '<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>',
  wrench: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9l-3.8 3.8Z"/>',
  car: '<path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9L18 10l-2.7-3.6A2 2 0 0 0 13.7 6H7.3a2 2 0 0 0-1.7 1L3 11l-1 .5V16c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/><path d="M9 17h6"/>',
  calc: '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M8 6h8M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14v4M8 18h.01M12 18h.01"/>',
  leaf: '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10Z"/><path d="M2 21c0-3 1.9-5.4 5.1-6"/>',
  globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
  heartPulse: '<path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7Z"/><path d="M3.2 12H9l.5-1 2 4.5 2-7 1.5 3.5h5.3"/>',
  chef: '<path d="M17 21a1 1 0 0 0 1-1v-5.4a4 4 0 0 0-1.4-8.1 5 5 0 0 0-9.2 0A4 4 0 0 0 6 14.6V20a1 1 0 0 0 1 1Z"/><path d="M6 17h12"/>',
  calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  eye: '<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
  money: '<rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
  youtube: '<path d="M2.5 17a24 24 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.6 49.6 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24 24 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.6 49.6 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/>',
  zalo: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
  filter: '<path d="M22 3H2l8 9.5V19l4 2v-8.5L22 3z"/>',
  upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/>',
  share: '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4"/>',
  layers: '<path d="m12 2 10 5-10 5L2 7z"/><path d="m2 17 10 5 10-5M2 12l10 5 10-5"/>'
};

window.PROGRAMS = [
  { id: "cntt", name: "Công nghệ thông tin", level: "Cao đẳng", duration: "2,5 năm", quota: 200, icon: "cpu", color: "#1f56a3", group: "ky-thuat", employ: "96%",
    desc: "Lập trình ứng dụng, quản trị mạng, phát triển web và phần mềm theo chuẩn doanh nghiệp.",
    careers: ["Lập trình viên web/mobile", "Kỹ thuật viên quản trị mạng", "Tester phần mềm", "Hỗ trợ kỹ thuật IT"] },
  { id: "dien-cn", name: "Điện công nghiệp", level: "Cao đẳng", duration: "2,5 năm", quota: 180, icon: "zap", color: "#e9a23b", group: "ky-thuat", employ: "98%",
    desc: "Lắp đặt, vận hành và bảo trì hệ thống điện trong nhà máy, khu công nghiệp.",
    careers: ["Kỹ thuật viên điện nhà máy", "Vận hành trạm biến áp", "Bảo trì thiết bị tự động"] },
  { id: "dien-tu", name: "Điện tử công nghiệp", level: "Cao đẳng", duration: "2,5 năm", quota: 150, icon: "layers", color: "#5b3cc4", group: "ky-thuat", employ: "97%",
    desc: "Thiết kế, sửa chữa mạch điện tử, lập trình PLC và vi điều khiển cho dây chuyền sản xuất.",
    careers: ["Kỹ thuật viên SMT", "Lập trình PLC", "Kỹ thuật viên kiểm tra chất lượng"] },
  { id: "co-khi", name: "Cắt gọt kim loại (CNC)", level: "Cao đẳng", duration: "2,5 năm", quota: 120, icon: "wrench", color: "#0b7285", group: "ky-thuat", employ: "95%",
    desc: "Vận hành máy tiện, phay CNC; đọc bản vẽ kỹ thuật và gia công chi tiết chính xác.",
    careers: ["Thợ vận hành CNC", "Lập trình gia công CNC", "Kỹ thuật viên QC cơ khí"] },
  { id: "oto", name: "Công nghệ ô tô", level: "Cao đẳng", duration: "2,5 năm", quota: 150, icon: "car", color: "#c8102e", group: "ky-thuat", employ: "94%",
    desc: "Bảo dưỡng, chẩn đoán và sửa chữa ô tô đời mới, hệ thống điện và điện tử ô tô.",
    careers: ["Kỹ thuật viên gara", "Cố vấn dịch vụ", "Kỹ thuật viên hãng xe"] },
  { id: "ke-toan", name: "Kế toán doanh nghiệp", level: "Cao đẳng", duration: "2,5 năm", quota: 120, icon: "calc", color: "#138a52", group: "kinh-te", employ: "90%",
    desc: "Nghiệp vụ kế toán, thuế, sử dụng phần mềm MISA và lập báo cáo tài chính.",
    careers: ["Kế toán viên", "Nhân viên thuế", "Thủ quỹ, kế toán kho"] },
  { id: "tieng-han", name: "Tiếng Hàn Quốc", level: "Cao đẳng", duration: "2,5 năm", quota: 100, icon: "globe", color: "#2a66b8", group: "ngon-ngu", employ: "93%",
    desc: "Giao tiếp, biên phiên dịch tiếng Hàn phục vụ doanh nghiệp FDI và xuất khẩu lao động.",
    careers: ["Phiên dịch viên", "Trợ lý quản lý người Hàn", "Nhân viên văn phòng FDI"] },
  { id: "dieu-duong", name: "Điều dưỡng", level: "Cao đẳng", duration: "3 năm", quota: 100, icon: "heartPulse", color: "#e0243f", group: "y-te", employ: "92%",
    desc: "Chăm sóc người bệnh tại bệnh viện, phòng khám, cơ sở dưỡng lão trong và ngoài nước.",
    careers: ["Điều dưỡng viên bệnh viện", "Điều dưỡng làm việc tại Nhật, Đức", "Chăm sóc tại gia"] },
  { id: "nau-an", name: "Kỹ thuật chế biến món ăn", level: "Trung cấp", duration: "1,5 năm", quota: 80, icon: "chef", color: "#9a5b00", group: "dich-vu", employ: "91%",
    desc: "Chế biến món Á, Âu, bánh và quản lý bếp tại nhà hàng, khách sạn.",
    careers: ["Đầu bếp nhà hàng", "Bếp trưởng ca", "Khởi nghiệp quán ăn"] },
  { id: "nong-nghiep", name: "Công nghệ cao trong nông nghiệp", level: "Trung cấp", duration: "1,5 năm", quota: 60, icon: "leaf", color: "#3fb57d", group: "nong-nghiep", employ: "89%",
    desc: "Trồng trọt công nghệ cao, chăm sóc cây ăn quả đặc sản như vải thiều Lục Ngạn.",
    careers: ["Kỹ thuật viên trang trại", "Quản lý vùng trồng", "Khởi nghiệp nông nghiệp"] }
];

window.PROGRAM_GROUPS = {
  "ky-thuat": "Kỹ thuật – Công nghệ",
  "kinh-te": "Kinh tế",
  "ngon-ngu": "Ngoại ngữ",
  "y-te": "Y tế",
  "dich-vu": "Du lịch – Dịch vụ",
  "nong-nghiep": "Nông nghiệp"
};

window.JOBS = [
  { id: 1, title: "Kỹ thuật viên bảo trì điện", company: "Công ty TNHH Foxconn Bắc Giang", logo: "FX", color: "#1f56a3", location: "KCN Quang Châu, Việt Yên", type: "Toàn thời gian", salary: "9 – 13 triệu", salaryMin: 9, field: "dien-cn", exp: "Không yêu cầu", posted: "2 ngày trước", deadline: "30/12/2026", hot: true, quantity: 30 },
  { id: 2, title: "Lập trình viên PHP/Laravel", company: "Công ty CP Phần mềm BG Soft", logo: "BG", color: "#138a52", location: "TP. Bắc Giang", type: "Toàn thời gian", salary: "10 – 18 triệu", salaryMin: 10, field: "cntt", exp: "Dưới 1 năm", posted: "1 ngày trước", deadline: "15/12/2026", hot: true, quantity: 3 },
  { id: 3, title: "Công nhân vận hành máy CNC", company: "Công ty TNHH Si Flex Việt Nam", logo: "SF", color: "#0b7285", location: "KCN Đình Trám, Việt Yên", type: "Toàn thời gian", salary: "8 – 12 triệu", salaryMin: 8, field: "co-khi", exp: "Không yêu cầu", posted: "3 ngày trước", deadline: "20/12/2026", hot: false, quantity: 20 },
  { id: 4, title: "Kế toán tổng hợp", company: "Công ty CP Đầu tư Hoàng Long", logo: "HL", color: "#e9a23b", location: "Lạng Giang", type: "Toàn thời gian", salary: "8 – 11 triệu", salaryMin: 8, field: "ke-toan", exp: "1 – 2 năm", posted: "5 ngày trước", deadline: "10/12/2026", hot: false, quantity: 2 },
  { id: 5, title: "Phiên dịch tiếng Hàn sản xuất", company: "Công ty TNHH Luxshare-ICT", logo: "LX", color: "#5b3cc4", location: "KCN Vân Trung, Việt Yên", type: "Toàn thời gian", salary: "15 – 22 triệu", salaryMin: 15, field: "tieng-han", exp: "Dưới 1 năm", posted: "Hôm nay", deadline: "05/01/2027", hot: true, quantity: 5 },
  { id: 6, title: "Kỹ thuật viên sửa chữa ô tô", company: "Toyota Bắc Giang", logo: "TY", color: "#c8102e", location: "TP. Bắc Giang", type: "Toàn thời gian", salary: "8 – 14 triệu", salaryMin: 8, field: "oto", exp: "Không yêu cầu", posted: "1 tuần trước", deadline: "25/12/2026", hot: false, quantity: 4 },
  { id: 7, title: "Thực tập sinh lập trình PLC", company: "Công ty TNHH Fuhong Precision", logo: "FH", color: "#2a66b8", location: "KCN Quang Châu, Việt Yên", type: "Thực tập", salary: "4 – 5 triệu", salaryMin: 4, field: "dien-tu", exp: "Sinh viên năm cuối", posted: "2 ngày trước", deadline: "31/12/2026", hot: false, quantity: 10 },
  { id: 8, title: "Điều dưỡng làm việc tại Nhật Bản", company: "Công ty CP Nhân lực Quốc tế ASV", logo: "AS", color: "#e0243f", location: "Nhật Bản", type: "Toàn thời gian", salary: "30 – 40 triệu", salaryMin: 30, field: "dieu-duong", exp: "Không yêu cầu", posted: "4 ngày trước", deadline: "28/02/2027", hot: true, quantity: 15 },
  { id: 9, title: "Phụ bếp nhà hàng", company: "Nhà hàng Sông Thương", logo: "ST", color: "#9a5b00", location: "TP. Bắc Giang", type: "Bán thời gian", salary: "4 – 6 triệu", salaryMin: 4, field: "nau-an", exp: "Không yêu cầu", posted: "6 ngày trước", deadline: "15/12/2026", hot: false, quantity: 3 },
  { id: 10, title: "Nhân viên hỗ trợ IT nội bộ", company: "Công ty TNHH Hosiden Việt Nam", logo: "HS", color: "#13315c", location: "KCN Quế Võ (liên kết)", type: "Toàn thời gian", salary: "9 – 12 triệu", salaryMin: 9, field: "cntt", exp: "Dưới 1 năm", posted: "3 ngày trước", deadline: "20/12/2026", hot: false, quantity: 2 },
  { id: 11, title: "Kỹ thuật viên kiểm tra SMT", company: "Công ty TNHH Foxconn Bắc Giang", logo: "FX", color: "#1f56a3", location: "KCN Quang Châu, Việt Yên", type: "Toàn thời gian", salary: "8 – 11 triệu", salaryMin: 8, field: "dien-tu", exp: "Không yêu cầu", posted: "2 ngày trước", deadline: "30/12/2026", hot: false, quantity: 40 },
  { id: 12, title: "Kỹ thuật viên trang trại vải thiều", company: "HTX Nông sản Lục Ngạn", logo: "LN", color: "#3fb57d", location: "Lục Ngạn", type: "Thời vụ", salary: "6 – 8 triệu", salaryMin: 6, field: "nong-nghiep", exp: "Không yêu cầu", posted: "1 tuần trước", deadline: "31/01/2027", hot: false, quantity: 8 }
];

window.NEWS = [
  { id: 1, cat: "Tuyển sinh", title: "Thông báo tuyển sinh cao đẳng, trung cấp năm 2027", excerpt: "Nhà trường tuyển sinh 1.500 chỉ tiêu cho 10 ngành nghề, miễn 100% học phí cho học sinh tốt nghiệp THCS.", date: "08/11/2026", views: 2140, art: 2, icon: "cap" },
  { id: 2, cat: "Hợp tác", title: "Ký kết hợp tác đào tạo với 12 doanh nghiệp trong khu công nghiệp", excerpt: "Sinh viên được thực tập hưởng lương và cam kết việc làm ngay sau khi tốt nghiệp.", date: "02/11/2026", views: 1380, art: 1, icon: "briefcase" },
  { id: 3, cat: "Sinh viên", title: "Sinh viên nhà trường đạt giải Nhất Hội thi tay nghề cấp tỉnh", excerpt: "Đội tuyển nghề Điện công nghiệp xuất sắc giành giải Nhất và được chọn thi cấp quốc gia.", date: "28/10/2026", views: 980, art: 6, icon: "award" },
  { id: 4, cat: "Việc làm", title: "Ngày hội việc làm 2026: hơn 3.000 vị trí tuyển dụng", excerpt: "Hơn 50 doanh nghiệp tham gia, tuyển dụng trực tiếp tại trường vào ngày 25/11.", date: "20/10/2026", views: 1720, art: 3, icon: "users" },
  { id: 5, cat: "Đào tạo", title: "Đưa vào sử dụng xưởng thực hành CNC và tự động hoá mới", excerpt: "Xưởng thực hành trị giá 20 tỷ đồng với hệ thống máy CNC và PLC hiện đại.", date: "12/10/2026", views: 860, art: 5, icon: "wrench" },
  { id: 6, cat: "Sinh viên", title: "Chương trình tình nguyện Mùa hè xanh tại Sơn Động", excerpt: "120 sinh viên tham gia sửa chữa điện, hướng dẫn tin học cho bà con vùng cao.", date: "01/10/2026", views: 640, art: 4, icon: "heart" }
];

window.EVENTS = [
  { d: "25", m: "Th11", title: "Ngày hội việc làm 2026", place: "Hội trường A, 8:00 – 16:00" },
  { d: "02", m: "Th12", title: "Tư vấn tuyển sinh tại THPT Lục Nam", place: "Trường THPT Lục Nam, 14:00" },
  { d: "15", m: "Th12", title: "Hội thảo kỹ năng phỏng vấn tại doanh nghiệp FDI", place: "Phòng 302, nhà B, 9:00" },
  { d: "05", m: "Th01", title: "Lễ tốt nghiệp khoá 2023 – 2026", place: "Hội trường A, 8:00" }
];
