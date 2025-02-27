import { beforeEach, afterEach, beforeAll, afterAll, describe, expect, test, it, vi,bench,assert } from 'vitest'
import { mount } from '@vue/test-utils'

async function randomAsyncOperation() {
    let data=await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.5) { // 50% 成功概率
          resolve("Success1!");
        } else {
          resolve("Success2!");
        }
      }, 10000); // 1秒后执行
    });
    return data
  }
  vi.mock('./api', () => ({
    randomAsyncOperation: vi.fn(() => Promise.resolve('mocked data'))
  }))
  describe('skipped suite', () => {
    test('sqrt', async () => {
        const getApples = vi.fn(() => 0)

getApples()

expect(getApples).toHaveBeenCalled()
expect(getApples).toHaveReturnedWith(0)

getApples.mockReturnValueOnce(5)

const res = getApples()
expect(res).toBe(5)
expect(getApples).toHaveNthReturnedWith(2, 5)
      
    })
  })


 







