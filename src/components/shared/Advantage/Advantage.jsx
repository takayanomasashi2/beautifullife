import { Card } from './Card/Card';
import advantagesData from 'data/advantage/advantage';
import { SectionTitle } from 'components/shared/SectionTitle/SectionTitle';

export const Advantage = () => {
  const advantages = [...advantagesData];
  return (
    <>
      {/* <!-- BEGIN ADVANTAGES --> */}
      <SectionTitle
          subTitle='人気の理由'
          title='初めての方へ'
          body='ビューティフルライフは無理なく美しくなれるボディケア専門店です！'
        />
      <div className='advantages'>
        <div className='wrapper'>
          <div className='advantages-items'>
            {advantages.map((advantage, index) => (
              <Card key={index} advantage={advantage} />
            ))}
          </div>
        </div>
      </div>
      {/* <!-- ADVANTAGES EOF   --> */}
    </>
  );
};
