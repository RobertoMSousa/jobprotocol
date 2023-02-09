import { bubble_user, bubble_candidate } from './models'



const dbInit = () => {
    bubble_user.sync({})
    bubble_candidate.sync({})
}

export default dbInit 