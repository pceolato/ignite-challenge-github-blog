import ReactMarkdown from "react-markdown";
import { NavLink } from "react-router-dom";

interface CardPostProps {
    id: number;
    number: number;
    title: string;
    description: string;
    date: string
}

export function CardPost({ id, title, description, date, number }: CardPostProps) {
    const content = `${description.slice(0, 180)} ...`

    return (
        <NavLink to={`posts/${number}`} className="w-full lg:w-[416px]  p-8 flex flex-col gap-5 bg-base-post rounded-[10px] border-2 border-transparent hover:border-2 hover:border-base-label">
            <div className="flex gap-4">
                <h2 className="text-base-title font-bold text-xl flex-1">{title}</h2>
                <span className="text-base-span text-sm">Há {date}</span>
            </div>
            <div className="text-base-text">
                <ReactMarkdown
                        components={{
                            a: ({node, ...props}) => <span {...props}></span>
                        }}
                    >
                    {content}
                </ReactMarkdown>
            </div>
        </NavLink>
    )
}