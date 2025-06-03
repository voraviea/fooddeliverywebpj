import React from 'react';

export type DeliveryType = 'Delivery' | 'Pickup';

interface DeliveryOptionProps {
  type: DeliveryType;
  isSelected: boolean;
  onOptionChange: (option: DeliveryType) => void;
}

const DeliveryOption: React.FC<DeliveryOptionProps> = ({ type, isSelected, onOptionChange }) => {
  return (
    <div className='flex gap-[15px] items-center'>
      <button
        onClick={() => onOptionChange(type)}
        className={`text-[24px] py-[4px] px-[12px] rounded-[40px] transition-colors ${
          isSelected
            ? 'text-[#58BC6B] bg-[#F5F5F5] font-medium'
            : 'text-[#676767]'
        }`}
      >
        {type}
      </button>
    </div>
  );
};

export default DeliveryOption; 