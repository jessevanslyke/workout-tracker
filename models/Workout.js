const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: Date,
  exercises: { 
      type: [{
    type: { 
        type: String 
    },
    name: { 
        type: String 
    },
    duration: { 
        type: Number 
    },
    weight: { 
        type: Number 
    },
    reps: {
        type: Number
    },
    sets: {
        type: Number
    },
    distance: {
        type: Number
    }
  }]}
},
    {
        toJSON: {
            virtuals: true
      }
    });

WorkoutSchema.virtual("totalDuration").get(function() {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0)
})
const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
