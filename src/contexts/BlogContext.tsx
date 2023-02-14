import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface BlogProviderProps {
    children: ReactNode
}

interface IssuesType {
    id: string
    title: string
    content: string
    date: string
    comments: string
    url: string
}

interface BlogContextProps {
    issues: IssuesType[]
    totalIssues: number
}

export const BlogContext = createContext({} as BlogContextProps)

export function BlogProvider({ children }: BlogProviderProps) {
    const [ issues, setIssues ] = useState<IssuesType[]>([])
    const [ totalIssues, setTotalIssues ] = useState(0)

    async function fetchIssues() {
        const { data }  = await api.get('/search/issues', {
            params: {
                q:  'repo:pceolato/ignite-challenge-github-blog'
            }
        }
        )

        const issuesTotal:IssuesType[]  = []

        data.items.map((issue: any) => {
            issuesTotal.push({
                id: issue.id,
                title: issue.title,
                content: issue.body,
                date: issue.created_at,
                comments: issue.comments,
                url: issue.html_url
            })
        });

        setIssues(issuesTotal)
        setTotalIssues(data.total_count)
    }

    useEffect(() => {
        fetchIssues()
    }, [])

    return (
        <BlogContext.Provider value={{ issues, totalIssues }}>
            {children}
        </BlogContext.Provider>
    )
}