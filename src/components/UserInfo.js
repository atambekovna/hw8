import CommentWrapper from "../UI/CommentWrapper"
import CommentAvatar from "./CommentAvatar"
import './UserInfo.css'

function UserInfo (props){
    return(
       <CommentWrapper className='UserInfo' >
        <div className="done"  >
          <CommentAvatar author={props.author}  />
          <div className='UserInfo-name' >{props.author.name}</div>
        </div>
       </CommentWrapper>
    )
}

export default UserInfo