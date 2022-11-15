import Post from './Post/Post';
import style from './MyPosts.module.css';
import React from 'react';
import { addPostActionCreater, updateNewPostTextActionCreater } from './../../../redux/profile-reducer';


const MyPosts = (props) => {
    let postElements = props.posts.map(p => <Post text={p.text} likesCount={p.likesCount} />);

    let newPost = React.createRef();

    let addPost = () => {
        let newPostText = newPost.current.value;
        props.dispatch(addPostActionCreater(newPostText));
        newPost.current.value = '';
    }
    let onChangeTextarea = () => {
        let newPostText = newPost.current.value;
        props.dispatch(updateNewPostTextActionCreater(newPostText));
    };
    return (
        <div className={style.newPostsBlock}>
            <div className={style.newPostsBlock__title}>My posts</div>
            <div className={style.newPostForm}>
                <textarea onChange={onChangeTextarea} ref={newPost} value={props.newPostText} name="postMessage" id="" cols="30" rows="10" placeholder='Напишите сообщение...'></textarea>
                <button onClick={addPost}>Add post</button>
            </div>
            {postElements}
        </div>
    );
}
export default MyPosts;