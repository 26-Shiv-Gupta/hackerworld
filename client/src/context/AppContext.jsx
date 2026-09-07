// src/context/AppContext.jsx

import { createContext, useEffect, useState } from "react";
import { useAuth, useUser } from "@clerk/clerk-react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

    const { getToken } = useAuth();
    const { user } = useUser();

    const [courses, setCourses] = useState([]);
    const [testimonials, setTestimonials] = useState([]);
    const [careers, setCareers] = useState([]);
    const [threeCourses, setThreeCourses] = useState([]);
    const [myCourses, setMyCourses] = useState([]);

    // Fetch all courses
    const fetchCourses = async () => {
        try {
            const res = await fetch(
                "http://localhost:5000/api/courses"
            );

            const data = await res.json();

            setCourses(data);

            const three_courses = data.slice(0, 3);
            setThreeCourses(three_courses);

        } catch (error) {
            console.error(
                "Failed to fetch courses:",
                error
            );
        }
    };

    // Fetch testimonials
    const fetchTestimonials = async () => {
        try {
            const res = await fetch(
                "https://hackerworld.onrender.com/api/homeReviews"
            );

            const data = await res.json();

            setTestimonials(data);

        } catch (error) {
            console.error(
                "Failed to fetch testimonials:",
                error
            );
        }
    };

    // Fetch Careers
    const fetchCareers = async () => {
        try {
            const res = await fetch(
                "https://hackerworld.onrender.com/api/careers"
            );

            const data = await res.json();

            setCareers(data);

        } catch (error) {
            console.error(
                "Failed to fetch careers:",
                error
            );
        }
    };

    // Fetch user's enrolled courses
    const fetchMyCourses = async () => {
        try {
            if (!user) {
                setMyCourses([]);
                return;
            }

            const token = await getToken();
            console.log("token: ", token);

            const res = await fetch(
                "https://hackerworld.onrender.com/api/users/my-courses",
                {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const data = await res.json();

            if (!res.ok) {
                throw new Error(
                    data.message || "Failed to fetch my courses"
                );
            }

            setMyCourses(data.courses || []);

        } catch (error) {
            console.error(
                "Failed to fetch my courses:",
                error
            );

            setMyCourses([]);
        }
    };


    // Fetch all public data on mount
    useEffect(() => {
        fetchCourses();
        fetchTestimonials();
        fetchCareers();
    }, []);


    // Fetch user's courses whenever user changes
    useEffect(() => {
        if (user) {
            fetchMyCourses();
        } else {
            setMyCourses([]);
        }
    }, [user]);


    const logToken = async () => {
        console.log(await getToken());
    };

    useEffect(() => {
        if (user) {
            logToken();
        }
    }, [user]);


    return (
        <AppContext.Provider
            value={{
                courses,
                setCourses,

                threeCourses,

                testimonials,
                setTestimonials,

                careers,
                setCareers,

                myCourses,
                setMyCourses,

                fetchTestimonials,
                fetchCourses,
                fetchCareers,
                fetchMyCourses,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
