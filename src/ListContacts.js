import React, {Component} from 'react'

class ListContacts extends Component{
    render(){
        return(
                <ol className='contact-list'>
                    {/*contacts array so we can use map() function*/}
                    {this.props.contacts.map(contact =>
                        <li key={contact.id} className='contact-list-item'>
                            <div className='contact-avatar' style={{
                                backgroundImage: `url(${contact.avatarURL})`
                            }}/>
                        </li>)
                    }

                </ol>
        )
    }

}
export default ListContacts