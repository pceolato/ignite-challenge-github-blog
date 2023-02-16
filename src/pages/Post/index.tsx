import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useBlog } from "../../hooks/useBlog";
import { ContentPost } from "./components/ContentPost";
import { Resume } from "./components/Resume";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from '@fortawesome/free-solid-svg-icons';



export function Post() {
    const { postNumber } = useParams()
    const { fetchPostById, postById } = useBlog()

    function getPost() {
        fetchPostById(Number(postNumber)) 
    }
    
    useEffect(() => {
        getPost()
    }, [])

    return (
        <div className="max-w-[896px] mx-auto px-4">
            {
                Object.keys(postById).length !== 0 ? (
                    <>
                        <Resume />
                        <ContentPost />
                    </>
                ) : (
                    <div className="text-base-label flex justify-center">
                        <FontAwesomeIcon icon={faSpinner} className="animate-spin-slow" size="5x"/>
                    </div>
                )
            }
            
        </div>
    )
}
