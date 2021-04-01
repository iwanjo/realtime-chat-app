const TheirMessage = ( { lastMessage, message }) => {

    const isFirstMessageByThatUser = !lastMessage || lastMessage.sender.username !== message.sender.userName;
    return(
        <div className="message-row">

            {isFirstMessageByThatUser && (
                <div
                    className="message-avatar"
                    style={{backgroundImage: `url(${message?.sender?.avatar})`}}
                 />
            )}

            {message?.attachments?.length > 0 
                ?(
                    <img
                        src={message.attachments[0].file}
                        alt="message-attachment"
                        className="message-image"
                        style={{float: 'right'}}
                    />
                ) : (
                    <div className="message" style={{ float: "right", marginRight: '18px', color: "white", backgroundColor: 'honeydew'}}>
                        {message.text}
                    </div>
                )
    
            }


            
        </div>
    )

}

export default TheirMessage;