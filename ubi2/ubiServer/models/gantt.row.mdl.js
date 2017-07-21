var db = require('./db');

var ganttSchema= new db.Schema({
    name:{type:String,required:true},
    height:{type:String},
    color:{type:String},
    classes:[{type:String}],
    tasks:[{type:db.Schema.Types.ObjectId,ref:'GanttTask'}],
    children:[{type:db.Schema.Types.ObjectId,ref:'GanttRow'}]
});
var autoPop = function(next) {
  this.populate('tasks');
  this.populate('children');
  next();
};

ganttSchema
        .pre('findOne', autoPop)
        .pre('find', autoPop);

var GanttRow=db.model('GanttRow',ganttSchema);


  
module.exports = GanttRow;
        