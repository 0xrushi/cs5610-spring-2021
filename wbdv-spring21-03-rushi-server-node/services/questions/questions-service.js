// const questions = require("./questions.json")
// const createQuestion = () => {}
// const createQuestionForQuiz = () => {}
//
// const questionsModel = require('../../db/questions/questions-model')
//
// const findAllQuestions = () => {
//     // return questions
//     return questionsModel.find()
// }
//
// const findQuestionsForQuiz = (qzid) => {
//     // return questions.filter((question) => {
//     //     return question.quizId === qzid;
//     // })
//     return questionsModel.find({quizId:qzid})
// }
// const findQuestionById = (quid) => {
//     return questions.find((question) => {
//         return question._id === quid;
//     })
// }
//
// const updateQuestion = () => {}
// const deleteQuestion = () => {}
//
// module.exports = {
//     createQuestion, createQuestionForQuiz,
//     findAllQuestions, findQuestionById,
//     findQuestionsForQuiz,
//     updateQuestion, deleteQuestion
// }

const questionsDao = require('../../daos/questions-dao')

const findAllQuestions = () => questionsDao.findAllQuestions()
const findQuestionById = (qid) => questionsDao.findQuestionById(qid)
const findQuestionsForQuiz = (qid) => questionsDao.findQuestionsForQuiz(qid)


module.exports = { findAllQuestions, findQuestionById, findQuestionsForQuiz }


