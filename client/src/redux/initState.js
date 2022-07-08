const initState = {
  users: {
    currentUser: {},
    interestedUser: {},
  },
  events:{
    selectedEvent: {},
    allEvents: [],
    modalVisibility:false,
    addEventModal: false,
    modalMatchVisibility:false,
    circleEvents: [],
    changeCircleColor: false
    
  },
  modals: {
    chatModalVisible: false,
  },
  error: {
    status: false,
    message: '',
  }
}
export default initState
