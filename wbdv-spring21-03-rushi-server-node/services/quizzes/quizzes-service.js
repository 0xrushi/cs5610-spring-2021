
// const quizzes = require("./quizzes.json")
// const quizzesModel = require('../../db/quizzes/quizzes-model')
// const createQuiz = () => {}
// const findAllQuizzes = () => {
//     // return quizzes
//     return quizzesModel.find()
// }
// const findQuizById = (qid) => {
//     // return quizzes.find((quiz) => {
//     //     return (quiz._id === qid)
//     // })
//     return quizzesModel.find({_id: qid})
//         .populate("questions")
//         .exec()
// }
// const updateQuiz = () => {}
// const deleteQuiz = () => {}
//
// module.exports = {
//     createQuiz,
//     findAllQuizzes,
//     findQuizById,
//     updateQuiz,
//     deleteQuiz
// }

const quizzesDao = require('../../daos/quizzes-dao')

const findAllQuizzes = () => quizzesDao.findAllQuizzes()
const findQuizById = (quizId) =>
    quizzesDao.findQuizById(quizId)


module.exports = {
    findAllQuizzes,
    findQuizById
}