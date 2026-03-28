import { QUIZ as QUIZ_BASE, QUIZ_EXTRA }         from './quiz'
import { ALL_EXERCISES as EXERCISES }            from './exercises'
import { ALL_THESIS as THESIS }                  from './thesis'

export { EXERCISES, THESIS }
export const QUIZ = [...QUIZ_BASE, ...QUIZ_EXTRA]

export const INSTRUCTOR = {
  name:'Trần Vĩnh Phúc', short:'Phúc Trần', avatar:'PT',
  email:'phuctv@dlu.edu.vn', phone:'0976 353 606',
  dept:'Khoa Công nghệ Thông tin', uni:'Đại học Đà Lạt',
  city:'Đà Lạt, Lâm Đồng',
}

export const RESOURCES = [
  { cat:'Tài liệu chính thức', color:'#00d4ff', items:[
    {name:'ESP32 Technical Reference Manual',url:'https://docs.espressif.com/projects/esp-idf/en/latest/',desc:'Tài liệu đầy đủ từ Espressif: peripheral, register map, timing, pinout.'},
    {name:'ESP-IDF Programming Guide',url:'https://docs.espressif.com/projects/esp-idf/en/stable/',desc:'ESP-IDF framework production-grade. C/C++, CMake, unit tests.'},
    {name:'TensorFlow Lite Micro',url:'https://www.tensorflow.org/lite/microcontrollers',desc:'Deploy AI model lên MCU. Examples cho ESP32, Arduino Nano BLE.'},
    {name:'Edge Impulse Documentation',url:'https://docs.edgeimpulse.com/',desc:'Platform TinyML end-to-end: data→train→deploy. Tốt nhất cho giáo dục.'},
    {name:'Arduino Language Reference',url:'https://www.arduino.cc/reference/en/',desc:'Reference đầy đủ Arduino/C++ API.'},
    {name:'FreeRTOS API Reference',url:'https://www.freertos.org/a00106.html',desc:'Task, queue, semaphore, timer, event group API.'},
    {name:'PlatformIO Documentation',url:'https://docs.platformio.org/',desc:'IDE chuyên nghiệp: package manager, CI/CD, unit test.'},
    {name:'MQTT 5.0 Specification',url:'https://docs.oasis-open.org/mqtt/mqtt/v5.0/mqtt-v5.0.html',desc:'Đặc tả đầy đủ giao thức MQTT 5.0.'},
    {name:'LoRaWAN Specification v1.0.4',url:'https://lora-alliance.org/resource_hub/',desc:'LoRaWAN MAC protocol, regional parameters, security.'},
    {name:'AWS IoT Core Developer Guide',url:'https://docs.aws.amazon.com/iot/latest/developerguide/',desc:'Connect devices, rules engine, Device Shadow, Lambda.'},
    {name:'Docker Documentation',url:'https://docs.docker.com/',desc:'Container basics, Docker Compose. Cần cho AIoT stack deployment.'},
  ]},
  { cat:'Khóa học & Video', color:'#00e676', items:[
    {name:'Random Nerd Tutorials',url:'https://randomnerdtutorials.com/',desc:'Hàng trăm tutorial ESP32/Arduino miễn phí, ảnh chi tiết.'},
    {name:'TinyML on edX (Harvard)',url:'https://www.edx.org/professional-certificate/harvardx-tiny-machine-learning',desc:'Chứng chỉ TinyML chuyên sâu từ Harvard. Audit miễn phí.'},
    {name:'Fast.ai — Practical Deep Learning',url:'https://course.fast.ai/',desc:'DL thực hành nhất. Top-down approach, rất thực tế.'},
    {name:'DeepLearning.AI TensorFlow',url:'https://www.coursera.org/specializations/tensorflow2',desc:'TensorFlow Developer Specialization: 4 khóa học từ Google.'},
    {name:'Andreas Spiess YouTube',url:'https://www.youtube.com/@AndreasSpiess',desc:'ESP32, LoRa, MQTT thực tế. Rất chi tiết và uy tín.'},
    {name:'MIT 6.S191 Deep Learning',url:'http://introtodeeplearning.com/',desc:'DL course MIT. Slides + video miễn phí, cập nhật hàng năm.'},
    {name:'Embedded ML Summit',url:'https://www.youtube.com/@tinyml_summit',desc:'Talks về Edge AI từ Google, Arm, ST, Nordic.'},
    {name:'CS231n — Stanford CV',url:'http://cs231n.stanford.edu/',desc:'Computer Vision và CNN chuyên sâu từ Stanford.'},
    {name:'Reinforcement Learning Course (David Silver)',url:'https://www.davidsilver.uk/teaching/',desc:'RL course từ DeepMind researcher. Slides + videos đầy đủ.'},
    {name:'IoT Programming with Arduino (Coursera)',url:'https://www.coursera.org/learn/iot',desc:'Khóa học IoT thực hành từ University of California.'},
  ]},
  { cat:'Công cụ & Platform', color:'#a855f7', items:[
    {name:'Edge Impulse Studio',url:'https://studio.edgeimpulse.com/',desc:'Train TinyML miễn phí, export Arduino library tự động.'},
    {name:'Wokwi Simulator',url:'https://wokwi.com/',desc:'Mô phỏng Arduino/ESP32 online, không cần phần cứng.'},
    {name:'Roboflow',url:'https://roboflow.com/',desc:'CV dataset management: label, augment, export YOLO/TFLite.'},
    {name:'ThingSpeak IoT',url:'https://thingspeak.com/',desc:'Cloud IoT miễn phí: 3M messages/năm, MATLAB analysis.'},
    {name:'Node-RED',url:'https://nodered.org/',desc:'Visual flow-based IoT programming. Open source.'},
    {name:'MQTT Explorer',url:'https://mqtt-explorer.com/',desc:'GUI MQTT client: xem topics dạng tree, debug broker.'},
    {name:'Fritzing',url:'https://fritzing.org/',desc:'Vẽ sơ đồ breadboard cho tài liệu hướng dẫn.'},
    {name:'KiCad EDA',url:'https://www.kicad.org/',desc:'PCB design chuyên nghiệp miễn phí.'},
    {name:'Google Colab',url:'https://colab.research.google.com/',desc:'Jupyter notebook GPU miễn phí. Train model không cần PC mạnh.'},
    {name:'Grafana Cloud',url:'https://grafana.com/products/cloud/',desc:'Grafana hosted miễn phí 10K metrics.'},
    {name:'JLCPCB',url:'https://jlcpcb.com/',desc:'Đặt làm PCB từ $2/5 boards, 7 ngày. Cần cho startup hardware.'},
  ]},
  { cat:'Sách tham khảo', color:'#f59e0b', items:[
    {name:'TinyML — Pete Warden (O\'Reilly)',url:'https://www.oreilly.com/library/view/tinyml/9781492052036/',desc:'Sách TinyML nền tảng nhất từ Google. Audio, vision, gesture.'},
    {name:'AI at the Edge — Situnayake',url:'https://www.oreilly.com/library/view/ai-at-the/9781098120191/',desc:'Edge AI production: optimization, deployment, case studies.'},
    {name:'Hands-On ML — Géron',url:'https://www.oreilly.com/library/view/hands-on-machine-learning/9781098125967/',desc:'ML nền tảng tốt nhất. Scikit-learn + TensorFlow + Keras.'},
    {name:'Deep Learning — Goodfellow (MIT Press)',url:'https://www.deeplearningbook.org/',desc:'Lý thuyết DL đầy đủ nhất. Miễn phí online.'},
    {name:'Programming ESP32 — Dogan Ibrahim',url:'https://www.elektor.com/',desc:'ESP32: WiFi, BLE, FreeRTOS, sensors toàn diện.'},
    {name:'Designing Embedded Systems',url:'https://www.oreilly.com/library/view/designing-embedded-systems/0596007558/',desc:'Kiến trúc hệ thống nhúng, real-time design patterns.'},
    {name:'The IoT Hacker\'s Handbook',url:'https://link.springer.com/book/10.1007/978-1-4842-4300-8',desc:'IoT security: pentest và hardening. Essential cho production.'},
    {name:'Reinforcement Learning (Sutton & Barto)',url:'https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf',desc:'RL textbook chuẩn nhất. Miễn phí PDF từ tác giả.'},
  ]},
  { cat:'Dataset & Model Hub', color:'#2dd4bf', items:[
    {name:'Kaggle Datasets',url:'https://www.kaggle.com/datasets',desc:'Hàng nghìn dataset. Tìm IoT, sensors, time-series.'},
    {name:'PlantVillage Dataset',url:'https://plantvillage.psu.edu/',desc:'54,000+ ảnh bệnh cây 26 loại. Phù hợp nông nghiệp Đà Lạt.'},
    {name:'TensorFlow Hub',url:'https://tfhub.dev/',desc:'Pre-trained models: MobileNet, EfficientDet. Fine-tune nhanh.'},
    {name:'Roboflow Universe',url:'https://universe.roboflow.com/',desc:'100K+ CV datasets. Export YOLO, COCO, TFLite.'},
    {name:'Edge Impulse Model Zoo',url:'https://edgeimpulse.com/model-zoo',desc:'Pre-trained TinyML: keyword, gesture, vibration.'},
    {name:'UCI ML Repository',url:'https://archive.ics.uci.edu/ml/',desc:'Classic datasets research. Nhiều IoT time-series.'},
    {name:'IEEE DataPort',url:'https://ieee-dataport.org/',desc:'Datasets IEEE cho research. Industrial IoT, smart grid.'},
    {name:'MIMIC-III Clinical Database',url:'https://physionet.org/content/mimiciii/',desc:'Healthcare time-series. Cho wearable health AI research.'},
  ]},
  { cat:'Cộng đồng & Khởi nghiệp', color:'#ff6b35', items:[
    {name:'Techfest Vietnam',url:'https://techfest.vn/',desc:'Festival khởi nghiệp lớn nhất VN. Pitch và nhận funding.'},
    {name:'Hackster.io',url:'https://www.hackster.io/',desc:'Community hardware+IoT lớn nhất. Project sharing, hackathon.'},
    {name:'Arduino Forum',url:'https://forum.arduino.cc/',desc:'1M thành viên, giải đáp kỹ thuật nhanh.'},
    {name:'ESP32 Forum',url:'https://esp32.com/',desc:'Forum chính thức ESP32 từ Espressif.'},
    {name:'GitHub Student Pack',url:'https://education.github.com/pack',desc:'Miễn phí: GitHub Pro, AWS, Azure, Figma cho sinh viên.'},
    {name:'Google ML Developer Programs',url:'https://developers.google.com/community/experts',desc:'TF Certificate, GDE. Tốt cho career và networking.'},
    {name:'Arm Developer Program',url:'https://developer.arm.com/',desc:'Resources cho ARM Cortex-M. Nhiều board AIoT dùng ARM.'},
    {name:'DLU Innovation Lab',url:'https://dlu.edu.vn/',desc:'Lab khởi nghiệp Đại học Đà Lạt. Mentoring + không gian làm việc.'},
  ]},
]
