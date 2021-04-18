// const quizzesService = require("../services/quizzes/quizzes-service")
//
// module.exports = (app) => {
//
//     const findAllQuizzes = (req, res) => {
//         quizzesService.findAllQuizzes().then((quizzes) => {
//                 res.send(quizzes)
//             })
//     }
//     const findQuizById = (req, res) => {
//         const quizId = req.params['qid']
//         // const quiz = quizzesService.findQuizById(quizId)
//         quizzesService.findQuizById(quizId).then((quiz) => {
//             res.send(quiz)
//         })
//     }
//
//     app.get("/api/quizzes", findAllQuizzes)
//     app.get("/api/quizzes/:qid", findQuizById)
// }

const quizService = require('../services/quizzes/quizzes-service')

module.exports = (app) => {
    const findAllQuizzes = (req, res) =>
        quizService.findAllQuizzes()
            .then(quizzes => res.json(quizzes))

    const findQuizById = (req, res) => {
        const quizId = req.params['qid']
        quizService.findQuizById(quizId)
            .then((quiz) => res.json(quiz))
    }
    app.get('/api/quizzes', findAllQuizzes)
    app.get('/api/quizzes/:qid', findQuizById)
}