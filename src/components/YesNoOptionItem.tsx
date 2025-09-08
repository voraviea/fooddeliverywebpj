import React from 'react';

export type YesNoType = 'yes' | 'no';

interface YesNoOptionItemProps {
  type: YesNoType;
  icon: string; // URL to either an image or GIF file
  isSelected: boolean;
  onSelect: (type: YesNoType) => void;
  text: string;
}

const YesNoOptionItem: React.FC<YesNoOptionItemProps> = ({
  type,
  icon,
  isSelected,
  onSelect,
  text,
}) => {
  return (
    <div
      onClick={() => onSelect(type)}
      className={`p-[16px] flex gap-[8px] items-center rounded-[8px] border cursor-pointer transition-colors ${
        isSelected ? 'border-[#58BC6B]' : 'border-[#E5E5E5]'
      }`}
    >
      <img 
        src={icon} 
        alt={`${type} icon`} 
        className='w-[24px] h-[24px] object-contain' 
      />
      <p className='text-[22px]'>{text}</p>
    </div>
  );
};

export default YesNoOptionItem; 