
import { DataTypes, Model } from 'sequelize'
import sequelizeConnection from '../config'

export interface CandidateAttributes {
    _id: string;
    referred_by: string;
    job_protocol_review_state: string;
}

export interface CandidateOuput extends Required<CandidateAttributes> { }


class bubble_candidate extends Model<CandidateAttributes> implements CandidateAttributes {
    public _id!: string;
    public referred_by!: string;
    public job_protocol_review_state!: string;
}


bubble_candidate.init({
    _id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },
    referred_by: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    job_protocol_review_state: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: false,
    sequelize: sequelizeConnection,
    tableName: "bubble_candidate"
});
// values: ['Accepted', 'Rejected', 'Great Fit', 'Not yet reviewed', 'Rejected(duplicate)'

export default bubble_candidate