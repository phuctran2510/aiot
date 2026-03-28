// Extra 30 quiz questions to append to QUIZ array
export const QUIZ_EXTRA = [
  // ── DEEP LEARNING ─────────────────────────────────────
  {id:'q31',cat:'Deep Learning',lv:'medium',
   q:'Transfer learning khác training từ đầu như thế nào?',
   opts:['Transfer learning nhanh hơn vì dùng lại weights đã train sẵn trên dataset lớn','Transfer learning chỉ dùng được cho image classification','Transfer learning cần nhiều data hơn','Transfer learning không cần fine-tuning'],
   ans:0,exp:'Transfer learning: dùng pre-trained model (ImageNet, AudioSet...) làm feature extractor, chỉ train lại phần đầu (head) với dataset nhỏ của bạn. Nhanh hơn 10-100x, cần ít data hơn 10-100x.'},

  {id:'q32',cat:'Deep Learning',lv:'medium',
   q:'Quantization Aware Training (QAT) khác Post-Training Quantization (PTQ) ở điểm gì?',
   opts:['QAT chậm hơn','QAT mô phỏng quantization trong quá trình training → accuracy cao hơn PTQ khi INT8','QAT chỉ hỗ trợ INT8','PTQ không thay đổi model'],
   ans:1,exp:'QAT: fake-quantize nodes được insert vào graph trong lúc training, model "học" bù lại lỗi quantization → accuracy loss nhỏ hơn (thường <0.5%). PTQ nhanh hơn nhưng accuracy drop lớn hơn (1-3%).'},

  {id:'q33',cat:'Deep Learning',lv:'medium',
   q:'LSTM giải quyết vấn đề gì mà RNN cơ bản không làm được?',
   opts:['LSTM nhanh hơn RNN','LSTM giải quyết vanishing gradient — nhớ long-term dependencies','LSTM cần ít tham số hơn','LSTM không cần backpropagation'],
   ans:1,exp:'RNN cơ bản bị vanishing gradient với chuỗi dài (>50 steps). LSTM có 3 gates (forget, input, output) và cell state riêng → có thể nhớ thông tin từ hàng trăm/ngàn bước trước. Quan trọng cho time-series IoT.'},

  {id:'q34',cat:'Deep Learning',lv:'hard',
   q:'Trong anomaly detection với Autoencoder, reconstruction error thấp nghĩa là?',
   opts:['Model đang overfit','Input thuộc phân phối "normal" mà model đã học','Model bị underfitting','Threshold quá cao'],
   ans:1,exp:'Autoencoder train trên normal data: học compress rồi reconstruct normal patterns. Khi input là normal → reconstruction error thấp (model biết cách tái tạo). Khi input là anomaly → model không biết → error cao. Threshold phân chia normal/anomaly.'},

  {id:'q35',cat:'Deep Learning',lv:'hard',
   q:'1D-CNN phù hợp hơn LSTM cho ứng dụng nào trong IoT?',
   opts:['Long-term dependency prediction','Local pattern detection trong signal (ECG R-peak, vibration spike)','Sequential decision making','Natural language processing'],
   ans:1,exp:'1D-CNN: tốt cho phát hiện pattern cục bộ (local features) trong signal — R-peak trong ECG, spike trong vibration FFT. Nhanh hơn LSTM 5-10x trên MCU. LSTM tốt hơn cho long-term temporal dependency như load forecasting.'},

  // ── PROTOCOLS NÂNG CAO ────────────────────────────────
  {id:'q36',cat:'Giao thức',lv:'hard',
   q:'LoRaWAN Duty Cycle 1% ở EU868 nghĩa là gì cho device gửi data?',
   opts:['Gửi được 1 lần/giây','Mỗi 100ms gửi được 1ms data','Nếu TX 1s → phải chờ 99s trước khi TX tiếp','Throughput tối đa 1% tổng băng thông'],
   ans:2,exp:'EU868 duty cycle: thiết bị không được chiếm kênh quá 1% thời gian. Nếu transmit 1s → không được transmit trong 99s tiếp. Đây là quy định pháp lý (ISM band), vi phạm có thể bị phạt hoặc thiết bị bị chặn bởi network server.'},

  {id:'q37',cat:'Giao thức',lv:'medium',
   q:'OPC-UA khác MQTT ở đặc điểm nào quan trọng nhất cho Industrial IoT?',
   opts:['OPC-UA nhanh hơn MQTT','OPC-UA có semantic data model + built-in security (X.509) — chuẩn công nghiệp','OPC-UA miễn phí còn MQTT tốn phí','OPC-UA chỉ chạy trên Windows'],
   ans:1,exp:'OPC-UA: hierarchical address space (semantic model), X.509 certificate-based security, discovery, type system. MQTT: flat pub/sub, đơn giản, lightweight. OPC-UA là chuẩn ISO 62541 được IEC, ISA, PLCopen adopt cho automation.'},

  {id:'q38',cat:'Giao thức',lv:'medium',
   q:'WebSocket khác HTTP polling ở ưu điểm chính nào?',
   opts:['WebSocket hỗ trợ HTTPS','WebSocket full-duplex persistent connection — data push tức thì không cần polling','WebSocket chạy trên UDP','WebSocket cần ít RAM hơn trên ESP32'],
   ans:1,exp:'HTTP polling: client hỏi mỗi N giây → overhead header, latency bằng N giây. WebSocket: sau handshake, kết nối giữ nguyên. Server push data ngay khi có thay đổi. Latency <5ms, overhead ~2 byte. Dùng cho real-time dashboard.'},

  {id:'q39',cat:'Giao thức',lv:'hard',
   q:'Trong ESP-NOW, điểm ưu việt so với WiFi thông thường là?',
   opts:['Tầm xa hơn WiFi','Kết nối peer-to-peer trực tiếp không cần router, latency <1ms, TX đến 20 thiết bị đồng thời','Tiêu thụ điện ít hơn LoRa','Tốc độ cao hơn Bluetooth'],
   ans:1,exp:'ESP-NOW: connectionless protocol từ Espressif, 2.4GHz. Không cần router, pairing nhanh, latency <1ms (vs 10-50ms WiFi+MQTT), gửi cùng lúc đến 20 peers. Phù hợp mesh sensor network, controller-actuator. Max payload 250 bytes.'},

  {id:'q40',cat:'Giao thức',lv:'medium',
   q:'RS-485 (Modbus RTU) phù hợp cho ứng dụng IoT công nghiệp nào mà WiFi không làm được?',
   opts:['Wireless sensor','Industrial environment với noise EMI cao, khoảng cách 1200m, multi-drop bus','High-speed video streaming','Mobile tracking'],
   ans:1,exp:'RS-485 differential signaling miễn dịch với EMI/noise — phù hợp nhà máy, motor drives. 1200m cáp, tốc độ 10Mbps, multi-drop 32 devices trên 1 bus, không cần WiFi infrastructure. Modbus RTU là giao thức tầng application phổ biến nhất.'},

  // ── MLOPS & DEVOPS ────────────────────────────────────
  {id:'q41',cat:'MLOps',lv:'medium',
   q:'CI/CD cho IoT firmware có lợi ích chính nào?',
   opts:['Tăng tốc độ MCU','Tự động build → test → deploy khi push code, đảm bảo quality trước khi lên production fleet','Giảm kích thước firmware','Tăng thời lượng pin'],
   ans:1,exp:'CI/CD: Continuous Integration (auto build+test mỗi commit) + Continuous Deployment (auto deploy khi pass). Với fleet 100+ devices, OTA tự động quan trọng hơn làm thủ công từng con. Phát hiện bug sớm qua automated testing.'},

  {id:'q42',cat:'MLOps',lv:'medium',
   q:'Docker Compose phù hợp cho IoT backend deployment vì?',
   opts:['Chạy được trên ESP32','Định nghĩa multi-service stack (Mosquitto+InfluxDB+Grafana) trong 1 file, up bằng 1 lệnh','Miễn phí hơn AWS','Faster than native'],
   ans:1,exp:'docker-compose.yml định nghĩa toàn bộ stack services, dependencies, volumes, networks. "docker compose up -d" start toàn bộ. Portable: chạy giống nhau trên dev machine và production Raspberry Pi. Restart policies tự động recover.'},

  {id:'q43',cat:'MLOps',lv:'hard',
   q:'Trong Federated Learning, vì sao gradient/weights được gửi thay vì raw data?',
   opts:['Gradient nhỏ hơn data','Gradient không chứa thông tin cá nhân của individual samples — privacy preserving','Server không đủ storage','Bandwidth tiết kiệm'],
   ans:1,exp:'Raw data chứa thông tin cá nhân (ECG → health condition, camera → face). Gradient/model weights là aggregated statistics — khó reverse-engineer individual samples. Kết hợp Differential Privacy (thêm noise vào gradient) tăng cường bảo vệ thêm.'},

  {id:'q44',cat:'MLOps',lv:'hard',
   q:'Canary deployment trong OTA IoT là gì?',
   opts:['Deploy cho tất cả thiết bị cùng lúc','Rollout từ từ: 1% → 10% → 50% → 100% devices, monitor errors trước khi tiếp tục','Backup firmware trước khi update','Auto-rollback sau 24h'],
   ans:1,exp:'Canary deployment: release firmware mới cho % nhỏ fleet trước. Monitor error rate, crash rate, battery life. Nếu OK → tăng dần %. Nếu có vấn đề → rollback chỉ ảnh hưởng subset nhỏ. Giảm risk khi update fleet hàng nghìn IoT devices.'},

  // ── BẢO MẬT ──────────────────────────────────────────
  {id:'q45',cat:'Bảo mật',lv:'medium',
   q:'Replay attack trong IoT là gì và cách phòng chống?',
   opts:['Tấn công vào replay buffer','Attacker ghi lại packet hợp lệ và phát lại để giả mạo lệnh. Phòng: timestamp + nonce + HMAC','DDoS vào MQTT broker','Fake sensor data injection'],
   ans:1,exp:'Replay attack: capture packet điều khiển hợp lệ (VD: "door_open"), phát lại sau. Phòng chống: mỗi message có timestamp + nonce (random số dùng 1 lần) + HMAC chữ ký. Server reject message nếu timestamp > 30s hoặc nonce đã thấy trước đó.'},

  {id:'q46',cat:'Bảo mật',lv:'hard',
   q:'MQTT Broker authentication tốt nhất dùng phương thức nào?',
   opts:['Username/password plain text','TLS mutual authentication (client + server certificates) + ACL cho từng topic','IP whitelist','MAC address filter'],
   ans:1,exp:'TLS mutual auth: server certificate (verify broker là server thật, chống MITM) + client certificate (authenticate device, không cần username/password, không thể stolen từ firmware). Kết hợp ACL: mỗi device chỉ pub/sub topics của nó.'},

  {id:'q47',cat:'Bảo mật',lv:'hard',
   q:'Flash Encryption trên ESP32 bảo vệ gì?',
   opts:['Mã hóa WiFi traffic','Mã hóa nội dung Flash memory — attacker đọc chip bằng JTAG/SPI không thấy code/keys','Mã hóa RAM khi sleep','Bảo vệ USB port'],
   ans:1,exp:'Flash Encryption: AES-256-XTS mã hóa toàn bộ Flash (code, data, NVS). Chip sinh random key lúc đầu tiên boot, lưu trong eFuse (one-time-programmable). Sau enable, không thể đọc Flash bằng external programmer. Key không thể extract.'},

  // ── FPGA NÂNG CAO ─────────────────────────────────────
  {id:'q48',cat:'FPGA',lv:'hard',
   q:'Pipelining trong FPGA design giúp gì cho throughput?',
   opts:['Giảm latency','Chia logic thành stages, mỗi clock cycle xử lý 1 stage → throughput tăng dù latency tăng','Giảm số LUT sử dụng','Tiết kiệm BRAM'],
   ans:1,exp:'Pipelining: chia combinational logic dài thành nhiều stages bằng registers. Mỗi stage chạy parallel. Latency tăng (phải qua nhiều stages) nhưng throughput tăng tỷ lệ thuận số stages. VD: 4-stage pipeline → 4× throughput so với không pipeline.'},

  {id:'q49',cat:'FPGA',lv:'hard',
   q:'Trong FPGA CNN accelerator, DSP Slice dùng để làm gì?',
   opts:['Lưu model weights','Thực hiện multiply-accumulate (MAC) operations hiệu quả — phép tính cốt lõi của CNN','Giao tiếp với DRAM','Clock management'],
   ans:1,exp:'DSP Slice (DSP48E2 trên Xilinx): 27×18-bit multiplier + 48-bit accumulator trong 1 hard block. Chuyên biệt cho MAC operations — nhanh hơn LUT-based multiplier 3-5×, tiêu thụ điện ít hơn. CNN inference = hàng triệu MAC → DSP Slice rất quan trọng.'},

  {id:'q50',cat:'FPGA',lv:'medium',
   q:'High-Level Synthesis (HLS) cho phép lập trình FPGA bằng gì?',
   opts:['Python thuần','C/C++ → tool tự động synthesize thành RTL (Verilog/VHDL)','Java','Assembly'],
   ans:1,exp:'HLS (Xilinx Vitis HLS, Intel HLS): viết thuật toán bằng C/C++, tool tự convert sang RTL. Giảm thời gian phát triển từ tháng xuống tuần. Trade-off: kết quả có thể không tối ưu bằng viết RTL tay, cần pragma hints cho pipelining/unrolling.'},

  // ── SMART SYSTEMS ─────────────────────────────────────
  {id:'q51',cat:'Hệ thống',lv:'medium',
   q:'Digital Twin là gì trong Industry 4.0?',
   opts:['Bản sao phần cứng của thiết bị','Bản sao số (virtual model) của physical asset, sync realtime với sensor data, dùng để simulation và prediction','Backup firmware','Redundant server'],
   ans:1,exp:'Digital Twin: virtual representation của physical asset (máy móc, nhà máy, sản phẩm) được cập nhật realtime từ sensor data. Dùng để: simulation what-if scenarios, predict failures, optimize operations, reduce physical testing costs.'},

  {id:'q52',cat:'Hệ thống',lv:'medium',
   q:'Event-driven architecture trong IoT có nghĩa là?',
   opts:['Hệ thống chạy theo lịch cố định','Components phản ứng khi có event (sensor trigger, threshold breach, message) thay vì polling liên tục','Tất cả processing trên cloud','Only push notifications'],
   ans:1,exp:'Event-driven: component subscribe events, react khi event xảy ra. Ưu điểm: loose coupling (components độc lập), scalable, real-time response. VD: "temp > 35" → event → trigger fan, alert, log — không cần poll mỗi giây.'},

  {id:'q53',cat:'Hệ thống',lv:'hard',
   q:'Trong TIG stack, Telegraf đóng vai trò gì?',
   opts:['Time-series database','Agent thu thập metrics từ nhiều sources (MQTT, HTTP, system, database) và forward đến InfluxDB','Visualization tool','Message broker'],
   ans:1,exp:'Telegraf: agent thu thập data từ 200+ input plugins (MQTT consumer, HTTP listener, CPU/memory metrics, database queries...) và gửi đến 50+ output plugins (InfluxDB, Kafka, Prometheus...). Cấu hình qua TOML, rất nhẹ (Go binary ~20MB).'},

  {id:'q54',cat:'Hệ thống',lv:'hard',
   q:'Time-series database như InfluxDB tối ưu hơn PostgreSQL cho IoT data vì?',
   opts:['InfluxDB hỗ trợ SQL','Compression ratio 10-40× cho time-series, query "last 24h" O(1) thay O(n), automatic downsampling, retention policies','InfluxDB miễn phí','InfluxDB supports JOIN'],
   ans:1,exp:'Time-series DB tối ưu: (1) Compression: delta encoding + Gorilla compression → 10-40× nhỏ hơn. (2) Time-based indexing: query range nhanh. (3) Continuous queries: tự downsample 1s data xuống 1h averages. (4) Retention: tự xóa data cũ.'},

  // ── ỨNG DỤNG THỰC TIỄN ───────────────────────────────
  {id:'q55',cat:'Ứng dụng',lv:'easy',
   q:'Hệ thống tưới thông minh tích hợp weather API có lợi ích gì so với chỉ dùng soil sensor?',
   opts:['Tiết kiệm điện hơn','Không tưới trước khi mưa — tiết kiệm 30-50% nước thêm so với chỉ dùng soil sensor','Weather API miễn phí','Ít sensor hơn'],
   ans:1,exp:'Soil sensor đo hiện tại, weather API dự báo tương lai. Kết hợp: nếu forecast có mưa trong 2h → không tưới dù đất hơi khô (sắp được tưới tự nhiên). Giảm 30-50% lần tưới thừa. ROI: tiết kiệm nước + năng lượng bơm.'},

  {id:'q56',cat:'Ứng dụng',lv:'medium',
   q:'Fall detection cho người cao tuổi dùng AIoT như thế nào?',
   opts:['Camera AI nhận dạng tư thế','Accelerometer MPU6050 + ML: detect impact spike >3g rồi static/lying position sau đó → alert trong <5s','Pressure sensor trên sàn','Ultrasonic distance sensor'],
   ans:1,exp:'Fall signature trong accelerometer: (1) Normal activity: 0.8-1.2g. (2) Fall event: impact spike >3g (chạm đất). (3) Post-fall: acceleration trở về ~1g nhưng orientation thay đổi (lying down). TFLite Micro phân loại 3 states. Alert qua BLE → phone → emergency contact.'},

  {id:'q57',cat:'Ứng dụng',lv:'medium',
   q:'Predictive maintenance khác reactive maintenance như thế nào về mặt kinh tế?',
   opts:['Predictive tốn kém hơn','Predictive phát hiện lỗi trước khi xảy ra → tránh unplanned downtime (tốn 5-15× hơn planned maintenance) và catastrophic failure','Reactive đơn giản hơn và đủ dùng','Predictive chỉ cho thiết bị đắt tiền'],
   ans:1,exp:'Reactive: sửa khi hỏng → unplanned downtime, có thể gây catastrophic failure (bearing → shaft damage). Predictive: phát hiện early warning → lên kế hoạch maintenance → minimize downtime, reduce parts damage. ROI: mỗi giờ downtime nhà máy ~$100K-1M.'},

  {id:'q58',cat:'Ứng dụng',lv:'hard',
   q:'Privacy by Design trong smart healthcare AIoT nghĩa là gì?',
   opts:['Không thu thập data','Bảo vệ privacy ngay từ thiết kế: process on-device, minimal data collection, de-identification trước khi lên cloud, không lưu raw biometric','Mã hóa tất cả data','Xóa data sau 24h'],
   ans:1,exp:'Privacy by Design (Ann Cavoukian): 7 principles. Cho healthcare IoT: (1) Inference on-device (ECG analysis trên wearable, không upload raw ECG). (2) Minimal data: chỉ gửi kết quả (anomaly/normal). (3) De-identification trước cloud. (4) Patient consent & control. GDPR/HIPAA compliance.'},

  {id:'q59',cat:'Ứng dụng',lv:'medium',
   q:'Trong Smart City, AIoT giúp quản lý đèn đường như thế nào?',
   opts:['Tắt đèn ban ngày','Dimming adaptive: PIR sensor + light sensor + AI pattern recognition → dim đến 30% khi vắng người, sáng khi có người/xe → tiết kiệm 50-70% điện','Đổi màu đèn theo giờ','Tăng công suất vào giờ cao điểm'],
   ans:1,exp:'Smart Street Lighting: (1) PIR phát hiện người/xe → increase brightness. (2) BH1750 ambient light → disable khi trời sáng. (3) AI traffic pattern → pre-dim schedule. (4) Fault detection: sensor current draw. ROI: tiết kiệm 50-70% điện + giảm bảo trì reactive.'},

  {id:'q60',cat:'Ứng dụng',lv:'hard',
   q:'TAM/SAM/SOM trong business plan AIoT startup là gì?',
   opts:['Kỹ thuật cảm biến','TAM=Total Addressable Market, SAM=Serviceable Addressable Market, SOM=Serviceable Obtainable Market — phân tích quy mô thị trường','Phương pháp lập trình','Kiến trúc network'],
   ans:1,exp:'Market sizing: TAM = tổng thị trường toàn cầu (Smart Agriculture IoT = $47B). SAM = phần có thể phục vụ với product/region (Đông Nam Á = $3B). SOM = thực tế chiếm được năm 3 (0.1% SAM = $3M). Investor đánh giá scalability qua TAM/SAM/SOM.'},
]
