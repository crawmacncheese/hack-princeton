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

// require('dotenv').config();
const openaiApiKey = process.env.REACT_APP_OPENAI_API_KEY;

const openai = new OpenAI({ apiKey: openaiApiKey, dangerouslyAllowBrowser: true });

// async function main() {
//   const completion = await openai.chat.completions.create({
//     messages: [{ role: "system", content: "You are a helpful assistant." }],
//     model: "gpt-3.5-turbo",
//   });

//   console.log(completion.choices[0]);
// }

export async function sendMsg(message) {
        const res = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [{role: "user", content: message}],
        });
        console.log(res.choices[0]);
        return res.choices[0].message;
    }
