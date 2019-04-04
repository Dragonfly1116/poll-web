require('mongoose').connect('mongodb://localhost:27017/Poll');

    const topics = [
        "Should dogs be allowed to fly?",
        "Should doors be shut at night?",
        "Should developers use IDEs?",
        "Should cars have four wheels?",
        "Should humans be allowed to wear shoes?"
    ];
    let Poll = require('../models/Polls');

    // empty the collection first
    Poll.remove({})
        .then(() => {
            let polls = [];
            for (let i = 0; i < 5; i++) {
                polls.push({
                    name: "sth",
                    author: "fuck",
                    content: topics[i],
                    options: [
                        {
                            value: "Yes",
                            vote: [{
                                voter: "5ca516137c039710fcde07b7",
                                comment: "sth"
                            }]
                        },
                        {
                            value: "No",
                            vote: []
                        },
                        {
                            value: "I really don't care",
                            vote: []
                        }
                    ]
                });
            }
            return Poll.create(polls);
        })
        .then(() => {
            process.exit();
        })
        .catch((e) => {
            console.log(e);
            process.exit(1);
        });