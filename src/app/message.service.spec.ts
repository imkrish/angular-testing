import { MessageService } from './message.service'

describe('Message Service', () => {
  it('should have no messages to start', () => {
    const service = new MessageService()

    expect(service.messages.length).toBe(0)
  })

  it('should add a message when add is called', () => {
    const service = new MessageService()

    service.add('message1')

    expect(service.messages.length).toBe(1)
  })

  it('should remove all messages when clear is called', () => {
    const service = new MessageService()
    service.add('message1')

    service.clear()

    expect(service.messages.length).toBe(0)
  })
})
