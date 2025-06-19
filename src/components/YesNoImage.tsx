import { YesNoType } from './YesNoOptionItem';
import normalStatic from '../assets/images/normal-static.png';
import normalGif from '../assets/images/normal-animate.gif';

import noStatic from '../assets/images/no-static.jpg';
import noGif from '../assets/images/no-animate.gif';

import yesStatic from '../assets/images/yes-static.jpg';
import yesGif from '../assets/images/yes-animate.gif';

interface YesNoImageProps {
  selectedOption: YesNoType | null;
  randomType: string | null;
}

const YesNoImage: React.FC<YesNoImageProps> = ({ selectedOption, randomType }) => {
  const getImage = () => {
    if (randomType === 'A') {
      return normalStatic;
    }
    if (randomType === 'B') {
      switch (selectedOption) {
        case 'yes':
          return yesStatic;
        case 'no':
          return noStatic;
        default:
          return normalStatic;
      }
    }
    if (randomType === 'C') {
      return normalGif;
    }
    if (randomType === 'D') {
      switch (selectedOption) {
        case 'yes':
          return yesGif;
        case 'no':
          return noGif;
        default:
          return normalGif;
      }
    }
    return normalStatic;
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