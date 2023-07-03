import React from 'react';
import {useLocation} from "react-router-dom";

export const useSelectMenu = () => {
    const location = useLocation();

    return location.pathname?.split('/')?.length >= 2 ? location.pathname?.split('/')[1] : location.pathname?.split('/')[0];
}