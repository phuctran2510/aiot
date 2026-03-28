import { QUIZ as QUIZ_BASE, QUIZ_EXTRA }      from './quiz'
import { ALL_EXERCISES as EXERCISES }         from './exercises'
import { ALL_THESIS as THESIS }               from './thesis'

export const QUIZ = [...QUIZ_BASE, ...QUIZ_EXTRA]
export { EXERCISES, THESIS }

export const INSTRUCTOR = {
  name:'Trần Vĩnh Phúc', short:'Phúc Trần', avatar:'PT',
  email:'phuctv@dlu.edu.vn', phone:'0976 353 606',
  dept:'Khoa Công nghệ Thông tin', uni:'Đại học Đà Lạt',
  city:'Đà Lạt, Lâm Đồng',
}

export const RESOURCES = [
  { cat:'Tài liệu chính thức', color:'#00d4ff', items:[
    {name:'ESP32 Technical Reference Manual',url:'https://docs.espressif.com/projects/esp-idf/en/latest/',desc:'Tài liệu đầy đủ từ Espressif: peripheral, register map, timing, pinout.'},
    {name:'TensorFlow Lite Micro',url:'https://www.tensorflow.org/lite/microcontrollers',desc:'Deploy AI model lên MCU. Examples cho ESP32, Arduino Nano BLE.'},
    {name:'Edge Impulse Documentation',url:'https://docs.edgeimpulse.com/',desc:'Platform TinyML end-to-end: data→train→deploy.'},
    {name:'Arduino Language Reference',url:'https://www.arduino.cc/reference/en/',desc:'Reference đầy đủ Arduino/C++ API.'},
    {name:'FreeRTOS API Reference',url:'https://www.freertos.org/a00106.html',desc:'Task, queue, semaphore, timer, event group.'},
    {name:'PlatformIO Documentation',url:'https://docs.platformio.org/',desc:'IDE chuyên nghiệp: package manager, CI/CD, unit test.'},
    {name:'MQTT 5.0 Specification',url:'https://docs.oasis-open.org/mqtt/mqtt/v5.0/mqtt-v5.0.html',desc:'Đặc tả đầy đủ giao thức MQTT 5.0.'},
    {name:'LoRaWAN Specification v1.0.4',url:'https://lora-alliance.org/resource_hub/',desc:'LoRaWAN MAC protocol, regional parameters, security.'},
    {name:'AWS IoT Core Developer Guide',url:'https://docs.aws.amazon.com/iot/latest/developerguide/',desc:'Connect devices, rules engine, Device Shadow, Lambda.'},
    {name:'Docker Documentation',url:'https://docs.docker.com/',desc:'Container basics, Docker Compose cho AIoT stack.'},
  ]},
  { cat:'Khóa học & Video', color:'#00e676', items:[
    {name:'Random Nerd Tutorials',url:'https://randomnerdtutorials.com/',desc:'Hàng trăm tutorial ESP32/Arduino miễn phí, ảnh chi tiết.'},
    {name:'TinyML on edX (Harvard)',url:'https://www.edx.org/professional-certificate/harvardx-tiny-machine-learning',desc:'Chứng chỉ TinyML từ Harvard. Audit miễn phí.'},
    {name:'Fast.ai — Practical Deep Learning',url:'https://course.fast.ai/',desc:'DL thực hành nhất. Top-down approach, miễn phí.'},
    {name:'DeepLearning.AI TensorFlow',url:'https://www.coursera.org/specializations/tensorflow2',desc:'TensorFlow Developer Specialization: 4 khóa từ Google.'},
    {name:'Andreas Spiess YouTube',url:'https://www.youtube.com/@AndreasSpiess',desc:'ESP32, LoRa, MQTT thực tế. Rất uy tín.'},
    {name:'MIT 6.S191 Deep Learning',url:'http://introtodeeplearning.com/',desc:'DL course MIT. Slides + video miễn phí.'},
    {name:'Embedded ML Summit',url:'https://www.youtube.com/@tinyml_summit',desc:'Talks Edge AI từ Google, Arm, ST, Nordic.'},
  ]},
  { cat:'Công cụ & Platform', color:'#a855f7', items:[
    {name:'Edge Impulse Studio',url:'https://studio.edgeimpulse.com/',desc:'Train TinyML miễn phí, export Arduino library tự động.'},
    {name:'Wokwi Simulator',url:'https://wokwi.com/',desc:'Mô phỏng Arduino/ESP32 online, không cần phần cứng.'},
    {name:'Roboflow',url:'https://roboflow.com/',desc:'CV dataset: label, augment, export YOLO/TFLite.'},
    {name:'ThingSpeak IoT',url:'https://thingspeak.com/',desc:'Cloud IoT miễn phí: 3M messages/năm.'},
    {name:'Node-RED',url:'https://nodered.org/',desc:'Visual flow-based IoT programming. Open source.'},
    {name:'MQTT Explorer',url:'https://mqtt-explorer.com/',desc:'GUI MQTT client: xem topics dạng tree.'},
    {name:'Fritzing',url:'https://fritzing.org/',desc:'Vẽ sơ đồ breadboard cho tài liệu.'},
    {name:'KiCad EDA',url:'https://www.kicad.org/',desc:'PCB design chuyên nghiệp miễn phí.'},
    {name:'Google Colab',url:'https://colab.research.google.com/',desc:'Jupyter notebook GPU miễn phí để train model.'},
  ]},
  { cat:'Sách tham khảo', color:'#f59e0b', items:[
    {name:'TinyML — Pete Warden (O\'Reilly)',url:'https://www.oreilly.com/library/view/tinyml/9781492052036/',desc:'Sách TinyML nền tảng nhất từ Google. Audio, vision, gesture.'},
    {name:'AI at the Edge — Situnayake',url:'https://www.oreilly.com/library/view/ai-at-the/9781098120191/',desc:'Edge AI production: optimization, deployment, case studies.'},
    {name:'Hands-On ML — Géron',url:'https://www.oreilly.com/library/view/hands-on-machine-learning/9781098125967/',desc:'ML nền tảng tốt nhất. Scikit-learn + TensorFlow + Keras.'},
    {name:'Deep Learning — Goodfellow',url:'https://www.deeplearningbook.org/',desc:'Lý thuyết DL đầy đủ nhất. Miễn phí online.'},
    {name:'Programming ESP32 — Dogan Ibrahim',url:'https://www.elektor.com/',desc:'ESP32: WiFi, BLE, FreeRTOS, sensors toàn diện.'},
  ]},
  { cat:'Dataset & Model Hub', color:'#2dd4bf', items:[
    {name:'Kaggle Datasets',url:'https://www.kaggle.com/datasets',desc:'Hàng nghìn dataset IoT, sensors, time-series.'},
    {name:'PlantVillage Dataset',url:'https://plantvillage.psu.edu/',desc:'54K ảnh bệnh cây 26 loại. Phù hợp nông nghiệp Đà Lạt.'},
    {name:'TensorFlow Hub',url:'https://tfhub.dev/',desc:'Pre-trained: MobileNet, EfficientDet. Fine-tune nhanh.'},
    {name:'Roboflow Universe',url:'https://universe.roboflow.com/',desc:'100K+ CV datasets. Export YOLO, COCO, TFLite.'},
    {name:'Edge Impulse Model Zoo',url:'https://edgeimpulse.com/model-zoo',desc:'Pre-trained TinyML: keyword, gesture, vibration.'},
    {name:'UCI ML Repository',url:'https://archive.ics.uci.edu/ml/',desc:'Classic benchmark datasets. IoT time-series.'},
  ]},
  { cat:'Cộng đồng & Khởi nghiệp', color:'#ff6b35', items:[
    {name:'Techfest Vietnam',url:'https://techfest.vn/',desc:'Festival khởi nghiệp lớn nhất VN. Pitch + funding.'},
    {name:'Hackster.io',url:'https://www.hackster.io/',desc:'Community hardware+IoT. Sharing, hackathon có thưởng.'},
    {name:'Arduino Forum',url:'https://forum.arduino.cc/',desc:'1M thành viên, hỗ trợ kỹ thuật nhanh.'},
    {name:'ESP32 Forum',url:'https://esp32.com/',desc:'Forum chính thức ESP32 từ Espressif.'},
    {name:'GitHub Student Pack',url:'https://education.github.com/pack',desc:'Miễn phí: GitHub Pro, AWS, Azure, Figma cho sinh viên.'},
    {name:'DLU Innovation Lab',url:'https://dlu.edu.vn/',desc:'Lab khởi nghiệp Đại học Đà Lạt. Mentoring + coworking.'},
  ]},
]
