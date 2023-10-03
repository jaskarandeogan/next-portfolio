import React from "react";
import ProfileSection from "@/components/ProfileSection";
import ColumnNavigation from "@/components/ColumnNavigation";
import SocialIcons from "@/components/SocialIcons";

const board = () => {
    return (
        <div>
            <h1>Board</h1>
            <ProfileSection />
            <ColumnNavigation />
            <SocialIcons />
        </div>
    );
}

export default board;