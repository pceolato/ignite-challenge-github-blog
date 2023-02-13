import { useBlog } from "../../../../hooks/useBlog";
import { formatDistanceToNowStrict } from 'date-fns'
import { CardPost } from "./CardPost";

export function ListCardPost() {
    const { issues } = useBlog()

    
    return (
        <div className="flex flex-wrap gap-8 mt-12">
            { issues.map(issue => {
                const date = formatDistanceToNowStrict(Date.parse(issue.date))
                
                return <CardPost key={issue.title} title={issue.title} description={issue.content} date={date}/>
                }) }
        </div>
    )
}