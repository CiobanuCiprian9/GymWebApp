import React, { useState, useEffect } from "react";
import "../Styles/ExercisesPage.css";
import { fetchExercises, fetchCategories } from '../Api/ExerciseDBapi';

function ExercisesPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [exercises, setExercises] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const getCategories = async () => {
            try {
                const categoryData = await fetchCategories();
                setCategories(categoryData);
            } catch (error) {
                console.error('Eroare la încărcarea categoriilor:', error);
            }
        };

        getCategories();
    }, []);

    const handleSearch = async () => {
        if (selectedCategory || searchTerm) {
            try {
                const fetchedExercises = await fetchExercises(selectedCategory)
                    // ? await fetchExercises(selectedCategory)
                    // : await fetchExercises("all");

                const filteredExercises = fetchedExercises.filter((exercise) =>
                    exercise.name.toLowerCase().includes(searchTerm.toLowerCase())
                );
                setExercises(filteredExercises);
            } catch (error) {
                console.error('Eroare la preluarea exercițiilor:', error);
            }
        }
    };

    return (
        <div className="exercises-container">
            <h1>Awesome exercises you should know!</h1>
            <div className="search-section">
                <select
                    className="category-select"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    <option value="">Select Muscle</option>
                    {categories.length > 0 ? (
                        categories.map((category, index) => (
                            <option key={index} value={category}>
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </option>
                        ))
                    ) : (
                        <option disabled>Loading categories...</option>
                    )}
                </select>
                <input
                    className="search-input"
                    type="text"
                    placeholder="Search movement..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="search-button" onClick={handleSearch}>
                    Search
                </button>
            </div>

            <div className="exercise-list">
                {exercises.length > 0 ? (
                    exercises.map((exercise, index) => (
                        <div key={index} className="exercise-item">
                            <p>Muscle Group: {exercise.bodyPart}</p>
                            <h3>{exercise.name}</h3>
                            <img src={exercise.gifUrl} alt={exercise.name} />
                        </div>
                    ))
                ) : (
                    <p>No exercises found. Please search.</p>
                )}
            </div>
        </div>
    );
}

export default ExercisesPage;
