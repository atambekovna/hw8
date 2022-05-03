
function CommentTextWrapper (props){
    let classes = 'wrapper ' + props.className;
    return (
       <div className={classes}  >

        {props.children}


        </div>)
}

export default CommentTextWrapper