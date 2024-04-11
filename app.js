// Import required modules
const express = require('express');
const mongoose = require('mongoose');

const Event1  = require('./models/event1.model');
const Event2  = require('./models/event2.model');
const Users  = require('./models/user.model');
const cors = require("cors");
const Capacity=require('./models/capcity.model')

// Create an Express application
const app = express();



app.use(cors())
// Define a route handler for GET requests
app.get('/getnumbers', async (req, res) => {
    try {
        let event1 = 0;
        let event2 = 0;
        let event3 = 0;
        let event4 = 0;
        let event5 = 0;
        const signedInUsers = await Users.find();
        let totalUsers = 0;
        signedInUsers.forEach((user) => {
            if (user.hasFilledDetails) totalUsers++;
        });
        let atleastOneEvent = 0;
        signedInUsers.forEach((user) => {
            if (user.events.length > 0) {
                atleastOneEvent++;
            }
        });
        const event1Count = await Event1.find();
        const event2Count = await Event2.find();
        const users = await Users.find();
        users.forEach((user) => {
            if(user.events.includes(1)){
                event1++;
            }
            if(user.events.includes(2)){
                event2++;
            }
            if (user.events.includes(3)) {
                event3++;
            }
            if (user.events.includes(4)) {
                event4++;
            }
            if (user.events.includes(5)) {
                event5++;
            }
        });

        const data = {
            signedIn: signedInUsers.length,
            totalUsers: totalUsers,
            atLeastOneEvent: atleastOneEvent,
            innoventure: {
                totalParticipants : event1,
                total: event1Count.length,
                one: nMembersTeam(event1Count, 1),
                two: nMembersTeam(event1Count, 2),
                three: nMembersTeam(event1Count, 3),
                four: nMembersTeam(event1Count, 4),
            },
            ideathon: {
                totalParticipants : event2,
                total: event2Count.length,
                one: nMembersTeam(event2Count, 1),
                two: nMembersTeam(event2Count, 2),
                three: nMembersTeam(event2Count, 3),
                four: nMembersTeam(event2Count, 4),
            },
            financial: event3,
            achiever: event4,
            etalk: event5,
        };

        res.status(200).json({ message: "Success", numbers: data });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: `Internal Server Error. ${err.message}` });
    }
});


app.get('/getcapacity', async (req, res) => {
    try {
 
        const cap = await Capacity.find();
        const capObj = cap[0];
        await capObj.save();
        res.status(200).json(
          {
            message: "Capacity fetched successfully.",
            caps: capObj,
          },
         
        );
      } catch (err) {
        console.log(err);
        res.status(500).json(
          { message: `Internal Server Error. ${err.message}` },
    
        );
      }
});




// Function to count teams with n members
function nMembersTeam(event, n) {
    let count = 0;
    event.forEach((team) => {
        if (team.members.length === n) count++;
    });
    return count;
}

module.exports = app;
