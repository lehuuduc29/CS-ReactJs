

export const add_Action = (data) => {
    return {
        type: 'action/Add',
        payload: data
    }
}

export const delete_Action = (data) => {
    return {
        type: 'action/Delete',
        payload: data
    }
}

export const edit_Action = (data) => {
    return {
        type: 'action/Edit',
        payload: data
    }
}

export const save_Action = (data) => {
    return {
        type: 'action/Save',
        payload: data
    }
}