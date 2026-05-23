import { useState } from "react";
import { GoogleGenAI, Type } from '@google/genai';

// type definitions
interface QuizQuestion {
    questionText: string;
    options: string[];
    correctIndex: number;
    explanation: string;
}

// sdk initialization
const apiKey = import.meta.env.VITE_GEMINI_API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export default function GitQuizBuilder() {
    // State Memory
    const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>([]);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
    const [score, setScore] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    
    const [aiFeedback, setAiFeedback] = useState<string>('');
    const [loadingFeedback, setLoadingFeedback] = useState<boolean>(false);
    const [currentTopic, setCurrentTopic] = useState<string>('Git');

    // ai logic to generate questions
    const generateQuizFromAI = async (topic: string): Promise<void> => {
        if (!apiKey) {
            setErrorMessage("Missing API Key! Please add VITE_GEMINI_API_KEY to your .env");
            return;
        }

        setLoading(true);
        setErrorMessage(null);
        setIsSubmitted(false);
        setSelectedAnswer(null);
        setCurrentQuestionIndex(0);
        setScore(0);
        setAiFeedback('');
        setCurrentTopic(topic); // Remember the active topic for feedback calculation

        try {
            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: `Generate a 7-question multiple-choice quiz about "${topic}".`,
                config: {
                    responseMimeType: 'application/json',
                    responseSchema: {
                        type: Type.ARRAY,
                        items: {
                            type: Type.OBJECT,
                            properties: {
                                questionText: { type: Type.STRING },
                                options: { 
                                    type: Type.ARRAY, 
                                    items: { type: Type.STRING } 
                                },
                                correctIndex: { type: Type.INTEGER },
                                explanation: { type: Type.STRING }
                            },
                            required: ["questionText", "options", "correctIndex", "explanation"]
                        }
                    },
                    systemInstruction: "You are a professional Git version control instructor. Generate educational multiple-choice quiz questions with 4 logical option variations based on the requested theme."
                }
            });

            if (response.text) {
                const generatedData: QuizQuestion[] = JSON.parse(response.text);
                setQuizQuestions(generatedData);
            } else {
                throw new Error("Empty payload returned from the AI model.");
            }

        } catch (error) {
            console.error("Gemini API Error:", error);
            setErrorMessage("Failed to compile quiz questions from Gemini. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    // ai logic:
    const generatePerformanceFeedback = async (topic: string, finalScore: number, totalQuestions: number): Promise<void> => {
        setLoadingFeedback(true);
        try {
            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: `
                    The student just finished an interactive multiple-choice quiz about "${topic}".
                    They scored ${finalScore} out of ${totalQuestions} questions correct.
                    
                    Provide a constructive, highly encouraging engineering evaluation. 
                    Give them exactly 2 actionable 'Next Steps' or study strategies tailored to their score performance. 
                    Keep your response concise, using short scannable bullet points. Do not mention internal technical codes.
                `,
                config: {
                    systemInstruction: "You are an elite, supportive software engineering mentor coaching a junior developer on Git fundamentals."
                }
            });

            if (response.text) {
                setAiFeedback(response.text);
            }
        } catch (error) {
            console.error("Feedback Generation Error:", error);
            setAiFeedback("Great job completing the quiz! Keep analyzing your command workflows to level up your engineering skills.");
        } finally {
            setLoadingFeedback(false);
        }
    };

    const checkAnswer = (): void => {
        if (selectedAnswer === null) return;
        setIsSubmitted(true);
        if (selectedAnswer === quizQuestions[currentQuestionIndex].correctIndex) {
            setScore((prevScore) => prevScore + 1);
        }
    };

    const handleNext = (): void => {
        setSelectedAnswer(null);
        setIsSubmitted(false);
        
        const nextQuestionIndex = currentQuestionIndex + 1;
        setCurrentQuestionIndex(nextQuestionIndex);

        
        if (nextQuestionIndex === quizQuestions.length) {
            // If checking user state updates inside the same loop cycle, we evaluate against the fresh target score
            const finalScoreCalculated = selectedAnswer === quizQuestions[currentQuestionIndex].correctIndex ? score + 1 : score;
            generatePerformanceFeedback(currentTopic, finalScoreCalculated, quizQuestions.length);
        }
    };

    return (
        <div className="quiz-container">
            <h3>Select a Git Topic to Generate an AI Quiz:</h3>
            
            <div className="topic-selector">
                <button 
                    disabled={loading} 
                    className="quiz-btn primary-btn"
                    onClick={() => generateQuizFromAI('Git Basics (init, add, commit)')}
                >
                    Git Basics Quiz
                </button>
                <button 
                    disabled={loading} 
                    className="quiz-btn primary-btn"
                    onClick={() => generateQuizFromAI('Git Branching & Merging')}
                >
                    Git Branching Quiz
                </button>
            </div>

            {/* Handling error outputs gracefully */}
            {errorMessage && (
                <p className="error-message">
                    {errorMessage}
                </p>
            )}

            {loading && <p className="loading-text">⏳ Gemini is compiling your personalized Git quiz...</p>}

            {/* Question Layout Card */}
            {!loading && quizQuestions.length > 0 && currentQuestionIndex < quizQuestions.length && (
                <div className="quiz-card">
                    <h4>Question {currentQuestionIndex + 1} of {quizQuestions.length}</h4>
                    <p className="question-text">
                        {quizQuestions[currentQuestionIndex].questionText}
                    </p>

                    <div className="options-list">
                        {quizQuestions[currentQuestionIndex].options.map((option: string, index: number) => {
                            const isSelected = selectedAnswer === index;
                            const optionClass = isSelected ? 'option-btn selected' : 'option-btn';

                            return (
                                <button
                                    key={index}
                                    disabled={isSubmitted}
                                    onClick={() => setSelectedAnswer(index)}
                                    className={optionClass}
                                >
                                    {option}
                                </button>
                            );
                        })}
                    </div>

                    {!isSubmitted ? (
                        <button 
                            onClick={checkAnswer} 
                            disabled={selectedAnswer === null}
                            className="quiz-btn submit-btn"
                        >
                            Submit Answer
                        </button>
                    ) : (
                        <div className="feedback-zone">
            
                            <p className={`result-status ${selectedAnswer === quizQuestions[currentQuestionIndex].correctIndex ? 'correct' : 'incorrect'}`}>
                                {selectedAnswer === quizQuestions[currentQuestionIndex].correctIndex ? '🎉 Correct!' : '❌ Incorrect'}
                            </p>
                            <p className="explanation-text">
                                <strong>Explanation:</strong> {quizQuestions[currentQuestionIndex].explanation}
                            </p>
                            <button onClick={handleNext} className="quiz-btn next-btn">
                                {currentQuestionIndex === quizQuestions.length - 1 ? 'Finish Quiz' : 'Next Question'}
                            </button>
                        </div>
                    )}
                </div>
            )}

            {/* Dashboard Summary Screen with our AI Mentor Suggestions */}
            {!loading && quizQuestions.length > 0 && currentQuestionIndex >= quizQuestions.length && (
                <div className="dashboard-wrapper">
                    
                    {/* Score Card */}
                    <div className="score-card">
                        <h4>🎉 Quiz Finished!</h4>
                        <p>You scored <strong>{score}</strong> out of {quizQuestions.length}</p>
                    </div>

                    {/* AI Mentor Advice Card */}
                    <div className="mentor-card">
                        <h4 className="mentor-header">AI Mentor Suggestions</h4>
                        {loadingFeedback ? (
                            <p className="mentor-loading">Analyzing performance logs and plotting recommendations...</p>
                        ) : (
                            <p className="mentor-feedback-text">
                                {aiFeedback}
                            </p>
                        )}
                    </div>

                </div>
            )}
        </div>
    );
}