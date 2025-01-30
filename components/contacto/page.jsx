import { AuthContext } from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";
import { useState, useContext } from "react";

export default function Contacto() {
  const { registerUser } = useContext(AuthContext);
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    registerUser(form);
    router.push("/dashboard");
  };

  return (
    <form onSubmit={submitForm}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
}
