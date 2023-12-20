import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import UserImage from '@/components/UserImage';
import TagGroup from '@/app/challenge/components/TagGroup';
import { Challenges } from '@/types/Challenges';

interface ReceivedChallengesProps {
  challenge: Challenges;
  openTag: boolean;
  handleOpenCounterProposal: (open: boolean) => void;
  setOpenTag: (open: boolean) => void;
  handleAcceptChallenge: (id: string) => void;
  handleRejectChallange: (id: string) => void;
}

export default function ReceivedChallenges({
  challenge,
  openTag,
  handleOpenCounterProposal,
  setOpenTag,
  handleAcceptChallenge,
  handleRejectChallange,
}: ReceivedChallengesProps) {

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
              <UserImage status={1} userImage={''} />
              <div>
                <p style={{ marginBottom: '9px' }} className="text-small-400">
                  {challenge.playerHostId}
                </p>
                <div className="text-small-400 color-black-7 challenge-stats-content">
                  <p className="">JR: {challenge?.JR || '0'}</p>
                  <p className="">V: {challenge?.V || '0'}</p>
                  <p className=''>D: {challenge?.V || '0'}</p>
                </div>
              </div>
            </div>
            <div className='d-flex flex-column mtb-1 receivedChallenge-buttonGroup '>
              <Button
                onClick={() => handleAcceptChallenge(challenge._id)}
                height="22px"
                width="72px"
                content={'Aceitar'}
                size="small"
              />
              <Button
                onClick={() => handleRejectChallange(challenge._id)}
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
            <TagGroup games={challenge.games} open={openTag} setOpen={setOpenTag} />
            <hr style={{ borderBottom: '1.5px solid #464448' }} />
            <div style={{ margin: '15px 10px', height: '41px' }} className='d-flex flex-column'>
              <div className='text-extra-small-400 d-flex align-items-center flex-gap-1'>
                <p className='color-black-7'>Jogo escolhido:</p>
                <p>{challenge.gameId}</p>
              </div>
              <div className='text-extra-small-400 d-flex align-items-center flex-gap-1'>
                <p className='color-black-7'>Aposta: </p>
                <p>R$ {challenge.value}</p>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
}
