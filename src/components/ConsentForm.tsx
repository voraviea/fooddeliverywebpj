import React from 'react';
import YesNoOptionItem, { YesNoType } from './YesNoOptionItem';
import yesIcon from '../assets/yes-icon.png';
import noIcon from '../assets/no-icon.png';

interface ConsentFormProps {
  onConsentResponse: (response: YesNoType) => void;
}

const ConsentForm: React.FC<ConsentFormProps> = ({ onConsentResponse }) => {
  const [selectedConsent, setSelectedConsent] = React.useState<YesNoType | null>(null);

  const handleConsentSelect = (type: YesNoType) => {
    setSelectedConsent(type);
  };

  const handleSubmit = () => {
    if (selectedConsent) {
      onConsentResponse(selectedConsent);
    }
  };

  return (
    <div className='flex flex-col gap-[12px] max-w-[450px] min-h-screen mx-auto py-[15px] px-[12px]'>
        <h2 className='text-[26px] font-bold text-center'>แบบฟอร์มแสดงความยินยอมเข้าร่วมการวิจัย</h2>
        <div className='text-[20px]'>
          <p>
            ข้าพเจ้าได้รับทราบว่า ขณะนี้มีการดำเนินโครงการวิจัยเพื่อประโยชน์ทางวิชาการและการพัฒนาองค์ความรู้ การเข้าร่วมครั้งนี้มีวัตถุประสงค์เพื่อรวบรวมข้อมูลอันเป็นประโยชน์และนำไปใช้ในการศึกษาต่อไป
            <br />ข้าพเจ้าทราบและเข้าใจว่า
          </p>
          <ol className='list-decimal pl-[16px]'>
            <li>การเข้าร่วมโครงการวิจัยนี้เป็นไปด้วยความสมัครใจ ข้าพเจ้าสามารถปฏิเสธหรือยกเลิกการเข้าร่วมได้ตลอดเวลา โดยไม่กระทบสิทธิหรือผลประโยชน์อื่นใดของข้าพเจ้า</li>
            <li>ข้อมูลที่ได้จากข้าพเจ้าจะถูกเก็บรักษาอย่างเป็นความลับ และนำไปใช้เพื่อวัตถุประสงค์ทางการวิจัยและการศึกษาเท่านั้น</li>
            <li>ผลการวิจัยอาจถูกนำไปเผยแพร่ในเชิงวิชาการ แต่จะไม่มีการเปิดเผยข้อมูลที่สามารถระบุตัวบุคคลได้โดยไม่ได้รับอนุญาต</li>
            <li>ระยะเวลาที่ใช้ในการดำเนินการคาดว่าจะใช้เวลาประมาณ 5 นาที</li>
            <li>หากมีข้อสงสัยใด ๆ สามารถติดต่อสอบถามข้อมูลเพิ่มเติมได้ที่ 092-614-6446</li>
          </ol>
          <p className='text-red-500 font-bold'>ข้าพเจ้าได้อ่านและทำความเข้าใจคำชี้แจงข้างต้นแล้ว และยินยอมเข้าร่วมการวิจัยนี้ด้วยความสมัครใจ</p> 
        </div>
        <div className='flex flex-col gap-[16px]'>
          <YesNoOptionItem
            type="yes"
            icon={yesIcon}
            isSelected={selectedConsent === 'yes'}
            onSelect={handleConsentSelect}
            text='ยินยอม'
          />
          <YesNoOptionItem
            type="no"
            icon={noIcon}
            isSelected={selectedConsent === 'no'}
            onSelect={handleConsentSelect}
            text='ไม่ยินยอม'
          />
        </div>

        <button 
          className={`text-[24px] py-[9.5px] text-white rounded-[8px] w-full text-center font-bold ${
            selectedConsent ? 'bg-[#58BC6B]' : 'bg-[#CCCCCC] cursor-not-allowed'
          }`}
          onClick={handleSubmit}
          disabled={!selectedConsent}
        >
          Continue
        </button>
    </div>
  );
};

export default ConsentForm;
