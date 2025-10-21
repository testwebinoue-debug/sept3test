import React from "react";
import { Button } from "../../components/ui/button";

const footerLinks = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "COMPANY INFO", href: "#company" },
  { label: "PHILOSOPHY", href: "#philosophy" },
  { label: "WORKS", href: "#works" },
  { label: "CONTACT", href: "#contact" },
];

const companyInfo = [
  {
    label: "会社名",
    value: "株式会社セプト・スリー",
  },
  {
    label: "所在地",
    value: "大阪市北区芝田1-12-7 \n大栄ビル新館N1003",
  },
  {
    label: "設立",
    value: "2003年7月\n2006年9月 法人化",
  },
  {
    label: "代表",
    value: "代表取締役　鳥飼  久志",
  },
  {
    label: "事業内容",
    value:
      "商業広告企画・制作\n交通媒体ポスター、\nパンフレット、\n販促物のデザイン\n新聞、WEB、サイネージなどの広告企画・制作",
  },
  {
    label: "取引銀行",
    value: "大阪シティ信用金庫",
  },
];

export const HomeSmartphone = (): JSX.Element => {
  return (
    <div className="bg-white w-full min-w-[320px] flex flex-col">
      <header className="w-full h-[123px] md:h-[150px] lg:h-[180px] flex items-center justify-end px-[25px] md:px-[50px] lg:px-[100px]">
        <img className="w-[60px] h-[21px] md:w-[80px] md:h-[28px] lg:w-[100px] lg:h-[35px]" alt="Menu" src="/group-7.png" />
      </header>

      <section className="flex w-full self-center relative mt-[87px] md:mt-[120px] lg:mt-[150px] items-start justify-center">
        <div className="relative w-full h-[627px] md:h-[800px] lg:h-[900px] max-w-screen-2xl">
          <img
            className="absolute top-1 left-0 w-full h-[623px] md:h-[796px] lg:h-[896px] object-cover"
            alt="Typography img"
            src="/sept3-typography-img.png"
          />

          <div className="absolute top-[248px] md:top-[350px] lg:top-[400px] left-[25px] md:left-[50px] lg:left-[100px]">
            <img
              className="w-[250px] h-12 md:w-[350px] md:h-[70px] lg:w-[450px] lg:h-[90px] object-cover"
              alt="Corporate logo"
              src="/sept3-corporate-logo-img.png"
            />
          </div>

          <div className="absolute top-[321px] md:top-[450px] lg:top-[520px] left-[25px] md:left-[50px] lg:left-[100px] right-[25px] md:right-[50px] lg:right-[100px]">
            <p className="[font-family:'Zen_Kaku_Gothic_Antique',Helvetica] font-normal text-black text-base md:text-lg lg:text-xl tracking-[0] leading-[35px] md:leading-[45px] lg:leading-[55px]">
              株式会社 sept.3 は、広告制作会社です。
              <br />
              グラフィックデザインを中心に、
              <br />
              さまざまな広告制作を行っています。
            </p>
          </div>
        </div>
      </section>

      <section className="flex w-full relative mt-11 md:mt-16 lg:mt-20 flex-col items-start gap-[25px] md:gap-[35px] lg:gap-[45px] p-[25px] md:p-[50px] lg:p-[100px] max-w-screen-2xl mx-auto">
        <div className="relative self-stretch w-full">
          <h2 className="[font-family:'Zen_Kaku_Gothic_Antique',Helvetica] font-normal text-black text-[26px] md:text-[36px] lg:text-[46px] tracking-[13.00px] md:tracking-[18.00px] lg:tracking-[23.00px] leading-10 md:leading-[50px] lg:leading-[60px] whitespace-nowrap">
            ABOUT
          </h2>

          <div className="flex w-full items-start mt-[65px] md:mt-[85px] lg:mt-[105px]">
            <p className="[font-family:'Zen_Kaku_Gothic_Antique',Helvetica] font-normal text-black text-base md:text-lg lg:text-xl tracking-[0] leading-[35px] md:leading-[45px] lg:leading-[55px]">
              株式会社 sept.3 は、
              <br />
              商業広告制作への意志と技術を持った
              <br />
              デザイナーが集まり、
              <br />
              アルティザンを目指して、2003年に設立された
              <br />
              デザインプロダクションです。
              <br />
              ポスター、パンフレット、紙媒体を
              <br />
              中心に、新聞、WEB、サイネージなど、
              <br />
              幅広い広告制作を行っています。
            </p>
          </div>
        </div>
      </section>

      <section className="flex w-full relative mt-[124px] md:mt-[160px] lg:mt-[200px] flex-col items-start gap-[25px] md:gap-[35px] lg:gap-[45px] p-[25px] md:p-[50px] lg:p-[100px] max-w-screen-2xl mx-auto">
        <h2 className="[font-family:'Zen_Kaku_Gothic_Antique',Helvetica] font-normal text-black text-[26px] md:text-[36px] lg:text-[46px] tracking-[13.00px] md:tracking-[18.00px] lg:tracking-[23.00px] leading-10 md:leading-[50px] lg:leading-[60px]">
          COMPANY INFO
        </h2>

        <div className="w-full flex gap-[25px] md:gap-[50px] lg:gap-[80px]">
          <div className="flex flex-col gap-2.5 md:gap-4 lg:gap-5">
            {companyInfo.map((info, index) => (
              <div
                key={index}
                className="[font-family:'Zen_Kaku_Gothic_Antique',Helvetica] font-normal text-black text-base md:text-lg lg:text-xl tracking-[0] leading-[35px] md:leading-[45px] lg:leading-[55px] whitespace-pre-line"
              >
                {info.label}
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-2.5 md:gap-4 lg:gap-5">
            {companyInfo.map((info, index) => (
              <div
                key={index}
                className="[font-family:'Zen_Kaku_Gothic_Antique',Helvetica] font-normal text-black text-base md:text-lg lg:text-xl tracking-[0] leading-[35px] md:leading-[45px] lg:leading-[55px] whitespace-pre-line"
              >
                {info.value}
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="w-full self-center mt-[110px] md:mt-[150px] lg:mt-[200px] flex flex-col bg-[#f9f9f9]">
        <nav className="flex w-full flex-wrap justify-center gap-[25px] md:gap-[35px] lg:gap-[45px] p-[25px] md:p-[40px] lg:p-[60px]">
          {footerLinks.map((link, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 [font-family:'Zen_Kaku_Gothic_Antique',Helvetica] font-normal text-black text-sm md:text-base lg:text-lg tracking-[0] leading-[normal]"
              asChild
            >
              <a href={link.href}>{link.label}</a>
            </Button>
          ))}
        </nav>

        <div className="flex w-full items-start justify-center px-[25px] md:px-[50px] lg:px-[100px] py-1 md:py-2 lg:py-3">
          <address className="not-italic [font-family:'Inter',Helvetica] font-normal text-black text-base md:text-lg lg:text-xl text-center tracking-[0] leading-[normal] md:leading-[1.8] lg:leading-[2.0]">
            〒530-0012&nbsp;&nbsp;大阪市北区芝田1-12-7
            <br />
            大栄ビル新館N1003 <br />
            TEL.06-6376-0903&nbsp;&nbsp;FAX.06-6376-0913
            <br />
            Copyright sept.3 Inc. All Rights Reserved.
          </address>
        </div>
      </footer>
    </div>
  );
};
