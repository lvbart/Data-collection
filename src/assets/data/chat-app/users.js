// chat app users
export default [
    {
        id: 2,
        first_name: 'Shubham',
        last_name: 'Raj',
        photo_url: require('Assets/img/user-1.jpg'),
        last_chat_date: '09-29-2017',
        isActive: true,
        last_chat: 'Hi how are you man',
        new_message_count: 5,
        isSelectedChat: true,
        previousChats: [
            {
                message: 'That was amazing party',
                sent: '12:47 PM',
                isAdmin: false
            },
            {
                message: 'Thank you!',
                sent: '12:49 PM',
                isAdmin: true
            },
            {
                message: 'Your idea is very nice and we’ll lookinto this matter sure.',
                sent: '12:51 PM',
                isAdmin: true
            },
            {
                message: 'Your Welcome boss!',
                sent: '12:55 PM',
                isAdmin: false
            }
        ]
    },
    {
        id: 3,
        first_name: 'Sukhpal',
        last_name: 'Singh',
        photo_url: require('Assets/img/user-2.jpg'),
        last_chat_date: '09-30-2017',
        isActive: true,
        last_chat: 'This is last message for you.',
        new_message_count: 10,
        isSelectedChat: false,
        previousChats: [
            {
                message: 'That was amazing party',
                sent: '12:47 PM',
                isAdmin: false
            },
            {
                message: 'Thank you!',
                sent: '12:49 PM',
                isAdmin: true
            },
            {
                message: 'Your idea is very nice and we’ll lookinto this matter sure.',
                sent: '12:51 PM',
                isAdmin: true
            },
            {
                message: 'Your Welcome boss!',
                sent: '12:55 PM',
                isAdmin: false
            }
        ]
    },
    {
        id: 4,
        first_name: 'Amandeep',
        last_name: 'Kaur',
        photo_url: require('Assets/img/user-3.jpg'),
        last_chat_date: '08-30-2017',
        isActive: false,
        last_chat: 'That was amazing party',
        new_message_count: 0,
        isSelectedChat: false,
        previousChats: [
            {
                message: 'That was amazing party',
                sent: '12:47 PM',
                isAdmin: false
            },
            {
                message: 'Thank you!',
                sent: '12:49 PM',
                isAdmin: true
            },
            {
                message: 'Your idea is very nice and we’ll lookinto this matter sure.',
                sent: '12:51 PM',
                isAdmin: true
            },
            {
                message: 'Your Welcome boss!',
                sent: '12:55 PM',
                isAdmin: false
            }
        ]
    },
    {
        id: 5,
        first_name: 'John',
        last_name: 'Doe',
        photo_url: require('Assets/img/user-4.jpg'),
        last_chat_date: '08-30-2017',
        isActive: false,
        last_chat: 'Your idea is very nice and we’ll lookinto this matter sure.',
        new_message_count: 0,
        isSelectedChat: false,
        previousChats: [
            {
                message: 'Hi how are you man',
                sent: '12:47 PM',
                isAdmin: false
            }
        ]
    },
    {
        id: 6,
        first_name: 'Smith',
        last_name: 'Brett',
        photo_url: require('Assets/img/user-5.jpg'),
        last_chat_date: '08-30-2017',
        isActive: false,
        last_chat: 'Thank you!',
        new_message_count: 0,
        isSelectedChat: false,
        previousChats: [
            {
                message: 'That was amazing party',
                sent: '12:47 PM',
                isAdmin: false
            },
            {
                message: 'Thank you!',
                sent: '12:49 PM',
                isAdmin: true
            },
            {
                message: 'Your idea is very nice and we’ll lookinto this matter sure.',
                sent: '12:51 PM',
                isAdmin: true
            },
            {
                message: 'Your Welcome boss!',
                sent: '12:55 PM',
                isAdmin: false
            }
        ]
    }
]