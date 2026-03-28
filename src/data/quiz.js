export const QUIZ = [
  // ── NỀN TẢNG ─────────────────────────────────────────
  {id:'q1',cat:'Nền tảng',lv:'easy',
   q:'AIoT khác IoT truyền thống ở điểm cốt lõi nào?',
   opts:['Dùng WiFi 6 nhanh hơn','Tích hợp AI xử lý tại thiết bị (Edge AI)','Tiêu thụ điện năng ít hơn','Giao thức bảo mật mạnh hơn'],
   ans:1,exp:'AIoT = AI + IoT: AI được nhúng trực tiếp vào thiết bị IoT, xử lý dữ liệu tại chỗ (Edge) thay vì gửi toàn bộ lên Cloud. Giảm độ trễ, tiết kiệm băng thông, hoạt động offline.'},

  {id:'q2',cat:'Nền tảng',lv:'easy',
   q:'Kiến trúc AIoT 3 tầng từ dưới lên là?',
   opts:['Cloud → Edge → Device','Device → Edge → Cloud','Sensor → AI → Actuator','MCU → OS → Application'],
   ans:1,exp:'Device Layer (cảm biến, inference) → Edge/Gateway Layer (aggregation, pre-processing) → Cloud Layer (training, BI, dashboard). Data xử lý càng nhiều ở tầng dưới càng tốt.'},

  {id:'q3',cat:'Nền tảng',lv:'medium',
   q:'Năm 2025, số lượng thiết bị IoT kết nối toàn cầu xấp xỉ bao nhiêu?',
   opts:['1 tỷ','5 tỷ','18 tỷ','100 tỷ'],
   ans:2,exp:'Năm 2025 có khoảng 18 tỷ thiết bị IoT kết nối. Dữ liệu sinh ra ~79 Zettabyte/năm — đây là lý do Edge AI cần thiết thay vì gửi toàn bộ lên cloud.'},

  // ── PHẦN CỨNG ─────────────────────────────────────────
  {id:'q4',cat:'Phần cứng',lv:'easy',
   q:'ESP32 có cấu hình CPU như thế nào?',
   opts:['1 lõi 160MHz','2 lõi 240MHz (Xtensa LX6)','4 lõi 120MHz ARM','1 lõi 240MHz + co-processor'],
   ans:1,exp:'ESP32 có dual-core Xtensa LX6 chạy tối đa 240MHz. Hỗ trợ FreeRTOS thực sự, chạy 2 task song song trên 2 core. 520KB SRAM + 4MB Flash.'},

  {id:'q5',cat:'Phần cứng',lv:'easy',
   q:'ESP32-CAM khác ESP32 thường ở điểm nào?',
   opts:['Nhanh hơn 2x','Tích hợp camera OV2640 2MP + slot SD','Hỗ trợ 5GHz WiFi','RAM lớn hơn 10x'],
   ans:1,exp:'ESP32-CAM = ESP32 + camera OV2640 (2MP, 30fps) + SD card slot. Hỗ trợ JPEG streaming, face detection tích hợp. Phù hợp surveillance, barcode scanning.'},

  {id:'q6',cat:'Phần cứng',lv:'medium',
   q:'Arduino Nano 33 BLE Sense khác Uno ở điểm quan trọng nhất với AIoT?',
   opts:['Nhỏ hơn về kích thước','Có TFLite Micro + 9-DOF IMU + microphone + BLE 5','Nhiều GPIO hơn','Giá rẻ hơn'],
   ans:1,exp:'Nano 33 BLE Sense có: Cortex-M4 FPU 64MHz, TFLite Micro support, LSM9DS1 IMU, MP34DT05 microphone, APDS-9960 gesture + color, BLE 5.0. Thiết kế sẵn cho TinyML.'},

  {id:'q7',cat:'Phần cứng',lv:'medium',
   q:'ADC của ESP32 có độ phân giải bao nhiêu bit?',
   opts:['8-bit (256 bước)','10-bit (1024 bước)','12-bit (4096 bước)','16-bit (65536 bước)'],
   ans:2,exp:'ESP32 ADC 12-bit: giá trị 0–4095. Điện áp tham chiếu 3.3V → độ phân giải ~0.8mV/bước. Lưu ý: ADC2 không dùng được khi WiFi bật.'},

  {id:'q8',cat:'Phần cứng',lv:'hard',
   q:'Trong hệ thống AIoT, tại sao ESP32-S3 tốt hơn ESP32 cho AI inference?',
   opts:['Giá rẻ hơn','Có vector extensions (SIMD) tăng tốc TFLite 4.5x','RAM lớn hơn 10x','Hỗ trợ WiFi 6'],
   ans:1,exp:'ESP32-S3 có Xtensa LX7 + AI/vector extensions (SIMD instructions). Theo Espressif benchmark, TFLite inference nhanh hơn ESP32 4.5x với cùng model. RAM 512KB, hỗ trợ PSRAM 8MB ngoài.'},

  // ── GIAO THỨC ─────────────────────────────────────────
  {id:'q9',cat:'Giao thức',lv:'easy',
   q:'MQTT dùng mô hình giao tiếp nào?',
   opts:['Request/Response như HTTP','Publish/Subscribe qua Broker','Peer-to-Peer trực tiếp','Master/Slave'],
   ans:1,exp:'MQTT Pub/Sub: Publisher gửi message đến Broker với Topic. Subscriber đăng ký Topic nhận message từ Broker. Publisher và Subscriber không cần biết nhau. Broker = trung gian.'},

  {id:'q10',cat:'Giao thức',lv:'easy',
   q:'LoRa truyền tối đa bao xa trong điều kiện ngoài trời thoáng?',
   opts:['500m','2km','15km','100km'],
   ans:2,exp:'LoRa (Long Range) dùng Chirp Spread Spectrum, tầm truyền 2–15km ngoài trời thoáng, 1–5km trong đô thị. Tốc độ 0.3–50Kbps. Điện năng rất thấp: ~10mA khi transmit.'},

  {id:'q11',cat:'Giao thức',lv:'easy',
   q:'I2C cần bao nhiêu dây tín hiệu?',
   opts:['1 dây','2 dây (SDA + SCL)','3 dây (MOSI+MISO+SCK)','4 dây'],
   ans:1,exp:'I2C chỉ cần 2 dây: SDA (data) và SCL (clock). Hỗ trợ 127 slave trên cùng bus, phân biệt bằng địa chỉ 7-bit. Tốc độ: 100kHz (Standard), 400kHz (Fast), 1MHz (Fast+).'},

  {id:'q12',cat:'Giao thức',lv:'medium',
   q:'MQTT QoS 2 đảm bảo điều gì?',
   opts:['Nhanh nhất','Message đến ít nhất 1 lần','Message đến đúng 1 lần (exactly once)','Message mã hóa'],
   ans:2,exp:'QoS 2 = Exactly Once Delivery: 4-step handshake (PUBLISH→PUBREC→PUBREL→PUBCOMP). Chậm nhất nhưng đảm bảo không mất, không trùng. Dùng cho thanh toán, lệnh điều khiển quan trọng.'},

  {id:'q13',cat:'Giao thức',lv:'medium',
   q:'Tại sao ADC2 của ESP32 không dùng được khi WiFi bật?',
   opts:['Xung đột GPIO','ADC2 chia sẻ hardware với WiFi RF front-end','Software limitation','Nhiệt độ quá cao'],
   ans:1,exp:'ADC2 channels chia sẻ hardware với WiFi radio. Khi WiFi hoạt động, ADC2 bị chiếm dụng và trả về giá trị sai. Giải pháp: chỉ dùng ADC1 (GPIO32–39) trong project có WiFi.'},

  {id:'q14',cat:'Giao thức',lv:'hard',
   q:'Trong UART, "baud rate 115200" có nghĩa là?',
   opts:['115200 byte/giây','115200 bit/giây','115200 frame/giây','115200 byte/phút'],
   ans:1,exp:'Baud rate = số symbol/giây. Với UART NRZ, 1 symbol = 1 bit. 115200 baud = 115200 bit/s. Với 1 start bit + 8 data bits + 1 stop bit = 10 bit/frame → throughput ~11520 byte/s.'},

  // ── TINYML ────────────────────────────────────────────
  {id:'q15',cat:'TinyML',lv:'easy',
   q:'Workflow TinyML từ đầu đến cuối là gì?',
   opts:['Code → Upload → Run','Collect data → Train → Convert → Deploy → Inference','Design PCB → Solder → Test','Install library → Include → Compile'],
   ans:1,exp:'TinyML workflow: Thu thập data → Tiền xử lý → Train model (PC/Cloud) → Optimize (quantize) → Convert sang TFLite → Export C array → Deploy vào MCU → Chạy inference.'},

  {id:'q16',cat:'TinyML',lv:'easy',
   q:'Quantization INT8 mang lại lợi ích gì?',
   opts:['Tăng accuracy lên 4x','Giảm model size ~4x và tăng tốc inference ~2-4x','Tương thích nhiều hardware hơn','Giảm thời gian training'],
   ans:1,exp:'float32 (4 bytes) → int8 (1 byte): giảm model size 4x. Integer arithmetic nhanh hơn float trên MCU không có FPU. Accuracy giảm nhẹ ~1-2% nhưng chấp nhận được.'},

  {id:'q17',cat:'TinyML',lv:'medium',
   q:'Edge Impulse là gì?',
   opts:['Phần mềm thiết kế PCB','Platform end-to-end cho TinyML: data → train → deploy','IDE cho FPGA','Database IoT'],
   ans:1,exp:'Edge Impulse cung cấp: data collection từ device, signal processing blocks (MFCC, FFT), auto-train NN, EON Tuner tối ưu cho target hardware, export Arduino/C++ library. Miễn phí cho education.'},

  {id:'q18',cat:'TinyML',lv:'medium',
   q:'MFCC trong speech AI là gì?',
   opts:['Micro-controller Feature Computation','Mel-Frequency Cepstral Coefficients — đặc trưng âm thanh','Multiple Frame Cross-Correlation','Memory Footprint Compression Codec'],
   ans:1,exp:'MFCC (Mel-Frequency Cepstral Coefficients): trích xuất đặc trưng âm thanh mô phỏng cách tai người nghe. Chuỗi bước: Pre-emphasis → Framing → FFT → Mel filterbank → Log → DCT → 13 coefficients.'},

  {id:'q19',cat:'TinyML',lv:'hard',
   q:'Trong Federated Learning cho AIoT, điều gì KHÔNG xảy ra?',
   opts:['Mỗi device train local model','Chỉ gradient/weights được gửi lên server','Dữ liệu thô được gửi lên server để train tập trung','Server aggregates model updates'],
   ans:2,exp:'Federated Learning: dữ liệu KHÔNG rời thiết bị. Mỗi device train local model trên data của mình, chỉ gửi gradient hoặc model weights (đã thêm Differential Privacy noise) lên server để aggregation.'},

  {id:'q20',cat:'TinyML',lv:'hard',
   q:'Autoencoder dùng trong anomaly detection như thế nào?',
   opts:['Train trên cả normal và abnormal data','Train chỉ trên normal data; reconstruction error cao = anomaly','Train với supervised labels','Không cần training, rule-based'],
   ans:1,exp:'Autoencoder train trên normal data: học cách compress rồi reconstruct data bình thường. Khi gặp data bất thường, model không reconstruct tốt → MSE (reconstruction error) cao → phát hiện anomaly mà không cần label negative.'},

  // ── HỆ THỐNG ──────────────────────────────────────────
  {id:'q21',cat:'Hệ thống',lv:'easy',
   q:'Node-RED là gì?',
   opts:['Ngôn ngữ lập trình mới','Visual flow-based programming tool cho IoT automation','Time-series database','Message broker'],
   ans:1,exp:'Node-RED là flow-based visual programming environment: kéo thả "nodes" tạo workflow IoT. Tích hợp MQTT, HTTP, WebSocket, database, AI, Telegram. Chạy trên Node.js, miễn phí.'},

  {id:'q22',cat:'Hệ thống',lv:'easy',
   q:'InfluxDB phù hợp nhất cho IoT vì?',
   opts:['Hỗ trợ SQL đầy đủ','Time-series database tối ưu: compression tốt, query nhanh theo time range','Chạy được trên ESP32','Hoàn toàn miễn phí mãi mãi'],
   ans:1,exp:'InfluxDB là time-series DB: tối ưu cho data có timestamp liên tục như sensor. Nén dữ liệu 10-40x, query "last 24h" hoặc "1h ago to now" cực nhanh. Flux query language mạnh hơn SQL cho time-series.'},

  {id:'q23',cat:'Hệ thống',lv:'medium',
   q:'TIG Stack trong IoT là viết tắt của?',
   opts:['Thing-Internet-Gateway','Telegraf-InfluxDB-Grafana','TCP-IoT-Gateway','Time-series-Influx-Graph'],
   ans:1,exp:'TIG = Telegraf (data collector, MQTT consumer) + InfluxDB (time-series storage) + Grafana (visualization, alerting). Stack phổ biến nhất cho IoT monitoring. Toàn bộ open-source.'},

  {id:'q24',cat:'Hệ thống',lv:'hard',
   q:'Trong MQTT retained message, điều gì xảy ra?',
   opts:['Message được mã hóa','Broker lưu message cuối cùng và gửi ngay cho subscriber mới','Message không bao giờ hết hạn','Message được gửi nhiều lần'],
   ans:1,exp:'Retained message: broker lưu message cuối với flag retained=true. Subscriber mới connect và subscribe topic sẽ nhận ngay message này — không cần đợi publisher gửi lại. Dùng cho: device status, config, last known value.'},

  // ── FPGA ─────────────────────────────────────────────
  {id:'q25',cat:'FPGA',lv:'easy',
   q:'FPGA khác CPU về cơ bản nhất ở?',
   opts:['FPGA luôn nhanh hơn CPU','FPGA thực thi song song thực sự (true parallelism), CPU tuần tự','FPGA ít tiêu thụ điện hơn','FPGA dễ lập trình hơn'],
   ans:1,exp:'CPU thực hiện instruction tuần tự (dù multi-core vẫn tuần tự trong mỗi core). FPGA mô tả hardware — tất cả logic hoạt động song song cùng lúc. 256 MAC units trên FPGA = 256 phép nhân/clock cycle thực sự.'},

  {id:'q26',cat:'FPGA',lv:'easy',
   q:'Ngôn ngữ nào KHÔNG dùng để lập trình FPGA?',
   opts:['VHDL','Verilog','SystemVerilog','Python thuần túy (không qua HLS)'],
   ans:3,exp:'HDL (Hardware Description Language) cho FPGA: VHDL, Verilog, SystemVerilog. Python có thể dùng qua HLS (High-Level Synthesis) như Xilinx Vitis HLS. Python thuần không mô tả hardware được.'},

  {id:'q27',cat:'FPGA',lv:'medium',
   q:'Systolic Array trong FPGA dùng để làm gì trong AI?',
   opts:['Lưu trữ model weights','Thực hiện matrix multiplication song song (tăng tốc CNN)','Giao tiếp với sensor','Quản lý clock'],
   ans:1,exp:'Systolic Array: mảng Processing Elements (PE), mỗi PE thực hiện 1 MAC (Multiply-Accumulate). Data "chảy" qua array song song → matrix multiply rất nhanh. Google TPU dùng 65536 × 65536 systolic array.'},

  {id:'q28',cat:'FPGA',lv:'hard',
   q:'Tang Nano 9K FPGA (Gowin GW1NR-9) có bao nhiêu LUT?',
   opts:['1K','4K','8640','20K'],
   ans:2,exp:'Tang Nano 9K: 8640 LUT4, 468Kb BRAM, 6 DSP blocks, 27MHz internal oscillator. Giá ~350K VND. Phù hợp học FPGA, LED matrix, UART, simple CNN accelerator.'},

  // ── BẢO MẬT & NÂNG CAO ───────────────────────────────
  {id:'q29',cat:'Bảo mật',lv:'medium',
   q:'Secure Boot trên ESP32 bảo vệ điều gì?',
   opts:['Mã hóa dữ liệu sensor','Chỉ cho phép chạy firmware đã được ký bằng private key','Mã hóa WiFi password','Bảo vệ kết nối MQTT'],
   ans:1,exp:'Secure Boot: bootloader kiểm tra chữ ký RSA-4096 của firmware trước khi chạy. Nếu firmware bị tamper hoặc không có chữ ký hợp lệ → từ chối boot. Kết hợp Flash Encryption bảo vệ toàn diện.'},

  {id:'q30',cat:'Bảo mật',lv:'hard',
   q:'Differential Privacy trong Federated Learning AIoT thêm gì vào gradient?',
   opts:['Mã hóa AES','Gaussian noise hiệu chỉnh (calibrated noise) đảm bảo epsilon-delta privacy','Timestamp','Digital signature'],
   ans:1,exp:'DP-SGD (Differentially Private SGD): clip gradient norm (giới hạn ảnh hưởng 1 sample) rồi thêm Gaussian noise được calibrate theo epsilon-delta privacy budget. Đảm bảo không thể suy ra thông tin cụ thể từ gradient gửi lên.'},
]
