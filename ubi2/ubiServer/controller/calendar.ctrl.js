var Calendar = require('../models/calendar.mdl')
var Event = require('../models/event.mdl')
var User = require('../models/user.mdl')
var router = require('express').Router()
var _ = require('lodash');
var express = require('express');
var wsocket = require('./wsocket');
var app = express()
app.use(require('body-parser').json());

router.get('/auth/calendar', getMyCalendars); //list all of the calendars that I have access to
router.get('/auth/calendar/:calendar', getCalendar); // get events for the specified calendar with a default date range (this calendar month)
router.get('/auth/calendar/:calendar/:start/:end', getCalendar); // get events for the specified calendar with a specified date range for events
router.post('/auth/calendar/event/add', addEvent); // add an event to the specified calendar
function getMyCalendars(req, res, next) {
    //get the list of tasks for the current user
    Calendar.find({users: {$elemMatch: {person: req.user}}}, function (err, calendar) {
                console.log(req.user);
                if (err) {
                    next(err);
                }
                res.send(calendar);
            })
}
function getCalendar(req, res, next) {
    //get the events for the specified calendar
    Calendar.findById(req.params.calendar)
            .populate({path: 'events', model: 'Event'})
            .exec(function (err, task) {
                if (err) {
                    console.log(err);
                    next(err);
                }
                res.send(task);
            })
}

router.post('/auth/calendar', function (req, res, next) {
    var cal = Calendar({
        createdBy: req.user,
        title: req.body.title,
        description: req.body.description,
        status: req.body.status,
        project: req.body.project,
        users: [{role: 'Organiser', person: req.user, accepted: true}],
    });
    cal.save(function (err, result) {
        if (err) {
            console.log(err);
            next(err);
        }
        res.send(result);
    })
});
function addEvent(req, res, next) {
    var event = Event({
        title: req.body.title,
        allDay: req.body.allDay,
        start: req.body.start,
        end: req.body.end,
        url: req.body.url,
        className: req.body.className,
        editable: req.body.editable,
        startEditable: req.body.startEditable,
        durationEditable: req.body.durationEditable,
        resourceEditable: req.body.resourceEditable,
        rendering: req.body.rendering,
        overlap: req.body.overlap,
        color: req.body.color,
        backgroundColor: req.body.backgroundColor,
        borderColor: req.body.borderColor,
        textColor: req.body.textColor,
        people: {person: req.user, role: 'Organiser'}
    })
    event.save(function (err, result) {
        if (err) {
            console.log(err);
            next(err)
        }
        // TODO: need to update each userEvent as well
        Calendar.update(
                {_id: req.body.calendar},
                {$addToSet: {events: event._id}},
                {upsert: true}
        , function (err, gantt) {
            if (err) {
                console.log(err);
                next(err)
            }
            console.log('done')
            res.send(Calendar);
        })
    })
}
module.exports = router;