import { ContentPost } from "./components/ContentPost";
import { Resume } from "./components/Resume";

export function Post() {
    return (
        <div className="max-w-[896px] mx-auto px-4">
            <Resume />
            <ContentPost />
        </div>
    )
}
