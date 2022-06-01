import { PromoVideo } from "components/shared/PromoVideo/PromoVideo";
import { useState } from "react";
import Link from "next/link";

export const Info = () => {
  const [play, setPlay] = useState(false);
  const url = play
    ? "https://www.youtube.com/embed/K1yp7Q1hH1c?autoplay=1"
    : "";
  return (
    <>
      {/* <!-- BEGIN INFO BLOCKS --> */}
      <div className="info-blocks">
        <div
          className="info-blocks__item js-img"
          // style={{ backgroundImage: `url('/assets/img/info-item-bg1.jpg')` }}
        >
          <div className="wrapper">
            <div className="info-blocks__item-img">
              <img
                src="/assets/img/info-item-bg1.jpg"
                className="js-img"
                alt=""
              />
            </div>
            <div className="info-blocks__item-text">
              {/* <span className='saint-text'>Check This Out</span> */}
              <h2>デリケートなお肌にココナッツの栄養を</h2>
              <span className="info-blocks__item-descr">
                ビューティフルライフでは、インドネシア直輸入の新鮮なココナッツオイルを使用させていただいております。ぜひこの機会に赤ちゃん肌を取り戻しましょう！
              </span>
              {/* <p>
                Non aliqua reprehenderit reprehenderit culpa laboris nulla minim
                anim velit adipisicing ea aliqua alluptate sit do do.Non aliqua
                reprehenderit reprehenderit culpa laboris nulla minim anim velit
                adipisicing ea aliqua alluptate sit do do.Non aliqua
                reprehenderit reprehenderit culpa laboris nulla minim.
              </p>
              <Link href='/shop'>
                <a className='btn'>
                  Shop now
                </a>
              </Link> */}
            </div>
          </div>
        </div>
        <div
          className="info-blocks__item info-blocks__item-reverse js-img"
          // style={{ backgroundImage: `url('/assets/img/info-item-bg2.jpg')` }}
        >
          <div className="wrapper">
            <div className="info-blocks__item-img">
              <PromoVideo
                videoUrl={url}
                play={play}
                onVideoPlay={() => setPlay(true)}
                image="/assets/img/Screen Shot 2022-05-07 at 23.23.26.png"
              />
            </div>
           
            <div className="info-blocks__item-text">
               {/* <Link href="/about"> */}
            <a className="info-blocks__item-link">
                  <i className="icon-video"></i>
                  プロモーションビデオもぜひご覧ください！
                  <i className="icon-arrow-lg"></i>
                </a>
                <br></br>
                <br></br>
              {/* </Link> */}
              {/* <span className='saint-text'>About Us</span> */}
              <h2>Be Beautiful</h2>
              <span className="info-blocks__item-descr">
              こんなお悩みはビューティフルライフにお任せください！
              </span>
              <p>
                ・自分でのボディケアを諦めかけている方
                <br />
                ・気になる部分にアプローチしたい方 色々な方法を試してみたけど実感できなかった方 
                <br />
                ・お腹周りをキレイにみせたい
                <br />
                ・あこがれのファッションを着こなしたい方
                <br />
                ・自分にあったボディケアに出会えていない
                <br />
                ・忙しくて運動する時間がない
                <br />
                ・食事の量を減らしても実感できなかった方
                <br />
                <br />
                ※お客様個人の感想であり、効果効能を保証するものではありません
              </p>
              
            </div>
          </div>
        </div>
      </div>
      {/* <!-- INFO BLOCKS EOF   --> */}
    </>
  );
};
