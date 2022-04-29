import React, {useContext, useState} from "react";
import * as service from "../src/services/auth-service";

const ProfileContext = React.createContext()

export const ProfileProvider = ({children}) => {
    const [profile, setProfile] = useState()

    const signin = async (email, password) => {
        try {
            const p = await service.signin(
                email,
                password
            )
            setProfile(p)
        } catch (e) {
            throw e
        }
    }

    const updateProfile = async (newprofile) => {
        try {
            const p = await service.updateUserInfo(newprofile)
            setProfile(newprofile)
            console.log('profile after updated')
            console.log(p)
            return p
        }
        catch (e) {
            throw e
        }
    }

    const checkLoggedIn = async () => {
        console.log('get into check login')
        try {
            const p = await service.profile()
            setProfile(p)
            return p
        } catch (e) {
            throw e
        }
    }

    const signup = async (email, username, password) => {
        try {
            const newUser = await service.signup(
                email,
                username,
                password
            )
            setProfile(newUser)
        } catch (e) {
            throw e
        }
    }

    const signout = async () => {
        const response = await service.logout()
        setProfile(null)
    }

    const value = {profile, updateProfile, signup, checkLoggedIn, signin, signout}
    return(
        <ProfileContext.Provider value={value}>
            {children}
        </ProfileContext.Provider>
    )
}

export const useProfile = () => {
    return useContext(ProfileContext)
}