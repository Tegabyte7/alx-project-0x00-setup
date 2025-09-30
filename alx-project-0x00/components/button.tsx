import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, style }) => {
    return (
        <div className="">
            <button className={style}>{title}</button>
        </div >
    )
}
export default Button;