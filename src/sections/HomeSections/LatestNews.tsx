import { Container } from "@mantine/core";
import NewsCard from "../../components/NewsCard";
import { NewsData1 } from "../../data/NewsData";

const LatestNews = () => {
  return (
    <Container className="mt-28 xl:mt-36 mxl:mt-44" size={1536}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 xl:gap-14 mxl:gap-24 mt-12">
        {NewsData1.map((news) => {
          return <NewsCard key={news.id} newsData={news} />;
        })}
      </div>
    </Container>
  );
};

export default LatestNews;
