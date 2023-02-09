import { NavLink } from "react-router-dom";

export function CardPost() {
    return (
        <NavLink to="posts/dasd" className="max-w-[416px] p-8 flex flex-col gap-5 bg-base-post rounded-[10px] border-2 border-transparent hover:border-2 hover:border-base-label">
            <div className="flex gap-4">
                <h2 className="text-base-title font-bold text-xl flex-1">JavaScript data types and data structures</h2>
                <span className="text-base-span text-sm">Há 1 dia</span>
            </div>
            <p className="text-base-text">
                Programming languages all have built-in data structures, but these
                often differ from one language to another. This article attempts to
                list the built-in data structures available in...
            </p>
        </NavLink>
    )
}