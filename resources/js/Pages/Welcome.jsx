import { Head } from "@inertiajs/react";
import * as React from "react"; // Adjust the path if necessary
import TopNavBar from "../Components/TopNavBar"; // Adjust the path if necessary

import Hero from "@/Components/Hero";
import About from "@/Components/About";
import Contact from "@/Components/Contact";
import Feedback from "@/Components/Feedback";

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Welcome" />

            <div className="relative z-0 bg-primary">
                <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                    <TopNavBar auth={auth} />
                    <Hero />
                </div>
                <About />
                <Feedback />
                <Contact />
            </div>
        </>
    );
}
