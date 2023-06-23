import { NewsArticle } from "../../models/NewsArticle";
import SecondaryArticle from "./SecondaryArticle";

function SecondaryArticles({ newsArticles }: { newsArticles: NewsArticle[] }) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10">
            {newsArticles.map((article) => (
                <SecondaryArticle article={article} />
            ))}
        </div>
    );
}
export default SecondaryArticles;
