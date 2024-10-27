import { Either, right } from '@/core/either'
import { UniqueEntityID } from '../../../../core/entities/value-objects/unique-entity-id'
import { Answer } from '../../enterprise/entities/answer'
import { AnswersRepository } from '../repositories/answers-repository'

interface IAnswerQuestionRequest {
  questionId: string
  instructorId: string
  content: string
}

type AnswerQuestionUseCaseResponse = Either<
  null,
  {
    answer: Answer
  }
>

export class AnswerQuestionUseCase {
  constructor(private answerRepository: AnswersRepository) {}

  async execute({
    content,
    instructorId,
    questionId,
  }: IAnswerQuestionRequest): Promise<AnswerQuestionUseCaseResponse> {
    const answer = Answer.create({
      content,
      authorId: new UniqueEntityID(instructorId),
      questionId: new UniqueEntityID(questionId),
    })

    await this.answerRepository.create(answer)
    return right({ answer })
  }
}
