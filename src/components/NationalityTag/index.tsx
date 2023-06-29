import Image from 'next/image';
import Brasil from '@/assets/svg/brazil.svg';
import ArrowCard from '@/assets/svg/arrowCard.svg';

export default function NationalityTag() {
  return (
    <div className="tag-container action-icon">
      <Image
        style={{ marginRight: '8px' }}
        src={Brasil}
        alt="Portuguese flag"
      />
      <p>Português - BR</p>
      <Image className="nationality-arrow" src={ArrowCard} alt="arrow" />
    </div>
  );
}
