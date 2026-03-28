import { FiSearch } from "react-icons/fi";
import toast from "react-hot-toast";

import style from "./Form.module.css";

interface FormProps {
  onSubmit: (query: string) => void; 
  
}
export default function Form({ onSubmit }): FormProps {
  const handelSubmit = (formdate: FormData) => {
    const query = formdate.get("search") as string;
    onSubmit
}
  return (
    <form className={style.form} action={}>
      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        autoFocus
      />

      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>
    </form>
  );
}
