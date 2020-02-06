
import { combineReducers } from 'redux'
import adminreducer from './admin/adminReducer'
import userreducer from './user/userReducer'
import eventreducer from './eventss/eventReducer'
import donationreducer from './donations/donationReducer'


const rootReducer = combineReducers({
  admin: adminreducer,
  event: eventreducer,
  user: userreducer,
  donation: donationreducer, 
  
})

export default rootReducer