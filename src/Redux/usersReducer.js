import { usersAPI } from "../api"

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
    isFetching: false,
    followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {...state,
                users: state.users.map( U => {
                if(U.id === action.userId) {
                    return {...U, followed: true}
                }
                return U
            })
        }
        case UNFOLLOW:
            return {...state,
                users: state.users.map( U => {
                if(U.id === action.userId) {
                    return {...U, followed: false}
                }
                return U
            })
        }
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.page}
        case SET_USERS_COUNT:
            return {...state, totalUsersCount: action.count}
        case TTOGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetch}
        case FOLLOWING_PROGRESS:
            return {...state, followingInProgress: action.isFetch
            ? [...state.followingInProgress, action.userID]
            : state.followingInProgress.filter(id => id != action.userID)}
        default:
        return state;
    }
};

export const followSuccess = (userId) => ({type: FOLLOW, userId})
export const unFollowSuccess = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page})
export const setTotalUsersCount = (count) => ({type: SET_USERS_COUNT, count})
export const toggleIsFetching = (isFetch) => ({type: TTOGLE_IS_FETCHING, isFetch})
export const followingProgress = (isFetch, userID) => ({type: FOLLOWING_PROGRESS, isFetch, userID});

export const requestUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        usersAPI.getUsers(currentPage, pageSize).then(res => {
            dispatch(setUsers(res.items))
            dispatch(setTotalUsersCount(res.totalCount))
            dispatch(toggleIsFetching(false))
        })
    }
}

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true, userId))
        usersAPI.follow(userId).then(res => {
            if(res.data.resultCode === 0) {
            dispatch(followSuccess(userId))
            }
            dispatch(followingProgress(false, userId))
        })
    }
}

export const unFollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true, userId))
        usersAPI.unFollow(userId).then(res => {
            if(res.data.resultCode === 0) {
            dispatch(unFollowSuccess(userId))
            }
            dispatch(followingProgress(false, userId))
        })
    }
}

// const followUnfollowFlow = async (dispatch, userId, apiMethod, AC) =>{
//     dispatch(followingProgress(true, userId))
//                     let res = await apiMethod(userId)
//                         if(res.data.resultCode === 0)
//                         dispatch(AC(userId))
//                     dispatch(followingProgress(false, userId))  
// }

export default usersReducer;