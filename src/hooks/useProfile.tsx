import { useContext } from "react";
import { ProfileContext } from "../contexts/ProfileContext";

export function useProfile() {
    const profile = useContext(ProfileContext)

    return profile
}