import { describe, it, expect } from 'vitest'
import { AnswerQuestionUseCase } from './answer-question'
import { InMemoryAnswersRepository } from 'test/in-memory-answers-repository'

let inMemoryAnswersRepository: InMemoryAnswersRepository
let sut: AnswerQuestionUseCase

describe('Use Cases: Answer Question', () => {
  beforeEach(() => {
    inMemoryAnswersRepository = new InMemoryAnswersRepository()
    sut = new AnswerQuestionUseCase(inMemoryAnswersRepository)
  })

  it('Should return an answer', async () => {
    const result = await sut.execute({
      questionId: '1',
      instructorId: '1',
      content: 'New answer',
    })

    expect(result.value?.answer.content).toEqual('New answer')
    expect(result.isRight()).toBe(true)
    expect(inMemoryAnswersRepository.items[0]).toEqual(result.value?.answer)
  })
})
