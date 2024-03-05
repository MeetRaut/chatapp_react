import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic('175439cb-24ce-4811-a071-5d15991344a9', props.user.username, props.user.secret);

    return <div style = {{ height: '100vh' }}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} style={{height: '100%' }} />
    </div>
}

export default ChatsPage;