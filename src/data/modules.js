export const MODULES = [
  {
    id:1, color:'#00e5ff', title:'ARDUINO CƠ BẢN',
    labs:'6 Labs', tags:['GPIO','ADC','PWM','I2C','UART','Interrupt'],
    desc:'Lập trình vi điều khiển Arduino từ cơ bản đến trung cấp.',
    labList:[
      { num:'1.1', name:'Blink LED & Serial Monitor', dur:'45 phút', diff:1,
        hw:['Arduino UNO/Nano','LED + 220Ω','Breadboard','USB cable'],
        deploy:['Mở Arduino IDE, chọn Board: Arduino UNO','Kết nối LED: Pin 13 → 220Ω → LED → GND','Upload code Blink','Mở Serial Monitor 115200 baud','Thử thay đổi delay và quan sát'],
        code:`// Lab 1.1: LED Blink + Serial
#define LED 13
int count = 0;

void setup() {
  Serial.begin(115200);
  pinMode(LED, OUTPUT);
  Serial.println("=== Lab 1.1 Start ===");
}

void loop() {
  digitalWrite(LED, HIGH);
  Serial.println("LED ON  - count: " + String(++count));
  delay(500);
  
  digitalWrite(LED, LOW);
  Serial.println("LED OFF");
  delay(500);
}`,
        result:['LED nhấp nháy 1Hz','Serial Monitor hiện đếm số lần blink','Thay đổi delay hoạt động đúng'],
        hints:['LED built-in trên pin 13 nếu không có LED ngoài','Serial.print vs println: println thêm newline','Baud rate phải khớp IDE và code'] },

      { num:'1.2', name:'Đọc nút nhấn & Debounce', dur:'60 phút', diff:1,
        hw:['Arduino UNO','2× Push button','10kΩ resistor','LED','Breadboard'],
        deploy:['Kết nối button: Pin 2 với INPUT_PULLUP (không cần điện trở ngoài)','Kết nối LED output pin 13','Implement debounce 20ms','Test phân biệt single click vs long press'],
        code:`// Lab 1.2: Button Debounce
const int BTN = 2;
const int LED = 13;
const int DEBOUNCE = 20;
const int LONG_PRESS = 1000;

bool lastState = HIGH, ledState = false;
unsigned long pressTime = 0;

void setup() {
  Serial.begin(115200);
  pinMode(BTN, INPUT_PULLUP);
  pinMode(LED, OUTPUT);
}

void loop() {
  bool curState = digitalRead(BTN);
  
  if(curState != lastState) {
    delay(DEBOUNCE);
    curState = digitalRead(BTN);
    
    if(curState == LOW) {         // Pressed
      pressTime = millis();
    } else {                       // Released
      long dur = millis() - pressTime;
      if(dur < LONG_PRESS) {
        ledState = !ledState;
        Serial.println("Short press - Toggle LED");
      } else {
        Serial.println("Long press - do something else");
      }
      digitalWrite(LED, ledState);
    }
    lastState = curState;
  }
}`,
        result:['Phân biệt short/long press chính xác','Không có ghost press','LED toggle mượt mà'],
        hints:['INPUT_PULLUP: button HIGH khi không nhấn, LOW khi nhấn','Debounce cần thiết vì bounce điện cơ 10–50ms','millis() không block như delay()'] },

      { num:'1.3', name:'DHT22 + LCD I2C', dur:'90 phút', diff:2,
        hw:['Arduino UNO','DHT22 sensor','LCD 16×2 I2C','4.7kΩ pullup','Jumper wires'],
        deploy:['Cài library: DHT sensor library + LiquidCrystal_I2C','Kết nối DHT22: VCC-5V, DATA-Pin2, GND','Kết nối LCD: SDA-A4, SCL-A5, VCC-5V','Dùng I2C Scanner tìm địa chỉ LCD (thường 0x27 hoặc 0x3F)','Test đọc cảm biến và hiển thị LCD'],
        code:`#include <DHT.h>
#include <LiquidCrystal_I2C.h>

DHT dht(2, DHT22);
LiquidCrystal_I2C lcd(0x27, 16, 2);

void setup() {
  Serial.begin(115200);
  dht.begin();
  lcd.init();
  lcd.backlight();
  lcd.setCursor(0,0);
  lcd.print("AIoT Lab - DLU");
  delay(2000);
}

void loop() {
  float temp = dht.readTemperature();
  float humi = dht.readHumidity();
  
  if(isnan(temp) || isnan(humi)) {
    lcd.clear();
    lcd.print("Sensor Error!");
    Serial.println("DHT read failed!");
    delay(2000);
    return;
  }
  
  lcd.clear();
  lcd.setCursor(0,0);
  lcd.printf("Temp: %.1f C", temp);
  lcd.setCursor(0,1);
  lcd.printf("Humi: %.1f%%", humi);
  
  Serial.printf("T:%.1f H:%.1f\\n", temp, humi);
  delay(2000);
}`,
        result:['LCD hiển thị T và H cập nhật mỗi 2s','Dữ liệu khớp với Serial Monitor','Xử lý lỗi khi sensor không phản hồi'],
        hints:['DHT22 cần thời gian warmup 2s sau power on','LCD I2C cần library LiquidCrystal_I2C của Frank de Brabander','Nếu LCD trắng: chỉnh contrast bằng potentiometer ở sau LCD'] },

      { num:'1.4', name:'Servo PWM & Potentiometer', dur:'60 phút', diff:2,
        hw:['Arduino UNO','Servo SG90','10kΩ Potentiometer','Breadboard','5V power'],
        deploy:['Kết nối Servo: Signal-Pin9 (PWM), VCC-5V, GND','Kết nối Pot: VCC-5V, GND, Wiper-A0','Map giá trị ADC (0-1023) sang góc (0-180)','Thêm buzzer báo khi vượt ngưỡng'],
        code:`#include <Servo.h>
Servo myServo;
const int POT_PIN = A0;
const int SERVO_PIN = 9;

int lastAngle = -1;

void setup() {
  Serial.begin(115200);
  myServo.attach(SERVO_PIN);
  myServo.write(0); // Init position
  Serial.println("Servo Control Ready");
}

void loop() {
  int potVal = analogRead(POT_PIN);        // 0–1023
  int angle  = map(potVal, 0, 1023, 0, 180); // 0–180°
  
  // Chỉ cập nhật khi góc thay đổi >2°
  if(abs(angle - lastAngle) > 2) {
    myServo.write(angle);
    lastAngle = angle;
    Serial.printf("Pot:%d → Angle:%d°\\n", potVal, angle);
  }
  delay(20); // 50Hz update rate
}`,
        result:['Servo theo potentiometer mượt mà','Không giật khi xoay chậm','Serial hiện giá trị real-time'],
        hints:['Servo cần nguồn 5V đủ dòng (>500mA), không lấy từ Arduino 5V pin nếu tải nặng','Deadband 2° tránh jitter','PWM servo: 1ms=0°, 1.5ms=90°, 2ms=180° ở 50Hz'] },

      { num:'1.5', name:'Cảm biến siêu âm HC-SR04', dur:'75 phút', diff:2,
        hw:['Arduino UNO','HC-SR04 ultrasonic','Servo','LED 3 màu','Breadboard'],
        deploy:['Kết nối HC-SR04: TRIG-Pin9, ECHO-Pin10, VCC-5V','Implement đo khoảng cách bằng pulseIn()','Thêm hệ thống cảnh báo: xanh(>50cm), vàng(20-50cm), đỏ(<20cm)','Kết hợp Servo để quét góc'],
        code:`const int TRIG = 9, ECHO = 10;
const int LED_R=4, LED_G=5, LED_Y=6;

void setup() {
  Serial.begin(115200);
  pinMode(TRIG, OUTPUT);
  pinMode(ECHO, INPUT);
  pinMode(LED_R, OUTPUT);
  pinMode(LED_G, OUTPUT);
  pinMode(LED_Y, OUTPUT);
}

float measureDistance() {
  // Tạo xung TRIG 10µs
  digitalWrite(TRIG, LOW);  delayMicroseconds(2);
  digitalWrite(TRIG, HIGH); delayMicroseconds(10);
  digitalWrite(TRIG, LOW);
  
  // Đo thời gian ECHO HIGH
  long duration = pulseIn(ECHO, HIGH, 30000); // timeout 30ms
  if(duration == 0) return -1; // Out of range
  
  // Tính khoảng cách: v_sound = 343m/s = 0.0343cm/µs
  return duration * 0.0343 / 2.0;
}

void setAlert(float dist) {
  digitalWrite(LED_R, dist < 20 && dist > 0);
  digitalWrite(LED_Y, dist >= 20 && dist < 50);
  digitalWrite(LED_G, dist >= 50);
}

void loop() {
  float dist = measureDistance();
  if(dist > 0) {
    Serial.printf("Distance: %.1f cm\\n", dist);
    setAlert(dist);
  }
  delay(100);
}`,
        result:['Đo khoảng cách 2–400cm chính xác ±3mm','LED cảnh báo 3 mức','Serial log real-time'],
        hints:['HC-SR04 range: 2cm–400cm','Không đo vật nhỏ <1cm²','pulseIn timeout quan trọng để tránh block mãi mãi','Tốc độ âm thanh thay đổi theo nhiệt độ: v=331+0.6×T'] },

      { num:'1.6', name:'EEPROM & Data Logging', dur:'90 phút', diff:3,
        hw:['Arduino UNO','DHT22','Button','LED','USB to Serial'],
        deploy:['Dùng EEPROM.h lưu sensor data','Implement circular buffer 50 entries','Đọc lại data khi reset','Export data qua Serial'],
        code:`#include <EEPROM.h>
#include <DHT.h>
DHT dht(2, DHT22);

struct SensorLog {
  float temp, humi;
  unsigned long ts;
};

const int MAX_LOGS = 50;
const int ADDR_IDX  = 0;  // 1 byte: current index
const int ADDR_DATA = 10; // SensorLog array start

int logIdx = 0;

void logData(float t, float h) {
  SensorLog entry = {t, h, millis()/1000};
  int addr = ADDR_DATA + logIdx * sizeof(SensorLog);
  EEPROM.put(addr, entry);
  EEPROM.put(ADDR_IDX, (logIdx + 1) % MAX_LOGS);
  logIdx = (logIdx + 1) % MAX_LOGS;
}

void dumpLogs() {
  Serial.println("=== Saved Logs ===");
  for(int i=0; i<MAX_LOGS; i++) {
    SensorLog e;
    EEPROM.get(ADDR_DATA + i*sizeof(SensorLog), e);
    if(e.ts > 0)
      Serial.printf("[%lu s] T:%.1f H:%.1f\\n", e.ts, e.temp, e.humi);
  }
}

void setup() {
  Serial.begin(115200);
  dht.begin();
  EEPROM.get(ADDR_IDX, logIdx);
  if(logIdx < 0 || logIdx >= MAX_LOGS) logIdx = 0;
  dumpLogs();
}

void loop() {
  float t=dht.readTemperature(), h=dht.readHumidity();
  if(!isnan(t)) logData(t, h);
  delay(10000); // Log mỗi 10 giây
}`,
        result:['Data tồn tại qua reset','Circular buffer không tràn','Export đúng format CSV'],
        hints:['Arduino UNO EEPROM: 1KB (1024 bytes)','EEPROM.put()/get() cho struct','Ghi EEPROM chậm ~3.3ms/byte, giới hạn 100,000 chu kỳ'] },
    ]
  },
  {
    id:2, color:'#00e676', title:'ESP8266 / ESP32 IoT',
    labs:'6 Labs', tags:['WiFi','MQTT','HTTP','OTA','BLE','DeepSleep'],
    desc:'Kết nối IoT Cloud với ESP8266/ESP32 qua WiFi, MQTT và REST API.',
    labList:[
      { num:'2.1', name:'ESP32 WiFi Station + Web Server', dur:'90 phút', diff:2,
        hw:['ESP32 DevKit','DHT22','LED','USB cable'],
        deploy:['Cài ESP32 board trong Arduino IDE','Kết nối WiFi STA mode','Chạy AsyncWebServer','Tạo dashboard HTML+JS','API /sensors trả JSON'],
        code:`#include <WiFi.h>
#include <ESPAsyncWebServer.h>
#include <DHT.h>
#include <ArduinoJson.h>

const char* SSID = "YourWiFi";
const char* PASS = "YourPassword";

DHT dht(4, DHT22);
AsyncWebServer server(80);

const char INDEX_HTML[] PROGMEM = R"(
<!DOCTYPE html><html><head>
<title>ESP32 Dashboard</title>
<style>
  body{font-family:sans-serif;background:#0a0c10;color:#e0f0ff;text-align:center}
  .card{background:#1a2535;border-radius:12px;padding:20px;margin:10px auto;max-width:300px}
  .val{font-size:3em;color:#00e5ff;font-weight:bold}
</style></head><body>
<h2>ESP32 AIoT Dashboard</h2>
<div class="card"><div class="val" id="temp">--</div><p>Temperature (°C)</p></div>
<div class="card"><div class="val" id="humi">--</div><p>Humidity (%)</p></div>
<script>
  setInterval(()=>{
    fetch('/api/sensors').then(r=>r.json()).then(d=>{
      document.getElementById('temp').textContent = d.temp.toFixed(1);
      document.getElementById('humi').textContent = d.humi.toFixed(1);
    });
  }, 2000);
</script></body></html>)";

void setup() {
  Serial.begin(115200);
  dht.begin();
  WiFi.begin(SSID, PASS);
  while(WiFi.status() != WL_CONNECTED) { delay(500); Serial.print('.'); }
  Serial.println("\\nIP: " + WiFi.localIP().toString());

  server.on("/", HTTP_GET, [](AsyncWebServerRequest* req){
    req->send_P(200, "text/html", INDEX_HTML);
  });
  server.on("/api/sensors", HTTP_GET, [](AsyncWebServerRequest* req){
    StaticJsonDocument<64> doc;
    doc["temp"] = dht.readTemperature();
    doc["humi"] = dht.readHumidity();
    doc["ip"]   = WiFi.localIP().toString();
    String json; serializeJson(doc, json);
    req->send(200, "application/json", json);
  });
  server.begin();
}
void loop() {}`,
        result:['Web dashboard realtime trên browser','API JSON phản hồi <50ms','Responsive trên mobile'],
        hints:['AsyncWebServer non-blocking tốt hơn WebServer bình thường','PROGMEM lưu HTML trong Flash tiết kiệm RAM','WiFi.localIP() để biết địa chỉ truy cập'] },

      { num:'2.2', name:'MQTT + Node-RED Dashboard', dur:'120 phút', diff:3,
        hw:['ESP32','DHT22','LED','PC chạy Node-RED','HiveMQ broker'],
        deploy:['Cài Node-RED: npm install -g node-red','Cài palette: node-red-dashboard','ESP32 publish JSON lên MQTT','Node-RED subscribe và hiển thị gauge/chart','Tạo control panel từ Node-RED → ESP32'],
        code:`#include <WiFi.h>
#include <PubSubClient.h>
#include <ArduinoJson.h>
#include <DHT.h>

const char* MQTT_HOST = "broker.hivemq.com";
const char* TOPIC_DATA = "dlu/aiot/esp32/sensors";
const char* TOPIC_CMD  = "dlu/aiot/esp32/command";

WiFiClient wifiClient;
PubSubClient mqtt(wifiClient);
DHT dht(4, DHT22);

void onMessage(char* topic, byte* payload, unsigned int len) {
  StaticJsonDocument<64> doc;
  deserializeJson(doc, payload, len);
  String cmd = doc["cmd"] | "";
  int val = doc["val"] | 0;
  
  if(cmd == "led") {
    digitalWrite(2, val ? HIGH : LOW);
    Serial.printf("LED → %s\\n", val ? "ON" : "OFF");
  } else if(cmd == "restart") {
    Serial.println("Restarting...");
    ESP.restart();
  }
}

void reconnect() {
  while(!mqtt.connected()) {
    String clientId = "ESP32-" + String(random(0xffff), HEX);
    if(mqtt.connect(clientId.c_str())) {
      mqtt.subscribe(TOPIC_CMD);
      Serial.println("MQTT connected");
    } else delay(3000);
  }
}

void publishData() {
  StaticJsonDocument<256> doc;
  doc["device"]  = WiFi.macAddress();
  doc["temp"]    = dht.readTemperature();
  doc["humi"]    = dht.readHumidity();
  doc["rssi"]    = WiFi.RSSI();
  doc["heap"]    = ESP.getFreeHeap();
  doc["uptime"]  = millis()/1000;
  
  char buf[256]; serializeJson(doc, buf);
  mqtt.publish(TOPIC_DATA, buf, true);
  Serial.println("Published: " + String(buf));
}

void setup() {
  Serial.begin(115200);
  dht.begin();
  pinMode(2, OUTPUT);
  
  WiFi.begin("SSID", "PASS");
  while(WiFi.status() != WL_CONNECTED) delay(500);
  
  mqtt.setServer(MQTT_HOST, 1883);
  mqtt.setCallback(onMessage);
  reconnect();
}

void loop() {
  if(!mqtt.connected()) reconnect();
  mqtt.loop();
  
  static unsigned long t = 0;
  if(millis()-t > 5000) { t=millis(); publishData(); }
}`,
        result:['MQTT pub/sub hoạt động','Node-RED hiện gauge realtime','Control LED từ dashboard'],
        hints:['HiveMQ free broker: broker.hivemq.com port 1883','Node-RED import flow từ clipboard','QoS 1 đảm bảo delivery ít nhất 1 lần','retained=true: broker lưu tin nhắn cuối cho subscriber mới'] },

      { num:'2.3', name:'OTA Firmware Update', dur:'90 phút', diff:3,
        hw:['ESP32','WiFi network','Arduino IDE + ESP32 OTA'],
        deploy:['Thêm ArduinoOTA library','Upload lần đầu qua USB','Lần sau upload qua WiFi','Test: thay đổi LED pattern và OTA'],
        code:`#include <WiFi.h>
#include <ArduinoOTA.h>

void setup() {
  Serial.begin(115200);
  WiFi.begin("SSID", "PASS");
  while(WiFi.status() != WL_CONNECTED) delay(500);

  // OTA Setup
  ArduinoOTA.setHostname("esp32-aiot");
  ArduinoOTA.setPassword("ota_password");

  ArduinoOTA.onStart([]() {
    Serial.println("OTA Start: " + String(
      ArduinoOTA.getCommand()==U_FLASH ? "Firmware":"SPIFFS"));
  });
  ArduinoOTA.onProgress([](unsigned int prog, unsigned int total) {
    Serial.printf("Progress: %u%%\\r", prog*100/total);
  });
  ArduinoOTA.onEnd([]() {
    Serial.println("\\nOTA Done! Restarting...");
  });
  ArduinoOTA.onError([](ota_error_t err) {
    Serial.printf("OTA Error[%u]\\n", err);
  });
  ArduinoOTA.begin();
  Serial.println("OTA Ready at " + WiFi.localIP().toString());
}

void loop() {
  ArduinoOTA.handle(); // MUST be in loop!
  
  // === VERSION 2 CODE (upload via OTA) ===
  static int ledState = 0;
  static unsigned long t = 0;
  if(millis()-t > 200) {
    t = millis();
    digitalWrite(2, ledState++ % 2);
  }
}`,
        result:['OTA upload thành công qua WiFi','Progress bar hiện %','Password protection hoạt động'],
        hints:['IDE: Tools→Port chọn Network ports','ESP32 phải cùng mạng LAN với PC','Firewall cần mở port UDP 3232','Luôn giữ ArduinoOTA.handle() trong loop()'] },

      { num:'2.4', name:'BLE + Điện thoại Android', dur:'120 phút', diff:3,
        hw:['ESP32','Cảm biến','Điện thoại Android','nRF Connect app'],
        deploy:['ESP32 chạy BLE GATT Server','Tạo Service + 2 Characteristics (notify+write)','Test với nRF Connect app','Gửi sensor data qua notify','Nhận lệnh điều khiển qua write'],
        code:`#include <BLEDevice.h>
#include <BLEServer.h>
#include <BLEUtils.h>
#include <BLE2902.h>

#define SERVICE_UUID    "12345678-1234-1234-1234-123456789abc"
#define SENSOR_UUID     "12345678-1234-1234-1234-123456789001"
#define CONTROL_UUID    "12345678-1234-1234-1234-123456789002"

BLECharacteristic* sensorChar;
bool clientConnected = false;

class ConnCallback: public BLEServerCallbacks {
  void onConnect(BLEServer* s)    { clientConnected = true;  Serial.println("BLE Connected"); }
  void onDisconnect(BLEServer* s) { clientConnected = false; BLEDevice::startAdvertising(); }
};

class ControlCallback: public BLECharacteristicCallbacks {
  void onWrite(BLECharacteristic* c) {
    String val = c->getValue().c_str();
    Serial.println("BLE Received: " + val);
    if(val == "LED_ON")  digitalWrite(2, HIGH);
    if(val == "LED_OFF") digitalWrite(2, LOW);
  }
};

void setup() {
  Serial.begin(115200);
  pinMode(2, OUTPUT);
  BLEDevice::init("ESP32-AIoT-DLU");
  BLEServer* server = BLEDevice::createServer();
  server->setCallbacks(new ConnCallback());
  BLEService* service = server->createService(SERVICE_UUID);
  
  sensorChar = service->createCharacteristic(SENSOR_UUID,
    BLECharacteristic::PROPERTY_NOTIFY);
  sensorChar->addDescriptor(new BLE2902());
  
  BLECharacteristic* ctrlChar = service->createCharacteristic(CONTROL_UUID,
    BLECharacteristic::PROPERTY_WRITE);
  ctrlChar->setCallbacks(new ControlCallback());
  
  service->start();
  BLEAdvertising* adv = BLEDevice::getAdvertising();
  adv->addServiceUUID(SERVICE_UUID);
  adv->setScanResponse(true);
  BLEDevice::startAdvertising();
  Serial.println("BLE Advertising...");
}

void loop() {
  if(clientConnected) {
    char buf[32];
    sprintf(buf, "T:%.1f H:%.1f", dht.readTemperature(), dht.readHumidity());
    sensorChar->setValue(buf);
    sensorChar->notify();
  }
  delay(1000);
}`,
        result:['BLE discovery trên nRF Connect','Notify data cập nhật 1s','Write command điều khiển LED'],
        hints:['Android 6+ cần cấp quyền Location để scan BLE','BLE2902 descriptor cần để client enable notify','BLEDevice::startAdvertising() khi disconnect để reconnect được','UUID tự tạo ngẫu nhiên, không nhất thiết dùng UUID chuẩn'] },

      { num:'2.5', name:'Deep Sleep & Battery IoT', dur:'90 phút', diff:3,
        hw:['ESP32','DHT22','18650 battery 3.7V','TP4056 charger','Voltage divider'],
        deploy:['Implement deep sleep 5 phút','Wake → đọc sensor → gửi MQTT → ngủ lại','Đo dòng điện bằng multimeter','Tính thời gian hoạt động từ pin 3000mAh'],
        code:`#include <WiFi.h>
#include <PubSubClient.h>
#include <DHT.h>
#include <esp_sleep.h>

#define uS_TO_S 1000000ULL
#define SLEEP_MIN 5  // Sleep 5 phút

// Biến lưu qua deep sleep (RTC RAM)
RTC_DATA_ATTR int bootCount = 0;
RTC_DATA_ATTR float lastTemp = 0;

DHT dht(4, DHT22);

bool connectWiFi() {
  WiFi.begin("SSID", "PASS");
  int retries = 0;
  while(WiFi.status() != WL_CONNECTED && retries++ < 20) delay(500);
  return WiFi.status() == WL_CONNECTED;
}

void sendData(float temp, float humi) {
  WiFiClient client;
  PubSubClient mqtt(client);
  mqtt.setServer("broker.hivemq.com", 1883);
  if(mqtt.connect("esp32_sleep")) {
    char buf[128];
    sprintf(buf, "{\\"temp\\":%.1f,\\"humi\\":%.1f,\\"boot\\":%d}", temp, humi, bootCount);
    mqtt.publish("dlu/aiot/battery", buf);
    mqtt.loop();
    delay(100);
    mqtt.disconnect();
  }
}

void setup() {
  Serial.begin(115200);
  bootCount++;
  Serial.printf("Boot #%d, wake reason: %d\\n", bootCount, esp_sleep_get_wakeup_cause());
  
  dht.begin(); delay(2000);
  float temp = dht.readTemperature();
  float humi = dht.readHumidity();
  
  // Chỉ gửi nếu thay đổi >0.5°C
  if(!isnan(temp) && abs(temp - lastTemp) > 0.5) {
    if(connectWiFi()) {
      sendData(temp, humi);
      lastTemp = temp;
    }
    WiFi.disconnect(true);
  }
  
  // Battery voltage (ADC + voltage divider)
  int adcVal = analogRead(34);
  float vbat = adcVal * 3.3 / 4095 * 2; // 2× divider
  Serial.printf("Vbat: %.2fV\\n", vbat);
  
  // Go to sleep
  esp_sleep_enable_timer_wakeup(SLEEP_MIN * 60 * uS_TO_S);
  Serial.printf("Sleeping %d min...\\n", SLEEP_MIN);
  Serial.flush();
  esp_deep_sleep_start();
}
void loop() {}`,
        result:['Deep sleep <15µA','Pin 3000mAh: >3 tháng','Data gửi đúng khi thay đổi'],
        hints:['Active WiFi: ~150mA, Deep sleep: ~10µA — khác biệt 15000 lần!','RTC_DATA_ATTR giữ biến qua deep sleep','Voltage divider: 2×100kΩ → chia đôi điện áp','esp_sleep_get_wakeup_cause(): ESP_SLEEP_WAKEUP_TIMER=4'] },

      { num:'2.6', name:'ESP32-CAM Face Detection', dur:'150 phút', diff:4,
        hw:['ESP32-CAM AI-Thinker','FTDI USB-Serial','5V 2A nguồn','LED','Jumper wires'],
        deploy:['Nạp code qua FTDI (IO0=GND khi upload)','Enable camera face detection','Stream MJPEG qua WiFi','Hiển thị bounding box khuôn mặt','Đếm số khuôn mặt realtime'],
        code:`#include "esp_camera.h"
#include "esp_http_server.h"
#include <WiFi.h>
#include "fd_forward.h"  // Face detection

// AI-Thinker ESP32-CAM pinout
#define CAM_PIN_PWDN  32
#define CAM_PIN_RESET -1
#define CAM_PIN_XCLK   0
#define CAM_PIN_SIOD  26
#define CAM_PIN_SIOC  27
#define CAM_PIN_D7    35
#define CAM_PIN_D6    34
#define CAM_PIN_D5    39
#define CAM_PIN_D4    36
#define CAM_PIN_D3    21
#define CAM_PIN_D2    19
#define CAM_PIN_D1    18
#define CAM_PIN_D0     5
#define CAM_PIN_VSYNC 25
#define CAM_PIN_HREF  23
#define CAM_PIN_PCLK  22

camera_config_t cam_config = {
  .pin_pwdn=CAM_PIN_PWDN, .pin_reset=CAM_PIN_RESET,
  .pin_xclk=CAM_PIN_XCLK, .pin_sscb_sda=CAM_PIN_SIOD,
  .pin_sscb_scl=CAM_PIN_SIOC,
  .pin_d7=CAM_PIN_D7, .pin_d6=CAM_PIN_D6, .pin_d5=CAM_PIN_D5,
  .pin_d4=CAM_PIN_D4, .pin_d3=CAM_PIN_D3, .pin_d2=CAM_PIN_D2,
  .pin_d1=CAM_PIN_D1, .pin_d0=CAM_PIN_D0,
  .pin_vsync=CAM_PIN_VSYNC, .pin_href=CAM_PIN_HREF,
  .pin_pclk=CAM_PIN_PCLK,
  .xclk_freq_hz=20000000,
  .ledc_timer=LEDC_TIMER_0, .ledc_channel=LEDC_CHANNEL_0,
  .pixel_format=PIXFORMAT_JPEG,
  .frame_size=FRAMESIZE_QVGA,  // 320×240
  .jpeg_quality=12, .fb_count=1
};

void setup() {
  Serial.begin(115200);
  
  if(esp_camera_init(&cam_config) != ESP_OK) {
    Serial.println("Camera init FAILED!");
    return;
  }
  
  WiFi.begin("SSID", "PASS");
  while(WiFi.status() != WL_CONNECTED) delay(500);
  Serial.println("Stream: http://" + WiFi.localIP().toString() + "/stream");
  
  startCameraServer(); // Built-in streaming server
}
void loop() { delay(10000); }`,
        result:['Stream MJPEG qua browser','Face detection realtime','Đếm khuôn mặt đúng'],
        hints:['ESP32-CAM cần 5V 2A ổn định','Upload: IO0 kết nối GND, sau đó bấm Reset','Sau upload: tháo dây IO0-GND','QVGA (320×240) đủ nhanh cho face detection'] },
    ]
  },
  {
    id:3, color:'#e040fb', title:'EDGE AI & MACHINE LEARNING',
    labs:'5 Labs', tags:['TFLite','Gesture','Sound','Anomaly','OpenCV'],
    desc:'Triển khai AI/ML trực tiếp trên thiết bị edge không cần cloud.',
    labList:[
      { num:'3.1', name:'Phân loại cử chỉ tay (MPU6050 + TFLite)', dur:'180 phút', diff:4,
        hw:['ESP32','MPU6050','TFLite Micro library','Python/Colab'],
        deploy:['Thu thập 200 mẫu/class (4 class) với MPU6050','Train model LSTM trên Colab','Convert → TFLite → C array','Deploy lên ESP32','Test accuracy real-time'],
        code:`// Phase 1: Thu thập data (chạy trước)
// Ghi ra Serial → save CSV trên PC

// Phase 2: Deploy model
#include <TensorFlowLite_ESP32.h>
#include "gesture_model.h"
#include <MPU6050_light.h>
#include <Wire.h>

const char* LABELS[] = {"idle","wave","punch","shake"};
const int NUM_SAMPLES = 20;
const int NUM_FEATURES = 6; // ax,ay,az,gx,gy,gz
float sample_buffer[NUM_SAMPLES * NUM_FEATURES];

MPU6050 mpu(Wire);
tflite::MicroInterpreter* interpreter;
TfLiteTensor *input, *output;
uint8_t tensor_arena[48*1024];

void setupModel() {
  const tflite::Model* model = tflite::GetModel(g_gesture_model);
  static tflite::MicroErrorReporter reporter;
  static tflite::AllOpsResolver resolver;
  static tflite::MicroInterpreter interp(model, resolver,
    tensor_arena, sizeof(tensor_arena), &reporter);
  interpreter = &interp;
  interpreter->AllocateTensors();
  input  = interpreter->input(0);
  output = interpreter->output(0);
}

void collectSample() {
  for(int i=0; i<NUM_SAMPLES; i++) {
    mpu.update();
    int idx = i * NUM_FEATURES;
    sample_buffer[idx+0] = mpu.getAccX() / 16384.0f;
    sample_buffer[idx+1] = mpu.getAccY() / 16384.0f;
    sample_buffer[idx+2] = mpu.getAccZ() / 16384.0f;
    sample_buffer[idx+3] = mpu.getGyroX() / 131.0f;
    sample_buffer[idx+4] = mpu.getGyroY() / 131.0f;
    sample_buffer[idx+5] = mpu.getGyroZ() / 131.0f;
    delay(50); // 50ms per sample → 1s total
  }
}

int predict() {
  int len = NUM_SAMPLES * NUM_FEATURES;
  for(int i=0; i<len; i++) input->data.f[i] = sample_buffer[i];
  interpreter->Invoke();
  int best = 0;
  for(int i=1; i<4; i++)
    if(output->data.f[i] > output->data.f[best]) best = i;
  return best;
}

void setup() {
  Serial.begin(115200);
  Wire.begin();
  mpu.begin();
  mpu.calcOffsets();
  setupModel();
  Serial.println("Ready! Wave hand...");
}

void loop() {
  collectSample();
  int g = predict();
  Serial.printf("Gesture: %s (%.0f%%)\\n",
    LABELS[g], output->data.f[g]*100);
}`,
        result:['Accuracy >90% trên 4 class','Latency <100ms per inference','Real-time prediction ổn định'],
        hints:['Thu thập data đa dạng: nhiều người, tốc độ khác nhau','Normalize features về [-1,1] trước khi train','Quantization giảm model từ 500KB→125KB cho ESP32','Tensor arena 48KB đủ cho model nhỏ'] },

      { num:'3.2', name:'Phát hiện bất thường (Anomaly Detection)', dur:'150 phút', diff:4,
        hw:['ESP32','Vibration sensor SW-420','Temperature sensor','Python'],
        deploy:['Thu thập 500 mẫu "normal" operation','Train Autoencoder trên Python','Threshold reconstruction error','Deploy: cảnh báo khi error vượt ngưỡng'],
        code:`// Autoencoder-based Anomaly Detection
// Model nhỏ: Encoder 10→5→2, Decoder 2→5→10
#include <TensorFlowLite_ESP32.h>
#include "autoencoder_model.h"

const int INPUT_SIZE = 10;
float features[INPUT_SIZE];
float threshold = 0.08; // Tìm qua validation set

float getReconstructionError() {
  for(int i=0; i<INPUT_SIZE; i++) input->data.f[i] = features[i];
  interpreter->Invoke();
  
  float mse = 0;
  for(int i=0; i<INPUT_SIZE; i++) {
    float diff = output->data.f[i] - features[i];
    mse += diff * diff;
  }
  return mse / INPUT_SIZE;
}

void extractFeatures() {
  // Lấy 10 đặc trưng từ vibration sensor trong 0.5s
  float samples[50];
  for(int i=0; i<50; i++) {
    samples[i] = analogRead(34) / 4095.0f;
    delayMicroseconds(10000); // 10ms → 100Hz
  }
  // Features: mean, std, min, max, RMS + FFT top 5
  features[0] = computeMean(samples, 50);
  features[1] = computeStd(samples, 50);
  features[2] = computeMin(samples, 50);
  features[3] = computeMax(samples, 50);
  features[4] = computeRMS(samples, 50);
  // FFT frequencies 5-9...
}

void loop() {
  extractFeatures();
  float error = getReconstructionError();
  
  if(error > threshold) {
    Serial.printf("ANOMALY DETECTED! Error=%.4f > %.4f\\n", error, threshold);
    digitalWrite(LED_ALERT, HIGH);
    // MQTT alert
  } else {
    Serial.printf("Normal. Error=%.4f\\n", error);
    digitalWrite(LED_ALERT, LOW);
  }
  delay(500);
}`,
        result:['False positive <5%','Phát hiện anomaly <1s','Threshold tối ưu từ validation'],
        hints:['Autoencoder: normal → compressed → reconstruct, lỗi cao = anomaly','Threshold: F1-score tối đa trên validation set','Chuẩn hóa features về [0,1] quan trọng','Sliding window để smoothing kết quả'] },

      { num:'3.3', name:'Nhận dạng từ khóa âm thanh', dur:'180 phút', diff:4,
        hw:['ESP32-S3 hoặc ESP32 + I2S mic','INMP441 microphone','LED','Speaker'],
        deploy:['Cài ESP32-audioI2S library','Lấy audio 1s → FFT → Mel spectrogram','Train CNN nhỏ trên Google Speech Commands dataset','Deploy: nhận dạng "yes/no/on/off"'],
        code:`#include <driver/i2s.h>
#include <TensorFlowLite_ESP32.h>
#include "keyword_model.h"

#define I2S_WS   15
#define I2S_SD   13
#define I2S_SCK  14
#define SAMPLE_RATE 16000
#define SAMPLES     16000  // 1 giây audio

int16_t audio_buf[SAMPLES];
float mel_features[40*40]; // 40 mel × 40 time frames

void setupI2S() {
  i2s_config_t cfg = {
    .mode = (i2s_mode_t)(I2S_MODE_MASTER | I2S_MODE_RX),
    .sample_rate = SAMPLE_RATE,
    .bits_per_sample = I2S_BITS_PER_SAMPLE_16BIT,
    .channel_format = I2S_CHANNEL_FMT_ONLY_LEFT,
    .communication_format = I2S_COMM_FORMAT_STAND_I2S,
    .intr_alloc_flags = 0,
    .dma_buf_count = 8,
    .dma_buf_len = 1024,
    .use_apll = false
  };
  i2s_pin_config_t pins = {
    .bck_io_num=I2S_SCK, .ws_io_num=I2S_WS,
    .data_out_num=-1, .data_in_num=I2S_SD
  };
  i2s_driver_install(I2S_NUM_0, &cfg, 0, NULL);
  i2s_set_pin(I2S_NUM_0, &pins);
}

// Simplified — in real code: compute MFCC/Mel spectrogram
void recordAndPredict() {
  size_t bytes;
  i2s_read(I2S_NUM_0, audio_buf, sizeof(audio_buf), &bytes, portMAX_DELAY);
  
  // Compute 40×40 Mel spectrogram (implement in DSP library)
  computeMelSpectrogram(audio_buf, SAMPLES, mel_features);
  
  // Run inference
  for(int i=0; i<1600; i++) input->data.f[i] = mel_features[i];
  interpreter->Invoke();
  
  const char* keywords[] = {"silence","yes","no","on","off"};
  int best=0;
  for(int i=1;i<5;i++) if(output->data.f[i]>output->data.f[best]) best=i;
  
  if(output->data.f[best] > 0.8) // Confidence threshold
    Serial.printf("Keyword: %s (%.0f%%)\\n", keywords[best], output->data.f[best]*100);
}`,
        result:['WER <10% cho 5 keywords','Latency 200ms per inference','Hoạt động trong môi trường ồn vừa'],
        hints:['INMP441 I2S mic chất lượng tốt hơn analog mic','MFCC 40 coefficients là standard cho speech','Augmentation: noise addition, time stretch để model robust','Confidence threshold 0.8 giảm false detection'] },
    ]
  },
  {
    id:4, color:'#ffd740', title:'FPGA & VERILOG',
    labs:'4 Labs', tags:['Verilog','FSM','UART','VGA','Signal Processing'],
    desc:'Thiết kế hệ thống số trên FPGA Xilinx Basys3 với Verilog.',
    labList:[
      { num:'4.1', name:'LED patterns & 7-segment decoder', dur:'90 phút', diff:2,
        hw:['Basys3 FPGA','Vivado 2023','USB cable'],
        deploy:['Tạo project Vivado, chọn Artix-7 XC7A35T','Viết Verilog module LED chaser','Implement 7-segment decoder','Tạo testbench simulation','Generate bitstream, program board'],
        code:`// 4-digit 7-segment multiplexer
module seg7_mux(
    input  clk,          // 100MHz
    input  [15:0] data,  // 4 digits BCD
    output reg [6:0] seg,
    output reg [3:0] an
);
    reg [16:0] refresh_counter = 0;
    reg [1:0] digit_select;
    reg [3:0] digit_data;
    
    // 1kHz refresh (100MHz / 100000)
    always @(posedge clk) begin
        if(refresh_counter == 100000) begin
            refresh_counter <= 0;
            digit_select <= digit_select + 1;
        end else refresh_counter <= refresh_counter + 1;
    end
    
    // Anode select (active LOW)
    always @(*) begin
        case(digit_select)
            2'd0: begin an=4'b1110; digit_data=data[3:0];   end
            2'd1: begin an=4'b1101; digit_data=data[7:4];   end
            2'd2: begin an=4'b1011; digit_data=data[11:8];  end
            2'd3: begin an=4'b0111; digit_data=data[15:12]; end
        endcase
    end
    
    // BCD to 7-segment decoder (active LOW segments)
    always @(*) begin
        case(digit_data)
          4'd0: seg=7'b0000001; 4'd1: seg=7'b1001111;
          4'd2: seg=7'b0010010; 4'd3: seg=7'b0000110;
          4'd4: seg=7'b1001100; 4'd5: seg=7'b0100100;
          4'd6: seg=7'b0100000; 4'd7: seg=7'b0001111;
          4'd8: seg=7'b0000000; 4'd9: seg=7'b0000100;
          default: seg=7'b1111111; // Blank
        endcase
    end
endmodule`,
        result:['7-segment hiện 4 chữ số','Multiplexing không flickering','Simulation wave đúng'],
        hints:['Basys3: 7-segment cathode chung, segments active LOW, anode active LOW','Refresh >50Hz tránh nhấp nháy mắt thấy được','XDC constraint file cần thiết để map port → pin thực'] },

      { num:'4.2', name:'UART Protocol Implementation', dur:'120 phút', diff:3,
        hw:['Basys3','USB-UART cable','Terminal software (PuTTY)'],
        deploy:['Implement UART TX 115200 8N1 từ đầu','Implement UART RX với oversampling','Test echo: nhận → gửi lại','Hiển thị ký tự nhận lên 7-segment'],
        code:`// UART Transmitter 115200 8N1
module uart_tx(
    input       clk,        // 100MHz
    input       tx_start,
    input [7:0] tx_data,
    output reg  tx,
    output reg  tx_busy
);
    localparam CLK_DIV = 868; // 100MHz / 115200 ≈ 868 cycles/bit
    reg [9:0] shift_reg;     // start + 8 data + stop
    reg [9:0] clk_counter;
    reg [3:0] bit_counter;
    
    always @(posedge clk) begin
        if(!tx_busy && tx_start) begin
            shift_reg   <= {1'b1, tx_data, 1'b0}; // stop,data,start
            clk_counter <= 0;
            bit_counter <= 0;
            tx_busy     <= 1;
            tx          <= 0; // start bit
        end else if(tx_busy) begin
            if(clk_counter == CLK_DIV-1) begin
                clk_counter <= 0;
                bit_counter <= bit_counter + 1;
                shift_reg   <= {1'b1, shift_reg[9:1]}; // LSB first
                tx          <= shift_reg[1];
                if(bit_counter == 9) tx_busy <= 0;
            end else clk_counter <= clk_counter + 1;
        end else tx <= 1; // Idle HIGH
    end
endmodule`,
        result:['UART TX 115200 8N1 hoạt động','Echo test qua PuTTY thành công','Oscilloscope verify waveform'],
        hints:['UART idle HIGH, start bit LOW, stop bit HIGH','8N1: 8 data bits, No parity, 1 stop bit','Oversampling RX: 16× clock để sample ở giữa bit','PuTTY: Serial, COM port đúng, 115200, 8N1'] },
    ]
  },
  {
    id:5, color:'#1de9b6', title:'DỰ ÁN TÍCH HỢP',
    labs:'4 Labs', tags:['MQTT','Dashboard','AI','LoRa','Solar'],
    desc:'Dự án AIoT hoàn chỉnh tích hợp nhiều công nghệ.',
    labList:[
      { num:'5.1', name:'Smart Home Controller', dur:'240 phút', diff:4,
        hw:['ESP32','Relay 4 kênh','PIR sensor','DHT22','LED strip','OLED 0.96"'],
        deploy:['Tích hợp 4 cảm biến + 4 relay','MQTT pub sensor, sub command','Web dashboard điều khiển từ xa','Lịch tự động: đèn tự tắt theo giờ','Voice command qua MQTT'],
        code:`// Smart Home — Multi-sensor + Multi-actuator
#include <WiFi.h>
#include <PubSubClient.h>
#include <ArduinoJson.h>
#include <DHT.h>
#include <Adafruit_SSD1306.h>

// Pins
#define DHT_PIN     4
#define PIR_PIN    14
#define RELAY_1    26  // Light
#define RELAY_2    27  // Fan
#define RELAY_3    25  // AC
#define RELAY_4    33  // Pump
#define OLED_SDA   21
#define OLED_SCL   22

DHT dht(DHT_PIN, DHT22);
Adafruit_SSD1306 display(128, 64, &Wire);
WiFiClient wifi; PubSubClient mqtt(wifi);

// State
bool relays[4] = {false};
bool motionDetected = false;
unsigned long lastMotion = 0;

void onMQTT(char* topic, byte* payload, unsigned int len) {
  StaticJsonDocument<128> doc;
  if(deserializeJson(doc, payload, len)) return;
  
  int relay = doc["relay"] | -1;
  String cmd = doc["cmd"] | "";
  
  if(relay >= 1 && relay <= 4 && (cmd=="on"||cmd=="off")) {
    int pins[] = {RELAY_1, RELAY_2, RELAY_3, RELAY_4};
    relays[relay-1] = (cmd=="on");
    digitalWrite(pins[relay-1], relays[relay-1] ? LOW : HIGH); // Active LOW relay
    Serial.printf("Relay %d → %s\\n", relay, cmd.c_str());
  }
  
  if(doc["auto_mode"] == true) {
    // Auto: PIR trigger Relay 1 (light), temp>30 trigger Relay 2 (fan)
  }
}

void publishStatus() {
  StaticJsonDocument<256> doc;
  doc["temp"] = dht.readTemperature();
  doc["humi"] = dht.readHumidity();
  doc["motion"] = motionDetected;
  JsonArray r = doc.createNestedArray("relays");
  for(bool b : relays) r.add(b);
  doc["rssi"] = WiFi.RSSI();
  
  char buf[256]; serializeJson(doc, buf);
  mqtt.publish("home/status", buf, true);
}

void updateOLED() {
  display.clearDisplay();
  display.setTextSize(1);
  display.setCursor(0,0); display.printf("T:%.1f H:%.1f%%", dht.readTemperature(), dht.readHumidity());
  display.setCursor(0,12); display.printf("Motion: %s", motionDetected?"YES":"no");
  display.setCursor(0,24);
  for(int i=0;i<4;i++) display.printf("R%d:%s ", i+1, relays[i]?"ON":"--");
  display.display();
}`,
        result:['4 relay điều khiển qua MQTT','OLED realtime status','PIR trigger tự động','Dashboard web hoạt động'],
        hints:['Relay active LOW: digitalWrite LOW=ON','PIR cần warmup 30–60 giây sau power on','Debounce PIR với timeout 5s tránh spam','OLED I2C địa chỉ 0x3C hoặc 0x3D'] },

      { num:'5.2', name:'Smart Agriculture với AI', dur:'300 phút', diff:5,
        hw:['ESP32','Soil moisture','DHT22','LDR','Relay pump','OLED','LoRa (tùy chọn)'],
        deploy:['Thu thập data môi trường 7 ngày','Train mô hình dự đoán nhu cầu tưới','Deploy TFLite trên ESP32','Tự động tưới theo AI prediction + threshold','Dashboard Grafana qua InfluxDB'],
        code:`// Smart Agriculture AI
// AI model: đầu vào [soil_moisture, temp, humi, light, time_of_day]
// Đầu ra: [water_needed_ml] (regression)

#include <TensorFlowLite_ESP32.h>
#include "irrigation_model.h"

float sensors[5]; // Input features

float predictWaterNeeded() {
  // Normalize
  sensors[0] = (analogRead(SOIL_PIN) / 4095.0f);
  sensors[1] = (dht.readTemperature() - 15) / 25.0f; // [15-40] → [0-1]
  sensors[2] = dht.readHumidity() / 100.0f;
  sensors[3] = (analogRead(LDR_PIN) / 4095.0f);
  sensors[4] = (float)(hour()) / 23.0f; // Time of day

  for(int i=0;i<5;i++) input->data.f[i] = sensors[i];
  interpreter->Invoke();
  
  float water_ml = output->data.f[0] * 1000; // Denormalize
  return max(0.0f, water_ml);
}

void smartIrrigation() {
  float water = predictWaterNeeded();
  Serial.printf("AI prediction: %.0f ml\\n", water);
  
  if(water > 50) { // Cần tưới
    // Tưới tỉ lệ với lượng nước cần
    int pumpMs = water * 100; // Giả sử 10ml/s pump
    pumpMs = constrain(pumpMs, 0, 30000); // Max 30s
    
    digitalWrite(PUMP_RELAY, LOW); // ON
    delay(pumpMs);
    digitalWrite(PUMP_RELAY, HIGH); // OFF
    Serial.printf("Pumped for %d ms\\n", pumpMs);
  }
}`,
        result:['AI prediction RMSE <15ml','Tiết kiệm 30% nước vs rule-based','Dashboard Grafana realtime'],
        hints:['Soil moisture cần calibration: 0%=dry air, 100%=submerged in water','Feature engineering quan trọng: thêm time_since_last_water','Regression model: loss=MSE, metric=MAE','InfluxDB + Grafana: stack chuẩn cho time-series IoT data'] },
    ]
  },
]
