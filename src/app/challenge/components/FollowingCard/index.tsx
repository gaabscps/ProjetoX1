import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import TagGroup from '../TagGroup';
import { StaticImageData } from 'next/image';
import UserImage from '@/components/UserImage';

interface FollowingCardProps {
  openTag: boolean;
  userImage: StaticImageData;
  userName: string;
  gamesPlayed: string;
  gamesVictory: string;
  gamesDefeat: string;
  setOpenTag: (open: boolean) => void;
  setOpenModal: (open: boolean) => void;
}

export default function FollowingCard({
  openTag,
  userImage,
  userName,
  gamesPlayed,
  gamesVictory,
  gamesDefeat,
  setOpenTag,
  setOpenModal,
}: FollowingCardProps) {
  return (
    <Card
      width="100%"
      height="120px"
      content={
        <div className="h-100">
          <div className="d-flex align-items-center justify-content-between mr-1 ml-1">
            <div
              style={{ height: '74px' }}
              className="d-flex align-items-center flex-gap-1"
            >
              <UserImage userImage={userImage} />
              <div>
                <p style={{ marginBottom: '9px' }} className="text-small-400">
                  {userName}
                </p>
                <div className="text-small-400 color-black-7 challenge-stats-content">
                  <p className="">JR: {gamesPlayed}</p>
                  <p className="">V: {gamesVictory}</p>
                  <p className=''>D: {gamesDefeat}</p>
                </div>
              </div>
            </div>
            <div>
              <Button
                onClick={() => setOpenModal(true)}
                height="22px"
                width="72px"
                content={'Desafiar'}
                size="small"
              />
            </div>
          </div>
          <hr style={{ borderBottom: '1.5px solid #464448' }} />
          <TagGroup open={openTag} setOpen={setOpenTag} />
        </div>
      }
    />
  );
}
