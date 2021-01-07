import React, { useState } from 'react';

let questionsTemp = [
	{ questionText: "Maria got 52.647 million views on her last tik tok dance.  If Maria’s first tik tok had 1.312 million views, then how many more views is Maria getting now?", answer: "51.362" },
	{ questionText: "Jay listened to 45.1 hours of music in 2019, then 109.3 hours of music in 2020.  How much more music did Jay listen to in 2020 than 2019?", answer: "64.2" },
	{ questionText: "Francesca used 205.82 pounds of red onion and 193.4 pounds of white onion while cooking in 2020.  How many pounds of onion did Francesca use in total?", answer: "399.22" },
	{ questionText: "Jatin played Rocket league for 31.7 hours on his account.  After he got banned, Jatin made a second account and played for 20.9 hours.  After getting banned again, Jatin made a third account and played for 9.2 hours.  After getting banned for a third time, Jatin vowed to never play Rocket League again.  Across all accounts, how many hours did Jatin play for?", answer: "61.8" },
	{ questionText: "Over break, Tanmay watched Spongebob for 12.5 hours and played Roblox for 23.99 hours.  How much more time did Tanmay spend playing Roblox than watching Spongebob?", answer: "36.49" },
	{ questionText: "Over break, Mickey watched 14.87 Alan Walker videos and 12.6 Preston Playz videos.  Who did Mickey watch more of and by how much?", answer: "2.27" },
	{ questionText: "On average, Andrew scored 3.216 goals per game in 2019 and 3.817 goals per game in 2020 on Fifa.  Which year did Andrew score more in, and by how much?", answer: ".601" },
	{ questionText: "Udi played Minecraft for 12.6 hours on Friday, 13.85 hours on Saturday, and 14.97 hours on Sunday.  How long did Udi play Minecraft for over the entire weekend?", answer: "41.42" },
	{ questionText: "Judy has 291.3 hours in Doom Eternal.  If she has 14.8 more hours in Doom 2, then how many hours has Judy played Doom 2 for?", answer: "306.1" },
	{ questionText: "Tina read about 2903.7 pages of manga and about 2864.23 pages of light novels in 2020.  Which type of book did she read more of, and by how much?", answer: "39.47" },
	{ questionText: "Subin listened to three (3) BTS albums for a total of 704.9 minutes in 2020.  If she listened to Youth (2016) for 257.6 minutes and FACE YOURSELF (2018) for 325.1 minutes, then how many minutes did she spend listening to BE (2020)?", answer: "122.2" },
	{ questionText: "Joselyn watched 198.4 episodes of Criminal Minds, 32.61 episodes of Black Butler, and 15 episodes of Blue Exorcist.  How many episodes did she watch in total?", answer: "242.41" },
	{ questionText: "Sophia read Sunny Rolls the Dice for 38.6 minutes and Guts for 45.75 minutes before falling asleep.  How long did Sophia spend reading in total?", answer: "84.35" },
	{ questionText: "Last year, Lila listened to evermore for 27.9 hours, folklore for 22.7 hours, Lover for 23.8 hours, reputation for 18.4 hours, and 1989 for 30.2 hours.  How long did Lila spend listening to Taylor Swift in total?", answer: "123" },
	{ questionText: "Last year, Rano listened to Made In The A.M (2015) for 3187.6 minutes and Take Me Home (2012) for 2549.1 minutes.  How much longer did Rano spend listening to Made In The A.M.?", answer: "638.5" }
];

const questions = questionsTemp.sort(() => Math.random() - 0.5)

export default function App() {

	const [userAnswer, setAnswer] = useState('')
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleSubmit = (correctAnswer) => {
		if(correctAnswer === userAnswer){
			setScore(score + 1);
			const nextQuestion = currentQuestion + 1;
			if (nextQuestion < questions.length) {
				setCurrentQuestion(nextQuestion);
			} else {
				setShowScore(true);
			}
		} else{
			alert("Incorrect!")
		}
	};

	const handleSkipRequest = () => {
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

	const refreshPage = () => {
		window.location.reload();
	};

	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
					<button onClick={refreshPage}>Retry!</button>
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						<input className ="answer-field" onChange={event => setAnswer(event.target.value)} />
						<button onClick={() => handleSubmit(questions[currentQuestion].answer)}>Submit</button>
					</div>
					<div buttonSection>
						<button onClick={() => handleSkipRequest()}>Skip</button>
					</div>
				</>
			)}
		</div>
	);
}