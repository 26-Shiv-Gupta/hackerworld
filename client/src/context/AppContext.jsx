// src/context/AppContext.jsx
import { createContext, useEffect, useState } from "react";
import { useAuth, useUser } from "@clerk/clerk-react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

    const { getToken } = useAuth()
    const { user } = useUser()

    const [courses, setCourses] = useState([]);
    const [testimonials, setTestimonials] = useState([]);
    const [careers, setCareers] = useState([]);

    // Fetch all courses
    const fetchCourses = async () => {
        try {
            const res = await fetch("https://hackerworld.onrender.com/api/courses");
            const data = await res.json();
            setCourses(data);
        } catch (error) {
            console.error("Failed to fetch courses:", error);
        }
    };

    // Fetch testimonials
    const fetchTestimonials = async () => {
        try {
            const res = await fetch("https://hackerworld.onrender.com/api/homeReviews");
            const data = await res.json();
            setTestimonials(data);
        } catch (error) {
            console.error("Failed to fetch testimonials:", error);
        }
    };

    // Fetch testimonials
    const fetchCareers = async () => {
        try {
            const res = await fetch("https://hackerworld.onrender.com/api/careers");
            const data = await res.json();
            setCareers(data);
        } catch (error) {
            console.error("Failed to fetch testimonials:", error);
        }
    };

    // Fetch all on mount
    useEffect(() => {
        fetchCourses();
        fetchTestimonials();
        fetchCareers();
    }, []);

    const logToken = async () => {
        console.log(await getToken());
    }
    
    useEffect(() => {
        if (user) {
            logToken()
        }
    }, [user])

    return (
        <AppContext.Provider
            value={{
                courses,
                setCourses,
                testimonials,
                setTestimonials,
                careers,
                setCareers,
                fetchTestimonials,
                fetchCourses,
                fetchCareers,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
