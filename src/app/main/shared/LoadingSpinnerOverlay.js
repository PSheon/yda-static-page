import React from 'react';
import { FuseAnimate } from '@fuse';

function LoadingSpinnerOverlay({ width = 128, height = 128 }) {
  return (
    <FuseAnimate animation="transition.slideUpIn" delay={200}>
      <div className="w-full h-full absolute flex justify-center items-center bg-loading-overlay z-10">
        <svg
          width={width}
          height={height}
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
          className="lds-ellipsis"
          style={{ background: "none" }}
        >
          <circle cx={84} cy={50} r={0} fill="#32a0da">
            <animate
              attributeName="r"
              values="10;0;0;0;0"
              keyTimes="0;0.25;0.5;0.75;1"
              keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
              calcMode="spline"
              dur="1s"
              repeatCount="indefinite"
              begin="0s"
            />
            <animate
              attributeName="cx"
              values="84;84;84;84;84"
              keyTimes="0;0.25;0.5;0.75;1"
              keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
              calcMode="spline"
              dur="1s"
              repeatCount="indefinite"
              begin="0s"
            />
          </circle>
          <circle cx={16} cy={50} r="0.997615" fill="#7fbb42">
            <animate
              attributeName="r"
              values="0;10;10;10;0"
              keyTimes="0;0.25;0.5;0.75;1"
              keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
              calcMode="spline"
              dur="1s"
              repeatCount="indefinite"
              begin="-0.5s"
            />
            <animate
              attributeName="cx"
              values="16;16;50;84;84"
              keyTimes="0;0.25;0.5;0.75;1"
              keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
              calcMode="spline"
              dur="1s"
              repeatCount="indefinite"
              begin="-0.5s"
            />
          </circle>
          <circle cx={84} cy={50} r="9.00238" fill="#fdb813">
            <animate
              attributeName="r"
              values="0;10;10;10;0"
              keyTimes="0;0.25;0.5;0.75;1"
              keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
              calcMode="spline"
              dur="1s"
              repeatCount="indefinite"
              begin="-0.25s"
            />
            <animate
              attributeName="cx"
              values="16;16;50;84;84"
              keyTimes="0;0.25;0.5;0.75;1"
              keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
              calcMode="spline"
              dur="1s"
              repeatCount="indefinite"
              begin="-0.25s"
            />
          </circle>
          <circle cx="53.3919" cy={50} r={10} fill="#f05125">
            <animate
              attributeName="r"
              values="0;10;10;10;0"
              keyTimes="0;0.25;0.5;0.75;1"
              keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
              calcMode="spline"
              dur="1s"
              repeatCount="indefinite"
              begin="0s"
            />
            <animate
              attributeName="cx"
              values="16;16;50;84;84"
              keyTimes="0;0.25;0.5;0.75;1"
              keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
              calcMode="spline"
              dur="1s"
              repeatCount="indefinite"
              begin="0s"
            />
          </circle>
          <circle cx="19.3919" cy={50} r={10} fill="#32a0da">
            <animate
              attributeName="r"
              values="0;0;10;10;10"
              keyTimes="0;0.25;0.5;0.75;1"
              keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
              calcMode="spline"
              dur="1s"
              repeatCount="indefinite"
              begin="0s"
            />
            <animate
              attributeName="cx"
              values="16;16;16;50;84"
              keyTimes="0;0.25;0.5;0.75;1"
              keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
              calcMode="spline"
              dur="1s"
              repeatCount="indefinite"
              begin="0s"
            />
          </circle>
        </svg>
      </div>
    </FuseAnimate>
  )
}

export default LoadingSpinnerOverlay;
