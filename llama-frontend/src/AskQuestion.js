import React, { useState } from 'react';
import axios from 'axios';

function AskQuestion() {
    const [question, setQuestion] = useState('');
    const [response, setResponse] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await axios.post('http://localhost:8000/api/ask/', { question });
            setResponse(result.data.response);
        } catch (error) {
            console.error('Error fetching the response:', error);
        }
    };

    return (
        <div style={{ margin: '50px' }}>
            <h1>Ask the Llama Model</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Question:
                        <input
                            type="text"
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                            style={{ margin: '10px', padding: '10px', width: '300px' }}
                        />
                    </label>
                </div>
                <button type="submit" style={{ padding: '10px 20px', margin: '10px' }}>Ask</button>
            </form>
            {response && (
                <div>
                    <h2>Response:</h2>
                    <p>{response}</p>
                </div>
            )}
        </div>
    );
}
export default AskQuestion;