import { ReactNode } from "react";
import "./RanAnimatedBtn.css";

interface RanAnimatedBtnProps {
  children: ReactNode | string;
  classNames?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const styles = `flex items-center bg-[#26316d] text-white py-2 lg:py-3 px-7 sm:px-9 xl:px-12 mxl:px-14 rounded-full text-sm xl:text-base font-semibold uppercase transition-all duration-300`;

const RanAnimatedBtn = ({
  children,
  classNames = styles,
  fullWidth = false,
  ...rest
}: RanAnimatedBtnProps) => {
  return (
    <button
      className={`ranAnimatedButton ${fullWidth ? "w-full" : ""}`}
      {...rest}
    >
      <div className={`default-btn ${classNames}`}>
        <span>{children}</span>
      </div>
      <div className={`hover-btn ${classNames}`}>
        <span>{children}</span>
      </div>
    </button>
  );
};

export default RanAnimatedBtn;
