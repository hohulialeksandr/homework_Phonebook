import React from 'react'

const ContactsList = ({visible, deletes}) => {
    return (
        <div>
            {
                visible.map((el, id) => <div>
                    <li key={id}>{el.name}: {el.number}</li>
                    <button onClick={deletes}>Delete</button>
                </div>)
            }
        </div>
    )
}

export default ContactsList