import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import '../../style/Questions.css'
import {createQuestion, deleteQuestion, findAllQuestions, updateQuestion} from "../../actions/Question-actions";
import SecureContent from "../../SecureContent";
import {useProfile} from "../../ProfileProvider";
import {Link} from "react-router-dom";

const Questions = () => {
    const {profile} = useProfile()
    const question = useSelector(
        state => state.questions);
    // create a new state variable with new tuit data
    const [newQuestion, setNewQuestion] =
        useState({question: 'New Question'});
    const dispatch = useDispatch();
    useEffect(() =>
        findAllQuestions(dispatch));

    const handlePost = () => {
        if (profile) {
            const data = {profile, newQuestion}
            createQuestion(dispatch, data)
        }
        else {
            alert('how did you get the post button without login???')
        }
    }
    
    return (
        <div className='question-container'>
            {/*TODO log-in check, true - display this text entering area*/}
            {/*TEXT ENTERING AREA*/}
            <SecureContent>
                <div className="question-box">
                    <h2 className="question-title">Frequently Ask</h2>
            <textarea className="text-box"
                placeholder="Type your questions here"
                onChange={(e) =>
                setNewQuestion({
                ...newQuestion,
                question: e.target.value
                })}/>

                    {/*TUIT BUTTON*/}
                    <button className="post-button"
                            onClick={() =>
                                handlePost()}>
                        Post
                    </button>
                </div>
            </SecureContent>
            
            {
                question.map && question.map(question =>
                    <div className='question-block grid-row'>
                        <div className="grid-col-left-sidebar bg-color-yellow">
                            <Link to={`/profile/${question.postedBy.username}`}>
                            <img className="wd-avatar" src={question["avatar"]} alt="Avatar"/>
                            </Link>
                            <p className="wd-handel-15px">{question.postedBy.firstName}</p>
                            <h3 className="wd-margintop-0">{question.question}</h3>
                        </div>
                        <div className="grid-col-main-content bg-color-blue fg-color-white">
                            <p className="white">.</p>
                        </div>
                        <div className="grid-col-right-sidebar bg-color-green fg-color-white action-box">
                            <div className="like">
                                <p className="center icon-font hover">
                                    <i onClick={() => updateQuestion(dispatch, {
                                    ...question,
                                    likes: question.likes + 1
                                    })} className="far fa-thumbs-up icon"/>
                                    {question.likes}
                                </p>
                            </div>
                            <div className="dislike">
                                <p className="center icon-font hover">
                                    <i onClick={() => updateQuestion(dispatch, {
                                    ...question,
                                    dislikes: question.dislikes + 1
                                    })} className="far fa-thumbs-down icon"/>
                                    {question.dislikes}
                                </p>
                            </div>
                            {/*TODO log-in check, current user posted this post (can use userName) if yes: display delete button*/}
                            <div className="delete">
                                <p className="center icon-font hover">
                                    <i className="fas fa-trash float-end"
                                    onClick={() => deleteQuestion(
                                    dispatch, question)}/>
                                </p>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>);
};

export default Questions;
