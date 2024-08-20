import { useState, useEffect } from "react";

export const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('jwtToken'));

    useEffect(() => {
        // Vérifie si le token est encore valide ou effectuer une autre vérification si nécessaire
        setIsAuthenticated(!!localStorage.getItem('jwtToken'));
    }, []);

    return { isAuthenticated };
};
