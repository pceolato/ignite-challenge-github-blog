import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDay, faComment, faArrowUpRightFromSquare, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { NavLink, useParams } from "react-router-dom";
import { useBlog } from "../../../hooks/useBlog";
import { useEffect } from "react";
import { formatDistanceToNowStrict } from "date-fns";
import pt from 'date-fns/locale/pt-BR';

export function Resume() {
    const { postById } = useBlog()

    const date = postById.date && formatDistanceToNowStrict(Date.parse(postById.date), { locale: pt })
    
    return (
        <div className="py-8 px-10 bg-base-profile rounded-[10px] shadow-base-profile -mt-[88px]">
            <div className="flex flex-col gap-5">
                <div className="flex justify-between">
                    <NavLink to="/" className="flex text-blue text-xs gap-2 font-bold items-center hover:underline underline-offset-4">
                        <FontAwesomeIcon icon={faChevronLeft} />
                        VOLTAR
                    </NavLink>
                    <NavLink to={postById.url} target="_blank" className="flex text-blue text-xs gap-2 font-bold items-center hover:underline underline-offset-4">
                        GITHUB
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </NavLink>
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="text-base-title font-bold text-2xl">{postById.title}</h1>
                    <div className="flex flex-col md:flex-row gap-3 md:gap-8 mt-2">
                        <div className="flex  items-center gap-2">
                            <FontAwesomeIcon icon={faGithub} width={18} height={18} color="#3A536B" />
                            <span className="text-base-span">{postById.user}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FontAwesomeIcon icon={faCalendarDay} width={18} height={18} color="#3A536B" />
                            <span className="text-base-span">Há {date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FontAwesomeIcon icon={faComment} width={18} height={18} color="#3A536B" />
                            <span className="text-base-span">{postById.comments} comentários</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}