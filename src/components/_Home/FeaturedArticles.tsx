import { NewsArticle } from "../../models/NewsArticle";
import FeaturedArticle from "./FeaturedArticle";

function FeaturedArticles({ newsArticles }: { newsArticles: NewsArticle[] }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
            {newsArticles.map((article) => {
                return <FeaturedArticle article={article} />;
            })}
        </div>
    );
}
export default FeaturedArticles;
