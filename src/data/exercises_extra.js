export const EXERCISES_EXTRA = [
  // ── DEEP LEARNING ─────────────────────────────────────
  {id:'ex15',cat:'Deep Learning',diff:'hard',time:'240 phút',hw:'PC/Google Colab + ESP32',
   title:'Transfer Learning Plant Disease Detection',
   desc:'Fine-tune MobileNetV3 trên dataset bệnh cây địa phương (5 loại bệnh cây rau Đà Lạt). Accuracy >90%, deploy TFLite trên Android + ESP32-CAM.',
   steps:['Download PlantVillage dataset từ Kaggle (54K ảnh, 26 bệnh)','Lọc 5 class liên quan đến rau củ phổ biến tại Đà Lạt','Augmentation: random flip, brightness, GaussianNoise (mô phỏng sương mù)','Fine-tune MobileNetV3Small: freeze base, train head 20 epochs, unfreeze fine-tune 10 epochs','Convert TFLite INT8, test accuracy trên validation set','Deploy: (a) Android app dùng TFLite Android SDK (b) ESP32-CAM với thư viện TFLite Micro'],
   hint:'Fine-tuning với LR = 1e-5 (nhỏ hơn training từ đầu 100x). Augmentation mạnh để tăng robustness với điều kiện ngoài trời.',
   expected:'Top-1 accuracy >88% trên 5 class. Android app nhận dạng từ camera realtime <500ms. Demo được trên đồng ruộng thực tế.'},

  {id:'ex16',cat:'Deep Learning',diff:'hard',time:'300 phút',hw:'Raspberry Pi 4 + sensors',
   title:'LSTM Load Forecasting cho Smart Grid',
   desc:'Thu thập 1 tháng điện năng tiêu thụ của một tòa nhà (PZEM-004T, 30s/sample). Train LSTM dự báo 24h tới. Integrate với OpenWeatherMap. MAE <5%.',
   steps:['Setup PZEM-004T + ESP32 + MQTT → InfluxDB: 1 tháng data','Feature engineering: hour, day_of_week, temperature, humidity, holiday flag','Chuẩn hóa và tạo sequences (48 timesteps input → 48 timesteps output)','Train Bidirectional LSTM với early stopping','Compare với: ARIMA, Linear Regression, naive baseline','Deploy trên Raspberry Pi: inference mỗi giờ, gửi forecast lên Grafana'],
   hint:'Normalize bằng MinMaxScaler trên training set. Áp dụng inverse_transform cho predictions.',
   expected:'MAE <5% trên test set. Grafana panel hiện forecast 24h vs actual. Phân tích lỗi theo giờ cao điểm/thấp điểm.'},

  {id:'ex17',cat:'Deep Learning',diff:'medium',time:'180 phút',hw:'ESP32 + INMP441',
   title:'Speech Command Recognition Tiếng Việt',
   desc:'Train Edge Impulse nhận dạng 6 lệnh tiếng Việt: "bật", "tắt", "sáng hơn", "tối hơn", "dừng lại", "background". Deploy trên ESP32 điều khiển đèn thực tế.',
   steps:['Thu thập 100 mẫu × 6 class × nhiều người nói','Edge Impulse: MFCC block (13 coefficients, 0.02s frame) + CNN classifier','Evaluate: confusion matrix, accuracy per speaker','Threshold tuning: giảm false positive bằng confidence > 0.8','ESP32 code: continuous inference, debounce 1s giữa 2 lệnh','Integration: relay control với LED feedback'],
   hint:'Thu thập data từ ít nhất 5 người khác nhau để model robust. Noise samples quan trọng (quạt, TV, bước chân).',
   expected:'Accuracy >85% trong môi trường có noise, false positive <1 lần/phút. Demo điều khiển đèn phòng bằng giọng nói.'},

  // ── SYSTEMS ──────────────────────────────────────────
  {id:'ex18',cat:'Hệ thống',diff:'hard',time:'360 phút',hw:'Raspberry Pi + multiple ESP32',
   title:'Production IoT Platform với Docker',
   desc:'Deploy full production stack: Mosquitto + InfluxDB v2 + Grafana + Node-RED + AI inference service bằng Docker Compose. TLS cho MQTT. Backup tự động. Monitoring.',
   steps:['Cài Docker + Docker Compose trên Raspberry Pi 4','Viết docker-compose.yml cho 5 services','Cấu hình TLS cho Mosquitto (self-signed certificate)','Node-RED flow: MQTT → InfluxDB với error handling + retry','Grafana: import dashboard template, configure alerts → Telegram','Backup script: cron job backup InfluxDB + Node-RED flows mỗi ngày','Monitoring: Prometheus + Grafana cho resource usage của Pi'],
   hint:'Dùng Portainer CE (free) để quản lý Docker qua web UI thay terminal.',
   expected:'Stack chạy ổn định 7 ngày liên tục. TLS verified bằng openssl s_client. Backup tự động chạy daily. Alert Telegram khi disk > 80%.'},

  {id:'ex19',cat:'Hệ thống',diff:'hard',time:'300 phút',hw:'3x ESP32 + cloud',
   title:'Multi-node Sensor Fusion với Kalman Filter',
   desc:'3 ESP32 đặt ở 3 vị trí trong phòng, đo nhiệt độ. Kalman Filter trên server fusion 3 sensor để estimate nhiệt độ "thực" của phòng. So sánh với thermal camera.',
   steps:['Setup 3 ESP32 + BME280, sync timestamp qua NTP','MQTT: mỗi node publish mỗi 10s với timestamp','Python server: nhận data từ 3 nodes, implement 1D Kalman Filter','Noise model: đo thực tế noise variance cho mỗi sensor','Visualization: Grafana 4 series (3 sensors + fused estimate)','Validation: so sánh với MLX90614 infrared average room temperature'],
   hint:'Q (process noise) ~ 0.01, R (measurement noise) ~ variance thực tế đo được. Initialize P = 1.0.',
   expected:'Fused estimate smoother và accurate hơn từng sensor riêng lẻ. MAE vs thermal reference < 0.5°C.'},

  {id:'ex20',cat:'Hệ thống',diff:'medium',time:'180 phút',hw:'ESP32 + Raspberry Pi',
   title:'OTA Fleet Management System',
   desc:'Xây dựng OTA server cho fleet 5 ESP32 dev boards. Canary rollout 20% → 100%. Version tracking. Rollback tự động nếu crash rate > 5%.',
   steps:['OTA server: Flask API với firmware upload + download endpoints','ESP32 OTA client: check update mỗi 5 phút, download nếu version mới','Crash reporting: ESP32 ghi crash info vào NVS, gửi khi boot','Server dashboard: hiện version distribution, crash rate per version','Canary logic: rollout theo device_id hash (đảm bảo deterministic)','Rollback trigger: nếu crash_rate > 5% trong 1h → promote previous version'],
   hint:'Dùng esp_ota_ops.h cho native ESP32 OTA. SHA256 verify firmware integrity.',
   expected:'Upload firmware v2, quan sát rollout từ 20% → 100%. Inject bug → observe rollback tự động.'},

  // ── INDUSTRY & STARTUP ───────────────────────────────
  {id:'ex21',cat:'Khởi nghiệp',diff:'hard',time:'480 phút',hw:'Full hardware stack',
   title:'MVP Smart Office Energy Monitor',
   desc:'Build MVP đầy đủ: monitor điện năng 10 thiết bị văn phòng, AI phát hiện thiết bị bật lãng phí, dashboard web + mobile, alert + report tự động. Target: giảm 20% hóa đơn điện.',
   steps:['Hardware: 10x PZEM-004T + 2x ESP32 hub (Modbus RTU)','Cloud: InfluxDB + Grafana + FastAPI backend','AI: rule-based + anomaly detection (thiết bị bật sau giờ làm việc)','Mobile: Progressive Web App responsive','Weekly report: PDF tự động gửi email (ReportLab Python)','ROI calculator: nhập giá điện EVN, tính tiết kiệm thực tế','Pilot: deploy 2 tuần tại văn phòng thực, so sánh trước/sau'],
   hint:'PZEM-004T Modbus: address 0x01-0x10. Đọc 6 registers: voltage, current, power, energy, frequency, PF.',
   expected:'Dashboard hoạt động production, 2 tuần data thực tế, báo cáo tiết kiệm đo được, pitch deck 5 slides cho potential customer.'},

  {id:'ex22',cat:'Khởi nghiệp',diff:'medium',time:'240 phút',hw:'Máy tính + prototype',
   title:'Customer Discovery & Product Validation',
   desc:'Thực hiện 10 cuộc phỏng vấn customer discovery cho ý tưởng AIoT startup của nhóm. Xây dựng landing page. Đo conversion rate. Quyết định pivot hay proceed.',
   steps:['Viết hypothesis: vấn đề, khách hàng mục tiêu, giải pháp đề xuất','Thiết kế 10 câu hỏi mở cho customer interview (không pitch, chỉ lắng nghe)','Thực hiện 10 phỏng vấn với đúng target customer segment','Phân tích: affinity mapping, pain points ranking, willingness to pay','Landing page (Carrd/Webflow + Google Form): mô tả sản phẩm, collect email','Quảng bá 1 tuần: Facebook groups, Zalo, LinkedIn → đo sign-ups','Decision framework: proceed/pivot/abandon dựa trên data'],
   hint:'The Mom Test: đừng hỏi "bạn có dùng sản phẩm này không?" — hỏi về hành vi thực tế trong quá khứ.',
   expected:'10 interview transcripts, affinity map, 50+ email sign-ups hoặc quyết định pivot có lý do rõ ràng.'},

  // ── SECURITY ─────────────────────────────────────────
  {id:'ex23',cat:'Bảo mật',diff:'hard',time:'240 phút',hw:'ESP32 + Raspberry Pi',
   title:'Secure IoT với TLS Mutual Auth',
   desc:'Triển khai TLS mutual authentication cho ESP32 ↔ MQTT broker. Certificate authority tự tạo. Device certificates duy nhất mỗi thiết bị. MQTT ACL.',
   steps:['Tạo CA (Certificate Authority) bằng openssl','Tạo server certificate cho Mosquitto broker','Tạo client certificate riêng cho mỗi ESP32 (device01.crt, device02.crt)','Cấu hình Mosquitto: require_certificate true, use_identity_as_username true','ESP32: nhúng CA cert + client cert + private key vào firmware','Test: device01 chỉ pub/sub topic "device01/#", không được access "device02/#"','Verify với Wireshark: traffic encrypted, không đọc được'],
   hint:'Certificate size: CA ~1.2KB, client cert ~1.2KB, key ~1.7KB → tổng ~4KB trong PROGMEM.',
   expected:'TLS handshake thành công. Wireshark capture chỉ thấy encrypted data. ACL enforcement verified.'},

  {id:'ex24',cat:'Bảo mật',diff:'medium',time:'180 phút',hw:'ESP32 + sensors',
   title:'Secure Boot & Flash Encryption ESP32',
   desc:'Enable Secure Boot v2 + Flash Encryption trên ESP32. Verify firmware signature trước khi boot. Đo ảnh hưởng đến boot time và flash speed.',
   steps:['Đọc documentation ESP-IDF Security Features','Generate RSA-3072 signing key (signing_key.pem)','Enable Flash Encryption + Secure Boot trong menuconfig','Build và sign firmware lần đầu (one-time provisioning)','Verify: thử flash unsigned firmware → rejected','Benchmark: đo boot time trước/sau (expected: +200ms)','Backup: export eFuse state trước khi enable (irreversible!)'],
   hint:'CẢNH BÁO: Secure Boot + Flash Encryption là IRREVERSIBLE. Thực hành trên board có thể "sacrifice". Backup eFuse keys!',
   expected:'Board chỉ boot firmware đã ký. Flash bằng esptool bị từ chối. Boot time tăng khoảng 200-400ms.'},

  // ── FPGA ─────────────────────────────────────────────
  {id:'ex25',cat:'FPGA',diff:'hard',time:'300 phút',hw:'Tang Nano 9K / Basys 3',
   title:'UART Echo Core trên FPGA',
   desc:'Implement UART receiver + transmitter 115200 baud trên FPGA bằng Verilog. Echo data về. Test với PC terminal. Thêm FIFO buffer 64 bytes.',
   steps:['Tính clock divider: 27MHz / 115200 ≈ 234 cycles/bit','Implement UART RX: state machine (IDLE→START→DATA→STOP)','Implement UART TX: parallel-to-serial với ready/valid handshake','Sync 2 FFs cho CDC (Clock Domain Crossing) giữa UART_RX và system clock','Implement FIFO 64×8 bằng BRAM hoặc register array','Testbench ModelSim: verify từng component','Top-level: RX → FIFO → TX (echo)'],
   hint:'Sample point của RX: đợi đến giữa bit (clock_count = CLKS_PER_BIT/2 sau falling edge start bit).',
   expected:'minicom/PuTTY: type character → see echo. Stress test: gửi 1000 bytes không mất byte nào.'},

  {id:'ex26',cat:'FPGA',diff:'hard',time:'360 phút',hw:'Basys 3 / Tang Nano',
   title:'4×4 Matrix Multiplier Systolic Array',
   desc:'Implement systolic array 4×4 thực hiện matrix multiplication hai ma trận INT8 4×4. Benchmark throughput vs CPU. Visualize kết quả trên 7-segment display.',
   steps:['Design Processing Element (PE): MAC với pipeline register','Connect 4×4 PE array với data flow: A hàng ngang, B cột dọc','Preload B matrix vào array trước khi stream A','Output accumulation: chờ 2N-1 cycles sau khi stream xong','Test với ModelSim: verify 4×4 × 4×4 multiplication','Constraint: target 50MHz clock, check timing report','7-segment: hiển thị kết quả element C[0][0] và C[3][3]'],
   hint:'Systolic array: PE[i][j] nhận A từ PE[i][j-1] và B từ PE[i-1][j]. Delay A row i bằng i cycles.',
   expected:'Correct multiplication results verified. Timing report: 50MHz met. Throughput: 1 matrix multiply / (2N-1) = 7 clock cycles.'},
]
