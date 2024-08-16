import React from "react";

const SocialMediaLink = ({ icon: Icon, link }) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-2 text-gray-500 hover:text-gray-700"
        >
            <Icon className="w-6 h-6" />
        </a>
    );
};

export default SocialMediaLink;
