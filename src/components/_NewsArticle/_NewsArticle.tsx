import { useParams } from "react-router-dom";
import Cover from "../generic/Cover";
import { getNewsArticleById } from "../../models/tables/DefaultNewsArticles";
import ForumIcon from "@mui/icons-material/Forum";
import Footer from "../generic/Footer";
import { useEffect } from "react";

function _NewsArticle({
    searchBarState,
    setSearchBarState,
}: {
    searchBarState: "ACTIVE" | "INACTIVE";
    setSearchBarState: (state: "ACTIVE" | "INACTIVE") => void;
}) {
    const { id } = useParams();
    const article = getNewsArticleById(Number(id));

    // Pages are loading in at the bottom for some reason
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const renderContent = () => {
        if (article === undefined) {
            return <div>NOT FOUND</div>;
        } else {
            return (
                <div className="relative flex-1 bg-gradient-to-b from-bintendo-light via-white to-white">
                    <div
                        className="flex flex-row justify-center my-8 mx-4
                        bg-gradient-to-b from-bintendo-light to-white"
                    >
                        <article className="flex-1 max-w-[960px]">
                            {/* Article Image */}
                            <div className="h-8"></div>
                            <div
                                className={`w-full mb-8 aspect-[16/9] ${article.image} bg-cover bg-center`}
                            ></div>
                            {/* Article Content */}
                            <div className="mb-12">
                                {article.date.getMonth() + 1}/
                                {article.date.getDate()}/
                                {article.date.getFullYear()}
                            </div>
                            <h2 className="text-3xl mb-12">{article.title}</h2>
                            {article.content.map((paragraph) => (
                                <p className="mb-4">{paragraph}</p>
                            ))}
                        </article>
                    </div>
                </div>
            );
        }
    };

    return (
        <div className="relative text-neutral-600">
            {searchBarState === "ACTIVE" && (
                <Cover setSearchBarState={setSearchBarState} />
            )}
            <div className="flex flex-row gap-4 items-center my-8 mx-4 text-4xl font-bold">
                <ForumIcon fontSize={"inherit"} /> <h1>News</h1>
            </div>
            {renderContent()}
            <Footer />
        </div>
    );
}
export default _NewsArticle;
