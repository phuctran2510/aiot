export const LAB_GROUPS = [
  { id:'Cơ bản',     color:'#00e676', count:3 },
  { id:'Trung cấp',  color:'#00d4ff', count:3 },
  { id:'TinyML',     color:'#a855f7', count:2 },
  { id:'Hệ thống',   color:'#f59e0b', count:2 },
]

export const LABS = [
  // ═══ CƠ BẢN ══════════════════════════════════════════
  {
    id:'l1', group:'Cơ bản', groupColor:'#00e676',
    diff:'easy', time:'45 phút', hw:'Arduino Uno / ESP32',
    title:'Lab 1 — Cài đặt & Hello World',
    obj:'Cài Arduino IDE, cấu hình ESP32, chạy chương trình Serial đầu tiên.',
    theory:'Arduino IDE là môi trường phát triển tích hợp chính thức. ESP32 cần cài thêm board package từ Espressif (~200MB).',
    steps:[
      { t:'Cài Arduino IDE 2.x', lang:'bash', info:'Download từ arduino.cc/en/software — chọn hệ điều hành của bạn',
        code:`# Ubuntu/Debian:
sudo snap install arduino
# Hoặc download .AppImage và chạy trực tiếp

# Windows: Download .exe installer, chạy Administrator
# macOS: Download .dmg, kéo vào Applications` },
      { t:'Thêm ESP32 Board Package', lang:'', info:'File → Preferences → Additional Boards Manager URLs:',
        code:`https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json

# Sau đó: Tools → Board Manager → tìm "esp32" by Espressif Systems → Install
# Lần đầu mất ~5-10 phút (200MB)` },
      { t:'Cài driver & chọn port', lang:'bash', info:'Cài driver CH340/CP2102, sau đó chọn port',
        code:`# Linux: thêm user vào group dialout
sudo adduser $USER dialout
# Logout và login lại, rồi kiểm tra:
ls /dev/ttyUSB*

# Windows: Device Manager → Ports (COM & LPT)
# macOS: ls /dev/cu.*

# Arduino IDE: Tools → Port → chọn COMx hoặc /dev/ttyUSB0` },
      { t:'Upload chương trình đầu tiên', lang:'cpp', info:'File → New → paste code dưới → Ctrl+U để upload',
        code:`void setup() {
  Serial.begin(115200);
  delay(500);
  Serial.println("=== AIoT EDU - Hello World ===");
  Serial.println("ESP32 ready!");
}

int counter = 0;
void loop() {
  Serial.printf("[%lu ms] Count: %d | Heap: %lu bytes\\n",
    millis(), ++counter, ESP.getFreeHeap());
  delay(1000);
}` },
      { t:'Mở Serial Monitor', lang:'', info:'Tools → Serial Monitor → chọn 115200 baud',
        code:`# Kết quả mong đợi:
=== AIoT EDU - Hello World ===
ESP32 ready!
[1002 ms] Count: 1 | Heap: 295832 bytes
[2004 ms] Count: 2 | Heap: 295832 bytes
[3006 ms] Count: 3 | Heap: 295832 bytes` },
    ],
    tips:['Nếu upload fail: giữ nút BOOT trong khi click Upload','Driver CH340: wch.cn/downloads — CH341SER.EXE','Linux permission lỗi: sudo chmod 666 /dev/ttyUSB0'],
    expect:'Serial Monitor hiển thị counter tăng dần mỗi giây, heap free ~290KB',
    verify:[
      {q:'Upload thành công?', cmd:'Không có lỗi đỏ trong console'},
      {q:'Serial output đúng?', cmd:'115200 baud, xem count tăng'},
      {q:'Heap stable?', cmd:'Heap free không giảm theo thời gian (memory leak)'},
    ],
  },

  {
    id:'l2', group:'Cơ bản', groupColor:'#00e676',
    diff:'easy', time:'60 phút', hw:'ESP32 + DHT22 + LED',
    title:'Lab 2 — Cảm biến DHT22 & LED cảnh báo',
    obj:'Đọc nhiệt độ + độ ẩm DHT22, hiển thị Serial, LED đỏ cảnh báo khi nhiệt độ cao.',
    theory:'DHT22 dùng giao thức 1-Wire tùy chỉnh với timing chặt chẽ. Thư viện Adafruit DHT xử lý timing này, chỉ cần gọi readTemperature() và readHumidity().',
    steps:[
      { t:'Kết nối phần cứng', lang:'', info:'Sơ đồ đấu dây DHT22 + LED',
        code:`DHT22:
  Pin 1 (VCC)  → 3.3V
  Pin 2 (DATA) → GPIO4 (kèm resistor 10KΩ lên 3.3V)
  Pin 4 (GND)  → GND

LED đỏ:
  Anode  → GPIO2 (qua resistor 220Ω)
  Cathode → GND

GPIO2 = LED built-in trên nhiều board ESP32` },
      { t:'Cài thư viện DHT', lang:'', info:'Tools → Library Manager → tìm và cài 2 thư viện:',
        code:`1. "DHT sensor library" by Adafruit → Install
2. "Adafruit Unified Sensor" by Adafruit → Install
(nếu hỏi install dependencies → Yes)` },
      { t:'Code đọc sensor & cảnh báo', lang:'cpp', info:'',
        code:`#include <DHT.h>

#define DHT_PIN     4
#define DHT_TYPE    DHT22
#define LED_PIN     2
#define TEMP_HIGH   32.0f   // Ngưỡng cảnh báo
#define TEMP_LOW    15.0f

DHT dht(DHT_PIN, DHT_TYPE);
unsigned long lastRead = 0;

void setup() {
  Serial.begin(115200);
  dht.begin();
  pinMode(LED_PIN, OUTPUT);
  Serial.println("DHT22 Monitor - AIoT EDU");
}

void loop() {
  if (millis() - lastRead >= 2000) {
    lastRead = millis();

    float temp = dht.readTemperature();
    float hum  = dht.readHumidity();

    if (isnan(temp) || isnan(hum)) {
      Serial.println("ERROR: Sensor read failed! Check wiring.");
      return;
    }

    float hi = dht.computeHeatIndex(temp, hum, false);

    Serial.printf("[%lu s] T:%.1fC H:%.1f%% HI:%.1fC",
      millis()/1000, temp, hum, hi);

    if (temp > TEMP_HIGH) {
      digitalWrite(LED_PIN, HIGH);
      Serial.println(" <<< HIGH TEMP ALERT >>>");
    } else if (temp < TEMP_LOW) {
      digitalWrite(LED_PIN, HIGH);
      Serial.println(" <<< LOW TEMP ALERT >>>");
    } else {
      digitalWrite(LED_PIN, LOW);
      Serial.println(" OK");
    }
  }
}` },
    ],
    tips:['DHT22 cần ít nhất 2s giữa 2 lần đọc','Nếu NaN: kiểm tra pull-up 10KΩ và dây kết nối','Thở vào sensor để tăng nhiệt độ và test LED alert'],
    expect:'Serial hiện T:XX.X C H:XX.X% mỗi 2s, LED sáng khi nhiệt cao',
    verify:[
      {q:'Giá trị hợp lệ?', cmd:'Serial: không có NaN, nhiệt độ 20-40°C'},
      {q:'LED phản hồi?', cmd:'Thở vào sensor: nhiệt độ tăng, LED sáng'},
    ],
  },

  {
    id:'l3', group:'Cơ bản', groupColor:'#00e676',
    diff:'easy', time:'75 phút', hw:'ESP32 + OLED SSD1306',
    title:'Lab 3 — OLED Display Dashboard',
    obj:'Kết nối màn hình OLED SSD1306 128×64 qua I2C, hiển thị dashboard với dữ liệu sensor.',
    theory:'SSD1306 OLED dùng I2C chỉ cần 2 dây (SDA + SCL). Thư viện Adafruit SSD1306 + GFX cung cấp đầy đủ drawing primitives.',
    steps:[
      { t:'Kết nối OLED I2C', lang:'', info:'',
        code:`SSD1306 OLED:
  VCC → 3.3V
  GND → GND
  SDA → GPIO21 (I2C SDA mặc định ESP32)
  SCK → GPIO22 (I2C SCL mặc định ESP32)

Nếu có nhiều thiết bị I2C (BME280, MPU6050...):
Tất cả đều share cùng SDA và SCL — không cần thêm dây` },
      { t:'Cài thư viện OLED', lang:'', info:'Library Manager:',
        code:`1. "Adafruit SSD1306" → Install
2. "Adafruit GFX Library" → Install` },
      { t:'Code OLED Dashboard', lang:'cpp', info:'Hiển thị uptime + random data (thay bằng sensor thật)',
        code:`#include <Wire.h>
#include <Adafruit_SSD1306.h>
#include <DHT.h>

Adafruit_SSD1306 display(128, 64, &Wire, -1);
DHT dht(4, DHT22);
float temp = 0, hum = 0;

void setup() {
  Serial.begin(115200);
  Wire.begin(21, 22);
  dht.begin();

  if (!display.begin(SSD1306_SWITCHCAPVCC, 0x3C)) {
    Serial.println("OLED not found! Check wiring.");
    while(1);
  }

  display.clearDisplay();
  display.setTextColor(WHITE);
  display.setTextSize(1);
  display.setCursor(20, 25);
  display.println("AIoT EDU - DLU");
  display.display();
  delay(2000);
}

void updateDisplay() {
  display.clearDisplay();

  // Header
  display.setTextSize(1);
  display.setCursor(0, 0);
  display.print("AIoT Monitor");
  display.drawLine(0, 10, 127, 10, WHITE);

  // Temperature (large font)
  display.setTextSize(2);
  display.setCursor(0, 16);
  display.printf("%.1f", temp);
  display.setTextSize(1);
  display.setCursor(56, 16);
  display.print("C");

  // Humidity
  display.setTextSize(1);
  display.setCursor(0, 40);
  display.printf("Hum: %.1f%%", hum);

  // Uptime
  display.setCursor(0, 52);
  display.printf("Up: %lus", millis()/1000);

  // Progress bar (humidity)
  int barW = (int)(hum * 0.8f);
  display.drawRect(80, 38, 46, 8, WHITE);
  display.fillRect(80, 38, barW > 46 ? 46 : barW, 8, WHITE);

  display.display();
}

unsigned long lastRead = 0;
void loop() {
  if (millis() - lastRead >= 2000) {
    lastRead = millis();
    float t = dht.readTemperature();
    float h = dht.readHumidity();
    if (!isnan(t)) { temp = t; hum = h; }
    updateDisplay();
  }
}` },
    ],
    tips:['Địa chỉ I2C OLED thường 0x3C hoặc 0x3D — dùng I2C Scanner để xác nhận','Tắt display.clearDisplay() ở setup nếu muốn splash screen','Font size 1=6×8px, 2=12×16px, 3=18×24px'],
    expect:'OLED hiển thị nhiệt độ lớn, độ ẩm, uptime, progress bar humidity',
    verify:[
      {q:'OLED sáng lên?', cmd:'Kiểm tra VCC=3.3V, địa chỉ 0x3C'},
      {q:'Data cập nhật 2s?', cmd:'Quan sát uptime counter tăng'},
    ],
  },

  // ═══ TRUNG CẤP ══════════════════════════════════════
  {
    id:'l4', group:'Trung cấp', groupColor:'#00d4ff',
    diff:'medium', time:'90 phút', hw:'ESP32',
    title:'Lab 4 — WiFi & MQTT với DHT22',
    obj:'Kết nối ESP32 lên MQTT broker, publish sensor data dạng JSON mỗi 5s, subscribe lệnh điều khiển LED.',
    theory:'MQTT Pub/Sub: ESP32 (client) kết nối đến Broker (Mosquitto). Publish data lên topic "sensors/data", subscribe topic "devices/led" để nhận lệnh điều khiển.',
    steps:[
      { t:'Cài Mosquitto Broker (PC)', lang:'bash', info:'Chạy trên máy tính trong cùng mạng LAN',
        code:`# Ubuntu:
sudo apt install mosquitto mosquitto-clients -y
sudo systemctl start mosquitto

# Kiểm tra:
systemctl status mosquitto  # → active (running)

# Test nhanh:
mosquitto_sub -h localhost -t "test/#" -v &
mosquitto_pub -h localhost -t "test/hello" -m "world"
# Output: test/hello world` },
      { t:'Cài thư viện Arduino', lang:'', info:'Library Manager:',
        code:`1. "PubSubClient" by Nick O'Leary → Install
2. "ArduinoJson" by Benoit Blanchon → Install
3. "DHT sensor library" by Adafruit → Install` },
      { t:'Code ESP32 MQTT Client', lang:'cpp', info:'Thay WIFI_SSID, WIFI_PASS, MQTT_HOST',
        code:`#include <WiFi.h>
#include <PubSubClient.h>
#include <ArduinoJson.h>
#include <DHT.h>

const char* WIFI_SSID = "YourSSID";
const char* WIFI_PASS = "YourPassword";
const char* MQTT_HOST = "192.168.1.100";  // IP máy tính
const int   MQTT_PORT = 1883;
const char* CLIENT_ID = "esp32-lab4";

DHT dht(4, DHT22);
WiFiClient wc;
PubSubClient mqtt(wc);

void onMessage(char* topic, byte* payload, unsigned int len) {
  String msg((char*)payload, len);
  Serial.printf("Received [%s]: %s\\n", topic, msg.c_str());
  if (String(topic) == "devices/led")
    digitalWrite(2, msg == "ON" ? HIGH : LOW);
}

void connectWiFi() {
  WiFi.begin(WIFI_SSID, WIFI_PASS);
  Serial.print("WiFi");
  while (WiFi.status() != WL_CONNECTED) { delay(500); Serial.print("."); }
  Serial.println("\\nWiFi OK: " + WiFi.localIP().toString());
}

void connectMQTT() {
  while (!mqtt.connected()) {
    Serial.print("MQTT connecting...");
    if (mqtt.connect(CLIENT_ID, nullptr, nullptr,
                     "devices/status", 1, true, "offline")) {
      mqtt.publish("devices/status", "online", true);
      mqtt.subscribe("devices/led");
      Serial.println(" OK");
    } else {
      Serial.println(" fail(" + String(mqtt.state()) + ") retry 3s");
      delay(3000);
    }
  }
}

void setup() {
  Serial.begin(115200);
  dht.begin();
  pinMode(2, OUTPUT);
  mqtt.setServer(MQTT_HOST, MQTT_PORT);
  mqtt.setCallback(onMessage);
  connectWiFi();
  connectMQTT();
}

unsigned long lastPub = 0;
void loop() {
  if (!mqtt.connected()) connectMQTT();
  mqtt.loop();

  if (millis() - lastPub >= 5000) {
    lastPub = millis();
    float t = dht.readTemperature();
    float h = dht.readHumidity();
    if (isnan(t)) return;

    JsonDocument doc;
    doc["device"]      = CLIENT_ID;
    doc["temperature"] = serialized(String(t,1));
    doc["humidity"]    = serialized(String(h,1));
    doc["rssi"]        = WiFi.RSSI();
    doc["uptime"]      = millis()/1000;

    char buf[200]; serializeJson(doc, buf);
    mqtt.publish("sensors/data", buf);
    Serial.println("Published: " + String(buf));
  }
}` },
      { t:'Test từ PC', lang:'bash', info:'Mở terminal mới trên PC:',
        code:`# Xem data từ ESP32:
mosquitto_sub -h localhost -t "sensors/data" -v

# Điều khiển LED:
mosquitto_pub -h localhost -t "devices/led" -m "ON"
mosquitto_pub -h localhost -t "devices/led" -m "OFF"

# Kết quả mẫu:
# sensors/data {"device":"esp32-lab4","temperature":"26.3","humidity":"68.1","rssi":-42,"uptime":15}` },
    ],
    tips:['Tìm IP máy tính: ipconfig (Win) hoặc ip addr (Linux)','Dùng MQTT Explorer (mqtt-explorer.com) để xem topics dễ hơn','Public broker: broker.hivemq.com:1883 nếu không cài local'],
    expect:'PC nhận JSON mỗi 5s, LED bật/tắt theo lệnh MQTT từ terminal',
    verify:[
      {q:'WiFi connected?', cmd:'Serial: WiFi OK: 192.168.x.x'},
      {q:'MQTT connected?', cmd:'Serial: MQTT connecting... OK'},
      {q:'Data 5s/lần?', cmd:'mosquitto_sub xem output'},
      {q:'LED điều khiển?', cmd:'Publish ON rồi OFF, quan sát LED'},
    ],
  },

  {
    id:'l5', group:'Trung cấp', groupColor:'#00d4ff',
    diff:'medium', time:'90 phút', hw:'2x ESP32 + LoRa SX1276',
    title:'Lab 5 — LoRa Long-range Communication',
    obj:'2 ESP32 + LoRa SX1276 giao tiếp trực tiếp không cần WiFi/SIM. Sender gửi data, Receiver hiển thị + đo RSSI/SNR.',
    theory:'LoRa (Long Range) dùng Chirp Spread Spectrum, truyền 2-15km ngoài trời với công suất 100mW. SX1276 kết nối SPI với ESP32.',
    steps:[
      { t:'Kết nối LoRa SX1276 (cả 2 module)', lang:'', info:'SPI connection — giống nhau cho cả Sender và Receiver:',
        code:`SX1276    →   ESP32
VCC       →   3.3V
GND       →   GND
SCK       →   GPIO18
MISO      →   GPIO19
MOSI      →   GPIO23
NSS/CS    →   GPIO5
RST       →   GPIO14
DIO0/IRQ  →   GPIO26

QUAN TRONG: Phải có anten! Dây thẳng 8.2cm cho 433MHz` },
      { t:'Cài thư viện', lang:'', info:'Library Manager:',
        code:`"LoRa" by Sandeep Mistry → Install` },
      { t:'Code Sender (Node 1)', lang:'cpp', info:'Upload lên ESP32 số 1',
        code:`#include <LoRa.h>
#include <DHT.h>

DHT dht(4, DHT22);
int pktId = 0;

void setup() {
  Serial.begin(115200);
  dht.begin();
  LoRa.setPins(5, 14, 26);  // CS, RST, IRQ

  if (!LoRa.begin(433E6)) {  // 433 MHz
    Serial.println("LoRa init failed!");
    while(1);
  }
  LoRa.setSpreadingFactor(10);    // SF7-12
  LoRa.setSignalBandwidth(125E3); // 125 kHz BW
  LoRa.setCodingRate4(5);         // 4/5 coding rate
  LoRa.setTxPower(20);            // Max power
  Serial.println("LoRa Sender ready - 433MHz SF10");
}

void loop() {
  float t = dht.readTemperature();
  float h = dht.readHumidity();

  // Packet: id,temp,hum
  String packet = String(pktId++) + "," + String(t,1) + "," + String(h,1);

  LoRa.beginPacket();
  LoRa.print(packet);
  LoRa.endPacket();

  Serial.println("Sent #" + String(pktId-1) + ": " + packet);
  delay(5000);
}` },
      { t:'Code Receiver (Node 2)', lang:'cpp', info:'Upload lên ESP32 số 2',
        code:`#include <LoRa.h>

void setup() {
  Serial.begin(115200);
  LoRa.setPins(5, 14, 26);
  if (!LoRa.begin(433E6)) {
    Serial.println("LoRa init failed!"); while(1);
  }
  LoRa.setSpreadingFactor(10);
  LoRa.setSignalBandwidth(125E3);
  LoRa.setCodingRate4(5);
  Serial.println("LoRa Receiver ready");
}

void loop() {
  int packetSize = LoRa.parsePacket();
  if (packetSize) {
    String data = "";
    while (LoRa.available()) data += (char)LoRa.read();

    int rssi = LoRa.packetRssi();
    float snr = LoRa.packetSnr();

    // Parse: id,temp,hum
    int c1 = data.indexOf(','), c2 = data.lastIndexOf(',');
    int id    = data.substring(0, c1).toInt();
    float t   = data.substring(c1+1, c2).toFloat();
    float h   = data.substring(c2+1).toFloat();

    Serial.printf("Pkt#%d T:%.1fC H:%.1f%% | RSSI:%ddBm SNR:%.1fdB\\n",
      id, t, h, rssi, snr);
  }
}` },
    ],
    tips:['RSSI: -30 dBm tốt, -100 dBm yếu, -120 dBm không nhận','SF cao hơn = tầm xa hơn nhưng tốc độ chậm hơn','Không chạy LoRa không có anten — phá hardware!'],
    expect:'Receiver nhận packet mỗi 5s, RSSI -30 đến -80 dBm trong phòng',
    verify:[
      {q:'Packet nhận được?', cmd:'Serial Receiver xem output'},
      {q:'RSSI hợp lệ?', cmd:'-30 đến -100 dBm là bình thường'},
      {q:'Data decode đúng?', cmd:'Temperature và humidity khớp sender'},
    ],
  },

  {
    id:'l6', group:'Trung cấp', groupColor:'#00d4ff',
    diff:'medium', time:'120 phút', hw:'ESP32 + DHT22 + OLED',
    title:'Lab 6 — Web Server Dashboard realtime',
    obj:'ESP32 làm web server: dashboard HTML/CSS/JS hiển thị sensor data realtime, API JSON, điều khiển relay từ browser.',
    theory:'ESP32 WebServer library tạo HTTP server nhúng. JavaScript fetch() gọi /api/data mỗi 2s để cập nhật dashboard mà không cần reload trang.',
    steps:[
      { t:'Cài thư viện', lang:'', info:'Đã có sẵn trong ESP32 core:',
        code:`#include <WiFi.h>       // Built-in
#include <WebServer.h>  // Built-in
// Chỉ cần cài thêm DHT nếu chưa có` },
      { t:'Code Web Server', lang:'cpp', info:'Thay WiFi credentials',
        code:`#include <WiFi.h>
#include <WebServer.h>
#include <DHT.h>

const char* SSID = "YourSSID";
const char* PASS = "YourPassword";

DHT dht(4, DHT22);
WebServer server(80);
float temp=25.0, hum=60.0;

// HTML dashboard nhúng (PROGMEM để tiết kiệm RAM)
const char HTML[] PROGMEM = R"HTML(
<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>AIoT Dashboard</title>
<style>
  body{font-family:monospace;background:#07090f;color:#cdd8e8;
       display:flex;flex-direction:column;align-items:center;
       min-height:100vh;margin:0;padding:2rem 1rem}
  h1{color:#00d4ff;margin-bottom:1.5rem;font-size:1.5rem}
  .cards{display:flex;gap:1rem;flex-wrap:wrap;justify-content:center}
  .card{background:#111927;border:1px solid #1c2c44;border-radius:12px;
        padding:2rem;text-align:center;min-width:150px}
  .val{font-size:2.5rem;font-weight:bold;color:#00e676;margin:.5rem 0}
  .lbl{font-size:.85rem;color:#6e8faa}
  .btn{padding:.6rem 1.5rem;background:#00d4ff;color:#000;border:none;
       border-radius:8px;cursor:pointer;font-weight:bold;margin:.3rem;font-size:.9rem}
  .btn:hover{background:#1de8ff}
  .status{margin-top:1rem;font-size:.8rem;color:#334d62}
</style>
</head>
<body>
<h1>AIoT Monitor — ESP32</h1>
<div class="cards">
  <div class="card"><div class="val" id="temp">--</div><div class="lbl">Nhiet do (C)</div></div>
  <div class="card"><div class="val" id="hum">--</div><div class="lbl">Do am (%)</div></div>
</div>
<div style="margin-top:1.5rem">
  <button class="btn" onclick="led('ON')">LED ON</button>
  <button class="btn" onclick="led('OFF')">LED OFF</button>
</div>
<div class="status" id="status">Dang ket noi...</div>
<script>
let ok=0, err=0;
async function fetchData(){
  try{
    const r = await fetch('/api/data');
    const d = await r.json();
    document.getElementById('temp').textContent = d.temperature;
    document.getElementById('hum').textContent  = d.humidity;
    document.getElementById('status').textContent =
      'Cap nhat: ' + new Date().toLocaleTimeString() +
      ' | OK:' + (++ok) + ' Loi:' + err;
  }catch(e){ err++; }
}
async function led(cmd){
  await fetch('/api/led?cmd=' + cmd);
}
fetchData();
setInterval(fetchData, 2000);
</script>
</body></html>
)HTML";

void setup() {
  Serial.begin(115200);
  dht.begin();
  pinMode(2, OUTPUT);
  WiFi.begin(SSID, PASS);
  while(WiFi.status()!=WL_CONNECTED){delay(500);Serial.print(".");}
  Serial.println("\\nWiFi: http://" + WiFi.localIP().toString());

  server.on("/", [](){
    server.send_P(200, "text/html", HTML);
  });

  server.on("/api/data", [](){
    char json[100];
    snprintf(json, sizeof(json),
      "{\\"temperature\\":\\"%.1f\\",\\"humidity\\":\\"%.1f\\",\\"uptime\\":%lu}",
      temp, hum, millis()/1000);
    server.send(200, "application/json", json);
  });

  server.on("/api/led", [](){
    String cmd = server.arg("cmd");
    digitalWrite(2, cmd == "ON" ? HIGH : LOW);
    server.send(200, "application/json", "{\\"status\\":\\"ok\\"}");
  });

  server.begin();
}

unsigned long lastRead = 0;
void loop() {
  server.handleClient();
  if (millis()-lastRead >= 2000) {
    lastRead = millis();
    float t = dht.readTemperature();
    float h = dht.readHumidity();
    if (!isnan(t)) { temp=t; hum=h; }
  }
}` },
    ],
    tips:['Truy cập từ điện thoại trong cùng WiFi network','Chrome DevTools → Network để xem API requests','Thêm chart.js từ CDN để vẽ biểu đồ lịch sử'],
    expect:'Mở http://IP-ESP32 trên điện thoại thấy dashboard, data cập nhật 2s/lần',
    verify:[
      {q:'Dashboard load?', cmd:'Truy cập IP trên browser'},
      {q:'Data cập nhật?', cmd:'Nhiệt độ thay đổi khi thở vào sensor'},
      {q:'LED điều khiển?', cmd:'Click ON/OFF button'},
    ],
  },

  // ═══ TINYML ══════════════════════════════════════════
  {
    id:'l7', group:'TinyML', groupColor:'#a855f7',
    diff:'hard', time:'180 phút', hw:'ESP32 + MPU6050 + Edge Impulse',
    title:'Lab 7 — Nhận dạng cử chỉ tay (TinyML)',
    obj:'Thu thập dữ liệu accelerometer, train model phân loại 4 cử chỉ tay bằng Edge Impulse, deploy TFLite Micro trên ESP32.',
    theory:'Edge Impulse: platform end-to-end cho TinyML. Spectral Analysis block trích xuất FFT features từ accelerometer. NN Classifier với quantization INT8 chạy trên ESP32 < 20ms/inference.',
    steps:[
      { t:'Kết nối MPU6050', lang:'', info:'I2C connection:',
        code:`MPU6050:
  VCC → 3.3V
  GND → GND
  SDA → GPIO21
  SCL → GPIO22
  AD0 → GND (địa chỉ 0x68, nếu AD0=3.3V → 0x69)

Library Manager: "MPU6050" by Electronic Cats → Install
Hoặc: "I2Cdevlib-MPU6050" → Install` },
      { t:'Thu thập dữ liệu với Edge Impulse', lang:'bash', info:'',
        code:`# 1. Đăng ký: studio.edgeimpulse.com (miễn phí)
# 2. New Project → Accelerometer (motion)
# 3. Data Acquisition → Connect device

# Cài edge-impulse-cli:
npm install -g edge-impulse-cli

# Kết nối ESP32 qua USB, chạy:
edge-impulse-daemon

# Quay lại studio → Data Acquisition
# Thu thập 30+ mẫu × 4 class × 2 giây mỗi mẫu:
# - shake   (lắc ngang)
# - wave    (vẫy lên xuống)
# - circle  (vòng tròn)
# - idle    (đặt yên)` },
      { t:'Tạo Impulse & Train', lang:'', info:'Trên Edge Impulse Studio:',
        code:`Create Impulse:
  Input:  Window 2000ms, 50Hz → 100 samples
  Signal Processing: Spectral Analysis
    - FFT length: 16
    - Noise floor: -52 dB
  Learning: Classification
    - 4 output classes
    - Dense layers: 20 → Dropout 0.25 → 10

Training:
  Epochs: 30
  LR: 0.001
  Expected accuracy: >88%

Deploy:
  Arduino library → Build → Download .zip
  Arduino IDE → Sketch → Include Library → Add .ZIP` },
      { t:'Inference trên ESP32', lang:'cpp', info:'Sau khi import library từ Edge Impulse:',
        code:`// Library name thay đổi theo project của bạn
#include <YourProject_inferencing.h>
#include <MPU6050_tockn.h>

MPU6050 mpu(Wire);
float features[EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE];

int raw_feature_get_data(size_t offset, size_t length, float *signal) {
  memcpy(signal, features + offset, length * sizeof(float));
  return 0;
}

void setup() {
  Serial.begin(115200);
  Wire.begin(21, 22);
  mpu.begin();
  mpu.calcGyroOffsets(true);
  Serial.printf("Model: %d classes, %d features\\n",
    EI_CLASSIFIER_LABEL_COUNT,
    EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE);
}

void loop() {
  Serial.println("Sampling 2s...");
  for (int i=0; i < EI_CLASSIFIER_RAW_SAMPLE_COUNT; i++) {
    mpu.update();
    int base = i * EI_CLASSIFIER_RAW_SAMPLES_PER_FRAME;
    features[base+0] = mpu.getAccX();
    features[base+1] = mpu.getAccY();
    features[base+2] = mpu.getAccZ();
    delay(1000 / EI_CLASSIFIER_FREQUENCY);
  }

  signal_t signal;
  signal.total_length = EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE;
  signal.get_data     = &raw_feature_get_data;

  ei_impulse_result_t result;
  EI_IMPULSE_ERROR err = run_classifier(&signal, &result, false);

  if (err != EI_IMPULSE_OK) {
    Serial.println("Classifier error: " + String(err)); return;
  }

  // Print all predictions
  float maxVal = 0; const char* maxLabel = "";
  for (auto& c : result.classification) {
    Serial.printf("  %s: %.1f%%\\n", c.label, c.value*100);
    if (c.value > maxVal) { maxVal = c.value; maxLabel = c.label; }
  }
  Serial.printf("==> %s (%.1f%%) in %lums\\n\\n",
    maxLabel, maxVal*100, result.timing.dsp + result.timing.classification);
}` },
    ],
    tips:['Thu thập data đa dạng: nhiều người, nhiều tốc độ','Idle class quan trọng để tránh false positive','Accuracy <80%: thu thập thêm data, đặc biệt class bị nhầm'],
    expect:'4 cử chỉ nhận dạng chính xác >85%, inference <50ms',
    verify:[
      {q:'Accuracy >85%?', cmd:'Edge Impulse Test set accuracy'},
      {q:'Inference time?', cmd:'Serial: timing in ms'},
      {q:'4 class đúng?', cmd:'Test từng cử chỉ 10 lần'},
    ],
  },

  {
    id:'l8', group:'TinyML', groupColor:'#a855f7',
    diff:'hard', time:'180 phút', hw:'ESP32 + MPU6050',
    title:'Lab 8 — Anomaly Detection rung động',
    obj:'Train Autoencoder TFLite phát hiện rung động bất thường (gắn vào máy móc). Deploy trên ESP32 với threshold tự động.',
    theory:'Autoencoder train chỉ trên data "bình thường". Reconstruction error thấp = bình thường. Reconstruction error cao = bất thường. Không cần label negative samples.',
    steps:[
      { t:'Thu thập data bình thường', lang:'cpp', info:'Gắn ESP32+MPU6050 vào máy đang hoạt động bình thường, chạy 1 giờ:',
        code:`#include <MPU6050_tockn.h>
MPU6050 mpu(Wire);

void setup() {
  Serial.begin(115200);
  Wire.begin(21, 22);
  mpu.begin();
  mpu.calcGyroOffsets(true);
  Serial.println("Logging started...");
}

void loop() {
  mpu.update();
  // Log CSV: timestamp, ax, ay, az, gx, gy, gz
  Serial.printf("%lu,%.4f,%.4f,%.4f,%.4f,%.4f,%.4f\\n",
    millis(),
    mpu.getAccX(), mpu.getAccY(), mpu.getAccZ(),
    mpu.getGyroX(), mpu.getGyroY(), mpu.getGyroZ());
  delay(20); // 50 Hz
}` },
      { t:'Train Autoencoder (Python/Colab)', lang:'python', info:'',
        code:`import numpy as np
import tensorflow as tf

# Load CSV data (bỏ header, lấy cột ax,ay,az)
data = np.genfromtxt('normal_vibration.csv', delimiter=',')
acc = data[:, 1:4]  # ax, ay, az

# Feature extraction: window 256 samples
def features(w):
    out = []
    for ax in w.T:  # 3 axes
        out += [np.mean(ax), np.std(ax),
                np.max(ax)-np.min(ax),  # range
                np.sqrt(np.mean(ax**2))] # RMS
    return np.array(out)  # 12 features

# Tạo windows
WIN = 256
X = np.array([features(acc[i:i+WIN]) for i in range(0, len(acc)-WIN, 50)])
print(f"Dataset: {X.shape}")  # (N, 12)

# Normalize (lưu params để dùng trên device)
mean, std = X.mean(0), X.std(0)
np.savetxt('norm_params.csv', np.vstack([mean, std]))
Xn = (X - mean) / (std + 1e-8)

# Autoencoder
inp = tf.keras.Input(shape=(12,))
x   = tf.keras.layers.Dense(8, 'relu')(inp)
x   = tf.keras.layers.Dense(4, 'relu')(x)   # bottleneck
x   = tf.keras.layers.Dense(8, 'relu')(x)
out = tf.keras.layers.Dense(12)(x)
ae  = tf.keras.Model(inp, out)
ae.compile('adam', 'mse')
ae.fit(Xn, Xn, 100, 32, validation_split=0.2, verbose=1)

# Threshold: mean + 3*std of reconstruction error
errors = np.mean((ae.predict(Xn) - Xn)**2, axis=1)
thresh = errors.mean() + 3 * errors.std()
print(f"Threshold: {thresh:.5f}")

# Convert TFLite INT8
cvt = tf.lite.TFLiteConverter.from_keras_model(ae)
cvt.optimizations = [tf.lite.Optimize.DEFAULT]
tflite = cvt.convert()
print(f"Model: {len(tflite)/1024:.1f} KB")

# Tạo C header
with open('anomaly_model.h', 'w') as f:
    f.write('const unsigned char g_model[] = {')
    f.write(','.join(f'0x{b:02x}' for b in tflite))
    f.write(f'}};\\nconst unsigned int g_model_len = {len(tflite)};')` },
      { t:'Deploy & Inference ESP32', lang:'cpp', info:'',
        code:`#include <TensorFlowLite_ESP32.h>
#include "anomaly_model.h"
#include "tensorflow/lite/micro/all_ops_resolver.h"
#include "tensorflow/lite/micro/micro_interpreter.h"

// Norm params từ training
const float MEAN[12] = {/* copy từ norm_params.csv */};
const float STD[12]  = {/* copy từ norm_params.csv */};
const float THRESHOLD = 0.0142f; // Từ training

const int ARENA = 8*1024;
uint8_t arena[ARENA];
tflite::MicroInterpreter* interp = nullptr;

void setup() {
  Serial.begin(115200);
  Wire.begin(21,22); mpu.begin();
  // ... init TFLite như Lab 7
  Serial.printf("Threshold: %.5f\\n", THRESHOLD);
}

void loop() {
  // 1. Thu thập window 256 mẫu
  float acc[256][3];
  for(int i=0;i<256;i++){
    mpu.update();
    acc[i][0]=mpu.getAccX();
    acc[i][1]=mpu.getAccY();
    acc[i][2]=mpu.getAccZ();
    delay(20);
  }

  // 2. Extract 12 features
  TfLiteTensor* in = interp->input(0);
  for(int ax=0;ax<3;ax++){
    float mn=0,rms=0,mn2=0,rnge;
    float mx=-999,mi=999;
    for(int i=0;i<256;i++){
      mn+=acc[i][ax]; rms+=acc[i][ax]*acc[i][ax];
      if(acc[i][ax]>mx) mx=acc[i][ax];
      if(acc[i][ax]<mi) mi=acc[i][ax];
    }
    mn/=256; rms=sqrt(rms/256);
    for(int i=0;i<256;i++){float d=acc[i][ax]-mn;mn2+=d*d;}
    float sd=sqrt(mn2/256);
    int b=ax*4;
    in->data.f[b+0]=(mn  -MEAN[b+0])/(STD[b+0]+1e-8f);
    in->data.f[b+1]=(sd  -MEAN[b+1])/(STD[b+1]+1e-8f);
    in->data.f[b+2]=(mx-mi-MEAN[b+2])/(STD[b+2]+1e-8f);
    in->data.f[b+3]=(rms -MEAN[b+3])/(STD[b+3]+1e-8f);
  }

  // 3. Inference
  interp->Invoke();
  TfLiteTensor* out = interp->output(0);

  // 4. Reconstruction MSE
  float mse=0;
  for(int i=0;i<12;i++){float d=out->data.f[i]-in->data.f[i];mse+=d*d;}
  mse/=12;

  Serial.printf("MSE:%.5f %s\\n", mse, mse>THRESHOLD?"[ANOMALY!]":"OK");
}` },
    ],
    tips:['Thu thập ít nhất 500 windows để threshold chính xác','Test anomaly: gõ nhẹ vào bàn, thêm tải vào máy','Gửi MQTT alert khi anomaly để logging'],
    expect:'Normal MSE < threshold, lắc mạnh → ANOMALY detected',
    verify:[
      {q:'Normal state OK?', cmd:'Đặt yên: MSE < threshold'},
      {q:'Anomaly detected?', cmd:'Lắc mạnh: MSE > threshold'},
    ],
  },

  // ═══ HỆ THỐNG ════════════════════════════════════════
  {
    id:'l9', group:'Hệ thống', groupColor:'#f59e0b',
    diff:'hard', time:'240 phút', hw:'Raspberry Pi + ESP32',
    title:'Lab 9 — Node-RED & Grafana Dashboard',
    obj:'Raspberry Pi: cài Mosquitto + Node-RED + InfluxDB + Grafana. ESP32 gửi data. Dashboard realtime professional.',
    theory:'TIG Stack (Telegraf/Node-RED + InfluxDB + Grafana): pipeline IoT chuẩn sản xuất. Node-RED xử lý logic, InfluxDB lưu time-series, Grafana vẽ biểu đồ.',
    steps:[
      { t:'Cài stack trên Raspberry Pi', lang:'bash', info:'Chạy trên Raspberry Pi 4 (Ubuntu Server 22.04):',
        code:`# 1. Cài Mosquitto MQTT broker
sudo apt install mosquitto mosquitto-clients -y
sudo systemctl enable --now mosquitto

# 2. Cài Node-RED
bash <(curl -sL https://raw.githubusercontent.com/node-red/linux-installers/master/deb/update-nodejs-and-nodered)
sudo systemctl enable --now nodered
# Truy cập: http://PI_IP:1880

# 3. Cài InfluxDB v2
wget -q https://dl.influxdata.com/influxdb/releases/influxdb2-2.7.1_linux_arm64.tar.gz
tar xf influxdb2-*.tar.gz
sudo mv influxdb2-*/influxdb2 /usr/local/bin/influxd
sudo systemctl start influxd
# Setup: http://PI_IP:8086

# 4. Cài Grafana
sudo apt install grafana -y
sudo systemctl enable --now grafana-server
# Truy cập: http://PI_IP:3000 (admin/admin)` },
      { t:'Node-RED Flow: MQTT → InfluxDB', lang:'', info:'Import flow JSON vào Node-RED:',
        code:`Flow mẫu (kéo từ palette):

[mqtt-in: topic="sensors/#"] 
  → [json parse] 
  → [function: add tags]
  → [influxdb out: bucket="sensors"]
  → [debug]

Function node code:
msg.measurement = "environment";
msg.tags = {
    device: msg.payload.device || "esp32",
    location: msg.topic.split('/')[1]
};
msg.fields = {
    temperature: parseFloat(msg.payload.temperature),
    humidity:    parseFloat(msg.payload.humidity),
    rssi:        msg.payload.rssi
};
return msg;` },
      { t:'Grafana Dashboard', lang:'', info:'Tạo dashboard sau khi có data:',
        code:`Data Source: InfluxDB
  URL: http://localhost:8086
  Token: [từ InfluxDB setup]
  Org: aiot-edu, Bucket: sensors

Panel 1 — Temperature Time Series:
from(bucket:"sensors")
  |> range(start: -1h)
  |> filter(fn: (r) => r._field == "temperature")
  |> aggregateWindow(every: 1m, fn: mean)

Panel 2 — Humidity Gauge: range 0-100%
Panel 3 — RSSI Stat panel: last value
Panel 4 — Heatmap: temperature distribution
Panel 5 — Table: last 10 readings
Panel 6 — Alert: temp > 35°C → Telegram notification` },
    ],
    tips:['Docker Compose là cách dễ nhất để cài toàn bộ stack','Grafana Alert: notification channel → Telegram bot rất hữu ích','InfluxDB retention policy: xóa data cũ hơn 30 ngày tự động'],
    expect:'Grafana dashboard realtime cập nhật mỗi giây, alert hoạt động',
    verify:[
      {q:'Node-RED nhận MQTT?', cmd:'Debug node hiển thị payload'},
      {q:'InfluxDB có data?', cmd:'Data Explorer: query sensors bucket'},
      {q:'Grafana chart?', cmd:'Panel hiển thị đường time-series'},
    ],
  },

  {
    id:'l10', group:'Hệ thống', groupColor:'#f59e0b',
    diff:'hard', time:'240 phút', hw:'ESP32 multi-node + cloud',
    title:'Lab 10 — Smart Farm end-to-end',
    obj:'Hệ thống tưới cây thông minh hoàn chỉnh: soil sensor + DHT22 + relay bơm + AI quyết định + dashboard + Telegram alert.',
    theory:'Smart Farm kết hợp multi-sensor, AI decision logic, actuator control và cloud monitoring. Đây là mẫu điển hình của AIoT production system.',
    steps:[
      { t:'Hardware setup', lang:'', info:'Linh kiện cần thiết:',
        code:`ESP32 Dev Board × 1
DHT22 (nhiệt độ + độ ẩm KK) × 1
Capacitive Soil Moisture Sensor v1.2 × 2
Relay Module 5V × 1 (điều khiển bơm nước)
Mini Water Pump 5V × 1 + ống nước silicone
NTP Time (không cần module, dùng WiFi NTP)
Power Supply 5V 2A

Kết nối:
  Soil 1 → GPIO34 (ADC1_CH6)
  Soil 2 → GPIO35 (ADC1_CH7)
  DHT22  → GPIO4
  Relay  → GPIO26 (active LOW)` },
      { t:'AI quyết định tưới', lang:'cpp', info:'Rule-based AI kết hợp nhiều yếu tố:',
        code:`#include <WiFi.h>
#include <time.h>
#include <DHT.h>
#include <PubSubClient.h>

// NTP Time
const char* NTP_SERVER = "pool.ntp.org";
const long  GMT_OFFSET = 7*3600;  // UTC+7 Việt Nam

// Calibration (đo thực tế với đất của bạn)
#define SOIL_DRY   3200  // ADC khi đất khô
#define SOIL_WET   1200  // ADC khi đất ướt

float getSoilMoisture(int pin) {
  int raw = analogRead(pin);
  float pct = map(raw, SOIL_DRY, SOIL_WET, 0, 100);
  return constrain(pct, 0, 100);
}

bool pumpOn = false;
void pump(bool on, int sec=0) {
  pumpOn = on;
  digitalWrite(RELAY_PIN, on ? LOW : HIGH); // active LOW
  if (on && sec>0) { delay((long)sec*1000); pump(false); }
}

// AI decision engine
String waterDecision(float s1, float s2, float t, float h, int hr) {
  float avg = (s1 + s2) / 2.0f;

  if (hr < 6 || hr > 20) return "SKIP_NIGHT";
  if (h > 85.0f)          return "SKIP_HIGH_HUMIDITY";
  if (avg > 65.0f)        return "SKIP_WET_SOIL";

  if (avg < 25.0f) return "WATER_URGENT";
  if (avg < 40.0f && t > 30.0f) return "WATER_HOT";
  if (avg < 45.0f && (hr==7||hr==18)) return "WATER_ROUTINE";

  return "NO_ACTION";
}

void loop() {
  static unsigned long last = 0;
  if (millis()-last < 60000) return;
  last = millis();

  struct tm tm; getLocalTime(&tm);
  int hour = tm.tm_hour;

  float s1 = getSoilMoisture(SOIL1_PIN);
  float s2 = getSoilMoisture(SOIL2_PIN);
  float t  = dht.readTemperature();
  float h  = dht.readHumidity();

  String decision = waterDecision(s1, s2, t, h, hour);
  Serial.printf("[%02d:00] Soil:%.0f/%.0f T:%.1f H:%.1f -> %s\\n",
    hour, s1, s2, t, h, decision.c_str());

  if (decision.startsWith("WATER_")) {
    int duration = decision.contains("URGENT") ? 60 : 30;
    pump(true, duration);
    // MQTT notification
    mqtt.publish("farm/watering",
      ("start:" + String(duration) + "s").c_str());
  }
}` },
      { t:'Telegram Bot Alert', lang:'cpp', info:'',
        code:`#include <WiFiClientSecure.h>
#include <HTTPClient.h>

const char* BOT_TOKEN = "YOUR_BOT_TOKEN";
const char* CHAT_ID   = "YOUR_CHAT_ID";

void sendTelegram(String msg) {
  if (WiFi.status() != WL_CONNECTED) return;

  WiFiClientSecure client;
  client.setInsecure(); // Bỏ qua cert verify

  HTTPClient http;
  String url = "https://api.telegram.org/bot" +
               String(BOT_TOKEN) + "/sendMessage";
  http.begin(client, url);
  http.addHeader("Content-Type", "application/json");

  String body = "{\\"chat_id\\":\\"" + String(CHAT_ID) +
                "\\",\\"text\\":\\"" + msg + "\\"}";
  http.POST(body);
  http.end();
}

// Gọi khi cần alert:
// sendTelegram("Dat kho! Soil: 20% - Da tuoi 60 giac.");
// sendTelegram("CANH BAO: Nhiet do cao " + String(t) + "C");` },
    ],
    tips:['Tạo Telegram bot: chat với @BotFather trên Telegram','Calibrate soil sensor: đo ADC khi cắm vào nước và khi để khô','Test ban đầu với chậu cây nhỏ trước khi triển khai thực tế'],
    expect:'Hệ thống tự động tưới khi đất khô, Telegram nhận alert trong <30s',
    verify:[
      {q:'Soil moisture đọc đúng?', cmd:'Serial log, so sánh với đất ẩm/khô'},
      {q:'Bơm bật khi cần?', cmd:'Đặt ngưỡng thấp, test logic'},
      {q:'Telegram alert?', cmd:'Trigger watering, check điện thoại'},
    ],
  },
]

