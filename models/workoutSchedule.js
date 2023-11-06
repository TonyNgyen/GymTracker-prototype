import {Schema, mongoose} from "mongoose";

const workoutScheduleSchema = new Schema(
    {
        title: String,
        workouts: {},
    },
    {
        timestamps: true,
    }
)

const WorkoutSchedule = mongoose.models.WorkoutSchedule || mongoose.model("WorkoutSchedule", workoutScheduleSchema)

export default WorkoutSchedule