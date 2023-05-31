import { openai } from './api.js'

async function createCompletion() {
  try {
    const response = await openai.createCompletion({
      model: 'babbage:ft-personal-2023-05-31-10-15-37',
      prompt: 'What is the Dispatch-Z office phone number',
      temperature: 0.2,
      max_tokens: 50,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    if (response.data) {
      console.log({ text: response.data.choices[0].text?.trim(), response: removeAfterFirstAllCapsWord(response.data.choices[0].text?.trim()) })
    }
  } catch (err) {
    console.log('err: ', err)
  }
}

const removeAfterFirstAllCapsWord = (str) => {
  const regex = /([A-Z]{2,})/; // Regex to match all caps word (at least 2 consecutive uppercase letters)
  // replace phone number with dispatch-z contact
  str = str.replace(/\d{11}/g, "0704 404 2579")
  // remove special character in index 0
  str = str.replace(/^[^\w\s]+/, "")
  const match = str.match(regex);

  if (match) {
    const index = str.indexOf(match[1]);
    return str.substring(0, index)?.trim();
  }
  return str?.trim();
}

createCompletion()
