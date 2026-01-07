import svgPaths from "./svg-87h017oxci";

function Hero() {
  return (
    <div className="absolute left-[-65px] size-[380px] top-[-87px]" data-name="Hero">
      <div className="absolute bottom-[-19.74%] left-[-6.02%] right-[-6.02%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 426 455">
          <g clipPath="url(#clip0_6_26)" filter="url(#filter0_d_6_26)" id="Hero">
            <path d={svgPaths.p3b1be600} fill="var(--fill-0, #00E0C7)" id="Vector" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="480" id="filter0_d_6_26" width="480" x="-27.1429" y="-25">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="25" />
              <feGaussianBlur stdDeviation="25" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_6_26" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_6_26" mode="normal" result="shape" />
            </filter>
            <clipPath id="clip0_6_26">
              <rect fill="white" height="380" transform="translate(22.8571)" width="380" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Container() {
  return <div className="absolute h-[60px] left-0 top-0 w-[119.57px]" data-name="Container" />;
}

function Container1() {
  return (
    <div className="absolute font-['Space_Grotesk:Regular',sans-serif] font-normal h-[60px] leading-[60px] left-0 text-[60px] text-black text-center text-nowrap top-[52.01px] tracking-[-1.5px] w-[119.57px] whitespace-pre" data-name="Container">
      <p className="absolute left-[59.86px] top-[-0.75px] translate-x-[-50%]">X!</p>
      <p className="absolute left-[53.78px] top-[-43px] translate-x-[-50%]">U</p>
    </div>
  );
}

function Hero1() {
  return (
    <div className="absolute h-[152px] left-[65px] top-[51px] w-[162px]" data-name="Hero">
      <Container />
      <Container1 />
    </div>
  );
}

export default function Container2() {
  return (
    <div className="relative size-full" data-name="Container">
      <Hero />
      <Hero1 />
    </div>
  );
}