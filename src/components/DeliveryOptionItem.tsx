import React from 'react';

export type DeliveryOptionType = 'Priority' | 'Standard' | 'Saver' | 'Later';

interface DeliveryOptionItemProps {
  type: DeliveryOptionType;
  title: string;
  time: string;
  description?: string;
  price: string | number;
  isSelected: boolean;
  onSelect: (type: DeliveryOptionType) => void;
}

const DeliveryOptionItem: React.FC<DeliveryOptionItemProps> = ({
  type,
  title,
  time,
  description,
  price,
  isSelected,
  onSelect,
}) => {
  return (
    <div
      onClick={() => onSelect(type)}
      className={`p-[16px] flex rounded-[8px] border cursor-pointer transition-colors ${
        isSelected ? 'border-[#58BC6B]' : 'border-[#E5E5E5]'
      }`}
    >
      <div className='flex flex-col flex-1'>
        <div className='flex items-center gap-[6px]'>
          <p className='text-[22px] font-medium'>{title}</p>
          <div className='w-[6px] h-[6px] bg-black rounded-full'></div>
          <p className='text-[20px]'>{time}</p>
        </div>
        {description && <p className='text-[#676767]'>{description}</p>}
      </div>
      <p className={`text-[22px] ${price === 'FREE' ? 'text-[#58BC6B]' : ''}`}>
        {price}
      </p>
    </div>
  );
};

export default DeliveryOptionItem; 