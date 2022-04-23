import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import '../../style/Questionns.css'
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
        <div className='question_container'>
            {/*TEXT ENTERING AREA*/}
            <textarea placeholder="Type your questions here"
                      onChange={(e) =>
                          setNewQuestion({
                              ...newQuestion,
                              question: e.target.value
                          })}></textarea>
            
            {/*TUIT BUTTON*/}
            <button onClick={() =>
                createQuestion(dispatch, newQuestion)}>
                Post
            </button>
            
            <ul className="ttr-tuits list-group">
                {
                    question.map && question.map(question =>
                        <div className="list-group-item">
                            {/*<div>*/}
                            {/*    <img className="wd-avatar" src={tuit["avatar"]} alt="Avatar"/>*/}
                            {/*</div>*/}
                            <div className="wd-title-block">
                                <p className="wd-title-15px">{question.postedBy && question.postedBy.username}</p>
                            </div>
                            <div className="wd-content-15px">
                                {question.question}
                            </div>
                            
                            {/*LIKES*/}
                            <div className="wd-reaction wd-icon">
                                Likes: {question.likes}
                                <i onClick={() => updateQuestion(dispatch, {
                                    ...question,
                                    likes: question.likes + 1
                                })} className="far fa-thumbs-up ms-2"></i>
                            </div>
                            {/*DELETE*/}
                            <i className="fas fa-trash float-end bottom-0"
                               onClick={() => deleteQuestion(
                                   dispatch, question)}></i>
                        
                        </div>
                    )
                }
            </ul>
        
        
        </div>);
};

export default Questions;
