import { Either, right } from '@/core/either'
import { UniqueEntityID } from '../../../../core/entities/value-objects/unique-entity-id'
import { Question } from '../../enterprise/entities/question'
import { QuestionsRepository } from '../repositories/questions-repository'

interface ICreateQuestionRequest {
  authorId: string
  title: string
  content: string
}

type ICreateQuestionResponse = Either<
  null,
  {
    question: Question
  }
>

export class CreateQuestionUseCase {
  constructor(private questionsRepository: QuestionsRepository) {}

  async execute({
    authorId,
    content,
    title,
  }: ICreateQuestionRequest): Promise<ICreateQuestionResponse> {
    const question = Question.create({
      authorId: new UniqueEntityID(authorId),
      content,
      title,
    })

    await this.questionsRepository.create(question)

    return right({
      question,
    })
  }
}
