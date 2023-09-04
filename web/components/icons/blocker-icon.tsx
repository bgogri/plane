import React from "react";

import type { Props } from "./types";

export const BlockerIcon: React.FC<Props> = ({ width = "24", height = "24", className }) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 23 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 4.8C0 3.52696 0.507971 2.30606 1.41216 1.40589C2.31636 0.505713 3.54271 0 4.82143 0H20.8929C21.1913 0 21.4839 0.0827435 21.7378 0.238959C21.9917 0.395174 22.1968 0.618689 22.3303 0.884458C22.4638 1.15023 22.5203 1.44775 22.4935 1.74369C22.4667 2.03963 22.3576 2.32229 22.1786 2.56L18.0804 8L22.1786 13.44C22.3576 13.6777 22.4667 13.9604 22.4935 14.2563C22.5203 14.5522 22.4638 14.8498 22.3303 15.1155C22.1968 15.3813 21.9917 15.6048 21.7378 15.761C21.4839 15.9173 21.1913 16 20.8929 16H4.82143C4.39519 16 3.9864 16.1686 3.68501 16.4686C3.38361 16.7687 3.21429 17.1757 3.21429 17.6V22.4C3.21429 22.8243 3.04496 23.2313 2.74356 23.5314C2.44217 23.8314 2.03338 24 1.60714 24C1.1809 24 0.772119 23.8314 0.470721 23.5314C0.169323 23.2313 0 22.8243 0 22.4V4.8Z"
      fill="#F7AE59"
    />
    <path
      d="M18.5391 20.8797H6.04688C5.87083 20.8797 5.72526 20.8221 5.61016 20.707C5.49505 20.5919 5.4375 20.4464 5.4375 20.2703C5.4375 20.0943 5.49505 19.9487 5.61016 19.8336C5.72526 19.7185 5.87083 19.6609 6.04688 19.6609H18.5594L16.8125 17.9141C16.7042 17.8057 16.65 17.6703 16.65 17.5078C16.65 17.3453 16.7109 17.2031 16.8328 17.0813C16.9547 16.9594 17.0969 16.8984 17.2594 16.8984C17.4219 16.8984 17.5641 16.9594 17.6859 17.0813L20.4484 19.8438C20.5161 19.9115 20.5635 19.9792 20.5906 20.0469C20.6177 20.1146 20.6313 20.1891 20.6313 20.2703C20.6313 20.3516 20.6177 20.426 20.5906 20.4938C20.5635 20.5615 20.5161 20.6292 20.4484 20.6969L17.6859 23.4594C17.5505 23.5948 17.4049 23.6591 17.2492 23.6523C17.0935 23.6456 16.9547 23.5812 16.8328 23.4594C16.7109 23.3375 16.65 23.1919 16.65 23.0227C16.65 22.8534 16.7042 22.7146 16.8125 22.6062L18.5391 20.8797Z"
      fill="#F7AE59"
    />
  </svg>
);