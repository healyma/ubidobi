var db = require('./db')

module.exports=db.model('Event',{
    title:String,
    allDay:Boolean,
    start:Date,
    end:Date,
    url:String,
    className:[String],
    editable:Boolean,
    startEditable:Boolean,
    durationEditable:Boolean,
    resourceEditable:Boolean,
    rendering:String,
    overlap:Boolean,
    color:String,
    backgroundColor:String,
    borderColor:String,
    textColor:String,
    people:{person:{type:db.Schema.Types.ObjectId,ref:'User'},role:String}
})