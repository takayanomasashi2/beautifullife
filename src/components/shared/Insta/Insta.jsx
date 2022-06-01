import { Card } from './Card/Card';

const instaData = [
  {
    image: '/assets/img/massage-2021-08-27-09-18-17-utc.jpg',
    link: '#/',
    id: '1',
  },
  {
    image: '/assets/img/massage-with-a-special-massage-blade-2022-02-01-21-04-57-utc.JPG',
    link: '#/',
    id: '2',
  },
  {
    image: '/assets/img/massage-2022-02-25-02-03-37-utc.jpg',
    link: '#/',
    id: '3',
  },
  {
    image: '/assets/img/hot-stone-massage-2021-08-26-18-27-05-utc.jpg',
    link: '#/',
    id: '4',
  },
  {
    image: '/assets/img/masseur-with-vibrating-massager-face-massage-2021-08-26-16-27-21-utc.jpg',
    link: '#/',
    id: '5',
  },
  {
    image: '/assets/img/relaxing-massage-2021-09-02-08-35-04-utc.jpg',
    link: '#/',
    id: '6',
  },
];

export const Insta = () => {
  return (
    <>
      {/* <!-- BEGIN INSTA PHOTOS --> */}
      <div className='insta-photos'>
        {instaData.map((insta) => (
          <Card key={insta.id} insta={insta} />
        ))}
      </div>
      {/* <!-- INSTA PHOTOS EOF   --> */}
    </>
  );
};
