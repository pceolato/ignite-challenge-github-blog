import { CardPost } from "./CardPost";

export function ListCardPost() {
    return (
        <div className="flex flex-wrap gap-8 mt-12">
            <CardPost/>
            <CardPost/>
            <CardPost/>
            <CardPost />
        </div>
    )
}