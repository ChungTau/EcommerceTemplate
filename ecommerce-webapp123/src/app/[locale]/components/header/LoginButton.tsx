import {FaUser} from "react-icons/fa";
import {ButtonTheme} from "../ButtonTheme";

export function LoginButton() {
    return (
        <ButtonTheme>
            <button>
                <FaUser/>
            </button>
        </ButtonTheme>
    );
}