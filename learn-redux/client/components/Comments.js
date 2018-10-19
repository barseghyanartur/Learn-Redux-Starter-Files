import React from 'react';


class Comments extends React.Component {

    removeComment(e, postId, i) {
        e.preventDefault();
        this.props.removeComment(postId, i);
    }

    renderComment(comment, i) {
        return (
            <div className="comment" key={i}>
                <p>
                    <strong>{comment.user}</strong>
                    {comment.text}
                    <button className="remove-comment"
                        onClick={(e) => this.removeComment(e, this.props.params.postId, i)}>
                        &times;
                    </button>
                </p>
            </div>
        )
    }

    handleSubmit(e) {
        e.preventDefault();
        const { postId } = this.props.params;
        const author = this.refs.author.value;
        const comment = this.refs.comment.value;
        this.props.addComment(postId, author, comment);
        this.refs.commentForm.reset();
    }

    render() {
        console.log(this.refs);
        return (
            <div className="comment">
                {this.props.postComments.map((comment, i) => this.renderComment(comment, i))}
                <form ref="commentForm" className="comment-form" onSubmit={(e) => this.handleSubmit(e)}>
                    <input type="text" ref="author" placeholder="author" />
                    <input type="text" ref="comment" placeholder="comment" />
                    <input type="submit" hidden />
                </form>
            </div>
        )
    }
}


export default Comments;