// ═══ LABS BỔ SUNG ════════════════════════════════════════
const LABS_EXTRA = [
  {
    id:'l11', group:'FPGA', groupColor:'#f472b6',
    diff:'hard', time:'180 phút', hw:'Tang Nano 9K hoặc Basys 3',
    title:'Lab 11 — FPGA Blink & Counter với Verilog',
    obj:'Lập trình FPGA cơ bản: LED blink, 7-segment counter đếm 0-9, pushbutton input.',
    theory:'FPGA thực thi all logic song song — khác hoàn toàn với MCU tuần tự. "always @(posedge clk)" là paradigm cơ bản của synchronous digital design.',
    steps:[
      { t:'Cài IDE', lang:'bash', info:'Tang Nano 9K dùng GOWIN IDE, Basys 3 dùng Vivado',
        code:`# Tang Nano 9K (GOWIN):
# Download GOWIN EDA Education từ gowinsemi.com
# Cài driver: WCH USB-UART

# Basys 3 (Xilinx):
# Download Vivado ML Standard (miễn phí): xilinx.com
# Cài khoảng 30GB, chọn "Artix-7" board support

# Cả 2: cài driver, kết nối USB, test với LED blink demo` },
      { t:'LED Blink cơ bản', lang:'verilog', info:'Tạo file top.v — LED nhấp nháy 1Hz',
        code:`// Tang Nano 9K: CLK_IN = 27MHz
// Basys 3: CLK_IN = 100MHz
module blink #(
  parameter CLK_HZ = 27_000_000  // Sửa thành 100_000_000 cho Basys3
)(
  input  wire clk,
  input  wire rst_n,   // Active LOW reset
  output reg  led_n    // Active LOW LED (nhiều FPGA board)
);
  // Đủ bit để đếm đến CLK_HZ/2
  localparam COUNT_MAX = CLK_HZ / 2 - 1;
  reg [$clog2(COUNT_MAX):0] cnt;

  always @(posedge clk or negedge rst_n) begin
    if (!rst_n) begin
      cnt   <= 0;
      led_n <= 1;  // OFF
    end else if (cnt == COUNT_MAX) begin
      cnt   <= 0;
      led_n <= ~led_n;  // Toggle
    end else
      cnt <= cnt + 1;
  end
endmodule` },
      { t:'7-Segment Counter', lang:'verilog', info:'Hiển thị số 0-9 tự động đếm 1s/số',
        code:`module seg_counter (
  input  wire       clk,
  output wire [6:0] seg,  // a,b,c,d,e,f,g (active LOW)
  output wire       dp    // decimal point
);
  // BCD to 7-segment decoder
  function [6:0] bcd2seg;
    input [3:0] bcd;
    case (bcd)
      4'h0: bcd2seg = 7'b1000000; // 0
      4'h1: bcd2seg = 7'b1111001; // 1
      4'h2: bcd2seg = 7'b0100100; // 2
      4'h3: bcd2seg = 7'b0110000; // 3
      4'h4: bcd2seg = 7'b0011001; // 4
      4'h5: bcd2seg = 7'b0010010; // 5
      4'h6: bcd2seg = 7'b0000010; // 6
      4'h7: bcd2seg = 7'b1111000; // 7
      4'h8: bcd2seg = 7'b0000000; // 8
      4'h9: bcd2seg = 7'b0010000; // 9
      default: bcd2seg = 7'b1111111;
    endcase
  endfunction

  reg [26:0] tick;
  reg [3:0]  digit;
  
  always @(posedge clk) begin
    if (tick == 27_000_000-1) begin  // 1s
      tick  <= 0;
      digit <= (digit == 9) ? 0 : digit + 1;
    end else tick <= tick + 1;
  end

  assign seg = bcd2seg(digit);
  assign dp  = 1'b1;  // Off
endmodule` },
      { t:'Constraint file (.cst)', lang:'', info:'Gán physical pins cho Tang Nano 9K:',
        code:`// Tang Nano 9K .cst file
IO_LOC "clk"   52;  // 27MHz oscillator
IO_LOC "rst_n" 4;   // S1 button
IO_LOC "led_n" 10;  // LED0 (active LOW)

// 7-segment: (a=b=c=d=e=f=g=dp → pins cụ thể của board)
IO_LOC "seg[0]" 25;  // a
IO_LOC "seg[1]" 26;  // b
IO_LOC "seg[2]" 27;  // c
// ... xem schematic của board` },
    ],
    tips:['Verilog: <= là non-blocking (dùng trong always @posedge), = là blocking (combinational)','Tang Nano 9K giá ~350K là FPGA board rẻ nhất tốt nhất','Dùng $clog2(N) để tự tính số bit cần thiết'],
    expect:'LED nhấp nháy 1Hz, 7-segment hiển thị 0→1→2→...→9→0',
    verify:[
      {q:'LED blink đúng tần số?', cmd:'Đếm bằng mắt: 1 lần/giây'},
      {q:'7-seg đếm đúng?', cmd:'Quan sát 0→9 lặp lại'},
    ],
  },

  {
    id:'l12', group:'FPGA', groupColor:'#f472b6',
    diff:'hard', time:'180 phút', hw:'FPGA board + Python PC',
    title:'Lab 12 — UART Communication FPGA ↔ PC',
    obj:'Implement UART Rx/Tx trong Verilog. FPGA nhận lệnh từ PC, xử lý, trả response. Test bằng minicom/PuTTY.',
    theory:'UART: 1 start bit (LOW) + 8 data bits (LSB first) + 1 stop bit (HIGH). Baud rate phải match cả hai phía. Clock domain crossing cần synchronizer.',
    steps:[
      { t:'UART Transmitter', lang:'verilog', info:'',
        code:`module uart_tx #(
  parameter CLK_HZ   = 27_000_000,
  parameter BAUD     = 115200
)(
  input       clk, rst_n, tx_start,
  input [7:0] tx_data,
  output reg  tx,
  output reg  tx_busy
);
  localparam CLKS_PER_BIT = CLK_HZ / BAUD;  // 234 for 115200
  localparam IDLE=0, START=1, DATA=2, STOP=3;

  reg [1:0]  state;
  reg [3:0]  bit_idx;
  reg [15:0] clk_cnt;
  reg [7:0]  data_buf;

  always @(posedge clk or negedge rst_n) begin
    if (!rst_n) begin
      state <= IDLE; tx <= 1; tx_busy <= 0;
    end else case (state)
      IDLE: begin
        tx <= 1;
        if (tx_start) begin
          state <= START; data_buf <= tx_data;
          tx_busy <= 1; clk_cnt <= 0;
        end
      end
      START: begin
        tx <= 0;  // Start bit
        if (clk_cnt == CLKS_PER_BIT-1) begin
          clk_cnt <= 0; bit_idx <= 0; state <= DATA;
        end else clk_cnt <= clk_cnt + 1;
      end
      DATA: begin
        tx <= data_buf[bit_idx];
        if (clk_cnt == CLKS_PER_BIT-1) begin
          clk_cnt <= 0;
          if (bit_idx == 7) state <= STOP;
          else bit_idx <= bit_idx + 1;
        end else clk_cnt <= clk_cnt + 1;
      end
      STOP: begin
        tx <= 1;  // Stop bit
        if (clk_cnt == CLKS_PER_BIT-1) begin
          state <= IDLE; tx_busy <= 0; clk_cnt <= 0;
        end else clk_cnt <= clk_cnt + 1;
      end
    endcase
  end
endmodule` },
      { t:'UART Echo Test', lang:'verilog', info:'Nhận byte từ PC và gửi lại (echo)',
        code:`// Top module: UART loopback
module uart_echo (
  input  clk, rst_n, rx,
  output tx
);
  wire [7:0] rx_data;
  wire       rx_done, tx_busy;
  reg        tx_start;
  reg  [7:0] tx_data;

  uart_rx rx_inst(.clk(clk), .rst_n(rst_n), .rx(rx),
                  .data(rx_data), .done(rx_done));
  uart_tx tx_inst(.clk(clk), .rst_n(rst_n),
                  .tx_start(tx_start), .tx_data(tx_data),
                  .tx(tx), .tx_busy(tx_busy));

  always @(posedge clk) begin
    tx_start <= 0;
    if (rx_done && !tx_busy) begin
      tx_data  <= rx_data + 1;  // Echo +1 (A→B, B→C...)
      tx_start <= 1;
    end
  end
endmodule` },
      { t:'Test từ PC', lang:'bash', info:'',
        code:`# Linux/macOS:
minicom -b 115200 -D /dev/ttyUSB0

# Windows: PuTTY, Serial, COM3, 115200

# Nhập 'A' → FPGA gửi lại 'B'
# Nhập 'Z' → FPGA gửi lại '['
# (vì echo +1 trên ASCII)

# Python test:
import serial
s = serial.Serial('/dev/ttyUSB0', 115200)
s.write(b'Hello')
print(s.read(5))  # b'Ifmmp'` },
    ],
    tips:['115200 baud @ 27MHz: CLKS_PER_BIT = 234 (không hoàn hảo, sai số <0.5%)','Dùng oscilloscope hoặc logic analyzer để debug UART timing','RX cần 2-stage synchronizer tránh metastability'],
    expect:'PC gửi byte, FPGA echo lại +1, không mất data',
    verify:[
      {q:'Echo hoạt động?', cmd:'Gửi "ABC", nhận "BCD"'},
      {q:'Không mất byte?', cmd:'Gửi 100 bytes, nhận đủ 100'},
    ],
  },

  {
    id:'l13', group:'Nâng cao', groupColor:'#ff6b35',
    diff:'hard', time:'240 phút', hw:'ESP32 + multiple sensors',
    title:'Lab 13 — Production-ready AIoT node',
    obj:'Build ESP32 node theo chuẩn production: WiFiManager, NTP, OTA, Watchdog, SPIFFS config, MQTT TLS, deep sleep, error recovery.',
    theory:'Production AIoT node phải tự hoạt động không cần can thiệp: tự connect WiFi, tự reconnect MQTT, tự update firmware, tự recover từ crash, monitor heap/stack để phát hiện leak sớm.',
    steps:[
      { t:'Cài thư viện', lang:'', info:'Library Manager:',
        code:`WiFiManager by tzapu → Install
ArduinoOTA (built-in ESP32 core)
PubSubClient by Nick O'Leary → Install
ArduinoJson by Benoit Blanchon → Install
DHT sensor library by Adafruit → Install` },
      { t:'Config system với SPIFFS', lang:'cpp', info:'',
        code:`#include <SPIFFS.h>
#include <ArduinoJson.h>

struct Config {
  char mqtt_host[64];
  int  mqtt_port;
  char device_id[32];
  int  send_interval;
  bool deep_sleep;
};

Config cfg = { "broker.local", 1883, "esp32-001", 30, false };

void loadConfig() {
  if (!SPIFFS.begin(true)) return;
  File f = SPIFFS.open("/config.json", "r");
  if (!f) { saveConfig(); return; }  // Create default
  
  JsonDocument doc;
  deserializeJson(doc, f);
  f.close();
  
  strlcpy(cfg.mqtt_host, doc["mqtt_host"] | "broker.local", 64);
  cfg.mqtt_port     = doc["mqtt_port"] | 1883;
  cfg.send_interval = doc["send_interval"] | 30;
  strlcpy(cfg.device_id, doc["device_id"] | "esp32-001", 32);
}

void saveConfig() {
  JsonDocument doc;
  doc["mqtt_host"]     = cfg.mqtt_host;
  doc["mqtt_port"]     = cfg.mqtt_port;
  doc["device_id"]     = cfg.device_id;
  doc["send_interval"] = cfg.send_interval;
  File f = SPIFFS.open("/config.json", "w");
  serializeJson(doc, f); f.close();
}` },
      { t:'Full production main.cpp', lang:'cpp', info:'',
        code:`#include <WiFiManager.h>
#include <ArduinoOTA.h>
#include <PubSubClient.h>
#include <esp_task_wdt.h>
#include <time.h>
#include "config.h"  // Config struct + load/save

// ── Globals ──
WiFiClient   wifiClient;
PubSubClient mqtt(wifiClient);
DHT          dht(4, DHT22);
bool         wifiReady = false;

// ── Health monitoring ──
void checkHealth() {
  size_t freeHeap  = ESP.getFreeHeap();
  size_t freeStack = uxTaskGetStackHighWaterMark(NULL);
  
  if (freeHeap < 20000) {
    Serial.printf("LOW HEAP: %d bytes!\\n", freeHeap);
    mqtt.publish("health/warning", "low_heap");
  }
  if (freeStack < 512) {
    Serial.printf("LOW STACK: %d words!\\n", freeStack);
    mqtt.publish("health/warning", "low_stack");
  }
}

// ── MQTT reconnect với backoff ──
int mqttBackoff = 1000;
void ensureMQTT() {
  if (mqtt.connected()) { mqttBackoff = 1000; return; }
  
  Serial.printf("MQTT reconnect (backoff %ds)... ", mqttBackoff/1000);
  if (mqtt.connect(cfg.device_id, nullptr, nullptr,
                   "status", 1, true, "offline")) {
    mqtt.publish("status", "online", true);
    mqtt.subscribe("devices/" + String(cfg.device_id) + "/#");
    Serial.println("OK");
    mqttBackoff = 1000;
  } else {
    Serial.println("FAIL");
    delay(mqttBackoff);
    mqttBackoff = min(mqttBackoff * 2, 60000);  // Max 60s
  }
}

void setup() {
  Serial.begin(115200);
  esp_task_wdt_init(30, true); // 30s watchdog
  esp_task_wdt_add(NULL);
  
  loadConfig();
  dht.begin();
  
  // WiFiManager: auto-connect hoặc mở AP
  WiFiManager wm;
  wm.setConfigPortalTimeout(120);
  if (!wm.autoConnect("AIoT-Node")) ESP.restart();
  wifiReady = true;
  
  // NTP
  configTime(7*3600, 0, "pool.ntp.org");
  
  // OTA
  ArduinoOTA.setHostname(cfg.device_id);
  ArduinoOTA.begin();
  
  // MQTT
  mqtt.setServer(cfg.mqtt_host, cfg.mqtt_port);
  mqtt.setCallback(onMessage);
}

unsigned long lastSend = 0, lastHealth = 0;
void loop() {
  esp_task_wdt_reset();  // Kick watchdog
  ArduinoOTA.handle();   // Check OTA
  
  if (wifiReady) {
    ensureMQTT();
    mqtt.loop();
  }
  
  unsigned long now = millis();
  
  // Health check mỗi 60s
  if (now - lastHealth >= 60000) {
    lastHealth = now; checkHealth();
  }
  
  // Sensor publish
  if (now - lastSend >= (unsigned long)cfg.send_interval * 1000) {
    lastSend = now;
    
    float t = dht.readTemperature();
    float h = dht.readHumidity();
    if (isnan(t)) { Serial.println("Sensor error!"); return; }
    
    // ISO8601 timestamp
    time_t rawtime; time(&rawtime);
    char ts[25]; strftime(ts, sizeof(ts), "%Y-%m-%dT%H:%M:%SZ", gmtime(&rawtime));
    
    char json[256];
    snprintf(json, sizeof(json),
      "{\\"device\\":\\"%s\\",\\"temp\\":%.1f,\\"hum\\":%.1f,\\"ts\\":\\"%s\\","
      "\\"rssi\\":%d,\\"heap\\":%u,\\"uptime\\":%lu}",
      cfg.device_id, t, h, ts, WiFi.RSSI(), ESP.getFreeHeap(), millis()/1000);
    
    mqtt.publish(("sensors/" + String(cfg.device_id)).c_str(), json);
  }
}` },
    ],
    tips:['Watchdog: PHẢI gọi esp_task_wdt_reset() ở đầu loop()','MQTT backoff: tránh spam reconnect khi broker down','Health check heap: <20KB cảnh báo, <8KB restart'],
    expect:'Node tự connect WiFi, tự reconnect MQTT, OTA update được, không crash 24h',
    verify:[
      {q:'Tắt WiFi router → ESP32 reconnect khi bật lại?', cmd:'Quan sát Serial log'},
      {q:'OTA update?', cmd:'Thay đổi firmware version, upload qua WiFi'},
      {q:'Watchdog recovery?', cmd:'Thêm while(1){} → kiểm tra tự restart sau 30s'},
    ],
  },

  {
    id:'l14', group:'Nâng cao', groupColor:'#ff6b35',
    diff:'hard', time:'180 phút', hw:'PC + Python',
    title:'Lab 14 — Train & Deploy TFLite từ đầu (Python → ESP32)',
    obj:'Toàn bộ pipeline: thu thập data thủ công → feature engineering → train TFLite → convert → deploy. Không dùng Edge Impulse.',
    theory:'Hiểu pipeline từ đầu giúp debug tốt hơn và tùy chỉnh cho use case đặc biệt. Feature engineering thủ công thường tốt hơn auto-feature cho domain-specific problems.',
    steps:[
      { t:'Thu thập data thủ công', lang:'cpp', info:'Upload lên ESP32, mở Serial Plotter:',
        code:`// Data collector: đọc DHT22 mỗi 100ms, 200 samples/class
// Class 0: ambient (không làm gì)
// Class 1: người thở vào sensor (nhiệt tăng, hum tăng)
// Class 2: phun nước gần sensor (hum tăng nhanh)

#include <DHT.h>
DHT dht(4, DHT22);
int count = 0;
const int CLASS = 0; // Thay 0,1,2 tương ứng từng lần thu

void setup() {
  Serial.begin(115200);
  dht.begin();
  delay(2000);
  Serial.println("timestamp,temp,hum,class");
}

void loop() {
  if (count >= 200) return; // 200 mẫu mỗi class
  float t = dht.readTemperature();
  float h = dht.readHumidity();
  if (!isnan(t)) {
    Serial.printf("%d,%.2f,%.2f,%d\\n", count++, t, h, CLASS);
  }
  delay(100);
}` },
      { t:'Feature engineering & Train (Python)', lang:'python', info:'Chạy trên Google Colab hoặc máy tính:',
        code:`import numpy as np
import pandas as pd
import tensorflow as tf
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder

# Load data từ 3 class (cat thủ công từ Serial output)
df = pd.read_csv('all_data.csv')
print(df['class'].value_counts())

# Feature engineering: sliding window của 10 samples
WINDOW = 10
def make_windows(df, window=WINDOW):
    X, y = [], []
    for i in range(len(df) - window):
        w = df.iloc[i:i+window]
        # Statistical features per window
        feats = [
            w['temp'].mean(), w['temp'].std(), w['temp'].max() - w['temp'].min(),
            w['hum'].mean(),  w['hum'].std(),  w['hum'].max() - w['hum'].min(),
            # Rate of change
            (w['temp'].iloc[-1] - w['temp'].iloc[0]) / window,
            (w['hum'].iloc[-1] - w['hum'].iloc[0]) / window,
        ]
        X.append(feats); y.append(df.iloc[i+window]['class'])
    return np.array(X), np.array(y)

X, y = make_windows(df)
X_tr, X_te, y_tr, y_te = train_test_split(X, y, test_size=0.2)

# Normalize
mean, std = X_tr.mean(0), X_tr.std(0)
X_tr_n = (X_tr - mean) / (std + 1e-8)
X_te_n = (X_te - mean) / (std + 1e-8)

# Model
model = tf.keras.Sequential([
    tf.keras.layers.Input(shape=(8,)),
    tf.keras.layers.Dense(16, activation='relu'),
    tf.keras.layers.Dropout(0.2),
    tf.keras.layers.Dense(8,  activation='relu'),
    tf.keras.layers.Dense(3,  activation='softmax'),
])
model.compile('adam', 'sparse_categorical_crossentropy', ['accuracy'])
model.fit(X_tr_n, y_tr, 100, 32, validation_data=(X_te_n, y_te))

# Convert TFLite INT8
cvt = tf.lite.TFLiteConverter.from_keras_model(model)
cvt.optimizations = [tf.lite.Optimize.DEFAULT]
tflite_model = cvt.convert()

# In norm params để dùng trên ESP32
print("MEAN =", list(np.round(mean, 4)))
print("STD  =", list(np.round(std,  4)))
print(f"Model: {len(tflite_model)} bytes")

# Tạo C header
hex_data = ', '.join(f'0x{b:02x}' for b in tflite_model)
with open('model.h', 'w') as f:
    f.write(f'unsigned char model_data[] = {{{hex_data}}}; ')
    f.write(f'unsigned int model_len = {len(tflite_model)};')` },
      { t:'Inference trên ESP32', lang:'cpp', info:'Sau khi copy model.h vào project:',
        code:`#include <TensorFlowLite_ESP32.h>
#include "model.h"
#include "tensorflow/lite/micro/all_ops_resolver.h"
#include "tensorflow/lite/micro/micro_interpreter.h"

// Paste từ Python output:
const float MEAN[] = {25.1, 0.3, 0.8, 62.4, 1.2, 2.1, 0.01, 0.05};
const float STD[]  = { 1.2, 0.4, 1.1,  4.3, 0.8, 1.5, 0.05, 0.12};

const char* LABELS[] = {"ambient", "breath", "water_spray"};

const int ARENA_SIZE = 8192;
uint8_t arena[ARENA_SIZE];
tflite::MicroInterpreter* interp;
DHT dht(4, DHT22);

float window[10][2];  // [time][temp, hum]
int winIdx = 0;

float extractFeature(int feat_idx) {
  float vals[10];
  for(int i=0;i<10;i++) vals[i] = window[i][feat_idx < 3 ? 0 : 1];
  int fi = feat_idx % 3;
  float mn=0, mn2=0, mx=-999, mi=999;
  for(int i=0;i<10;i++){mn+=vals[i];if(vals[i]>mx)mx=vals[i];if(vals[i]<mi)mi=vals[i];}
  mn/=10;
  if(fi==0) return mn;
  if(fi==1){for(int i=0;i<10;i++){float d=vals[i]-mn;mn2+=d*d;}return sqrt(mn2/10);}
  return mx - mi; // range
}

void loop() {
  float t=dht.readTemperature(), h=dht.readHumidity();
  if(isnan(t)) return;
  window[winIdx][0]=t; window[winIdx][1]=h;
  winIdx=(winIdx+1)%10;
  
  // Extract 8 features
  TfLiteTensor* in = interp->input(0);
  float feats[8];
  for(int i=0;i<6;i++) feats[i] = (extractFeature(i)-MEAN[i])/(STD[i]+1e-8f);
  // rate of change
  feats[6]=(window[(winIdx+9)%10][0]-window[winIdx][0])/10;
  feats[7]=(window[(winIdx+9)%10][1]-window[winIdx][1])/10;
  for(int i=6;i<8;i++) feats[i]=(feats[i]-MEAN[i])/(STD[i]+1e-8f);
  for(int i=0;i<8;i++) in->data.f[i] = feats[i];
  
  interp->Invoke();
  TfLiteTensor* out = interp->output(0);
  
  int best=0;
  for(int i=1;i<3;i++) if(out->data.f[i]>out->data.f[best]) best=i;
  Serial.printf("[%s] %.1fC %.1f%%  Pred: %s (%.0f%%)\\n",
    labels[best], t, h, LABELS[best], out->data.f[best]*100);
  delay(100);
}` },
    ],
    tips:['Sliding window giúp capture dynamics (rate of change) — quan trọng hơn static values','Thu thập ít nhất 30 mẫu mỗi class để tránh overfitting','Debug: in feature values trước khi normalize để phát hiện encoding lỗi'],
    expect:'Phân biệt được 3 trạng thái môi trường với accuracy >85%',
    verify:[
      {q:'Python accuracy > 85%?', cmd:'Training log: val_accuracy'},
      {q:'ESP32 inference đúng?', cmd:'Thử từng scenario: không làm gì / thở vào / phun nước'},
    ],
  },

  {
    id:'l15', group:'Nâng cao', groupColor:'#ff6b35',
    diff:'hard', time:'360 phút', hw:'2+ ESP32 + Cloud',
    title:'Lab 15 — Federated Learning đơn giản với 3 ESP32',
    obj:'Implement Federated Learning miniature: 3 ESP32 train local model trên data khác nhau, gửi weights về aggregation server (Python), server average weights, broadcast model mới.',
    theory:'Federated Learning: mỗi device train local → gửi gradient/weights → server FedAvg → broadcast global model. Data KHÔNG rời thiết bị. Privacy-preserving bằng design.',
    steps:[
      { t:'Scenario setup', lang:'', info:'',
        code:`3 ESP32 nodes:
  Node 1: phòng lạnh (temp 18-22°C) — 200 training samples
  Node 2: phòng thường (22-28°C)     — 200 training samples
  Node 3: phòng nóng (28-35°C)       — 200 training samples

Mỗi node train model: classify temp range của phòng mình
Global model: classify cả 3 phòng chính xác

Round FL:
  1. Server → broadcast initial model (random weights)
  2. ESP32[i] → fine-tune local trên data của mình (5 epochs)
  3. ESP32[i] → gửi weights lên server qua MQTT
  4. Server → FedAvg: global_w = mean(w1, w2, w3)
  5. Server → broadcast global model
  6. Lặp lại 10+ rounds` },
      { t:'ESP32 Local Training (simplified)', lang:'cpp', info:'',
        code:`// Simplified: neural network weights stored in SPIFFS
// Training: gradient descent qua 5 epochs

#include <ArduinoJson.h>

// Mini NN: 2 inputs (temp, hum) → 4 hidden → 3 outputs
float W1[2][4], b1[4];  // Input → hidden
float W2[4][3], b2[3];  // Hidden → output

float relu(float x)    { return x > 0 ? x : 0; }
float sigmoid(float x) { return 1.0f / (1.0f + exp(-x)); }

// Forward pass
void forward(float* in, float* hidden, float* out) {
  // Layer 1
  for(int j=0;j<4;j++) {
    hidden[j] = b1[j];
    for(int i=0;i<2;i++) hidden[j] += in[i]*W1[i][j];
    hidden[j] = relu(hidden[j]);
  }
  // Layer 2
  float sum = 0;
  for(int k=0;k<3;k++) {
    out[k] = b2[k];
    for(int j=0;j<4;j++) out[k] += hidden[j]*W2[j][k];
    out[k] = exp(out[k]);
    sum += out[k];
  }
  for(int k=0;k<3;k++) out[k] /= sum; // Softmax
}

// Publish weights to server
void publishWeights() {
  JsonDocument doc;
  // Serialize W1, b1, W2, b2 as arrays
  JsonArray w1_arr = doc.createNestedArray("W1");
  for(int i=0;i<2;i++) for(int j=0;j<4;j++) w1_arr.add(W1[i][j]);
  // ... similarly for b1, W2, b2
  
  char buf[2048]; serializeJson(doc, buf);
  mqtt.publish(("fl/weights/" + String(NODE_ID)).c_str(), buf);
  Serial.println("Weights published for aggregation");
}` },
      { t:'Python FedAvg Server', lang:'python', info:'Chạy trên PC/Raspberry Pi:',
        code:`import paho.mqtt.client as mqtt
import json, numpy as np
from collections import defaultdict

broker = "localhost"
received_weights = {}
NUM_NODES = 3

def fedavg(weights_list):
    """FedAveraging: element-wise mean của tất cả weights"""
    avg = {}
    for key in weights_list[0].keys():
        avg[key] = np.mean([np.array(w[key]) for w in weights_list], axis=0).tolist()
    return avg

def on_message(client, userdata, msg):
    topic = msg.topic
    if "fl/weights/" in topic:
        node_id = topic.split("/")[-1]
        weights = json.loads(msg.payload)
        received_weights[node_id] = weights
        print(f"Received weights from {node_id}: {len(received_weights)}/{NUM_NODES}")
        
        if len(received_weights) >= NUM_NODES:
            # All weights received → FedAvg
            global_weights = fedavg(list(received_weights.values()))
            received_weights.clear()
            
            # Broadcast to all nodes
            payload = json.dumps(global_weights)
            client.publish("fl/global_model", payload)
            print(f"FedAvg done → broadcast global model ({len(payload)} bytes)")

client = mqtt.Client("fl_server")
client.on_message = on_message
client.connect(broker)
client.subscribe("fl/weights/#")
client.loop_forever()` },
    ],
    tips:['FedAvg đơn giản nhất: arithmetic mean của weights','Trong thực tế: weighted avg theo dataset size của mỗi node','Cải tiến: FedProx (regularization), Secure Aggregation (mã hóa)'],
    expect:'Sau 10 rounds, global model classify cả 3 phòng tốt hơn từng local model',
    verify:[
      {q:'Server nhận đủ 3 weights?', cmd:'Python log: Received 3/3'},
      {q:'Global model broadcast?', cmd:'ESP32 nhận "fl/global_model" topic'},
      {q:'Accuracy cải thiện?', cmd:'So sánh local-only vs federated accuracy'},
    ],
  },
]

// Merge LAB_GROUPS and LABS
export const ALL_LAB_GROUPS = [
  ...LAB_GROUPS,
  { id:'FPGA', color:'#f472b6', count:2 },
  { id:'Nâng cao', color:'#ff6b35', count:5 },
]

export const ALL_LABS = [...LABS, ...LABS_EXTRA]
