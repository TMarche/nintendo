import { NewsArticle } from "../../models/NewsArticle";
import FeaturedArticles from "./FeaturedArticles";
import SecondaryArticles from "./SecondaryArticles";

function News({ newsArticles }: { newsArticles: NewsArticle[] }) {
    const primaryArticles = newsArticles.slice(0, 2);
    const secondaryArticles = newsArticles.slice(2, 6);

    return (
        <section className="flex flex-row justify-center">
            <div className="max-w-[1144px] my-12 mx-4 flex-1 text-3xl text-neutral-600">
                <div className="font-bold mb-8">News</div>
                {/* Featured news */}
                <FeaturedArticles newsArticles={primaryArticles} />
                {/* Other news */}
                <SecondaryArticles newsArticles={secondaryArticles} />
            </div>
        </section>
    );
}
export default News;
