import { DataTypes, Model, Optional } from 'sequelize'
import sequelizeConnection from '../config'
import bubble_candidate, { CandidateAttributes } from './Candidate';

export interface RecruiterAttributes {
    _id: string;
    auth_email: string;
    first_name: string;
    last_name: string;
    type: string;
    bubble_candidates?: CandidateAttributes[]
}

export interface RecruiterInput extends Optional<RecruiterAttributes, '_id'> { }

export interface RecruiterOuput {
    reputation?: number | undefined;
    recruiter: RecruiterAttributes;
    totalCandidates: number | undefined;
}

class bubble_user extends Model<RecruiterAttributes, RecruiterInput> implements RecruiterAttributes {
    public _id!: string;
    public auth_email!: string;
    public first_name!: string;
    public last_name!: string;
    public type!: string;
}

bubble_user.init({
    _id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    auth_email: {
        type: DataTypes.STRING,
        unique: true
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    type: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    timestamps: false,
    sequelize: sequelizeConnection,
    tableName: "bubble_user"
}).hasMany(bubble_candidate, {
    foreignKey: 'referred_by'
});


export default bubble_user