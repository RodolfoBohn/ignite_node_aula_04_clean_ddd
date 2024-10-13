import { UniqueEntityID } from "../../core/entities/value-objects/unique-entity-id"
import { Answer } from "../entities/answer"
import { AnswerRepository } from "../repositories/answer-repository"

interface IAnswerQuestionRequest {
  questionId: string
  instructorId: string
  content: string
}

export class AnswerQuestion {

  constructor(private answerRepository: AnswerRepository) {}

  async execute({content, instructorId, questionId}: IAnswerQuestionRequest) {
    const answer = Answer.create({
      content, 
      authorId: new UniqueEntityID(instructorId),
      questionId: new UniqueEntityID(questionId),
    })

    await this.answerRepository.create(answer)
    return answer
  }
}