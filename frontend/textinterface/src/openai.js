// const { Configuration, OpenAIApi } = require('openai');
// const configuration = new Configuration({ apiKey:
// const openai = new OpenAIApi(configuration);

// export async function sendMsg(message) {
//     const res = await openai.createCompletion({
//         model: 'text-davinci-003',
//         prompt: message,
//         temperature: 0.7,
//         max_token: 256,
//         top_p: 1,
//         frequency_penalty: 0,
//         presense_penalty: 0,
//     });
//     return res.data.choices[0].text;
// }
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: "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", dangerouslyAllowBrowser: true });

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}

export async function sendMsg(message) {
        const res = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt: message,
            temperature: 0.7,
            max_token: 256,
            top_p: 1,
            frequency_penalty: 0,
            presense_penalty: 0,
        });
        return res.data.choices[0].text;
    }
