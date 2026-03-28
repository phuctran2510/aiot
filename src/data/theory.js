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
,

  // ── Chapters 8–11: Deep Learning, Protocols, MLOps, Applications ──
  {
    id:'c8', title:'Deep Learning cho AIoT', color:'#2dd4bf',
    sections:[
      {
        id:'c8s1', title:'CNN & Transfer Learning',
        content:`## Convolutional Neural Network cho Edge AI

### Kiến trúc CNN cơ bản

\`\`\`
Input Image (224×224×3)
  → Conv2D(32, 3×3) + ReLU + BatchNorm
  → MaxPool(2×2)                           → 112×112×32
  → Conv2D(64, 3×3) + ReLU + BatchNorm
  → MaxPool(2×2)                           → 56×56×64
  → Conv2D(128, 3×3) + ReLU
  → GlobalAvgPool                          → 128
  → Dense(64) + ReLU + Dropout(0.3)
  → Dense(num_classes) + Softmax
\`\`\`

### Transfer Learning — Tận dụng model đã train

\`\`\`python
import tensorflow as tf

# MobileNetV3 Small — tối ưu cho Edge AI
base = tf.keras.applications.MobileNetV3Small(
    input_shape=(96, 96, 3),
    include_top=False,
    weights='imagenet'
)
base.trainable = False  # Freeze base layers

model = tf.keras.Sequential([
    base,
    tf.keras.layers.GlobalAveragePooling2D(),
    tf.keras.layers.Dropout(0.2),
    tf.keras.layers.Dense(5, activation='softmax')  # 5 classes
])

model.compile(
    optimizer=tf.keras.optimizers.Adam(0.001),
    loss='sparse_categorical_crossentropy',
    metrics=['accuracy']
)

# Fine-tuning: mở một số layers cuối
base.trainable = True
fine_tune_at = 80  # Freeze đến layer 80
for layer in base.layers[:fine_tune_at]:
    layer.trainable = False

model.compile(
    optimizer=tf.keras.optimizers.Adam(1e-5),  # LR nhỏ hơn
    loss='sparse_categorical_crossentropy',
    metrics=['accuracy']
)
\`\`\`

### Model Comparison cho Edge Deployment

| Model | Top-1 Acc | Size | Latency (Cortex-M55) | Latency (ESP32-S3) |
|-------|-----------|------|---------------------|------------------|
| MobileNetV1 | 70.9% | 16MB | 45ms | 320ms |
| MobileNetV2 | 71.8% | 14MB | 38ms | 280ms |
| MobileNetV3-Small | 67.4% | 3.4MB | 8ms | 65ms |
| EfficientNet-Lite0 | 75.1% | 4.4MB | 11ms | 85ms |
| MCUNet | 70.7% | 1.0MB | 4ms | 30ms |
| **TinyML custom** | 85%+ | <200KB | <2ms | <15ms |

### Pruning & Quantization Pipeline

\`\`\`python
import tensorflow_model_optimization as tfmot

# 1. Pruning: xóa 50% weights nhỏ
pruning_params = {
    'pruning_schedule': tfmot.sparsity.keras.PolynomialDecay(
        initial_sparsity=0.0, final_sparsity=0.5,
        begin_step=0, end_step=1000
    )
}
model_pruned = tfmot.sparsity.keras.prune_low_magnitude(
    model, **pruning_params
)

# 2. Quantization Aware Training (QAT)
model_qat = tfmot.quantization.keras.quantize_model(model)
model_qat.compile(optimizer='adam', loss='mse')
model_qat.fit(X_train, y_train, epochs=5)

# 3. Convert pipeline
converter = tf.lite.TFLiteConverter.from_keras_model(model_qat)
converter.optimizations = [tf.lite.Optimize.DEFAULT]
converter.target_spec.supported_ops = [
    tf.lite.OpsSet.TFLITE_BUILTINS_INT8
]
converter.inference_input_type  = tf.int8
converter.inference_output_type = tf.int8

tflite_model = converter.convert()
print(f"Original: {model.count_params()*4/1024:.1f} KB")
print(f"Optimized: {len(tflite_model)/1024:.1f} KB")
\`\`\``
      },
      {
        id:'c8s2', title:'LSTM & Time-series',
        content:`## LSTM cho dữ liệu chuỗi thời gian IoT

### Tại sao LSTM cho IoT?

Dữ liệu sensor IoT có tính **temporal dependency**: nhiệt độ lúc 14:00 phụ thuộc vào 13:00, 12:00... LSTM học được pattern này, RNN và Dense Network không thể.

### Kiến trúc LSTM cho sensor prediction

\`\`\`python
import numpy as np
import tensorflow as tf

# Dữ liệu: chuỗi thời gian sensor 4 features × 24h
# Shape: (samples, time_steps, features)
LOOKBACK = 48    # Nhìn lại 48 điểm (24h nếu 30min/sample)
FEATURES = 4     # temp, hum, pressure, co2
HORIZON  = 12    # Dự báo 12 điểm tới

def create_sequences(data, lookback=48, horizon=12):
    X, y = [], []
    for i in range(len(data) - lookback - horizon + 1):
        X.append(data[i:i+lookback])
        y.append(data[i+lookback:i+lookback+horizon, 0])  # Predict temp
    return np.array(X), np.array(y)

# Model
inputs = tf.keras.Input(shape=(LOOKBACK, FEATURES))

# Bidirectional LSTM cho accuracy tốt hơn
x = tf.keras.layers.Bidirectional(
    tf.keras.layers.LSTM(64, return_sequences=True))(inputs)
x = tf.keras.layers.Dropout(0.2)(x)
x = tf.keras.layers.LSTM(32)(x)
x = tf.keras.layers.Dense(64, activation='relu')(x)
x = tf.keras.layers.Dropout(0.2)(x)
output = tf.keras.layers.Dense(HORIZON)(x)

model = tf.keras.Model(inputs, output)
model.compile(
    optimizer=tf.keras.optimizers.Adam(0.001),
    loss='mse',
    metrics=['mae']
)

# Training
history = model.fit(
    X_train, y_train,
    epochs=100, batch_size=32,
    validation_split=0.2,
    callbacks=[
        tf.keras.callbacks.EarlyStopping(patience=15, restore_best_weights=True),
        tf.keras.callbacks.ReduceLROnPlateau(patience=7, factor=0.5)
    ]
)
\`\`\`

### Lightweight LSTM cho MCU (TFLite)

\`\`\`python
# Model nhỏ hơn cho deployment trên Pi/Jetson
inputs = tf.keras.Input(shape=(LOOKBACK, FEATURES))
x = tf.keras.layers.LSTM(16, return_sequences=False)(inputs)
x = tf.keras.layers.Dense(8, activation='relu')(x)
output = tf.keras.layers.Dense(HORIZON)(x)

# Quantize
converter = tf.lite.TFLiteConverter.from_keras_model(model)
converter.optimizations = [tf.lite.Optimize.DEFAULT]
tflite = converter.convert()
# Size: ~8KB, latency RPi4: ~2ms, Jetson: <1ms
\`\`\`

### Anomaly Detection với LSTM Autoencoder

\`\`\`python
# Encoder
enc_inputs = tf.keras.Input(shape=(LOOKBACK, FEATURES))
encoded = tf.keras.layers.LSTM(32, return_sequences=False)(enc_inputs)

# Decoder (phải tái tạo sequence đầu vào)
decoded = tf.keras.layers.RepeatVector(LOOKBACK)(encoded)
decoded = tf.keras.layers.LSTM(32, return_sequences=True)(decoded)
decoded = tf.keras.layers.TimeDistributed(
    tf.keras.layers.Dense(FEATURES))(decoded)

lstm_ae = tf.keras.Model(enc_inputs, decoded)
lstm_ae.compile('adam', 'mse')

# Train chỉ trên normal data
lstm_ae.fit(X_normal, X_normal, epochs=50)

# Threshold từ validation set
val_pred = lstm_ae.predict(X_val)
errors = np.mean(np.mean((X_val - val_pred)**2, axis=2), axis=1)
threshold = np.percentile(errors, 99)  # 99th percentile
print(f"Anomaly threshold: {threshold:.4f}")
\`\`\``
      },
      {
        id:'c8s3', title:'Reinforcement Learning IoT',
        content:`## Reinforcement Learning cho IoT Control

### RL trong AIoT — Ứng dụng thực tế

- **Smart HVAC**: RL tối ưu nhiệt độ phòng, giảm 20-30% điện năng
- **Smart Irrigation**: Q-learning học lịch tưới tối ưu theo thời tiết  
- **Traffic Control**: Multi-agent RL điều khiển đèn giao thông
- **Robot Navigation**: DQN/PPO cho autonomous navigation

### Q-Learning cơ bản cho Smart Irrigation

\`\`\`python
import numpy as np
from collections import defaultdict

class IrrigationEnv:
    """Môi trường tưới cây đơn giản"""
    def __init__(self):
        self.soil_moisture = 50.0   # % (0-100)
        self.hour          = 6      # 6am start
        self.day           = 0

    def step(self, action):
        # action: 0=no water, 1=water 10min, 2=water 20min
        water_amount = [0, 10, 20][action]
        cost         = [0, 1, 2][action]   # Water cost

        # Cập nhật môi trường
        evaporation = 0.5 * (1 + np.random.normal(0, 0.1))
        self.soil_moisture = max(0, min(100,
            self.soil_moisture - evaporation + water_amount * 0.8))
        self.hour = (self.hour + 1) % 24

        # Reward function
        if self.soil_moisture < 20:
            reward = -10   # Khô hạn = rất xấu
        elif self.soil_moisture > 80:
            reward = -2    # Ngập úng = xấu
        elif 40 <= self.soil_moisture <= 70:
            reward = 5 - cost  # Tối ưu - chi phí nước
        else:
            reward = 1 - cost

        done = (self.day >= 30)
        state = (int(self.soil_moisture/10), self.hour//6)
        return state, reward, done

    def reset(self):
        self.soil_moisture = np.random.uniform(30, 70)
        self.hour = 6; self.day = 0
        return (int(self.soil_moisture/10), 1)

# Q-Learning Agent
Q = defaultdict(lambda: np.zeros(3))
lr, gamma, eps = 0.1, 0.95, 1.0

env = IrrigationEnv()
for episode in range(5000):
    state = env.reset()
    total_reward = 0

    for _ in range(24 * 30):  # 30 ngày
        # Epsilon-greedy action selection
        if np.random.random() < eps:
            action = np.random.randint(3)
        else:
            action = np.argmax(Q[state])

        next_state, reward, done = env.step(action)
        
        # Q-update (Bellman equation)
        Q[state][action] += lr * (
            reward + gamma * np.max(Q[next_state]) - Q[state][action]
        )
        state = next_state; total_reward += reward
        if done: break

    eps = max(0.01, eps * 0.995)  # Decay epsilon

print(f"Learned policy — Q-table size: {len(Q)} states")
# Deploy: lookup Q-table trên Raspberry Pi / ESP32
\`\`\``
      },
    ]
  },
  {
    id:'c9', title:'IoT Protocols Nâng cao', color:'#00d4ff',
    sections:[
      {
        id:'c9s1', title:'LoRaWAN & LPWAN',
        content:`## LoRaWAN — IoT Tầm xa

### Kiến trúc LoRaWAN

\`\`\`
[End Device]  ──LoRa RF──  [Gateway]  ──IP──  [Network Server]  ──  [App Server]
 ESP32+SX1276              RAK7244          The Things Network        Your Backend
\`\`\`

### LoRaWAN Classes

| Class | Downlink | Power | Use case |
|-------|---------|-------|---------|
| A | Chỉ sau TX | Cực thấp | Sensor node, tracker |
| B | Scheduled slots | Thấp | Actuator |
| C | Continuous RX | Cao | Gateway, mains-powered |

### Join Procedure (OTAA — Over-the-Air Activation)

\`\`\`cpp
// Dùng MCCI LoRaWAN LMIC library
#include <lmic.h>
#include <hal/hal.h>

// Keys từ The Things Network Console
static const u1_t PROGMEM APPEUI[8]  = { ... };
static const u1_t PROGMEM DEVEUI[8]  = { ... };
static const u1_t PROGMEM APPKEY[16] = { ... };

// Payload encoding: Cayenne LPP format
#include <CayenneLPP.h>
CayenneLPP lpp(51);  // 51 byte max payload

void buildPayload(float temp, float hum, float lat, float lng) {
    lpp.reset();
    lpp.addTemperature(1, temp);        // Channel 1
    lpp.addRelativeHumidity(2, hum);    // Channel 2
    lpp.addGPS(3, lat, lng, 0);         // Channel 3
}

// Gửi lên LoRaWAN (DR0 = SF12 = max range)
LMIC_setDrTxpow(DR_SF10, 14);  // SF10, 14dBm
\`\`\`

### Duty Cycle & Fair Use Policy

\`\`\`
EU868 (dùng tại VN): Duty cycle 1%
→ Nếu TX 1 giây → phải chờ 99 giây trước TX tiếp theo

SF7  BW125: ToA ≈ 56ms  → có thể gửi ~17.8 lần/phút
SF10 BW125: ToA ≈ 371ms → có thể gửi ~2.7 lần/phút
SF12 BW125: ToA ≈ 1318ms → có thể gửi ~0.76 lần/phút

T��i ưu: SF7 cho node gần gateway, SF12 cho node xa
ADR (Adaptive Data Rate): Tự động chọn SF tối ưu
\`\`\``
      },
      {
        id:'c9s2', title:'OPC-UA & Industrial IoT',
        content:`## OPC-UA — Giao thức IIoT chuẩn

### OPC-UA là gì?

**OPC-UA** (Unified Architecture): giao thức IIoT chuẩn công nghiệp ISO 62541. Thay thế OPC Classic (Windows-only) bằng platform-neutral, secure, với semantic data model.

### So sánh MQTT vs OPC-UA

| | MQTT | OPC-UA |
|--|------|--------|
| Mô hình | Pub/Sub đơn giản | Client/Server + Pub/Sub |
| Data model | Flat topics | Hierarchical address space |
| Security | TLS + auth | X.509 certs + signed/encrypted |
| Discovery | Không | Auto-discovery |
| Semantic | Không | Information model (type system) |
| Phù hợp | Consumer IoT | Industrial automation |

### Python OPC-UA Server (trên Raspberry Pi)

\`\`\`python
from opcua import Server
from datetime import datetime
import random, time

server = Server()
server.set_endpoint("opc.tcp://0.0.0.0:4840/freeopcua/server/")
server.set_server_name("AIoT Factory Server")

# Namespace
ns = server.register_namespace("http://aiot.dlu.edu.vn")
objects = server.get_objects_node()

# Tạo object "Factory"
factory = objects.add_object(ns, "Factory")
machine1 = factory.add_object(ns, "Machine1")

# Variables
temperature = machine1.add_variable(ns, "Temperature", 25.0)
vibration   = machine1.add_variable(ns, "Vibration", 0.1)
status      = machine1.add_variable(ns, "Status", "Running")
# Writable
temperature.set_writable()

server.start()
print("OPC-UA server running at opc.tcp://localhost:4840/")

try:
    while True:
        # Cập nhật giá trị từ sensor thực
        temperature.set_value(read_temperature())
        vibration.set_value(read_vibration())
        time.sleep(1)
finally:
    server.stop()
\`\`\`

### ESP32 → OPC-UA qua MQTT Bridge

\`\`\`
ESP32 sensor → MQTT broker → [Bridge service] → OPC-UA server → SCADA/HMI

Bridge code (Python):
import paho.mqtt.client as mqtt
from opcua import Client

def on_mqtt_message(client, userdata, msg):
    data = json.loads(msg.payload)
    # Write to OPC-UA node
    opc_temp_node.set_value(data["temperature"])

mqtt_client.subscribe("factory/+/sensors")
mqtt_client.on_message = on_mqtt_message
\`\`\``
      },
      {
        id:'c9s3', title:'WebSocket & Real-time Dashboard',
        content:`## WebSocket cho Real-time IoT Dashboard

### So sánh polling vs WebSocket vs SSE

| | HTTP Polling | WebSocket | Server-Sent Events |
|--|-------------|-----------|-------------------|
| Direction | Client → Server | Bidirectional | Server → Client |
| Latency | ~polling interval | <5ms | <5ms |
| Overhead | Header mỗi request | Minimal | Minimal |
| Complexity | Thấp | Trung bình | Thấp |
| Browser support | Tốt | Tốt | Tốt |
| Phù hợp | Snapshot data | Control + data | Sensor stream |

### WebSocket Server trên ESP32

\`\`\`cpp
#include <WiFi.h>
#include <WebSocketsServer.h>
#include <ArduinoJson.h>

WebSocketsServer ws(81);  // Port 81

void onWebSocketEvent(uint8_t clientId, WStype_t type,
                      uint8_t* payload, size_t length) {
    if (type == WStype_CONNECTED) {
        Serial.printf("Client %d connected\\n", clientId);
        // Gửi welcome + current state
        JsonDocument doc;
        doc["type"] = "welcome";
        doc["temp"] = readTemp();
        char buf[100]; serializeJson(doc, buf);
        ws.sendTXT(clientId, buf);
    }
    else if (type == WStype_TEXT) {
        // Nhận lệnh từ dashboard
        JsonDocument cmd;
        deserializeJson(cmd, payload, length);
        if (cmd["type"] == "set_relay")
            digitalWrite(RELAY_PIN, cmd["state"].as<bool>());
    }
}

// Broadcast sensor data mỗi 500ms
void broadcastSensorData() {
    static unsigned long last = 0;
    if (millis() - last < 500) return;
    last = millis();

    JsonDocument doc;
    doc["type"] = "sensor_data";
    doc["temp"] = readTemp();
    doc["hum"]  = readHum();
    doc["ts"]   = millis();
    char buf[150]; serializeJson(doc, buf);
    ws.broadcastTXT(buf);
}

void setup() {
    WiFi.begin(SSID, PASS);
    while(WiFi.status()!=WL_CONNECTED) delay(500);
    ws.begin();
    ws.onEvent(onWebSocketEvent);
}

void loop() {
    ws.loop();
    broadcastSensorData();
}
\`\`\`

### React/HTML Dashboard nhận WebSocket

\`\`\`javascript
// Real-time dashboard JavaScript
const ws = new WebSocket('ws://ESP32_IP:81');
const history = { temp:[], hum:[], ts:[] };
const MAX_POINTS = 60;  // 30 giây (500ms interval)

ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    if (data.type !== 'sensor_data') return;

    // Cập nhật UI
    document.getElementById('temp').textContent = data.temp.toFixed(1);
    document.getElementById('hum').textContent  = data.hum.toFixed(1);

    // Lưu lịch sử
    history.temp.push(data.temp);
    history.hum.push(data.hum);
    history.ts.push(new Date(data.ts));
    if (history.temp.length > MAX_POINTS) {
        history.temp.shift(); history.hum.shift(); history.ts.shift();
    }

    // Cập nhật Chart.js
    chart.data.labels = history.ts;
    chart.data.datasets[0].data = history.temp;
    chart.update('none');  // 'none' = không animate để smooth
};

// Gửi lệnh điều khiển
function setRelay(state) {
    ws.send(JSON.stringify({ type:'set_relay', state }));
}
\`\`\``
      },
    ]
  },
  {
    id:'c10', title:'MLOps & DevOps cho AIoT', color:'#f59e0b',
    sections:[
      {
        id:'c10s1', title:'CI/CD cho Firmware IoT',
        content:`## CI/CD Pipeline cho IoT Firmware

### Vì sao cần CI/CD cho IoT?

- **100+ thiết bị** ngoài thực địa: update thủ công bất khả thi
- **Firmware bug** ảnh hưởng toàn bộ fleet
- **Testing** trước khi deploy lên production device
- **Rollback** nhanh khi có vấn đề

### GitHub Actions Pipeline

\`\`\`yaml
# .github/workflows/firmware-ci.yml
name: Firmware CI/CD

on:
  push:
    branches: [main]
    paths: ['firmware/**']

jobs:
  build-and-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup PlatformIO
        run: pip install platformio

      - name: Build firmware
        run: pio run --project-dir firmware

      - name: Run unit tests (native)
        run: pio test --environment native --project-dir firmware

      - name: Static analysis
        run: pio check --project-dir firmware

      - name: Upload firmware artifact
        uses: actions/upload-artifact@v4
        with:
          name: firmware-\$\${{ github.sha }}
          path: firmware/.pio/build/esp32dev/firmware.bin

  deploy-staging:
    needs: build-and-test
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to staging devices (OTA)
        run: |
          curl -X POST https://ota-server.aiot.dlu.edu.vn/deploy \\
            -H "Authorization: Bearer \$\${{ secrets.OTA_TOKEN }}" \\
            -F "firmware=@firmware.bin" \\
            -F "group=staging" \\
            -F "rollout_pct=10"  # 10% rollout trước
\`\`\`

### OTA Server với versioning

\`\`\`python
# Flask OTA server
from flask import Flask, request, jsonify
import hashlib, os

app = Flask(__name__)
FIRMWARE_DIR = "/var/firmware"

@app.route('/api/ota/check', methods=['GET'])
def check_update():
    device_version = request.args.get('version')
    device_group   = request.args.get('group', 'stable')

    latest = get_latest_version(device_group)
    if latest['version'] != device_version:
        return jsonify({
            'update_available': True,
            'version': latest['version'],
            'url': f"/api/ota/download/{latest['filename']}",
            'sha256': latest['sha256'],
            'size': latest['size'],
            'changelog': latest['changelog']
        })
    return jsonify({'update_available': False})

@app.route('/api/ota/download/<filename>')
def download_firmware(filename):
    return send_from_directory(FIRMWARE_DIR, filename)
\`\`\`

### ESP32 OTA Client (check + update)

\`\`\`cpp
#include <HTTPClient.h>
#include <Update.h>
#include <ArduinoJson.h>

const char* OTA_SERVER = "https://ota.aiot.dlu.edu.vn";
const char* CURRENT_VER = "1.2.3";

void checkAndUpdate() {
    HTTPClient http;
    String url = String(OTA_SERVER) + "/api/ota/check"
                 + "?version=" + CURRENT_VER
                 + "&group=stable";
    http.begin(url);

    if (http.GET() == 200) {
        JsonDocument doc;
        deserializeJson(doc, http.getString());

        if (doc["update_available"].as<bool>()) {
            String newVer = doc["version"];
            String dlUrl  = String(OTA_SERVER) + doc["url"].as<String>();
            Serial.printf("Update: %s → %s\\n", CURRENT_VER, newVer.c_str());
            performOTA(dlUrl);
        }
    }
    http.end();
}

void performOTA(String url) {
    HTTPClient http;
    http.begin(url);
    int code = http.GET();
    if (code == 200) {
        int contentLen = http.getSize();
        WiFiClient* stream = http.getStreamPtr();
        Update.begin(contentLen);
        Update.writeStream(*stream);
        if (Update.end()) {
            Serial.println("OTA Success! Rebooting...");
            ESP.restart();
        }
    }
}
\`\`\``
      },
      {
        id:'c10s2', title:'Docker & Edge Deployment',
        content:`## Docker cho Edge Computing

### Docker trên Raspberry Pi / Jetson

\`\`\`bash
# Cài Docker trên Raspberry Pi OS
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
sudo usermod -aG docker pi

# Test
docker run hello-world
docker run --rm arm64v8/python:3.11-slim python --version
\`\`\`

### Docker Compose cho IoT Stack

\`\`\`yaml
# docker-compose.yml — Full IoT stack
version: '3.8'

services:
  mosquitto:
    image: eclipse-mosquitto:2
    ports: ["1883:1883", "9001:9001"]
    volumes:
      - ./mosquitto/config:/mosquitto/config
      - mosquitto-data:/mosquitto/data
    restart: unless-stopped

  influxdb:
    image: influxdb:2.7-alpine
    ports: ["8086:8086"]
    volumes: [influxdb-data:/var/lib/influxdb2]
    environment:
      DOCKER_INFLUXDB_INIT_MODE: setup
      DOCKER_INFLUXDB_INIT_USERNAME: admin
      DOCKER_INFLUXDB_INIT_PASSWORD: aiot2025!
      DOCKER_INFLUXDB_INIT_ORG: aiot-edu
      DOCKER_INFLUXDB_INIT_BUCKET: sensors

  grafana:
    image: grafana/grafana:10-ubuntu
    ports: ["3000:3000"]
    volumes: [grafana-data:/var/lib/grafana]
    depends_on: [influxdb]

  node-red:
    image: nodered/node-red:3
    ports: ["1880:1880"]
    volumes: [nodered-data:/data]
    depends_on: [mosquitto, influxdb]

  ai-inference:
    build: ./ai-service
    ports: ["5000:5000"]
    deploy:
      resources:
        reservations:
          devices:
            - driver: nvidia   # Nếu có GPU (Jetson)
              count: 1
              capabilities: [gpu]

volumes:
  mosquitto-data: influxdb-data: grafana-data: nodered-data:
\`\`\`

### AI Inference Microservice

\`\`\`python
# ai-service/app.py
from flask import Flask, request, jsonify
import numpy as np
import tflite_runtime.interpreter as tflite
import paho.mqtt.client as mqtt

app = Flask(__name__)

# Load TFLite model
interpreter = tflite.Interpreter('model.tflite')
interpreter.allocate_tensors()
input_details  = interpreter.get_input_details()
output_details = interpreter.get_output_details()

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json['features']
    input_data = np.array(data, dtype=np.float32).reshape(
        input_details[0]['shape']
    )
    interpreter.set_tensor(input_details[0]['index'], input_data)
    interpreter.invoke()
    output = interpreter.get_tensor(output_details[0]['index'])
    return jsonify({
        'prediction': output.tolist(),
        'class': int(np.argmax(output)),
        'confidence': float(np.max(output))
    })

# MQTT subscriber + auto inference
def on_sensor_data(client, userdata, msg):
    data = json.loads(msg.payload)
    features = extract_features(data)
    result = predict_internal(features)
    if result['confidence'] > 0.8:
        client.publish('ai/inference/result', json.dumps(result))

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
\`\`\``
      },
    ]
  },
  {
    id:'c11', title:'AIoT trong các lĩnh vực', color:'#ff6b35',
    sections:[
      {
        id:'c11s1', title:'Smart Agriculture Đà Lạt',
        content:`## Smart Agriculture cho nông nghiệp Đà Lạt

### Thách thức đặc thù Đà Lạt

Đà Lạt có khí hậu đặc biệt: sương mù buổi sáng, nhiệt độ dao động 10–22°C, địa hình đồi núi phức tạp. AIoT giải quyết:

- **Sương mù làm nhiễu** cảm biến optical → dùng cảm biến capacitive
- **Địa hình phân tán** → LoRa thay WiFi cho kết nối tầm xa
- **Nhiệt độ thấp ban đêm** → AI dự báo sương giá
- **Cây đặc thù** (dâu tây, rau hydroponics, hoa cắt cành) → model riêng

### Hệ thống IoT cho Nông trại Dâu tây

\`\`\`
Sensor Node (mỗi luống 20m²):
├── Soil moisture (capacitive) × 2
├── Soil temperature (DS18B20)
├── Air temperature + humidity (BME280)
├── Light intensity (BH1750)
└── ESP32 + LoRa SX1276 → Gateway

Gateway Node (1 node/5000m²):
├── Raspberry Pi 4
├── LoRa gateway (RAK2287)
├── 4G/WiFi uplink
└── Edge AI: disease detection, irrigation decision

Cloud:
├── InfluxDB time-series storage
├── Grafana dashboard (nông dân xem trên điện thoại)
├── AI model training pipeline
└── Weather API integration (OpenWeatherMap)
\`\`\`

### AI Disease Detection cho Dâu tây

\`\`\`python
# Dataset: ảnh lá dâu tây 5 loại bệnh phổ biến tại Đà Lạt
# 1. Powdery mildew (phấn trắng)
# 2. Gray mold / Botrytis (mốc xám)
# 3. Leaf scorch (cháy lá)
# 4. Angular leaf spot (đốm góc cạnh)
# 5. Healthy (khỏe mạnh)

CLASSES = ['powdery_mildew', 'gray_mold', 'leaf_scorch',
           'angular_spot', 'healthy']

# Transfer learning từ PlantVillage pre-trained
base = tf.keras.applications.MobileNetV3Small(
    input_shape=(224,224,3), include_top=False,
    weights='imagenet'
)

# Data augmentation cho Đà Lạt conditions
augmentation = tf.keras.Sequential([
    tf.keras.layers.RandomFlip('horizontal'),
    tf.keras.layers.RandomRotation(0.2),
    tf.keras.layers.RandomBrightness(0.3),   # Sương mù
    tf.keras.layers.RandomContrast(0.3),
    tf.keras.layers.GaussianNoise(0.02),      # Noise sensor
])
\`\`\`

### ROI Analysis (Vùng rau 1 sào = 1000m²)

| Chỉ số | Truyền thống | AIoT | Tiết kiệm |
|--------|-------------|------|---------|
| Nước tưới | 3,000 L/ngày | 1,800 L/ngày | 40% |
| Phân bón | 15kg/tháng | 10kg/tháng | 33% |
| Thuốc BVTV | 8 lần/vụ | 3 lần/vụ | 62% |
| Nhân công | 2 người | 0.5 người | 75% |
| Năng suất | 100% | 120–130% | +25% |
| ROI payback | — | 8–14 tháng | — |`
      },
      {
        id:'c11s2', title:'Smart Healthcare & Wearable',
        content:`## AIoT trong Healthcare

### Thiết bị Wearable IoT

\`\`\`
ECG Patch (Holter Monitor tự làm):
├── Electrode (3-lead) → AD8232 ECG module
├── ESP32-S3 (240MHz + BLE 5)
├── Accelerometer MPU6050 (fall detection)
├── Temperature DS18B20 (body temp)
├── MAX30105 (SpO2 + HR)
├── LiPo 500mAh (7 ngày pin)
└── BLE → Smartphone App → Cloud

Data pipeline:
ECG raw (250Hz) → QRS detection → HRV analysis
                → ST segment analysis
                → Arrhythmia classification (TFLite)
\`\`\`

### ECG Signal Processing trên ESP32

\`\`\`cpp
// AD8232 ECG sampling @ 250Hz
#include <driver/adc.h>

#define ECG_PIN 34   // ADC1_CH6
#define LO_PLUS 32
#define LO_MINUS 33

const int SAMPLE_RATE = 250; // Hz
const int BUFFER_SIZE = 750; // 3 giây data

int16_t ecgBuffer[BUFFER_SIZE];
int bufIdx = 0;

void IRAM_ATTR sampleECG() {
    // Called by timer ISR @ 250Hz
    if (digitalRead(LO_PLUS) || digitalRead(LO_MINUS)) {
        ecgBuffer[bufIdx++] = 0;  // Lead off
    } else {
        ecgBuffer[bufIdx++] = analogRead(ECG_PIN);
    }
    if (bufIdx >= BUFFER_SIZE) bufIdx = 0;
}

// R-peak detection (Pan-Tompkins simplified)
float detectHeartRate(int16_t* buf, int len) {
    // 1. Bandpass filter 5-15Hz
    // 2. Derivative
    // 3. Squaring
    // 4. Moving window integration
    // 5. Adaptive threshold for R-peak detection
    // Return: BPM
}
\`\`\`

### AI Arrhythmia Detection

\`\`\`python
# 1D-CNN cho ECG phân loại từ PhysioNet MIT-BIH dataset
# 5 classes: Normal, AFib, V-flutter, Noise, Others

model = tf.keras.Sequential([
    tf.keras.layers.Input(shape=(187, 1)),  # 0.75s @ 250Hz
    tf.keras.layers.Conv1D(32, 5, activation='relu'),
    tf.keras.layers.MaxPooling1D(2),
    tf.keras.layers.Conv1D(64, 5, activation='relu'),
    tf.keras.layers.MaxPooling1D(2),
    tf.keras.layers.Conv1D(128, 3, activation='relu'),
    tf.keras.layers.GlobalAveragePooling1D(),
    tf.keras.layers.Dense(64, activation='relu'),
    tf.keras.layers.Dropout(0.5),
    tf.keras.layers.Dense(5, activation='softmax')
])
# Sensitivity AFib: >94%, Specificity: >97%
# Model size quantized: ~48KB → fits ESP32!
\`\`\`

### HIPAA-aware Cloud Architecture

\`\`\`
Patient Device → BLE → Smartphone (local processing)
                           |
                    AES-256 encrypted
                           |
                    API Gateway (Auth)
                           |
              ┌────────────────────────┐
              │   HIPAA-compliant Zone │
              │  ├── Audit logging     │
              │  ├── Data isolation    │
              │  ├── Encryption at rest│
              │  └── Access control    │
              └────────────────────────┘
                           |
                    AI Analysis (de-identified)
                           |
                    Doctor Dashboard + Alerts
\`\`\``
      },
      {
        id:'c11s3', title:'Smart City & Industry 4.0',
        content:`## Smart City và Industry 4.0

### Thành phần Smart City với AIoT

\`\`\`
Smart Lighting: Cảm biến ánh sáng + chuyển động → Dim 30% khi vắng người
Smart Parking:  Ultrasonic × 100 chỗ → App tìm chỗ đậu gần nhất
Smart Waste:    Fill-level sensor → Tối ưu lịch thu gom
Smart Water:    Flow meter + AI leak detection → Phát hiện rò rỉ
Air Quality:    PM2.5 network × 50 điểm → Heatmap ô nhiễm realtime
Traffic:        Camera AI → Đếm xe, điều chỉnh đèn tự động
\`\`\`

### Industry 4.0 — Condition Monitoring

\`\`\`python
# Multi-sensor fusion cho industrial equipment
# Sensors: vibration, temperature, current draw, acoustic emission

class MachineLearningMonitor:
    def __init__(self, machine_id: str):
        self.machine_id = machine_id
        self.models = {
            'bearing':    load_model('bearing_classifier.tflite'),
            'imbalance':  load_model('imbalance_detector.tflite'),
            'misalign':   load_model('misalignment.tflite'),
            'rul':        load_model('remaining_useful_life.tflite'),
        }
        self.history = deque(maxlen=1000)

    def analyze(self, sensor_data: dict) -> dict:
        features = self.extract_features(sensor_data)
        results = {}

        for fault_type, model in self.models.items():
            prob = model.predict(features)
            results[fault_type] = {
                'probability': float(prob),
                'severity': 'high' if prob > 0.8 else
                            'medium' if prob > 0.5 else 'low'
            }

        # Remaining Useful Life
        rul_days = self.models['rul'].predict(features)
        results['rul_days'] = float(rul_days)

        if rul_days < 7:
            self.trigger_alert(f"URGENT: {self.machine_id} RUL={rul_days:.1f} days")

        return results

    def extract_features(self, data: dict) -> np.ndarray:
        # Time domain: mean, std, RMS, crest factor, kurtosis
        # Freq domain: FFT peak freq, spectral entropy
        # Envelope: bearing defect frequencies
        pass
\`\`\`

### Digital Twin Architecture

\`\`\`
Physical Asset ──sensor data──→ Digital Twin ──simulation──→ Insights
    │                               │                           │
    │                          Real-time sync              What-if scenarios
    │                          3D visualization             Predictive alerts
    └──actuator commands───── AI optimization ←── KPI targets
\`\`\`

**Tech stack Digital Twin:**
- **3D Model**: Three.js / Unity WebGL
- **Physics simulation**: PyBullet / Gazebo
- **Data sync**: MQTT → InfluxDB
- **AI**: TensorFlow optimization loop
- **Visualization**: Grafana + custom React dashboard`
      },
    ]
  },
]

