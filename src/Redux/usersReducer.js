
const FOLLOW = 'users/FOLLOW'
const UNFOLLOW = 'users/UNFOLLOW'
const SET_USERS = 'users/SET_USERS'
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE'
const SET_USERS_COUNT = 'users/SET_USERS_COUNT'
const TTOGLE_IS_FETCHING = 'users/TTOGLE_IS_FETCHING'
const FOLLOWING_PROGRESS = 'users/FOLLOWING_PROGRESS'


let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
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
            let newUsers = action.users.filter(newU =>
                !state.users.some(oldU => oldU.id === newU.id)
            )
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.page}
        case SET_USERS_COUNT:
            return {...state, totalUsersCount: action.count}
        case TTOGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetch}
        default:
        return state;
    }
};

export const follow = (userId) => ({type: FOLLOW, userId})
export const unFollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page})
export const setTotalUsersCount = (count) => ({type: SET_USERS_COUNT, count})
export const toggleIsFetching = (isFetch) => ({type: TTOGLE_IS_FETCHING, isFetch})

export default usersReducer;