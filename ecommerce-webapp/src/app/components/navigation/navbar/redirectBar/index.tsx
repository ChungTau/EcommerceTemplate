import LinkItem from "./LinkItem";

const RedirectBar =() =>{
    return(
            <ul className="flex gap-x-6 text-white w-full h-8 justify-center align-middle">
            <LinkItem href="/about">About Us</LinkItem>
            <LinkItem href="/services">Services</LinkItem>
            <LinkItem href="/contacts">Contacts</LinkItem>
          </ul>
        
    );
}

export default RedirectBar;