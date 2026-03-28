export { QUIZ }      from './quiz'
export { EXERCISES } from './exercises'
export { THESIS }    from './thesis'

export const INSTRUCTOR = {
  name:'Trần Vĩnh Phúc', short:'Phúc Trần', avatar:'PT',
  email:'phuctv@dlu.edu.vn', phone:'0976 353 606',
  dept:'Khoa Công nghệ Thông tin', uni:'Đại học Đà Lạt',
  city:'Đà Lạt, Lâm Đồng',
}

export const RESOURCES = [
  { cat:'Tài liệu chính thức', color:'#00d4ff', items:[
    {name:'ESP32 Technical Reference Manual',url:'https://docs.espressif.com/projects/esp-idf/en/latest/',desc:'Tài liệu đầy đủ từ Espressif: peripheral, register map, timing, pinout.'},
    {name:'TensorFlow Lite Micro',url:'https://www.tensorflow.org/lite/microcontrollers',desc:'Hướng dẫn deploy AI model lên MCU. Examples ESP32, Arduino Nano BLE.'},
    {name:'Edge Impulse Documentation',url:'https://docs.edgeimpulse.com/',desc:'Platform TinyML end-to-end: data→train→deploy. Tốt nhất cho giáo dục.'},
    {name:'Arduino Language Reference',url:'https://www.arduino.cc/reference/en/',desc:'Reference đầy đủ Arduino/C++ API: functions, variables, structure.'},
    {name:'FreeRTOS API Reference',url:'https://www.freertos.org/a00106.html',desc:'Tất cả FreeRTOS API: task, queue, semaphore, timer, event group.'},
    {name:'PlatformIO Documentation',url:'https://docs.platformio.org/',desc:'IDE chuyên nghiệp cho embedded: package manager, CI/CD, unit test.'},
    {name:'MQTT 5.0 Specification',url:'https://docs.oasis-open.org/mqtt/mqtt/v5.0/mqtt-v5.0.html',desc:'Đặc tả đầy đủ giao thức MQTT 5.0 từ OASIS.'},
    {name:'LoRaWAN Specification v1.0.4',url:'https://lora-alliance.org/resource_hub/',desc:'LoRaWAN MAC protocol, regional parameters, security.'},
  ]},
  { cat:'Khóa học & Video', color:'#00e676', items:[
    {name:'Random Nerd Tutorials',url:'https://randomnerdtutorials.com/',desc:'Hàng trăm tutorial ESP32/Arduino miễn phí, ảnh chi tiết, code đầy đủ.'},
    {name:'TinyML on edX (Harvard)',url:'https://www.edx.org/professional-certificate/harvardx-tiny-machine-learning',desc:'Chứng chỉ TinyML chuyên sâu từ Harvard. Audit miễn phí.'},
    {name:'Fast.ai — Practical Deep Learning',url:'https://course.fast.ai/',desc:'Khóa học Deep Learning thực hành nhất. Top-down approach, rất thực tế.'},
    {name:'DeepLearning.AI TensorFlow',url:'https://www.coursera.org/specializations/tensorflow2',desc:'TensorFlow Developer Specialization: 4 khóa học từ Google.'},
    {name:'Andreas Spiess YouTube',url:'https://www.youtube.com/@AndreasSpiess',desc:'ESP32, LoRa, MQTT, IoT thực tế. Rất chi tiết, cẩn thận, uy tín.'},
    {name:'MIT 6.S191 Intro to Deep Learning',url:'http://introtodeeplearning.com/',desc:'Khóa học DL từ MIT. Slides + video miễn phí, cập nhật mỗi năm.'},
    {name:'Embedded ML Summit (YouTube)',url:'https://www.youtube.com/@tinyml_summit',desc:'Conference Edge AI/TinyML: speakers Google, Arm, ST, Nordic.'},
  ]},
  { cat:'Công cụ & Platform', color:'#a855f7', items:[
    {name:'Edge Impulse Studio',url:'https://studio.edgeimpulse.com/',desc:'Train TinyML miễn phí, export Arduino library tự động. Best tool.'},
    {name:'Wokwi Simulator',url:'https://wokwi.com/',desc:'Mô phỏng Arduino/ESP32 online, không cần phần cứng thật.'},
    {name:'Roboflow',url:'https://roboflow.com/',desc:'Dataset management cho Computer Vision: label, augment, export YOLO/TFLite.'},
    {name:'ThingSpeak IoT',url:'https://thingspeak.com/',desc:'Cloud IoT miễn phí: 3M messages/năm, charts, MATLAB analysis.'},
    {name:'Node-RED',url:'https://nodered.org/',desc:'Visual flow-based IoT programming. Kéo thả tạo automation.'},
    {name:'MQTT Explorer',url:'https://mqtt-explorer.com/',desc:'GUI MQTT client: xem all topics dạng tree, debug broker.'},
    {name:'Fritzing',url:'https://fritzing.org/',desc:'Vẽ sơ đồ kết nối breadboard cho tài liệu hướng dẫn.'},
    {name:'KiCad EDA',url:'https://www.kicad.org/',desc:'Thiết kế PCB chuyên nghiệp miễn phí. Dùng cho startup hardware.'},
  ]},
  { cat:'Sách tham khảo', color:'#f59e0b', items:[
    {name:'TinyML — Pete Warden (O\'Reilly)',url:'https://www.oreilly.com/library/view/tinyml/9781492052036/',desc:'Sách TinyML nền tảng nhất từ TF team. Audio, vision, gesture detection.'},
    {name:'AI at the Edge — Situnayake',url:'https://www.oreilly.com/library/view/ai-at-the/9781098120191/',desc:'Edge AI thực tế: production deployment, optimization, case studies.'},
    {name:'Hands-On Machine Learning — Géron',url:'https://www.oreilly.com/library/view/hands-on-machine-learning/9781098125967/',desc:'Sách ML nền tảng tốt nhất. Scikit-learn + TensorFlow + Keras.'},
    {name:'Programming ESP32 — Dogan Ibrahim',url:'https://www.elektor.com/',desc:'Lập trình ESP32 toàn diện: WiFi, BLE, FreeRTOS, sensors.'},
    {name:'IoT Systems Engineering',url:'https://mitpress.mit.edu/',desc:'IoT từ góc kỹ thuật hệ thống. Architecture, protocols, security.'},
  ]},
  { cat:'Dataset & Model Hub', color:'#2dd4bf', items:[
    {name:'Kaggle Datasets',url:'https://www.kaggle.com/datasets',desc:'Hàng nghìn dataset miễn phí. Tìm IoT, sensors, time-series.'},
    {name:'PlantVillage Dataset',url:'https://plantvillage.psu.edu/',desc:'54,000+ ảnh bệnh cây 26 loại chuẩn. Tốt cho nông nghiệp Đà Lạt.'},
    {name:'TensorFlow Hub',url:'https://tfhub.dev/',desc:'Pre-trained models: MobileNet, EfficientDet. Fine-tune nhanh.'},
    {name:'Roboflow Universe',url:'https://universe.roboflow.com/',desc:'100,000+ computer vision datasets. Export YOLO, COCO, TFLite.'},
    {name:'Edge Impulse Model Zoo',url:'https://edgeimpulse.com/model-zoo',desc:'Pre-trained TinyML models: keyword, gesture, vibration anomaly.'},
  ]},
  { cat:'Cộng đồng & Khởi nghiệp', color:'#ff6b35', items:[
    {name:'Techfest Vietnam',url:'https://techfest.vn/',desc:'Festival khởi nghiệp lớn nhất VN. Nộp dự án để pitch và nhận funding.'},
    {name:'Hackster.io',url:'https://www.hackster.io/',desc:'Cộng đồng hardware + IoT lớn nhất. Chia sẻ project, hackathon có thưởng.'},
    {name:'Arduino Forum',url:'https://forum.arduino.cc/',desc:'1 triệu thành viên, giải đáp kỹ thuật nhanh.'},
    {name:'ESP32 Forum (Espressif)',url:'https://esp32.com/',desc:'Forum chính thức ESP32. Bug reports, feature requests, community.'},
    {name:'GitHub Student Pack',url:'https://education.github.com/pack',desc:'Miễn phí tools cho sinh viên: GitHub Pro, AWS, Azure, Figma, Domain.'},
  ]},
]
