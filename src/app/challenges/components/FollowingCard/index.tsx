import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { StaticImageData } from 'next/image';
import UserImage from '@/components/UserImage';
import TagGroup from '@/app/challenge/components/TagGroup';
import { Status } from '@/types/Status';
import { Challenges } from '@/types/Challenges';

interface FollowingCardProps {
  challenge: Challenges;
  openTag: boolean;
  handleOpenCounterProposal: (open: boolean) => void;
  handleOpenRefuse: (open: boolean) => void;
  setOpenTag: (open: boolean) => void;
  setOpenModal: (open: boolean) => void;
}

export default function ReceivedChallenges({
  challenge,
  openTag,
  handleOpenCounterProposal,
  handleOpenRefuse,
  setOpenTag,
  setOpenModal,
}: FollowingCardProps) {

  const { game, user, value } = challenge;
  const { userImage, userName, gamesPlayed, gamesVictory, gamesDefeat, status } = user;
  return (
    <Card
      width="100%"
      height="auto"
      content={
        <div className="h-100">
          <div className="d-flex align-items-center justify-content-between mr-1 ml-1">
            <div
              style={{ height: '74px' }}
              className="d-flex align-items-center flex-gap-1"
            >
              <UserImage status={status} userImage={userImage} />
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
            <div className='d-flex flex-column mtb-1 receivedChallenge-buttonGroup '>
              <Button
                onClick={() => setOpenModal(true)}
                height="22px"
                width="72px"
                content={'Aceitar'}
                size="small"
              />
              <Button
                onClick={() => handleOpenRefuse(true)}
                height="22px"
                width="72px"
                content={'Recusar'}
                size="small"
                theme='outline'
              />
              <Button
                onClick={() => handleOpenCounterProposal(true)}
                height="22px"
                width="72px"
                content={'Contraproposta'}
                size="small"
                theme='secondary'
              />
            </div>
          </div>
          <div>
            <hr style={{ borderBottom: '1.5px solid #464448' }} />
            <TagGroup games={challenge.user.games} open={openTag} setOpen={setOpenTag} />
            <hr style={{ borderBottom: '1.5px solid #464448' }} />
            <div style={{ padding: '15px 10px', height: '41px' }} className='d-flex align-items-center justify-content-between'>
              <div style={{ gap: '2px' }} className='text-extra-small-400 d-flex align-items-center justify-content-between'>
                <p className='color-black-7'>Jogo escolhido:</p>
                <p>{game}</p>
              </div>
              <div style={{ gap: '2px' }} className='text-extra-small-400 d-flex align-items-center justify-content-between'>
                <p className='color-black-7'>Aposta: </p>
                <p>R$ {value}</p>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
}
