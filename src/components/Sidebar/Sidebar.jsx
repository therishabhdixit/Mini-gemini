import React, { useState } from 'react';
import './Sidebar.css';
import { assets } from '../../assets/assets';
import { useContext } from 'react';
import { Context } from '../../context/Context';

const Sidebar = () => {
  const [extened, setExtended] = useState(false);
  const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
		setRecentPrompt(prompt);
		await onSent(prompt);
	};

  return (
    <div className="sidebar">
      <div className="top">
        <img onClick={() => setExtended(prev=>!prev)} className="menu" src={assets.menu_icon} alt="" />
        <div className="new-chat" onClick={()=> newChat()}>
          <img src={assets.plus_icon} alt="" />
          {extened ? <p>New Chat</p> : null}
        </div>
        {extened ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompts.map((item,index)=>{
                return (
                <div onClick={() => loadPrompt(item)} className="recent-entry">
                  <img src={assets.message_icon} alt="" />
                  <p>{item.slice(0,18)}</p>
                </div>
                )
            })}
          </div>
        ) : null}
      </div>

      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="" />
          {extened ? <p>Help</p> : null } 
        </div>

        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          {extened ? <p>Activity</p> : null } 
        </div>

        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          {extened ? <p>Settings</p> : null } 
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
