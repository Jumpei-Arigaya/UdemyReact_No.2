import { useCallback, useState } from "react"
import { User } from "../types/api/user";

type Props = {
    id: number;
    users: Array<User>;
}

export const useSelectUsers = () => {
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const onSelectUser = useCallback(({ id, users }: Props) => {
        const targetUser = users.find((user) => user.id === id);
        setSelectedUser(targetUser!);
    }, []);


    return { onSelectUser, selectedUser }
}
