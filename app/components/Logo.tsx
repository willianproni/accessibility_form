function Logo() {
  return (
    <strong className="flex items-center gap-2 text-xl font-semibold text-zinc-900">
    <svg
      width={53}
      height={39}
      viewBox="0 0 53 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_1_14)">
        <rect x={11} width={32} height={32} rx={8} fill="#EBEBEB" />
        <rect
          x={11.5}
          y={0.5}
          width={31}
          height={31}
          rx={7.5}
          stroke="#2983AA"
        />
      </g>
      <path
        d="M27 10a1 1 0 100-2 1 1 0 000 2zM24 24l3-6 3 6M21 12l6 2 6-2M27 14v4"
        stroke="#086FFF"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g filter="url(#filter1_f_1_14)">
        <path fill="#D9D9D9" d="M12 16H41V27H12z" />
      </g>
      <defs>
        <filter
          id="filter0_d_1_14"
          x={9}
          y={0}
          width={36}
          height={36}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={2} />
          <feGaussianBlur stdDeviation={1} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1_14" />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_14"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_f_1_14"
          x={0}
          y={4}
          width={53}
          height={35}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation={6}
            result="effect1_foregroundBlur_1_14"
          />
        </filter>
      </defs>
    </svg>
      <span>Accessibility Form</span>
    </strong>
  );
}

export default Logo;
