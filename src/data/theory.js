export const THEORY = [
  /* ═══════════════════════════════════════════════════════
     CHƯƠNG 1 — NỀN TẢNG AIoT
  ═══════════════════════════════════════════════════════ */
  {
    id:'c1', title:'Nền tảng AIoT', color:'#00d4ff',
    sections:[
      {
        id:'c1s1', title:'AIoT là gì?',
        content:`## AIoT — Artificial Intelligence of Things

**AIoT** là sự hội tụ của **AI (Trí tuệ nhân tạo)** và **IoT (Internet vạn vật)**, tạo ra hệ sinh thái thông minh có khả năng cảm nhận, học hỏi và hành động tự động mà không cần kết nối cloud liên tục.

### Tại sao AIoT là xu thế tất yếu?

Năm 2025, có hơn **18 tỷ** thiết bị IoT kết nối toàn cầu. Lượng dữ liệu sinh ra từ cảm biến đạt **79 Zettabyte/năm**. Gửi toàn bộ dữ liệu lên cloud là bất khả thi — AIoT xử lý tại chỗ.

### So sánh kiến trúc

| Tiêu chí | Cloud IoT | Edge IoT | AIoT (Edge AI) |
|----------|-----------|----------|----------------|
| Xử lý | Server cloud | Gateway | Tại thiết bị |
| Độ trễ | 100ms – 2s | 10–100ms | < 5ms |
| Băng thông | Rất cao | Cao | Thấp |
| Hoạt động offline | Không | Giới hạn | Đầy đủ |
| Bảo mật dữ liệu | Thấp | Trung bình | Cao |
| Chi phí vận hành | Cao | TB | Thấp |

### Kiến trúc 3 tầng AIoT

\`\`\`
[Cloud Layer]      Training, Global model, BI Dashboard
      |
[Edge/Gateway]     Pre-processing, Model update, Aggregation
      |
[Device Layer]     Inference, Sensing, Actuation  <-- Đây là trọng tâm AIoT
      |
[Physical World]   Cảm biến, Camera, Micro, Motor, Relay
\`\`\`

### Ứng dụng thực tiễn 2024–2025

- **Smart Agriculture**: ESP32 + soil sensor + AI dự báo tưới nước tiết kiệm 40% nước
- **Industrial Predictive Maintenance**: Phát hiện lỗi động cơ 7 ngày trước khi hỏng
- **Smart Retail**: Camera AI đếm người, nhận dạng hành vi mua hàng
- **Healthcare Wearable**: Phát hiện ngã, đo ECG, dự báo cơn động kinh
- **Smart City**: Đèn đường thông minh, quản lý rác thải, đỗ xe tự động`
      },
      {
        id:'c1s2', title:'Hệ sinh thái phần cứng',
        content:`## Hệ sinh thái phần cứng AIoT

### Bảng so sánh toàn diện

| Platform | CPU | RAM | Flash | WiFi/BT | AI Support | Giá VND |
|----------|-----|-----|-------|---------|-----------|---------|
| Arduino Uno R3 | 16MHz AVR | 2KB | 32KB | Không | Không | ~120K |
| Arduino Nano 33 BLE Sense | 64MHz Cortex-M4 | 256KB | 1MB | BLE 5 | TFLite Micro | ~600K |
| ESP8266 NodeMCU | 80/160MHz | 80KB | 4MB | 802.11n | Giới hạn | ~55K |
| ESP32 WROOM | 240MHz dual | 520KB | 4MB | WiFi+BT | TFLite Micro | ~130K |
| ESP32-S3 | 240MHz dual | 512KB | 8MB | WiFi6+BT5 | Vector ext | ~160K |
| ESP32-CAM | 240MHz dual | 520KB | 4MB | WiFi | Face detect | ~80K |
| Raspberry Pi Zero 2W | 1GHz quad | 512MB | — | WiFi+BT | TFLite | ~350K |
| Raspberry Pi 4B 4GB | 1.8GHz quad | 4GB | — | WiFi+BT | OpenCV+TFLite | ~1.8M |
| NVIDIA Jetson Nano | 1.43GHz quad | 4GB | — | — | CUDA inference | ~3.5M |

### ESP32 — Lựa chọn tốt nhất cho AIoT học thuật

\`\`\`
ESP32 Highlights:
├── Dual-core Xtensa LX6 @ 240MHz
├── 520KB SRAM + 4MB Flash
├── WiFi 802.11 b/g/n + Bluetooth 4.2/BLE
├── 34 GPIO programmable
├── ADC 12-bit (18 channels)
├── DAC 8-bit (2 channels)  
├── 4× SPI, 2× I2C, 3× UART, 16× PWM
├── Hall sensor, Touch sensor (10 pins)
├── FreeRTOS built-in
└── TFLite Micro support
\`\`\`

### Cảm biến phổ biến theo ứng dụng

| Ứng dụng | Cảm biến | Giao thức | Độ chính xác |
|---------|---------|-----------|-------------|
| Nhiệt độ/Độ ẩm | DHT22, BME280 | 1-Wire / I2C | ±0.5°C / ±2% |
| Chất lượng KK | MQ135, SGP30, PMS5003 | ADC / I2C | ppm level |
| Khoảng cách | HC-SR04, VL53L1X | GPIO / I2C | 2mm accuracy |
| Gia tốc/Gyro | MPU6050, ICM-42688 | I2C / SPI | 16-bit |
| Camera | OV2640 (ESP32-CAM) | DVP | 2MP |
| GPS | NEO-M8N | UART | 2.5m CEP |
| Ánh sáng | BH1750, TSL2591 | I2C | 0.01 lux |
| Soil moisture | Capacitive v1.2 | ADC | % relative |

### FPGA trong AIoT

FPGA cung cấp **true parallelism** — thực hiện nhiều phép tính đồng thời, lý tưởng cho:
- Xử lý CNN layer parallel
- Digital signal processing (FFT, FIR filter)
- High-speed data acquisition

**Board học tập**: Tang Nano 9K (~350K), Basys 3 (~3M), DE0-Nano (~2M)`
      },
      {
        id:'c1s3', title:'Giao thức IoT',
        content:`## Giao thức truyền thông IoT

### Tầng Physical & Link

| Giao thức | Range | Speed | Power | Topology | Use case |
|-----------|-------|-------|-------|---------|---------|
| WiFi 4 (802.11n) | 100m | 300Mbps | Cao | Star | Camera, streaming |
| BLE 5.0 | 40m | 2Mbps | Rất thấp | Mesh | Wearable, beacon |
| Zigbee (802.15.4) | 75m | 250Kbps | Rất thấp | Mesh | Smart home |
| Z-Wave | 30m | 100Kbps | Thấp | Mesh | Smart home (EU) |
| LoRa / LoRaWAN | 15km | 50Kbps | Cực thấp | Star | Smart farm, city |
| NB-IoT | 10km | 250Kbps | Thấp | Star | Industrial |
| Sigfox | 50km | 100bps | Cực thấp | Star | Asset tracking |
| RS-485 | 1200m | 10Mbps | Thấp | Bus | Industrial |

### MQTT Protocol — Chuẩn IoT số 1

\`\`\`
Client (ESP32)  ←→  Broker (Mosquitto)  ←→  Subscriber (Dashboard)

QoS Levels:
├── QoS 0: Fire-and-forget (tốc độ cao, có thể mất)
├── QoS 1: At least once (đảm bảo nhận, có thể trùng)
└── QoS 2: Exactly once (đảm bảo đúng 1 lần, chậm nhất)

Topic convention:
<building>/<floor>/<room>/<device>/<measurement>
home/1/bedroom/dht22/temperature
factory/a/line1/motor1/vibration
farm/zone1/sensor01/soil_moisture
\`\`\`

### HTTP REST vs MQTT vs CoAP vs WebSocket

| | HTTP REST | MQTT | CoAP | WebSocket |
|--|-----------|------|------|-----------|
| Mô hình | Req/Res | Pub/Sub | Req/Res | Full-duplex |
| Header size | ~200-800B | 2B | 4B | ~50B |
| Phù hợp | Web API | IoT sensor | Constrained | Dashboard |
| Broker cần | Không | Có | Có | Không |

### Giao thức Hardware: I2C, SPI, UART, 1-Wire

**I2C**: 2 dây (SDA, SCL), tới 127 devices, 400KHz standard
\`\`\`
Master: ESP32  →  Slave 1: BME280 (0x76)
                → Slave 2: MPU6050 (0x68)
                → Slave 3: SSD1306 OLED (0x3C)
\`\`\`

**SPI**: 4 dây (MOSI, MISO, SCK, CS), tốc độ 80MHz, full-duplex
\`\`\`
Dùng cho: SD card, TFT display, LoRa SX1276, ADC ngoài
\`\`\`

**UART**: 2 dây (TX, RX), async, baud rate 9600–921600
\`\`\`
Dùng cho: GPS NEO-M8N, GSM SIM800, Debug console, Bluetooth HC-05
\`\`\``
      },
    ]
  },

  /* ═══════════════════════════════════════════════════════
     CHƯƠNG 2 — LẬP TRÌNH NHÚNG
  ═══════════════════════════════════════════════════════ */
  {
    id:'c2', title:'Lập trình nhúng', color:'#00e676',
    sections:[
      {
        id:'c2s1', title:'Arduino & C++ nền tảng',
        content:`## Lập trình Arduino/ESP32 từ nền tảng

### Cấu trúc chương trình

\`\`\`cpp
// ── 1. Include thư viện ──
#include <Arduino.h>
#include <DHT.h>
#include <ArduinoJson.h>

// ── 2. Định nghĩa hằng số ──
#define LED_PIN     2    // Tránh "magic numbers"
#define DHT_PIN     4
#define THRESHOLD   30.0f

// ── 3. Biến toàn cục (hạn chế) ──
DHT dht(DHT_PIN, DHT22);
unsigned long lastReadMs = 0;

// ── 4. Hàm helper ──
float readTemperature() {
  float t = dht.readTemperature();
  return isnan(t) ? -999.0f : t;
}

// ── 5. Setup: chạy 1 lần ──
void setup() {
  Serial.begin(115200);
  delay(100);
  dht.begin();
  pinMode(LED_PIN, OUTPUT);
  Serial.println(F("AIoT System Ready")); // F() lưu string vào Flash
}

// ── 6. Loop: chạy liên tục ──
void loop() {
  const unsigned long now = millis();
  
  // Non-blocking: đọc mỗi 2 giây
  if (now - lastReadMs >= 2000UL) {
    lastReadMs = now;
    
    const float temp = readTemperature();
    const float hum  = dht.readHumidity();
    
    if (temp > -999.0f) {
      Serial.printf("T:%.1f C  H:%.1f%%\\n", temp, hum);
      digitalWrite(LED_PIN, temp > THRESHOLD);
    }
  }
  
  // Các task khác vẫn chạy song song ở đây
}
\`\`\`

### Kiểu dữ liệu trên MCU

| Kiểu | Bytes | Phạm vi | Dùng cho |
|------|-------|---------|---------|
| bool | 1 | true/false | Flag |
| uint8_t | 1 | 0–255 | Byte data, pin state |
| int16_t | 2 | -32768–32767 | Sensor raw value |
| uint32_t | 4 | 0–4.29B | millis(), timestamp |
| float | 4 | 1.2e-38–3.4e38 | Sensor measurement |
| char[] | n | ASCII | String (prefer over String) |

### GPIO Patterns

\`\`\`cpp
// INPUT_PULLUP: nút nhấn không cần điện trở ngoài
// Logic ngược: LOW khi nhấn, HIGH khi thả
pinMode(BUTTON_PIN, INPUT_PULLUP);
bool pressed = (digitalRead(BUTTON_PIN) == LOW);

// PWM: điều chỉnh độ sáng LED, tốc độ motor
// ESP32 dùng ledcWrite thay analogWrite
ledcSetup(0, 5000, 8);      // channel 0, 5KHz, 8-bit
ledcAttachPin(LED_PIN, 0);
ledcWrite(0, 128);           // 50% duty cycle

// ADC: đọc cảm biến analog (ESP32: 12-bit = 0-4095)
int raw = analogRead(SENSOR_PIN);
float voltage = raw * 3.3f / 4095.0f;
\`\`\`

### Interrupt & Non-blocking Pattern

\`\`\`cpp
// Interrupt: phản hồi tức thời không cần polling
volatile bool motionFlag = false; // volatile bắt buộc!

void IRAM_ATTR onMotion() {  // IRAM_ATTR: hàm chạy trong RAM
  motionFlag = true;
}

void setup() {
  attachInterrupt(digitalPinToInterrupt(PIR_PIN), onMotion, RISING);
}

void loop() {
  if (motionFlag) {
    motionFlag = false;      // Clear flag ngay
    handleMotion();          // Xử lý ngoài ISR
  }
}

// Debounce nút nhấn: tránh đọc nhiễu cơ học
class Button {
  int pin; unsigned long lastMs; bool state;
public:
  Button(int p) : pin(p), lastMs(0), state(false) {
    pinMode(p, INPUT_PULLUP);
  }
  bool pressed() {
    if (digitalRead(pin) == LOW && millis()-lastMs > 50) {
      lastMs = millis(); return true;
    }
    return false;
  }
};
\`\`\``
      },
      {
        id:'c2s2', title:'FreeRTOS & Multitasking',
        content:`## FreeRTOS trên ESP32

### Tại sao cần RTOS?

Hệ thống AIoT cần làm nhiều việc đồng thời:
- Đọc 5 cảm biến mỗi 100ms
- Gửi MQTT mỗi 5 giây
- Chạy inference AI khi có trigger
- Phục vụ web server
- Xử lý interrupt

\`\`\`cpp
#include <freertos/FreeRTOS.h>
#include <freertos/task.h>
#include <freertos/semphr.h>
#include <freertos/queue.h>

// ── Shared data structure ──
struct SensorData {
  float temperature;
  float humidity;
  uint32_t timestamp;
};

// ── Mutex bảo vệ shared data ──
SemaphoreHandle_t dataMutex;
SensorData latestData;

// ── Queue để truyền data giữa tasks ──
QueueHandle_t sensorQueue;

// ── Task đọc cảm biến (Core 0) ──
void sensorTask(void* param) {
  SensorData data;
  for (;;) {
    data.temperature = dht.readTemperature();
    data.humidity    = dht.readHumidity();
    data.timestamp   = millis();
    
    // Gửi vào queue (không block nếu đầy)
    xQueueSend(sensorQueue, &data, 0);
    
    // Cập nhật shared state
    if (xSemaphoreTake(dataMutex, pdMS_TO_TICKS(10)) == pdTRUE) {
      latestData = data;
      xSemaphoreGive(dataMutex);
    }
    
    vTaskDelay(pdMS_TO_TICKS(500)); // Yield 500ms
  }
}

// ── Task gửi MQTT (Core 1) ──
void mqttTask(void* param) {
  SensorData data;
  for (;;) {
    // Chờ data từ queue (block tối đa 6 giây)
    if (xQueueReceive(sensorQueue, &data, pdMS_TO_TICKS(6000)) == pdTRUE) {
      char json[128];
      snprintf(json, sizeof(json),
        "{\\"temp\\":%.1f,\\"hum\\":%.1f,\\"ts\\":%lu}",
        data.temperature, data.humidity, data.timestamp);
      
      if (mqttClient.connected())
        mqttClient.publish("sensors/data", json);
    }
  }
}

// ── Task AI inference (Core 0) ──
void aiTask(void* param) {
  for (;;) {
    // Đợi notification từ sensor task
    ulTaskNotifyTake(pdTRUE, portMAX_DELAY);
    runInference();
  }
}

void setup() {
  dataMutex   = xSemaphoreCreateMutex();
  sensorQueue = xQueueCreate(10, sizeof(SensorData));
  
  // Core 0: sensor + AI, Core 1: WiFi/MQTT
  xTaskCreatePinnedToCore(sensorTask, "Sensor", 4096, NULL, 2, NULL, 0);
  xTaskCreatePinnedToCore(mqttTask,   "MQTT",   8192, NULL, 1, NULL, 1);
  xTaskCreatePinnedToCore(aiTask,     "AI",     8192, NULL, 1, NULL, 0);
}
\`\`\``
      },
      {
        id:'c2s3', title:'WiFi, MQTT & HTTP',
        content:`## Kết nối ESP32 — WiFi, MQTT, HTTP

### WiFiManager: Cấu hình không cần hard-code

\`\`\`cpp
#include <WiFiManager.h>

void setup() {
  WiFiManager wm;
  wm.setConfigPortalTimeout(120); // 2 phút rồi reboot
  
  // Custom param: MQTT server
  WiFiManagerParameter mqttParam("mqtt", "MQTT Host", "192.168.1.100", 20);
  wm.addParameter(&mqttParam);
  
  // Tự động kết nối, nếu fail mở AP "AIoT-Setup"
  if (!wm.autoConnect("AIoT-Setup", "12345678")) {
    ESP.restart();
  }
  
  String mqttHost = mqttParam.getValue();
}
\`\`\`

### MQTT với reconnect tự động

\`\`\`cpp
#include <PubSubClient.h>
#include <ArduinoJson.h>

const char* MQTT_HOST = "192.168.1.100";
const int   MQTT_PORT = 1883;
const char* CLIENT_ID = "esp32-" + String((uint32_t)ESP.getEfuseMac(), HEX);

WiFiClient   wifiClient;
PubSubClient mqtt(wifiClient);

void onMessage(char* topic, byte* payload, unsigned int len) {
  // Parse JSON command
  JsonDocument doc;
  deserializeJson(doc, payload, len);
  
  const char* cmd = doc["cmd"];
  if (strcmp(cmd, "reboot") == 0) ESP.restart();
  if (strcmp(cmd, "led") == 0) digitalWrite(LED_PIN, doc["val"].as<int>());
}

bool ensureMQTT() {
  if (mqtt.connected()) return true;
  
  Serial.print("MQTT connecting...");
  if (mqtt.connect(CLIENT_ID.c_str(), "user", "pass",
                   "devices/status", 1, true, "offline")) {
    mqtt.publish("devices/status", "online", true); // Retained
    mqtt.subscribe("devices/esp32/cmd");
    Serial.println(" OK");
    return true;
  }
  Serial.println(" FAIL rc=" + String(mqtt.state()));
  return false;
}

void publishSensorData(float t, float h) {
  JsonDocument doc;
  doc["temperature"] = serialized(String(t, 1));
  doc["humidity"]    = serialized(String(h, 1));
  doc["rssi"]        = WiFi.RSSI();
  doc["heap"]        = ESP.getFreeHeap();
  doc["uptime"]      = millis() / 1000;
  
  char buf[200];
  serializeJson(doc, buf);
  mqtt.publish("sensors/env", buf);
}
\`\`\`

### HTTP REST Client và Server

\`\`\`cpp
// ── HTTP Client: gửi data lên server ──
#include <HTTPClient.h>

void postToServer(float temp) {
  HTTPClient http;
  http.begin("https://api.example.com/sensors");
  http.addHeader("Content-Type", "application/json");
  http.addHeader("Authorization", "Bearer YOUR_TOKEN");
  
  String body = "{\\"temp\\":" + String(temp, 1) + "}";
  int code = http.POST(body);
  
  if (code == 200) {
    Serial.println(http.getString());
  }
  http.end();
}

// ── HTTP Server: dashboard đơn giản ──
#include <WebServer.h>
WebServer server(80);

void setup() {
  server.on("/api/sensors", HTTP_GET, []() {
    JsonDocument doc;
    doc["temp"] = readTemp();
    doc["hum"]  = readHum();
    String json; serializeJson(doc, json);
    server.send(200, "application/json", json);
  });
  
  server.on("/", HTTP_GET, []() {
    server.send(200, "text/html", getDashboardHTML());
  });
  
  server.begin();
}
\`\`\``
      },
    ]
  },

  /* ═══════════════════════════════════════════════════════
     CHƯƠNG 3 — CẢM BIẾN & ACTUATOR
  ═══════════════════════════════════════════════════════ */
  {
    id:'c3', title:'Cảm biến & Actuator', color:'#00e676',
    sections:[
      {
        id:'c3s1', title:'Cảm biến môi trường',
        content:`## Cảm biến môi trường

### BME280 — 3-in-1 chuyên nghiệp

\`\`\`cpp
#include <Adafruit_BME280.h>

Adafruit_BME280 bme;

void setup() {
  Wire.begin(21, 22); // SDA=21, SCL=22
  if (!bme.begin(0x76)) {
    Serial.println("BME280 not found!");
    while(1);
  }
  // Cấu hình cho weather monitoring
  bme.setSampling(Adafruit_BME280::MODE_FORCED,
    Adafruit_BME280::SAMPLING_X1,  // temperature
    Adafruit_BME280::SAMPLING_X1,  // pressure
    Adafruit_BME280::SAMPLING_X1,  // humidity
    Adafruit_BME280::FILTER_OFF);
}

struct EnvData {
  float temp;   // °C
  float hum;    // %RH
  float press;  // hPa
  float alt;    // meters (approx)
};

EnvData readEnv() {
  bme.takeForcedMeasurement();
  return {
    bme.readTemperature(),
    bme.readHumidity(),
    bme.readPressure() / 100.0f,
    bme.readAltitude(1013.25f)
  };
}
\`\`\`

### Cảm biến chất lượng không khí

\`\`\`cpp
// SGP30: CO2 + TVOC qua I2C (chính xác hơn MQ series)
#include <Adafruit_SGP30.h>
Adafruit_SGP30 sgp;
sgp.begin();
sgp.IAQmeasure();
// sgp.eCO2: 400-60000 ppm (400 = fresh air)
// sgp.TVOC: 0-60000 ppb

// PMS5003: bụi PM1.0, PM2.5, PM10 (UART)
// Đọc 32 bytes packet mỗi giây
struct PMSData {
  uint16_t pm1_0, pm2_5, pm10;
};
\`\`\`

### Cảm biến đặc biệt

\`\`\`cpp
// MAX30105: Heart rate + SpO2
#include <MAX3010x.h>
MAX30105 particleSensor;
particleSensor.begin(Wire, I2C_SPEED_FAST);
particleSensor.setup();
long irValue = particleSensor.getIR();
// Dùng thư viện SparkFun HeartRate để tính BPM

// PZEM-004T: Đo điện (AC) - Voltage, Current, Power, Energy
#include <PZEM004Tv30.h>
PZEM004Tv30 pzem(Serial2, 16, 17); // RX, TX
float voltage = pzem.voltage();
float current = pzem.current();
float power   = pzem.power();
float energy  = pzem.energy();
\`\`\``
      },
      {
        id:'c3s2', title:'Actuator & Điều khiển',
        content:`## Actuator — Điều khiển thế giới vật lý

### Relay điều khiển tải AC/DC

\`\`\`cpp
// Relay module: active LOW (phổ biến nhất)
#define RELAY1_PIN 26
#define RELAY2_PIN 27

class RelayController {
  int pins[4]; int count;
public:
  RelayController(int p[], int n) : count(n) {
    for(int i=0;i<n;i++) {
      pins[i] = p[i];
      pinMode(p[i], OUTPUT);
      digitalWrite(p[i], HIGH); // Mặc định OFF (active LOW)
    }
  }
  void on(int idx)  { if(idx<count) digitalWrite(pins[idx], LOW);  }
  void off(int idx) { if(idx<count) digitalWrite(pins[idx], HIGH); }
  void toggle(int idx) {
    if(idx<count) digitalWrite(pins[idx], !digitalRead(pins[idx]));
  }
};

int relayPins[] = {26, 27, 14, 12};
RelayController relays(relayPins, 4);
\`\`\`

### Motor DC & Stepper

\`\`\`cpp
// L298N H-Bridge: điều khiển motor DC 2 chiều
#define ENA 5   // PWM speed
#define IN1 18
#define IN2 19

void motorForward(int speed) {  // 0-255
  ledcWrite(0, speed);
  digitalWrite(IN1, HIGH);
  digitalWrite(IN2, LOW);
}
void motorBackward(int speed) {
  ledcWrite(0, speed);
  digitalWrite(IN1, LOW);
  digitalWrite(IN2, HIGH);
}
void motorStop() { ledcWrite(0, 0); }

// Servo Motor
#include <ESP32Servo.h>
Servo myServo;
myServo.attach(SERVO_PIN, 500, 2400); // min/max pulse us
myServo.write(90); // 0-180 độ
\`\`\`

### Màn hình OLED SSD1306

\`\`\`cpp
#include <Adafruit_SSD1306.h>
Adafruit_SSD1306 display(128, 64, &Wire, -1);

void displayData(float temp, float hum, bool alert) {
  display.clearDisplay();
  
  // Header
  display.setTextSize(1);
  display.setTextColor(WHITE);
  display.setCursor(0, 0);
  display.println("AIoT Monitor");
  display.drawLine(0, 10, 127, 10, WHITE);
  
  // Temperature (large)
  display.setTextSize(2);
  display.setCursor(0, 16);
  display.printf("%.1fC", temp);
  
  // Humidity
  display.setTextSize(1);
  display.setCursor(0, 40);
  display.printf("Hum: %.1f%%", hum);
  
  // Alert
  if (alert) {
    display.setCursor(70, 40);
    display.setTextColor(BLACK, WHITE); // Invert
    display.print(" ALERT ");
  }
  
  display.display();
}
\`\`\``
      },
    ]
  },

  /* ═══════════════════════════════════════════════════════
     CHƯƠNG 4 — TINYML & EDGE AI
  ═══════════════════════════════════════════════════════ */
  {
    id:'c4', title:'TinyML & Edge AI', color:'#a855f7',
    sections:[
      {
        id:'c4s1', title:'TensorFlow Lite Micro',
        content:`## TensorFlow Lite Micro (TFLM)

### Workflow TinyML đầy đủ

\`\`\`
Bước 1: Thu thập data  →  Sensor, Camera, Microphone
Bước 2: Tiền xử lý    →  Normalize, FFT, MFCC, resize
Bước 3: Train model    →  Python + TF/Keras trên PC/Colab
Bước 4: Optimize       →  Quantize (float32 → int8), prune
Bước 5: Convert        →  TFLite → C array (xxd -i)
Bước 6: Deploy         →  Copy vào Arduino library
Bước 7: Inference      →  Gọi tflite::MicroInterpreter
Bước 8: Post-process   →  Softmax, threshold, action
\`\`\`

### Train model phân loại 3 class

\`\`\`python
import tensorflow as tf
import numpy as np

# Giả sử: phân loại nhiệt độ cao/thấp/bình thường
# Dữ liệu từ 3 cảm biến: temp, hum, co2
X = np.load('sensor_data.npy')    # shape: (N, 3)
y = np.load('labels.npy')          # shape: (N,) values: 0,1,2

# Chuẩn hóa
mean, std = X.mean(0), X.std(0)
X_norm = (X - mean) / (std + 1e-8)

# Split
split = int(0.8 * len(X))
X_tr, X_val = X_norm[:split], X_norm[split:]
y_tr, y_val = y[:split], y[split:]

# Model: nhỏ gọn cho MCU
model = tf.keras.Sequential([
    tf.keras.layers.Input(shape=(3,)),
    tf.keras.layers.Dense(16, activation='relu'),
    tf.keras.layers.BatchNormalization(),
    tf.keras.layers.Dropout(0.2),
    tf.keras.layers.Dense(8, activation='relu'),
    tf.keras.layers.Dense(3, activation='softmax'),
])
model.compile('adam', 'sparse_categorical_crossentropy', ['accuracy'])
model.fit(X_tr, y_tr, 50, 32, validation_data=(X_val, y_val))

# Quantize INT8 (giảm 4x size, 2-4x speed)
def representative_data():
    for i in range(100):
        yield [X_tr[i:i+1].astype(np.float32)]

cvt = tf.lite.TFLiteConverter.from_keras_model(model)
cvt.optimizations = [tf.lite.Optimize.DEFAULT]
cvt.representative_dataset = representative_data
cvt.target_spec.supported_ops = [tf.lite.OpsSet.TFLITE_BUILTINS_INT8]
cvt.inference_input_type  = tf.int8
cvt.inference_output_type = tf.int8

tflite_model = cvt.convert()
print(f"Model size: {len(tflite_model)/1024:.1f} KB")
# Lưu để convert sang C array
with open('model.tflite', 'wb') as f: f.write(tflite_model)
\`\`\`

### Deploy TFLM trên ESP32

\`\`\`cpp
#include <TensorFlowLite_ESP32.h>
#include "model_data.h"  // từ: xxd -i model.tflite > model_data.h

// Operators cần thiết (giảm flash)
#include "tensorflow/lite/micro/micro_mutable_op_resolver.h"

using namespace tflite;

const int kArenaSize = 12 * 1024;
uint8_t tensor_arena[kArenaSize];
MicroInterpreter* interpreter = nullptr;

void setupModel() {
  const Model* model = GetModel(g_model);
  
  static MicroMutableOpResolver<5> resolver;
  resolver.AddFullyConnected();
  resolver.AddRelu();
  resolver.AddSoftmax();
  resolver.AddBatchNormalization();
  resolver.AddReshape();
  
  static MicroInterpreter interp(model, resolver, tensor_arena, kArenaSize);
  interpreter = &interp;
  
  if (interpreter->AllocateTensors() != kTfLiteOk) {
    Serial.println("AllocateTensors FAILED");
    return;
  }
  
  Serial.printf("Input: %d floats, Arena used: %d bytes\\n",
    interpreter->input(0)->bytes / sizeof(float),
    interpreter->arena_used_bytes());
}

// Norm params lưu từ training
const float MEAN[] = {25.0f, 65.0f, 600.0f};
const float STD[]  = { 8.0f, 15.0f, 200.0f};

int predict(float temp, float hum, float co2) {
  TfLiteTensor* in = interpreter->input(0);
  in->data.int8[0] = quantize((temp - MEAN[0]) / STD[0], in->params);
  in->data.int8[1] = quantize((hum  - MEAN[1]) / STD[1], in->params);
  in->data.int8[2] = quantize((co2  - MEAN[2]) / STD[2], in->params);
  
  interpreter->Invoke();
  
  TfLiteTensor* out = interpreter->output(0);
  int best = 0;
  for (int i = 1; i < 3; i++)
    if (out->data.int8[i] > out->data.int8[best]) best = i;
  return best; // 0=low, 1=normal, 2=high
}
\`\`\``
      },
      {
        id:'c4s2', title:'Edge Impulse & Speech AI',
        content:`## Edge Impulse — TinyML Platform tốt nhất

### Workflow Edge Impulse

\`\`\`
1. Tạo project: studio.edgeimpulse.com
2. Data acquisition:
   - Kết nối ESP32 qua USB + edge-impulse-daemon
   - Hoặc upload CSV/WAV file
   - Thu thập 50+ mẫu/class
3. Create Impulse:
   - Input: Time-series / Image / Raw
   - Processing block: Spectral / MFCC / MFE / Flatten
   - Learning block: Classification / Anomaly / Object detection
4. Train: Click "Start training"
   - Auto-optimize architecture
   - EON Tuner: tối ưu cho target hardware
5. Deploy:
   - Arduino library (.zip) → import vào IDE
   - C++ library (manual integration)
   - WebAssembly (test trên browser)
\`\`\`

### Nhận dạng giọng nói offline trên ESP32

\`\`\`cpp
// Sau khi export Arduino library từ Edge Impulse
#include <WakeWord_inferencing.h>
#include <driver/i2s.h>

// INMP441 Microphone (I2S digital)
#define I2S_WS  25
#define I2S_SCK 26
#define I2S_SD  22

void setupMic() {
  i2s_config_t cfg = {
    .mode = (i2s_mode_t)(I2S_MODE_MASTER | I2S_MODE_RX),
    .sample_rate = 16000,
    .bits_per_sample = I2S_BITS_PER_SAMPLE_16BIT,
    .channel_format = I2S_CHANNEL_FMT_ONLY_LEFT,
    .communication_format = I2S_COMM_FORMAT_STAND_I2S,
    .dma_buf_count = 8, .dma_buf_len = 512,
  };
  i2s_driver_install(I2S_NUM_0, &cfg, 0, NULL);
  i2s_pin_config_t pins = {
    .ws_io_num = I2S_WS, .bck_io_num = I2S_SCK,
    .data_out_num = -1,  .data_in_num = I2S_SD
  };
  i2s_set_pin(I2S_NUM_0, &pins);
}

void loop() {
  // Đọc 1 giây audio (16K samples)
  int16_t audio[16000];
  size_t bytes; 
  i2s_read(I2S_NUM_0, audio, sizeof(audio), &bytes, 1100);
  
  signal_t signal;
  numpy::signal_from_buffer(audio, 16000, &signal);
  
  ei_impulse_result_t result;
  run_classifier(&signal, &result, false);
  
  // Kết quả
  for (auto& c : result.classification) {
    if (strcmp(c.label, "hey_aiot") == 0 && c.value > 0.75f) {
      Serial.printf("Wake word! (%.1f%%)\\n", c.value * 100);
      activateAssistant();
    }
  }
}
\`\`\``
      },
      {
        id:'c4s3', title:'Computer Vision ESP32-CAM',
        content:`## Computer Vision trên ESP32-CAM

### Setup Camera

\`\`\`cpp
#include <esp_camera.h>

// AI-Thinker ESP32-CAM pinout
camera_config_t config = {
  .pin_pwdn  = 32, .pin_reset = -1,
  .pin_xclk  = 0,  .pin_sscb_sda = 26, .pin_sscb_scl = 27,
  .pin_d7=35, .pin_d6=34, .pin_d5=39, .pin_d4=38,
  .pin_d3=37, .pin_d2=36, .pin_d1=21, .pin_d0=19,
  .pin_vsync=25, .pin_href=23, .pin_pclk=22,
  .xclk_freq_hz = 20000000,
  .ledc_timer = LEDC_TIMER_0, .ledc_channel = LEDC_CHANNEL_0,
  .pixel_format = PIXFORMAT_JPEG,
  .frame_size = FRAMESIZE_QVGA,  // 320x240
  .jpeg_quality = 10,
  .fb_count = 2,
};
esp_camera_init(&config);
\`\`\`

### Phát hiện khuôn mặt tích hợp

\`\`\`cpp
#include <esp_camera.h>
#include <fd_forward.h>
#include <fr_forward.h>

// Face detection
mtmn_config_t mtmn = mtmn_init_config();
mtmn.min_face = 80;

camera_fb_t* fb = esp_camera_fb_get();
dl_matrix3du_t* img = dl_matrix3du_alloc(1, fb->width, fb->height, 3);
fmt2rgb888(fb->buf, fb->len, fb->format, img->item);

box_array_t* boxes = face_detect(img, &mtmn);
if (boxes && boxes->len > 0) {
  Serial.printf("Detected %d face(s)\\n", boxes->len);
  
  // Face recognition (nếu có enrolled faces)
  for (int i = 0; i < boxes->len; i++) {
    float confidence = boxes->score[i];
    Serial.printf("  Face %d: confidence=%.2f\\n", i, confidence);
  }
}
esp_camera_fb_return(fb);
\`\`\`

### Object Detection với YOLOv5 Nano

\`\`\`python
# Trên PC/Cloud: train YOLOv5n (nhỏ nhất, ~1.9MB)
# Rồi convert sang ONNX → TFLite int8 → deploy RPi/Jetson

import torch
model = torch.hub.load('ultralytics/yolov5', 'yolov5n')
model.export(format='tflite', int8=True, imgsz=320)
# Output: yolov5n-int8.tflite (~1.5MB)
# Chạy trên Raspberry Pi 4: ~15 FPS
# Chạy trên Jetson Nano: ~60 FPS
\`\`\``
      },
    ]
  },

  /* ═══════════════════════════════════════════════════════
     CHƯƠNG 5 — HỆ THỐNG AIOT
  ═══════════════════════════════════════════════════════ */
  {
    id:'c5', title:'Hệ thống AIoT', color:'#f59e0b',
    sections:[
      {
        id:'c5s1', title:'Node-RED & Automation',
        content:`## Node-RED — Visual IoT Programming

### Cài đặt

\`\`\`bash
# Cài Node.js 18+
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo bash -
sudo apt install nodejs -y

# Cài Node-RED
sudo npm install -g --unsafe-perm node-red
node-red  # Truy cập: http://localhost:1880

# Cài dashboard UI
npm install @flowfuse/node-red-dashboard
\`\`\`

### Flow mẫu: Smart Home Controller

\`\`\`json
[
  {"type":"mqtt in","topic":"home/#","broker":"local-broker"},
  {"type":"json","name":"Parse JSON"},
  {"type":"function","name":"Check thresholds","func":
    "const t=msg.payload.temp, h=msg.payload.hum;\\n
     msg.alert = (t>35||h>85) ? {level:'high',msg:'Overtemp!'} : null;\\n
     return msg;"
  },
  {"type":"ui_gauge","label":"Nhiệt độ","min":0,"max":50},
  {"type":"telegram sender","name":"Alert Telegram"}
]
\`\`\`

### Automation Rules Engine

\`\`\`javascript
// Function node: Rule-based automation
const now = new Date();
const hour = now.getHours();
const temp = msg.payload.temperature;
const hum  = msg.payload.humidity;
const soil = msg.payload.soil_moisture;

const rules = [
  // Smart irrigation
  { cond: soil < 30 && hour >= 6 && hour <= 20,
    action: { device: 'pump1', cmd: 'on', duration: 30 } },
  // Smart HVAC
  { cond: temp > 28,
    action: { device: 'fan1', speed: Math.min(100, (temp-28)*20) } },
  // Alert
  { cond: temp > 38 || hum > 90,
    action: { telegram: "ALERT: " + (temp>38?"Overtemp":"High hum") } },
];

const triggered = rules.filter(r => r.cond).map(r => r.action);
msg.actions = triggered;
return msg;
\`\`\``
      },
      {
        id:'c5s2', title:'Grafana & InfluxDB',
        content:`## Time-series Stack: Telegraf + InfluxDB + Grafana

### Kiến trúc TIG Stack

\`\`\`
ESP32 → MQTT → [Telegraf] → [InfluxDB v2] → [Grafana]
                    |              |               |
              MQTT Consumer   Time-series DB   Dashboard
\`\`\`

### InfluxDB Line Protocol (ghi từ ESP32)

\`\`\`cpp
#include <InfluxDbClient.h>

InfluxDBClient influx(
  "http://192.168.1.100:8086",
  "my-org", "sensors",
  "my-token"
);

void sendToInflux(float temp, float hum, String location) {
  Point p("environment");
  p.addTag("device", "esp32-001");
  p.addTag("location", location);
  p.addField("temperature", temp);
  p.addField("humidity",    hum);
  p.addField("rssi",        (long)WiFi.RSSI());
  p.setTime(WritePrecision::S);  // Unix seconds
  
  if (!influx.writePoint(p))
    Serial.println("Write error: " + influx.getLastErrorMessage());
}
\`\`\`

### Telegraf Config: MQTT → InfluxDB

\`\`\`toml
[[inputs.mqtt_consumer]]
  servers = ["tcp://localhost:1883"]
  topics  = ["home/+/+", "farm/+/+", "factory/+/+"]
  data_format = "json"
  json_time_key = "timestamp"
  json_time_format = "unix"
  json_string_fields = ["device_id", "location"]
  tag_keys = ["device_id", "location", "type"]

[[outputs.influxdb_v2]]
  urls   = ["http://localhost:8086"]
  token  = "your-api-token"
  org    = "aiot-edu"
  bucket = "sensors"
\`\`\`

### Grafana Queries (Flux)

\`\`\`flux
// Query: nhiệt độ trung bình theo giờ
from(bucket: "sensors")
  |> range(start: -24h)
  |> filter(fn: (r) => r._measurement == "environment")
  |> filter(fn: (r) => r._field == "temperature")
  |> aggregateWindow(every: 1h, fn: mean, createEmpty: false)
  |> yield(name: "hourly_avg")

// Query: phát hiện anomaly (>3σ)
|> stddev() |> map(fn: (r) => ({r with is_anomaly: r._value > r.mean + 3*r.stddev}))
\`\`\``
      },
    ]
  },

  /* ═══════════════════════════════════════════════════════
     CHƯƠNG 6 — FPGA
  ═══════════════════════════════════════════════════════ */
  {
    id:'c6', title:'FPGA cho AIoT', color:'#f472b6',
    sections:[
      {
        id:'c6s1', title:'Giới thiệu FPGA',
        content:`## FPGA — Field Programmable Gate Array

### Kiến trúc FPGA

FPGA bao gồm các khối có thể cấu hình lại:
- **CLB** (Configurable Logic Block): LUT + Flip-flop
- **Block RAM**: SRAM nhúng, 18Kbit mỗi block
- **DSP slice**: Multiplier + Accumulator (perfect for AI)
- **I/O Block**: Giao tiếp với ngoại vi
- **PLL/MMCM**: Clock management

\`\`\`
So sánh thực thi CNN:
CPU (ARM Cortex-M4 @ 168MHz):  ~50ms/inference
ESP32 (dual 240MHz):             ~15ms/inference
FPGA (Artix-7, optimized):      ~1ms/inference
NVIDIA Jetson Nano GPU:          ~2ms/inference
\`\`\`

### Verilog cơ bản

\`\`\`verilog
// Module: LED blink với clock divider
module blink #(
  parameter CLK_HZ  = 27_000_000,  // Tang Nano 9K
  parameter BLINK_HZ = 1           // 1Hz blink
)(
  input  wire clk, rst_n,
  output reg  led
);
  localparam COUNT_MAX = CLK_HZ / BLINK_HZ / 2 - 1;
  reg [$clog2(COUNT_MAX)-1:0] cnt;  // Đủ bit tự động

  always @(posedge clk or negedge rst_n) begin
    if (!rst_n) begin
      cnt <= 0; led <= 0;
    end else if (cnt == COUNT_MAX) begin
      cnt <= 0; led <= ~led;
    end else
      cnt <= cnt + 1;
  end
endmodule
\`\`\`

### Systolic Array cho Matrix Multiply (CNN core)

\`\`\`verilog
// Processing Element: 1 MAC operation
module pe #(parameter W=8)(
  input  clk, rst,
  input  signed [W-1:0] a_in, b_in,
  input  signed [2*W+15:0] c_in,   // Accumulated sum
  output reg signed [W-1:0] a_out, b_out,
  output reg signed [2*W+15:0] c_out
);
  always @(posedge clk) begin
    if (rst) c_out <= 0;
    else     c_out <= c_in + a_in * b_in;  // MAC
    a_out <= a_in;  // Pass through (systolic)
    b_out <= b_in;
  end
endmodule

// 4×4 systolic array = 16 MAC hoạt động song song
// Throughput: 16 multiply-adds per clock cycle
\`\`\``
      },
    ]
  },

  /* ═══════════════════════════════════════════════════════
     CHƯƠNG 7 — AIoT THỰC TIỄN & KHỞI NGHIỆP
  ═══════════════════════════════════════════════════════ */
  {
    id:'c7', title:'AIoT Thực tiễn & Khởi nghiệp', color:'#ff6b35',
    sections:[
      {
        id:'c7s1', title:'Mô hình kinh doanh AIoT',
        content:`## Khởi nghiệp với AIoT

### Market Size 2024–2030

| Phân khúc | Giá trị 2024 | CAGR | Giá trị 2030 |
|-----------|-------------|------|-------------|
| Global AIoT | $61.5B | 34.7% | $407B |
| Smart Agriculture | $13.8B | 23.1% | $47.3B |
| Industrial IoT | $110B | 22.8% | $300B |
| Smart Home | $83B | 26.9% | $338B |
| Healthcare IoT | $28B | 25.9% | $107B |

### Mô hình kinh doanh phổ biến

**1. Product as a Service (PaaS)**
\`\`\`
Bán thiết bị AIoT + thu phí subscription cho cloud/AI
Ví dụ: Máy lọc nước thông minh $50 + $5/tháng dashboard
\`\`\`

**2. Data-as-a-Service (DaaS)**
\`\`\`
Triển khai sensor network, bán data analytics cho doanh nghiệp
Ví dụ: Mạng lưới cảm biến chất lượng không khí đô thị
\`\`\`

**3. Maintenance as a Service**
\`\`\`
Predictive maintenance: phát hiện lỗi trước khi xảy ra
T�nh phí theo % downtime đã giảm được
\`\`\`

**4. Platform Business**
\`\`\`
Xây nền tảng kết nối manufacturers với end users
Thu phí marketplace transaction
\`\`\`

### Startup AIoT Việt Nam thành công

- **Agriscaping**: Smart greenhouse, series A $2M (2023)
- **GreenTech**: Sensor mạng lưới nước sạch nông thôn
- **MedBot**: Thiết bị theo dõi bệnh nhân tại nhà

### Lộ trình từ sinh viên đến startup

\`\`\`
Năm 3: Lab courses → Prototype hardware
Năm 4: NCKH → MVP (Minimum Viable Product)
T��t nghiệp: Tham gia incubator (VinUni, BK, FPT)
Năm 1 startup: Seed funding từ angel investors
Năm 2-3: Series A nếu PMF (Product-Market Fit)
\`\`\``
      },
      {
        id:'c7s2', title:'Bảo mật trong AIoT',
        content:`## Bảo mật AIoT — Thách thức và Giải pháp

### Các vector tấn công phổ biến

| Tấn công | Mô tả | Phòng chống |
|---------|-------|------------|
| Replay attack | Ghi lại và phát lại packet MQTT | Timestamp + HMAC |
| MITM | Chặn giữa device và broker | TLS/SSL |
| Firmware tampering | Thay firmware độc hại | Secure boot + signing |
| Physical access | Đọc Flash qua JTAG | Flash encryption |
| DoS | Flood MQTT broker | Rate limiting + auth |
| Model extraction | Copy AI model từ device | Model encryption |

### Secure MQTT với TLS

\`\`\`cpp
#include <WiFiClientSecure.h>
#include <PubSubClient.h>

// Certificates (từ CA của bạn)
const char* CA_CERT = R"(
-----BEGIN CERTIFICATE-----
MIIDrzCCApegAwIBAgIQCDvgVpBCRrGhdWrJWZHHSjAN...
-----END CERTIFICATE-----
)";

WiFiClientSecure wifiClient;
PubSubClient mqtt(wifiClient);

void setupSecureMQTT() {
  wifiClient.setCACert(CA_CERT);
  // Mutual TLS (optional but recommended)
  wifiClient.setCertificate(DEVICE_CERT);
  wifiClient.setPrivateKey(DEVICE_KEY);
  
  mqtt.setServer("mqtt.yourdomain.com", 8883); // Port 8883 = TLS
}
\`\`\`

### Firmware Over-the-Air (OTA) an toàn

\`\`\`cpp
#include <ArduinoOTA.h>
#include <esp_ota_ops.h>

// Verify firmware signature trước khi apply
void setupSecureOTA() {
  ArduinoOTA.setPassword("secure-ota-password");
  
  ArduinoOTA.onStart([]() {
    Serial.println("OTA Start - verifying...");
  });
  
  ArduinoOTA.onEnd([]() {
    // Verify SHA256 của firmware mới
    esp_app_desc_t* app_desc = esp_ota_get_app_description();
    Serial.printf("New firmware: v%s\\n", app_desc->version);
  });
  
  ArduinoOTA.begin();
}
\`\`\`

### Differential Privacy cho Federated Learning

Khi nhiều thiết bị IoT train model chung mà không chia sẻ dữ liệu thô:
\`\`\`python
import tensorflow_privacy as tfp

# Thêm Gaussian noise vào gradient
optimizer = tfp.DPKerasSGDOptimizer(
    l2_norm_clip=1.0,
    noise_multiplier=0.1,   # Epsilon-delta privacy
    num_microbatches=32,
    learning_rate=0.01
)
model.compile(optimizer=optimizer, loss='mse')
# Dữ liệu không rời thiết bị, chỉ gradient (đã nhiễu) được gửi lên
\`\`\``
      },
    ]
  },
]
