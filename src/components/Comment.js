import CommentDate from "./CommentDate";
import UserInfo from "./UserInfo";
import CommentTextWrapper from "../UI/CommentTextWrapper";
import './Comment.css'

function Comment (props){
    return(
      
        <CommentTextWrapper className='Comment'  >
        

        <UserInfo author={props.author} />

        <div className='Comment-text'  >

          {props.text}
        <CommentDate date={props.date}/>


        </div>


      </CommentTextWrapper>
    )
}

export default Comment