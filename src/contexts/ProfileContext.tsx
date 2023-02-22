import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface ProfileProviderProps {
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
    profileData: ProfileType
    fetchProfile: () => Promise<void>
}

export const ProfileContext = createContext({} as ProfileContextType)

export function ProfileProvider({ children }: ProfileProviderProps) {
    const [ profileData, setProfileData ] = useState({} as ProfileType)

    async function fetchProfile() {
        const { data } = await api.get('/users/pceolato')

        setProfileData({
            name: data.name,
            avatar: data.avatar_url,
            user: data.login,
            bio: data.bio,
            organization: data.company,
            followers: data.followers,
            url: data.html_url
        })

    }
    
    return (
        <ProfileContext.Provider value={{ profileData, fetchProfile }}>
            { children }
        </ProfileContext.Provider>
    )
}