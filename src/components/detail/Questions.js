import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import '../../style/Questionns.css'

const Questions = () => {
    let [question, setQuestion] = useState('');
    const dispatch = useDispatch();
    const postClickHandler = () => {
        dispatch({
            type: 'post-question',
            question: question
        });
    }
    return (
        <div className='question_container'>
            <textarea value={question}
                      onChange={(event) => setQuestion(event.target.value)}>
                
            </textarea>
            
            <button onClick={postClickHandler}>
                post
            </button>
        
        </div>);
};

export default Questions;
