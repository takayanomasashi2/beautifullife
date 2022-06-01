import Link from "next/link";

export const Banner = () => {
  return (
    <>
      {/* <!-- BEGIN MAIN BLOCK --> */}
      <div className="main-block load-bg">
        <div className="wrapper">
          <div className="main-block__content">
            {/* <span className="">プロフェッショナル</span> */}
            <h1 className="main-text">やせる専門店<br></br>劇的実感</h1>
            <p>最高峰のアロマの力で肌に栄養を</p>
            <br></br>

            <Link href="#">
              <a className="btn-line"> お問い合わせ</a>
            </Link>
          </div>
        </div>
        {/* <img
          className="main-block__decor"
          src="/assets/img/main-block-decor.png"
          alt=""
        /> */}
      </div>
      {/* <!-- MAIN BLOCK EOF --> */}
    </>
  );
};
