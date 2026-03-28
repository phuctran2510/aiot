# AIoT EDU — Giáo trình AI & IoT

Hệ thống giáo trình toàn diện cho môn học **AI và IoT** tại Đại học Đà Lạt.

## Nội dung

| Mục | Số lượng | Mô tả |
|-----|---------|-------|
| Lý thuyết | 7 chương | Nền tảng AIoT → FPGA → Khởi nghiệp |
| Lab thực hành | 10 labs | Hello World → Smart Farm end-to-end |
| Trắc nghiệm | 30 câu | 6 chủ đề, 3 cấp độ, có giải thích |
| Bài tập | 14 bài | Cơ bản → Khởi nghiệp |
| Đề tài NCKH | 18 đề tài | Easy → Startup |
| Tài liệu | 40+ links | Sách, tools, dataset, cộng đồng |

## Công nghệ

- **React 19** + Vite 6 + React Router 7
- **HashRouter** (tương thích GitHub Pages)
- **Be Vietnam Pro** + JetBrains Mono fonts
- CSS Variables dark theme

## Chạy local

```bash
npm install
npm run dev
# Mở http://localhost:5173
```

## Deploy lên GitHub Pages

1. Push code lên branch `main`
2. GitHub Actions tự động build và deploy
3. URL: `https://username.github.io/aiot/`

**Hoặc thủ công:**
```bash
npm run build:gh   # Build với base=/aiot/
# Upload dist/ lên gh-pages branch
```

## Deploy lên Vercel

1. Import repo từ vercel.com
2. Framework: Other (không phải Next.js)
3. Build command: `npm run build`
4. Output directory: `dist`
5. URL: `https://your-project.vercel.app`

## Giảng viên

**Trần Vĩnh Phúc** — Khoa CNTT, Đại học Đà Lạt  
Email: phuctv@dlu.edu.vn | ĐT: 0976 353 606

---

*AIoT EDU — Đại học Đà Lạt 2025*
