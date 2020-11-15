import React from "react";
import "./Sidebar.css";
import { DonutLarge, Chat, MoreVert, SearchOutlined } from "@material-ui/icons";
import { IconButton, Avatar } from "@material-ui/core";
import SidebarChat from "../SidebarChat/SidebarChat";

const Sidebar = () => {
	return (
		<div className="sidebar">
			<div className="sidebar_header">
				<Avatar />
				<div className="sidebar_headerRight">
					<IconButton>
						<DonutLarge />
					</IconButton>
					<IconButton>
						<Chat />
					</IconButton>
					<IconButton>
						<MoreVert />
					</IconButton>
				</div>
				<div className="sidebar_headerLeft"></div>
			</div>
			<div className="sidebar_search">
				<div className="sidebar_searchContainer">
					<SearchOutlined />
					<input type="text" placeholder="Search or Start new Chat" />
				</div>
			</div>

			<div className="sidebar_chats">
				<SidebarChat />
			</div>
		</div>
	);
};

export default Sidebar;
