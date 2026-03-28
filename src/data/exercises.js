export const EXERCISES = [
  // ── CƠ BẢN ────────────────────────────────────────────
  {id:'e1',cat:'Cơ bản',diff:'easy',time:'30 phút',hw:'Arduino/ESP32 + 3 LED',
   title:'Đèn giao thông State Machine',
   desc:'Mô phỏng đèn giao thông bằng 3 LED (đỏ, vàng, xanh). Đỏ 5s, vàng 1s, xanh 4s. Thêm nút khẩn cấp (tất cả đỏ). Dùng State Machine — không dùng delay().',
   steps:['Kết nối 3 LED với resistor 220Ω vào GPIO 2, 4, 5','Định nghĩa enum TrafficState {RED, YELLOW, GREEN, EMERGENCY}','Implement state machine với switch-case và millis()','Thêm interrupt cho nút khẩn cấp (GPIO 15, INPUT_PULLUP)','Log mỗi state transition qua Serial với timestamp'],
   hint:'Tách logic timing (millis) khỏi logic state để dễ mở rộng.',
   expected:'LED chuyển đúng thứ tự, EMERGENCY mode ngay khi nhấn nút, không dùng delay()'},

  {id:'e2',cat:'Cơ bản',diff:'easy',time:'45 phút',hw:'ESP32 + Potentiometer + LED',
   title:'Dimmer LED thông minh',
   desc:'Đọc giá trị potentiometer (ADC), điều chỉnh độ sáng LED bằng PWM. Thêm Serial plotter để xem biểu đồ realtime. Implement hysteresis để tránh flicker.',
   steps:['Kết nối potentiometer vào GPIO34 (ADC1)','Đọc ADC và map 0–4095 → 0–255','Dùng ledcWrite() cho PWM thay analogWrite()','Thêm rolling average 10 mẫu để ổn định','In ra Serial: raw ADC, voltage (V), brightness (%)'],
   hint:'Rolling average: lưu mảng 10 giá trị, tính trung bình mỗi lần đọc mới.',
   expected:'LED mờ dần/sáng dần khi xoay biến trở, Serial Plotter hiển thị đường cong mượt'},

  {id:'e3',cat:'Cơ bản',diff:'easy',time:'60 phút',hw:'ESP32 + DHT22',
   title:'Data Logger nhiệt độ',
   desc:'Đọc DHT22 mỗi 10 giây, lưu 24 mẫu vào circular buffer trong RAM. In bảng thống kê (min, max, mean, trend) qua Serial. Cảnh báo khi vượt ngưỡng tùy chỉnh.',
   steps:['Setup DHT22 với thư viện Adafruit','Implement circular buffer 24 phần tử (struct với index)','Tính min/max/mean/stddev từ buffer','Detect trend: đang tăng hay giảm (linear regression đơn giản)','Hiển thị bảng dữ liệu đẹp trên Serial với formatting'],
   hint:'Circular buffer: index = (index + 1) % BUFFER_SIZE.',
   expected:'Sau 4 phút có đủ 24 mẫu, bảng thống kê chính xác, trend detection hoạt động'},

  // ── TRUNG CẤP ─────────────────────────────────────────
  {id:'e4',cat:'Trung cấp',diff:'medium',time:'90 phút',hw:'ESP32',
   title:'MQTT Smart Switch với Auto-discovery',
   desc:'ESP32 làm smart switch MQTT: nhận lệnh bật/tắt relay, publish trạng thái + uptime + RSSI. Thêm Home Assistant MQTT Discovery để tự động thêm vào dashboard mà không cần cấu hình thủ công.',
   steps:['Setup WiFiManager + PubSubClient','Publish discovery payload JSON lên homeassistant/switch/esp32/config','Subscribe homeassistant/switch/esp32/set','Publish state lên homeassistant/switch/esp32/state','Implement LWT (Last Will Testament) cho offline detection'],
   hint:'HA Discovery JSON: {"name":"ESP32 Switch","cmd_t":"...","stat_t":"...","uniq_id":"..."}',
   expected:'Switch tự động xuất hiện trong Home Assistant, điều khiển ON/OFF từ dashboard'},

  {id:'e5',cat:'Trung cấp',diff:'medium',time:'120 phút',hw:'ESP32 + BME280 + OLED',
   title:'Weather Station với REST API',
   desc:'Station đo 4 thông số (temp, hum, pressure, altitude). OLED hiển thị các màn hình xoay vòng. Web server cung cấp REST API JSON. Lưu lịch sử 1 giờ trong SPIFFS.',
   steps:['Setup BME280 (I2C) + SSD1306 OLED 128x64','Implement màn hình xoay mỗi 3 giây (state machine)','Web server /api/current, /api/history, /api/stats','Lưu data vào SPIFFS mỗi 60s (JSON array)','Bootstrap CSS web dashboard tại /'],
   hint:'SPIFFS: SPIFFS.begin(true), File f = SPIFFS.open("/data.json", "w")',
   expected:'OLED hiển thị 4 màn hình, API trả JSON, web dashboard vẽ đồ thị'},

  {id:'e6',cat:'Trung cấp',diff:'medium',time:'120 phút',hw:'2x ESP32',
   title:'ESP-NOW Mesh Sensor Network',
   desc:'2 ESP32 giao tiếp trực tiếp ESP-NOW (không cần router). Node 1 (sensor): gửi data mỗi 5s. Node 2 (gateway): nhận data, forward lên MQTT. Implement ACK và retry logic.',
   steps:['Setup ESP-NOW trên cả 2 board','Định nghĩa struct data giao tiếp','Node 1: read sensor, pack struct, esp_now_send()','Node 2: onDataReceive callback, forward MQTT','Thêm sequence number + ACK để detect lost packets'],
   hint:'esp_now_send() không block. Dùng callback onDataSent kiểm tra delivery status.',
   expected:'Node 1 gửi data reliably, Node 2 forward lên MQTT với delivery confirmation'},

  {id:'e7',cat:'Trung cấp',diff:'medium',time:'150 phút',hw:'ESP32 + LoRa SX1276',
   title:'LoRa GPS Tracker',
   desc:'ESP32 + GPS NEO-M8N + LoRa: gửi vị trí GPS mỗi 30s qua LoRa tầm xa. Gateway nhận và forward lên MQTT. Web dashboard hiển thị track trên OpenStreetMap.',
   steps:['Setup GPS NEO-M8N (UART1) với TinyGPS++','Setup LoRa SX1276 (SPI)','Packet format: ID + lat + lng + alt + speed + battery','Gateway: nhận packet, parse, publish MQTT JSON','Web: Leaflet.js map với polyline track history'],
   hint:'GPS warm-up 1-2 phút lần đầu. HDOP < 2.0 là vị trí chấp nhận được.',
   expected:'Track GPS hiển thị trên map web, độ chính xác <5m ngoài trời'},

  // ── AI/ML ─────────────────────────────────────────────
  {id:'e8',cat:'TinyML',diff:'hard',time:'180 phút',hw:'ESP32 + INMP441 mic',
   title:'Wake Word Detection ngoại tuyến',
   desc:'Dùng Edge Impulse train model nhận dạng 1 wake word tùy chọn (VD: "xin chào", "help", "alarm"). Deploy trên ESP32 với microphone INMP441. Accuracy >85%, latency <200ms.',
   steps:['Đăng ký Edge Impulse, tạo project "Wake Word"','Thu thập 80+ mẫu wake word + 80 background noise','Configure impulse: 1s window, MFCC block, NN block','Train và verify accuracy >85% trên test set','Export Arduino library, test realtime'],
   hint:'Thu thập data đa dạng: giọng nam/nữ, khoảng cách khác nhau, background noise.',
   expected:'Wake word nhận dạng trong <200ms, false positive < 1 lần/phút'},

  {id:'e9',cat:'TinyML',diff:'hard',time:'180 phút',hw:'ESP32 + MPU6050',
   title:'Fall Detection cho người cao tuổi',
   desc:'MPU6050 accelerometer + ML phát hiện ngã. Train 3 class: normal_walk, sit_stand, fall. Deploy TFLite. Gửi Telegram alert khi phát hiện ngã với GPS location (nếu có).',
   steps:['Thu thập data 3 activities (150 mẫu/class)','Feature extraction: gravity separation, jerk, impact peak','Train CNN 1D trên Edge Impulse','Deploy TFLite Micro trên ESP32','Alert: Telegram bot + mqtt + buzzer'],
   hint:'Fall signature: acceleration spike >3g rồi sudden giảm (lying position).',
   expected:'Phát hiện ngã trong 2s, false alarm <5%, Telegram alert <10s'},

  {id:'e10',cat:'TinyML',diff:'hard',time:'240 phút',hw:'ESP32-CAM + MQTT',
   title:'Smart Doorbell với Face Recognition',
   desc:'ESP32-CAM: chụp ảnh khi phát hiện chuyển động (PIR), nhận dạng khuôn mặt đã đăng ký, gửi thông báo Telegram với ảnh. Tự động ghi hình vào SD card.',
   steps:['Setup ESP32-CAM + PIR sensor','Enroll khuôn mặt: chụp 5 ảnh/người, lưu vào Flash','Face detection + recognition khi PIR trigger','Upload ảnh lên Telegram Bot với caption','Lưu ảnh vào SD card với timestamp filename'],
   hint:'MTMN face detection tích hợp sẵn trong esp-face library. Enroll dùng face_recognition_enrollment().',
   expected:'Nhận ra người đã đăng ký trong <3s, gửi Telegram trong <10s'},

  // ── HỆ THỐNG ──────────────────────────────────────────
  {id:'e11',cat:'Hệ thống',diff:'hard',time:'240 phút',hw:'Raspberry Pi + nhiều ESP32',
   title:'Smart Home Hub hoàn chỉnh',
   desc:'Raspberry Pi làm hub trung tâm: Mosquitto broker + Node-RED + InfluxDB + Grafana. 3 ESP32 node: sensor, switch, camera. Dashboard web responsive. Automation rules. Voice command.',
   steps:['Cài TIG stack + Node-RED trên RPi','ESP32 #1: DHT22 + soil sensor, pub mỗi 30s','ESP32 #2: 4-channel relay điều khiển từ dashboard','ESP32-CAM: motion detection + MJPEG stream','Node-RED: automation rules + Telegram alerts'],
   hint:'Dùng Docker Compose để cài tất cả services trên RPi một lệnh.',
   expected:'Dashboard Grafana realtime, điều khiển relay từ điện thoại, automation hoạt động'},

  {id:'e12',cat:'Hệ thống',diff:'hard',time:'300 phút',hw:'ESP32 multi-node + cloud',
   title:'Industrial Vibration Monitor',
   desc:'Mạng 4 ESP32 + accelerometer MPU6050 gắn vào 4 thiết bị công nghiệp. Thu thập FFT data, detect anomaly bằng Autoencoder TFLite. Alert khi phát hiện bất thường. Log dữ liệu 30 ngày.',
   steps:['Thu thập 48 giờ vibration data "normal" từ 4 máy','Train Autoencoder riêng cho từng máy (on PC)','Convert và deploy TFLite trên 4 ESP32','MQTT hierarchy: factory/machine[1-4]/vibration','Grafana dashboard: FFT spectrum + anomaly score + alert timeline'],
   hint:'Threshold = mean_error + 3*std_error trên validation set.',
   expected:'Detect anomaly (lắc cố ý) trong <5s, false alarm <1 lần/ngày'},

  // ── KHỞI NGHIỆP ───────────────────────────────────────
  {id:'e13',cat:'Khởi nghiệp',diff:'medium',time:'120 phút',hw:'Máy tính',
   title:'Business Plan AIoT Startup',
   desc:'Xây dựng Business Plan cho 1 ý tưởng AIoT startup. Phân tích thị trường, mô hình kinh doanh, MVP, financial projection 3 năm, pitch deck 10 slides.',
   steps:['Chọn 1 vấn đề thực tế tại địa phương để giải quyết bằng AIoT','Tìm hiểu thị trường: quy mô, đối thủ, TAM/SAM/SOM','Phác thảo MVP: hardware cost + monthly subscription','Dự báo doanh thu: 50/200/1000 customers năm 1/2/3','Tạo pitch deck (Canva/Google Slides) đủ 10 mục chuẩn'],
   hint:'Tập trung vào 1 vấn đề cụ thể, 1 segment khách hàng. Đừng quá rộng.',
   expected:'Business plan hoàn chỉnh, pitch deck chuyên nghiệp, có thể trình bày 5 phút'},

  {id:'e14',cat:'Khởi nghiệp',diff:'hard',time:'300 phút',hw:'ESP32 + sensors',
   title:'MVP Smart Farm cho 1 sào đất',
   desc:'Build MVP thực tế: monitor 1 sào đất với 3 soil moisture sensor, 1 weather station, điều khiển 2 bơm tưới tự động theo AI. Chụp ảnh cây hàng ngày. Dashboard cho nông dân.',
   steps:['Hardware: 3 capacitive soil sensor + BME280 + relay 2 bơm','AI watering rule: soil<40% AND hour 6-8 AM → water 30s','ESP32-CAM: chụp ảnh cây mỗi 8 giờ, upload MQTT','Mobile-first dashboard: nhiệt độ, độ ẩm đất, lịch sử tưới','Tính ROI: tiết kiệm nước, tiết kiệm công tưới'],
   hint:'Test ít nhất 1 tuần liên tục để validate automation logic.',
   expected:'Hệ thống chạy tự động 1 tuần, so sánh lượng nước trước/sau, ảnh chronicle cây lớn'},
]
