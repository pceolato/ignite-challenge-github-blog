import { useEffect } from "react";
import { useBlog } from "../../hooks/useBlog";
import { ListCardPost } from "./components/cards/ListCardPost";
import { Form } from "./components/Form";
import { Profile } from "./components/Profile";

export function Home() {
    const { fetchAllPosts } = useBlog()

    useEffect(() => {
        fetchAllPosts()
    }, [])
    
    return (
        <div className="max-w-[896px] mx-auto mb-8 px-4">
            <Profile />
            <Form />
            <ListCardPost />
        </div>
    )
}