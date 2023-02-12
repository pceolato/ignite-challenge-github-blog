import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface ProfileContextProps {
    children: ReactNode
}

interface ProfileType {
    name: string;
    user: string;
    avatar: string;
    bio: string;
    organization: string;
    followers: string;
    url: string;
}

interface ProfileContextType {
    profile: ProfileType
}

export const ProfileContext = createContext({} as ProfileContextType)

export function ProfileProvider({ children }: ProfileContextProps) {
    const [ profile, setProfile ] = useState({} as ProfileType)

    async function fetchProfile() {
        const { data } = await api.get('')

        setProfile({
            name: data.name,
            avatar: data.avatar_url,
            user: data.login,
            bio: data.bio,
            organization: data.company,
            followers: data.followers,
            url: data.html_url
        })

    }
    console.log(profile)


    useEffect(() => {
        fetchProfile()
    }, [])
    return (
        <ProfileContext.Provider value={{profile}}>
            { children }
        </ProfileContext.Provider>
    )
}