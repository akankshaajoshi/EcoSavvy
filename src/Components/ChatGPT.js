import { Configuration, OpenAIApi } from "openai";
import { useState } from "react";
import './ChatGPT.css';

import key from '../Resources/key.json';
const configuration = new Configuration({
    organization: "org-LXLuuLknBXJzxZ3xph3tLFIP",
    apiKey: key.Key,
});

const openai = new OpenAIApi(configuration);

export function ChatGPT(){
    let [chat, setChat]=useState([]);
   const handleSubmit = (e) => {
        e.preventDefault();  
        let messagee=e.target.message.value;  
        setChat([...chat,messagee]);
        openai.createCompletion({
                "model": "text-davinci-003",
                "prompt": messagee,
                'temperature':0

        }).then((output)=>{
            console.log(output.data.choices[0].text);
            setChat([...chat,messagee,output.data.choices[0].text]);
        });
        
    }
    
    return(
        <div id='Gpt'>
        <form onSubmit={(e) => {handleSubmit(e)}}>
        <div id='chat'>
            {chat.map((mess,index)=>(
                index%2===0?
                <div className="flex-right"><div className='mess' id='mess0'>
                <p>{mess}</p>
                </div></div>:<div className="flex-left"><div className='mess' id='mess1'>
                <p>{mess}</p></div>
                </div>
            ))}
        </div>
            <input type="text" id='message'/>
            <button type='submit' id="send">send</button>
        </form>
        </div>
    )
}