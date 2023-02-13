import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { NavLink } from 'react-router-dom';
import { useProfile } from '../../../hooks/useProfile';

export function Profile() {
    const { profileData } = useProfile()
    
    return (
        <div className="py-8 px-10 bg-base-profile rounded-[10px] shadow-base-profile -mt-[88px]">
            <div className="flex flex-col md:flex-row items-center gap-8">
                <img src={profileData.avatar} alt="foto Pedro Ceolato" className="rounded-lg" width={148} height={148}/>
                <div className="w-full flex flex-col">
                    <div className="flex justify-between mb-2">
                        <h2 className="text-base-title text-2xl font-bold">{profileData.name}</h2>
                        <NavLink to={profileData.url} target="_blank" className="flex text-blue text-xs gap-2 font-bold items-center hover:underline underline-offset-4">
                            GITHUB
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
                        </NavLink>
                    </div>
                <p className="text-base-text mb-6">
                    {profileData.bio}
                </p>
                <div className="flex gap-6">
                    <div className="flex items-center gap-2">
                        <FontAwesomeIcon icon={faGithub} width={18} height={18} color="#3A536B"/>
                        <span className="text-base-subtitle">{profileData.user}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FontAwesomeIcon icon={faBuilding} width={18} height={18} color="#3A536B"/>
                        <span className="text-base-subtitle">{profileData.organization?.substring(1)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FontAwesomeIcon icon={faUserGroup} width={18} height={18} color="#3A536B"/>
                        <span className="text-base-subtitle">{profileData.followers} seguidores</span>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}