// ═══ CHƯƠNG 8 — GIAO THỨC NÂNG CAO & CLOUD ═══════════════════════
export const THEORY_EXTRA = [
  {
    id:'c8', title:'Cloud & DevOps cho AIoT', color:'#2dd4bf',
    sections:[
      {
        id:'c8s1', title:'Docker & Containerization',
        content:`## Docker cho AIoT Stack

### Tại sao cần Docker?

Triển khai AIoT stack (Mosquitto + Node-RED + InfluxDB + Grafana) thường mất 2-3 giờ cài thủ công. Docker Compose: **1 lệnh, 2 phút**.

### docker-compose.yml cho AIoT

\`\`\`yaml
version: '3.8'

services:
  mosquitto:
    image: eclipse-mosquitto:2
    ports: ["1883:1883", "9001:9001"]
    volumes:
      - ./mosquitto/config:/mosquitto/config
      - ./mosquitto/data:/mosquitto/data
    restart: unless-stopped

  influxdb:
    image: influxdb:2.7
    ports: ["8086:8086"]
    environment:
      DOCKER_INFLUXDB_INIT_MODE: setup
      DOCKER_INFLUXDB_INIT_USERNAME: admin
      DOCKER_INFLUXDB_INIT_PASSWORD: aiot2025!
      DOCKER_INFLUXDB_INIT_ORG: aiot-edu
      DOCKER_INFLUXDB_INIT_BUCKET: sensors
      DOCKER_INFLUXDB_INIT_ADMIN_TOKEN: mytoken123
    volumes:
      - influxdb_data:/var/lib/influxdb2
    restart: unless-stopped

  grafana:
    image: grafana/grafana:10.2.0
    ports: ["3000:3000"]
    environment:
      GF_SECURITY_ADMIN_PASSWORD: admin2025
    volumes:
      - grafana_data:/var/lib/grafana
      - ./grafana/provisioning:/etc/grafana/provisioning
    depends_on: [influxdb]
    restart: unless-stopped

  node-red:
    image: nodered/node-red:3.1
    ports: ["1880:1880"]
    volumes:
      - node_red_data:/data
    depends_on: [mosquitto, influxdb]
    restart: unless-stopped

volumes:
  influxdb_data:
  grafana_data:
  node_red_data:
\`\`\`

### Khởi động và quản lý

\`\`\`bash
# Khởi động toàn bộ stack
docker-compose up -d

# Xem status
docker-compose ps

# Xem logs realtime
docker-compose logs -f mosquitto
docker-compose logs -f influxdb

# Dừng stack
docker-compose down

# Dừng + xóa data (NGUY HIỂM!)
docker-compose down -v

# Cập nhật image
docker-compose pull && docker-compose up -d
\`\`\`

### Grafana Auto-provisioning

\`\`\`yaml
# grafana/provisioning/datasources/influxdb.yaml
apiVersion: 1
datasources:
  - name: InfluxDB
    type: influxdb
    access: proxy
    url: http://influxdb:8086
    jsonData:
      version: Flux
      organization: aiot-edu
      defaultBucket: sensors
    secureJsonData:
      token: mytoken123
\`\`\``
      },
      {
        id:'c8s2', title:'MQTT over TLS & Auth',
        content:`## Bảo mật MQTT với TLS và Authentication

### Tại sao cần bảo mật MQTT?

MQTT mặc định **không mã hóa** và **không xác thực**. Ai cũng có thể connect broker và đọc/ghi mọi topic. Rủi ro trong môi trường production:
- Đọc dữ liệu nhạy cảm (nhiệt độ phòng máy chủ, vị trí GPS...)
- Inject lệnh giả (bật/tắt relay, thay đổi setpoint)
- DoS broker bằng spam messages

### Cấu hình Mosquitto với TLS

\`\`\`bash
# Tạo CA và certificates tự ký (development)
mkdir -p certs && cd certs

# 1. Tạo CA key và certificate
openssl genrsa -out ca.key 4096
openssl req -new -x509 -days 3650 -key ca.key -out ca.crt \\
  -subj "/CN=AIoT-CA/O=DLU/C=VN"

# 2. Tạo server key và CSR
openssl genrsa -out server.key 2048
openssl req -new -key server.key -out server.csr \\
  -subj "/CN=mqtt.aiot.local/O=DLU/C=VN"

# 3. Sign server cert với CA
openssl x509 -req -days 3650 -in server.csr \\
  -CA ca.crt -CAkey ca.key -CAcreateserial -out server.crt

# 4. Tạo client cert (cho ESP32)
openssl genrsa -out esp32-client.key 2048
openssl req -new -key esp32-client.key -out esp32-client.csr \\
  -subj "/CN=esp32-001/O=DLU/C=VN"
openssl x509 -req -days 3650 -in esp32-client.csr \\
  -CA ca.crt -CAkey ca.key -CAcreateserial -out esp32-client.crt
\`\`\`

\`\`\`conf
# mosquitto.conf
listener 1883
allow_anonymous false
password_file /mosquitto/config/passwd

listener 8883
cafile   /mosquitto/config/certs/ca.crt
certfile /mosquitto/config/certs/server.crt
keyfile  /mosquitto/config/certs/server.key
require_certificate true  # Mutual TLS
tls_version tlsv1.2

# ACL: kiểm soát quyền theo user
acl_file /mosquitto/config/acl
\`\`\`

\`\`\`bash
# Tạo password file
mosquitto_passwd -c /mosquitto/config/passwd esp32-device1
mosquitto_passwd  /mosquitto/config/passwd dashboard-user
\`\`\`

### ESP32 connect Mosquitto TLS

\`\`\`cpp
#include <WiFiClientSecure.h>
#include <PubSubClient.h>

// Certificates (copy từ file .crt và .key)
const char CA_CERT[] = R"(
-----BEGIN CERTIFICATE-----
MIIFqDCCA5CgAwIBAgIUQ... (ca.crt content)
-----END CERTIFICATE-----
)";
const char CLIENT_CERT[] = R"(-----BEGIN CERTIFICATE-----...
)";
const char CLIENT_KEY[] = R"(-----BEGIN RSA PRIVATE KEY-----...
)";

WiFiClientSecure net;
PubSubClient     mqtt(net);

void setupTLS() {
  net.setCACert(CA_CERT);
  net.setCertificate(CLIENT_CERT);  // Mutual TLS
  net.setPrivateKey(CLIENT_KEY);
  mqtt.setServer("mqtt.aiot.local", 8883);
}
\`\`\`

### ACL File — Phân quyền topic

\`\`\`conf
# /mosquitto/config/acl

# esp32-device1: chỉ được pub sensors, sub commands
user esp32-device1
topic write sensors/device1/#
topic read  devices/device1/cmd
topic read  devices/device1/config

# dashboard-user: đọc tất cả sensors, ghi tất cả commands
user dashboard-user
topic read  sensors/#
topic write devices/#
topic readwrite homeassistant/#
\`\`\``
      },
      {
        id:'c8s3', title:'AWS IoT Core & Azure IoT Hub',
        content:`## Cloud IoT Platforms

### So sánh Cloud IoT Platforms

| Platform | Devices Free | Protocol | AI Integration | Giá ($/msg) |
|----------|-------------|----------|---------------|-------------|
| **AWS IoT Core** | Unlimited | MQTT, HTTP, WebSocket | SageMaker, Lambda | $1.2/1M msg |
| **Azure IoT Hub** | 8,000 msg/ngày | MQTT, AMQP, HTTP | Azure ML, Stream Analytics | $10/1M msg |
| **Google Cloud IoT** | (đã ngừng 2023) | MQTT, HTTP | Vertex AI | — |
| **ThingSpeak** | 3M msg/năm | MQTT, HTTP | MATLAB | Miễn phí |
| **Adafruit IO** | 30 msg/phút | MQTT, HTTP | — | Miễn phí |
| **HiveMQ Cloud** | 100 connections | MQTT | — | Miễn phí |

### AWS IoT Core với ESP32

\`\`\`bash
# 1. Tạo Thing trong AWS Console
# IoT Core → Manage → Things → Create Thing

# 2. Download certificates
# - device-certificate.crt
# - device-private-key.key
# - AmazonRootCA1.pem

# 3. Tạo Policy
{
  "Version": "2012-10-17",
  "Statement": [{
    "Effect": "Allow",
    "Action": ["iot:Connect","iot:Publish","iot:Subscribe","iot:Receive"],
    "Resource": "arn:aws:iot:ap-southeast-1:*:*"
  }]
}
\`\`\`

\`\`\`cpp
// ESP32 kết nối AWS IoT Core
#include <WiFiClientSecure.h>
#include <PubSubClient.h>
#include "certs.h"  // Certificates từ AWS

const char* AWS_ENDPOINT = "xxxxx.iot.ap-southeast-1.amazonaws.com";

WiFiClientSecure net;
PubSubClient     aws(net);

void setup() {
  net.setCACert(AWS_ROOT_CA);
  net.setCertificate(AWS_CERT);
  net.setPrivateKey(AWS_KEY);
  aws.setServer(AWS_ENDPOINT, 8883);
  aws.connect("esp32-thing-001");
}

void publishToAWS(float temp, float hum) {
  // AWS IoT Device Shadow
  String shadow = "{\\"state\\":{\\"reported\\":{"
    "\\"temperature\\":" + String(temp,1) +
    ",\\"humidity\\":" + String(hum,1) + "}}}";
  aws.publish("$aws/things/esp32-thing-001/shadow/update", shadow.c_str());
}
\`\`\`

### AWS Lambda xử lý IoT data

\`\`\`python
# Lambda function: nhận MQTT → lưu DynamoDB → gửi SNS alert
import json, boto3
from datetime import datetime

dynamodb = boto3.resource('dynamodb')
sns = boto3.client('sns')
table = dynamodb.Table('IoTSensorData')

def lambda_handler(event, context):
    # event từ IoT Rule
    device_id = event.get('device_id', 'unknown')
    temp = float(event.get('temperature', 0))
    hum  = float(event.get('humidity', 0))

    # Lưu DynamoDB
    table.put_item(Item={
        'deviceId': device_id,
        'timestamp': datetime.utcnow().isoformat(),
        'temperature': str(temp),
        'humidity': str(hum)
    })

    # Alert nếu nhiệt độ cao
    if temp > 35.0:
        sns.publish(
            TopicArn='arn:aws:sns:...:IoTAlerts',
            Message=f'ALERT: {device_id} temperature={temp}°C',
            Subject='IoT Temperature Alert'
        )

    return {'statusCode': 200}
\`\`\``
      },
    ]
  },

  {
    id:'c9', title:'Xử lý tín hiệu số (DSP)', color:'#f59e0b',
    sections:[
      {
        id:'c9s1', title:'FFT & Spectral Analysis',
        content:`## Fast Fourier Transform cho AIoT

### Tại sao FFT quan trọng?

**Vấn đề**: Dữ liệu cảm biến theo thời gian (time-domain) khó phân tích pattern.
**Giải pháp**: FFT chuyển sang frequency-domain, dễ nhận biết hơn.

\`\`\`
Ứng dụng FFT trong AIoT:
├── Phát hiện lỗi động cơ: tần số rung động bất thường
├── Wake word detection: MFCC = Mel + FFT
├── Vibration analysis: bearing wear → freq thay đổi
├── Power quality: harmonic distortion → FFT
└── EEG/ECG: biểu đồ tần số não/tim
\`\`\`

### FFT trên ESP32 (ArduinoFFT)

\`\`\`cpp
#include <arduinoFFT.h>

#define SAMPLES     512     // Phải là số 2^n
#define SAMPLE_FREQ 1000.0  // Hz

double vReal[SAMPLES], vImag[SAMPLES];
ArduinoFFT<double> FFT(vReal, vImag, SAMPLES, SAMPLE_FREQ);

void sampleAndFFT() {
  // 1. Thu thập mẫu
  for (int i = 0; i < SAMPLES; i++) {
    vReal[i] = analogRead(MIC_PIN) - 2048; // AC-coupled
    vImag[i] = 0.0;
    delayMicroseconds(1000000 / SAMPLE_FREQ); // 1ms @ 1kHz
  }

  // 2. FFT
  FFT.windowing(FFTWindow::Hamming, FFTDirection::Forward);
  FFT.compute(FFTDirection::Forward);
  FFT.complexToMagnitude();

  // 3. Tìm tần số dominant
  double peak_freq = FFT.majorPeak();
  double peak_mag  = vReal[(int)(peak_freq * SAMPLES / SAMPLE_FREQ)];

  Serial.printf("Peak: %.1f Hz (magnitude: %.1f)\\n", peak_freq, peak_mag);

  // 4. In spectrum (0 - 500 Hz)
  for (int i = 0; i < SAMPLES/2; i++) {
    double freq = i * SAMPLE_FREQ / SAMPLES;
    if (freq > 500) break;
    Serial.printf("%.0f Hz: %.2f\\n", freq, vReal[i]);
  }
}
\`\`\`

### FFT Feature Extraction cho TinyML

\`\`\`python
import numpy as np

def extract_fft_features(signal, fs=1000, n_bins=16):
    """Trích xuất FFT features từ chuỗi tín hiệu"""
    N = len(signal)

    # Apply Hanning window trước FFT
    window = np.hanning(N)
    windowed = signal * window

    # FFT
    fft = np.fft.rfft(windowed)
    magnitude = np.abs(fft) / N * 2  # Scale

    # Frequency bins
    freqs = np.fft.rfftfreq(N, 1/fs)

    # Mel-spaced frequency bins (16 bins)
    mel_lo = 2595 * np.log10(1 + 0 / 700)
    mel_hi = 2595 * np.log10(1 + (fs/2) / 700)
    mel_bins = np.linspace(mel_lo, mel_hi, n_bins + 2)
    hz_bins = 700 * (10 ** (mel_bins / 2595) - 1)

    features = []
    for i in range(n_bins):
        lo, center, hi = hz_bins[i], hz_bins[i+1], hz_bins[i+2]
        mask = (freqs >= lo) & (freqs <= hi)
        if mask.any():
            features.append(np.log(np.sum(magnitude[mask]) + 1e-10))
        else:
            features.append(-23.0)  # log(1e-10)

    return np.array(features)

# Usage:
signal = np.array([...])  # 1000 samples @ 1kHz = 1 giây
features = extract_fft_features(signal)  # 16 features
\`\`\``,
      },
      {
        id:'c9s2', title:'Kalman Filter & Sensor Fusion',
        content:`## Kalman Filter & Sensor Fusion

### Vấn đề với cảm biến thực tế

Mọi cảm biến đều có **nhiễu** (noise). DHT22 có thể dao động ±2°C giữa các lần đọc kế tiếp. GPS có thể nhảy 5m. Accelerometer rung liên tục.

Giải pháp: **Sensor Fusion** — kết hợp nhiều nguồn data để ước lượng tốt hơn.

### Moving Average (Đơn giản nhất)

\`\`\`cpp
class MovingAverage {
  float buffer[16];
  int idx = 0, count = 0;
public:
  float update(float val) {
    buffer[idx] = val;
    idx = (idx + 1) % 16;
    if (count < 16) count++;
    float sum = 0;
    for (int i = 0; i < count; i++) sum += buffer[i];
    return sum / count;
  }
};

MovingAverage tempFilter, humFilter;

void loop() {
  float raw_temp = dht.readTemperature();
  float smoothed = tempFilter.update(raw_temp);
  Serial.printf("Raw:%.1f Smooth:%.1f\\n", raw_temp, smoothed);
}
\`\`\`

### Kalman Filter 1D (Tốt hơn)

\`\`\`cpp
class KalmanFilter1D {
  float Q = 0.001f;  // Process noise (uncertainty in model)
  float R = 0.1f;    // Measurement noise (sensor noise)
  float P = 1.0f;    // Estimate error covariance
  float K = 0.0f;    // Kalman gain
  float X = 0.0f;    // State estimate

public:
  KalmanFilter1D(float process_noise = 0.001f,
                 float measure_noise = 0.1f)
    : Q(process_noise), R(measure_noise) {}

  float update(float measurement) {
    // Predict
    P = P + Q;

    // Update
    K = P / (P + R);           // Kalman gain
    X = X + K * (measurement - X);  // State update
    P = (1 - K) * P;               // Error covariance update

    return X;
  }
};

KalmanFilter1D tempKF(0.001f, 0.1f);

void loop() {
  float raw  = dht.readTemperature();
  float filtered = tempKF.update(raw);
  // filtered rất mượt, ít bị ảnh hưởng bởi noise
}
\`\`\`

### IMU Sensor Fusion — Complementary Filter

\`\`\`cpp
// Kết hợp accelerometer (chính xác dài hạn, nhiễu ngắn hạn)
// và gyroscope (chính xác ngắn hạn, drift dài hạn)

#include <MPU6050_tockn.h>
MPU6050 mpu(Wire);

float pitch = 0, roll = 0;
const float ALPHA = 0.98f;  // Gyro weight
unsigned long prevTime = 0;

void updateAngles() {
  mpu.update();
  unsigned long now = millis();
  float dt = (now - prevTime) / 1000.0f;
  prevTime = now;

  // Từ accelerometer (noisy nhưng không drift)
  float accel_pitch = atan2(mpu.getAccY(), mpu.getAccZ()) * 180/PI;
  float accel_roll  = atan2(-mpu.getAccX(),
    sqrt(mpu.getAccY()*mpu.getAccY() + mpu.getAccZ()*mpu.getAccZ())) * 180/PI;

  // Complementary filter
  pitch = ALPHA * (pitch + mpu.getGyroX() * dt) + (1-ALPHA) * accel_pitch;
  roll  = ALPHA * (roll  + mpu.getGyroY() * dt) + (1-ALPHA) * accel_roll;

  Serial.printf("Pitch:%.1f° Roll:%.1f°\\n", pitch, roll);
}
\`\`\``,
      },
    ]
  },

  {
    id:'c10', title:'Deep Learning nâng cao', color:'#a855f7',
    sections:[
      {
        id:'c10s1', title:'Transfer Learning',
        content:`## Transfer Learning cho AIoT

### Khái niệm

Train từ đầu một CNN cần **hàng triệu ảnh** và nhiều giờ. Transfer Learning dùng lại weights đã train trên ImageNet (14 triệu ảnh) → fine-tune với dataset nhỏ của bạn.

### MobileNetV3 — Tối ưu cho Edge

\`\`\`python
import tensorflow as tf

# Tải pretrained MobileNetV3 Small (nhỏ nhất, phù hợp MCU)
base_model = tf.keras.applications.MobileNetV3Small(
    input_shape=(96, 96, 3),
    include_top=False,    # Bỏ phần classification head
    weights='imagenet'    # Dùng pretrained weights
)

# Freeze layers gốc (giữ nguyên feature extractor)
base_model.trainable = False

# Thêm classification head cho task của bạn
model = tf.keras.Sequential([
    base_model,
    tf.keras.layers.GlobalAveragePooling2D(),
    tf.keras.layers.Dropout(0.2),
    tf.keras.layers.Dense(64, activation='relu'),
    tf.keras.layers.Dense(NUM_CLASSES, activation='softmax')
])

# Phase 1: Train chỉ head (10-20 epochs)
model.compile('adam', 'sparse_categorical_crossentropy', ['accuracy'])
model.fit(train_data, epochs=15)

# Phase 2: Fine-tune 20 layers cuối của base model
base_model.trainable = True
for layer in base_model.layers[:-20]:
    layer.trainable = False

model.compile(tf.keras.optimizers.Adam(1e-5),  # LR nhỏ hơn!
              'sparse_categorical_crossentropy', ['accuracy'])
model.fit(train_data, epochs=10)

# Convert sang TFLite INT8 cho deployment
converter = tf.lite.TFLiteConverter.from_keras_model(model)
converter.optimizations = [tf.lite.Optimize.DEFAULT]
converter.representative_dataset = lambda: [
    [img.astype('float32')] for img, _ in train_data.take(100)
]
converter.target_spec.supported_ops = [tf.lite.OpsSet.TFLITE_BUILTINS_INT8]
tflite_quant = converter.convert()
print(f"TFLite model: {len(tflite_quant)/1024:.0f} KB")
# MobileNetV3-Small INT8: ~900KB — fits ESP32 with PSRAM
\`\`\`

### Data Augmentation cho dataset nhỏ

\`\`\`python
# Kỹ thuật tăng cường dataset tự động
augment = tf.keras.Sequential([
    tf.keras.layers.RandomFlip("horizontal"),
    tf.keras.layers.RandomRotation(0.15),
    tf.keras.layers.RandomZoom(0.15),
    tf.keras.layers.RandomBrightness(0.2),
    tf.keras.layers.RandomContrast(0.2),
])

# Áp dụng vào data pipeline
train_ds = raw_train_ds.map(
    lambda x, y: (augment(x, training=True), y)
).cache().shuffle(1000).batch(32).prefetch(tf.data.AUTOTUNE)

# Với 200 ảnh/class + augmentation → hiệu quả như 2000 ảnh
\`\`\``,
      },
      {
        id:'c10s2', title:'Reinforcement Learning cho IoT',
        content:`## Reinforcement Learning cho Điều khiển IoT

### Khái niệm RL

| Thành phần | Ý nghĩa | Ví dụ Smart AC |
|-----------|---------|---------------|
| Agent | Bộ điều khiển | ESP32 controller |
| Environment | Môi trường | Phòng + nhiệt kế |
| State (S) | Trạng thái hiện tại | Temp, humidity, hour |
| Action (A) | Hành động | AC power: 0,25,50,75,100% |
| Reward (R) | Phần thưởng | +1 nếu T∈[22,26]°C, -1 nếu ngoài |
| Policy (π) | Chiến lược | S→A mapping |

### Q-Learning đơn giản cho Smart HVAC

\`\`\`python
import numpy as np
import random

class SmartHVAC_QLearning:
    def __init__(self):
        # States: (temp_bin, hour_bin, occupancy) → discrete
        # 10 temp bins (16-35°C) × 24 hours × 2 occupied
        self.state_space  = (10, 24, 2)
        self.action_space = 5  # AC: off, 25%, 50%, 75%, 100%
        self.Q = np.zeros((*self.state_space, self.action_space))

        self.alpha   = 0.1   # Learning rate
        self.gamma   = 0.95  # Discount factor
        self.epsilon = 0.3   # Exploration (giảm theo thời gian)

    def state_to_idx(self, temp, hour, occupied):
        temp_bin = min(int((temp - 16) / 2), 9)  # 2°C bins
        return (max(0,temp_bin), int(hour) % 24, int(occupied))

    def get_action(self, state_idx):
        if random.random() < self.epsilon:
            return random.randint(0, self.action_space-1)  # Explore
        return np.argmax(self.Q[state_idx])  # Exploit

    def reward(self, temp):
        if 22 <= temp <= 26: return  1.0   # Comfortable
        if 20 <= temp <= 28: return  0.3   # OK
        if temp < 18 or temp > 32: return -2.0  # Bad
        return -0.5

    def update(self, s, a, r, s_next):
        best_next = np.max(self.Q[s_next])
        self.Q[s][a] += self.alpha * (r + self.gamma * best_next - self.Q[s][a])

    def decay_epsilon(self, episode):
        self.epsilon = max(0.05, 0.3 * (0.99 ** episode))

# Sau 10,000 episodes training trong simulation:
# Agent học tắt AC khi đã đủ mát, tránh tốn điện
# Dùng nhiều điện hơn vào giờ cao điểm khi có người
\`\`\`

### Triển khai Q-table lên ESP32

\`\`\`cpp
// Q-table sau training: 10×24×2×5 = 2400 float values = 9.6KB
// Fits ESP32 RAM!

float Q_table[10][24][2][5];  // Load từ SPIFFS

int getAction(float temp, int hour, bool occupied) {
  int temp_bin = constrain((int)((temp - 16) / 2), 0, 9);
  int best_action = 0;
  float best_q = -999.0f;

  for (int a = 0; a < 5; a++) {
    float q = Q_table[temp_bin][hour][occupied][a];
    if (q > best_q) { best_q = q; best_action = a; }
  }

  return best_action;
}

const float AC_POWERS[] = {0, 25, 50, 75, 100};  // % power
void controlAC(float temp, int hour, bool occupied) {
  int action = getAction(temp, hour, occupied);
  setACPower(AC_POWERS[action]);
}
\`\`\``,
      },
    ]
  },

  {
    id:'c11', title:'ESP-IDF & Lập trình chuyên sâu', color:'#00d4ff',
    sections:[
      {
        id:'c11s1', title:'ESP-IDF vs Arduino',
        content:`## ESP-IDF — Framework chuyên nghiệp

### So sánh ESP-IDF vs Arduino Framework

| Tiêu chí | Arduino | ESP-IDF |
|---------|---------|---------|
| Độ khó | Thấp | Cao |
| Hiệu năng | Tốt | Tốt hơn 10-30% |
| Control | Giới hạn | Full control |
| Debugging | Serial.print | GDB, JTAG |
| OTA update | Cơ bản | Rollback, partition |
| Flash encrypt | Không hỗ trợ | Có |
| Production | Prototype | Production |
| Build system | Arduino CLI | CMake |
| Dùng khi | Học, prototype | Product thực tế |

### Dự án ESP-IDF đầu tiên

\`\`\`bash
# Cài ESP-IDF
mkdir -p ~/esp && cd ~/esp
git clone --recursive https://github.com/espressif/esp-idf.git
cd esp-idf && ./install.sh esp32
source ./export.sh

# Tạo project mới từ template
idf.py create-project hello_aiot
cd hello_aiot

# Build và flash
idf.py set-target esp32
idf.py build
idf.py -p /dev/ttyUSB0 flash monitor
\`\`\`

\`\`\`c
// main/main.c — ESP-IDF style (C, không phải C++)
#include <stdio.h>
#include "freertos/FreeRTOS.h"
#include "freertos/task.h"
#include "driver/gpio.h"
#include "esp_log.h"
#include "nvs_flash.h"

#define LED_GPIO GPIO_NUM_2
static const char* TAG = "AIOT";

void led_task(void* arg) {
  gpio_config_t io = {
    .pin_bit_mask = 1ULL << LED_GPIO,
    .mode = GPIO_MODE_OUTPUT,
  };
  gpio_config(&io);

  int state = 0;
  while (1) {
    gpio_set_level(LED_GPIO, state ^= 1);
    ESP_LOGI(TAG, "LED %s", state ? "ON" : "OFF");
    vTaskDelay(pdMS_TO_TICKS(1000));
  }
}

void app_main(void) {
  nvs_flash_init();
  ESP_LOGI(TAG, "AIoT EDU - ESP-IDF Hello World");
  xTaskCreate(led_task, "led", 2048, NULL, 5, NULL);
}
\`\`\`

### NVS — Non-Volatile Storage (Lưu config)

\`\`\`c
#include "nvs_flash.h"
#include "nvs.h"

// Lưu WiFi credentials vào Flash (tồn tại qua reboot)
esp_err_t save_config(const char* ssid, const char* password) {
  nvs_handle_t handle;
  esp_err_t err = nvs_open("config", NVS_READWRITE, &handle);
  if (err != ESP_OK) return err;

  nvs_set_str(handle, "wifi_ssid", ssid);
  nvs_set_str(handle, "wifi_pass", password);
  nvs_commit(handle);
  nvs_close(handle);
  return ESP_OK;
}

esp_err_t load_config(char* ssid, char* password, size_t max_len) {
  nvs_handle_t handle;
  nvs_open("config", NVS_READONLY, &handle);
  nvs_get_str(handle, "wifi_ssid", ssid, &max_len);
  nvs_get_str(handle, "wifi_pass", password, &max_len);
  nvs_close(handle);
  return ESP_OK;
}
\`\`\``,
      },
    ]
  },
]

export const ALL_THEORY = [...THEORY, ...THEORY_EXTRA]
