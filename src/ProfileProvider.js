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
            return p
        }
        catch (e) {
            throw e
        }
    }

    const updateHouses = async (newHouse) => {
        try {
            const housesArray = profile.houses
            const newHouses = [...housesArray]
            newHouses.push(newHouse)
            let newPro = {email: profile.email, identity: profile.identity, username: profile.username, password: profile.password,
                firstName: profile.firstName, lastName: profile.lastName,
                aboutyou: profile.aboutyou, location: profile.location,
                languages: profile.languages, jobs: profile.jobs, houses: newHouses}
            const p = await service.updateUserInfo(newPro)
            setProfile(p)
            return p

        } catch (e) {
            throw e
        }
    }

    const checkLoggedIn = async () => {
        try {
            const p = await service.profile()
            setProfile(p)
            return p
        } catch (e) {
            throw e
        }
    }

    const signup = async (email, username, password, role) => {
        try {
            const newUser = await service.signup(
                email,
                username,
                password,
                role
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

    const value = {profile, updateProfile, signup, checkLoggedIn, signin, signout, updateHouses}
    return(
        <ProfileContext.Provider value={value}>
            {children}
        </ProfileContext.Provider>
    )
}

export const useProfile = () => {
    return useContext(ProfileContext)
}