import { Link } from "packages/uikit";
import RanAnimatedBtn from "./RanAnimatedBtn/RanAnimatedBtn";

interface NewsCardProps {
  newsData: {
    id: number;
    title: string;
    thumb: string;
    btnHref: string;
    btnLabel: string;
  };
}

const NewsCard = ({ newsData }: NewsCardProps) => {
  const { title, thumb, btnHref, btnLabel } = newsData;

  return (
    <div className="w-full rounded-xl overflow-hidden group flex flex-col">
      <div className="w-full h-[200px] lg:h-[240px] xl:h-[300px] overflow-hidden">
        <img
          src={thumb}
          alt=""
          className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
        />
      </div>
      <div className="py-4 xl:py-6 px-8 md:px-12 xl:px-16 flex-1 bg-[radial-gradient(100%_100%_at_50%_0%,#F6CA46_0%,#F4B646_15.1%,#EC8133_35.42%,#E72025_81.77%)]">
        <div className="-mt-12 mb-5 w-fit mx-auto">
          <Link href={btnHref}>
            <RanAnimatedBtn>{btnLabel}</RanAnimatedBtn>
          </Link>
        </div>
        <h3 className="text-white text-sm xsm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium text-center mt-5 xl:mt-6">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default NewsCard;
