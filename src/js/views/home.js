import React, {useContext, useEffect} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { ContactCard } from "../component/contactCard";
import {Context} from '../store/appContext'
import { Modal } from "../component/Modal";


export const Home = () => {
	
	const {store, actions}=useContext(Context)
	const {contacts}=store
	useEffect(()=>{
		actions.getAgenda()
	},[])

return (
	<div className="d-flex flex-column align-items-center justify-content-center">
		<h1>Contact List</h1>
		<div className="list-group contact-list">
		{contacts.map((contact, index)=>
		<div key={index}>
		<ContactCard
		name={contact.full_name}
		address={contact.address}
		phone={contact.phone}
		email={contact.email}
		img={rigoImage}
		onDelete={()=>actions.delContact(contact.id)}
		index={contact.id}
		/>
		<Modal index={contact.id}></Modal>
		</div>
		)}
</div>
		
	
	</div>
)
		}
