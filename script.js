// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.PostMessage",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "Common Knowledge Task",
    "description": "",
    "repository": "",
    "contributors": "Anton Impolskii"
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "html",
          "content": "\u003Cheader\u003E\r\n  \u003Ch1\u003EДобро пожаловать в заключительный блок исследования!\u003C\u002Fh1\u003E\r\n\u003C\u002Fheader\u003E\r\n\r\n\u003Cmain\u003E\r\n  \u003Cp\u003E\r\n    Напишите свой ID — первую букву имени, первую букву фамилии и сегодняшнюю дату.\u003Cbr\u003E\r\n    Например, если меня зовут Антон Ямпольский и сегодня 4-ое марта,\r\n    мой ID — АЯ0403.\r\n  \u003C\u002Fp\u003E\r\n\u003C\u002Fmain\u003E",
          "name": ""
        },
        {
          "required": true,
          "type": "input",
          "label": "ID",
          "name": "id"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Продолжить →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "ID"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "html",
          "content": "\u003Cheader\u003E\r\n  \u003Ch1\u003EИнструкция. Часть 1.\u003C\u002Fh1\u003E\r\n\u003C\u002Fheader\u003E\r\n\r\n\u003Cmain\u003E\r\n  \u003Cp\u003E\r\n    Сейчас Вам нужно будет ответить на 15 вопросов, к каждому из которых есть два варианта ответа. Пожалуйста, постарайтесь ответить на все вопросы верно. Чтобы выбрать вариант, который Вы посчитаете правильным, просто кликните на него. Вопросы будут крайне простые, но так и задумано. Отвечайте, пожалуйста, серьезно и внимательно, даже если ответы на некоторые из них покажутся Вам слишком очевидными. \r\n  \u003C\u002Fp\u003E\r\n\u003C\u002Fmain\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Продолжить →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Instruction Block 1"
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "question": "Тигр - это какое животное?",
          "answer_left": "Хищник",
          "answer_right": "Травоядное",
          "correct": "Хищник"
        },
        {
          "question": "Сколько дней в неделе?",
          "answer_left": "7",
          "answer_right": "8",
          "correct": "7"
        },
        {
          "question": "Какой город является столицей Российской Федерации?",
          "answer_left": "Москва",
          "answer_right": "Санкт-Петербург",
          "correct": "Москва"
        },
        {
          "question": "У слона есть что?",
          "answer_left": "Хобот",
          "answer_right": "Клюв",
          "correct": "Хобот"
        },
        {
          "question": "Какого цвета снег?",
          "answer_left": "Белый",
          "answer_right": "Черный",
          "correct": "Белый"
        },
        {
          "question": "Что дает корова?",
          "answer_left": "Молоко",
          "answer_right": "Яйца",
          "correct": "Молоко"
        },
        {
          "question": "Сколько часов в сутках?",
          "answer_left": "24",
          "answer_right": "30",
          "correct": "24"
        },
        {
          "question": "Где живут рыбы?",
          "answer_left": "В воде",
          "answer_right": "На суше",
          "correct": "В воде"
        },
        {
          "question": "Что люди обычно делают ночью?",
          "answer_left": "Спят",
          "answer_right": "Обедают",
          "correct": "Спят"
        },
        {
          "question": "Какой день наступает после пятницы?",
          "answer_left": "Суббота",
          "answer_right": "Понедельник",
          "correct": "Суббота"
        },
        {
          "question": "Где растут кокосы?",
          "answer_left": "На пальме",
          "answer_right": "На елке",
          "correct": "На пальме"
        },
        {
          "question": "Каким вкусом обладает лимон?",
          "answer_left": "Кислым",
          "answer_right": "Сладким",
          "correct": "Кислым"
        },
        {
          "question": "По чему ходит поезд?",
          "answer_left": "По рельсам",
          "answer_right": "По асфальту",
          "correct": "По рельсам"
        },
        {
          "question": "Какого цвета становятся листья осенью?",
          "answer_left": "Желтыми",
          "answer_right": "Фиолетовыми",
          "correct": "Желтыми"
        },
        {
          "question": "Какой на вкус сахар?",
          "answer_left": "Сладкий",
          "answer_right": "Соленый",
          "correct": "Сладкий"
        }
      ],
      "sample": {
        "mode": "draw-shuffle",
        "n": ""
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Loop Block 1",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "Sequence Block 1",
        "content": [
          {
            "type": "lab.html.Screen",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {
              "run": function anonymous(
) {
// randomly swap the two buttons
if (Math.random() < 0.5) {

  let left = document.getElementById("leftBtn")
  let right = document.getElementById("rightBtn")

  let temp = left.innerHTML
  left.innerHTML = right.innerHTML
  right.innerHTML = temp

}

// LEFT BUTTON
document.getElementById("leftBtn").onclick = () => {

  let chosen = document.getElementById("leftBtn").innerText

  this.data.response_side = "left"
  this.data.response_answer = chosen
  this.data.correct = (chosen === this.parameters.correct)
  this.end()

}

// RIGHT BUTTON
document.getElementById("rightBtn").onclick = () => {

  let chosen = document.getElementById("rightBtn").innerText

  this.data.response_side = "right"
  this.data.response_answer = chosen
  this.data.correct = (chosen === this.parameters.correct)
  this.end()

}
}
            },
            "title": "Trial Block 1",
            "content": "\u003Cheader\u003E\r\n  \u003Ch2\u003E${ this.parameters.question }\u003C\u002Fh2\u003E\r\n\u003C\u002Fheader\u003E\r\n\r\n\u003Cmain style=\"\r\ndisplay:flex;\r\njustify-content:center;\r\ngap:120px;\r\nmargin-top:80px;\r\n\"\u003E\r\n\r\n\u003Cbutton id=\"leftBtn\"\r\nstyle=\"\r\nwidth:200px;\r\nheight:100px;\r\nfont-size:20px;\r\npadding:10px;\r\nborder-radius:8px;\r\n\"\u003E\r\n${ this.parameters.answer_left }\r\n\u003C\u002Fbutton\u003E\r\n\r\n\u003Cbutton id=\"rightBtn\"\r\nstyle=\"\r\nwidth:200px;\r\nheight:100px;\r\nfont-size:20px;\r\npadding:10px;\r\nborder-radius:8px;\r\n\"\u003E\r\n${ this.parameters.answer_right }\r\n\u003C\u002Fbutton\u003E\r\n\r\n\u003C\u002Fmain\u003E"
          },
          {
            "type": "lab.html.Screen",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "ISI Block 1",
            "timeout": "1000"
          }
        ]
      }
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "previous": "мужчина 25 лет"
        },
        {
          "previous": "мужчина 57 лет"
        },
        {
          "previous": "женщина 25 лет"
        },
        {
          "previous": "женщина 57 лет"
        }
      ],
      "sample": {
        "mode": "draw-shuffle",
        "n": "1"
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Loop Instruction",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "Sequence Instruction",
        "content": [
          {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "html",
                "content": "\u003Cheader\u003E\r\n  \u003Ch1\u003EИнструкция. Часть 2.\u003C\u002Fh1\u003E\r\n\u003C\u002Fheader\u003E\r\n\r\n\u003Cmain\u003E\r\n  \u003Cp\u003E\r\n    Сейчас Вам нужно будет снова ответить на те же 15 вопросов, но на этот раз мы попросим Вас отвечать не от своего лица, а от лица другого человека - предыдущего участника исследования. \u003Cbr\u003E \r\n    В данном случае это: \u003Ckbd\u003E ${ this.parameters.previous } \u003C\u002Fkbd\u003E \u003Cbr\u003E\r\n    Постарайтесь дать на каждый вопрос именно такой ответ, какой, по Вашему мнению, дал этот участник. Вы будете получать обратную связь о правильности Вашего выбора. \u003Cbr\u003E\r\n    Для того, чтобы выбрать тот или иной вариант ответа кликните на него.\r\n  \u003C\u002Fp\u003E\r\n\u003C\u002Fmain\u003E",
                "name": ""
              }
            ],
            "scrollTop": true,
            "submitButtonText": "Продолжить →",
            "submitButtonPosition": "right",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Instruction Block 2"
          }
        ]
      }
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "question": "Тигр - это какое животное?",
          "answer_left": "Хищник",
          "answer_right": "Травоядное",
          "correct": "Травоядное"
        },
        {
          "question": "Сколько дней в неделе?",
          "answer_left": "7",
          "answer_right": "8",
          "correct": "8"
        },
        {
          "question": "Какой город является столицей Российской Федерации?",
          "answer_left": "Москва",
          "answer_right": "Санкт-Петербург",
          "correct": "Санкт-Петербург"
        },
        {
          "question": "У слона есть что?",
          "answer_left": "Хобот",
          "answer_right": "Клюв",
          "correct": "Клюв"
        },
        {
          "question": "Какого цвета снег?",
          "answer_left": "Белый",
          "answer_right": "Черный",
          "correct": "Черный"
        },
        {
          "question": "Что дает корова?",
          "answer_left": "Молоко",
          "answer_right": "Яйца",
          "correct": "Яйца"
        },
        {
          "question": "Сколько часов в сутках?",
          "answer_left": "24",
          "answer_right": "30",
          "correct": "30"
        },
        {
          "question": "Где живут рыбы?",
          "answer_left": "В воде",
          "answer_right": "На суше",
          "correct": "На суше"
        },
        {
          "question": "Что люди обычно делают ночью?",
          "answer_left": "Спят",
          "answer_right": "Обедают",
          "correct": "Обедают"
        },
        {
          "question": "Какой день наступает после пятницы?",
          "answer_left": "Суббота",
          "answer_right": "Понедельник",
          "correct": "Понедельник"
        },
        {
          "question": "Где растут кокосы?",
          "answer_left": "На пальме",
          "answer_right": "На елке",
          "correct": "На елке"
        },
        {
          "question": "Каким вкусом обладает лимон?",
          "answer_left": "Кислым",
          "answer_right": "Сладким",
          "correct": "Сладким"
        },
        {
          "question": "По чему ходит поезд?",
          "answer_left": "По рельсам",
          "answer_right": "По асфальту",
          "correct": "По асфальту"
        },
        {
          "question": "Какого цвета становятся листья осенью?",
          "answer_left": "Желтыми",
          "answer_right": "Фиолетовыми",
          "correct": "Фиолетовыми"
        },
        {
          "question": "Какой на вкус сахар?",
          "answer_left": "Сладкий",
          "answer_right": "Соленый",
          "correct": "Соленый"
        }
      ],
      "sample": {
        "mode": "draw-shuffle",
        "n": ""
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Loop Block 2",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "Sequence Block 2",
        "content": [
          {
            "type": "lab.html.Screen",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {
              "run": function anonymous(
) {
// randomly swap the two buttons
if (Math.random() < 0.5) {

  let left = document.getElementById("leftBtn")
  let right = document.getElementById("rightBtn")

  let temp = left.innerHTML
  left.innerHTML = right.innerHTML
  right.innerHTML = temp

}

// LEFT BUTTON
document.getElementById("leftBtn").onclick = () => {

  let chosen = document.getElementById("leftBtn").innerText

  this.data.response_side = "left"
  this.data.response_answer = chosen
  this.data.correct = (chosen === this.parameters.correct)
  this.end()

}

// RIGHT BUTTON
document.getElementById("rightBtn").onclick = () => {

  let chosen = document.getElementById("rightBtn").innerText

  this.data.response_side = "right"
  this.data.response_answer = chosen
  this.data.correct = (chosen === this.parameters.correct)
  this.end()

}
}
            },
            "title": "Trial Block 2",
            "content": "\u003Cheader\u003E\r\n  \u003Ch2\u003E${ this.parameters.question }\u003C\u002Fh2\u003E\r\n\u003C\u002Fheader\u003E\r\n\r\n\u003Cmain style=\"\r\ndisplay:flex;\r\njustify-content:center;\r\ngap:120px;\r\nmargin-top:80px;\r\n\"\u003E\r\n\r\n\u003Cbutton id=\"leftBtn\"\r\nstyle=\"\r\nwidth:200px;\r\nheight:100px;\r\nfont-size:20px;\r\npadding:10px;\r\nborder-radius:8px;\r\n\"\u003E\r\n${ this.parameters.answer_left }\r\n\u003C\u002Fbutton\u003E\r\n\r\n\u003Cbutton id=\"rightBtn\"\r\nstyle=\"\r\nwidth:200px;\r\nheight:100px;\r\nfont-size:20px;\r\npadding:10px;\r\nborder-radius:8px;\r\n\"\u003E\r\n${ this.parameters.answer_right }\r\n\u003C\u002Fbutton\u003E\r\n\r\n\u003C\u002Fmain\u003E"
          },
          {
            "type": "lab.html.Screen",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "ISI Block 2",
            "timeout": "1000",
            "content": "\u003Cmain style=\"\r\ndisplay:flex;\r\njustify-content:center;\r\ngap:120px;\r\nmargin-top:80px;\r\nfont-size:40px;\r\n\"\u003E\r\n\r\n${ state.correct ? \"Верно!\" : \"Неверно, предыдущий участник ответил иначе\" }\r\n\r\n\u003C\u002Fmain\u003E",
            "tardy": true
          }
        ]
      }
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "html",
          "content": "\u003Cheader\u003E\r\n  \u003Ch1\u003EОтлично, спасибо! Осталось еще одно короткое задание\u003C\u002Fh1\u003E\r\n\u003C\u002Fheader\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Продолжить →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Thanks 1"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "html",
          "content": "\u003Cheader\u003E\r\n\u003Ch1\u003EТест на особенности переработки информации\u003C\u002Fh1\u003E\r\n\u003C\u002Fheader\u003E\r\n\r\n\u003Cmain\u003E\r\n\u003Cp\u003E В этом тесте вам необходимо \u003Cstrong\u003E определить цвет, которым написано слово\u003C\u002Fstrong\u003E.\u003Cbr\u003E Само слово значения не имеет &mdash; вы можете смело его игнорировать. \r\n\u003C\u002Fp\u003E\r\n\u003Cp\u003E\r\nЧтобы дать ответ используйте клавиши \u003Ckbd\u003Eк\u003C\u002Fkbd\u003E, \u003Ckbd\u003Eз\u003C\u002Fkbd\u003E, \u003Ckbd\u003Eс\u003C\u002Fkbd\u003E и \u003Ckbd\u003Eо\u003C\u002Fkbd\u003E для \u003Cspan style=\"color: red;\"\u003Eкрасного\u003C\u002Fspan\u003E,  \u003Cspan style=\"color: green;\"\u003Eзеленого\u003C\u002Fspan\u003E, \u003Cspan style=\"color: blue;\"\u003Eсинего\u003C\u002Fspan\u003E и \u003Cspan style=\"color: orange;\"\u003Eоранжевого\u003C\u002Fspan\u003E, соответственно.\u003Cbr\u003E\r\nСтарайтесь отвечать как можно быстрее и правильнее. \r\n  \u003C\u002Fp\u003E\r\n\u003Cp\u003E \r\n  Пожалуйста, перед тем как продолжить, включите русскую раскладку на клавиатуре. \r\n\u003C\u002Fp\u003E\r\n\u003Cp\u003E \r\nСейчас Вам будет представлена короткая тренировочная версия теста.\r\n\u003C\u002Fp\u003E\r\n\u003C\u002Fmain\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Продолжить →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Instruction Block 3 Training"
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "color": "red",
          "word": "красный"
        },
        {
          "color": "red",
          "word": "зеленый"
        },
        {
          "color": "green",
          "word": "красный"
        },
        {
          "color": "green",
          "word": "зеленый"
        },
        {
          "color": "blue",
          "word": "синий"
        },
        {
          "color": "blue",
          "word": "оранжевый"
        },
        {
          "color": "orange",
          "word": "синий"
        },
        {
          "color": "orange",
          "word": "оранжевый"
        }
      ],
      "sample": {
        "mode": "draw-shuffle"
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Loop Stroop Train",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "Sequence Stroop Train",
        "content": [
          {
            "type": "lab.html.Screen",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross Stroop Train",
            "content": "\u003Cmain class=\"content-vertical-center content-horizontal-center\"\u003E\r\n  \u003Cdiv style=\"font-size: 3.5rem\"\u003E\r\n    +\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003Cfooter class=\"content-vertical-center content-horizontal-center\"\u003E\r\n  \u003Cp\u003E\r\n    Какой \u003Cem\u003Eцвет\u003C\u002Fem\u003E слова? \u003Cbr\u003E\r\n    Пожалуйста, нажмите \u003Ckbd\u003Eк\u003C\u002Fkbd\u003E для красного,\r\n    \u003Ckbd\u003Eз\u003C\u002Fkbd\u003E для зеленого,\r\n    \u003Ckbd\u003Eс\u003C\u002Fkbd\u003E для синего и \u003Ckbd\u003Eо\u003C\u002Fkbd\u003E для оранжевого. \u003Cbr\u003E\r\n    Если клавиши не нажимаются, включите русскую раскладку клавиатуры.\r\n  \u003C\u002Fp\u003E\r\n\u003C\u002Ffooter\u003E",
            "timeout": "500"
          },
          {
            "type": "lab.html.Screen",
            "files": {},
            "responses": {
              "keypress(к)": "red",
              "keypress(з)": "green",
              "keypress(с)": "blue",
              "keypress(о)": "orange"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Trial Stroop Train",
            "content": "\u003Cmain class=\"content-vertical-center content-horizontal-center\"\u003E\r\n  \u003Cdiv style=\"\r\n    font-size: 3.5rem;\r\n    font-weight: bold;\r\n    color: ${ parameters.color };\r\n  \"\u003E\r\n    ${ parameters.word }\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003Cfooter class=\"content-vertical-center content-horizontal-center\"\u003E\r\n  \u003Cp\u003E\r\n    Какой \u003Cem\u003Eцвет\u003C\u002Fem\u003E слова? \u003Cbr\u003E\r\n    Пожалуйста, нажмите \u003Ckbd\u003Eк\u003C\u002Fkbd\u003E для красного,\r\n    \u003Ckbd\u003Eз\u003C\u002Fkbd\u003E для зеленого,\r\n    \u003Ckbd\u003Eс\u003C\u002Fkbd\u003E для синего и \u003Ckbd\u003Eо\u003C\u002Fkbd\u003E для оранжевого. \u003Cbr\u003E\r\n    Если клавиши не нажимаются, включите русскую раскладку клавиатуры.\r\n  \u003C\u002Fp\u003E\r\n\u003C\u002Ffooter\u003E\r\n",
            "correctResponse": "${ parameters.color }"
          },
          {
            "type": "lab.html.Screen",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "ISI Stroop Train",
            "timeout": "500",
            "content": "\u003Cmain\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003Cfooter class=\"content-vertical-center content-horizontal-center\"\u003E\r\n  \u003Cp\u003E\r\n    Какой \u003Cem\u003Eцвет\u003C\u002Fem\u003E слова? \u003Cbr\u003E\r\n    Пожалуйста, нажмите \u003Ckbd\u003Eк\u003C\u002Fkbd\u003E для красного,\r\n    \u003Ckbd\u003Eз\u003C\u002Fkbd\u003E для зеленого,\r\n    \u003Ckbd\u003Eс\u003C\u002Fkbd\u003E для синего и \u003Ckbd\u003Eо\u003C\u002Fkbd\u003E для оранжевого. \u003Cbr\u003E\r\n    Если клавиши не нажимаются, включите русскую раскладку клавиатуры.\r\n  \u003C\u002Fp\u003E\r\n\u003C\u002Ffooter\u003E"
          }
        ]
      }
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "html",
          "content": "\u003Cheader\u003E\r\n\u003Ch1\u003EТест на особенности переработки информации\u003C\u002Fh1\u003E\r\n\u003C\u002Fheader\u003E\r\n\r\n\u003Cmain\u003E\r\n\u003Cp\u003E В этом тесте вам необходимо \u003Cstrong\u003E определить цвет, которым написано слово\u003C\u002Fstrong\u003E.\u003Cbr\u003E Само слово значения не имеет &mdash; вы можете смело его игнорировать. \r\n\u003C\u002Fp\u003E\r\n\u003Cp\u003E\r\nЧтобы дать ответ используйте клавиши \u003Ckbd\u003Eк\u003C\u002Fkbd\u003E, \u003Ckbd\u003Eз\u003C\u002Fkbd\u003E, \u003Ckbd\u003Eс\u003C\u002Fkbd\u003E и \u003Ckbd\u003Eо\u003C\u002Fkbd\u003E для \u003Cspan style=\"color: red;\"\u003Eкрасного\u003C\u002Fspan\u003E,  \u003Cspan style=\"color: green;\"\u003Eзеленого\u003C\u002Fspan\u003E, \u003Cspan style=\"color: blue;\"\u003Eсинего\u003C\u002Fspan\u003E и \u003Cspan style=\"color: orange;\"\u003Eоранжевого\u003C\u002Fspan\u003E, соответственно.\u003Cbr\u003E\r\nСтарайтесь отвечать как можно быстрее и правильнее. \r\n  \u003C\u002Fp\u003E\r\n\u003Cp\u003E \r\n  Пожалуйста, перед тем как продолжить, включите русскую раскладку на клавиатуре. \r\n\u003C\u002Fp\u003E\r\n\u003Cp\u003E \r\nСейчас Вам будет представлена основная версия теста.\r\n\u003C\u002Fp\u003E\r\n\u003C\u002Fmain\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Продолжить →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Instruction Block 3"
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "color": "red",
          "word": "красный"
        },
        {
          "color": "red",
          "word": "красный"
        },
        {
          "color": "red",
          "word": "красный"
        },
        {
          "color": "red",
          "word": "зеленый"
        },
        {
          "color": "red",
          "word": "синий"
        },
        {
          "color": "red",
          "word": "оранжевый"
        },
        {
          "color": "green",
          "word": "красный"
        },
        {
          "color": "green",
          "word": "зеленый"
        },
        {
          "color": "green",
          "word": "зеленый"
        },
        {
          "color": "green",
          "word": "зеленый"
        },
        {
          "color": "green",
          "word": "синий"
        },
        {
          "color": "green",
          "word": "оранжевый"
        },
        {
          "color": "blue",
          "word": "красный"
        },
        {
          "color": "blue",
          "word": "зеленый"
        },
        {
          "color": "blue",
          "word": "синий"
        },
        {
          "color": "blue",
          "word": "синий"
        },
        {
          "color": "blue",
          "word": "синий"
        },
        {
          "color": "blue",
          "word": "оранжевый"
        },
        {
          "color": "orange",
          "word": "красный"
        },
        {
          "color": "orange",
          "word": "зеленый"
        },
        {
          "color": "orange",
          "word": "синий"
        },
        {
          "color": "orange",
          "word": "оранжевый"
        },
        {
          "color": "orange",
          "word": "оранжевый"
        },
        {
          "color": "orange",
          "word": "оранжевый"
        }
      ],
      "sample": {
        "mode": "draw-shuffle"
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Loop Stroop",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "Sequence Stroop",
        "content": [
          {
            "type": "lab.html.Screen",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Fixation cross Stroop",
            "content": "\u003Cmain class=\"content-vertical-center content-horizontal-center\"\u003E\r\n  \u003Cdiv style=\"font-size: 3.5rem\"\u003E\r\n    +\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003Cfooter class=\"content-vertical-center content-horizontal-center\"\u003E\r\n  \u003Cp\u003E\r\n    Какой \u003Cem\u003Eцвет\u003C\u002Fem\u003E слова? \u003Cbr\u003E\r\n    Пожалуйста, нажмите \u003Ckbd\u003Eк\u003C\u002Fkbd\u003E для красного,\r\n    \u003Ckbd\u003Eз\u003C\u002Fkbd\u003E для зеленого,\r\n    \u003Ckbd\u003Eс\u003C\u002Fkbd\u003E для синего и \u003Ckbd\u003Eо\u003C\u002Fkbd\u003E для оранжевого. \u003Cbr\u003E\r\n    Если клавиши не нажимаются, включите русскую раскладку клавиатуры.\r\n  \u003C\u002Fp\u003E\r\n\u003C\u002Ffooter\u003E",
            "timeout": "500"
          },
          {
            "type": "lab.html.Screen",
            "files": {},
            "responses": {
              "keypress(к)": "red",
              "keypress(з)": "green",
              "keypress(с)": "blue",
              "keypress(о)": "orange"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Trial Stroop",
            "content": "\u003Cmain class=\"content-vertical-center content-horizontal-center\"\u003E\r\n  \u003Cdiv style=\"\r\n    font-size: 3.5rem;\r\n    font-weight: bold;\r\n    color: ${ parameters.color };\r\n  \"\u003E\r\n    ${ parameters.word }\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003Cfooter class=\"content-vertical-center content-horizontal-center\"\u003E\r\n  \u003Cp\u003E\r\n    Какой \u003Cem\u003Eцвет\u003C\u002Fem\u003E слова? \u003Cbr\u003E\r\n    Пожалуйста, нажмите \u003Ckbd\u003Eк\u003C\u002Fkbd\u003E для красного,\r\n    \u003Ckbd\u003Eз\u003C\u002Fkbd\u003E для зеленого,\r\n    \u003Ckbd\u003Eс\u003C\u002Fkbd\u003E для синего и \u003Ckbd\u003Eо\u003C\u002Fkbd\u003E для оранжевого. \u003Cbr\u003E\r\n    Если клавиши не нажимаются, включите русскую раскладку клавиатуры.\r\n  \u003C\u002Fp\u003E\r\n\u003C\u002Ffooter\u003E\r\n",
            "correctResponse": "${ parameters.color }"
          },
          {
            "type": "lab.html.Screen",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "ISI Stroop",
            "timeout": "500",
            "content": "\u003Cmain\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003Cfooter class=\"content-vertical-center content-horizontal-center\"\u003E\r\n  \u003Cp\u003E\r\n    Какой \u003Cem\u003Eцвет\u003C\u002Fem\u003E слова? \u003Cbr\u003E\r\n    Пожалуйста, нажмите \u003Ckbd\u003Eк\u003C\u002Fkbd\u003E для красного,\r\n    \u003Ckbd\u003Eз\u003C\u002Fkbd\u003E для зеленого,\r\n    \u003Ckbd\u003Eс\u003C\u002Fkbd\u003E для синего и \u003Ckbd\u003Eо\u003C\u002Fkbd\u003E для оранжевого. \u003Cbr\u003E\r\n    Если клавиши не нажимаются, включите русскую раскладку клавиатуры.\r\n  \u003C\u002Fp\u003E\r\n\u003C\u002Ffooter\u003E"
          }
        ]
      }
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "html",
          "content": "\u003Cheader\u003E\r\n  \u003Ch1\u003EСпасибо за участие!\u003C\u002Fh1\u003E\r\n\u003C\u002Fheader\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Продолжить →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "run": function anonymous(
) {
const rawData = this.options.datastore.exportJson();

// Wrap payload in FormData to avoid CORS preflight
const payload = {
  participant_id: "P-" + Date.now(),
  results: rawData
};

const formData = new FormData();
formData.append("data", JSON.stringify(payload));

fetch("https://script.google.com/macros/s/AKfycbxMHyBndlPpiFB_k_jJVKlcv1P4bFAezbT8u_epjQjFDsULMU74NkSBZcav47ABziwHQQ/exec", {
  method: "POST",
  mode: "no-cors",   // avoids CORS preflight errors
  body: formData
})
.then(() => {
  document.body.innerHTML = `
    <h2>Thank you for participating!</h2>
    <p>Your responses have been recorded.</p>
    <p>You may now close this page.</p>
  `;
})
.catch(() => {
  document.body.innerHTML = `
    <h2>Submission Error</h2>
    <p>Please contact the researcher.</p>
  `;
});
}
      },
      "title": "Thanks 2"
    }
  ]
})

// Let's go!
study.run()