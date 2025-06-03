import { YesNoType } from './YesNoOptionItem';
import normalImage from '../assets/normal-image.png';
import yesImage from '../assets/yes-image.png';
import noImage from '../assets/no-image.png';

interface YesNoImageProps {
  selectedOption: YesNoType | null;
  randomType: string | null;
}

const YesNoImage: React.FC<YesNoImageProps> = ({ selectedOption, randomType }) => {
  const getImage = () => {
    switch (selectedOption) {
      case 'yes':
        return process.env[`REACT_APP_TYPE_${randomType}_YES_IMAGE_URL`] || yesImage;
      case 'no':
        return process.env[`REACT_APP_TYPE_${randomType}_NO_IMAGE_URL`] || noImage;
      default:
        return process.env[`REACT_APP_TYPE_${randomType}_NORMAL_IMAGE_URL`] || normalImage;
    }
  };

  const image = getImage();

  return (
    <img 
      src={image} 
      alt={`${selectedOption} option selected`} 
      className={`w-[120px] h-[120px] object-cover rounded-lg`}
    />
  );
};

export default YesNoImage; 