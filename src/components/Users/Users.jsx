import smod from "./Users.module.css"

const Users = (props) => { //{users, setUsers}
    if(props.users.length === 0){
    props.setUsers([
        {id: 1, fullName: "User 01", followed: false, status: "I am a lid", location: {city: "Minsk", country: "Belarus"}, avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQsQrF0cK_OwBax9m2uIis05ZnSQ3xIV5XwmXgamxF50RcJZaiGA"},
        {id: 2, fullName: "User 02", followed: false, status: "not status", location: {city: "New york", country: "USA"}, avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQsQrF0cK_OwBax9m2uIis05ZnSQ3xIV5XwmXgamxF50RcJZaiGA"},
        {id: 3, fullName: "User 03", followed: true, status: "just Junior", location: {city: "Moscow", country: "Russia"}, avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQsQrF0cK_OwBax9m2uIis05ZnSQ3xIV5XwmXgamxF50RcJZaiGA"},
        {id: 4, fullName: "User 04", followed: true, status: "I am a boss", location: {city: "Washington", country: "USA"}, avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQsQrF0cK_OwBax9m2uIis05ZnSQ3xIV5XwmXgamxF50RcJZaiGA"}
    ])
}

    return (
        <div className={smod.usersBlock}>
            {props.users.map(user =>
                <div key={user.id}>
                    <span>
                        <div><img src={user.avatar} alt='' /></div>
                        {user.followed ? <div><button onClick={() => props.follow(user.id)}>follow</button></div> 
                        : <div><button onClick={() => props.unFollow(user.id)}>unfollow</button></div>}
                    </span>
                    <span>
                        <div>{user.fullName}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{user.location.country}</div>
                        <div>{user.location.city}</div>
                    </span>
                </div>
            )}
        </div>
    )
};

export default Users