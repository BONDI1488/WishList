import React, {useState} from 'react';

const SignIn = () => {
    const [formData, setFormData] = useState({
        nickname: '',
        password: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isFormFilled = Object.values(formData).every(value => value !== '');
        if (isFormFilled) {
            console.log(formData);
        } else {
            alert("Please fill out all fields!");
        }};

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-gray-100 rounded shadow mt-28">
            <label className="block mb-2">
                Nickname:
                <input type="text" name="nickname" value={formData.nickname} onChange={handleChange}
                       className="block w-full mt-1 p-2 border rounded-md"/>
            </label>
            <label className="block mb-2">
                Password:
                <input type="password" name="password" value={formData.password} onChange={handleChange}
                       className="block w-full mt-1 p-2 border rounded-md"/>
            </label>
            <button type="submit" className="block w-full p-2 mt-4 bg-blue-500 text-white rounded-md">Register</button>
        </form>
    );
};

export default SignIn;