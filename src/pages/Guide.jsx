const SECTIONS = [
  {
    title:'Thiết lập môi trường', color:'#00d4ff',
    items:[
      {t:'Cài Arduino IDE 2.x', content:`# Arduino IDE 2.x + ESP32
# Bước 1: Download Arduino IDE
https://www.arduino.cc/en/software
# Windows: .exe installer | macOS: .dmg | Linux: AppImage

# Bước 2: Thêm ESP32 board URL
File → Preferences → Additional boards manager URLs:
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json

# Bước 3: Cài ESP32 board package
Tools → Board → Boards Manager → Tìm "esp32" by Espressif → Install

# Bước 4: Chọn board
Tools → Board → ESP32 Arduino → ESP32 Dev Module
Tools → Upload Speed → 921600
Tools → Port → COM3 (Win) | /dev/ttyUSB0 (Linux) | /dev/cu.usbserial (Mac)`},
      {t:'Driver USB-Serial', content:`# Driver cần thiết theo chip USB-Serial:

# CH340/CH341 (board Trung Quốc phổ biến)
# Windows: http://www.wch.cn/download/CH341SER_EXE.html
# macOS: https://www.wch.cn/download/CH341SER_MAC_ZIP.html

# CP2102 (Silabs, nhiều DevKit chính hãng)
# https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers

# Linux: Thêm user vào group dialout
sudo adduser $USER dialout
# Rồi logout và login lại

# Kiểm tra port:
# Windows: Device Manager → Ports (COM & LPT)
# Linux: ls /dev/ttyUSB* hoặc ls /dev/ttyACM*
# macOS: ls /dev/cu.*`},
      {t:'PlatformIO (IDE chuyên nghiệp)', content:`# PlatformIO - IDE chuyên nghiệp hơn Arduino IDE
# Cài qua VS Code extension

# 1. Cài VS Code: code.visualstudio.com
# 2. Extensions → Tìm "PlatformIO IDE" → Install
# 3. Khởi động lại VS Code

# Tạo project mới:
# PlatformIO icon → New Project
# Name: aiot-project
# Board: Espressif ESP32 Dev Module
# Framework: Arduino

# platformio.ini tự động tạo:
[env:esp32dev]
platform = espressif32
board = esp32dev
framework = arduino
monitor_speed = 115200
lib_deps =
    adafruit/DHT sensor library @ ^1.4.4
    knolleary/PubSubClient @ ^2.8
    bblanchon/ArduinoJson @ ^7.0.0`},
    ]
  },
  {
    title:'Kết nối phần cứng', color:'#00e676',
    items:[
      {t:'I2C Scanner — tìm địa chỉ thiết bị', content:`// Upload sketch này để tìm địa chỉ I2C
#include <Wire.h>

void setup() {
  Serial.begin(115200);
  Wire.begin(21, 22); // SDA=21, SCL=22 (ESP32 default)
  Serial.println("I2C Scanner...");
}

void loop() {
  int found = 0;
  for (byte addr = 8; addr < 127; addr++) {
    Wire.beginTransmission(addr);
    byte err = Wire.endTransmission();
    if (err == 0) {
      Serial.printf("  Found: 0x%02X", addr);
      // Gợi ý thiết bị phổ biến:
      if (addr == 0x3C) Serial.print(" <- SSD1306 OLED");
      if (addr == 0x76 || addr == 0x77) Serial.print(" <- BME280");
      if (addr == 0x68) Serial.print(" <- MPU6050");
      if (addr == 0x23) Serial.print(" <- BH1750");
      if (addr == 0x58) Serial.print(" <- SGP30");
      Serial.println();
      found++;
    }
  }
  if (found == 0) Serial.println("No I2C devices found!");
  delay(3000);
}`},
      {t:'Sơ đồ kết nối chuẩn ESP32', content:`# Kết nối phần cứng chuẩn cho AIoT Lab:

ESP32 GPIO Pinout (ESP32 Dev Module 38-pin):
┌─────────────────────────────────┐
│  DHT22:  GPIO4 (DATA) + 10KΩ pull-up 3.3V  │
│  BME280: SDA=GPIO21, SCL=GPIO22             │
│  OLED:   SDA=GPIO21, SCL=GPIO22 (same I2C) │
│  LoRa:   MOSI=23, MISO=19, SCK=18, CS=5   │
│           RST=14, IRQ=26                   │
│  Relay:  GPIO26 (active LOW)               │
│  LED:    GPIO2 (built-in)                  │
│  Button: GPIO15 (INPUT_PULLUP)             │
│  ADC1:   GPIO32-39 (dùng với WiFi)         │
└─────────────────────────────────┘

QUAN TRONG: Không dùng ADC2 khi WiFi bật!
ADC2 = GPIO0,2,4,12-15,25-27 — bị chiếm bởi WiFi RF`},
    ]
  },
  {
    title:'MQTT & Network', color:'#a855f7',
    items:[
      {t:'Cài Mosquitto Broker', content:`# Ubuntu/Debian:
sudo apt install mosquitto mosquitto-clients -y
sudo systemctl start mosquitto
sudo systemctl enable mosquitto  # Auto-start

# Kiểm tra:
systemctl status mosquitto

# Test broker:
# Terminal 1 - Subscribe:
mosquitto_sub -h localhost -t "test/#" -v

# Terminal 2 - Publish:
mosquitto_pub -h localhost -t "test/hello" -m "world"
mosquitto_pub -h localhost -t "home/temp" -m '{"temp":25.3,"hum":65}'

# Public brokers để test (không cần cài):
broker.hivemq.com:1883
test.mosquitto.org:1883
mqtt.eclipseprojects.io:1883`},
      {t:'MQTT Explorer — Debug tool', content:`# MQTT Explorer: mqtt-explorer.com
# GUI client để xem tất cả topics dạng tree

# Cài:
# Windows/macOS: Download installer
# Linux: sudo snap install mqtt-explorer

# Kết nối:
Host: localhost (hoặc IP broker)
Port: 1883
Protocol: mqtt://

# Features hữu ích:
# - Xem tất cả topics dạng tree
# - Publish message với payload JSON
# - View history của từng topic
# - Export to CSV
# - Color-coded topic changes`},
    ]
  },
  {
    title:'TinyML Workflow', color:'#f59e0b',
    items:[
      {t:'Edge Impulse — Hướng dẫn nhanh', content:`# Edge Impulse Quick Start
# https://studio.edgeimpulse.com

# 1. Đăng ký tài khoản miễn phí
# 2. New Project → Chọn loại project (motion, audio, image)

# 3. Data Acquisition:
# Option A: Kết nối ESP32 qua USB
npm install -g edge-impulse-cli
edge-impulse-daemon  # Rồi mở studio → Data acquisition

# Option B: Upload file CSV/WAV
# Cột: timestamp, ax, ay, az (cho IMU)
# Hoặc: audio WAV 16kHz mono (cho speech)

# 4. Create Impulse:
# - Window size: 2000ms (2 giây)
# - Window increase: 200ms
# - Sampling freq: 50Hz (IMU) | 16000Hz (audio)

# 5. Processing block:
# - IMU: Spectral Analysis
# - Audio: MFE hoặc MFCC
# - Image: Image (96x96 RGB)

# 6. Learning block:
# - Classification, Anomaly, Object detection

# 7. Train → Download Arduino library
# Sketch → Add library → .zip file`},
      {t:'Convert TFLite sang C array', content:`# Sau khi train trên PC và save model.tflite:

# Python — tạo C header file:
with open('model.tflite', 'rb') as f:
    data = f.read()

hex_data = ', '.join([f'0x{b:02x}' for b in data])
c_code = f"""
// Auto-generated — DO NOT EDIT
#include <stdint.h>
const unsigned char g_model[] = {{{hex_data}}};
const unsigned int g_model_len = {len(data)};
"""
with open('model_data.h', 'w') as f:
    f.write(c_code)
print(f"Model: {len(data)/1024:.1f} KB")

# Hoặc dùng xxd (Linux/macOS):
xxd -i model.tflite model_data.h

# Sau đó trong Arduino:
#include "model_data.h"
// Dùng g_model và g_model_len`},
    ]
  },
  {
    title:'Deploy & Production', color:'#ff6b35',
    items:[
      {t:'OTA Update (Over-the-Air)', content:`#include <ArduinoOTA.h>

void setupOTA(const char* hostname, const char* password) {
  ArduinoOTA.setHostname(hostname);  // "esp32-office"
  ArduinoOTA.setPassword(password);  // Đổi ngay!

  ArduinoOTA.onStart([]() {
    String type = ArduinoOTA.getCommand() == U_FLASH ? "sketch" : "filesystem";
    Serial.println("OTA Start: " + type);
  });

  ArduinoOTA.onEnd([]() {
    Serial.println("\\nOTA Done! Rebooting...");
  });

  ArduinoOTA.onProgress([](unsigned int prog, unsigned int total) {
    Serial.printf("OTA: %u%%\\r", prog / (total / 100));
  });

  ArduinoOTA.onError([](ota_error_t error) {
    Serial.printf("OTA Error[%u]: ", error);
  });

  ArduinoOTA.begin();
  Serial.printf("OTA ready: %s.local\\n", hostname);
}

void loop() {
  ArduinoOTA.handle();  // Gọi mỗi loop iteration
  // ... code khác
}`},
      {t:'Watchdog Timer — Tự recover', content:`#include <esp_task_wdt.h>

// Watchdog: reset ESP32 nếu code bị treo > N giây
#define WDT_TIMEOUT_S 30

void setup() {
  // Init watchdog timeout 30 giây
  esp_task_wdt_init(WDT_TIMEOUT_S, true);
  esp_task_wdt_add(NULL);  // Add current task
  Serial.println("Watchdog initialized (30s)");
}

void loop() {
  // Reset watchdog timer — phải gọi thường xuyên!
  esp_task_wdt_reset();

  // Nếu code bị treo ở đây > 30s → ESP32 tự reset
  doWork();
}

// Lưu reset reason vào NVS để debug:
#include <esp_system.h>
esp_reset_reason_t reason = esp_reset_reason();
if (reason == ESP_RST_WDT) {
  Serial.println("Last reset: Watchdog timeout!");
}`},
      {t:'Power Management cho Battery', content:`// Tiết kiệm pin cho thiết bị chạy bằng pin

// Deep Sleep: tiêu thụ ~10µA (vs 240mA active)
#include <esp_sleep.h>

void deepSleep(uint64_t seconds) {
  esp_sleep_enable_timer_wakeup(seconds * 1000000ULL);

  // Tắt WiFi/BT trước khi ngủ
  WiFi.disconnect(true);
  WiFi.mode(WIFI_OFF);
  btStop();

  Serial.println("Going to sleep...");
  Serial.flush();
  esp_deep_sleep_start();  // Không return
}

// Wakeup sources:
// Timer:   esp_sleep_enable_timer_wakeup(uS)
// GPIO:    esp_sleep_enable_ext0_wakeup(pin, level)
// Touch:   esp_sleep_enable_touchpad_wakeup()

// Ví dụ: đọc sensor mỗi 15 phút, ngủ giữa các lần
void loop() {
  readAndSendSensorData();
  deepSleep(15 * 60);  // 15 phút
}`},
    ]
  },
]

