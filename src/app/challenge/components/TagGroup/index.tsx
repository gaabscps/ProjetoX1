import Tag from '@/components/Tag';

interface TagGroupProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function TagGroup({ open, setOpen }: TagGroupProps) {
  return (
    <div
      style={{ height: '46px', position: 'relative' }}
      className="d-flex align-items-center justify-content-between mr-1"
    >
      <div className="d-flex align-items-center ml-1">
        <Tag>
          <p className="text-extra-small-400">
            League of Legends: Profissional
          </p>
        </Tag>
        <Tag>
          <p className="text-extra-small-400">FIFA: Profissional</p>
        </Tag>
      </div>
      <p
        onClick={() => setOpen(!open)}
        className="text-extra-small-400 action-icon"
      >
        ver mais
      </p>
      <div
        style={{ position: 'absolute' }}
        className={`d-flex align-items-center ${open ? 'tag-wrapper' : 'tag'}`}
      >
        <Tag>
          <p className="text-extra-small-400">
            League of Legends: Profissional
          </p>
        </Tag>
        <Tag>
          <p className="text-extra-small-400">FIFA: Profissional</p>
        </Tag>
      </div>
    </div>
  );
}
