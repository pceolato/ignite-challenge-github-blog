import { NavLink } from "react-router-dom";

interface CardPostProps {
    id: string;
    title: string;
    description: string;
    date: string
}

export function CardPost({ id, title, description, date }: CardPostProps) {
    return (
        <NavLink to={`posts/${id}`} className="w-full lg:w-[416px]  p-8 flex flex-col gap-5 bg-base-post rounded-[10px] border-2 border-transparent hover:border-2 hover:border-base-label">
            <div className="flex gap-4">
                <h2 className="text-base-title font-bold text-xl flex-1">{title}</h2>
                <span className="text-base-span text-sm">Há {date}</span>
            </div>
            <p className="text-base-text">
                {description.slice(1, 180)}...
            </p>
        </NavLink>
    )
}