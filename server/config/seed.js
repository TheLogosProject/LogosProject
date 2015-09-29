/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

var User = require('../api/user/user.model');
var Gym = require('../api/gym/gym.model');
var Pathway = require('../api/pathway/pathway.model');

// Pathway.find({}).then(function (res) {
//     if (res.length === 0) {
        Pathway.create(
            {
                "pathway": [
                    {
                        "name": "Logos",
                        "completion": {
                            "amount_completed": 0,
                            "total_to_complete": 100,
                            "complete": false
                        },
                        "stages": [
                            {
                                "name": "Fundamentals",
                                "amount_completed": 0,
                                "total_to_complete": 0,
                                "complete": false,
                                "evaluations": [
                                    {
                                        "name": "Press",
                                        "content": {
                                            "video": "https://www.youtube.com/embed/xe19t2_6yis?enablejsapi=1",
                                            "image": "",
                                            "progressions": [
                                                {
                                                    "explanation": "",
                                                    "complete": false
                                                }
                                            ],
                                            "explanation":
                                            "<div>1. Set- up: Take bar from supports or clean to racked position. The bar sits on the shoulders with the grip slightly wider than shoulder width.The elbows are below and in front of bar.Stance is approximately shoulder width.Head is tilted slightly back allowing bar to pass<br> 2. Press: Press the bar to a position directly overhead. <br></div>",
                                            "answer": ""
                                        },
                                        "total_to_complete": 0,
                                        "complete": false,
                                        "needs_approval": true,
                                        "approved_by": "",
                                        "approved_on": "",
                                        "approved": false
                                    },
                                    {
                                        "name": "Push Press",
                                        "content": {
                                            "video": "https://www.youtube.com/embed/X6-DMh-t4nQ?enablejsapi=1",
                                            "image": "",
                                            "progressions": [
                                                {
                                                    "explanation": "",
                                                    "complete": false
                                                }
                                            ],
                                            "explanation":
                                            "<div>1. Set- up: The set- up is the same as the shoulder press. <br>2. Dip: Initiate the dip by bending the hips and knees while keeping the torso upright. The dip will be between 1/5 and 1/4 of a squat in depth. <br>3. Drive: With no pause at the bottom of the dip, the hips and legs are forcefully extended. <br>4. Press: As the hips and legs complete extension the shoulders and arms forcefully press the bar overhead until the arms are fully extended. <br></div>",
                                            "answer": ""
                                        },
                                        "total_to_complete": 0,
                                        "complete": false,
                                        "needs_approval": true,
                                        "approved_by": "",
                                        "approved_on": "",
                                        "approved": false
                                    },
                                    {
                                        "name": "Push Jerk",
                                        "content": {
                                            "video": "https://www.youtube.com/embed/V-hKuAfWNUw?enablejsapi=1",
                                            "image": "",
                                            "progressions": [
                                                {
                                                    "explanation": "",
                                                    "complete": false
                                                }
                                            ],
                                            "explanation":
                                            "<div>1. Set- up: The set- up is the same as for the shoulder press and push press. <br> 2. Dip: The dip is identical to the push press. <br>3. Drive: The drive is identical to the push press. <br>4. Press and Dip: This time instead of just pressing, you press and dip a second time simultaneously, catching the bar in a partial squat with the arms fully extended overhead. <br>5. Finish: Stand or squat to fully erect with bar directly overhead identical to terminal position in push press and shoulder press. <br></div>",
                                            "answer": ""
                                        },
                                        "total_to_complete": 0,
                                        "complete": false,
                                        "needs_approval": true,
                                        "approved_by": "",
                                        "approved_on": "",
                                        "approved": false
                                    },
                                    {
                                        "name": "Deadlift",
                                        "content": {
                                            "video": "https://www.youtube.com/embed/op9kVnSso6Q?enablejsapi=1",
                                            "image": "",
                                            "progressions": [
                                                {
                                                    "explanation": "",
                                                    "complete": false
                                                }
                                            ],
                                            "explanation":
                                            "<div> The deadlift, like the squat, is essential functional movement and carries a potent hormonal punch.This is core training like no other. </div><br><h6>Coaching Points: </h6><br><div>1. Look straight ahead <br>2. Keep back arched <br>3. Arms don't pull, they're just straps <br>4. Bar travels along legs <br>5. Push with the heels <br></div><p>",
                                            "answer": ""
                                        },
                                        "total_to_complete": 0,
                                        "complete": false,
                                        "needs_approval": true,
                                        "approved_by": "",
                                        "approved_on": "",
                                        "approved": false
                                    },
                                    {
                                        "name": "Sumo Deadlift High Pull",
                                        "content": {
                                            "video": "https://www.youtube.com/embed/o6QniJ9FaGA?enablejsapi=1",
                                            "image": "",
                                            "progressions": [
                                                {
                                                    "explanation": "",
                                                    "complete": false
                                                }
                                            ],
                                            "explanation":
                                            "<div> For range of motion, line of action, and length and speed of action, the Sumo Deadlift High Pull is a great conjugate to the Thruster. At low loads this is our favorite substitute for Concept II Rowing. </div><br><h6> Coaching Points: </h6><br><div>1. Start on ground <br>2. Wide, 'Sumo‚ stance<br>3. Take narrow grip on bar <br>4. Look straight ahead <br>5. Keep back arched <br>6. Pull with hips and legs only until both are at full extension <br>7. Flick hip near full extension <br>8. Powerfully shrug <br>9. Immediately pull with arms continuing the bars travel up <br>10. Keep the elbows as far above your hands as possible <br>11. Bring the bar right up under the chin briefly <br>12. Lower to hang <br>13. Lower to ground <br></div>",
                                            "answer": ""
                                        },
                                        "total_to_complete": 0,
                                        "complete": false,
                                        "needs_approval": true,
                                        "approved_by": "",
                                        "approved_on": "",
                                        "approved": false
                                    },
                                    {
                                        "name": "Med Ball Clean",
                                        "content": {
                                            "video": "https://www.youtube.com/embed/o6QniJ9FaGA?enablejsapi=1",
                                            "image": "",
                                            "progressions": [
                                                {
                                                    "explanation": "",
                                                    "complete": false
                                                }
                                            ],
                                            "explanation":
                                            "<div>1. Ball is on the ground, feet are just outside the ball, hands are inside the legs holding the side of the ball. <br>2. Shoulders are just over the ball. <br>3. Back is flat and tight. <br></div><br><h6> Points of performance: </h6><br><div>1. Pull the ball from the ground completely opening the hip with the arms long. <br>2. With a big shrug of the shoulders begin pulling yourself under the ball allowing your hands to rotate around the object. <br>3. Receive the ball at shoulders in a full front squat with the crease of the hip below the knee.  Stand to finish the movement. <br></div>",
                                            "answer": ""
                                        },
                                        "total_to_complete": 0,
                                        "complete": false,
                                        "needs_approval": true,
                                        "approved_by": "",
                                        "approved_on": "",
                                        "approved": false
                                    },
                                    {
                                        "name": "Air Squat",
                                        "content": {
                                            "video": "https://www.youtube.com/embed/C_VtOYc6j5c?enablejsapi=1",
                                            "image": "",
                                            "progressions": [
                                                {
                                                    "explanation": "",
                                                    "complete": false
                                                }
                                            ],
                                            "explanation":
                                            "<div> The squat is essential to human movement, a proven performance enhancer and a gateway movement to the best exercise in strength and conditioning.</div><br><h6>Coaching Points: </h6><br><div>1. Back arched <br>2. Look straight ahead <br>3. Keep weight on heels <br>4. Good depth = below parallel <br>5. Chest high <br>6. Mid section tight <br></div>",
                                            "answer": ""
                                        },
                                        "total_to_complete": 0,
                                        "complete": false,
                                        "needs_approval": true,
                                        "approved_by": "",
                                        "approved_on": "",
                                        "approved": false
                                    },
                                    {
                                        "name": "Overhead Squat",
                                        "content": {
                                            "video": "https://www.youtube.com/embed/RD_vUnqwqqI?enablejsapi=1",
                                            "image": "",
                                            "progressions": [
                                                {
                                                    "explanation": "",
                                                    "complete": false
                                                }
                                            ],
                                            "explanation":
                                            "<div> The overhead squat is an important stretch, perfect for warm ups, integral to the snatch and will expose most functional inflexibility and any mechanical deficiency in your squat. </div><br><h6>Coaching Points: </h6><br><div>1. Grip as wide as needed <br>2. Go slowly <br>3. Head up! <br>4. Stay on heels <br>5. Break parallel <br></div>",
                                            "answer": ""
                                        },
                                        "total_to_complete": 0,
                                        "complete": false,
                                        "needs_approval": true,
                                        "approved_by": "",
                                        "approved_on": "",
                                        "approved": false
                                    },
                                    {
                                        "name": "Front Squat",
                                        "content": {
                                            "video": "https://www.youtube.com/embed/m4ytaCJZpl0?enablejsapi=1",
                                            "image": "",
                                            "progressions": [
                                                {
                                                    "explanation": "",
                                                    "complete": false
                                                }
                                            ],
                                            "explanation":
                                            "<div> The hardest part of the front squat may be the 'racked position'. Practice until your wrists are OK with it.Handstands help. This one will force shoulder and wrist flexibility.  </div><br><h6>Coaching Points: </h6><br><div>1. Bar rests on chest and shoulders with loose grip‚ 'racked' <br>2. Mechanics like other squats <br></div>",
                                            "answer": ""
                                        },
                                        "total_to_complete": 0,
                                        "complete": false,
                                        "needs_approval": true,
                                        "approved_by": "",
                                        "approved_on": "",
                                        "approved": false
                                    }
                                ]
                            },
                            {
                                "name": "Knowledge",
                                "amount_completed": 0,
                                "total_to_complete": 0,
                                "complete": false,
                                "evaluations": [
                                    {
                                        "name": "Question 1",
                                        "content": {
                                            "video": "",
                                            "image": "",
                                            "progressions": [
                                                {
                                                    "explanation": "",
                                                    "complete": false
                                                }
                                            ],
                                            "explanation": "What is CrossFit?",
                                            "answer": ""
                                        },
                                        "total_to_complete": 0,
                                        "complete": false,
                                        "needs_approval": true,
                                        "approved_by": "",
                                        "approved_on": "",
                                        "approved": false
                                    },
                                    {
                                        "name": "Question 2",
                                        "content": {
                                            "video": "",
                                            "image": "",
                                            "progressions": [
                                                {
                                                    "explanation": "",
                                                    "complete": false
                                                }
                                            ],
                                            "explanation": "What is the Hopper model?",
                                            "answer": ""
                                        },
                                        "total_to_complete": 0,
                                        "complete": false,
                                        "needs_approval": true,
                                        "approved_by": "",
                                        "approved_on": "",
                                        "approved": false
                                    },
                                    {
                                        "name": "Question 3",
                                        "content": {
                                            "video": "",
                                            "image": "",
                                            "progressions": [
                                                {
                                                    "explanation": "",
                                                    "complete": false
                                                }
                                            ],
                                            "explanation": "What is the Health/Wellness model?",
                                            "answer": ""
                                        },
                                        "total_to_complete": 0,
                                        "complete": false,
                                        "needs_approval": true,
                                        "approved_by": "",
                                        "approved_on": "",
                                        "approved": false
                                    },
                                    {
                                        "name": "Question 4",
                                        "content": {
                                            "video": "",
                                            "image": "",
                                            "progressions": [
                                                {
                                                    "explanation": "",
                                                    "complete": false
                                                }
                                            ],
                                            "explanation": "What are the 10 CrossFit attributes?",
                                            "answer": ""
                                        },
                                        "total_to_complete": 0,
                                        "complete": false,
                                        "needs_approval": true,
                                        "approved_by": "",
                                        "approved_on": "",
                                        "approved": false
                                    }
                                ]
                            },
                            {
                                "name": "Physical",
                                "amount_completed": 0,
                                "total_to_complete": 0,
                                "complete": false,
                                "evaluations": [
                                    {
                                        "name": "Hold a 2 min plank",
                                        "content": {
                                            "video": "",
                                            "image": "",
                                            "progressions": [
                                                {
                                                    "explanation": "Perform 3 x 30 sec planks",
                                                    "complete": false
                                                },
                                                {
                                                    "explanation": "Perform 2 x 1 min planks",
                                                    "complete": false
                                                },
                                                {
                                                    "explanation": "Perform 50 shoulder touches in plank",
                                                    "complete": false
                                                }
                                            ],
                                            "explanation": "",
                                            "answer": ""
                                        },
                                        "total_to_complete": 0,
                                        "complete": false,
                                        "needs_approval": false,
                                        "approved_by": "",
                                        "approved_on": "",
                                        "approved": false
                                    },
                                    {
                                        "name": "Complete 15 push ups in 45 sec",
                                        "content": {
                                            "video": "",
                                            "image": "",
                                            "progressions": [
                                                {
                                                    "explanation": "Perform 20 green band push ups",
                                                    "complete": false
                                                },
                                                {
                                                    "explanation": "2 x 15 blue band push ups",
                                                    "complete": false
                                                },
                                                {
                                                    "explanation": "25 red band push ups in 1 min 15 sec",
                                                    "complete": false
                                                }
                                            ],
                                            "explanation": "",
                                            "answer": ""
                                        },
                                        "total_to_complete": 0,
                                        "complete": false,
                                        "needs_approval": false,
                                        "approved_by": "",
                                        "approved_on": "",
                                        "approved": false
                                    },
                                    {
                                        "name": "Complete 15 pull ups in 1 min",
                                        "content": {
                                            "video": "",
                                            "image": "",
                                            "progressions": [
                                                {
                                                    "explanation": "2 x 20 green band pull ups",
                                                    "complete": false
                                                },
                                                {
                                                    "explanation": "2 x 20 blue band pull ups",
                                                    "complete": false
                                                },
                                                {
                                                    "explanation": "2 x 20 red band pull ups",
                                                    "complete": false
                                                }
                                            ],
                                            "explanation": "",
                                            "answer": ""
                                        },
                                        "total_to_complete": 0,
                                        "complete": false,
                                        "needs_approval": false,
                                        "approved_by": "",
                                        "approved_on": "",
                                        "approved": false
                                    },
                                    {
                                        "name": "Complete 30 air squats in 1 min 15 sec",
                                        "content": {
                                            "video": "",
                                            "image": "",
                                            "progressions": [
                                                {
                                                    "explanation": "Perform 30 air squats for time",
                                                    "complete": false
                                                },
                                                {
                                                    "explanation": "2 x 30 sec max air squats",
                                                    "complete": false
                                                },
                                                {
                                                    "explanation": "2 x 45 sec max air squats",
                                                    "complete": false
                                                }
                                            ],
                                            "explanation": "",
                                            "answer": ""
                                        },
                                        "total_to_complete": 0,
                                        "complete": false,
                                        "needs_approval": false,
                                        "approved_by": "",
                                        "approved_on": "",
                                        "approved": false
                                    },
                                    {
                                        "name": "Complete 2 rounds of Cindy unbroken",
                                        "content": {
                                            "video": "",
                                            "image": "",
                                            "progressions": [
                                                {
                                                    "explanation": "Complete 2 rounds of Cindy unbroken",
                                                    "complete": false
                                                },
                                                {
                                                    "explanation": "Perform 20 pull ups and 20 push ups",
                                                    "complete": false
                                                },
                                                {
                                                    "explanation": "Perform 30 unbroken air squats",
                                                    "complete": false
                                                }
                                            ],
                                            "explanation": "",
                                            "answer": ""
                                        },
                                        "total_to_complete": 0,
                                        "complete": false,
                                        "needs_approval": false,
                                        "approved_by": "",
                                        "approved_on": "",
                                        "approved": false
                                    },
                                    {
                                        "name": "Row 1000m unbroken",
                                        "content": {
                                            "video": "",
                                            "image": "",
                                            "progressions": [
                                                {
                                                    "explanation": "Row 250m for time",
                                                    "complete": false
                                                },
                                                {
                                                    "explanation": "Row 2 x 250m for time",
                                                    "complete": false
                                                },
                                                {
                                                    "explanation": "Row 2 x 500m for time",
                                                    "complete": false
                                                }
                                            ],
                                            "explanation": "",
                                            "answer": ""
                                        },
                                        "total_to_complete": 0,
                                        "complete": false,
                                        "needs_approval": false,
                                        "approved_by": "",
                                        "approved_on": "",
                                        "approved": false
                                    },
                                    {
                                        "name": "Run 800m unbroken",
                                        "content": {
                                            "video": "",
                                            "image": "",
                                            "progressions": [
                                                {
                                                    "explanation": "Run 3 x 200m",
                                                    "complete": false
                                                },
                                                {
                                                    "explanation": "Run 400m",
                                                    "complete": false
                                                },
                                                {
                                                    "explanation": "Run 4 x 200m with 30 sec rest in between",
                                                    "complete": false
                                                }
                                            ],
                                            "explanation": "",
                                            "answer": ""
                                        },
                                        "total_to_complete": 0,
                                        "complete": false,
                                        "needs_approval": false,
                                        "approved_by": "",
                                        "approved_on": "",
                                        "approved": false
                                    },
                                    {
                                        "name": "30 KB swings unbroken 53/35",
                                        "content": {
                                            "video": "",
                                            "image": "",
                                            "progressions": [
                                                {
                                                    "explanation": "Do 15 KB swings unbroken",
                                                    "complete": false
                                                },
                                                {
                                                    "explanation": "Do as many as you can in 45 sec",
                                                    "complete": false
                                                },
                                                {
                                                    "explanation": "Do 50 KB swings for time",
                                                    "complete": false
                                                }
                                            ],
                                            "explanation": "",
                                            "answer": ""
                                        },
                                        "total_to_complete": 0,
                                        "complete": false,
                                        "needs_approval": false,
                                        "approved_by": "",
                                        "approved_on": "",
                                        "approved": false
                                    },
                                    {
                                        "name": "Perform 5 rebounding box jumps 24/20",
                                        "content": {
                                            "video": "",
                                            "image": "",
                                            "progressions": [
                                                {
                                                    "explanation": "Do 5 box jumps at 20/12",
                                                    "complete": false
                                                },
                                                {
                                                    "explanation": "Do 10 box jumps to step down 24/20",
                                                    "complete": false
                                                },
                                                {
                                                    "explanation": "Do 2 rebounding box jumps 24/20",
                                                    "complete": false
                                                }
                                            ],
                                            "explanation": "",
                                            "answer": ""
                                        },
                                        "total_to_complete": 0,
                                        "complete": false,
                                        "needs_approval": false,
                                        "approved_by": "",
                                        "approved_on": "",
                                        "approved": false
                                    },
                                    {
                                        "name": "Perform 30 burpees in 2 min 30 sec",
                                        "content": {
                                            "video": "",
                                            "image": "",
                                            "progressions": [
                                                {
                                                    "explanation": "Do 10 burpees unbroken",
                                                    "complete": false
                                                },
                                                {
                                                    "explanation": "Do 15 burpees unbroken",
                                                    "complete": false
                                                },
                                                {
                                                    "explanation": "2 x 10 unbroken burpees with 15 sec rest",
                                                    "complete": false
                                                }
                                            ],
                                            "explanation": "",
                                            "answer": ""
                                        },
                                        "total_to_complete": 0,
                                        "complete": false,
                                        "needs_approval": false,
                                        "approved_by": "",
                                        "approved_on": "",
                                        "approved": false
                                    },
                                    {
                                        "name": "Perform 50 unbroken sit ups",
                                        "content": {
                                            "video": "",
                                            "image": "",
                                            "progressions": [
                                                {
                                                    "explanation": "25 unbroken sit ups",
                                                    "complete": false
                                                },
                                                {
                                                    "explanation": "2 x 20 sit ups 30 sec in between",
                                                    "complete": false
                                                },
                                                {
                                                    "explanation": "60 sit ups for time",
                                                    "complete": false
                                                }
                                            ],
                                            "explanation": "",
                                            "answer": ""
                                        },
                                        "total_to_complete": 0,
                                        "complete": false,
                                        "needs_approval": false,
                                        "approved_by": "",
                                        "approved_on": "",
                                        "approved": false
                                    },
                                    {
                                        "name": "Perform 1 min bar hang",
                                        "content": {
                                            "video": "",
                                            "image": "",
                                            "progressions": [
                                                {
                                                    "explanation": "5 x 15 second bar hangs",
                                                    "complete": false
                                                },
                                                {
                                                    "explanation": "30 second bar hang",
                                                    "complete": false
                                                },
                                                {
                                                    "explanation": "2 x 30 second bar hang w/ 20 second rest",
                                                    "complete": false
                                                }
                                            ],
                                            "explanation": "",
                                            "answer": ""
                                        },
                                        "total_to_complete": 0,
                                        "complete": false,
                                        "needs_approval": false,
                                        "approved_by": "",
                                        "approved_on": "",
                                        "approved": false
                                    },
                                    {
                                        "name": "Complete 1 wall walk",
                                        "content": {
                                            "video": "",
                                            "image": "",
                                            "progressions": [
                                                {
                                                    "explanation": "Complete 1 min plank",
                                                    "complete": false
                                                },
                                                {
                                                    "explanation": "Complete 2 x 30 shoulder touch in plank",
                                                    "complete": false
                                                },
                                                {
                                                    "explanation": "Complete bar walk with 20 shoulder touches",
                                                    "complete": false
                                                }
                                            ],
                                            "explanation": "",
                                            "answer": ""
                                        },
                                        "total_to_complete": 0,
                                        "complete": false,
                                        "needs_approval": false,
                                        "approved_by": "",
                                        "approved_on": "",
                                        "approved": false
                                    },
                                    {
                                        "name": "Complete 30 wall ball shots in 1 min",
                                        "content": {
                                            "video": "",
                                            "image": "",
                                            "progressions": [
                                                {
                                                    "explanation": "30 wall balls for time",
                                                    "complete": false
                                                },
                                                {
                                                    "explanation": "2 x 10 wall balls unbroken",
                                                    "complete": false
                                                },
                                                {
                                                    "explanation": "2 x 15 w/ 40 second rest",
                                                    "complete": false
                                                }
                                            ],
                                            "explanation": "",
                                            "answer": ""
                                        },
                                        "total_to_complete": 0,
                                        "complete": false,
                                        "needs_approval": false,
                                        "approved_by": "",
                                        "approved_on": "",
                                        "approved": false
                                    },
                                    {
                                        "name": "Complete 400m run in 2 min",
                                        "content": {
                                            "video": "",
                                            "image": "",
                                            "progressions": [
                                                {
                                                    "explanation": "Complete 400m unbroken for time",
                                                    "complete": false
                                                },
                                                {
                                                    "explanation": "2 x 200m in less than 1 min",
                                                    "complete": false
                                                },
                                                {
                                                    "explanation": "4 x 200m with 30 sec rest",
                                                    "complete": false
                                                }
                                            ],
                                            "explanation": "",
                                            "answer": ""
                                        },
                                        "total_to_complete": 0,
                                        "complete": false,
                                        "needs_approval": false,
                                        "approved_by": "",
                                        "approved_on": "",
                                        "approved": false
                                    },
                                    {
                                        "name": "Complete 15 med ball cleans unbroken",
                                        "content": {
                                            "video": "",
                                            "image": "",
                                            "progressions": [
                                                {
                                                    "explanation": "15 med ball deadlifts touch and go",
                                                    "complete": false
                                                },
                                                {
                                                    "explanation": "15 med ball high pulls touch and go",
                                                    "complete": false
                                                },
                                                {
                                                    "explanation": "15 med ball balance unbroken",
                                                    "complete": false
                                                }
                                            ],
                                            "explanation": "",
                                            "answer": ""
                                        },
                                        "total_to_complete": 0,
                                        "complete": false,
                                        "needs_approval": false,
                                        "approved_by": "",
                                        "approved_on": "",
                                        "approved": false
                                    },
                                    {
                                        "name": "Hold hollow body for 1 min",
                                        "content": {
                                            "video": "",
                                            "image": "",
                                            "progressions": [
                                                {
                                                    "explanation": "4 x 15 sec hollow body holds",
                                                    "complete": false
                                                },
                                                {
                                                    "explanation": "40 hollow body reps",
                                                    "complete": false
                                                },
                                                {
                                                    "explanation": "3 x 30 hollow body reps",
                                                    "complete": false
                                                }
                                            ],
                                            "explanation": "",
                                            "answer": ""
                                        },
                                        "total_to_complete": 0,
                                        "complete": false,
                                        "needs_approval": false,
                                        "approved_by": "",
                                        "approved_on": "",
                                        "approved": false
                                    },
                                    {
                                        "name": "Perform 5 knee to elbows unbroken",
                                        "content": {
                                            "video": "",
                                            "image": "",
                                            "progressions": [
                                                {
                                                    "explanation": "Complete knee to elbow",
                                                    "complete": false
                                                },
                                                {
                                                    "explanation": "Perform 15 sec knees up hold",
                                                    "complete": false
                                                },
                                                {
                                                    "explanation": "Complete 3 x 20 knees up hold",
                                                    "complete": false
                                                }
                                            ],
                                            "explanation": "",
                                            "answer": ""
                                        },
                                        "total_to_complete": 0,
                                        "complete": false,
                                        "needs_approval": false,
                                        "approved_by": "",
                                        "approved_on": "",
                                        "approved": false
                                    },
                                    {
                                        "name": "30 overhead squat with PVC pipe in 1 min 15 sec",
                                        "content": {
                                            "video": "",
                                            "image": "",
                                            "progressions": [
                                                {
                                                    "explanation": "Complete 15 overhead squat unbroken",
                                                    "complete": false
                                                },
                                                {
                                                    "explanation": "Complete 30 sec hold in bottom of overhead squat",
                                                    "complete": false
                                                },
                                                {
                                                    "explanation": "Complete 30 overhead lunges",
                                                    "complete": false
                                                }
                                            ],
                                            "explanation": "",
                                            "answer": ""
                                        },
                                        "total_to_complete": 0,
                                        "complete": false,
                                        "needs_approval": false,
                                        "approved_by": "",
                                        "approved_on": "",
                                        "approved": false
                                    },
                                    {
                                        "name": "Complete 25 sumo deadlift high pull 1 min 53/35 pounds",
                                        "content": {
                                            "video": "",
                                            "image": "",
                                            "progressions": [
                                                {
                                                    "explanation": "Do 25 sumo deadlift unbroken",
                                                    "complete": false
                                                },
                                                {
                                                    "explanation": "Do 10 sumo deadlift high pull in 30 sec",
                                                    "complete": false
                                                },
                                                {
                                                    "explanation": "Do 18 sumo deadlift high pull in 30 sec",
                                                    "complete": false
                                                }
                                            ],
                                            "explanation": "",
                                            "answer": ""
                                        },
                                        "total_to_complete": 0,
                                        "complete": false,
                                        "needs_approval": false,
                                        "approved_by": "",
                                        "approved_on": "",
                                        "approved": false
                                    },
                                    {
                                        "name": "40 Russian twists unbroken 20/14",
                                        "content": {
                                            "video": "",
                                            "image": "",
                                            "progressions": [
                                                {
                                                    "explanation": "30 second hold w/ feet up",
                                                    "complete": false
                                                },
                                                {
                                                    "explanation": "2 x 20 Russian twists with 15 sec rest",
                                                    "complete": false
                                                },
                                                {
                                                    "explanation": "60 second hold with feet up",
                                                    "complete": false
                                                }
                                            ],
                                            "explanation": "",
                                            "answer": ""
                                        },
                                        "total_to_complete": 0,
                                        "complete": false,
                                        "needs_approval": false,
                                        "approved_by": "",
                                        "approved_on": "",
                                        "approved": false
                                    },
                                    {
                                        "name": "Complete 1 min handstand hold",
                                        "content": {
                                            "video": "",
                                            "image": "",
                                            "progressions": [
                                                {
                                                    "explanation": "Complete 4 x 15 sec handstand hold",
                                                    "complete": false
                                                },
                                                {
                                                    "explanation": "Complete 3 wall walks",
                                                    "complete": false
                                                },
                                                {
                                                    "explanation": "Complete 3 x 30 second handstand holds",
                                                    "complete": false
                                                }
                                            ],
                                            "explanation": "",
                                            "answer": ""
                                        },
                                        "total_to_complete": 0,
                                        "complete": false,
                                        "needs_approval": false,
                                        "approved_by": "",
                                        "approved_on": "",
                                        "approved": false
                                    },
                                    {
                                        "name": "Complete 100 burpees in 15 min",
                                        "content": {
                                            "video": "",
                                            "image": "",
                                            "progressions": [
                                                {
                                                    "explanation": "Do 50 burpees for time",
                                                    "complete": false
                                                },
                                                {
                                                    "explanation": "Do 2 x 25 burpees with 1 min rest",
                                                    "complete": false
                                                },
                                                {
                                                    "explanation": "Do EMOM 10 burpees for 6 min",
                                                    "complete": false
                                                }
                                            ],
                                            "explanation": "",
                                            "answer": ""
                                        },
                                        "total_to_complete": 0,
                                        "complete": false,
                                        "needs_approval": false,
                                        "approved_by": "",
                                        "approved_on": "",
                                        "approved": false
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }

            ).then(function (res) {
                Pathway.find({})
                    .exec(function (err, response) {
                        var newGymObj = {
                            "name": "Generator CrossFit"
                        };
                        newGymObj.gym_pathway_program = response[0].pathway;
                        Gym.create(newGymObj).then(function (res) {
                            Gym.findById(res._id)
                                .exec(function (err, response) {
                                    var newUserObj = {
                                        "name": {
                                            "first": "Chaco",
                                            "last": "Taco"
                                        },
                                        "email": "test@test.com",
                                        "password": "abc",
                                        "provider": "local",
                                        "is_admin": false,
                                        "is_master": true
                                    };
                                    newUserObj.gym = response._id;
                                    User.create(newUserObj).then(function (res) {
                                        var userID = res._id;
                                        User.findById(userID)
                                            .populate('gym')
                                            .exec(function (err, response) {
                                                var newUserObj = response;
                                                Gym.findById(response.gym._id)
                                                    .exec(function (err, response) {
                                                        var pathwayCount = response.gym_pathway_program;
                                                        for (var i = 0; i < pathwayCount.length; i++) {
                                                            var stagesCount = pathwayCount[i]["stages"];
                                                            var stagesLength = stagesCount.length;
                                                            var x = 0;
                                                            while (x < stagesLength) {
                                                                stagesCount[x]["total_to_complete"] = 100 / stagesLength;
                                                                var stagesValue = stagesCount[x]["total_to_complete"];
                                                                var evaluationCount = stagesCount[x]["evaluations"];
                                                                var evaluationLength = evaluationCount.length;
                                                                var y = 0;
                                                                while (y < evaluationLength) {
                                                                    evaluationCount[y]["total_to_complete"] = stagesValue / evaluationLength;
                                                                    y++;
                                                                }
                                                                x++;
                                                            }
                                                        }
                                                        var userPathways = [];
                                                        for (var y = 0; y < pathwayCount.length; y++) {
                                                            userPathways.push(pathwayCount[y]);
                                                        }
                                                        newUserObj.pathways = userPathways;
                                                        User.findByIdAndUpdate(userID, newUserObj)
                                                            .exec(function (err, response) {
                                                                Gym.findById(response.gym)
                                                                    .exec(function (err, response) {
                                                                        var newMemberToGym = [];
                                                                        newMemberToGym.push(userID);
                                                                        var newGymObj = {
                                                                            "members": newMemberToGym
                                                                        };
                                                                        Gym.findByIdAndUpdate(response._id, newGymObj);
                                                                    });
                                                            });
                                                    });
                                            });
                                    });
                                });
                        });
                    });

            });
//     }
// });
