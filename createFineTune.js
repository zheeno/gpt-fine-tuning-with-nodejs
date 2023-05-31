import { openai } from './api.js'
import { fileId } from './fileId.js'

async function createFineTune() {
  try {
    const response = await openai.createFineTune({
      training_file: fileId,
      model: 'babbage:ft-personal-2023-05-31-10-15-37'
    })
    console.log('response: ', response)
  } catch (err) {
    console.log('error: ', err.response.data.error)
  }
}

createFineTune()
