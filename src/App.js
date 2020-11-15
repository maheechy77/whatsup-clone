import { useEffect, useState } from "react";
import "./App.css";
import Pusher from "pusher-js";
import Chats from "./components/Chats/Chats";
import Sidebar from "./components/Sidebar/Sidebar";
import axios from "./axios";

function App() {
	const [messages, setMessages] = useState([]);
	useEffect(() => {
		axios
			.get("/messages/sync")
			.then((res) => {
				setMessages(res.data);
			})
			.catch((error) => alert(error.message));
	}, []);

	useEffect(() => {
		const pusher = new Pusher("ff80666ecdd75d392af8", {
			cluster: "ap2",
		});

		const channel = pusher.subscribe("messages");
		channel.bind("inserted", (data) => {
			alert(JSON.stringify(data));
			setMessages([...messages, data]);
		});

		return () => {
			channel.unbind_all();
			channel.unsubscribe();
		};
	}, [messages]);

	return (
		<div className="app">
			<div className="app_body">
				<Sidebar />
				<Chats messages={messages} />
			</div>
		</div>
	);
}

export default App;
