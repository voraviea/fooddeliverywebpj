import React from 'react';

interface InstructionPageProps {
  onContinue: () => void;
}

const InstructionPage: React.FC<InstructionPageProps> = ({ onContinue }) => {
  return (
    <div className='flex flex-col gap-[12px] max-w-[450px] min-h-screen mx-auto py-[15px] px-[12px]'>
      <h2 className='text-[26px] font-bold text-center'>คำชี้แจงสำหรับผู้เข้าร่วมการวิจัย</h2>
        <div className='text-[20px]'>
          <p>
          ขอความกรุณาอ่านคำชี้แจงต่อไปนี้เพื่อให้เข้าใจบริบทการทดลองอย่างครบถ้วน
          </p>
          <ol className='list-decimal pl-[16px]'>
            <li>หน้าจอที่ท่านกำลังจะดำเนินการต่อไปนี้เป็นหน้าจอจำลอง ซึ่งถูกออกแบบให้มีลักษณะเดียวกับหน้าจอสรุปคำสั่งซื้อบนแพลตฟอร์มสั่งอาหารจริง โดยตามปกติจะปรากฏขึ้นภายหลังจากที่ผู้ใช้ได้เลือกรายการอาหารเรียบร้อยแล้ว</li>
            <li>ขั้นตอนทั้งหมดที่ท่านจะทำบนหน้าจอจำลองนี้เป็นส่วนหนึ่งของการทดลองเท่านั้น ไม่มีการสั่งซื้ออาหารจริงเกิดขึ้น และจะไม่มีค่าใช้จ่ายใด ๆ ทั้งสิ้น ขอให้ท่านดำเนินการตามขั้นตอนจนกว่าจะเสร็จสิ้นกระบวนการสั่งซื้อเพื่อดำเนินการทดลองต่อไปให้สมบูรณ์</li>
          </ol>
        </div>
      <button 
        className='text-[24px] bg-[#58BC6B] py-[9.5px] text-white rounded-[8px] w-full text-center font-bold'
        onClick={onContinue}
      >
        ถัดไป
      </button>
    </div>
  );
};

export default InstructionPage;
