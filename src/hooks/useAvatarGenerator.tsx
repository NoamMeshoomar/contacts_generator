import { useEffect, useState } from "react";

const useAvatarGenerator = (seed: string) => {
    const [avatar, setAvatar] = useState("");
    const [loading, setLoading] = useState(false);

    const fetchAvatar = async () => {
        const response = await (await fetch(`https://avatars.dicebear.com/api/avataaars/${seed}.svg`)).text();
        return response;
    }

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        if(seed !== "") {
            setLoading(true);
            timeout = setTimeout(() => {
                fetchAvatar()
                .then(res => {
                    setAvatar(res);
                    setLoading(false);
                });
            }, 2000);
        } else {
            setAvatar("");
            setLoading(false);
        }

        return () => clearTimeout(timeout);
    }, [seed]);

    return {avatar, loading};
}

export default useAvatarGenerator;