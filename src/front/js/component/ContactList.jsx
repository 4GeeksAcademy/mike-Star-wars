
import { useContext } from "react";
import { Context } from "../store/appContext.js";

export const ContactList = () => {

    const { store , actions } = useContext (Context);

    return (
        <div className="container bg-dark mb-3">
            <div class="navbar navbar-dark bg-dark">
                <h1 class="text-light pt-4">Contacts</h1><a href="/add-contact"><button class="btn btn-secondary">Add Contact</button></a>
            </div>
            



            </div>
                )


}