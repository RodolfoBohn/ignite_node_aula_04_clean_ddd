import { describe, it, expect } from 'vitest'
import { CreateQuestionUseCase } from './create-question'
import { InMemoryQuestionsRepository } from 'test/in-memory-questions-repository'

let inMemoryQuestionsRepository: InMemoryQuestionsRepository
let sut: CreateQuestionUseCase
describe('Use Cases: Create Question', () => {
  beforeEach(() => {
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository()
    sut = new CreateQuestionUseCase(inMemoryQuestionsRepository)
  })

  it('Should return an answer', async () => {
    const result = await sut.execute({
      authorId: '1',
      title: 'Title',
      content: 'New answer',
    })

    expect(result.isRight()).toBe(true)
    expect(inMemoryQuestionsRepository.items[0]).toEqual(result.value?.question)
  })
})
