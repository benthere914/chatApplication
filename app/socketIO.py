from flask_socketio import SocketIO, emit, leave_room, join_room
import os
# create your SocketIO instance
socketio = SocketIO()

if os.environ.get('FLASK_ENV') == 'production':
    origins = [
        'http://actual-app-url.herokuapp.com',
        'https://actual-app-url.herokuapp.com'
    ]
else:
    origins = "*"
# create your SocketIO instance
socketio = SocketIO(cors_allowed_origins=origins)


@socketio.on("chat")
def send_chat_out(chatData):
    room = chatData['roomId']
    print(chatData)
    new_message = {'authorId': chatData['authorId'], 'name': chatData['name'], "message": chatData['message']}
    emit("chat", new_message, broadCast=True, include_self=True, room=room)

rooms = {}
@socketio.on("joinRoom")
def join_current_room(room):
    print("JOINING ******************", room)
    join_room(room)
    if (room in rooms):
        rooms[room] += 1
    else:
        rooms[room] = 1
    emit('updateRoomNumber', rooms[room], broadcast=True, include_self=True, room=room)

@socketio.on("leaveRoom")
def leave_current_room(room):
    print("LEAVING ******************", room)
    leave_room(room)
    rooms[room] -= 1
    emit('updateRoomNumber', rooms[room], broadcast=True, include_self=True, room=room)
