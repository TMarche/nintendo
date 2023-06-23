import { Link } from "react-router-dom";
import { NewsArticle } from "../../models/NewsArticle";

function FeaturedArticle({ article }: { article: NewsArticle }) {
    return (
        <Link
            to="/store"
            className="flex flex-col hover:text-bintendo duration-300"
        >
            <div
                className={`h-56 sm:h-80 mb-2 ${article.image} bg-cover bg-center rounded-lg`}
            ></div>
            <p className="text-base text-neutral-600 mb-4">
                {article.date.getMonth() + 1}/{article.date.getDate()}/
                {article.date.getFullYear()}
            </p>
            <h3 className="text-lg font-bold mb-8 h-12">{article.title}</h3>
            <p className="text-base text-neutral-600 mb-4 truncate">
                {article.content[0]}
            </p>
            <p className="text-base h-12 truncate text-bintendo font-bold underline underline-offset-2">
                Read more
            </p>
        </Link>
    );
}
export default FeaturedArticle;
