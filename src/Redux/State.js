const State = {
  profilePage: {
    posts: [
      { post: "it's my first post", like: 1, id: 1 },
      { post: "Hello!", like: 3, id: 2 },
      { post: "Hi how are you?", like: 0, id: 3 },
    ],
},
  dialogsPage: {
    messages: [
      { message: "Hi", id: 1 },
      { message: "Where are you?", id: 2 },
      { message: "Come to me", id: 3 },
    ],
    dialogs: [
      { name: "User 01", id: 1 },
      { name: "User 02", id: 2 },
      { name: "User 03", id: 3 },
      { name: "User 04", id: 4 },
    ],
  },
  sitebarPage: {
    sitebar: [
      { id: 1, name: "Frend 01" },
      { id: 2, name: "Frend 02" },
      { id: 3, name: "Frend 03" }
    ]
  }
}

export default State