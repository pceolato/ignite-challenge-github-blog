import ReactMarkdown from "react-markdown"
import { useBlog } from "../../../hooks/useBlog"

export function ContentPost() {
    const { postById } = useBlog()
    return (
        <div className="py-10 px-0 md:px-10">
            <p className="text-base-text">
                <ReactMarkdown
                    components={{
                        a: ({node, ...props}) => <a className="text-blue" {...props}></a>
                    }}
                    linkTarget="_blank"
                >
                    {postById.content}
                </ReactMarkdown>
            </p>
        </div>
    )
}