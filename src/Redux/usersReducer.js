
const FOLLOW = 'users/FOLLOW'
const UNFOLLOW = 'users/UNFOLLOW'
const SET_USERS = 'users/SET_USERS'
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE'
const SET_USERS_COUNT = 'users/SET_USERS_COUNT'
const TTOGLE_IS_FETCHING = 'users/TTOGLE_IS_FETCHING'
const FOLLOWING_PROGRESS = 'users/FOLLOWING_PROGRESS'


let initialState = {
    users: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {...state,
                users: state.users.map( U => {
                if(U.id === action.userId) {
                    return {...U, followed: false}
                }
                return U
            })
        }
        case UNFOLLOW:
            return {...state,
                users: state.users.map( U => {
                if(U.id === action.userId) {
                    return {...U, followed: true}
                }
                return U
            })
        }
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
        default:
        return state;
    }
};

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unFollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})

export default usersReducer;