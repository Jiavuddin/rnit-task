import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DynamicForm from './components/DynamicForm/DynamicForm';
import Details from './components/Details/Details';
import './App.css';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<DynamicForm />} />
                    <Route path="/:id" element={<Details />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;