// module.exports = (app) => {
//     const questionService = require("../services/questions/questions-service")
//
//     const findAllQuestions = (req, res) => {
//         // const questions = questionService.findAllQuestions()
//         // res.send(questions)
//         questionService.findAllQuestions().then((questions) => {
//             res.send(questions)
//         })
//     }
//
//     const findQuestionsForQuiz = (req, res) => {
//         const quizId = req.params.qzid;
//         // const questions = questionService.findQuestionsForQuiz(quizId);
//         questionService.findQuestionsForQuiz(quizId).then((questions) => {
//             res.send(questions);
//         })
//     }
//
//     app.get("/api/questions", findAllQuestions);
//     app.get("/api/quizzes/:qzid/questions", findQuestionsForQuiz);
// }

const questionsService
    = require("../services/questions/questions-service")

module.exports = (app) => {
    const findQuestionsForQuiz = (req, res) => {
        const quizId = req.params['qid']
        questionsService.findQuestionsForQuiz(quizId)
            .then((questions) => res.json(questions))

    }

    const findQuestionById = (req, res) => {
        const quizId = req.params['qid']
        questionsService.findQuestionById(quizId)
            .then((question) => res.json(question))
    }

    const findAllQuestions = (req, res) => {
        questionsService.findAllQuestions()
            .then((questions) => res.json(questions))
    }


    app.get("/api/questions/:qid", findQuestionById)
    app.get("/api/questions", findAllQuestions)
    app.get("/api/quizzes/:qid/questions",
        findQuestionsForQuiz)
}