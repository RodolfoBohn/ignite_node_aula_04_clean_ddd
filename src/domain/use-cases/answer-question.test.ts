import { describe, it, expect } from 'vitest'
import { AnswerQuestion } from './answer-question'
import { AnswerRepository } from '../repositories/answer-repository'

describe('Use Cases: Answer Question', () => {
  const fakeAnswersRepository: AnswerRepository = {
    create: async () => {},
  }

  it('Should return an answer', async () => {
    const answer = await new AnswerQuestion(fakeAnswersRepository).execute({
      questionId: '1',
      instructorId: '1',
      content: 'New answer',
    })

    expect(answer.content).toEqual('New answer')
  })
})
