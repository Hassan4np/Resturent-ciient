
import useAuth from '../../Hooks/useAuth';

const UserHome = () => {
    const {user} = useAuth()
    return (
        <div>
            <h1>Wellcome {user.displayName|| " User"}</h1>
        </div>
    );
};

export default UserHome;