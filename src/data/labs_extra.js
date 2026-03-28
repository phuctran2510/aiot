export const LABS_EXTRA = [
  {
    id:'l11', group:'Nâng cao', groupColor:'#2dd4bf',
    diff:'hard', time:'180 phút', hw:'ESP32 + INMP441 + Edge Impulse',
    title:'Lab 11 — Phân loại âm thanh máy móc',
    obj:'Thu thập âm thanh máy móc 4 trạng thái (bình thường, mất cân bằng, thiếu dầu, hỏng bearing), train MFCC + CNN, deploy realtime.',
    theory:'Âm thanh máy móc chứa thông tin về tình trạng: bearing fault tạo ra high-frequency harmonics, cavitation tạo broadband noise. MFCC trích xuất đặc trưng âm thanh tốt cho classification.',
    steps:[
      { t:'Setup microphone I2S INMP441', lang:'cpp', info:'',
        code:`// INMP441 MEMS Microphone - I2S interface
// Chính xác hơn analog mic: SNR ~61dB, frequency 60Hz-15kHz

#define I2S_WS  25  // Word Select (L/R clock)
#define I2S_SCK 26  // Bit Clock
#define I2S_SD  22  // Serial Data

#include <driver/i2s.h>

void setupI2S() {
  i2s_config_t config = {
    .mode = (i2s_mode_t)(I2S_MODE_MASTER | I2S_MODE_RX),
    .sample_rate = 16000,       // 16kHz — đủ cho máy móc
    .bits_per_sample = I2S_BITS_PER_SAMPLE_32BIT,
    .channel_format = I2S_CHANNEL_FMT_ONLY_LEFT,
    .communication_format = I2S_COMM_FORMAT_STAND_I2S,
    .intr_alloc_flags = ESP_INTR_FLAG_LEVEL1,
    .dma_buf_count = 8,
    .dma_buf_len = 512,
    .use_apll = true,           // Better clock accuracy
  };
  i2s_driver_install(I2S_NUM_0, &config, 0, NULL);

  i2s_pin_config_t pins = {
    .bck_io_num   = I2S_SCK,
    .ws_io_num    = I2S_WS,
    .data_out_num = I2S_PIN_NO_CHANGE,
    .data_in_num  = I2S_SD,
  };
  i2s_set_pin(I2S_NUM_0, &pins);
}

// Đọc audio: trả về buffer 16-bit samples
void readAudio(int16_t* buffer, int len) {
  int32_t raw[512];
  size_t bytesRead;
  for (int i = 0; i < len; i += 512) {
    int chunk = min(512, len - i);
    i2s_read(I2S_NUM_0, raw, chunk * 4, &bytesRead, 100);
    for (int j = 0; j < chunk; j++)
      buffer[i+j] = (int16_t)(raw[j] >> 11);  // 32-bit → 16-bit
  }
}` },
      { t:'Thu thập data 4 class trên Edge Impulse', lang:'bash', info:'',
        code:`# Cách thu thập: gắn mic vào máy đang chạy
# Mỗi class: 60 mẫu × 1 giây @ 16kHz

Class 1 (normal):    Máy chạy bình thường
Class 2 (imbalance): Thêm counterweight lệch vào motor
Class 3 (dry):       Tắt dầu bôi trơn bearing
Class 4 (fault):     Damage bearing (nếu có)
Background:          Tiếng ồn xung quanh (không có máy)

# Edge Impulse Impulse Design:
Input:     1000ms window, 16000Hz → 16000 samples
Processing: MFCC block
  - Frame length: 0.02s
  - Frame stride: 0.01s
  - Num filters: 40
  - Noise floor: -52dB
  - Num coefficients: 13
Learning:  Classification NN
  - 2D Conv (mFCC heatmap input)
  - Dense layers
  - Output: 5 classes` },
      { t:'Deploy TFLite + realtime classification', lang:'cpp', info:'',
        code:`#include <MachineSoundClassifier_inferencing.h>

const int SAMPLE_LEN = EI_CLASSIFIER_RAW_SAMPLE_COUNT;
int16_t audio_buffer[SAMPLE_LEN];

const char* LABELS[] = {"normal","imbalance","dry_bearing","fault","background"};
const float THRESHOLD = 0.75f;  // Minimum confidence

void classifyAudio() {
  readAudio(audio_buffer, SAMPLE_LEN);

  signal_t signal;
  numpy::signal_from_buffer(audio_buffer, SAMPLE_LEN, &signal);

  ei_impulse_result_t result;
  EI_IMPULSE_ERROR err = run_classifier(&signal, &result, false);

  if (err != EI_IMPULSE_OK) return;

  float maxConf = 0; int maxIdx = 0;
  for (int i=0; i<5; i++) {
    if (result.classification[i].value > maxConf) {
      maxConf = result.classification[i].value;
      maxIdx  = i;
    }
  }

  if (maxConf >= THRESHOLD && maxIdx != 4) {  // Bỏ background
    Serial.printf("[ALERT] %s (%.1f%%)\\n",
      LABELS[maxIdx], maxConf * 100);

    // Gửi MQTT alert
    char payload[100];
    snprintf(payload, sizeof(payload),
      "{\\"fault\\":\\"%s\\",\\"confidence\\":%.2f}",
      LABELS[maxIdx], maxConf);
    mqtt.publish("factory/machine1/fault", payload);
  }
}

void loop() {
  classifyAudio();  // Continuous classification
  mqtt.loop();
}` },
    ],
    tips:['Gắn mic chắc vào máy, không rung lắc do mount','Thu thập ở nhiều tốc độ motor để model generalize','Background noise samples quan trọng để tránh false positive'],
    expect:'4 class phân biệt chính xác >85%, MQTT alert khi phát hiện lỗi',
    verify:[
      {q:'Accuracy >85%?', cmd:'Edge Impulse test set report'},
      {q:'Realtime <100ms?', cmd:'Đo inference timing từ Serial'},
      {q:'MQTT alert nhận được?', cmd:'mosquitto_sub xem factory/machine1/fault'},
    ],
  },

  {
    id:'l12', group:'Nâng cao', groupColor:'#2dd4bf',
    diff:'hard', time:'240 phút', hw:'ESP32 + sensors + cloud',
    title:'Lab 12 — MQTT over TLS với Certificate Auth',
    obj:'Bảo mật hoàn toàn MQTT bằng TLS 1.3 + X.509 mutual authentication. Mỗi ESP32 có certificate duy nhất. ACL per device.',
    theory:'TLS mutual auth: (1) Server gửi cert → client verify broker identity (chống MITM). (2) Client gửi cert → broker verify device identity (không cần username/password). X.509 cert không thể stolen từ firmware vì private key không accessible.',
    steps:[
      { t:'Tạo CA và certificates', lang:'bash', info:'Chạy trên Linux/Mac:',
        code:`# 1. Tạo CA (Certificate Authority)
openssl genrsa -out ca.key 4096
openssl req -new -x509 -days 3650 -key ca.key -out ca.crt \\
  -subj "/CN=AIoT-CA/O=DLU/C=VN"

# 2. Tạo server certificate cho Mosquitto
openssl genrsa -out server.key 2048
openssl req -new -key server.key -out server.csr \\
  -subj "/CN=192.168.1.100/O=AIoT-Broker/C=VN"
openssl x509 -req -days 365 -in server.csr \\
  -CA ca.crt -CAkey ca.key -CAcreateserial \\
  -out server.crt

# 3. Tạo client cert cho ESP32-001
openssl genrsa -out esp32-001.key 2048
openssl req -new -key esp32-001.key -out esp32-001.csr \\
  -subj "/CN=esp32-001/O=AIoT-Devices/C=VN"
openssl x509 -req -days 365 -in esp32-001.csr \\
  -CA ca.crt -CAkey ca.key -CAcreateserial \\
  -out esp32-001.crt

echo "Certs generated:"
ls -la *.crt *.key` },
      { t:'Cấu hình Mosquitto TLS', lang:'bash', info:'',
        code:`# /etc/mosquitto/mosquitto.conf
listener 8883
protocol mqtt

# TLS config
cafile   /etc/mosquitto/certs/ca.crt
certfile /etc/mosquitto/certs/server.crt
keyfile  /etc/mosquitto/certs/server.key

# Require client certificate
require_certificate true
use_identity_as_username true  # CN của cert = username cho ACL

# ACL file
acl_file /etc/mosquitto/acl

# /etc/mosquitto/acl
# esp32-001 chỉ được pub/sub topic của mình
user esp32-001
topic readwrite devices/esp32-001/#
topic read commands/esp32-001

user esp32-002
topic readwrite devices/esp32-002/#
topic read commands/esp32-002` },
      { t:'ESP32 TLS Client Code', lang:'cpp', info:'',
        code:`#include <WiFiClientSecure.h>
#include <PubSubClient.h>

// CA cert (từ ca.crt)
const char* CA_CERT = R"(
-----BEGIN CERTIFICATE-----
MIIFazCCA1OgAwIBAgIUCB... (content của ca.crt)
-----END CERTIFICATE-----
)";

// Device cert (từ esp32-001.crt)
const char* DEVICE_CERT = R"(
-----BEGIN CERTIFICATE-----
MIIDpTCCAo2gAwIBAgIU... (content của esp32-001.crt)
-----END CERTIFICATE-----
)";

// Device private key (từ esp32-001.key)
const char* DEVICE_KEY = R"(
-----BEGIN RSA PRIVATE KEY-----
MIIEowIBAAKCAQEA... (content của esp32-001.key)
-----END RSA PRIVATE KEY-----
)";

WiFiClientSecure wifiClient;
PubSubClient mqtt(wifiClient);

void setupSecureMQTT() {
  wifiClient.setCACert(CA_CERT);
  wifiClient.setCertificate(DEVICE_CERT);
  wifiClient.setPrivateKey(DEVICE_KEY);

  mqtt.setServer("192.168.1.100", 8883);  // TLS port
  
  if (mqtt.connect("esp32-001")) {
    Serial.println("Secure MQTT connected!");
    mqtt.subscribe("commands/esp32-001");
    mqtt.publish("devices/esp32-001/status", "online");
  }
}` },
    ],
    tips:['Private key phải được protect: không log ra Serial!','Chuyển cert thành C string: cat ca.crt | sed "s/^/\\"/;s/$/\\\\n\\"/"','Cert expire: tạo với -days 3650 (10 năm) cho IoT devices'],
    expect:'TLS handshake thành công. Wireshark: traffic encrypted. Device01 không access topic của device02.',
    verify:[
      {q:'TLS connect OK?', cmd:'Serial: Secure MQTT connected!'},
      {q:'Traffic encrypted?', cmd:'Wireshark: Application Data'},
      {q:'ACL enforced?', cmd:'Thử pub topic khác → rejected'},
    ],
  },

  {
    id:'l13', group:'Nâng cao', groupColor:'#2dd4bf',
    diff:'hard', time:'300 phút', hw:'Raspberry Pi 4 + ESP32-CAM',
    title:'Lab 13 — Real-time Object Detection với YOLOv8n',
    obj:'Deploy YOLOv8 Nano trên Raspberry Pi 4 để detect người và xe trên RTSP stream từ ESP32-CAM. Dashboard đếm theo giờ trên Grafana.',
    theory:'YOLOv8n (Nano): 3.2M parameters, 8.7ms RPi4. Single-shot detector: chia ảnh thành grid, mỗi cell predict bounding boxes + class. Tốt hơn Cascade Classifier và MobileNet SSD.',
    steps:[
      { t:'Setup ESP32-CAM RTSP stream', lang:'cpp', info:'',
        code:`#include <esp_camera.h>
#include <WiFi.h>
#include "src/OV2640.h"
#include "SimStreamer.h"
#include "OV2640Streamer.h"
#include "CRtspSession.h"

// Sau khi setup camera (FRAMESIZE_VGA 640×480)
WiFiServer server(554);  // RTSP port
WiFiClient client;
CStreamer* streamer;

void loop() {
  client = server.accept();
  if (client) {
    streamer = new OV2640Streamer(&client, cam);
    CRtspSession* session = new CRtspSession(&client, streamer);
    while (client.connected()) {
      session->handleRequests(0);
      delay(1);
    }
    delete session; delete streamer;
  }
}
// Connect từ VLC: rtsp://ESP32_CAM_IP:554/mjpeg/1` },
      { t:'YOLOv8n inference trên Raspberry Pi', lang:'bash', info:'',
        code:`# Cài YOLOv8
pip install ultralytics opencv-python

# Download pre-trained YOLOv8n (3.2MB)
yolo export model=yolov8n.pt format=ncnn   # Faster on Pi
# Hoặc dùng trực tiếp PyTorch: chậm hơn nhưng đơn giản hơn` },
      { t:'Detection + MQTT pipeline', lang:'python', info:'',
        code:`from ultralytics import YOLO
import cv2, json, time
import paho.mqtt.client as mqtt

model = YOLO('yolov8n.pt')
cap   = cv2.VideoCapture('rtsp://192.168.1.x:554/mjpeg/1')
mq    = mqtt.Client()
mq.connect("localhost", 1883)

CLASSES_OF_INTEREST = ['person', 'car', 'bicycle', 'motorcycle']
counts = {c: 0 for c in CLASSES_OF_INTEREST}

prev_publish = time.time()

while True:
    ret, frame = cap.read()
    if not ret: time.sleep(0.1); continue

    results = model(frame, conf=0.5, verbose=False)[0]

    # Count detections
    frame_counts = {c: 0 for c in CLASSES_OF_INTEREST}
    for box in results.boxes:
        cls_name = model.names[int(box.cls[0])]
        if cls_name in CLASSES_OF_INTEREST:
            frame_counts[cls_name] += 1

    # Publish mỗi 5 giây
    if time.time() - prev_publish >= 5:
        prev_publish = time.time()
        payload = {
            "timestamp": int(time.time()),
            "counts": frame_counts,
            "fps": cap.get(cv2.CAP_PROP_FPS)
        }
        mq.publish("camera/detections", json.dumps(payload))
        print(f"Published: {frame_counts}")

    # Annotate frame (optional, cho debug)
    annotated = results.plot()
    cv2.imshow('YOLOv8', annotated)
    if cv2.waitKey(1) == ord('q'): break` },
    ],
    tips:['YOLOv8n trên RPi4 CPU: ~8-12 FPS. Dùng NCNN export cho RPi: ~20 FPS','Coral USB Accelerator: 4× speedup, tương thích TFLite','Giảm frame size xuống 416×416 hoặc 320×320 tăng FPS'],
    expect:'Detection 8+ FPS. Grafana: stacked bar chart đếm người/xe theo giờ',
    verify:[
      {q:'RTSP stream stable?', cmd:'VLC: rtsp://ESP32IP:554/mjpeg/1'},
      {q:'Detection accuracy?', cmd:'Visually inspect annotated frames'},
      {q:'MQTT data flow?', cmd:'mosquitto_sub camera/detections'},
    ],
  },

  {
    id:'l14', group:'Nâng cao', groupColor:'#2dd4bf',
    diff:'hard', time:'300 phút', hw:'ESP32 + multi-sensors',
    title:'Lab 14 — Multi-sensor Fusion Wearable',
    obj:'Wearable prototype: đeo trên cổ tay, fusion MAX30105 (SpO2/HR) + MPU6050 (hoạt động) + nhiệt độ. Alert khi bất thường. BLE → điện thoại.',
    theory:'Wearable fusion: nhiệt độ da + HR + SpO2 + activity → context-aware monitoring. Ví dụ: HR cao khi đang tập thể dục là bình thường, HR cao khi nằm ngủ là bất thường.',
    steps:[
      { t:'Đọc MAX30105 Heart Rate + SpO2', lang:'cpp', info:'',
        code:`#include <MAX3010x.h>
#include "heartRate.h"  // HeartRate algorithm from SparkFun

MAX30105 particleSensor;
const byte RATE_SIZE = 4;
byte rates[RATE_SIZE]; byte rateSpot = 0;
long lastBeat = 0;
float beatsPerMinute;
int   beatAvg;

void setupHeartRate() {
  particleSensor.begin(Wire, I2C_SPEED_FAST);
  particleSensor.setup();
  particleSensor.setPulseAmplitudeRed(0x1F);
  particleSensor.setPulseAmplitudeIR(0x1F);
}

void readHR() {
  long irValue = particleSensor.getIR();
  
  if (checkForBeat(irValue)) {
    long delta = millis() - lastBeat;
    lastBeat = millis();
    beatsPerMinute = 60 / (delta / 1000.0);
    
    if (beatsPerMinute > 20 && beatsPerMinute < 255) {
      rates[rateSpot++] = (byte)beatsPerMinute;
      rateSpot %= RATE_SIZE;
      beatAvg = 0;
      for (byte x=0; x<RATE_SIZE; x++) beatAvg += rates[x];
      beatAvg /= RATE_SIZE;
    }
  }
  
  Serial.printf("HR: %d BPM | IR: %ld\\n", beatAvg, irValue);
  if (irValue < 50000) Serial.println("No finger detected");
}` },
      { t:'Activity detection + context fusion', lang:'cpp', info:'',
        code:`#include <MPU6050_tockn.h>

MPU6050 mpu(Wire);
enum Activity { RESTING, WALKING, RUNNING, SLEEPING };

Activity detectActivity() {
  mpu.update();
  float ax = mpu.getAccX(), ay = mpu.getAccY(), az = mpu.getAccZ();
  float magnitude = sqrt(ax*ax + ay*ay + az*az);
  
  // Tính variance trong 1 giây (50 samples)
  static float samples[50]; static int idx=0;
  samples[idx++ % 50] = magnitude;
  float mean=0;
  for(auto s:samples) mean+=s; mean/=50;
  float var=0;
  for(auto s:samples) var+=(s-mean)*(s-mean); var/=50;
  
  if (var < 0.01) return SLEEPING;
  if (var < 0.05) return RESTING;
  if (var < 0.3)  return WALKING;
  return RUNNING;
}

// Context-aware alert
void analyzeHealth(int hr, float temp, Activity act) {
  bool alert = false;
  String reason = "";
  
  if (act == RESTING && hr > 100) { alert=true; reason="Resting HR cao"; }
  if (act == SLEEPING && hr < 40) { alert=true; reason="HR quá thấp khi ngủ"; }
  if (temp > 38.5) { alert=true; reason="Sốt: "+String(temp,1)+"C"; }
  
  if (alert) {
    Serial.println("ALERT: " + reason);
    sendBLEAlert(reason);
    // Vibration motor nếu có
  }
}` },
      { t:'BLE Notify để gửi data lên điện thoại', lang:'cpp', info:'',
        code:`#include <BLEDevice.h>
#include <BLEUtils.h>
#include <BLEServer.h>
#include <BLE2902.h>

#define SERVICE_UUID    "12345678-1234-1234-1234-123456789abc"
#define HR_CHAR_UUID    "12345678-1234-1234-1234-123456789abd"
#define ALERT_CHAR_UUID "12345678-1234-1234-1234-123456789abe"

BLECharacteristic* hrCharacteristic;
BLECharacteristic* alertCharacteristic;
bool deviceConnected = false;

void setupBLE() {
  BLEDevice::init("AIoT-Wearable");
  BLEServer* server = BLEDevice::createServer();
  BLEService* service = server->createService(SERVICE_UUID);
  
  hrCharacteristic = service->createCharacteristic(
    HR_CHAR_UUID,
    BLECharacteristic::PROPERTY_READ | BLECharacteristic::PROPERTY_NOTIFY
  );
  hrCharacteristic->addDescriptor(new BLE2902());
  
  service->start();
  BLEDevice::startAdvertising();
}

void notifyHR(int hr, float spo2, float temp) {
  if (!deviceConnected) return;
  char data[50];
  snprintf(data, sizeof(data),
    "{\\"hr\\":%d,\\"spo2\\":%.1f,\\"temp\\":%.1f}", hr, spo2, temp);
  hrCharacteristic->setValue(data);
  hrCharacteristic->notify();
}` },
    ],
    tips:['MAX30105 cần áp chặt vào da để đo chính xác','Baseline HR: đo 5 phút nghỉ ngơi trước khi set threshold','BLE power: BLE advertising ~0.5mA, notify when connected ~2mA'],
    expect:'BLE data visible trên nRF Connect app. HR chính xác ±5BPM. Alert khi HR > 100 khi nghỉ ngơi.',
    verify:[
      {q:'MAX30105 detect finger?', cmd:'Serial: IR > 50000'},
      {q:'BLE visible?', cmd:'nRF Connect scan: thấy AIoT-Wearable'},
      {q:'HR notification?', cmd:'Subscribe HR characteristic, xem values'},
    ],
  },

  {
    id:'l15', group:'Nâng cao', groupColor:'#2dd4bf',
    diff:'hard', time:'360 phút', hw:'Multiple ESP32 + Gateway',
    title:'Lab 15 — Mesh Sensor Network với ESP-NOW',
    obj:'Build mesh network 4 ESP32 không cần router: 3 sensor nodes gửi data → 1 gateway node → MQTT → Dashboard. Tự heal khi 1 node mất kết nối.',
    theory:'ESP-NOW: Espressif proprietary protocol, 2.4GHz, peer-to-peer, không cần WiFi router. Latency <1ms, unicast/broadcast, tối đa 20 peers, payload 250 bytes. Gateway node có thể đồng thời ESP-NOW + WiFi.',
    steps:[
      { t:'Sensor Node (3 boards)', lang:'cpp', info:'',
        code:`#include <esp_now.h>
#include <WiFi.h>
#include <DHT.h>

// MAC address của Gateway — lấy từ: WiFi.macAddress() trên gateway board
uint8_t GATEWAY_MAC[] = {0xAA, 0xBB, 0xCC, 0xDD, 0xEE, 0xFF};

DHT dht(4, DHT22);
int NODE_ID = 1;  // Mỗi board set khác nhau: 1, 2, 3

struct SensorPacket {
  uint8_t  nodeId;
  float    temperature;
  float    humidity;
  int32_t  rssi;
  uint32_t uptime;
  uint16_t sequence;
};

void onSent(const uint8_t* mac, esp_now_send_status_t status) {
  Serial.printf("Send to Gateway: %s\\n",
    status == ESP_NOW_SEND_SUCCESS ? "OK" : "FAIL");
}

void setup() {
  Serial.begin(115200);
  dht.begin();
  WiFi.mode(WIFI_STA);
  esp_now_init();
  esp_now_register_send_cb(onSent);

  esp_now_peer_info_t peer = {};
  memcpy(peer.peer_addr, GATEWAY_MAC, 6);
  peer.channel = 0; peer.encrypt = false;
  esp_now_add_peer(&peer);
}

uint16_t seqNum = 0;
unsigned long lastSend = 0;
void loop() {
  if (millis() - lastSend >= 5000) {
    lastSend = millis();
    SensorPacket pkt;
    pkt.nodeId      = NODE_ID;
    pkt.temperature = dht.readTemperature();
    pkt.humidity    = dht.readHumidity();
    pkt.rssi        = WiFi.RSSI();
    pkt.uptime      = millis() / 1000;
    pkt.sequence    = seqNum++;
    esp_now_send(GATEWAY_MAC, (uint8_t*)&pkt, sizeof(pkt));
  }
}` },
      { t:'Gateway Node (1 board)', lang:'cpp', info:'Gateway: nhận ESP-NOW + forward MQTT',
        code:`#include <esp_now.h>
#include <WiFi.h>
#include <PubSubClient.h>
#include <ArduinoJson.h>

struct SensorPacket {
  uint8_t nodeId; float temperature, humidity;
  int32_t rssi; uint32_t uptime; uint16_t sequence;
};

WiFiClient wc; PubSubClient mqtt(wc);
uint16_t lastSeq[4] = {0};  // Track sequence per node
uint32_t lostPackets[4] = {0};

void onDataReceive(const esp_now_recv_info_t* info,
                   const uint8_t* data, int len) {
  if (len != sizeof(SensorPacket)) return;
  SensorPacket pkt;
  memcpy(&pkt, data, sizeof(pkt));

  // Detect lost packets
  uint16_t expected = lastSeq[pkt.nodeId] + 1;
  if (pkt.sequence != expected && lastSeq[pkt.nodeId] != 0)
    lostPackets[pkt.nodeId] += pkt.sequence - expected;
  lastSeq[pkt.nodeId] = pkt.sequence;

  // Forward to MQTT
  JsonDocument doc;
  doc["node_id"]     = pkt.nodeId;
  doc["temperature"] = pkt.temperature;
  doc["humidity"]    = pkt.humidity;
  doc["rssi"]        = pkt.rssi;
  doc["uptime"]      = pkt.uptime;
  doc["seq"]         = pkt.sequence;
  doc["lost_pkts"]   = lostPackets[pkt.nodeId];

  char topic[32]; sprintf(topic, "mesh/node%d", pkt.nodeId);
  char buf[200]; serializeJson(doc, buf);
  mqtt.publish(topic, buf);
  Serial.printf("Node%d: T=%.1f H=%.1f seq=%d\\n",
    pkt.nodeId, pkt.temperature, pkt.humidity, pkt.sequence);
}

void setup() {
  WiFi.mode(WIFI_AP_STA);  // Dual mode!
  WiFi.begin(WIFI_SSID, WIFI_PASS);
  while(WiFi.status()!=WL_CONNECTED) delay(500);
  Serial.println("Gateway MAC: " + WiFi.macAddress());
  
  esp_now_init();
  esp_now_register_recv_cb(onDataReceive);
  
  mqtt.setServer(MQTT_HOST, 1883);
  mqtt.connect("esp32-gateway");
}

void loop() {
  if (!mqtt.connected()) mqtt.connect("esp32-gateway");
  mqtt.loop();
}` },
    ],
    tips:['Gateway MAC: chạy WiFi.macAddress() trước, copy vào sensor nodes','WiFi.mode(WIFI_AP_STA) cần thiết cho gateway để dùng cả 2','ESP-NOW channel phải match WiFi channel của router (default: channel 6)'],
    expect:'3 sensor nodes gửi data mỗi 5s. Gateway forward MQTT. Packet loss <1%. Grafana 3 series.',
    verify:[
      {q:'ESP-NOW send OK?', cmd:'Serial sensor: Send to Gateway: OK'},
      {q:'Gateway forward?', cmd:'mosquitto_sub mesh/#'},
      {q:'Lost packets?', cmd:'doc["lost_pkts"] gần 0'},
    ],
  },
]

export const LAB_GROUPS_EXTRA = [
  { id:'Nâng cao', color:'#2dd4bf', count:5 },
]
