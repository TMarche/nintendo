import { Link } from "react-router-dom";
import { NewsArticle } from "../../models/NewsArticle";

function SecondaryArticle({ article }: { article: NewsArticle }) {
    return (
        <Link
            to={`/news/${article.newsArticleId}`}
            className="relative flex flex-col hover:text-bintendo duration-300"
        >
            <div
                className={`h-32 sm:h-60 mb-2 ${article.image} bg-cover bg-center rounded-lg`}
            ></div>
            <p className="text-base text-neutral-600 mb-4">
                {article.date.getMonth() + 1}/{article.date.getDate()}/
                {article.date.getFullYear()}
            </p>
            <h3 className="text-base font-bold mb-8">{article.title}</h3>
            <p className="absolute bottom-0 text-base text-bintendo font-bold underline underline-offset-2">
                Read more
            </p>
        </Link>
    );
}
export default SecondaryArticle;
