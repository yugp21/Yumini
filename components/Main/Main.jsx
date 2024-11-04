import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import './Main.css'
import { Context } from '../../context/Context'

const Main = () => {

    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);


    return (
        <>
            <div className='main'>
                <div className="nav">
                    <p>Yumini</p>
                    <img src={assets.user_icon} alt="" />
                </div>
                <div className='main-container'>

                    {!showResult
                        ? <>
                            <div className="greet">
                                <h1><span>Hello, AME</span> 👋</h1>
                                <p>How can I help you today?</p>
                            </div>
                            <div className="cards">
                                <div className="card">
                                    <p>Suggest beatiful places to see on an upcoming road trip.</p>
                                    <img src={assets.compass_icon} alt="" />
                                </div>
                                <div className="card">
                                    <p>Briefly summarize this concept: urban planning.</p>
                                    <img src={assets.bulb_icon} alt="" />
                                </div>
                                <div className="card">
                                    <p>Brainstrom team bonding activities for our work retreat</p>
                                    <img src={assets.message_icon} alt="" />
                                </div>
                                <div className="card">
                                    <p>Improve the readability o the following code </p>
                                    <img src={assets.code_icon} alt="" />
                                </div>
                            </div>
                        </> :
                        <div className='result'>
                            <div className="result-title">
                                <img src={assets.user_icon} alt="" />
                                <p>{recentPrompt}</p>
                            </div>
                            <div className="result-data">
                                <img src={assets.Yumini_icon} alt="" />
                                {loading ? (
                                    <div className='loader'>
                                        <hr />
                                        <hr />
                                        <hr />
                                    </div>
                                ) : (
                                    <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                                )}
                            </div>
                        </div>
                    }

                    <div className="main-bottom">
                        <div className="search-box">
                            <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Ask Yumini' />
                            <div>
                                <img onClick={() => onSent()} src={assets.send_icon} alt="" />
                            </div>
                        </div>
                        <p className="bottom-info">
                            Yumini can make mistakes, so double-check it. © Yumini 2024. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main