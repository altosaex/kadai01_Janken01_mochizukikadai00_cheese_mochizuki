
// 音楽を流す
	$(function() {
		var audio = $("#audio").get(0);
		var isPlaying = false;
		$("#btn-gold").on("click", function () {
			if (isPlaying) {
				audio.pause();
			} else {
				audio.play();
			}
		});
		audio.onplaying = function() {
			isPlaying = true;
		};
		audio.onpause = function() {
			isPlaying = false;
		};
	});

	//クイズを作る
	const quiz = [
		{
				questionNumber: '質問1',
				question: '空条承太郎は…',
				answers: [
						'a.５部の主人公である',
						'b.考古学者になる',
						'c.生涯独身である',
						'd.スタンド使いである',
				],
				correct: 'd.スタンド使いである'
		},
		{
				questionNumber: '質問2',
				question: 'トリッシュ・ウナのスタンド名は？',
				answers: [
						'a.スイート・ハニー',
						'b.スパイス・ガール',
						'c.ラブ・デラックス',
						'd.トリッキー・ハート',
				],
				correct: 'b.スパイス・ガール'
		},
		{
				questionNumber: '質問3',
				question: 'DIOが潜伏していた国はどこ？',
				answers: [
						'a.イタリア',
						'b.日本',
						'c.エジプト',
						'd.アメリカ',
				],
				correct: 'c.エジプト'
			},
		]

		let quizCount = 0;
		const quizLength = quiz.length;
		let score = 0;

		const $button = document.querySelectorAll('.answer');
		const buttonLength = $button.length

		const setupQuiz = () => {
				document.getElementById('js-question').textContent = quiz[quizCount].question
				document.getElementById('js-number').textContent = quiz[quizCount].questionNumber
				 
				let buttonCount = 0;

				while (buttonCount < buttonLength) {
						$button[buttonCount].textContent = quiz[quizCount].answers[buttonCount]
						buttonCount++;
				}
		}
		setupQuiz();


		let clickedCount = 0;
		while (clickedCount < buttonLength) {
				$button[clickedCount].addEventListener("click", function () {
						const clickedAnswer = event.currentTarget
						const answerCorrect = document.querySelector('.answer_correct');
						const answerIncorrect = document.querySelector('.answer_incorrect');
						const answerResult = document.querySelector('.answer_result');
						const answerResultText = document.querySelector('.answer_result_text')

						if (quiz[quizCount].correct === clickedAnswer.textContent) {
								answerCorrect.classList.add("active_answer")
								setTimeout (function(){
										answerCorrect.classList.remove("active_answer")
								}, 1000);
								score++;
						}
						else {
								answerIncorrect.classList.add("active_answer")
								setTimeout (function(){
										answerIncorrect.classList.remove("active_answer")
								}, 1000);
						}

						quizCount++;
						if (quizCount < quizLength) {
								setTimeout (function(){
								setupQuiz();
						}, 1000);
						}
						else {
								answerResult.classList.add("active_result")
								answerResultText.textContent = '終了！あなたの正解数は' + score + '/' + quizLength + 'です！'
						}
				});            
				clickedCount++;
		}