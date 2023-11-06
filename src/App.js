import React from 'react'
import { useState, useEffect, useRef } from 'react'

import FAQ from './Components/FAQ/FAQ'
import ChatItem from "./Components/CatItem/ChatItem"
import Info from './Components/Info/Info'

export default function App() {

  const [ question, setQuestion ] = useState('')
  const [ chatData, setChatData ] = useState([])
  const [ error, setError ] = useState()
  const [ isActive, setIsActive ] = useState(false)

  const messageEndRef = useRef(null)
  const inputArea = useRef(null)

const faqContent = [
    {
        title:"Say hi",
        content: "Hello"
    },
    {
        title:"Milan city",
        content: "Tell me shortly three facts about Milan"
    },
    {
        title:"Tell me a joke",
        content: "Please tell me a joke about Junior Frontend developer"
    },
]

  const fetchAPI = async (faq) => {
    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: faq || question,
      })
    }

    try {
      const response = await fetch('http://localhost:3005/', fetchOptions)
      const data = await response.json()

        setTimeout(() => {
            setChatData(dataBefore => (
                        [...dataBefore,
                          {
                            role: "ChatGPT",
                            content: data.message
                          }
                        ]
                    ))
        }, 1000)

    } catch (error) {
        setError(error)
    }
      console.log("Fetch")
  }

    const renderMessage = async () => {
        inputArea.current.value = "";

        if(!isActive) setIsActive(true)

        setTimeout(() => {
            setChatData(dataBefore => (
                [...dataBefore,
                    {
                        role: "User",
                        content: question
                    }
                ]
            ))
        }, 600)

        await fetchAPI()
        if(error) console.log(error)
    }

    useEffect(() => {
        messageEndRef.current?.scrollIntoView()
    }, [chatData])

    const faqAction = async (data) => {
        if(!isActive) setIsActive(true)
        await fetchAPI(data)
    }

    const reset = () => {
        setChatData([])
        if(isActive) setIsActive(false)
        inputArea.current.value = "";
    }

    const handleKeyUp = async (event) =>{
        event.persist();
        if (event.key === "Enter") {
            await renderMessage()
        }
    }

  return (
      <div className="chat">
        <section className="chat-container">

            <div className="chat-question-variants">
                <h2 className="chat-question-header">{"Ask me about:"}</h2>
                {faqContent && faqContent.map(faqMessage => (
                    <FAQ
                        key={Math.random()}
                        title={faqMessage.title}
                        content={faqMessage.content}
                        onClick={faqAction}
                    />
                ))}


            </div>

          <div id="chat-items" className={`chat-items ${isActive ? 'chat-items--active' : ''}`}>

            {chatData && chatData.map((chatData, i) => (
                <ChatItem key={i}
                          role={chatData.role}
                          content={chatData.content}
                />
            ))}
              <div ref={messageEndRef} ></div>

          </div>
          <div className="control-area">
                <div className="input-container">
                  <input
                      ref={inputArea}
                      id="chatInput"
                      type="text"
                      placeholder="Ask..."
                      onKeyDown={handleKeyUp}
                      onChange={(e) => setQuestion(e.target.value)}/>
                  <button id="chatSubmit" onClick={renderMessage}>Submit</button>
                  <button id="chatRest" onClick={reset}>
                      <i className="fa-solid fa-rotate-right"></i>
                  </button>

                </div>
                <Info />
          </div>

        </section>
      </div>
  )
}
