import { Avatar, IconButton } from "@material-ui/core";
import {
	AttachFile,
	MoreVert,
	SearchOutlined,
	InsertEmoticon,
	Mic,
} from "@material-ui/icons";
import React, { useState } from "react";
import axios from "../../axios";
import "./Chats.css";

const Chats = ({ messages }) => {
	const [input, setInput] = useState("");
	const sendMessage = async (e) => {
		e.preventDefault();

		await axios.post("/messages/new", {
			message: input,
			name: "User",
			timestamp: "Just Now",
			received: "False",
		});

		setInput("");
	};
	return (
		<div className="chat">
			<div className="chat_header">
				<Avatar />
				<div className="chat_headerInfo">
					<h3>Room name</h3>
					<p>Last seen at....</p>
				</div>
				<div className="chat_headerRight">
					<IconButton>
						<SearchOutlined />
					</IconButton>
					<IconButton>
						<AttachFile />
					</IconButton>
					<IconButton>
						<MoreVert />
					</IconButton>
				</div>
			</div>

			<div className="chat_body">
				{messages.map((message) => (
					<p className={`chat_message ${message.received && "chat_reciever"}`}>
						<span className="chat_name">{message.name}</span>
						{message.message}
						<span className="chat_timestamp">{message.timestamp}</span>
					</p>
				))}
			</div>

			<div className="chat_footer">
				<InsertEmoticon />
				<form action="">
					<input
						value={input}
						onChange={(e) => setInput(e.target.value)}
						type="text"
						placeholder="Type a message"
					/>
					<button onClick={sendMessage} type="submit">
						Send a message
					</button>
				</form>
				<Mic />
			</div>
		</div>
	);
};

export default Chats;
