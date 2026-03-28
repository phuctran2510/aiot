# AIoT EDU — Giáo trình AI & IoT toàn diện

**Môn học**: Trí tuệ nhân tạo & Internet vạn vật  
**Giảng viên**: Trần Vĩnh Phúc — Khoa CNTT, Đại học Đà Lạt  
**Email**: phuctv@dlu.edu.vn | **ĐT**: 0976 353 606

---

## Thống kê nội dung

| Mục | Số lượng | Phạm vi |
|-----|---------|--------|
| Chương lý thuyết | 11 chương, 35 sections | AIoT → Deep Learning → FPGA → Industry 4.0 → Khởi nghiệp |
| Labs thực hành | 15 labs | Hello World → TLS Security → YOLOv8 → Mesh Network |
| Trắc nghiệm | 60 câu | 8 chủ đề, 3 cấp độ, giải thích chi tiết |
| Bài tập | 26 bài | LED → TinyML → FPGA systolic array → Startup MVP |
| Đề tài NCKH | 26 đề tài | Easy → Startup (AgriAI, MediWatch, CityPulse...) |
| Tài liệu | 55+ links | Sách, khóa học, tools, dataset, cộng đồng |

## Nội dung theo chủ đề

### Lý thuyết (11 chương)
1. Nền tảng AIoT — Kiến trúc 3 tầng, so sánh platforms
2. Lập trình nhúng — Arduino C++, FreeRTOS, WiFi/MQTT
3. Cảm biến & Actuator — BME280, MAX30105, relay, OLED
4. TinyML & Edge AI — TFLite Micro, Edge Impulse, ESP32-CAM
5. Edge AI nâng cao — Wake word, anomaly detection
6. Hệ thống AIoT — Node-RED, Grafana, InfluxDB, TIG Stack
7. FPGA — Verilog, systolic array, CNN accelerator
8. AIoT thực tiễn — Business models, bảo mật, OTA
9. Deep Learning — CNN transfer learning, LSTM, RL
10. IoT Protocols — LoRaWAN, OPC-UA, WebSocket, ESP-NOW
11. MLOps & DevOps — CI/CD firmware, Docker, edge deployment
12. AIoT ứng dụng — Smart Agriculture, Healthcare, Industry 4.0

### Labs nổi bật
- Lab 7: Wake Word Detection tiếng Việt (Edge Impulse + INMP441)
- Lab 8: Anomaly Detection rung động công nghiệp (TFLite Autoencoder)
- Lab 11: Phân loại âm thanh máy móc (MFCC + CNN)
- Lab 12: MQTT over TLS mutual authentication
- Lab 13: Real-time Object Detection YOLOv8n (RPi4 + ESP32-CAM)
- Lab 14: Wearable fusion (MAX30105 + MPU6050 + BLE)
- Lab 15: ESP-NOW Mesh Sensor Network

### Đề tài nổi bật
- AI Phát hiện dịch bệnh cây trồng (Transfer Learning, Đà Lạt)
- Digital Twin cho dây chuyền sản xuất
- Federated Learning cho IoT Privacy
- Blockchain + AIoT truy xuất nguồn gốc thực phẩm
- Swarm Intelligence — Đàn drone AI
- **AgriAI** — Nền tảng nông nghiệp thông minh SaaS
- **MediWatch** — Wearable healthcare startup
- **CityPulse** — Smart City infrastructure SaaS

## Cài đặt và chạy

```bash
# Clone / giải nén project
cd aiot-edu

# Cài dependencies
npm install

# Chạy development
npm run dev
# → http://localhost:5173

# Build production
npm run build        # cho Vercel
npm run build:gh     # cho GitHub Pages (base=/aiot/)
```

## Deploy lên Vercel (khuyến nghị)

```
1. Push code lên GitHub repo
2. Truy cập vercel.com → Import repo
3. Framework: Other
4. Build Command: npm run build
5. Output Directory: dist
6. Deploy → Tự động update khi push
```

URL mẫu: `https://aiot-edu.vercel.app`

## Deploy lên GitHub Pages

```
1. Push lên branch main
2. GitHub Actions tự build:gh và deploy
3. Settings → Pages → Source: gh-pages branch
4. URL: https://username.github.io/aiot/
```

**Lưu ý**: Đổi `build:gh` script nếu repo name khác `aiot`:
```json
"build:gh": "VITE_BASE=/your-repo-name/ vite build"
```

## Cấu trúc dự án

```
aiot-edu/
├── src/
│   ├── App.jsx              # Router + Sidebar layout
│   ├── index.css            # Dark theme design system
│   ├── main.jsx             # HashRouter entry point
│   ├── data/
│   │   ├── theory.js        # 7 chương + THEORY_EXTRA (4 chương)
│   │   ├── labs.js          # 10 labs cơ bản-trung cấp
│   │   ├── labs_extra.js    # 5 labs nâng cao
│   │   ├── labs_all.js      # Merge + LAB_GROUPS
│   │   ├── quiz.js          # 30 câu trắc nghiệm
│   │   ├── quiz_extra.js    # 30 câu nâng cao
│   │   ├── exercises.js     # 14 bài tập
│   │   ├── exercises_extra.js # 12 bài tập nâng cao
│   │   ├── thesis.js        # 18 đề tài gốc
│   │   ├── thesis_extra.js  # 8 đề tài mới
│   │   └── content.js       # Merge tất cả + RESOURCES
│   └── pages/
│       ├── Home.jsx
│       ├── Theory.jsx       # Markdown renderer + navigation
│       ├── Labs.jsx         # Step-by-step labs + progress
│       ├── Quiz.jsx         # Browse + Test mode
│       ├── Exercises.jsx    # Accordion expand
│       ├── Thesis.jsx       # Card grid + detail view
│       ├── Resources.jsx    # Categorized links
│       ├── Guide.jsx        # Quick reference + verify table
│       └── Contact.jsx      # Instructor info + FAQ
├── .github/workflows/
│   └── deploy.yml           # GitHub Actions auto-deploy
├── vercel.json              # Vercel SPA routing
├── vite.config.js           # Code splitting config
└── package.json
```

## Tech Stack

- **React 19** + Vite 6 + React Router 7
- **HashRouter** — tương thích GitHub Pages
- **CSS Variables** — dark theme, không dùng icons
- **Be Vietnam Pro** + JetBrains Mono fonts (Google Fonts)
- **Code splitting** — lazy load data chunks

---

*AIoT EDU — Đại học Đà Lạt 2025 — phuctv@dlu.edu.vn*
