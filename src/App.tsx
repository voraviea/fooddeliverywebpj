import './App.css';

import DeliveryOption, { DeliveryType } from './components/DeliveryOption';
import backIcon from './assets/back-icon.png';
import locationIcon from './assets/location-icon.png';
import deliveryOptionIcon from './assets/delivery-option-icon.png';
import yesIcon from './assets/yes-icon.png';
import noIcon from './assets/no-icon.png';
import visaIcon from './assets/visa-icon.png';
import discountIcon from './assets/discount-icon.png';
import DeliveryOptionItem, { DeliveryOptionType } from './components/DeliveryOptionItem';
import YesNoOptionItem, { YesNoType } from './components/YesNoOptionItem';
import YesNoImage from './components/YesNoImage';
import ConsentForm from './components/ConsentForm';
import InstructionPage from './components/InstructionPage';
import { useEffect, useState } from 'react';

type AppPage = 'consent' | 'instructions' | 'survey';

function App() {
  const [currentPage, setCurrentPage] = useState<AppPage>('consent');
  const [randomType, setRandomType] = useState<string | null>(null);
  const [selectedDeliveryType, setSelectedDeliveryType] = useState<DeliveryType>('Delivery');
  const [selectedDeliveryOption, setSelectedDeliveryOption] = useState<DeliveryOptionType>('Priority');
  const [selectedYesNo, setSelectedYesNo] = useState<YesNoType | null>(null);
  const [showValidationError, setShowValidationError] = useState<boolean>(false);

  useEffect(() => {
    const options = ['A', 'B', 'C', 'D'];
    const randomIndex = Math.floor(Math.random() * options.length);
    const randomType = options[randomIndex];
    setRandomType(randomType);
  }, []);

  const handleDeliveryOptionSelect = (type: DeliveryOptionType) => {
    setSelectedDeliveryOption(type);
  };

  const handleYesNoSelect = (type: YesNoType) => {
    setSelectedYesNo(type);
    setShowValidationError(false); // Clear validation error when user selects an option
  };

  const handleConsentResponse = (response: YesNoType) => {
    if (response === 'no') {
      window.location.href = process.env.REACT_APP_SURVEY_URL + '?consent=no';
    } else {
      setCurrentPage('instructions');
    }
  };

  const handleInstructionsContinue = () => {
    setCurrentPage('survey');
  };

  const getDeliveryFee = (option: DeliveryOptionType): number => {
    switch (option) {
      case 'Priority':
        return 30;
      case 'Standard':
        return 15;
      case 'Saver':
        return 0;
      case 'Later':
        return 0;
      default:
        return 15;
    }
  };

  const getTotalPrice = (): number => {
    const subtotal = 175; // Base item price
    const deliveryFee = getDeliveryFee(selectedDeliveryOption);
    return subtotal + deliveryFee;
  };

  const handleSubmit = () => {
    if (selectedYesNo === null) {
      setShowValidationError(true);
      alert('กรุณาเลือกคำตอบสำหรับ "ต้องการรับช้อนส้อมพลาสติกหรือไม่"');
      return;
    }
    window.location.href = process.env.REACT_APP_SURVEY_URL + `?surveyType=${randomType}&requestPlasticSpoon=${selectedYesNo}&consent=yes`;
  }

  if (currentPage === 'consent') {
    return <ConsentForm onConsentResponse={handleConsentResponse} />;
  }

  if (currentPage === 'instructions') {
    return <InstructionPage onContinue={handleInstructionsContinue} />;
  }

  return (
    <div className='flex flex-col gap-[12px] max-w-[450px] min-h-screen mx-auto bg-[#F5F5F5]'>
      <div className='relative p-[15px] bg-white flex items-center'>
        <img src={backIcon} alt="back" className='w-[24px] h-[24px]' />
        <p className='absolute text-center text-[24px] left-1/2 -translate-x-1/2'>Sunshine Tea Bar</p>
      </div>
      <div className='flex flex-col gap-[16px] px-[15px] py-[12px] bg-white'>
        <div className='flex gap-[15px] items-center'>
          <DeliveryOption 
            type='Delivery'
            isSelected={selectedDeliveryType === 'Delivery'}
          />
          <DeliveryOption 
            type='Pickup'
            isSelected={selectedDeliveryType === 'Pickup'}
          />
        </div>
        <div className='flex gap-[12px] items-center justify-between'>
          <img src={locationIcon} alt="location" className='w-[24px] h-[24px]' />
          <p className='text-[22px] flex-1 font-medium'>Home</p>
          <img src={backIcon} alt="forward" className='w-[24px] h-[24px] rotate-180' />
        </div>
        <div className='w-full h-[1px] bg-[#F5F5F5]' />
        <div className='flex gap-[12px] items-center'>
          <img src={deliveryOptionIcon} alt="delivery option" className='w-[24px] h-[24px]' />
          <div className='flex flex-col'>
            <p className='text-[22px] font-medium'>Delivery Options</p>
            <p className='text-[16px] text-[#676767]'>Distance from you: 4.5 km</p>
          </div>
        </div>
        <div className='flex flex-col gap-[16px]'>
          <DeliveryOptionItem
            type="Priority"
            title="Priority"
            time="< 40 mins"
            description="Shortest waiting time to get your order"
            price={30}
            isSelected={selectedDeliveryOption === 'Priority'}
            onSelect={handleDeliveryOptionSelect}
          />
          <DeliveryOptionItem
            type="Standard"
            title="Standard"
            time="40 mins"
            price={15}
            isSelected={selectedDeliveryOption === 'Standard'}
            onSelect={handleDeliveryOptionSelect}
          />
          <DeliveryOptionItem
            type="Saver"
            title="Saver"
            time="50 mins"
            price="FREE"
            isSelected={selectedDeliveryOption === 'Saver'}
            onSelect={handleDeliveryOptionSelect}
          />
          <DeliveryOptionItem
            type="Later"
            title="Order for laters"
            time=""
            price=""
            isSelected={selectedDeliveryOption === 'Later'}
            onSelect={handleDeliveryOptionSelect}
          />
        </div>
      </div>
      <div className='flex flex-col gap-[16px] px-[15px] py-[12px] bg-white'>
        <div className='flex justify-between items-center'>
          <p className='text-[26px] font-bold'>Order Summary</p>
          <p className='text-[20px] text-[#045EEE] font-medium'>Add Items</p>
        </div>
        <div className='flex gap-[12px]'>
          <p className='text-[#045EEE] px-[9.5px] py-[5px] rounded-[8px] border h-fit font-medium'>1x</p>
          <div className='flex flex-col flex-1'>
            <p className='text-[22px] font-medium'>ชาองุ่นปั่นสด</p>
            <p className='text-[20px] text-[#676767]'>หวาน 100%</p>
            <p className='text-[20px] text-[#676767]'>เนื้อองุ่น 90 กรัม Fresh Peeled Grapes</p>
            <p className='text-[20px] text-[#045EEE] font-medium'>Edit</p>
          </div>
          <p className='text-[22px]'>175</p>
        </div>
        <div className='w-full h-[1px] bg-[#F5F5F5]' />
        <div className='flex flex-col gap-[6px]'>
          <div className='flex justify-between'>
            <p className='text-[22px]'>Subtotal</p>
            <p className='text-[20px]'>฿175</p>
          </div>
          <div className='flex justify-between'>
            <p className='text-[22px]'>Delivery Fee</p>
            <p className='text-[20px]'>
              {getDeliveryFee(selectedDeliveryOption) === 0 ? 'FREE' : `฿${getDeliveryFee(selectedDeliveryOption)}`}
            </p>
          </div>
        </div>
      </div>
      <div className={`flex flex-col gap-[16px] px-[15px] py-[12px] bg-white`}>
        <p className='text-[26px] font-bold'>Eco-friendly Options</p>
        <p className='text-[22px]'>ต้องการรับช้อนส้อมพลาสติกหรือไม่ <span className='text-red-500'>*</span></p>
        <div className='flex gap-[16px] items-center'>
          <YesNoImage selectedOption={selectedYesNo} randomType={randomType} />
          <div className='flex flex-col gap-[16px] flex-1'>
            <YesNoOptionItem
              type="yes"
              icon={yesIcon}
              isSelected={selectedYesNo === 'yes'}
              onSelect={handleYesNoSelect}
              text='Yes'
            />
            <YesNoOptionItem
              type="no"
              icon={noIcon}
              isSelected={selectedYesNo === 'no'}
              onSelect={handleYesNoSelect}
              text='No'
            />
          </div>
        </div>
        {showValidationError && (
          <p className='text-red-500 text-[20px] mt-1'>กรุณาเลือกคำตอบ</p>
        )}
      </div>
      <div className='flex flex-col gap-[16px] px-[15px] py-[12px] bg-white'>
        <p className='text-[26px] font-bold'>Payment Details</p>
        <div className='flex gap-[12px] items-center'>
          <img src={visaIcon} alt="visa" className='w-[24px] h-[24px]' />
          <p className='text-[22px] flex-1 font-medium'>8054</p>
          <img src={backIcon} alt="forward" className='w-[24px] h-[24px] rotate-180' />
        </div>
        <div className='w-full h-[1px] bg-[#F5F5F5]' />
        <div className='flex gap-[12px] items-center'>
          <img src={discountIcon} alt="discount" className='w-[24px] h-[24px]' />
          <p className='text-[22px] flex-1 font-medium'>User Offer</p>
          <img src={backIcon} alt="forward" className='w-[24px] h-[24px] rotate-180' />
        </div>
      </div>
      <div className='flex flex-col gap-[16px] px-[15px] py-[12px] bg-white border-t sticky bottom-0'>
        <div className='flex justify-between'>
          <p className='text-[22px]'>Delivery Fee</p>
          <p className='text-[26px] font-bold'>฿{getTotalPrice()}</p>
        </div>
        <button className='text-[24px] bg-[#58BC6B] py-[9.5px] text-white rounded-[8px] w-full text-center font-bold' onClick={handleSubmit}>Place Order</button>
      </div>
    </div>
  );
}

export default App;