import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import '../../style/Questions.css'
import {createQuestion, deleteQuestion, findAllQuestions, updateQuestion} from "../../actions/Question-actions";

const Questions = () => {
    const question = useSelector(
        state => state.questions);
    // create a new state variable with new tuit data
    const [newQuestion, setNewQuestion] =
        useState({question: 'New Question'});
    const dispatch = useDispatch();
    useEffect(() =>
        findAllQuestions(dispatch));
    
    return (
        <div className='question-container'>
            {/*TODO log-in check, true - display this text entering area*/}
            {/*TEXT ENTERING AREA*/}
            <div className="question-box">
            <textarea className="text-box"
                      placeholder="Type your questions here"
                      onChange={(e) =>
                          setNewQuestion({
                              ...newQuestion,
                              question: e.target.value
                          })}></textarea>
                
                {/*TUIT BUTTON*/}
                <button className="post-button"
                        onClick={() =>
                            createQuestion(dispatch, newQuestion)}>
                    Post
                </button>
            </div>
            
            {
                question.map && question.map(question =>
                    <div className='question-block grid-row'>
                        <div className="grid-col-left-sidebar bg-color-yellow">
                            <img className="wd-avatar" src={question["avatar"]} alt="Avatar"/>
                            <p className="wd-handel-15px">{question.postedBy.username}</p>
                            <h3 className="wd-margintop-0">{question.question}</h3>
                        </div>
                        <div className="grid-col-main-content bg-color-blue fg-color-white">
                            <p className="white">.</p>
                        </div>
                        <div className="grid-col-right-sidebar bg-color-green fg-color-white action-box">
                            <div className="like">
                                <p className="center icon-font">
                                    <i onClick={() => updateQuestion(dispatch, {
                                        ...question,
                                        likes: question.likes + 1
                                    })} className="far fa-thumbs-up icon"></i>
                                    {question.likes}
                                </p>
                            </div>
                            <div className="dislike">
                                <p className="center icon-font">
                                    <i onClick={() => updateQuestion(dispatch, {
                                        ...question,
                                        dislikes: question.dislikes + 1
                                    })} className="far fa-thumbs-down icon"></i>
                                    {question.dislikes}
                                </p>
                            </div>
                            {/*TODO log-in check, current user posted this post (can use userName) if yes: display delete button*/}
                            <div className="delete">
                                <p className="center icon-font">
                                    <i className="fas fa-trash float-end"
                                       onClick={() => deleteQuestion(
                                           dispatch, question)}></i>
                                </p>
                            </div>
                        </div>
                    </div>
                )
            }
        
        
        </div>);
};

export default Questions;
