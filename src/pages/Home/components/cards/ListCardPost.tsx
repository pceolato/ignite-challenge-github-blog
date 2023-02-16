import { useBlog } from "../../../../hooks/useBlog";
import { formatDistanceToNowStrict } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import { CardPost } from "./CardPost";

export function ListCardPost() {
    const { posts } = useBlog()


    return (
        <div className="flex flex-wrap gap-8 mt-12">
            {posts.map(issue => {
                const date = formatDistanceToNowStrict(Date.parse(issue.date), { locale: pt })

                return (
                    <CardPost
                        id={issue.id}
                        number={issue.number}
                        key={issue.id}
                        title={issue.title}
                        description={issue.content}
                        date={date}
                    />
                )
            })}
        </div>
    )
}