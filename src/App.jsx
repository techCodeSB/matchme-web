import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Protected from './components/Protected';
import Profile from './pages/Profile';
import Psychometric from './pages/Psychometric';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';


const App = () => {
	const token = Cookies.get("mm-token");
	const [psychometricDone, setPsychometricDone] = useState(false);


	useEffect(() => {
		(async () => {
			try {
				if(!token) return;
				
				const URL = `${import.meta.env.VITE_API_URL}/users/get`;
				const req = await fetch(URL, {
					method: 'POST',
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({ token, fieldsArr: ['psychometric_test'] })
				})
				const res = await req.json();
				if (req.status !== 200) {
					if (token) alert(res.err);
				}

				setPsychometricDone(res?.psychometric_test)

			} catch (err) {
				alert("Something went wrong");
			}
		})()
	}, [])


	return (
		<Routes>
			<Route path='/login' element={<Login />} />
			<Route path='/' element={<Protected />}>
				<Route index element={<Profile />} />
				<Route path='profile' element={<Profile />} />
				<Route path='edit-profile' element={<Register />} />
				{!psychometricDone && <Route path='psychometric-test' element={<Psychometric />} />}
			</Route>
		</Routes>
	)
}

export default App