import express from 'express'
import bodyParser from 'body-parser'
import multer from 'multer'
import events from 'events'

const upload = multer({ dest: 'uploads/' })

const app = express()

// parse application/json
// app.use(bodyParser.json())

// parse application/x-www-form-urlencoded
// Seems to apply to when you submit a form (has nothing to do with ?data=stuff)
// app.use(bodyParser.urlencoded({ extended: false }))


app.use(express.static('public'))

app.get('/api', (req, res) => {
    res.send('Successful')
})

// const EXPRESS_PORT = 1337
// app.listen(EXPRESS_PORT, () => {
//     console.log(`Listening on port ${EXPRESS_PORT}`)
// })

function testClosuresInLoops() {
    // Changing var to let preserves the value of idx within setTimeout
    // function vs arrow function doesn't matter
    for (var idx = 0; idx < 5; idx++) {
        setTimeout(function () {
            console.log('idx ===', idx)
        }, 0)
        // setTimeout(function (idx) {
        //     console.log('idx ===', idx)
        // }.bind(null, idx), 0)
    }
}
// testClosuresInLoops()

function changeDateFormat(originalDateString) {
    const [origMonth, origDay, origYear] = originalDateString.split('/')
    return [
        origYear,
        origMonth.length === 1 ? `0${origMonth}` : origMonth,
        origDay.length === 1 ? `0${origDay}` : origDay
    ].join('/')
}
// console.log(
//     changeDateFormat("7/18/1989"),
//     changeDateFormat("7/18/1989") === '1989/07/18'
// )


function eventEmitter() {
    function wrapGameAction(emitter, actionName, callback) {
        // Write your code here
        emitter.on(actionName, (data) => {
            try {
                const parsed = JSON.parse(data)
                callback(parsed)
            } catch (ex) {
                callback(undefined)
            }
        })
    }

    let emitter = new events.EventEmitter();
    // wrapGameAction(emitter, "player_1_select", console.log);
    wrapGameAction(emitter, "player_1_select", (data) => {
        console.log(typeof data, data)
    });
    emitter.emit("player_1_select", "{ \"row\": 1, \"column\": 1 }");

    // module.exports.wrapGameAction = wrapGameAction;
}
// eventEmitter()

function runSeq() {
    // Each function in functions, will return a Promise
    async function runSequentially(functions) {
        // Write your code here
        return new Promise((resolve, reject) => {
            const promisesArray = functions.map((fn) => fn())
            console.log('promisesArray', promisesArray)
            // Promise.all(promisesArray)
            Promise.all(promisesArray).then((results) => {
                resolve(results)
            }).catch(() => {
                reject()
            })
        })
    }

    let counter = 1;
    function incrementCounterAsync() {
        return new Promise((resolve, reject) => {
            counter += 1;
            resolve(counter);
        });
    }
    let promise = runSequentially([incrementCounterAsync, incrementCounterAsync]);
    if (promise) {
        promise.then(result => console.log(result))
            .catch(error => console.log("Error: " + error));
    }
    // module.exports.runSequentially = runSequentially;
}
runSeq()