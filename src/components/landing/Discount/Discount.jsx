import Link from 'next/link';

export const Discount = () => {
  return (
    <>
      {/* <!-- BEGIN DISCOUNT --> */}
      <div
        className='discount js-img'
        style={{ backgroundImage: `url('/assets/img/massage-therapist-massaging-woman-calf-in-spa-cent-2022-05-03-23-16-37-utc.jpg')` }}
      >
        <div className='wrapper'>
          <div className='discount-info'>
            <span style={{color:"yellow"}}>短期集中トライアルコース</span>
            <span className='main-text'>
               <span>2,980円</span>
            </span>
            <p>
              やせる専門店プレミアムスリムボディ　人気No.1メニュー！
            </p>

            {/* <Link href='/shop'>
              <a className='btn-line'>お問い合わせ</a>
            </Link> */}
          </div>
        </div>
      </div>
      {/* <!-- DISCOUNT EOF   --> */}
    </>
  );
};
