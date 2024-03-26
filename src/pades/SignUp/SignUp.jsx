import React, {useState} from 'react';
import countriesData from './countries.json';

function RegistrationForm() {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        nickname: '',
        email: '',
        password: '',
        phone: '',
        birthday: '',
        gender: '',
        country: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isFormFilled = Object.values(formData).every(value => value !== '');
        if (isFormFilled) {
            console.log(formData);
        } else {
            alert("Please fill out all fields!");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-gray-100 rounded shadow mt-28">
            <label className="block mb-2">
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange}
                       className="block w-full mt-1 p-2 border rounded-md"/>
            </label>
            <label className="block mb-2">
                Surname:
                <input type="text" name="surname" value={formData.surname} onChange={handleChange}
                       className="block w-full mt-1 p-2 border rounded-md"/>
            </label>
            <label className="block mb-2">
                Nickname:
                <input type="text" name="nickname" value={formData.nickname} onChange={handleChange}
                       className="block w-full mt-1 p-2 border rounded-md"/>
            </label>
            <label className="block mb-2">
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange}
                       className="block w-full mt-1 p-2 border rounded-md"/>
            </label>
            <label className="block mb-2">
                Password:
                <input type="password" name="password" value={formData.password} onChange={handleChange}
                       className="block w-full mt-1 p-2 border rounded-md"/>
            </label>
            <label className="block mb-2">
                Phone:
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
                       className="block w-full mt-1 p-2 border rounded-md"/>
            </label>
            <label className="block mb-2">
                Birthday:
                <input type="date" name="birthday" value={formData.birthday} onChange={handleChange}
                       className="block w-full mt-1 p-2 border rounded-md"/>
            </label>
            <label className="block mb-2">
                Gender:
                <select name="gender" value={formData.gender} onChange={handleChange}
                        className="block w-full mt-1 p-2 border rounded-md">
                    <option value="" disabled>Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </label>
            <label className="block mb-2">
                Country:
                <select name="country" value={formData.country} onChange={handleChange}
                        className="block w-full mt-1 p-2 border rounded-md">
                    <option value="" disabled>Select a country</option>
                    {countriesData.map(country => (
                        <option key={country.code} value={country.code}>{country.name}</option>
                    ))}
                </select>
            </label>
            <button type="submit" className="block w-full p-2 mt-4 bg-blue-500 text-white rounded-md">Register</button>
        </form>
    );
}

export default RegistrationForm;
