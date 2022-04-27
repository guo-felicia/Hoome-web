import * as service from '../services/Question-service';

export const FIND_ALL = 'FIND_ALL';
export const DELETE = 'DELETE';
export const CREATE = 'CREATE';
export const UPDATE = 'UPDATE';


export const findAllQuestions = async (dispatch) => {
    const questions = await service.findAllQuestions();
    dispatch({
        type: FIND_ALL,
        questions: questions
    });
}

export const deleteQuestion = async (dispatch, data) => {
    const response = await service.deleteQuestion(data);
    dispatch({
        type: DELETE,
        questions: data
    })
}

export const createQuestion = async (dispatch, data) => {
    const newQuestion = await service.createQuestion(data);
    dispatch({
        type: CREATE,
        newQuestion: newQuestion
    });
}


export const updateQuestion = async (dispatch, data) => {
    const status = await service.updateQuestion(data);
    dispatch({
        type: UPDATE,
        question: data
    });
}


