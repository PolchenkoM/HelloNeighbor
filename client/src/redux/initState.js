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
    circleEvents: []
    
  },
  modals: {
    chatModalVisible: false,
  },
}
export default initState
