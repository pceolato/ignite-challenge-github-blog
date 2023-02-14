import { useBlog } from "../../../../hooks/useBlog";
import { formatDistanceToNowStrict } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import { CardPost } from "./CardPost";

export function ListCardPost() {
    const { issues } = useBlog()


    return (
        <div className="flex flex-wrap gap-8 mt-12">
            {issues.map(issue => {
                const date = formatDistanceToNowStrict(Date.parse(issue.date), { locale: pt })

                return (
                    <CardPost
                        id={issue.id}
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