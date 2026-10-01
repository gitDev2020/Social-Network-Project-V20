
export const updateObjectInArray = (items, itemId, objPropName, newObjProps) =>{
    return items.map( U => {
        if(U[objPropName] === itemId) {
            return {...U, ...newObjProps}
        }
        return U
    })
}
