import { INSTRUCTOR } from '../data/content'

export default function Contact() {
  return (
    <div className="fu">
      <div className="page-hdr">
        <h1><span className="gt">Liên hệ giảng viên</span></h1>
        <p>Thắc mắc về bài tập, đề tài, thực tập hoặc NCKH</p>
      </div>

      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(min(300px,100%),1fr))',gap:'1.1rem',maxWidth:800}}>
        {/* Instructor card */}
        <div className="card" style={{padding:'1.5rem',borderColor:'rgba(0,212,255,.22)',background:'rgba(0,212,255,.025)'}}>
          <div style={{display:'flex',alignItems:'center',gap:'.95rem',marginBottom:'1.2rem'}}>
            <div style={{width:52,height:52,borderRadius:12,background:'linear-gradient(135deg,var(--c),var(--g))',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:900,fontSize:'1.15rem',color:'#000',flexShrink:0,fontFamily:'var(--fm)'}}>
              {INSTRUCTOR.avatar}
            </div>
            <div>
              <div style={{fontWeight:800,fontSize:'1rem',color:'var(--txt)',marginBottom:'.08rem'}}>{INSTRUCTOR.name}</div>
              <div style={{fontSize:'.76rem',color:'var(--txt3)',marginBottom:'.04rem'}}>{INSTRUCTOR.dept}</div>
              <div style={{fontSize:'.74rem',color:'var(--c2)'}}>{INSTRUCTOR.uni}</div>
            </div>
          </div>

          <div style={{display:'flex',flexDirection:'column',gap:'.5rem'}}>
            <a href={`mailto:${INSTRUCTOR.email}`} className="btn btn-o"
              style={{justifyContent:'flex-start',fontSize:'.82rem'}}>
              {INSTRUCTOR.email}
            </a>
            <a href={`tel:${INSTRUCTOR.phone.replace(/\s/g,'')}`} className="btn btn-s"
              style={{justifyContent:'flex-start',fontSize:'.82rem'}}>
              {INSTRUCTOR.phone}
            </a>
          </div>

          <div className="divider"/>
          <div style={{fontSize:'.73rem',color:'var(--txt3)',lineHeight:1.65}}>
            <div style={{marginBottom:'.2rem'}}>{INSTRUCTOR.city}</div>
            <div>Khoa Công nghệ Thông tin, {INSTRUCTOR.uni}</div>
          </div>
        </div>

        {/* Info cards */}
        <div style={{display:'flex',flexDirection:'column',gap:'1rem'}}>
          <div className="card" style={{padding:'1.1rem'}}>
            <div style={{fontSize:'.65rem',color:'var(--txt3)',fontFamily:'var(--fm)',textTransform:'uppercase',letterSpacing:'.07em',marginBottom:'.55rem'}}>Liên hệ</div>
            <ul className="ul">
              <li>phuctv@dlu.edu.vn</li>
              <li>0976353606</li>
              <li>Nhà A7 — Khoa CNTT, DLU</li>
              <li>Ngoài giờ: liên hệ qua email trước 24h</li>
            </ul>
          </div>

          <div className="card" style={{padding:'1.1rem'}}>
            <div style={{fontSize:'.65rem',color:'var(--txt3)',fontFamily:'var(--fm)',textTransform:'uppercase',letterSpacing:'.07em',marginBottom:'.55rem'}}>Hướng dẫn liên hệ hiệu quả</div>
            <ul className="ul">
              <li>Email: ghi rõ Tên, MSSV, Môn học, Tiêu đề cụ thể</li>
              <li>Đính kèm code + error message nếu hỏi kỹ thuật</li>
              <li>Đề tài NCKH: chuẩn bị 1-trang tóm tắt ý tưởng</li>
              <li>Phản hồi email trong 24–48 giờ (ngày làm việc)</li>
            </ul>
          </div>

          <div className="alert ai" style={{margin:0}}>
            Sinh viên có thể đặt câu hỏi kỹ thuật bất kỳ lúc nào qua email.
            Kèm theo code snippet và mô tả lỗi để được hỗ trợ nhanh nhất.
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div style={{marginTop:'2rem',maxWidth:800}}>
        <div style={{fontSize:'.65rem',color:'var(--txt3)',fontFamily:'var(--fm)',textTransform:'uppercase',letterSpacing:'.07em',marginBottom:'.75rem'}}>Câu hỏi thường gặp</div>
        <div style={{display:'flex',flexDirection:'column',gap:'.5rem'}}>
          {[
            ['Mua phần cứng ở đâu?','Shopee/Lazada: tìm "ESP32 Dev Kit", "DHT22", "SSD1306 OLED". Arduino House (TP.HCM) hoặc shop.inodesign.vn có hàng chất lượng tốt. Giá tham khảo trong tài liệu Lab.'],
            ['Không có phần cứng, vẫn học được không?','Có. Dùng Wokwi.com mô phỏng Arduino/ESP32 online miễn phí. Hầu hết sensor và libraries đều được hỗ trợ.'],
            ['Đề tài NCKH cần chuẩn bị gì?','Đọc đề tài trong mục Đề tài, chọn phù hợp trình độ. Chuẩn bị 1 trang A4: tóm tắt bài toán, giải pháp đề xuất, timeline. Đặt lịch gặp GV để thảo luận.'],
            ['Có thể làm nhóm không?','Có. Đề tài có ghi số người: 1-2 SV, 2-3 SV, hoặc 3-5 SV. Mỗi thành viên cần đóng góp rõ ràng, có thể demo phần của mình.'],
            ['Khởi nghiệp từ đề tài môn học?','Hoàn toàn được khuyến khích. Xem mục Đề tài cấp Startup. DLU có chương trình hỗ trợ startup sinh viên. Có thể nộp Techfest, VinUni Hackathon.'],
          ].map(([q, a], i) => (
            <div key={i} className="card" style={{padding:'.95rem 1.1rem'}}>
              <div style={{fontWeight:600,fontSize:'.85rem',color:'var(--c)',marginBottom:'.32rem'}}>{q}</div>
              <div style={{fontSize:'.83rem',color:'var(--txt2)',lineHeight:1.65}}>{a}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
