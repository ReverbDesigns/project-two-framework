import {
    CHAT_USER, ACTIVE_USER,FULL_USER, ADD_LOGGED_USER, CREATE_GROUP
} from './constants';


//Import Images
import avatar1 from "../../assets/images/users/avatar-1.jpg";
import avatar2 from "../../assets/images/users/avatar-2.jpg";
import avatar4 from "../../assets/images/users/avatar-4.jpg";
import avatar3 from "../../assets/images/users/avatar-3.jpg";
import avatar6 from "../../assets/images/users/avatar-6.jpg";
import avatar7 from "../../assets/images/users/avatar-7.jpg";
import avatar5 from "../../assets/images/users/avatar-5.jpg";
import img6 from "../../assets/images/small/img-6.jpg";
import img4 from "../../assets/images/small/img-4.jpg";
import img7 from "../../assets/images/small/img-7.jpg";

const INIT_STATE = {
	active_user : 3,
    users: [
        //admin is sender and user in receiver
        { id : 1, name : "Jordan Bell", profilePicture : avatar1, status : "online", unRead : 0, roomType : "contact", isGroup: false, 
            messages: [
                { id: 1, message: "Hey! What's up?", time: "01:05", userType: "receiver", isImageMessage : false, isFileMessage : false },
                { id: 2, message: "Hi Jordan", time: "10.00", userType: "sender", isImageMessage : false, isFileMessage : false },
                { id: 3, message: "Do android take elctric dumps?", time: "01:05", userType: "receiver", isImageMessage : false, isFileMessage : false },
                { id: 4, message: "This team is awesome!", time: "01:06", userType: "receiver", isImageMessage : false, isFileMessage : false },
                { id : 33, isToday : true },
                { id: 5, message: "Something Political!", time: "01:06", userType: "receiver", isImageMessage : false, isFileMessage : false },
                { id: 6, message: "Something Else Political!", time: "09:05", userType: "sender", isImageMessage : false, isFileMessage : false },
                { id: 7, message: "image", time: "10:30", userType: "receiver", isImageMessage : true, isFileMessage : false, imageMessage : [ { image : img4 }, { image : img7 } ] },
                { id: 8, message: "Check out this meme", time: "10:31", userType: "receiver", isImageMessage : false, isFileMessage : false },
                { id: 9, message: "okay sure😄👍", time: "02:50", userType: "sender", isImageMessage : false, isFileMessage : false },
        ] },
        { id : 2, name : "Andrew Segre", profilePicture : avatar6, status : "away",unRead : 2, isGroup: false,
            messages: [
                { id : 33, isToday : true },
                { id: 1, message: "hello", time: "10.00", userType: "sender", isImageMessage : false, isFileMessage : false },
                { id: 2, message: "images", time: "10:30", userType: "receiver", isImageMessage : true, isFileMessage : false, imageMessage : [ { image : img4 }, { image : img7 } ] },
            ]  },
        { id : 3, name : "Kojin Glick", profilePicture : avatar5, unRead : 0, isGroup: true,
            messages: [
                { id : 33, isToday : true },
                { id : 1, userName : "ReadyPlayerOne",  message: "Yo", time: "12:00", userType: "receiver", isImageMessage : false, isFileMessage : false },
                { id : 2, userName : "Segre",  message: "Images", time: "12:05", userType: "receiver", isImageMessage : true, isFileMessage : false, imageMessage : [ { image : img6 } ] },
                { id : 3, userName : "Glick",  message: "Good Afternoon everyone !", time: "2:05", userType: "sender", isImageMessage : false, isFileMessage : false },
                { id : 4, userName : "Bauer",  message: "This team is Awesome!", time: "2:06", userType: "receiver", isImageMessage : false, isFileMessage : false },
            ]  },

        { id : 4, name : "Allie Bauer", profilePicture : avatar4, status : "online",unRead : 0, isGroup: false, isTyping : true,
            messages: [
                { id : 1, userName : "ReadyPlayerOne",  message: "Good Morning", time: "10:00", userType: "receiver", isImageMessage : false, isFileMessage : false },
                { id : 2, userName : "Segre",  message: "Good morning, How are you? Why don't we just use facebook..?", time: "10:02", userType: "sender", isImageMessage : false, isFileMessage : false },
                { id : 33, isToday : true },
                { id: 3, message: "I'm Bored", time: "10:05", userType: "receiver", isImageMessage : false, isFileMessage : false },
                { id: 4, message: "Bee's can smell feare", time: "10:05", userType: "receiver", isImageMessage : false, isFileMessage : false },
                { id: 5, message: "Wow that's great", time: "10:06", userType: "sender", isImageMessage : false, isFileMessage : false },
                { id: 6, message: "images", time: "10:30", userType: "receiver", isImageMessage : true, isFileMessage : false, imageMessage : [ { image : img4 }, { image : img7 } ] },
                { id: 7, userName : "ReadyPlayerOne",  message: "Files", time: "01:30", userType: "sender", isImageMessage : false, isFileMessage : true, fileMessage: "admin_v1.0.zip", size : "12.5 MB" },
                { id: 8, message: "", time: "10:05", userType: "receiver", isImageMessage : false, isFileMessage : false, isTyping : true },
            ]  },
        { id : 5, name : "User 5", profilePicture : "Null",unRead : 1,  isGroup: true,
            messages: [
                { id : 1, userName : "Bauer",  message: "Hello send some images", time: "12:00", userType: "receiver", isImageMessage : false, isFileMessage : false },
                { id : 33, isToday : true },
                { id : 2, userName : "glick",  message: "Images", time: "12:05", userType: "receiver", isImageMessage : true, isFileMessage : false, imageMessage : [ { image : img6 } ] },
                { id : 3, userName : "segre",  message: "Images", time: "01:30", userType: "sender", isImageMessage : false, isFileMessage : true, fileMessage: "Minible-Vertical.zip" },
                { id : 4, userName : "segre", message: "@ReadyPlayerOne please review this code, and give me feedback asap", time: "01:31", userType: "sender", isImageMessage : false, isFileMessage : false },
                { id : 5, userName : "User 7",  message: "Good Afternoon everyone !", time: "2:00", userType: "receiver", isImageMessage : false, isFileMessage : false },
                { id : 6, userName : "ReadyPlayerOne",  message: "Good Afternoon everyone !", time: "2:05", userType: "sender", isImageMessage : false, isFileMessage : false },
                { id : 9, userName : "User 8",  message: "I don't really exist", time: "2:10", userType: "receiver", isImageMessage : false, isFileMessage : false },
            ]  },

        { id : 6, name : "User 6", profilePicture : avatar6, status : "away", unRead : 0,  isGroup: false,
            messages: [
                { id : 33, isToday : true },
                { id : 1, message : "file", time : "01:16", userType : "receiver", isImageMessage : false, isFileMessage : true, fileMessage: "Minible-Vertical.zip" },
                { id : 2, message : "Okay 👍, let me check it and get back to you soon", time : "01:16", userType : "sender", isImageMessage : false, isFileMessage : false }
            ]  },

        { id : 7, name : "User 7", profilePicture : "Null", status : "online", unRead : 0, isGroup: false, isTyping : true,
            messages: [
                { id : 33, isToday : true },
                { id: 1, message: "hi", time: "01:05", userType: "receiver", isImageMessage : false, isFileMessage : false },
                { id: 2, message: "Message", time: "01:05", userType: "sender", isImageMessage : false, isFileMessage : false },
                { id: 3, message: "", time: "01:05", userType: "receiver", isImageMessage : false, isFileMessage : false, isTyping : true },
            ]  },

        { id : 8, name : "User 8", profilePicture : "Null", status : "online", unRead : 0,  isGroup: false,
            messages: [
                { id : 33, isToday : true },
                { id: 1, message: "hi...Good Morning!", time: "09:05", userType: "receiver", isImageMessage : false, isFileMessage : false },
                { id: 2, message: "image", time: "10:30", userType: "sender", isImageMessage : true, isFileMessage : false, imageMessage : [ { image : img4 }, { image : img7 } ] },
                { id: 3, message: "please, save this pictures to your file and give it to me after you have done with editing!", time: "10:31", userType: "sender", isImageMessage : false, isFileMessage : false },
                { id: 4, message: "Yeah, Everything is fine👍", time: "02:50", userType: "receiver", isImageMessage : false, isFileMessage : false },
            ]  },

        { id : 3, name : "Kojin Glick", profilePicture : avatar5, status : "away", unRead : 0, isGroup: false,
            messages: [
                { id : 33, isToday : true },
                { id: 1, message: "hi...Good Morning!", time: "09:05", userType: "sender", isImageMessage : false, isFileMessage : false },
                { id: 2, message: "image", time: "10:30", userType: "receiver", isImageMessage : true, isFileMessage : false, imageMessage : [ { image : img4 }, { image : img7 } ] },
                { id: 3, message: "please, save this pictures to your file and give it to me after you have done with editing!", time: "10:31", userType: "receiver", isImageMessage : false, isFileMessage : false },
                { id: 4, message: "Good Morning😄", time: "02:50", userType: "sender", isImageMessage : false, isFileMessage : false },
            ]  },

        { id : 2, name : "User 10", profilePicture : "Null", status : "online",unRead : 0, isGroup: false,
            messages: [
                { id : 33, isToday : true },
                { id: 1, message: "hello Jordan", time: "08:00", userType: "receiver", isImageMessage : false, isFileMessage : false },
                { id: 2, message: "Good morning", time: "08:00", userType: "sender", isImageMessage : false, isFileMessage : false },
                { id: 3, message: "is everything is fine ?", time: "08:00", userType: "receiver", isImageMessage : false, isFileMessage : false },
                { id: 4, message: "i can help you😊", time: "08:00", userType: "receiver", isImageMessage : false, isFileMessage : false },
                { id: 5, message: "Hi, How are You?", time: "08:00", userType: "receiver", isImageMessage : false, isFileMessage : false },
            ]  },

        { id : 3, name : "User 11", profilePicture : "Null", status : "away",unRead : 0, isGroup: false, 
            messages: [
                { id : 33, isToday : true },
                { id: 1, message: "hi", time: "12:00", userType: "sender", isImageMessage : false, isFileMessage : false },
                { id: 2, message: "Whatcha doin", time: "12:00", userType: "sender", isImageMessage : false, isFileMessage : false },
                { id: 2, message: "dummy code", time: "12:05", userType: "receiver", isImageMessage : true, isFileMessage : false, imageMessage : [ { image : img6 } ] }
            ]  }, 

         { id : 14, name : "User 12", profilePicture : "Null", status : "offline",unRead : 0, isGroup: false, 
            messages: [
                { id : 33, isToday : true },
                { id: 1, message: "hi Allie", time: "12:00", userType: "sender", isImageMessage : false, isFileMessage : false },
                { id: 2, message: "image", time: "12:05", userType: "receiver", isImageMessage : true, isFileMessage : false, imageMessage : [ { image : img6 } ] },
                { id: 3, message: "Wow that's great", time: "12:00", userType: "sender", isImageMessage : false, isFileMessage : false }
            ]  },
    ],
    groups : [
        { gourpId : 1, name : "#BCS Proj 2 Team", profilePicture : "Null", isGroup : true, unRead : 0, desc : "General Group",
            members : [
                { userId : 1, name : "Jordan Bell", profilePicture : avatar1, role : "admin" },
                { userId : 2, name : "Andrew Segre", profilePicture : avatar6, role : "admin" },
                { userId : 3, name : "Kojin Glick", profilePicture : avatar5, role : "admin" },
                { userId : 4, name : "Allie Bauer", profilePicture : avatar7, role : "admin" },
            ]    
        },
        { gourpId : 2, name : "#dummy group1", profilePicture : "Null", isGroup : true, unRead : 23,  desc : "reporing Group here...",
            members : [
                { userId : 5, name : "User 5", profilePicture : "Null", role : null },
                { userId : 6, name : "User 6", profilePicture : "Null", role : null },
                { userId : 7, name : "User 7", profilePicture : "Null", role : null },
                { userId : 8, name : "User 8", profilePicture : "Null", role : null },
                { userId : 9, name : "User 9", profilePicture : "Null", role : null },
                { userId : 10, name : "User 10", profilePicture : "Null", role : null },
            ]    
        },
        { gourpId : 3, name : "#dummy group 2", profilePicture : "Null", isGroup : true, unRead : 0, isNew : true, desc : "designers Group",
            members : [
                { userId : 1, name : "Jordan Bell", profilePicture : avatar1, role : "admin" },
                { userId : 11, name : "User 11", profilePicture : "Null", role : null },
                { userId : 12, name : "User 12", profilePicture : "Null", role : null },
                { userId : 13, name : "User 13", profilePicture : "Null", role : null },
            ]    
        },
        { gourpId : 4, name : "#groupers", profilePicture : "Null", isGroup : true, unRead : 0,  desc : "developers Group",
            members : [
                { userId : 1, name : "Jordan Bell", profilePicture : avatar1, role : "admin" },
                { userId : 16, name : "User 16", profilePicture : "Null", role : null },
                { userId : 8, name : "User 8", profilePicture : "Null", role : null },
                { userId : 4, name : "Paul Haynes", profilePicture : "Null", role : null },
                { userId : 5, name : "Yana sha", profilePicture : "Null", role : null },
                { userId : 6, name : "Steve Walker", profilePicture : "Null", role : null },
            ]    
        },
        { gourpId : 5, name : "#Project-aplha", profilePicture : "Null", isGroup : true, unRead : 0, isNew : true, desc : "project related Group",
            members : [
                { userId : 1, name : "Jordan Bell", profilePicture : avatar1, role : "admin" },
                { userId : 14, name : "User 14", profilePicture : "Null", role : null },
                { userId : 15, name : "User 13", profilePicture : "Null", role : null },
          ]    
        },
        { gourpId : 6, name : "#nothagroup", profilePicture : "Null", isGroup : true, unRead : 0,  desc : "snacks Group",
            members : [
                { userId : 1, name : "Jordan Bell", profilePicture : avatar1, role : "admin" },
                { userId : 17, name : "User 17", profilePicture : "Null", role : null },
                { userId : 18, name : "User 18", profilePicture : "Null", role : null },
            ]    
        },
    ],
    contacts : [
        { id : 1, name : "Jordan Bell" },
        { id : 2, name : "Andrew Segre" },
        { id : 3, name : "Kojin Glick" },
        { id : 4, name : "Allie Bauer" },
        { id : 5, name : "User 5" },
        { id : 6, name : "User 6" },
        { id : 7, name : "User 7" },
        { id : 8, name : "User 8" },
        { id : 9, name : "User 9" },
        { id : 10, name : "User 10" },
        { id : 11, name : "User 11" },
        { id : 12, name : "User 12" },
        { id : 14, name : "User 14" },
        { id : 15, name : "User 15" },
        { id : 16, name : "User 16" },
        { id : 17, name : "User 17" },
        { id : 18, name : "User 18" },
    ]
};

const Chat = (state = INIT_STATE, action) => {
    switch (action.type) {
        case CHAT_USER:
            return { ...state };

        case ACTIVE_USER:
            return { 
            	...state,
                active_user : action.payload };
                
        case FULL_USER:
            return { 
            	...state,
                users : action.payload };

        case ADD_LOGGED_USER:
            const newUser =  action.payload
            return{
                ...state, users : [
                    ...state.users, newUser
                ]
            };

        case CREATE_GROUP :
            const newGroup =  action.payload
            return {
                ...state, groups : [
                    ...state.groups, newGroup
                ]
            }
            
    default: return { ...state };
    }
}

export default Chat;