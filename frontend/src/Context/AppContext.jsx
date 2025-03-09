import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify';

export const AppContext = createContext();

const AppContextProvider = (props) => {
    const currencySymbol = '€';
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [doctors, setDoctors] = useState([]);

    const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : false);
    const [userData, setUserData] = useState(false)

    const getDoctorsData = async () => {
        try {
            const {data} = await axios.get(`${backendUrl}/api/doctor/list`);
            if (data.success) {
                setDoctors(data.doctors);
                toast.success(data.message);
            } else {
                toast.error(data.message);
            }
        } catch (err) {
            console.log(err);
            toast.error(err.message);
        }
    };


    const loadUserProfileData = async () => {
        try {
   
             const {data} = await axios.get(backendUrl + '/api/user/get-profile' , {headers : {token}})
             console.log(data)
             if(data.success){
                setUserData(data.userData)
             }
             else{
                toast.error(data.message)
             }
        } catch (err) {
            console.log(err);
            toast.error(err.message);
        }
    }

    useEffect(() => {
        getDoctorsData();
    }, []);

    useEffect(() =>{
       if(token){
         loadUserProfileData()
       }else{
         setUserData(false)
       }
    },[token])

    const value = {
        doctors,getDoctorsData,
        currencySymbol,
        backendUrl,
        token, setToken ,
        userData , setUserData ,
        loadUserProfileData
     };

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;