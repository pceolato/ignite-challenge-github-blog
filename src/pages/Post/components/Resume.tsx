import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDay, faComment, faArrowUpRightFromSquare, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { NavLink } from "react-router-dom";

export function Resume() {
    return (
        <div className="py-8 px-10 bg-base-profile rounded-[10px] shadow-base-profile -mt-[88px]">
            <div className="flex flex-col gap-5">
                <div className="flex justify-between">
                    <NavLink to="/" className="flex text-blue text-xs gap-2 font-bold items-center hover:underline underline-offset-4">
                        <FontAwesomeIcon icon={faChevronLeft} />
                        VOLTAR
                    </NavLink>
                    <NavLink to="" className="flex text-blue text-xs gap-2 font-bold items-center hover:underline underline-offset-4">
                        GITHUB
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </NavLink>
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="text-base-title font-bold text-2xl">JavaScript data types and data structures</h1>
                    <div className="flex gap-8 mt-2">
                        <div className="flex items-center gap-2">
                            <FontAwesomeIcon icon={faGithub} width={18} height={18} color="#3A536B" />
                            <span className="text-base-span">pceolato</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FontAwesomeIcon icon={faCalendarDay} width={18} height={18} color="#3A536B" />
                            <span className="text-base-span">Há 1 dia</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FontAwesomeIcon icon={faComment} width={18} height={18} color="#3A536B" />
                            <span className="text-base-span">5 comentários</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}