export default function Guide() {
  return (
    <div className="fu">
      <div className="page-hdr">
        <h1><span className="gt">Hướng dẫn nhanh</span></h1>
        <p>Quick reference: setup, kết nối, debug, deploy cho AIoT</p>
      </div>

      <div style={{display:'flex',flexDirection:'column',gap:'1.8rem'}}>
        {SECTIONS.map(sec => (
          <div key={sec.title}>
            <div style={{display:'flex',alignItems:'center',gap:'.6rem',marginBottom:'.75rem',borderBottom:'1px solid var(--brd)',paddingBottom:'.4rem'}}>
              <div style={{width:3,height:16,background:sec.color,borderRadius:2,flexShrink:0}}/>
              <h2 style={{fontSize:'.92rem',fontWeight:700,color:'var(--txt)'}}>{sec.title}</h2>
            </div>
            <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(min(300px,100%),1fr))',gap:'.65rem'}}>
              {sec.items.map((item, i) => (
                <div key={i} className="card" style={{padding:'1rem',borderColor:`${sec.color}18`,borderLeft:`3px solid ${sec.color}`}}>
                  <div style={{fontWeight:700,fontSize:'.82rem',color:sec.color,marginBottom:'.55rem',fontFamily:'var(--fm)'}}>{item.t}</div>
                  <pre style={{fontSize:'.72rem',background:'var(--bg)',border:'1px solid var(--brd)',borderLeft:'none',lineHeight:1.65,padding:'.75rem .85rem',borderRadius:6,overflowX:'auto',whiteSpace:'pre-wrap',wordBreak:'break-all'}}>
                    <code style={{color:'#b8d4e8'}}>{item.content}</code>
                  </pre>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Verify checklist */}
      <div style={{marginTop:'2rem'}}>
        <div style={{display:'flex',alignItems:'center',gap:'.6rem',marginBottom:'.75rem',borderBottom:'1px solid var(--brd)',paddingBottom:'.4rem'}}>
          <div style={{width:3,height:16,background:'var(--tl)',borderRadius:2}}/>
          <h2 style={{fontSize:'.92rem',fontWeight:700,color:'var(--txt)'}}>Bảng kiểm tra nhanh</h2>
        </div>
        <div className="tw">
          <table>
            <thead><tr><th>Tính năng</th><th>Lệnh kiểm tra</th><th>Kết quả OK</th></tr></thead>
            <tbody>
              {[
                ['ESP32 kết nối','Tools → Get Board Info','Board: ESP32-WROOM-32'],
                ['DHT22 đọc OK','Serial Monitor 115200','Temp:XX.X, Hum:XX.X (không có NaN)'],
                ['WiFi connected','Serial: "WiFi OK: 192.168.x.x"','IP address hợp lệ'],
                ['MQTT connected','Serial: "MQTT connected"','Subscribe/publish hoạt động'],
                ['I2C device found','Upload I2C Scanner sketch','Found at 0x3C/0x76/0x68...'],
                ['TFLite model loaded','Serial: "AllocateTensors OK"','Inference < 100ms'],
                ['LoRa initialized','Serial: "LoRa ready"','RSSI > -100 dBm'],
                ['OTA ready','Serial: "esp32-node.local"','Upload qua WiFi thành công'],
              ].map((row,i) => (
                <tr key={i}>
                  <td style={{color:'var(--txt)',fontWeight:500}}>{row[0]}</td>
                  <td><code style={{color:'var(--g)',fontSize:'.77rem'}}>{row[1]}</code></td>
                  <td style={{color:'var(--txt2)',fontSize:'.8rem'}}>{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
