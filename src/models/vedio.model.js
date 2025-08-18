import mongoose, { Schema } from "mongoose"

import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"




const vedioSchema = new Schema({
        vedioFile: {
            type: string, //cloudianry url
            required: true
        },
        thumbnail: {
            type: string, //cloudianry url
            required: true
        },
        title: {
            type: string,
            required: true
        },
        desceription: {
            type: string,
            required: true
        },
        duration: {
            type: number,
            required: true
        },
        views: {
            type: number,
            default: 0
        },
        ispublished: {
            typeBoolean,
            default: true
        },
        owwnerfiled: {
            type: Schema.Types.ObjectId,
            ref: "User"

        }
    }, {
        timestamps: true
    }


)

vedioSchema.plugin(mongooseAggregatePaginate)


export const Vedio = mongoose.model("Vedio", vedioSchema)